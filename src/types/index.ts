export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  photo: string
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  image: string
  url?: string
}

export interface NavLink {
  label: string
  href: string
}
