import { formationReports } from './formationReports'
import type { FormationReport } from './formationReports'

export interface Formation {
  slug: string
  title: string
  images: string[]
  clickable: boolean
  report?: FormationReport
}

const STATIC_ENTRIES = new Set(['Formateurs et Hotesses'])

const modules = import.meta.glob<string>('../memories/**/*.{jpeg,jpg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

function slugify(title: string): string {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function groupByFolder(): Formation[] {
  const map = new Map<string, string[]>()

  for (const path of Object.keys(modules)) {
    const parts = path.split('/')
    const folderIndex = parts.findIndex((p) => p === 'memories')
    const folder = parts[folderIndex + 1]
    if (!folder) continue
    const list = map.get(folder) ?? []
    list.push(modules[path])
    map.set(folder, list)
  }

  return [...map.entries()]
    .map(([folder, images]) => {
      const folderTitle = folder.trim()
      const slug = slugify(folderTitle)
      const report = formationReports[slug]
      return {
        title: report?.title ?? folderTitle,
        slug,
        images: [...images].sort((a, b) => a.localeCompare(b, 'fr', { numeric: true })),
        clickable: !STATIC_ENTRIES.has(folderTitle),
        report,
      }
    })
    .sort((a, b) => {
      if (a.report && b.report) return b.report.date.localeCompare(a.report.date)
      if (a.report) return -1
      if (b.report) return 1
      return a.title.localeCompare(b.title, 'fr')
    })
}

export const formations: Formation[] = groupByFolder()

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug)
}
