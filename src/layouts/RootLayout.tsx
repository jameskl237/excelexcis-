import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Lenis from 'lenis'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { ScrollProgress } from '../components/ScrollProgress/ScrollProgress'
import { RevealObserver } from '../components/RevealObserver/RevealObserver'
import styles from './RootLayout.module.css'

export function RootLayout() {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const l = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      autoRaf: true,
    })
    setLenis(l)
    return () => { l.destroy() }
  }, [])

  return (
    <div className={styles.layout}>
      <RevealObserver />
      <ScrollProgress lenis={lenis} />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
