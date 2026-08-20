import { Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Section } from '../../components/Section/Section'
import { Button } from '../../components/Button/Button'
import { OrderForm } from '../../components/OrderForm/OrderForm'
import { getUpcomingFormationBySlug } from '../../data/formations'
import styles from './FormationDetail.module.css'

export function FormationDetail() {
  const { slug } = useParams<{ slug: string }>()
  const formation = slug ? getUpcomingFormationBySlug(slug) : undefined

  if (!formation) {
    return <Navigate to="/formations" replace />
  }

  const isLimited = formation.placesLeft < 10

  return (
    <>
      <Helmet>
        <title>{`excelexcis — ${formation.title}`}</title>
        <meta name="description" content={formation.description} />
      </Helmet>
      <Section title={formation.title} subtitle="Détails de la formation">
        <div className={styles.top}>
          <Button as="link" to="/formations" variant="outline" size="sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Toutes les formations
          </Button>
        </div>

        <div className={styles.content}>
          <div className={styles.infoGrid} data-reveal>
            <div className={styles.infoCard}>
              <span className={styles.infoLabel}>Date</span>
              <span className={styles.infoValue}>{formation.date}</span>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoLabel}>Durée</span>
              <span className={styles.infoValue}>{formation.duration}</span>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoLabel}>Places</span>
              <span className={styles.infoValue}>
                {formation.placesLeft}/{formation.places}
                {isLimited && <span className={styles.limited}> — Places limitées</span>}
              </span>
            </div>
          </div>

          <div className={styles.themesRow} data-reveal>
            {formation.themes.map((t) => (
              <span key={t} className={styles.theme}>{t}</span>
            ))}
          </div>

          <p className={styles.description} data-reveal>
            {formation.longDescription}
          </p>

          <OrderForm mode="participate" formationTitle={formation.title} />
        </div>
      </Section>
    </>
  )
}
