import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Section } from '../../components/Section/Section'
import { OrderForm } from '../../components/OrderForm/OrderForm'
import { formations } from '../../data/memories'
import type { Formation } from '../../data/memories'
import styles from './Formations.module.css'

function PastFormationCard({ formation, index }: { formation: Formation; index: number }) {
  const cover = formation.images[0]
  const count = formation.images.length

  const inner = (
    <>
      <div className={styles.coverWrap}>
        {cover ? (
          <img className={styles.cover} src={cover} alt={formation.title} loading="lazy" />
        ) : (
          <div className={styles.coverPlaceholder}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
        )}
        <div className={styles.overlay}>
          <span className={styles.photoCount}>{count} photo{count > 1 ? 's' : ''}</span>
        </div>
      </div>
      <div className={styles.pastCardBody}>
        {formation.report && (
          <span className={styles.meta}>
            {formation.report.client} · {formation.report.periode}
          </span>
        )}
        <h3 className={styles.pastCardTitle}>{formation.title}</h3>
        {formation.clickable && (
          <span className={styles.viewLink}>
            {formation.report ? 'Lire le compte rendu →' : 'Voir les photos →'}
          </span>
        )}
      </div>
    </>
  )

  return (
    <div
      className={`${styles.pastCard} ${index === 0 ? styles.featured : ''}`}
      data-reveal
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      {formation.clickable ? (
        <Link to={`/memories/${formation.slug}`} className={styles.pastCardLink}>
          {inner}
        </Link>
      ) : (
        <div className={styles.pastCardStatic}>{inner}</div>
      )}
    </div>
  )
}

const pastFormations = formations.filter((f) => f.images.length > 0)

export function Formations() {
  return (
    <>
      <Helmet>
        <title>Excelcis Group — Formations</title>
        <meta name="description" content="Nos formations réalisées et à venir — Excelcis Group" />
      </Helmet>

      <Section
        title="Nos formations"
        subtitle="Des séminaires de haut niveau dispensés auprès d'institutions publiques et privées"
      >
        <div className={styles.statsRow} data-reveal>
          <div className={styles.stat}>
            <span className={styles.statNum}>{pastFormations.length}+</span>
            <span className={styles.statLabel}>Séminaires réalisés</span>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.stat}>
            <span className={styles.statNum}>100+</span>
            <span className={styles.statLabel}>Participants formés</span>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.stat}>
            <span className={styles.statNum}>Sur mesure</span>
            <span className={styles.statLabel}>Programmes adaptés</span>
          </div>
        </div>

        <h2 className={styles.sectionTitle} data-reveal>Formations réalisées</h2>
        <div className={styles.pastGrid}>
          {pastFormations.map((f, i) => (
            <PastFormationCard key={f.slug} formation={f} index={i} />
          ))}
        </div>
      </Section>

      <Section
        id="commander"
        title="Commander une formation"
        subtitle="Organisez un séminaire sur mesure pour votre équipe ou institution"
        variant="alt"
      >
        <OrderForm mode="order" />
      </Section>
    </>
  )
}
