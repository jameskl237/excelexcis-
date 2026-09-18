import type { SVGProps, ReactElement } from 'react'

export type IconComponent = (props: SVGProps<SVGSVGElement>) => ReactElement

function icon(children: ReactElement | ReactElement[]): IconComponent {
  return (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {children}
    </svg>
  )
}

export const Monitor = icon(<><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>)

export const Palette = icon(<><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" /><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.5-4.5-10-10-10z" /></>)

export const BarChart = icon(<><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>)

export const Book = icon(<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /><line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="11" x2="14" y2="11" /></>)

export const Settings = icon(<><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></>)

export const Code = icon(<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>)

export const Brain = icon(<><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.5A2.5 2.5 0 0 1 5 17.5v-1.24A2.5 2.5 0 0 1 3.5 14a2.5 2.5 0 0 1 0-5A2.5 2.5 0 0 1 5 6.24V5a2.5 2.5 0 0 1 2.04-2.46A2.5 2.5 0 0 1 9.5 2z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.5A2.5 2.5 0 0 0 19 17.5v-1.24a2.5 2.5 0 0 0 1.5-2.26 2.5 2.5 0 0 0 0-5A2.5 2.5 0 0 0 19 6.24V5a2.5 2.5 0 0 0-2.04-2.46A2.5 2.5 0 0 0 14.5 2z" /></>)

export const Database = icon(<><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></>)

export const Workflow = icon(<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><path d="M10 6.5h4a3 3 0 0 1 3 3V10" /><path d="M6.5 10v1a3 3 0 0 0 3 3H14" /></>)

export const Search = icon(<><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>)

export const GraduationCap = icon(<><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" /><path d="M22 10v6" /></>)
