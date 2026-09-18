export interface ProgrammeDay {
  day: string
  title: string
  points: string[]
  summary: string
}

export interface FormationReport {
  title: string
  client: string
  date: string
  periode: string
  lieu: string
  duree: string
  participants: number
  formateur: string
  contexte: string[]
  objectifGeneral: string
  objectifsSpecifiques: string[]
  programme: ProgrammeDay[]
  methodologie: string[]
  resultats: string[]
  appreciation: string
  recommandations: string[]
  captions: string[]
}

export const formationReports: Record<string, FormationReport> = {
  'performance-individuelle-et-collective-ces-mbalmayo-2026': {
    title: 'Booster la performance individuelle pour renforcer la performance globale',
    client: 'Conseil Économique et Social',
    date: '2026-01-28',
    periode: 'Du 28 au 30 janvier 2026',
    lieu: 'Mbalmayo',
    duree: '3 jours',
    participants: 8,
    formateur: 'Ibrahim Maxime Julien',
    contexte: [
      "Dans un contexte institutionnel marqué par des exigences accrues de performance, d'efficacité et de qualité de la gouvernance, le Conseil Économique et Social a organisé une formation de renforcement des capacités à l'intention de ses cadres. Cette initiative visait à améliorer simultanément la performance individuelle des agents et la performance globale de l'institution.",
      "La formation s'inscrit dans une dynamique de modernisation des pratiques professionnelles, de valorisation du capital humain et d'optimisation du fonctionnement interne du Conseil.",
    ],
    objectifGeneral:
      'Renforcer les compétences individuelles des cadres afin d’améliorer durablement la performance collective et institutionnelle du Conseil Économique et Social.',
    objectifsSpecifiques: [
      'Développer une meilleure maîtrise de la gestion du temps et de la productivité professionnelle',
      'Renforcer la confiance en soi et les capacités de communication assertive',
      'Améliorer les compétences en prise de parole en public et en préparation efficace des réunions',
      'Optimiser la qualité des échanges, des décisions et du pilotage institutionnel',
    ],
    programme: [
      {
        day: 'Jour 1',
        title: 'Gestion du temps et productivité professionnelle',
        points: [
          'Identification des voleurs de temps en milieu institutionnel',
          'Hiérarchisation des priorités et planification des activités',
          "Outils pratiques d'optimisation du temps de travail",
          'Lien entre discipline personnelle, efficacité professionnelle et résultats institutionnels',
        ],
        summary:
          "Des exercices pratiques ont permis aux participants d'analyser leurs propres habitudes de travail et de définir des plans d'amélioration concrets.",
      },
      {
        day: 'Jour 2',
        title: 'Développement de la confiance en soi et assertivité',
        points: [
          'La confiance en soi comme fondement du leadership professionnel',
          "L'assertivité dans la communication institutionnelle",
          'La gestion des relations professionnelles et des situations complexes',
          "L'équilibre entre affirmation de soi, respect de l'autre et efficacité collective",
        ],
        summary:
          'Les échanges interactifs et mises en situation ont permis aux participants de renforcer leur posture professionnelle et leur capacité à communiquer avec clarté et assurance.',
      },
      {
        day: 'Jour 3',
        title: 'Prise de parole en public et préparation des réunions',
        points: [
          'Techniques de prise de parole en public en contexte institutionnel',
          "Structuration d'un message clair, crédible et impactant",
          'Préparation, animation et restitution efficace des réunions',
          'Transformer les réunions en véritables outils de décision et de pilotage',
        ],
        summary:
          "Des exercices pratiques ont permis aux participants de s'exercer à la prise de parole et à la conduite de réunions orientées résultats.",
      },
    ],
    methodologie: [
      'Apports théoriques ciblés',
      'Études de cas institutionnels',
      'Exercices pratiques et mises en situation',
      "Échanges d'expériences entre participants",
    ],
    resultats: [
      'Gestion efficace du temps et amélioration de la productivité',
      'Confiance en soi et communication assertive',
      'Prise de parole en public en milieu institutionnel',
      'Préparation, animation et restitution structurée des réunions',
      'Contribution accrue à la performance collective et à la qualité de la gouvernance',
    ],
    appreciation:
      "La formation a été très bien accueillie par les participants, qui ont exprimé un fort intérêt pour les thématiques abordées et leur utilité pratique. Les échanges ont mis en évidence la pertinence de poursuivre des actions de renforcement des capacités afin de consolider les acquis et d'ancrer durablement les bonnes pratiques.",
    recommandations: [
      'Instituer des sessions périodiques de renforcement des capacités pour les cadres',
      'Généraliser les outils de gestion du temps et de préparation des réunions',
      'Encourager une culture institutionnelle fondée sur la performance, la responsabilité et la communication efficace',
    ],
    captions: [
      'Remise des attestations de participation',
      'Support de formation remis aux participants',
      'Séance de travail en salle',
      'Échanges entre les cadres',
      'Mise en situation et discussion',
      'Travaux pratiques',
      'Remise d’attestation',
      'Remise d’attestation',
    ],
  },
}
