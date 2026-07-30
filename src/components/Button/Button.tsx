import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import styles from './Button.module.css'

interface ButtonBase {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

type ButtonAsButton = ButtonBase & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }
type ButtonAsLink = ButtonBase & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string }
type ButtonAsRouterLink = ButtonBase & { as: 'link'; to: string; children: React.ReactNode }

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink

export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary'
  const size = props.size ?? 'md'
  const className = props.className

  if (props.as === 'a') {
    const { as: _, ...anchorRest } = props as ButtonAsLink
    return (
      <a className={cn(styles.btn, styles[variant], styles[size], className)} {...anchorRest} />
    )
  }

  if (props.as === 'link') {
    const { as: _, to, children, ...linkRest } = props as ButtonAsRouterLink
    return (
      <Link to={to} className={cn(styles.btn, styles[variant], styles[size], className)} {...linkRest}>
        {children}
      </Link>
    )
  }

  const { as: _, ...buttonRest } = props as ButtonAsButton
  return (
    <button className={cn(styles.btn, styles[variant], styles[size], className)} {...buttonRest} />
  )
}
