import { Section } from '../../../../components/Section/Section'
import { Card } from '../../../../components/Card/Card'
import type { TeamMember } from '../../../../types'
import styles from './Team.module.css'

const members: TeamMember[] = [
  { id: '1', name: 'Njandjeu Lahakio David Andreas', role: 'Ingénieur Full Stack', photo: '' },
  { id: '2', name: 'Samo Ndabidjang Marlyne Majolie', role: "Archiviste assermentée — 16 ans d'expérience", photo: '' },
  { id: '3', name: 'Djiele James Kamga', role: 'Ingénieur de travaux informatique — Backend & architecture', photo: '' },
  { id: '4', name: 'Cyrielle Obe', role: 'Archiviste documentaliste', photo: '' },
  { id: '5', name: 'Ryan Defo', role: 'Ingénieur de travaux informatique — Frontend & DevOps', photo: '' },
  { id: '6', name: 'Djimgou Iris Danielle', role: 'Ingénieur en pétrochimie', photo: '' },
]

export function Team() {
  return (
    <Section
      id="team"
      eyebrow="L'équipe"
      title="Des profils complémentaires"
      subtitle="Ingénieurs, archivistes assermentées et consultants réunis autour d'une même exigence"
    >
      <div className={styles.grid}>
        {members.map((m, i) => (
          <div key={m.id} data-reveal style={{ transitionDelay: `${i * 0.08}s` }}>
            <Card variant="glass" className={styles.memberCard}>
              <div className={styles.avatarWrap}>
                <div className={styles.avatar}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              </div>
              <h3 className={styles.name}>{m.name}</h3>
              <p className={styles.role}>{m.role}</p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  )
}
