import { Section } from '../../../../components/Section/Section'
import { Card } from '../../../../components/Card/Card'
import type { PortfolioItem } from '../../../../types'
import styles from './Portfolio.module.css'

const items: PortfolioItem[] = [
  { id: '1', title: 'Projet Alpha', category: 'Web', image: '' },
  { id: '2', title: 'Projet Beta', category: 'Mobile', image: '' },
  { id: '3', title: 'Projet Gamma', category: 'Design', image: '' },
  { id: '4', title: 'Projet Delta', category: 'Formation', image: '' },
]

export function Portfolio() {
  return (
    <Section id="portfolio" title="Nos réalisations" subtitle="Quelques projets dont nous sommes fiers" variant="glass">
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={item.id} data-reveal style={{ transitionDelay: `${i * 0.08}s` }}>
            <Card variant="default" className={styles.imageCard}>
              <div className={styles.imageWrap}>
                <div className={styles.placeholder}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                <span className={styles.category}>{item.category}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  )
}
