import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Section } from '../../components/Section/Section'
import { Card } from '../../components/Card/Card'
import { Button } from '../../components/Button/Button'
import { upcomingFormations } from '../../data/formations'
import type { UpcomingFormation } from '../../data/formations'
import styles from './Formations.module.css'

function FormationCard({ formation, index }: { formation: UpcomingFormation; index: number }) {
  const isLimited = formation.placesLeft < 10

  return (
    <div data-reveal style={{ transitionDelay: `${index * 0.08}s` }}>
      <Card variant="glass" className={styles.card}>
        <Link to={`/formations/${formation.slug}`} className={styles.link}>
          <div className={styles.cardHeader}>
            <span className={styles.date}>{formation.date}</span>
            {isLimited && <span className={styles.badge}>Places limitées</span>}
          </div>
          <h3 className={styles.cardTitle}>{formation.title}</h3>
          <p className={styles.cardDesc}>{formation.description}</p>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {formation.duration}
            </span>
            <span className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              {formation.placesLeft}/{formation.places} places
            </span>
          </div>
          <div className={styles.themes}>
            {formation.themes.map((t) => (
              <span key={t} className={styles.theme}>{t}</span>
            ))}
          </div>
        </Link>
        <div className={styles.cardActions}>
          <Button as="link" to={`/formations/${formation.slug}`} variant="primary" size="sm">
            Participer
          </Button>
        </div>
      </Card>
    </div>
  )
}

export function Formations() {
  return (
    <>
      <Helmet>
        <title>excelexcis — Formations</title>
        <meta name="description" content="Découvrez nos formations à venir et inscrivez-vous" />
      </Helmet>
      <Section
        title="Formations à venir"
        subtitle="Inscrivez-vous à nos prochaines sessions de formation"
      >
        <div className={styles.grid}>
          {upcomingFormations.map((formation, i) => (
            <FormationCard key={formation.slug} formation={formation} index={i} />
          ))}
        </div>
      </Section>
    </>
  )
}
