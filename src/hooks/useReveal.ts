import { useEffect, useRef } from 'react'

interface UseRevealOptions {
  threshold?: number
  rootMargin?: string
  delay?: number
}

export function useReveal<T extends HTMLElement = HTMLElement>(opts: UseRevealOptions = {}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.classList.add('in')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (opts.delay) {
            setTimeout(() => el.classList.add('in'), opts.delay)
          } else {
            el.classList.add('in')
          }
          observer.unobserve(el)
        }
      },
      {
        threshold: opts.threshold ?? 0.15,
        rootMargin: opts.rootMargin ?? '0px 0px -8% 0px',
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [opts.threshold, opts.rootMargin, opts.delay])

  return ref
}
