import { Helmet } from 'react-helmet-async'
import { Hero } from './sections/Hero/Hero'
import { Trust } from './sections/Trust/Trust'
import { Services } from './sections/Services/Services'
import { Archif } from './sections/Archif/Archif'
import { Portfolio } from './sections/Portfolio/Portfolio'
import { Team } from './sections/Team/Team'
import { Contact } from './sections/Contact/Contact'
import { OrderTraining } from './sections/OrderTraining/OrderTraining'

export function Home() {
  return (
    <>
      <Helmet>
        <title>Excelcis Group — Accueil</title>
        <meta name="description" content="Excelcis Group — Votre partenaire de confiance" />
      </Helmet>
      <Hero />
      <Trust />
      <Services />
      <Archif />
      <Portfolio />
      <Team />
      <Contact />
      <OrderTraining />
    </>
  )
}
