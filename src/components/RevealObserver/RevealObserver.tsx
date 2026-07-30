import { useEffect, useRef } from 'react'

export function RevealObserver() {
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches

    function reveal(el: HTMLElement) {
      el.classList.add('in')
    }

    function check() {
      const els = document.querySelectorAll<HTMLElement>(
        '[data-reveal]:not(.in), .rv:not(.in), [data-reveal-left]:not(.in), [data-reveal-right]:not(.in)',
      )

      if (els.length === 0) return

      const h = window.innerHeight
      for (const el of els) {
        const rect = el.getBoundingClientRect()
        if (rect.top < h * 0.88) {
          reveal(el)
        }
      }

      if (document.querySelectorAll('[data-reveal]:not(.in), .rv:not(.in), [data-reveal-left]:not(.in), [data-reveal-right]:not(.in)').length > 0) {
        rafRef.current = requestAnimationFrame(check)
      }
    }

    if (reduced) {
      document.querySelectorAll<HTMLElement>('[data-reveal], .rv, [data-reveal-left], [data-reveal-right]')
        .forEach((el) => reveal(el))
      return
    }

    rafRef.current = requestAnimationFrame(check)

    const mutationObserver = new MutationObserver(() => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(check)
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(rafRef.current)
      mutationObserver.disconnect()
    }
  }, [])

  return null
}
