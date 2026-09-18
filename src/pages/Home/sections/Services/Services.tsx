import { Section } from '../../../../components/Section/Section'
import { Card } from '../../../../components/Card/Card'
import type { IconComponent } from '../../../../components/Icons'
import { Code, Brain, Database, Workflow, Search, Book, GraduationCap } from '../../../../components/Icons'
import type { Service } from '../../../../types'
import styles from './Services.module.css'

const iconMap: Record<string, IconComponent> = {
  code: Code,
  brain: Brain,
  database: Database,
  workflow: Workflow,
  search: Search,
  book: Book,
  cap: GraduationCap,
}

const services: Service[] = [
  {
    id: 'sur-mesure',
    title: 'Solutions web & logicielles sur mesure',
    description: 'Applications métier, plateformes web et logiciels conçus pour les besoins spécifiques de votre entreprise.',
    icon: 'code',
  },
  {
    id: 'ia',
    title: 'Intelligence artificielle',
    description: 'IA et agents intelligents intégrés à vos outils pour automatiser et accélérer vos décisions.',
    icon: 'brain',
  },
  {
    id: 'si',
    title: "Systèmes d'information",
    description: 'Gestion électronique des documents (GED) et ERP pour structurer et fiabiliser votre information.',
    icon: 'database',
  },
  {
    id: 'automatisation',
    title: 'Automatisation',
    description: 'Automatisation de vos processus métier pour gagner en efficacité et réduire les tâches répétitives.',
    icon: 'workflow',
  },
  {
    id: 'archivage',
    title: 'Archivage',
    description: 'Archivage physique et numérique par des archivistes assermentées, de la collecte à la conservation.',
    icon: 'book',
  },
  {
    id: 'conseil',
    title: 'Conseil digital & audit',
    description: 'Diagnostic et accompagnement stratégique pour piloter votre transformation numérique.',
    icon: 'search',
  },
  {
    id: 'formations',
    title: 'Formation professionnelle',
    description: 'Formations sur mesure en archivage, technologies et administration, adaptées à tous les secteurs.',
    icon: 'cap',
  },
]

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Nos expertises"
      title="Nos services"
      subtitle="Une équipe multi-panoramique au service des entreprises et des institutions"
      variant="alt"
    >
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
  )
}
