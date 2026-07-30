import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { useTheme } from '../../hooks/useTheme'
import type { NavLink as NavLinkType } from '../../types'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.css'

const navLinks: NavLinkType[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          excelexcis
        </Link>

        <div className={styles.group}>
          <ThemeToggle theme={theme} onToggle={toggle} />

          <button
            className={styles.burger}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            type="button"
          >
            <span className={cn(styles.bar, open && styles.open)} />
          </button>
        </div>

        <nav className={cn(styles.nav, open && styles.navOpen)}>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) => cn(styles.link, isActive && styles.active)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
