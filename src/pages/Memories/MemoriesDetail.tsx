import { Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Section } from '../../components/Section/Section'
import { Button } from '../../components/Button/Button'
import { cn } from '../../lib/cn'
import { getFormationBySlug } from '../../data/memories'
import styles from './MemoriesDetail.module.css'

const paragraphs = [
  "Cette session s'est déroulée dans une ambiance studieuse et conviviale. Nos formateurs ont accompagné les participants tout au long de la journée, entre apports théoriques et mises en pratique.",
  "Au programme : échanges, exercices concrets et retours d'expérience. Chaque module a été adapté au profil et aux besoins des participants, afin que la formation soit utile dès le lendemain.",
  "Au-delà du contenu, ce sont surtout les échanges qui ont marqué la journée. Chacun a pu poser ses questions, partager ses pratiques et repartir avec des outils directement réutilisables.",
  "Cette journée illustre notre conviction : une formation réussie se construit dans l'échange et la bienveillance, autour d'objectifs concrets et partagés.",
]

const conclusion =
  "Merci à tous les participants pour leur engagement et leur bonne humeur. Ces moments resteront gravés dans nos memories — rendez-vous pour la prochaine session !"

export function MemoriesDetail() {
  const { slug } = useParams<{ slug: string }>()
  const formation = slug ? getFormationBySlug(slug) : undefined

  if (!formation) {
    return <Navigate to="/memories" replace />
  }

  return (
    <>
      <Helmet>
        <title>{`excelexcis — ${formation.title}`}</title>
        <meta name="description" content={`Retour en images sur ${formation.title}`} />
      </Helmet>
      <Section title={formation.title} subtitle="Retour en images sur cette formation">
        <div className={styles.top}>
          <Button as="link" to="/memories" variant="outline" size="sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Toutes les Memories
          </Button>
        </div>

        <div className={styles.content}>
          <p className={styles.intro} data-reveal>
            {paragraphs[0]}
          </p>

          <div className={styles.rows}>
            {formation.images.map((image, i) => {
              const imageLeft = i % 2 === 0
              const paragraph = paragraphs[(i % (paragraphs.length - 1)) + 1]
              return (
                <div
                  key={image}
                  className={cn(styles.row, imageLeft ? styles.rowImageLeft : styles.rowImageRight)}
                >
                  <figure
                    className={styles.photoWrap}
                    data-reveal-left={imageLeft ? true : undefined}
                    data-reveal-right={imageLeft ? undefined : true}
                  >
                    <img className={styles.photo} src={image} alt={`${formation.title} — photo ${i + 1}`} loading="lazy" />
                  </figure>
                  <p className={styles.rowText} data-reveal>
                    {paragraph}
                  </p>
                </div>
              )
            })}
          </div>

          <p className={styles.conclusion} data-reveal>
            {conclusion}
          </p>

          <div className={styles.bottom}>
            <Button as="link" to="/memories" variant="secondary" size="md">
              Découvrir d'autres formations
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
