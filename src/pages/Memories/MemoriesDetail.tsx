import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Section } from '../../components/Section/Section'
import { Button } from '../../components/Button/Button'
import { getFormationBySlug } from '../../data/memories'
import type { FormationReport } from '../../data/formationReports'
import { OrderForm } from '../../components/OrderForm/OrderForm'
import styles from './MemoriesDetail.module.css'

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
  )
}

function Facts({ report }: { report: FormationReport }) {
  const facts = [
    { label: 'Client', value: report.client },
    { label: 'Lieu', value: report.lieu },
    { label: 'Période', value: report.periode },
    { label: 'Durée', value: report.duree },
    { label: 'Participants', value: `${report.participants} cadres` },
    { label: 'Formateur', value: report.formateur },
  ]
  return (
    <dl className={styles.facts} data-reveal>
      {facts.map((f) => (
        <div key={f.label} className={styles.fact}>
          <dt className={styles.factLabel}>{f.label}</dt>
          <dd className={styles.factValue}>{f.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function ReportBody({ report }: { report: FormationReport }) {
  return (
    <>
      <div className={styles.twoCol}>
        <div data-reveal>
          <h2 className={styles.blockTitle}>Contexte</h2>
          {report.contexte.map((p) => (
            <p key={p.slice(0, 24)} className={styles.para}>{p}</p>
          ))}
        </div>
        <div data-reveal>
          <h2 className={styles.blockTitle}>Objectifs</h2>
          <p className={styles.goal}>{report.objectifGeneral}</p>
          <ul className={styles.checkList}>
            {report.objectifsSpecifiques.map((o) => (
              <li key={o}><Check />{o}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.block}>
        <h2 className={styles.blockTitle} data-reveal>Programme</h2>
        <div className={styles.days}>
          {report.programme.map((d, i) => (
            <article key={d.day} className={styles.day} data-reveal style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className={styles.dayTag}>{d.day}</span>
              <h3 className={styles.dayTitle}>{d.title}</h3>
              <ul className={styles.dayPoints}>
                {d.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <p className={styles.daySummary}>{d.summary}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.twoCol}>
        <div data-reveal>
          <h2 className={styles.blockTitle}>Méthodologie</h2>
          <p className={styles.para}>Une approche participative et orientée résultats, combinant :</p>
          <div className={styles.chips}>
            {report.methodologie.map((m) => <span key={m} className={styles.chip}>{m}</span>)}
          </div>
        </div>
        <div data-reveal>
          <h2 className={styles.blockTitle}>Acquis des participants</h2>
          <ul className={styles.checkList}>
            {report.resultats.map((r) => (
              <li key={r}><Check />{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

function ReportClosing({ report }: { report: FormationReport }) {
  return (
    <div className={styles.twoCol}>
      <blockquote className={styles.quote} data-reveal>
        <p>{report.appreciation}</p>
        <cite>Appréciation générale — rapport du formateur</cite>
      </blockquote>
      <div data-reveal>
        <h2 className={styles.blockTitle}>Recommandations</h2>
        <ol className={styles.recos}>
          {report.recommandations.map((r) => <li key={r}>{r}</li>)}
        </ol>
      </div>
    </div>
  )
}

function Gallery({ images, title, captions }: { images: string[]; title: string; captions?: string[] }) {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const step = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length],
  )

  useEffect(() => {
    if (open === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close, step])

  return (
    <>
      <div className={styles.gallery}>
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className={styles.thumb}
            onClick={() => setOpen(i)}
            data-reveal
            style={{ transitionDelay: `${(i % 4) * 0.06}s` }}
          >
            <img src={src} alt={captions?.[i] ?? `${title} — photo ${i + 1}`} loading="lazy" />
            {captions?.[i] && <span className={styles.caption}>{captions[i]}</span>}
          </button>
        ))}
      </div>

      {open !== null && createPortal(
        <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={close}>
          <button type="button" className={styles.lbClose} onClick={close} aria-label="Fermer">×</button>
          <button
            type="button"
            className={`${styles.lbNav} ${styles.lbPrev}`}
            onClick={(e) => { e.stopPropagation(); step(-1) }}
            aria-label="Photo précédente"
          >‹</button>
          <figure className={styles.lbFigure} onClick={(e) => e.stopPropagation()}>
            <img src={images[open]} alt={captions?.[open] ?? title} />
            <figcaption>
              {captions?.[open] ?? title} <span>{open + 1} / {images.length}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className={`${styles.lbNav} ${styles.lbNext}`}
            onClick={(e) => { e.stopPropagation(); step(1) }}
            aria-label="Photo suivante"
          >›</button>
        </div>,
        document.body,
      )}
    </>
  )
}

export function MemoriesDetail() {
  const { slug } = useParams<{ slug: string }>()
  const formation = slug ? getFormationBySlug(slug) : undefined

  if (!formation) {
    return <Navigate to="/memories" replace />
  }

  const { report } = formation

  return (
    <>
      <Helmet>
        <title>{`Excelcis Group — ${formation.title}`}</title>
        <meta
          name="description"
          content={report ? `${formation.title} — ${report.client}, ${report.periode}` : `Retour en images sur ${formation.title}`}
        />
      </Helmet>
      <Section
        eyebrow={report ? `Formation · ${report.client}` : 'Formation'}
        title={formation.title}
        subtitle={report ? `${report.periode} · ${report.lieu}` : 'Retour en images sur cette formation'}
      >
        <div className={styles.top}>
          <Button as="link" to="/formations" variant="outline" size="sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Toutes les formations
          </Button>
        </div>

        <div className={styles.content}>
          {report && (
            <>
              {formation.images[0] && (
                <figure className={styles.cover} data-reveal>
                  <img src={formation.images[0]} alt={report.captions[0] ?? formation.title} />
                </figure>
              )}
              <Facts report={report} />
              <ReportBody report={report} />
            </>
          )}

          <div className={styles.block}>
            <h2 className={styles.blockTitle} data-reveal>En images</h2>
            <Gallery images={formation.images} title={formation.title} captions={report?.captions} />
          </div>

          {report && <ReportClosing report={report} />}

          <div className={styles.cta} data-reveal>
            <h2 className={styles.ctaTitle}>Un besoin similaire pour vos équipes ?</h2>
            <p className={styles.para}>
              Nous concevons des formations sur mesure, adaptées au contexte de votre institution.
            </p>
          </div>

          <OrderForm mode="order" formationTitle={formation.title} />
        </div>
      </Section>
    </>
  )
}
