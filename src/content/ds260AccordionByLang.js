/** DS-260 expandable guide copy per language. */

function sec(title, body, warn = null) {
  return { title, body, warn }
}

export const ds260AccordionByLang = {
  en: [
    sec(
      'Section 1 — Personal Information',
      'Provide your full legal names exactly as shown on your passport. Include any aliases, previous names, marital status, date and place of birth, and nationality as requested.',
      'Warnings: match the passport exactly; avoid spelling inconsistencies across the form and civil documents.'
    ),
    sec(
      'Section 2 — Address History',
      'List your current address and previous addresses with accurate dates. Include countries where you have lived.',
      'Important note: residence history can affect which police certificates you need and how you document presence in each country.'
    ),
    sec(
      'Section 3 — Travel & Immigration History',
      'Disclose prior U.S. travel, visas, refusals, overstays, removals, or other immigration events truthfully. Embassy officers compare answers with systems and your passport stamps.'
    ),
    sec(
      'Section 4 — Family Information',
      'Declare your spouse and all qualifying children, parents where required, and derivatives according to official definitions.',
      'Warning: failing to declare an eligible spouse or child can result in disqualification or denial.'
    ),
    sec(
      'Section 5 — Education & Work',
      'Summarize schools attended, degrees earned, employment history, and military service. Keep dates consistent with CVs, reference letters, and supporting evidence you may present later.'
    ),
    sec(
      'Section 6 — Security Questions',
      'Answer criminal, immigration fraud, terrorism, public health, and related security questions carefully. If an item could apply to you, seek qualified legal advice before submitting—this platform does not provide legal advice.'
    ),
    sec(
      'Section 7 — U.S. Address',
      'Provide the address where your green card may be mailed after admission. This may be a friend, family member, or sponsor address if permitted by official guidance and your circumstances.'
    ),
  ],
  fr: [
    sec(
      'Section 1 — Informations personnelles',
      'Indiquez vos noms légaux complets exactement comme sur le passeport : alias, anciens noms, état civil, date et lieu de naissance, nationalité.',
      'Avertissements : identique au passeport ; évitez les incohérences d’orthographe entre le formulaire et les documents civils.'
    ),
    sec(
      'Section 2 — Historique d’adresses',
      'Listez l’adresse actuelle et les adresses précédentes avec des dates exactes, y compris les pays où vous avez vécu.',
      'Note : l’historique de résidence peut influencer les certificats de police exigés.'
    ),
    sec(
      'Section 3 — Voyages et antécédents d’immigration',
      'Déclarez honnêtement voyages, visas, refus, dépassements de séjour, expulsions ou autres faits liés à l’immigration aux États-Unis.'
    ),
    sec(
      'Section 4 — Famille',
      'Déclarez conjoint, enfants éligibles, parents si requis, et dérivés selon les définitions officielles.',
      'Avertissement : ne pas déclarer un conjoint ou enfant éligible peut entraîner disqualification ou refus.'
    ),
    sec(
      'Section 5 — Études et travail',
      'Résumé des écoles, diplômes, emplois et service militaire. Harmonisez les dates avec CV et preuves.'
    ),
    sec(
      'Section 6 — Questions de sécurité',
      'Répondez prudemment aux questions pénales, fraude à l’immigration, terrorisme, santé publique, etc. Si un point peut vous concerner, consultez un conseiller juridique qualifié — ce site ne fournit pas de conseil juridique.'
    ),
    sec(
      'Section 7 — Adresse aux États-Unis',
      'Indiquez l’adresse d’envoi possible de la carte verte après admission (famille, ami ou sponsor si autorisé par les règles officielles).'
    ),
  ],
  es: [
    sec(
      'Sección 1 — Información personal',
      'Indique sus nombres legales completos tal como en el pasaporte: alias, nombres anteriores, estado civil, fecha y lugar de nacimiento, nacionalidad.',
      'Advertencias: igual que el pasaporte; evite discrepancias de ortografía con documentos civiles.'
    ),
    sec(
      'Sección 2 — Historial de domicilios',
      'Liste domicilio actual y anteriores con fechas exactas, incluidos países donde ha vivido.',
      'Nota: el historial de residencia puede afectar certificados policiales requeridos.'
    ),
    sec(
      'Sección 3 — Viajes e historial migratorio',
      'Declare con veracidad viajes previos a EE. UU., visas, negaciones, estancias indebidas, expulsiones u otros eventos migratorios.'
    ),
    sec(
      'Sección 4 — Familia',
      'Declare cónyuge, hijos que califiquen, padres si aplica, y derivados según definiciones oficiales.',
      'Advertencia: omitir cónyuge o hijo elegible puede causar descalificación o denegación.'
    ),
    sec(
      'Sección 5 — Educación y trabajo',
      'Resuma estudios, títulos, empleo y servicio militar. Mantenga fechas coherentes con CV y evidencias.'
    ),
    sec(
      'Sección 6 — Preguntas de seguridad',
      'Responda con cuidado preguntas penales, fraude migratorio, terrorismo, salud pública, etc. Si podría aplicarle, busque asesoría legal calificada — esta plataforma no ofrece asesoría legal.'
    ),
    sec(
      'Sección 7 — Dirección en EE. UU.',
      'Indique la dirección posible de envío de la tarjeta de residencia tras el ingreso (familia, amigo o patrocinador si las reglas lo permiten).'
    ),
  ],
  ar: [
    sec(
      'القسم 1 — المعلومات الشخصية',
      'اذكر الأسماء القانونية الكاملة كما في جواز السفر، بما في ذلك الأسماء المستعارة والأسماء السابقة والحالة الاجتماعية وتاريخ ومكان الميلاد والجنسية.',
      'تحذيرات: طابق الجواز تماماً؛ تجنب اختلافات الإملاء بين النموذج والوثائق المدنية.'
    ),
    sec(
      'القسم 2 — تاريخ العناوين',
      'اذكر العنوان الحالي والعناوين السابقة بتواريخ دقيقة، بما في ذلك البلدان التي سكنت فيها.',
      'ملاحظة: تاريخ الإقامة قد يؤثر على شهادات الشرطة المطلوبة.'
    ),
    sec(
      'القسم 3 — سفر وتاريخ هجرة',
      'افصح بصدق عن سفر سابق إلى الولايات المتحدة وتأشيرات ورفض وتجاوز مدة الإقامة وإبعاد أو أحداث هجرة أخرى.'
    ),
    sec(
      'القسم 4 — معلومات العائلة',
      'صرّح بالزوج/ة والأطفال المؤهلين والوالدين عند الطلب والمشتقين وفق التعاريف الرسمية.',
      'تحذير: عدم الإفصاح عن زوج أو طفل مؤهل قد يؤدي للاستبعاد أو الرفض.'
    ),
    sec(
      'القسم 5 — التعليم والعمل',
      'لخّص المدارس والشهادات والوظائف والخدمة العسكرية. وحّد التواريخ مع السيرة والمستندات الداعمة.'
    ),
    sec(
      'القسم 6 — أسئلة أمنية',
      'أجب بعناية عن الأسئلة الجنائية والاحتيال الهجري والإرهاب والصحة العامة وما شابه. إن كان الأمر ينطبق عليك فاستشر مستشاراً قانونياً مؤهلاً — هذه المنصة لا تقدم استشارة قانونية.'
    ),
    sec(
      'القسم 7 — عنوان في الولايات المتحدة',
      'قدّم العنوان الذي قد تُرسل إليه البطاقة الخضراء بعد القبول (قد يكون صديقاً أو عائلة أو كفيلاً إذا سمحت القواعد الرسمية).'
    ),
  ],
}

export const ds260IntroByLang = {
  en: 'The DS-260 is the online immigrant visa application completed after DV selection (and for other immigrant visa categories). It collects biographic, security, and contact data used by consular officers to adjudicate your case. The expandable sections below summarize major blocks—always rely on the live form and official instructions.',
  fr: 'Le DS-260 est la demande de visa d’immigrant en ligne complétée après sélection DV (et pour d’autres catégories). Il rassemble données biographiques, de sécurité et de contact utilisées par les agents consulaires. Les sections ci-dessous résument les grands blocs — basez-vous toujours sur le formulaire en ligne et les instructions officielles.',
  es: 'El DS-260 es la solicitud en línea de visa de inmigrante que se completa tras la selección DV (y otras categorías). Recoge datos biográficos, de seguridad y de contacto que usan los oficiales consulares. Las secciones siguientes resumen bloques principales — confíe siempre en el formulario vigente e instrucciones oficiales.',
  ar: 'نموذج DS-260 هو طلب تأشيرة الهجرة الإلكتروني بعد اختيار قرعة التنوع (وفئات أخرى). يجمع بيانات السيرة والأمن والاتصال التي يستخدمها القنصلون. الأقسام أدناه تلخّص الكتل الرئيسية — اعتمد دائماً على النموذج الحي والتعليمات الرسمية.',
}

export const ds260FooterBulletsByLang = {
  en: [
    'Review every screen before signing and submitting.',
    'Print or save the confirmation page and keep screenshots.',
    'Some answers may be clarified at interview, but material misrepresentation carries serious risk.',
  ],
  fr: [
    'Relisez chaque écran avant signature et envoi.',
    'Imprimez ou enregistrez la confirmation et conservez des captures.',
    'Certaines réponses peuvent être clarifiées à l’entretien, mais une fausse déclaration grave comporte de lourds risques.',
  ],
  es: [
    'Revise cada pantalla antes de firmar y enviar.',
    'Imprima o guarde la confirmación y capturas de pantalla.',
    'Algunas respuestas pueden aclararse en la entrevista, pero la tergiversación grave conlleva riesgos serios.',
  ],
  ar: [
    'راجع كل شاشة قبل التوقيع والإرسال.',
    'اطبع أو احفظ صفحة التأكيد ولقطات شاشة.',
    'قد تُوضَّح بعض الإجابات في المقابلة، لكن التحريف الجسيم ينطوي على مخاطر كبيرة.',
  ],
}

export const ds260MistakesByLang = {
  en: [
    { title: 'Name mismatches', text: 'Passport, DS-260, and civil documents show different spellings or name order.' },
    { title: 'Hidden addresses', text: 'Skipping short-term residences that still appear in police or tax records.' },
    { title: 'Incomplete family', text: 'Omitting a spouse or child who must be declared under program rules.' },
    { title: 'Rushing submission', text: 'Submitting without printing or saving the confirmation and supporting screenshots.' },
  ],
  fr: [
    { title: 'Noms incohérents', text: 'Passeport, DS-260 et documents civils avec orthographe ou ordre des noms différents.' },
    { title: 'Adresses cachées', text: 'Omettre de courtes périodes encore visibles dans dossiers fiscaux ou de police.' },
    { title: 'Famille incomplète', text: 'Omettre un conjoint ou enfant à déclarer selon les règles du programme.' },
    { title: 'Envoi précipité', text: 'Soumettre sans imprimer ou enregistrer la confirmation et captures.' },
  ],
  es: [
    { title: 'Nombres inconsistentes', text: 'Pasaporte, DS-260 y documentos civiles con distinta ortografía u orden de nombres.' },
    { title: 'Direcciones ocultas', text: 'Omitir estancias cortas que aún figuran en registros fiscales o policiales.' },
    { title: 'Familia incompleta', text: 'Omitir cónyuge o hijo que debe declararse según las reglas.' },
    { title: 'Envío apresurado', text: 'Enviar sin imprimir o guardar la confirmación y capturas.' },
  ],
  ar: [
    { title: 'اختلاف الأسماء', text: 'جواز السفر وDS-260 والوثائق المدنية تظهر تهجئة أو ترتيب أسماء مختلفاً.' },
    { title: 'إخفاء عناوين', text: 'تجاهل إقامات قصيرة ما زالت تظهر في سجلات ضريبية أو شرطية.' },
    { title: 'عائلة ناقصة', text: 'حذف زوج أو طفل يجب إ declarهم وفق قواعد البرنامج.' },
    { title: 'تسرّع في الإرسال', text: 'الإرسال دون طباعة أو حفظ التأكيد ولقطات الدعم.' },
  ],
}

export function ds260Accordion(lang) {
  return ds260AccordionByLang[lang] || ds260AccordionByLang.en
}
