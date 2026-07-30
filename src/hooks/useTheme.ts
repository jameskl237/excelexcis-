import { useState, useEffect, useCallback } from 'react'

export type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    localStorage.setItem('theme', t)
    document.documentElement.setAttribute('data-theme', t)
  }, [])

  const toggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return { theme, setTheme, toggle }
}
