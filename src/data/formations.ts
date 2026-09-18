export interface UpcomingFormation {
  slug: string
  title: string
  description: string
  longDescription: string
  date: string
  duration: string
  places: number
  placesLeft: number
  themes: string[]
}

export const upcomingFormations: UpcomingFormation[] = []

export function getUpcomingFormationBySlug(slug: string): UpcomingFormation | undefined {
  return upcomingFormations.find((f) => f.slug === slug)
}
