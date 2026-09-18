import { Helmet } from 'react-helmet-async'
import { Section } from '../../components/Section/Section'
import styles from './About.module.css'

const domaines = [
  'Solutions web & logicielles sur mesure',
  'Intelligence artificielle (IA et agents)',
  "Systèmes d'information (GED, ERP)",
  'Automatisation des processus métier',
  'Archivage physique et numérique',
  'Conseil digital & audit',
  'Formation professionnelle (archivage, technologies, administration)',
]

export function About() {
  return (
    <>
      <Helmet>
        <title>Excelcis Group — À propos</title>
        <meta name="description" content="Découvrez Excelcis Group, entreprise multi-panoramique fondée en 2026" />
      </Helmet>
      <Section title="À propos" subtitle="Qui sommes-nous ?">
        <div className={styles.content}>
          <p data-reveal>
            <strong>Excelcis Group</strong> est une entreprise multi-panoramique
            fondée en 2026, née d'une conviction forte : celle qu'une organisation
            agile et polyvalente peut répondre aux défis les plus variés avec la
            même exigence de qualité.
          </p>

          <p data-reveal style={{ transitionDelay: '0.1s' }}>
            Contrairement aux acteurs spécialisés dans un unique secteur, nous
            avons fait le choix de la transversalité. Cette approche nous permet
            de croiser les regards, d'importer des solutions d'un domaine vers un
            autre, et d'offrir à nos clients une vision globale — qu'il s'agisse
            de construire une application métier, de former une équipe à
            l'archivage numérique, ou de repenser leur stratégie administrative.
          </p>

          <div className={styles.domains} data-reveal style={{ transitionDelay: '0.2s' }}>
            <h3 className={styles.domainsTitle}>Nos domaines d'intervention</h3>
            <ul className={styles.domainsList}>
              {domaines.map((d, i) => (
                <li key={i} className={styles.domainsItem}>{d}</li>
              ))}
            </ul>
          </div>

          <p data-reveal style={{ transitionDelay: '0.3s' }}>
            Notre équipe est résolument multi-panoramique : ingénieurs full
            stack, ingénieurs de travaux informatique, archivistes assermentées
            et ingénieur en pétrochimie partagent une même philosophie :
            l'écoute, la rigueur et l'innovation au service de chaque projet.
            Chez Excelcis Group, nous ne livrons pas seulement une
            prestation : nous construisons une relation durable avec nos
            clients, fondée sur la confiance et les résultats.
          </p>
        </div>
      </Section>
    </>
  )
}
