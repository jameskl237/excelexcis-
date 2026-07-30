import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import styles from './ScrollProgress.module.css'

interface ScrollProgressProps {
  lenis: Lenis | null
}

export function ScrollProgress({ lenis }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!lenis) return

    const onScroll = (l: Lenis) => {
      const p = Math.min(1, Math.max(0, l.progress))
      setProgress(p)
    }

    lenis.on('scroll', onScroll)
    return () => { lenis.off('scroll', onScroll) }
  }, [lenis])

  return (
    <div className={styles.progress} role="progressbar" aria-valuenow={Math.round(progress * 100)}>
      <div className={styles.bar} style={{ transform: `scaleX(${progress})` }} />
      <span className={styles.label}>{Math.round(progress * 100)}%</span>
    </div>
  )
}
