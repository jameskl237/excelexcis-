import { Helmet } from 'react-helmet-async'
import { Section } from '../../components/Section/Section'
import { Card } from '../../components/Card/Card'
import type { IconComponent } from '../../components/Icons'
import { Monitor, Palette, BarChart, Book, Settings } from '../../components/Icons'
import type { Service } from '../../types'
import styles from './Services.module.css'

const iconMap: Record<string, IconComponent> = {
  monitor: Monitor,
  palette: Palette,
  chart: BarChart,
  book: Book,
  settings: Settings,
}

const services: Service[] = [
  {
    id: 'dev',
    title: 'Développement web',
    description: 'Sites vitrines, applications métier, e-commerce — des solutions robustes et modernes.',
    icon: 'monitor',
  },
  {
    id: 'design',
    title: 'Design UX/UI',
    description: 'Interfaces intuitives et engageantes qui transforment vos visiteurs en clients.',
    icon: 'palette',
  },
  {
    id: 'consulting',
    title: 'Consulting tech',
    description: 'Accompagnement stratégique pour vos choix techniques et architecturaux.',
    icon: 'chart',
  },
  {
    id: 'formations',
    title: 'Formations',
    description: 'Archivage, technologies, administration — des formations sur mesure adaptées à tous les secteurs.',
    icon: 'book',
  },
  {
    id: 'support',
    title: 'Maintenance & Support',
    description: 'Suivi continu, mises à jour et support réactif pour vos projets.',
    icon: 'settings',
  },
]

export function Services() {
  return (
    <>
      <Helmet>
        <title>excelexcis — Services</title>
        <meta name="description" content="Découvrez nos services de développement web, design UX/UI, formations, consulting et support" />
      </Helmet>
      <Section title="Nos services" subtitle="Des solutions adaptées à vos besoins">
        <div className={styles.grid}>
          {services.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <div key={s.id} data-reveal style={{ transitionDelay: `${i * 0.08}s` }}>
                <Card variant="glass">
                  <div className={styles.iconWrap}>
                    <span className={styles.icon}>{Icon && <Icon />}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.description}</p>
                </Card>
              </div>
            )
          })}
        </div>
      </Section>
    </>
  )
}
