import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import styles from './Card.module.css'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'outlined' | 'elevated' | 'glass'
}

export function Card({ children, className, variant = 'default' }: CardProps) {
  return (
    <div className={cn(styles[variant], className)}>
      {children}
    </div>
  )
}
