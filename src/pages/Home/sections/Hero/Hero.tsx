import { useEffect, useState } from 'react'
import { Button } from '../../../../components/Button/Button'
import { formations } from '../../../../data/memories'
import styles from './Hero.module.css'

const slides = formations.flatMap((f) => f.images).slice(0, 10)

export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.slideshow} aria-hidden="true">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`${styles.slide} ${i === active ? styles.slideActive : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className={styles.scrim} />
      </div>

      <div className={styles.inner}>
        <div className={styles.badge}>Expertise multi-panoramique</div>

        <h1 className={`${styles.title} rv`}>
          Bienvenue chez{' '}
          <span className="gradient-text">excelcis group</span>
        </h1>

        <p className={`${styles.description} rv rv-d1`}>
          Entreprise multi-panoramique, nous intervenons dans tous les domaines
          — de la technologie à l'administration — avec des solutions sur mesure
          adaptées à chaque besoin.
        </p>

        <div className={`${styles.actions} rv rv-d2`}>
          <Button as="link" to="/services" variant="primary" size="lg">
            Découvrir nos services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Button>
          <Button as="link" to="/contact" variant="secondary" size="lg" className={styles.secondaryBtn}>
            Nous contacter
          </Button>
        </div>
      </div>

      <div className={styles.cue}>
        <span>Découvrir</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </section>
  )
}
