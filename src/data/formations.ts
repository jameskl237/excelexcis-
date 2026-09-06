export interface UpcomingFormation {
  slug: string
  title: string
  description: string
  longDescription: string
  date: string
  duration: string
  places: number
  placesLeft: number
  themes: string[]
}

export const upcomingFormations: UpcomingFormation[] = [
  {
    slug: 'archivage-numerique-avance',
    title: 'Archivage numérique avancé',
    description:
      'Maîtrisez les techniques modernes d\'archivage numérique : indexation, pérennisation, et conformité réglementaire.',
    longDescription:
      'Cette formation approfondie couvre l\'ensemble du cycle de vie des documents numériques, de la création à l\'archivage à long terme. Vous apprendrez à mettre en place des systèmes d\'archivage conformes aux normes en vigueur, à optimiser l\'indexation et à garantir la pérennité de vos données. Cas pratiques sur des outils open source et solutions métier.',
    date: '15 septembre 2026',
    duration: '3 jours',
    places: 20,
    placesLeft: 12,
    themes: ['Archivage', 'Numérisation', 'Gestion documentaire'],
  },
  {
    slug: 'administration-systemes',
    title: 'Administration systèmes et réseaux',
    description:
      'Formation complète à l\'administration de serveurs Linux et Windows, réseau et sécurité.',
    longDescription:
      'Apprenez à déployer, configurer et maintenir des infrastructures serveur robustes. Cette formation couvre l\'administration Linux (Debian, Ubuntu, CentOS) et Windows Server, la gestion des réseaux (TCP/IP, DNS, DHCP, firewall), ainsi que les bonnes pratiques de sécurité informatique. Travaux pratiques sur machines virtuelles.',
    date: '6 octobre 2026',
    duration: '5 jours',
    places: 15,
    placesLeft: 8,
    themes: ['Administration', 'Réseau', 'Sécurité'],
  },
  {
    slug: 'developpement-web-fullstack',
    title: 'Développement web fullstack',
    description:
      'Créez des applications web modernes avec React, Node.js et les bases de données.',
    longDescription:
      'De la conception à la mise en production, cette formation vous guide dans le développement d\'applications web complètes. Frontend avec React et TypeScript, backend avec Node.js et Express, bases de données SQL et NoSQL. Méthodologies agiles, déploiement et CI/CD inclus.',
    date: '3 novembre 2026',
    duration: '5 jours',
    places: 12,
    placesLeft: 12,
    themes: ['Développement', 'Web', 'Fullstack'],
  },
  {
    slug: 'design-ux-ui-approfondi',
    title: 'Design UX/UI approfondi',
    description:
      'Apprenez à concevoir des interfaces utilisateur intuitives et esthétiques.',
    longDescription:
      'Plongez dans les fondamentaux du design d\'expérience utilisateur et d\'interface. Recherche utilisateur, wireframing, prototypage avec Figma, tests d\'utilisabilité et design system. Cette formation allie théorie et pratique pour créer des produits numériques centrés sur l\'utilisateur.',
    date: '24 novembre 2026',
    duration: '3 jours',
    places: 15,
    placesLeft: 10,
    themes: ['Design', 'UX/UI', 'Figma'],
  },
]

export function getUpcomingFormationBySlug(slug: string): UpcomingFormation | undefined {
  return upcomingFormations.find((f) => f.slug === slug)
}
