import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} excelexcis. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
