import { useState } from 'react'
import { Button } from '../Button/Button'
import styles from './OrderForm.module.css'

interface OrderFormProps {
  mode: 'participate' | 'order'
  formationTitle?: string
}

export function OrderForm({ mode, formationTitle }: OrderFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [organization, setOrganization] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const isParticipate = mode === 'participate'
  const heading = isParticipate
    ? 'S\'inscrire à cette formation'
    : 'Commander cette formation'
  const submitLabel = isParticipate ? 'Participer' : 'Envoyer la demande'

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const subject = isParticipate
      ? `Participation: ${formationTitle ?? 'Formation'}`
      : `Commande: ${formationTitle ?? 'Formation'}`

    const body = [
      `Nom: ${name}`,
      `Organisation: ${organization}`,
      `Email: ${email}`,
      `Téléphone: ${phone}`,
      formationTitle ? `Formation: ${formationTitle}` : '',
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    const mailtoUrl = `mailto:onlineexcelcisgroup@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <p className={styles.successTitle}>Merci !</p>
        <p className={styles.successText}>
          Votre demande a été envoyée. Nous vous contacterons rapidement.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setSubmitted(false)
            setName('')
            setOrganization('')
            setEmail('')
            setPhone('')
            setMessage('')
          }}
        >
          Envoyer une autre demande
        </Button>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>{heading}</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="of-name" className={styles.label}>Nom complet</label>
            <input
              id="of-name"
              type="text"
              className={styles.input}
              placeholder="Votre nom"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="of-org" className={styles.label}>Organisation</label>
            <input
              id="of-org"
              type="text"
              className={styles.input}
              placeholder="Nom de votre société ou organisation"
              required
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="of-email" className={styles.label}>Email</label>
            <input
              id="of-email"
              type="email"
              className={styles.input}
              placeholder="vous@exemple.fr"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="of-phone" className={styles.label}>Téléphone</label>
            <input
              id="of-phone"
              type="tel"
              className={styles.input}
              placeholder="+237 6 XX XX XX XX"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="of-message" className={styles.label}>
            {isParticipate ? 'Message ou besoins particuliers' : 'Aspects particuliers souhaités'}
          </label>
          <textarea
            id="of-message"
            className={styles.textarea}
            rows={4}
            placeholder={
              isParticipate
                ? 'Précisez vos attentes ou besoins spécifiques...'
                : 'Décrivez le thème, les aspects particuliers, le nombre de participants...'
            }
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button type="submit" variant="primary" size="lg">
          {submitLabel}
        </Button>
      </form>
    </div>
  )
}
