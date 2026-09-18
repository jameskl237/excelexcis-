import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { useTheme } from '../../hooks/useTheme'
import type { NavLink as NavLinkType } from '../../types'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.css'

const navLinks: NavLinkType[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Formations', href: '/formations' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Memories', href: '/memories' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = pathname === '/' && !scrolled && !open

  return (
    <header className={cn(styles.header, transparent && styles.transparent)}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          excelcis group
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
