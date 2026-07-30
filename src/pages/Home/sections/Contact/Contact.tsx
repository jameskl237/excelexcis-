import { Section } from '../../../../components/Section/Section'
import { Button } from '../../../../components/Button/Button'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <Section id="contact" title="Contactez-nous" subtitle="Une question ? Un projet ? Parlons-en !" variant="alt">
      <div className={styles.columns}>
        <form className={styles.form} data-reveal>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Nom</label>
              <input id="name" type="text" className={styles.input} placeholder="Votre nom" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input id="email" type="email" className={styles.input} placeholder="vous@exemple.fr" required />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="subject" className={styles.label}>Sujet</label>
            <input id="subject" type="text" className={styles.input} placeholder="Objet de votre message" />
          </div>
          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" className={styles.textarea} rows={5} placeholder="Votre message..." required />
          </div>
          <Button type="submit" variant="primary" size="lg">
            Envoyer le message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </Button>
        </form>
        <div className={styles.info} data-reveal style={{ transitionDelay: '0.15s' }}>
          <h3 className={styles.infoTitle}>Nos coordonnées</h3>
          <p className={styles.infoText}>contact@excelexcis.fr</p>
          <p className={styles.infoText}>+33 1 23 45 67 89</p>
          <p className={styles.infoText}>Paris, France</p>
        </div>
      </div>
    </Section>
  )
}
