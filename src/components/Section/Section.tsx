import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import styles from './Section.module.css'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
  variant?: 'default' | 'alt' | 'glass'
}

export function Section({ id, children, className, title, subtitle, variant = 'default' }: SectionProps) {
  return (
    <section id={id} className={cn(styles.section, styles[variant], className)}>
      <div className={styles.inner}>
        {title && <h2 className={cn(styles.title, 'rv')}>{title}</h2>}
        {subtitle && <p className={cn(styles.subtitle, 'rv', 'rv-d1')}>{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
