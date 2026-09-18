import { Button } from '../../../../components/Button/Button'
import archifCover from '../../../../assets/images/archif-cover.jpg'
import styles from './Archif.module.css'

const features = [
  'Gestion de courrier',
  'Répertoire intelligent',
  'Recherche avancée',
  'Transfert sécurisé',
  'Dépôt à long terme',
]

export function Archif() {
  return (
    <section id="archif" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content} data-reveal-left>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDash} />
            Notre produit
          </p>

          <h2 className={styles.title}>ARCHIF</h2>

          <p className={styles.lead}>
            La première solution d'archivage électronique <strong>open source</strong>{' '}
            conçue pour les besoins africains. Développée au Cameroun par nos équipes,
            elle couvre tout le cycle de vie documentaire — de la réception du courrier
            à la conservation définitive.
          </p>

          <ul className={styles.features}>
            {features.map((f) => (
              <li key={f} className={styles.feature}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                {f}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Button
              as="a"
              href="https://archivefacile.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              Découvrir ARCHIF
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            </Button>
            <span className={styles.badge}>Version 1.0 — Open source</span>
          </div>
        </div>

        <div className={styles.visual} data-reveal-right>
          <a
            href="https://archivefacile.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageLink}
          >
            <img src={archifCover} alt="ARCHIF — solution d'archivage électronique" className={styles.image} loading="lazy" />
            <span className={styles.domain}>archivefacile.com</span>
          </a>
        </div>
      </div>
    </section>
  )
}
