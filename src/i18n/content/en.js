/** English UI/content overlay merged into base translations. */
export const enOverlay = {
  askAi: {
    chips: [
      'I was selected. What should I do first?',
      'Which police certificates do I need?',
      'I studied in another country. Which documents do I need?',
      'How should I prepare for my embassy interview?',
      'What should I do during my first 30 days in America?',
    ],
    mockReply: `DV Compass AI will answer using official-source immigration guidance, country-specific civil document rules, embassy instructions, and verified community experience.

Future versions will include:
• AI-powered document roadmap
• Embassy-specific guidance
• Multilingual AI support
• Interview preparation assistant
• Immigration news monitoring
• Life-in-America planning assistant`,
    panelBrand: 'DV Compass AI',
    previewBadge: 'Preview',
    suggestedLabel: 'Suggested prompt',
    inputPlaceholder: 'Type a message (coming soon)',
    send: 'Send',
  },
  scam: {
    cards: [
      'Fake DV websites that charge fees or harvest data',
      'Fake immigration agents promising guaranteed selection',
      'Fake payment requests unrelated to official government receipts',
      'Fake embassy emails or SMS phishing links',
      'Social media scammers impersonating lawyers or “visa officers”',
    ],
    bullets: [
      'Never pay random agents for guaranteed selection—the DV entry itself is free through official channels.',
      'Always verify embassy and interview instructions using official U.S. government websites.',
      'Protect your passport numbers, confirmation codes, and personal data from unsolicited contacts.',
    ],
  },
  community: {
    groupsTitle: 'Groups',
    futureTitle: 'Future features',
    groups: [
      'Applicants',
      'Selected Winners',
      'DS-260 Help',
      'Interview Preparation',
      'Visa Approved',
      'New Arrivals',
      'Alumni / Mentors',
    ],
    future: [
      'Embassy groups',
      'Country groups',
      'City groups',
      'Housing tips',
      'Job opportunities',
      'Interview experiences',
      'Scam alerts',
    ],
  },
  interview: {
    privacyHint:
      'Case numbers must stay masked (e.g. 2027AF12XXX). Never post a full case number publicly.',
    cardCaseRange: 'Case range',
    cardDate: 'Date',
    cardQuestionsTitle: 'Questions asked',
    cardDocumentsTitle: 'Documents requested',
    durationLabel: 'Duration',
    casePlaceholder: '2027AF12XXX',
    seeds: {
      abu: {
        embassy: 'U.S. Embassy Abu Dhabi',
        questions: [
          'What did you study?',
          'What work do you do?',
          'Where will you live in the U.S.?',
          'Who is your contact in America?',
        ],
        docs: ['Passport', 'Police certificate', 'Degree', 'Birth certificate'],
        duration: '5–10 min',
        tip: 'Stay calm, organized, and answer clearly.',
      },
      yde: {
        embassy: 'U.S. Embassy Yaoundé',
        questions: [
          'Highest education?',
          'Any previous marriages?',
          'Have you traveled before?',
          'Where are you planning to live?',
        ],
        docs: ['Birth certificate', 'Diploma', 'Police certificate'],
        duration: '~15 min',
        tip: '',
      },
      del: {
        embassy: 'U.S. Embassy New Delhi',
        questions: ['Study history', 'Residence history', 'U.S. address', 'Previous visas'],
        docs: ['PCC', 'Educational records', 'Passport'],
        duration: '~20 min',
        tip: '',
      },
    },
  },
  news: {
    topics: [
      'DV opening dates',
      'DV closing dates',
      'Visa Bulletin updates',
      'Embassy closures',
      'Immigration policy changes',
      'Travel restrictions',
      'Vaccination requirement updates',
    ],
    cardPlaceholder: 'Placeholder headline — verify on official sources.',
  },
  lifeAmerica: {
    phases: [
      {
        title: 'First 7 Days',
        items: [
          'Secure temporary housing',
          'Buy a SIM card and test connectivity',
          'Understand local transportation options',
          'Organize immigration documents in a waterproof pouch',
          'Learn emergency contacts (911, local hospitals)',
        ],
      },
      {
        title: 'First 30 Days',
        items: [
          'Apply for SSN if eligible and directed',
          'Open a bank account with required IDs',
          'Understand monthly budgeting (rent, food, transport)',
          'Explore job opportunities and networking channels',
          'Learn transit passes, rideshare safety, and commute patterns',
        ],
      },
      {
        title: 'First 90 Days',
        items: [
          'Start building credit responsibly (secured cards if needed)',
          'Learn basics of federal/state taxes and withholding',
          'Improve English through classes or conversation partners',
          'Build community through cultural centers or faith groups',
          'Understand healthcare: insurance, urgent care vs ER',
          'Obtain driver license or state ID per DMV rules',
        ],
      },
      {
        title: 'First 100 Days',
        items: [
          'Stabilize housing and roommate agreements',
          'Improve income through training or better roles',
          'Clarify long-term goals (education, certification, family reunification)',
          'Avoid debt traps (predatory loans, high-interest cards)',
          'Create a simple written financial plan',
        ],
      },
    ],
    dt: {
      dmv: 'DMV',
      costOfLiving: 'Cost of living',
      transportation: 'Transportation',
      housing: 'Housing',
      immigrantCommunities: 'Immigrant communities',
      jobMarket: 'Job market',
    },
    states: [
      {
        id: 'ca',
        name: 'California',
        dmv: 'DMV placeholder',
        col: 'High variability by metro',
        transit: 'Strong transit in major cities',
        housing: 'Competitive in coastal hubs',
        community: 'Large diaspora networks',
        jobs: 'Diverse industries',
      },
      {
        id: 'tx',
        name: 'Texas',
        dmv: 'DMV placeholder',
        col: 'Generally lower than coastal CA',
        transit: 'Car-dependent in most cities',
        housing: 'Growing metros—plan ahead',
        community: 'Growing immigrant hubs',
        jobs: 'Energy, tech, healthcare',
      },
      {
        id: 'nj',
        name: 'New Jersey',
        dmv: 'DMV placeholder',
        col: 'High near NYC corridor',
        transit: 'NYC access via PATH/NJ Transit',
        housing: 'Dense—research towns carefully',
        community: 'Diverse suburban networks',
        jobs: 'Pharma, logistics, NYC commute',
      },
      {
        id: 'ga',
        name: 'Georgia',
        dmv: 'DMV placeholder',
        col: 'Atlanta vs rural spread',
        transit: 'Mixed; car common outside core',
        housing: 'Atlanta competitive pockets',
        community: 'Active cultural associations',
        jobs: 'Airport, film, corporate HQs',
      },
      {
        id: 'ny',
        name: 'New York',
        dmv: 'DMV placeholder',
        col: 'Very high in NYC',
        transit: 'Extensive subway and bus',
        housing: 'Roommates often necessary',
        community: 'Neighborhood-level diversity',
        jobs: 'Finance, healthcare, gig economy',
      },
      {
        id: 'md',
        name: 'Maryland',
        dmv: 'DMV placeholder',
        col: 'Elevated near DC',
        transit: 'Metro access in pockets',
        housing: 'Research school districts if relevant',
        community: 'Federal city corridor diversity',
        jobs: 'Federal contractors, biotech',
      },
    ],
  },
  officialResources: {
    cards: [
      {
        title: 'DV Instructions',
        desc: 'Official rules, dates, and photo standards for each program year.',
      },
      {
        title: 'Entrant Status Check',
        desc: 'Check selection and visa interview readiness through authorized portals.',
      },
      {
        title: 'DS-260',
        desc: 'Immigrant visa application used after selection and fee payment where required.',
      },
      {
        title: 'Visa Bulletin',
        desc: 'Monthly priority date and DV cut-off tracking for visa availability.',
      },
      {
        title: 'Reciprocity & Civil Documents',
        desc: 'Country-specific document formats and issuance guidance.',
      },
      {
        title: 'Embassy Interview Instructions',
        desc: 'Post-specific guidance for appointments, security, and documents.',
      },
      {
        title: 'USCIS New Immigrant Guide',
        desc: 'Orientation for new permanent residents after admission.',
      },
      {
        title: 'Social Security',
        desc: 'SSN application guidance for work-authorized newcomers.',
      },
      {
        title: 'IRS',
        desc: 'Taxpayer basics for first-time filers and ITIN where applicable.',
      },
      {
        title: 'DMV Resources',
        desc: 'State-level driver licensing and ID requirements (varies widely).',
      },
    ],
  },
  about: {
    body: `DV Compass AI was inspired by real immigrant journeys. Many immigrants face confusion, misinformation, scams,
stress, and uncertainty during the DV Lottery and immigration process. This platform was created to organize trusted
information, simplify complex steps, and help people move forward with confidence.`,
    mission:
      'Mission: To organize official immigration information, reduce confusion, fight scams, and help immigrants move with confidence.',
  },
  nav: {
    brandPrefix: 'DV Compass',
    brandSuffix: 'AI',
    languageLabel: 'Language',
  },
  footer: {
    brand: 'DV Compass AI',
  },
  roadmap: {
    packetCardTitle: 'Your roadmap preview — DS-260 / interview packet',
    packetBullets: [
      'DS-260 confirmation',
      'Passport biographic page',
      'Appointment letter',
      'Photos per instructions',
      'Medical & vaccinations',
      'Court / military records if applicable',
      'Certified translations if applicable',
    ],
  },
}
