/** Spanish UI/content overlay */
export const esOverlay = {
  askAi: {
    chips: [
      'Fui seleccionado. ¿Qué hago primero?',
      '¿Qué certificados policiales necesito?',
      'Estudié en otro país. ¿Qué documentos necesito?',
      '¿Cómo prepararme para la entrevista en la embajada?',
      '¿Qué hacer durante mis primeros 30 días en EE. UU.?',
    ],
    mockReply: `DV Compass AI responderá usando orientación de fuentes oficiales, normas de documentos civiles por país, instrucciones de embajada y experiencia comunitaria verificada.

Las próximas versiones incluirán:
• Hoja de ruta documental con IA
• Orientación específica por embajada
• Asistencia multilingüe
• Preparación para la entrevista
• Seguimiento de noticias de inmigración
• Planificación de la vida en EE. UU.`,
    panelBrand: 'DV Compass AI',
    previewBadge: 'Vista previa',
    suggestedLabel: 'Sugerencia de mensaje',
    inputPlaceholder: 'Escriba un mensaje (próximamente)',
    send: 'Enviar',
  },
  scam: {
    cards: [
      'Sitios DV falsos que cobran tarifas o recopilan datos',
      'Agentes falsos que prometen selección garantizada',
      'Solicitudes de pago ajenas a recibos gubernamentales oficiales',
      'Correos o SMS de phishing que suplantan a la embajada',
      'Estafadores en redes que se hacen pasar por abogados u «oficiales de visa»',
    ],
    bullets: [
      'Nunca pague a intermediarios por una «selección garantizada» — la inscripción DV es gratuita por canales oficiales.',
      'Verifique siempre instrucciones de embajada y entrevista en sitios oficiales del gobierno de EE. UU.',
      'Proteja pasaporte, códigos de confirmación y datos personales frente a contactos no solicitados.',
    ],
  },
  community: {
    groupsTitle: 'Grupos',
    futureTitle: 'Funciones futuras',
    groups: [
      'Solicitantes',
      'Seleccionados',
      'Ayuda DS-260',
      'Preparación entrevista',
      'Visa aprobada',
      'Nuevos llegados',
      'Exalumnos / mentores',
    ],
    future: [
      'Grupos por embajada',
      'Grupos por país',
      'Grupos por ciudad',
      'Consejos de vivienda',
      'Empleo',
      'Experiencias de entrevista',
      'Alertas de estafas',
    ],
  },
  interview: {
    privacyHint:
      'Los números de caso deben permanecer enmascarados (p. ej. 2027AF12XXX). Nunca publique un número completo.',
    cardCaseRange: 'Rango de caso',
    cardDate: 'Fecha',
    cardQuestionsTitle: 'Preguntas realizadas',
    cardDocumentsTitle: 'Documentos solicitados',
    durationLabel: 'Duración',
    casePlaceholder: '2027AF12XXX',
    seeds: {
      abu: {
        embassy: 'Embajada de EE. UU. en Abu Dabi',
        questions: [
          '¿Qué estudió?',
          '¿En qué trabaja?',
          '¿Dónde vivirá en EE. UU.?',
          '¿Quién es su contacto en EE. UU.?',
        ],
        docs: ['Pasaporte', 'Certificado policial', 'Título', 'Acta de nacimiento'],
        duration: '5–10 min',
        tip: 'Mantenga la calma, sea claro y responda con orden.',
      },
      yde: {
        embassy: 'Embajada de EE. UU. en Yaundé',
        questions: [
          '¿Máximo nivel educativo?',
          '¿Matrimonios anteriores?',
          '¿Ha viajado antes?',
          '¿Dónde planea vivir?',
        ],
        docs: ['Acta de nacimiento', 'Diploma', 'Certificado policial'],
        duration: '~15 min',
        tip: '',
      },
      del: {
        embassy: 'Embajada de EE. UU. en Nueva Delhi',
        questions: ['Historial de estudios', 'Historial de residencia', 'Dirección en EE. UU.', 'Visas previas'],
        docs: ['Antecedentes', 'Registros educativos', 'Pasaporte'],
        duration: '~20 min',
        tip: '',
      },
    },
  },
  news: {
    topics: [
      'Fechas de apertura DV',
      'Fechas de cierre DV',
      'Actualizaciones del Visa Bulletin',
      'Cierres de embajadas',
      'Cambios de política migratoria',
      'Restricciones de viaje',
      'Requisitos de vacunación',
    ],
    cardPlaceholder: 'Titular de ejemplo — verifique en fuentes oficiales.',
  },
  lifeAmerica: {
    phases: [
      {
        title: 'Primeros 7 días',
        items: [
          'Asegure vivienda temporal',
          'Compre SIM y pruebe conectividad',
          'Entienda transporte local',
          'Organice documentos en bolsa impermeable',
          'Aprenda emergencias (911, hospitales)',
        ],
      },
      {
        title: 'Primeros 30 días',
        items: [
          'Solicite SSN si aplica y se indica',
          'Abra cuenta bancaria con identificaciones requeridas',
          'Entienda presupuesto mensual (alquiler, comida, transporte)',
          'Explore empleo y redes',
          'Pases de transporte, seguridad en apps, rutas',
        ],
      },
      {
        title: 'Primeros 90 días',
        items: [
          'Construya crédito con responsabilidad (tarjetas aseguradas si hace falta)',
          'Bases de impuestos federales y estatales',
          'Mejore inglés con clases o conversación',
          'Integre comunidad en centros culturales o grupos',
          'Salud: seguro, urgencias vs ER',
          'Licencia de conducir o ID según DMV',
        ],
      },
      {
        title: 'Primeros 100 días',
        items: [
          'Estabilice vivienda y acuerdos con compañeros',
          'Mejore ingresos con capacitación u otros roles',
          'Aclare metas a largo plazo',
          'Evite trampas de deuda',
          'Cree un plan financiero simple por escrito',
        ],
      },
    ],
    dt: {
      dmv: 'DMV',
      costOfLiving: 'Costo de vida',
      transportation: 'Transporte',
      housing: 'Vivienda',
      immigrantCommunities: 'Comunidades de inmigrantes',
      jobMarket: 'Mercado laboral',
    },
    states: [
      {
        id: 'ca',
        name: 'California',
        dmv: 'DMV (placeholder)',
        col: 'Alta variabilidad por ciudad',
        transit: 'Buen transporte en grandes ciudades',
        housing: 'Competitivo en zonas costeras',
        community: 'Grandes redes de diáspora',
        jobs: 'Industrias diversas',
      },
      {
        id: 'tx',
        name: 'Texas',
        dmv: 'DMV (placeholder)',
        col: 'Generalmente menor que CA costera',
        transit: 'Dependiente del auto en muchas ciudades',
        housing: 'Metrópolis en crecimiento — planifique',
        community: 'Centros de inmigrantes en crecimiento',
        jobs: 'Energía, tecnología, salud',
      },
      {
        id: 'nj',
        name: 'Nueva Jersey',
        dmv: 'DMV (placeholder)',
        col: 'Alto cerca del corredor NYC',
        transit: 'Acceso NYC vía PATH/NJ Transit',
        housing: 'Denso — investigue pueblos',
        community: 'Redes suburbanas diversas',
        jobs: 'Farmacéutica, logística, commute NYC',
      },
      {
        id: 'ga',
        name: 'Georgia',
        dmv: 'DMV (placeholder)',
        col: 'Atlanta vs rural',
        transit: 'Mixto; auto fuera del núcleo',
        housing: 'Zonas competitivas en Atlanta',
        community: 'Asociaciones culturales activas',
        jobs: 'Aeropuerto, cine, sedes corporativas',
      },
      {
        id: 'ny',
        name: 'Nueva York',
        dmv: 'DMV (placeholder)',
        col: 'Muy alto en NYC',
        transit: 'Metro y bus extensos',
        housing: 'A menudo se necesitan compañeros de piso',
        community: 'Diversidad por barrio',
        jobs: 'Finanzas, salud, economía gig',
      },
      {
        id: 'md',
        name: 'Maryland',
        dmv: 'DMV (placeholder)',
        col: 'Elevado cerca de DC',
        transit: 'Metro en algunas zonas',
        housing: 'Investigue distritos escolares si aplica',
        community: 'Diversidad en corredor federal',
        jobs: 'Contratistas federales, biotech',
      },
    ],
  },
  officialResources: {
    cards: [
      { title: 'Instrucciones DV', desc: 'Reglas oficiales, fechas y estándares de foto por año.' },
      { title: 'Verificación de estado', desc: 'Consulte selección y preparación en portales autorizados.' },
      { title: 'DS-260', desc: 'Solicitud de visa de inmigrante tras selección y pago de tasas si aplica.' },
      { title: 'Visa Bulletin', desc: 'Seguimiento mensual de fechas de prioridad y cortes DV.' },
      { title: 'Reciprocidad y documentos civiles', desc: 'Formatos y emisión por país.' },
      { title: 'Instrucciones de entrevista', desc: 'Guía del puesto: citas, seguridad, documentos.' },
      { title: 'Guía USCIS para nuevos inmigrantes', desc: 'Orientación para residentes permanentes tras admisión.' },
      { title: 'Seguro Social', desc: 'Guía de solicitud de SSN para recién llegados autorizados a trabajar.' },
      { title: 'IRS', desc: 'Conceptos básicos para primeros declarantes e ITIN si aplica.' },
      { title: 'Recursos DMV', desc: 'Licencias e identificación a nivel estatal (varía).' },
    ],
  },
  about: {
    body: `DV Compass AI se inspira en trayectos reales de inmigrantes. Muchos enfrentan confusión, desinformación, estafas
y estrés durante la lotería DV y el proceso migratorio. Esta plataforma organiza información confiable,
simplifica pasos y ayuda a avanzar con seguridad.`,
    mission:
      'Misión: organizar información oficial, reducir confusión, combatir estafas y ayudar a los inmigrantes a avanzar con confianza.',
  },
  nav: {
    brandPrefix: 'DV Compass',
    brandSuffix: 'AI',
    languageLabel: 'Idioma',
  },
  footer: {
    brand: 'DV Compass AI',
  },
  roadmap: {
    packetCardTitle: 'Vista previa de su hoja de ruta — paquete DS-260 / entrevista',
    packetBullets: [
      'Confirmación DS-260',
      'Página biográfica del pasaporte',
      'Carta de cita',
      'Fotos según instrucciones',
      'Examen médico y vacunas',
      'Antecedentes judiciales / militares si aplica',
      'Traducciones certificadas si aplica',
    ],
  },
}
