import { Link } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import styles from './Footer.module.css'

const navColumns = [
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', to: '/about' },
      { label: 'Nos services', to: '/services' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Formations',
    links: [
      { label: 'Nos formations', to: '/formations' },
      { label: 'Commander une formation', to: '/formations#commander' },
      { label: 'Memories', to: '/memories' },
    ],
  },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logo} aria-label="Excelcis Group — accueil">
              <Logo size="lg" />
            </Link>
            <p className={styles.motto}>L'excellence au service de solutions durables</p>
            <p className={styles.tagline}>
              Entreprise multi-panoramique — solutions sur mesure, archivage,
              conseil et formation pour les entreprises et institutions.
            </p>
          </div>

          {navColumns.map((col) => (
            <nav key={col.title} className={styles.navCol}>
              <h3 className={styles.colTitle}>{col.title}</h3>
              <ul className={styles.list}>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className={styles.link}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className={styles.navCol}>
            <h3 className={styles.colTitle}>Contact</h3>
            <ul className={styles.list}>
              <li>
                <a href="mailto:onlineexcelcisgroup@gmail.com" className={styles.link}>
                  onlineexcelcisgroup@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+237674727100" className={styles.link}>+237 6 74 72 71 00</a>
              </li>
              <li className={styles.plain}>Yaoundé, Cameroun</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Excelcis Group. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
