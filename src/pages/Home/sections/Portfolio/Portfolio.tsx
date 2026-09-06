import { Link } from 'react-router-dom'
import { Section } from '../../../../components/Section/Section'
import { Card } from '../../../../components/Card/Card'
import { formations } from '../../../../data/memories'
import archifCover from '../../../../assets/images/archif-cover.jpg'
import styles from './Portfolio.module.css'

const visibleFormations = formations.filter((f) => f.clickable)

const archifItem = {
  id: 'archif',
  title: 'Projet ARCHIF',
  category: 'Archivage',
  image: archifCover,
  description: 'Solution de gestion et d\'archivage numérique des documents institutionnels',
}

export function Portfolio() {
  return (
    <Section id="portfolio" title="Nos réalisations" subtitle="Formations et projets dont nous sommes fiers" variant="glass">
      <div className={styles.grid}>
        {visibleFormations.map((formation, i) => (
          <div key={formation.slug} data-reveal style={{ transitionDelay: `${i * 0.08}s` }}>
            <Card variant="default" className={styles.imageCard}>
              <Link to={`/memories/${formation.slug}`} className={styles.link}>
                <div className={styles.imageWrap}>
                  {formation.images[0] ? (
                    <img className={styles.image} src={formation.images[0]} alt={formation.title} loading="lazy" />
                  ) : (
                    <div className={styles.placeholder}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    </div>
                  )}
                  <span className={styles.category}>Formation</span>
                </div>
                <h3 className={styles.cardTitle}>{formation.title}</h3>
              </Link>
            </Card>
          </div>
        ))}

        <div data-reveal style={{ transitionDelay: `${visibleFormations.length * 0.08}s` }}>
          <Card variant="default" className={styles.imageCard}>
            <div className={styles.imageWrap}>
              <img className={styles.image} src={archifItem.image} alt={archifItem.title} loading="lazy" />
              <span className={styles.category}>{archifItem.category}</span>
            </div>
            <h3 className={styles.cardTitle}>{archifItem.title}</h3>
          </Card>
        </div>
      </div>
    </Section>
  )
}
