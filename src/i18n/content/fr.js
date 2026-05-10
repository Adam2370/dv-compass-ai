/** French UI/content overlay */
export const frOverlay = {
  askAi: {
    chips: [
      'J’ai été sélectionné. Que faire en premier ?',
      'Quels certificats de police me faut-il ?',
      'J’ai étudié dans un autre pays. Quels documents sont nécessaires ?',
      'Comment me préparer à l’entretien à l’ambassade ?',
      'Que faire pendant mes 30 premiers jours aux États-Unis ?',
    ],
    mockReply: `DV Compass AI répondra en s’appuyant sur des sources officielles, les règles de documents civils par pays, les instructions des ambassades et l’expérience vérifiée de la communauté.

Les prochaines versions incluront :
• Feuille de route documentaire assistée par IA
• Conseils spécifiques par ambassade
• Assistance multilingue
• Préparation à l’entretien
• Veille sur l’actualité de l’immigration
• Planification des premiers pas aux États-Unis`,
    panelBrand: 'DV Compass AI',
    previewBadge: 'Aperçu',
    suggestedLabel: 'Suggestion de prompt',
    inputPlaceholder: 'Saisir un message (bientôt)',
    send: 'Envoyer',
  },
  scam: {
    cards: [
      'Faux sites DV qui facturent ou collectent des données',
      'Faux agents promettant une sélection garantie',
      'Fausses demandes de paiement hors reçus officiels',
      'E-mails ou SMS d’hameçonnage se faisant passer pour l’ambassade',
      'Arnaqueurs sur les réseaux se faisant passer pour avocats ou « officiers de visa »',
    ],
    bullets: [
      'Ne payez jamais des intermédiaires pour une « sélection garantie » — la participation DV est gratuite via les canaux officiels.',
      'Vérifiez toujours les instructions d’ambassade et d’entretien sur les sites officiels du gouvernement américain.',
      'Protégez passeport, codes de confirmation et données personnelles face aux sollicitations non autorisées.',
    ],
  },
  community: {
    groupsTitle: 'Groupes',
    futureTitle: 'Fonctionnalités à venir',
    groups: [
      'Candidats',
      'Sélectionnés',
      'Aide DS-260',
      'Préparation entretien',
      'Visa approuvé',
      'Nouveaux arrivants',
      'Anciens / mentors',
    ],
    future: [
      'Groupes par ambassade',
      'Groupes par pays',
      'Groupes par ville',
      'Conseils logement',
      'Offres d’emploi',
      'Retours d’entretien',
      'Alertes arnaques',
    ],
  },
  interview: {
    privacyHint:
      'Les numéros de dossier doivent rester masqués (ex. 2027AF12XXX). Ne publiez jamais un numéro complet.',
    cardCaseRange: 'Plage de dossier',
    cardDate: 'Date',
    cardQuestionsTitle: 'Questions posées',
    cardDocumentsTitle: 'Documents demandés',
    durationLabel: 'Durée',
    casePlaceholder: '2027AF12XXX',
    seeds: {
      abu: {
        embassy: 'Ambassade des États-Unis à Abou Dabi',
        questions: [
          'Qu’avez-vous étudié ?',
          'Quel est votre travail ?',
          'Où habiterez-vous aux États-Unis ?',
          'Qui est votre contact aux États-Unis ?',
        ],
        docs: ['Passeport', 'Casier judiciaire', 'Diplôme', 'Acte de naissance'],
        duration: '5 à 10 min',
        tip: 'Restez calme, structuré, et répondez clairement.',
      },
      yde: {
        embassy: 'Ambassade des États-Unis à Yaoundé',
        questions: [
          'Niveau d’études le plus élevé ?',
          'Mariages précédents ?',
          'Avez-vous déjà voyagé ?',
          'Où prévoyez-vous de vivre ?',
        ],
        docs: ['Acte de naissance', 'Diplôme', 'Casier judiciaire'],
        duration: '~15 min',
        tip: '',
      },
      del: {
        embassy: 'Ambassade des États-Unis à New Delhi',
        questions: ['Parcours d’études', 'Historique de résidence', 'Adresse aux USA', 'Visas antérieurs'],
        docs: ['Casier', 'Dossiers scolaires', 'Passeport'],
        duration: '~20 min',
        tip: '',
      },
    },
  },
  news: {
    topics: [
      'Dates d’ouverture DV',
      'Dates de clôture DV',
      'Mises à jour du Visa Bulletin',
      'Fermetures d’ambassades',
      'Évolutions de la politique migratoire',
      'Restrictions de voyage',
      'Exigences vaccinales',
    ],
    cardPlaceholder: 'Titre d’exemple — vérifier sur les sources officielles.',
  },
  lifeAmerica: {
    phases: [
      {
        title: 'Premiers 7 jours',
        items: [
          'Assurer un logement temporaire',
          'Acheter une carte SIM et tester le réseau',
          'Comprendre les transports locaux',
          'Ranger les documents dans une pochette étanche',
          'Noter les urgences (911, hôpitaux)',
        ],
      },
      {
        title: 'Premiers 30 jours',
        items: [
          'Demander le SSN si éligible et indiqué',
          'Ouvrir un compte bancaire avec les pièces requises',
          'Comprendre le budget (loyer, nourriture, transport)',
          'Explorer emploi et réseaux',
          'Titres de transport, sécurité VTC, trajets',
        ],
      },
      {
        title: 'Premiers 90 jours',
        items: [
          'Construire le crédit prudemment (cartes sécurisées si besoin)',
          'Bases des impôts fédéraux et étatiques',
          'Améliorer l’anglais (cours, conversation)',
          'S’intégrer via centres culturels ou communautés',
          'Santé : assurance, urgences vs urgences vitales',
          'Permis de conduire ou pièce d’identité selon le DMV',
        ],
      },
      {
        title: 'Premiers 100 jours',
        items: [
          'Stabiliser le logement et colocation',
          'Améliorer les revenus (formation, poste)',
          'Clarifier objectifs long terme',
          'Éviter les pièges de dette',
          'Établir un plan financier simple',
        ],
      },
    ],
    dt: {
      dmv: 'DMV',
      costOfLiving: 'Coût de la vie',
      transportation: 'Transport',
      housing: 'Logement',
      immigrantCommunities: 'Communautés immigrées',
      jobMarket: 'Marché de l’emploi',
    },
    states: [
      {
        id: 'ca',
        name: 'Californie',
        dmv: 'DMV (placeholder)',
        col: 'Très variable selon la métropole',
        transit: 'Bon réseau dans les grandes villes',
        housing: 'Concurrentiel sur le littoral',
        community: 'Réseaux diaspora importants',
        jobs: 'Secteurs diversifiés',
      },
      {
        id: 'tx',
        name: 'Texas',
        dmv: 'DMV (placeholder)',
        col: 'Souvent plus bas qu’en Californie côtière',
        transit: 'Souvent dépendant à la voiture',
        housing: 'Métropoles en croissance — anticiper',
        community: 'Hubs immigrés en croissance',
        jobs: 'Énergie, tech, santé',
      },
      {
        id: 'nj',
        name: 'New Jersey',
        dmv: 'DMV (placeholder)',
        col: 'Élevé près de NYC',
        transit: 'Accès NYC (PATH, NJ Transit)',
        housing: 'Densité — bien choisir la ville',
        community: 'Banlieues diversifiées',
        jobs: 'Pharma, logistique, navette NYC',
      },
      {
        id: 'ga',
        name: 'Géorgie',
        dmv: 'DMV (placeholder)',
        col: 'Atlanta vs zones rurales',
        transit: 'Mixte ; voiture hors centre',
        housing: 'Zones tendues à Atlanta',
        community: 'Associations culturelles actives',
        jobs: 'Aéroport, cinéma, sièges sociaux',
      },
      {
        id: 'ny',
        name: 'New York',
        dmv: 'DMV (placeholder)',
        col: 'Très élevé à NYC',
        transit: 'Métro et bus étendus',
        housing: 'Colocation souvent nécessaire',
        community: 'Diversité de quartier',
        jobs: 'Finance, santé, économie gig',
      },
      {
        id: 'md',
        name: 'Maryland',
        dmv: 'DMV (placeholder)',
        col: 'Élevé près de Washington',
        transit: 'Métro dans certaines zones',
        housing: 'Vérifier les districts scolaires si besoin',
        community: 'Diversité corridor fédéral',
        jobs: 'Contractants fédéraux, biotech',
      },
    ],
  },
  officialResources: {
    cards: [
      { title: 'Instructions DV', desc: 'Règles officielles, dates et normes photo pour chaque programme.' },
      { title: 'Vérification du statut', desc: 'Vérifier la sélection et la préparation à l’entretien via les portails autorisés.' },
      { title: 'DS-260', desc: 'Demande de visa d’immigrant après sélection et paiement des frais si requis.' },
      { title: 'Visa Bulletin', desc: 'Suivi mensuel des dates de priorité et des plafonds DV.' },
      { title: 'Réciprocité et documents civils', desc: 'Formats et délivrance des documents par pays.' },
      { title: 'Instructions d’entretien à l’ambassade', desc: 'Consignes du poste : rendez-vous, sécurité, documents.' },
      { title: 'Guide USCIS nouveaux immigrants', desc: 'Orientation pour nouveaux résidents permanents après admission.' },
      { title: 'Sécurité sociale', desc: 'Demande de SSN pour les nouveaux arrivants autorisés à travailler.' },
      { title: 'IRS', desc: 'Bases fiscales pour premiers déclarants et ITIN le cas échéant.' },
      { title: 'Ressources DMV', desc: 'Permis et pièces d’identité au niveau des États (variable).' },
    ],
  },
  about: {
    body: `DV Compass AI s’inspire de parcours d’immigrés réels. Beaucoup font face à la confusion, la désinformation, les arnaques
et le stress pendant la loterie DV et l’immigration. Cette plateforme rassemble des informations fiables,
simplifie les étapes et aide à avancer sereinement.`,
    mission:
      'Mission : organiser l’information officielle, réduire la confusion, lutter contre les arnaques et aider les immigrés à avancer avec confiance.',
  },
  nav: {
    brandPrefix: 'DV Compass',
    brandSuffix: 'AI',
    languageLabel: 'Langue',
  },
  footer: {
    brand: 'DV Compass AI',
  },
  roadmap: {
    packetCardTitle: 'Aperçu de votre feuille de route — dossier DS-260 / entretien',
    packetBullets: [
      'Confirmation DS-260',
      'Page biographique du passeport',
      'Convocation',
      'Photos selon consignes',
      'Examen médical et vaccinations',
      'Jugements / dossiers militaires si applicable',
      'Traductions certifiées si applicable',
    ],
    militaryNone: 'Aucun / sans objet',
  },
  homeUpdates: {
    title: 'Actualités officielles immigration & DV',
    badgeOfficialOnly: 'Sources officielles uniquement',
    badgeLiveSoon: 'Surveillance en direct bientôt',
    staticNote:
      'Liens statiques vers des sources officielles pour la v0.2. Surveillance en direct et résumés IA seront ajoutés plus tard.',
    readOfficial: 'Lire la source officielle',
    audienceLabel: 'Public',
    dateLabel: 'Date',
    datePlaceholder: 'Voir la publication officielle',
    items: [
      {
        category: 'Programme DV',
        title: 'Instructions du programme Diversity Visa',
        summary:
          'Les instructions officielles décrivent l’éligibilité, les règles de participation, les normes photo et la procédure via le système autorisé.',
        source: 'Département d’État des États-Unis',
        link: 'https://travel.state.gov/content/travel/en/us-visas/immigrate/diversity-visa-program-entry.html',
        audience: 'Candidats',
      },
      {
        category: 'Vérification du statut',
        title: 'Vérifiez la sélection DV uniquement sur le portail officiel',
        summary:
          'Les candidats doivent vérifier leur statut uniquement via le site officiel Entrant Status Check et protéger leur numéro de confirmation.',
        source: 'Département d’État des États-Unis',
        link: 'https://dvprogram.state.gov/',
        audience: 'Candidats / Sélectionnés',
      },
      {
        category: 'DS-260',
        title: 'Demande de visa d’immigrant en ligne',
        summary: 'Les personnes sélectionnées complètent le DS-260 via le CEAC dans le cadre du traitement du visa d’immigrant.',
        source: 'Centre électronique des demandes consulaires (CEAC)',
        link: 'https://ceac.state.gov/IV/Login.aspx',
        audience: 'Sélectionnés',
      },
      {
        category: 'Visa Bulletin',
        title: 'Suivre l’avancement des numéros de cas',
        summary:
          'Le Visa Bulletin aide les candidats DV à comprendre l’évolution des numéros par région et le calendrier d’éligibilité à l’entretien.',
        source: 'Département d’État des États-Unis',
        link: 'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-bulletin.html',
        audience: 'Sélectionnés',
      },
      {
        category: 'Documents civils',
        title: 'Règles documentaires par pays',
        summary:
          'La page Réciprocité et documents civils donne des indications par pays pour naissance, police, mariage, militaire, justice, etc.',
        source: 'Département d’État des États-Unis',
        link: 'https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country.html',
        audience: 'Préparation des documents',
      },
      {
        category: 'Nouveaux immigrants',
        title: 'S’installer aux États-Unis',
        summary:
          'L’USCIS fournit des informations officielles pour les nouveaux immigrants sur droits, responsabilités et installation.',
        source: 'USCIS',
        link: 'https://www.uscis.gov/tools/settling-in-the-us',
        audience: 'Visa approuvé / Nouveaux arrivants',
      },
    ],
  },
}
