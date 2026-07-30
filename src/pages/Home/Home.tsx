import { Helmet } from 'react-helmet-async'
import { Hero } from './sections/Hero/Hero'
import { Services } from './sections/Services/Services'
import { Portfolio } from './sections/Portfolio/Portfolio'
import { Team } from './sections/Team/Team'
import { Contact } from './sections/Contact/Contact'

export function Home() {
  return (
    <>
      <Helmet>
        <title>excelexcis — Accueil</title>
        <meta name="description" content="excelexcis — Votre partenaire de confiance" />
      </Helmet>
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
    </>
  )
}
