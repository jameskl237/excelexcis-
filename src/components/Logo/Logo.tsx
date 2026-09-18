import mark from '../../assets/brand/logo-mark.png'
import styles from './Logo.module.css'

export function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <span className={`${styles.logo} ${styles[size]}`}>
      <img src={mark} alt="" className={styles.mark} width={40} height={40} />
      <span className={styles.text}>
        <span className={styles.name}>
          E<span className={styles.x}>X</span>CELCIS
        </span>
        <span className={styles.group}>GROUP</span>
      </span>
    </span>
  )
}
