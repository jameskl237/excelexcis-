import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Section } from '../../components/Section/Section'
import { Card } from '../../components/Card/Card'
import { formations } from '../../data/memories'
import type { Formation } from '../../data/memories'
import styles from './Memories.module.css'

function FormationCard({ formation, index }: { formation: Formation; index: number }) {
  const cover = formation.images[0]

  const body = (
    <>
      <div className={styles.imageWrap}>
        {cover ? (
          <img className={styles.image} src={cover} alt={formation.title} loading="lazy" />
        ) : (
          <div className={styles.placeholder} />
        )}
      </div>
      <h3 className={styles.cardTitle}>{formation.title}</h3>
    </>
  )

  return (
    <div data-reveal style={{ transitionDelay: `${index * 0.08}s` }}>
      {formation.clickable ? (
        <Card variant="glass" className={styles.imageCard}>
          <Link to={`/memories/${formation.slug}`} className={styles.link}>
            {body}
          </Link>
        </Card>
      ) : (
        <Card variant="glass" className={styles.imageCard}>
          {body}
        </Card>
      )}
    </div>
  )
}

export function Memories() {
  return (
    <>
      <Helmet>
        <title>excelexcis — Memories</title>
        <meta name="description" content="Les souvenirs de nos formations passées, en images" />
      </Helmet>
      <Section title="Memories" subtitle="Nos formations passées, en images">
        <div className={styles.grid}>
          {formations.map((formation, i) => (
            <FormationCard key={formation.slug} formation={formation} index={i} />
          ))}
        </div>
      </Section>
    </>
  )
}
