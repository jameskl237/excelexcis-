import cesLogo from '../../../../assets/images/institutions/ces.png'
import csphLogo from '../../../../assets/images/institutions/csph.png'
import styles from './Trust.module.css'

interface Institution {
  name: string
  detail: string
  logo?: string
  wordmark?: string
}

const institutions: Institution[] = [
  {
    name: 'Conseil Constitutionnel',
    detail: "Initiation à l'archivage",
    wordmark: 'Conseil\nConstitutionnel',
  },
  {
    name: 'Conseil Économique et Social',
    detail: 'Cadres & techniciens',
    logo: cesLogo,
  },
  {
    name: 'CSPH',
    detail: 'Performance organisationnelle & IA',
    logo: csphLogo,
  },
]

const stats = [
  { value: '16+', label: "Années d'expérience en archivage" },
  { value: '100+', label: 'Professionnels formés' },
  { value: '7', label: "Domaines d'intervention" },
]

export function Trust() {
  return (
    <section className={styles.trust}>
      <div className={styles.inner}>
        <p className={styles.label} data-reveal>Ils nous font confiance</p>

        <div className={styles.institutions}>
          {institutions.map((inst, i) => (
            <div
              key={inst.name}
              className={styles.institution}
              data-reveal
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.chip}>
                {inst.logo ? (
                  <img src={inst.logo} alt={inst.name} className={styles.logo} loading="lazy" />
                ) : (
                  <span className={styles.wordmark}>{inst.wordmark}</span>
                )}
              </div>
              <span className={styles.instDetail}>{inst.detail}</span>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={styles.stat}
              data-reveal
              style={{ transitionDelay: `${0.24 + i * 0.08}s` }}
            >
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
