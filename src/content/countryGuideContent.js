/**
 * Country-specific civil-document guidance (informational only — verify reciprocity & embassy).
 */

const L = (en, fr, ar, es) => ({ en, fr, ar, es })

const KEYS = ['passport', 'police', 'birth', 'marriage', 'education', 'translation', 'embassy']

const LABEL = {
  en: ['Passport', 'Police certificate', 'Birth certificate', 'Marriage / divorce', 'Education', 'Translations', 'Embassy notes'],
  fr: ['Passeport', 'Casier / police', 'Acte de naissance', 'Mariage / divorce', 'Études', 'Traductions', 'Notes ambassade'],
  ar: ['جواز السفر', 'شهادة الشرطة', 'شهادة الميلاد', 'الزواج / الطلاق', 'التعليم', 'الترجمات', 'ملاحظات السفارة'],
  es: ['Pasaporte', 'Antecedentes policiales', 'Partida de nacimiento', 'Matrimonio / divorcio', 'Educación', 'Traducciones', 'Notas de embajada'],
}

/** @type {Record<string, Record<string, {en:string,fr:string,ar:string,es:string}>>} */
export const COUNTRY_GUIDE_DB = {
  CM: {
    passport: L(
      'Biometric passports: use the official DGSN online pre-enrollment portal passcam.cm (also referenced with dgsn.cm). Complete pre-enrollment, attend biometric capture at the designated center or consular mission, and pay only on authorized channels.\n\nOfficial portal: https://www.passcam.cm/ — always verify the exact URL; avoid look-alike scam sites.\n\nBring national ID / consular card and certified birth extracts as listed for your mission.',
      'Passeport biométrique : préinscription officielle sur passcam.cm (souvent associé à dgsn.cm). Préinscription en ligne, capture biométrique au centre ou consulat désigné, paiement uniquement sur canaux officiels.\n\nPortail : https://www.passcam.cm/ — vérifiez l’URL exacte ; méfiez-vous des faux sites.\n\nPréparez CNI / carte consulaire et extraits de naissance certifiés selon la mission.',
      'جواز السفر البيومتري: التسجيل المسبق الرسمي على passcam.cm (وdgsn.cm). أكمل الخطوات ثم التقاط البصمات في المركز أو البعثة القنصلية وادفع عبر القنوات الرسمية فقط.\n\nالموقع: https://www.passcam.cm/ — تحقق من الرابط الحرفي وتجنب المواقع المزيفة.\n\nأحضر الهوية/البطاقة القنصلية وشهادة ميلاد مصدقة كما تطلب بعثتك.',
      'Pasaporte biométrico: preinscripción oficial en passcam.cm (junto con dgsn.cm). Complete captura biométrica en el centro o consulado indicado y pague solo por canales oficiales.\n\nPortal: https://www.passcam.cm/ — verifique la URL exacta; evite sitios fraudulentos.\n\nLleve DNI/tarjeta consular y partida de nacimiento certificada según su misión.'
    ),
    police: L(
      'Police certificates for U.S. immigration often mean a criminal record extract commonly referred to as **Bulletin No. 3** (casier judiciaire / bulletin n°3) issued through competent police or judicial channels depending on where you apply.\n\nProcessing times vary; request certified originals accepted by your U.S. embassy.\n\nAvoid unauthorized “express” brokers—use official windows and keep receipts.',
      'Certificat de police : souvent un **casier judiciaire** appelé **bulletin n°3**, délivré par les autorités compétentes (police / justice) selon le lieu.\n\nLes délais varient ; demandez des originaux certifiés acceptés par l’ambassade américaine.\n\nÉvitez les intermédiaires “express” non officiels.',
      'شهادة الشرطة للهجرة غالباً تعني **مستخرج سوابق** يُعرف محلياً باسم **النشرة رقم 3** (casier / bulletin n°3) من جهات الشرطة أو القضاء حسب مكان التقديم.\n\nتختلف المدد؛ اطلب أصولاً مصدقة تقبلها السفارة الأمريكية.\n\nتجنب الوسطاء غير الرسميين الذين يعدون بالتسريع.',
      'Antecedentes penales: a menudo un **extracto de casier** llamado **boletín n.º 3**, emitido por policía o autoridad judicial según el lugar.\n\nLos plazos varían; solicite originales certificados aceptados por la embajada de EE. UU.\n\nEvite gestores “exprés” no autorizados.'
    ),
    birth: L(
      'Birth events are registered with Cameroon civil status (état civil). You generally need a **certified copy** extracted from the register—not an informal handwritten attestation.\n\nIf names differ across documents, obtain an official amendment trail or consistent affidavits before interview.',
      'Naissances enregistrées à l’état civil. Il faut en général une **copie certifiée conforme** tirée des registres, pas une attestation informelle.\n\nSi les noms diffèrent, régularisez par la voie officielle avant l’entretien.',
      'تسجيل المواليد عبر السجل المدني. عادة يلزم **نسخة مصدقة** من السجل وليس إيضاحاً غير رسمي.\n\nإذا اختلفت الأسماء بين الوثائق، نظّم الأمر عبر السجل المدني أو القضاء قبل المقابلة.',
      'Nacimientos en registro civil. Normalmente se necesita **copia certificada** del registro, no una nota informal.\n\nSi los nombres difieren, regularícelo por vía oficial antes de la entrevista.'
    ),
    marriage: L(
      'Marriage: register at civil status and obtain a certified marriage certificate. Divorce: certified court judgment or extract.\n\nComplex marital history should include a clear timeline and official dissolution documents.',
      'Mariage : acte civil certifié. Divorce : jugement ou extrait certifié du tribunal.\n\nHistorique complexe : chronologie et pièces officielles de dissolution.',
      'الزواج: سجل مدني وشهادة زواج مصدقة. الطلاق: حكم أو مستخرج محكمة مصدق.\n\nإذا كان التاريخ معقداً، جهّز خطاً زمنياً ووثائق انحلال رسمية.',
      'Matrimonio: acta civil certificada. Divorcio: sentencia o extracto certificado.\n\nHistorial complejo: línea de tiempo y disoluciones oficiales.'
    ),
    education: L(
      'Degrees and transcripts from awarding institutions with seals/signatures. If you studied abroad (e.g., India), also prepare documents from that country per reciprocity.\n\nEmbassies may request verification—follow post-specific checklists.',
      'Diplômes et relevés cachetés/signés. Si vous avez étudié à l’étranger, ajoutez les documents du pays concerné.\n\nVérifications possibles selon le poste.',
      'الشهادات والكشوف من المؤسسة المانحة مع الأختام. إذا درست خارجاً، أضف وثائق ذلك البلد.\n\nقد تطلب السفارة تحققاً إضافياً.',
      'Títulos y notas sellados/firmados. Si estudió en el extranjero, añada documentos de ese país.\n\nEl puesto puede pedir verificación.'
    ),
    translation: L(
      'French is widely used in Cameroon; certified **English translations** are commonly required for civil documents submitted to U.S. consular posts.\n\nKeep translator credentials with the packet when no embassy-approved list exists.',
      'Le français est courant ; traductions **certifiées en anglais** souvent requises.\n\nConservez les références du traducteur.',
      'الفرنسية شائعة؛ غالباً تُطلب **ترجمات إنجليزية معتمدة**.\n\nاحتفظ ببيانات المترجم.',
      'El francés es común; suelen exigirse **traducciones certificadas al inglés**.\n\nGuarde datos del traductor.'
    ),
    embassy: L(
      'Most applicants in Cameroon process through **U.S. Embassy Yaoundé** (see Embassy & Medical page for address and phone).\n\nPractice concise answers in French or English that match your DS-260.',
      'La plupart des dossiers passent par l’**ambassade des États-Unis à Yaoundé** (adresse sur la page Ambassade & Médical).\n\nEntraînez-vous à des réponses courtes cohérentes avec le DS-260.',
      'غالباً تُعالج الطلبات في **سفارة الولايات المتحدة ياوندي** (العنوان في صفحة السفارة والطبي).\n\nتدرّب على إجابات قصيرة بالفرنسية أو الإنجليزية متسقة مع DS-260.',
      'La mayoría tramita en la **Embajada de EE. UU. en Yaundé** (dirección en Embajada y médico).\n\nPractique respuestas breves coherentes con el DS-260.'
    ),
  },
  IN: {
    passport: L(
      'Indian passports: Ministry of External Affairs **Passport Seva** at passportindia.gov.in. Book appointments only on the official portal.\n\nBeware fraudulent agents offering “guaranteed” appointments.',
      'Passeports indiens : **Passport Seva** (passportindia.gov.in). Rendez-vous uniquement sur le portail officiel.\n\nMéfiez-vous des agents frauduleux.',
      'جواز الهند: **Passport Seva** عبر passportindia.gov.in. احجز عبر البوابة الرسمية فقط.\n\nتجنب الوسطاء الاحتياليين.',
      'Pasaportes indios: **Passport Seva** (passportindia.gov.in). Reserve solo en el portal oficial.\n\nEvite gestores fraudulentos.'
    ),
    police: L(
      'Police Clearance Certificate (PCC) for Indian nationals typically follows **Passport Seva / police verification** channels depending on residence history.\n\nIf you lived in India as a foreign national, different rules may apply—confirm with reciprocity and embassy instructions.',
      'PCC : circuit **Passport Seva / vérification de police** selon l’historique.\n\nRésidents étrangers en Inde : règles différentes — vérifiez la réciprocité.',
      'شهادة عدم المحكومية PCC عبر مسار **Passport Seva/التحقق الشرطي** حسب الإقامة.\n\nللمقيمين الأجانب في الهند قد تنطبق قواعد مختلفة.',
      'PCC: flujo **Passport Seva / verificación policial** según residencia.\n\nResidentes extranjeros en India: reglas distintas — confirme reciprocidad.'
    ),
    birth: L(
      'Certified birth extracts from municipal corporation or registrar of births with seal and signature.',
      'Extraits de naissance certifiés par municipalité / registre avec sceau et signature.',
      'مستخرج ميلاد مصدق من البلدية أو السجل المدني بختم وتوقيع.',
      'Partida de nacimiento certificada de municipio o registro con sello y firma.'
    ),
    marriage: L(
      'Statutory / Hindu / Muslim / Christian marriage registers produce different certificate formats—submit the version recognized for your case with certified copies.\n\nDivorce: certified court decrees.',
      'Actes de mariage selon le régime (statutaire, hindou, musulman, chrétien) — fournissez l’acte reconnu, certifié.\n\nDivorce : jugements certifiés.',
      'سجلات زواج مختلفة (مدني/هندوسي/مسلم/مسيحي) — قدّم النسخ المعترف بها مصدقة.\n\nالطلاق: أحكام محكمة مصدقة.',
      'Matrimonio estatutario u otro régimen: acta reconocida y certificada.\n\nDivorcio: sentencias certificadas.'
    ),
    education: L(
      'Degrees and mark sheets from universities/boards; keep originals and copies. Organize transcripts for all degrees used to qualify for DV if applicable.',
      'Diplômes et relevés des universités / conseils ; originaux et copies.',
      'شهادات وكشوف من الجامعات/المجالس؛ أصول ونسخ.',
      'Títulos y notas de universidades/juntas; originales y copias.'
    ),
    translation: L(
      'Hindi and regional-language documents usually need **certified English translations** for U.S. immigrant visa packets.',
      'Documents en hindi ou langues régionales : traductions **certifiées en anglais** souvent requises.',
      'وثائق بالهندية أو لغات محلية غالباً تحتاج **ترجمة إنجليزية معتمدة**.',
      'Documentos en hindi o lenguas regionales suelen requerir **traducción certificada al inglés**.'
    ),
    embassy: L(
      'Immigrant visa interviews may be at **U.S. Embassy New Delhi** or **U.S. Consulates Mumbai, Chennai, Hyderabad, Kolkata** depending on official routing—follow your appointment letter.',
      'Entretiens souvent à **New Delhi** ou consulats américains en Inde — suivez votre convocation officielle.',
      'المقابلات قد تكون في **نيودلهي** أو قنصليات أمريكية أخرى — راجع خطاب الموعد.',
      'Entrevistas en **Nueva Delhi** u otros consulados — siga su carta oficial.'
    ),
  },
  AE: {
    passport: L(
      'UAE residency ties to **Emirates ID** and visas. Passport renewal for your nationality is often through your home-country mission in the UAE.\n\nFollow your country’s mission website for appointments.',
      'Résidence aux Émirats liée à l’**Emirates ID** et aux visas. Renouvellement du passeport national souvent via la mission de votre pays.',
      'الإقامة في الإمارات مرتبطة بهوية الإمارات والتأشيرات. تجديد جواز جنسيتك غالباً عبر بعثة بلدك.',
      'Residencia en EAU vinculada a **Emirates ID** y visados. Renovación del pasaporte de su nacionalidad suele ser en su misión.'
    ),
    police: L(
      'Police Clearance / “good conduct” certificates are issued through **official UAE police / smart services**; procedures differ by emirate (Dubai, Abu Dhabi, etc.).\n\nEmirates ID and biometrics are commonly required.',
      'Certificats de bonne conduite via **services de police officiels** de l’émirat ; procédures variables.\n\nEmirates ID et empreintes souvent requis.',
      'شهادات السوابق عبر **القنوات الشرطية الرسمية** لكل إمارة؛ الإجراءات تختلف.\n\nغالباً يلزم الهوية والبصمات.',
      'Antecedentes vía **policía oficial** del emirato; trámites distintos.\n\nSuele pedirse Emirates ID y huellas.'
    ),
    birth: L(
      'Birth certificates for children born in UAE follow emirate-specific health/civil procedures—request certified extracts.',
      'Actes de naissance des enfants nés aux Émirats selon règles de l’émirat — extraits certifiés.',
      'ولادة في الإمارات حسب إجراءات الصحة/الأحوال في الإمارة — مستخرج مصدق.',
      'Nacidos en EAU: reglas del emirato — copias certificadas.'
    ),
    marriage: L(
      'UAE-issued marriage certificates may require additional attestations for U.S. immigrant visa use—follow reciprocity and post checklists.',
      'Actes de mariage des Émirats : légalisations / attestations supplémentaires possibles selon réciprocité.',
      'عقود زواج صادرة في الإمارات قد تحتاج تصديقات إضافية حسب التعامل المتبادل.',
      'Matrimonio en EAU puede requerir legalizaciones adicionales según reciprocidad.'
    ),
    education: L(
      'Degrees from UAE institutions or attested documents—include transcripts; verify English packaging with your post.',
      'Diplômes des Émirats ou attestations ; relevés de notes ; exigences en anglais selon le poste.',
      'شهادات من مؤسسات إماراتية أو مصدقة؛ كشوف؛ راجع متطلبات الإنجليزية.',
      'Títulos de instituciones de EAU o apostillados; notas; requisitos en inglés.'
    ),
    translation: L(
      'Arabic documents often require **certified English translations** unless post guidance says otherwise.',
      'Documents en arabe : traductions **certifiées en anglais** fréquentes.',
      'وثائق عربية غالباً تحتاج **ترجمة إنجليزية معتمدة**.',
      'Documentos en árabe suelen requerir **traducción certificada al inglés**.'
    ),
    embassy: L(
      'Many Gulf applicants attend **U.S. Embassy Abu Dhabi** or **U.S. Consulate General Dubai** depending on case routing—verify your appointment letter.',
      'Souvent **Abou Dabi** ou **Dubaï** — vérifiez la convocation officielle.',
      'غالباً **أبوظبي** أو **دبي** — راجع خطاب الموعد.',
      'A menudo **Abu Dabi** o **Dubái** — confirme su carta oficial.'
    ),
  },
  NG: {
    passport: L(
      'Nigerian e-passports through **Nigeria Immigration Service** (verify current official URL on immigration.gov.ng). Use authorized capture centers only.',
      'Passeports électroniques nigérians via le **Nigeria Immigration Service** (URL officielle sur immigration.gov.ng).',
      'جواز نيجيريا الإلكتروني عبر **هجرة نيجيريا** (تحقق من immigration.gov.ng).',
      'Pasaporte electrónico nigeriano vía **Servicio de Inmigración** (immigration.gov.ng).'
    ),
    police: L(
      'Police Character Clearance through official Nigeria Police channels; procedures evolve—follow your U.S. embassy reciprocity page.',
      'Certificat de police via canaux officiels ; suivez la page de réciprocité de l’ambassade américaine.',
      'شهادة حسن السيرة عبر قنوات الشرطة الرسمية؛ اتبع صفحة التعامل المتبادل للسفارة.',
      'Antecedentes por canales oficiales; siga la página de reciprocidad de la embajada.'
    ),
    birth: L(
      'NPC birth certificate / attestation—certified copies from National Population Commission processes.',
      'Actes de naissance NPC — copies certifiées.',
      'شهادة ميلاد NPC — نسخ مصدقة.',
      'Certificado NPC — copias certificadas.'
    ),
    marriage: L(
      'Statutory or customary marriage evidence with certified certificates; divorce decrees from competent courts.',
      'Mariage statutaire ou coutumier : actes certifiés ; divorce : jugements.',
      'زواج مدني أو عرفي بمستندات مصدقة؛ طلاق بأحكام.',
      'Matrimonio estatutario o consuetudinario certificado; divorcio con sentencias.'
    ),
    education: L(
      'WAEC/NECO certificates and university transcripts; verification if instructed by post.',
      'Certificats WAEC/NECO et relevés universitaires ; vérifications si demandées.',
      'شهادات WAEC/NECO وكشوف جامعية؛ تحقق إذا طُلب.',
      'Certificados WAEC/NECO y notas universitarias; verificación si lo piden.'
    ),
    translation: L(
      'English is official; some local-language affidavits may still need certified translation if used as primary civil evidence.',
      'Anglais officiel ; certaines attestations locales peuvent nécessiter traduction certifiée.',
      'الإنجليزية رسمية؛ قد تُترجم بعض الإفادات المحلية إذا كانت دليلاً أساسياً.',
      'Inglés oficial; algunos documentos locales pueden requerir traducción.'
    ),
    embassy: L(
      'Interviews may be at **U.S. Embassy Abuja** or **U.S. Consulate General Lagos**—follow your appointment letter.',
      'Souvent **Abuja** ou **Lagos** — convocation officielle.',
      'غالباً **أبوجا** أو **لاغوس** — الخطاب الرسمي.',
      'A menudo **Abuya** o **Lagos** — carta oficial.'
    ),
  },
  GH: {
    passport: L(
      'Ghanaian passports: **Ministry of Foreign Affairs and Regional Integration** / passport application portal (verify current ghana.gov URLs). Use official centers only.',
      'Passeports ghanéens : ministère des Affaires étrangères — portail officiel (vérifiez ghana.gov).',
      'جواز غانا: وزارة الخارجية — البوابة الرسمية (تحقق من ghana.gov).',
      'Pasaportes de Ghana: Ministerio de Relaciones Exteriores — portal oficial (ghana.gov).'
    ),
    police: L(
      'Police clearance through **Ghana Police Service** criminal investigation channels; follow reciprocity for certified format.',
      'Casier via **Ghana Police Service** ; format certifié selon réciprocité.',
      'شهادة شرطة عبر **خدمة شرطة غانا**؛ التنسيق حسب التعامل المتبادل.',
      'Antecedentes vía **Policía de Ghana**; formato según reciprocidad.'
    ),
    birth: L('Birth registry extracts from Births and Deaths Registry with certification.', 'Extraits du registre des naissances certifiés.', 'مستخرجات من سجل المواليد مصدقة.', 'Extractos del registro civil certificados.'),
    marriage: L('Marriage certificates from Registrar-General’s Department; divorce decrees certified.', 'Actes au registre général ; divorces certifiés.', 'وثائق من سجل عام؛ أحكام طلاق مصدقة.', 'Actas del registro general; divorcios certificados.'),
    education: L('WAEC certificates and tertiary transcripts from issuing institutions.', 'Certificats WAEC et relevés universitaires.', 'شهادات WAEC وكشوف جامعية.', 'Certificados WAEC y notas universitarias.'),
    translation: L('English is official; some local documents may still need certified translation if not in English.', 'Anglais officiel ; traduction possible pour pièces locales.', 'الإنجليزية رسمية؛ ترجمة لبعض الوثائق المحلية.', 'Inglés oficial; traducción para documentos locales.'),
    embassy: L('Nonimmigrant/immigrant processing often at **U.S. Embassy Accra**—verify appointment location.', 'Souvent **Accra** — vérifiez la convocation.', 'غالباً **أكرا** — راجع الموعد.', 'A menudo **Accra** — confirme cita.'),
  },
  MA: {
    passport: L('Moroccan passports via **Direction Générale de la Sûreté Nationale (DGSN)** online services—verify official domain.', 'Passeports marocains via **DGSN** — domaine officiel.', 'جواز المغرب عبر **DGSN** — النطاق الرسمي.', 'Pasaportes marroquíes vía **DGSN** — dominio oficial.'),
    police: L('Judicial record (“casier judiciaire”) through courts/police per Moroccan rules; certified for embassy use.', 'Casier judiciaire via tribunaux / police — copies certifiées.', 'سوابق عدلية عبر القضاء/الشرطة — مصدقة.', 'Antecedentes judiciales vía tribunales/policía — certificados.'),
    birth: L('Civil status extracts (“acte de naissance”) from local civil registry with certification.', 'Extraits d’état civil certifiés.', 'مستخرجات من السجل المدني مصدقة.', 'Extractos del registro civil certificados.'),
    marriage: L('Marriage certificates from civil status; divorce judgments certified.', 'Actes de mariage/divorce certifiés.', 'وثائق زواج/طلاق مصدقة.', 'Actas de matrimonio/divorcio certificadas.'),
    education: L('Baccalaureate and university diplomas/transcripts with ministry attestations if required.', 'Bac et relevés avec légalisations si requis.', 'بكالوريا وشهادات مع تصديقات.', 'Bachillerato y títulos con legalizaciones.'),
    translation: L('French/Arabic documents often need certified English translations.', 'Traductions certifiées en anglais souvent requises.', 'ترجمات إنجليزية معتمدة غالباً.', 'Traducciones certificadas al inglés.'),
    embassy: L('Many Moroccan nationals attend **U.S. Embassy Rabat** for visa services—verify your letter.', 'Souvent **Rabat** — convocation officielle.', 'غالباً **الرباط** — الخطاب الرسمي.', 'A menudo **Rabat** — carta oficial.'),
  },
  DZ: {
    passport: L('Algerian passports via **Ministry of Interior** electronic services—verify official government domain.', 'Passeports algériens via **Ministère de l’Intérieur** — site officiel.', 'جواز الجزائر عبر **وزارة الداخلية** — الموقع الرسمي.', 'Pasaportes argelinos vía **Ministerio del Interior** — sitio oficial.'),
    police: L('Bulletin n°3 / criminal record through competent courts/police per Algerian procedures.', 'Bulletin n°3 / casier selon procédures locales.', 'بيان رقم 3 / سوابق حسب الإجراءات.', 'Boletín n.º 3 / antecedentes según procedimiento.'),
    birth: L('Full copy birth extract from civil status (état civil) with certification.', 'Copie intégrale de naissance certifiée.', 'نسخة كاملة للميلاد مصدقة.', 'Copia integral de nacimiento certificada.'),
    marriage: L('Marriage and divorce records from civil status or courts with certification.', 'Actes d’état civil / jugements certifiés.', 'وثائق أحوال مدنية/أحكام مصدقة.', 'Actas civiles / sentencias certificadas.'),
    education: L('Baccalaureate and university documents with ministry/legalization steps as required.', 'Bac et diplômes avec légalisations.', 'بكالوريا وشهادات مع تصديقات.', 'Bachillerato y títulos con legalizaciones.'),
    translation: L('French/Arabic documents typically need certified English translations.', 'Traductions anglaises certifiées.', 'ترجمات إنجليزية معتمدة.', 'Traducciones al inglés certificadas.'),
    embassy: L('Visa services commonly at **U.S. Embassy Algiers**—confirm appointment details.', 'Souvent **Alger** — convocation.', 'غالباً **الجزائر** — الموعد.', 'A menudo **Argel** — cita.'),
  },
  KE: {
    passport: L('Kenyan passports/ePassport via **Department of Immigration Services** official portal—verify eCitizen links.', 'Passeport kényan via **eCitizen** / immigration officielle.', 'جواز كينيا عبر **eCitizen** الرسمي.', 'Pasaporte keniano vía **eCiudadano** oficial.'),
    police: L('Certificate of Good Conduct through **Directorate of Criminal Investigations (DCI)** / eCitizen workflows.', 'Certificat de bonne conduite via **DCI** / eCitizen.', 'شهادة حسن سيرة عبر **DCI**.', 'Certificado vía **DCI** / eCitizen.'),
    birth: L('Birth certificates from civil registration with certified copies.', 'Actes de naissance certifiés.', 'شهادات ميلاد مصدقة.', 'Partidas certificadas.'),
    marriage: L('Marriage and divorce certificates from Registrar of Marriages / courts as applicable.', 'Actes de mariage/divorce certifiés.', 'وثائق زواج/طلاق مصدقة.', 'Actas matrimonio/divorcio certificadas.'),
    education: L('KNEC certificates and university transcripts from issuing bodies.', 'Certificats KNEC et relevés universitaires.', 'شهادات KNEC وكشوف.', 'Certificados KNEC y notas.'),
    translation: L('English is official; Kiswahili affidavits may need translation if used as primary evidence.', 'Anglais officiel ; traduction possible pour affidavits en kiswahili.', 'الإنجليزية رسمية؛ ترجمة لإفادات بالسواحلية إن لزم.', 'Inglés oficial; traducción para declaraciones en suajili.'),
    embassy: L('Immigrant visa interviews commonly at **U.S. Embassy Nairobi**—follow official instructions.', 'Souvent **Nairobi** — convocation.', 'غالباً **نيروبي** — التعليمات.', 'A menudo **Nairobi** — instrucciones oficiales.'),
  },
  ET: {
    passport: L('Ethiopian passports via **Immigration and Citizenship Service**—verify official government portal.', 'Passeports éthiopiens via le service d’immigration officiel.', 'جواز إثيوبيا عبر خدمة الهجرة الرسمية.', 'Pasaportes etíopes vía inmigración oficial.'),
    police: L('Police certificates from Federal Police / regional commissions per current rules—check reciprocity.', 'Certificats de police fédéraux/régionaux selon règles en vigueur.', 'شهادات شرطة اتحادية/إقليمية.', 'Antecedentes federales/regionales.'),
    birth: L('Birth certificates from civil status agencies with certification.', 'Actes de naissance certifiés.', 'شهادات ميلاد مصدقة.', 'Partidas certificadas.'),
    marriage: L('Marriage and divorce documents from civil status or religious courts as recognized.', 'Actes civils ou religieux reconnus.', 'وثائق مدنية أو دينية معترف بها.', 'Actas civiles o religiosas reconocidas.'),
    education: L('Ministry of Education authenticated transcripts and diplomas when required.', 'Relevés et diplômes authentifiés si requis.', 'كشوف وشهادات مصدقة من الوزارة.', 'Notas y títulos autenticados si se requiere.'),
    translation: L('Amharic documents often need certified English translations.', 'Traductions certifiées en anglais pour l’amharique.', 'ترجمة إنجليزية للأمهرية.', 'Traducción certificada del amárico.'),
    embassy: L('Visa services at **U.S. Embassy Addis Ababa**—verify security and appointment rules.', 'Souvent **Addis-Abeba** — règles de sécurité.', 'غالباً **أديس أبابا** — الأمن والموعد.', 'A menudo **Addis Abeba** — seguridad y cita.'),
  },
  NP: {
    passport: L('Nepali passports via **Department of Passport** official services—verify government domain.', 'Passeports népalais via le département officiel.', 'جواز نيبال عبر الإدارة الرسمية.', 'Pasaportes nepalíes vía departamento oficial.'),
    police: L('Police clearance from **Nepal Police** HQ or designated offices per reciprocity.', 'Casier via la **police népalaise**.', 'شهادة من **شرطة نيبال**.', 'Antecedentes vía **Policía de Nepal**.'),
    birth: L('Birth registration extracts from local ward/civil registrar with certification.', 'Extraits d’état civil certifiés.', 'مستخرجات أحوال مدنية مصدقة.', 'Extractos certificados del registro.'),
    marriage: L('Marriage registration certificates; divorce court orders certified.', 'Actes de mariage/divorce certifiés.', 'وثائق زواج/طلاق مصدقة.', 'Actas matrimonio/divorcio certificadas.'),
    education: L('SEE/+2 and university transcripts; Tribhuvan University verification if needed.', 'Diplômes SEE/+2 et relevés universitaires.', 'شهادات ثانوية وجامعية.', 'Certificados SEE/+2 y notas universitarias.'),
    translation: L('Nepali documents typically need certified English translations.', 'Traductions anglaises certifiées.', 'ترجمات إنجليزية معتمدة.', 'Traducciones al inglés certificadas.'),
    embassy: L('Immigrant visa interviews at **U.S. Embassy Kathmandu**—follow appointment letter.', 'Souvent **Katmandou** — convocation.', 'غالباً **كاتماندو** — الموعد.', 'A menudo **Katmandú** — cita.'),
  },
  BD: {
    passport: L('Bangladeshi machine-readable passports via **Department of Immigration and Passports** e-service—verify official .gov.bd domain.', 'Passeports bangladais via le service officiel d’immigration.', 'جواز بنغلاديش عبر خدمة الهجرة الرسمية.', 'Pasaportes de Bangladés vía inmigración oficial.'),
    police: L('Police clearance from **Bangladesh Police** channels (IVAC/DMP etc.) per current reciprocity—confirm with embassy.', 'Casier via **police du Bangladesh** selon réciprocité.', 'شهادة من **شرطة بنغلاديش**.', 'Antecedentes vía **Policía de Bangladés**.'),
    birth: L('Birth certificates from Union Parishad / municipality with notarization/attestation as required.', 'Actes de naissance locaux certifiés / attestés.', 'شهادات ميلاد محلية مصدقة/موثقة.', 'Partidas locales certificadas/legalizadas.'),
    marriage: L('Nikah Nama / marriage affidavits and court divorce decrees with attestations.', 'Actes de mariage/divorce attestés.', 'وثائق زواج/طلاق موثقة.', 'Actas matrimonio/divorcio legalizadas.'),
    education: L('Board certificates and university transcripts with education board attestations if required.', 'Certificats de board et relevés attestés.', 'شهادات مجالس وكشوف موثقة.', 'Certificados de junta y notas legalizados.'),
    translation: L('Bengali documents require certified English translations for U.S. immigrant visa packets.', 'Traductions certifiées en anglais pour le bengali.', 'ترجمة إنجليزية معتمدة للبنغالية.', 'Traducción certificada del bengalí.'),
    embassy: L('Immigrant visa interviews at **U.S. Embassy Dhaka**—follow security rules.', 'Souvent **Dacca** — règles de sécurité.', 'غالباً **دكا** — الأمن.', 'A menudo **Daca** — seguridad.'),
  },
}

export function hasDetailedGuide(iso) {
  return Boolean(COUNTRY_GUIDE_DB[iso])
}

export function getGuideSections(iso, lang) {
  const lc = lang === 'fr' ? 'fr' : lang === 'ar' ? 'ar' : lang === 'es' ? 'es' : 'en'
  const g = COUNTRY_GUIDE_DB[iso]
  if (!g) return null
  return KEYS.map((k, i) => ({
    key: k,
    title: LABEL[lc][i],
    body: g[k][lc],
  }))
}

export function genericGuideSections(countryLabel, lang) {
  const lc = lang === 'fr' ? 'fr' : lang === 'ar' ? 'ar' : lang === 'es' ? 'es' : 'en'
  const t = (en, fr, ar, es) => ({ en, fr, ar, es }[lc])
  const c = countryLabel
  return KEYS.map((k, i) => ({
    key: k,
    title: LABEL[lc][i],
    body: t(
      `For ${c}, start from the U.S. Department of State reciprocity & civil documents page for that country, then download your embassy’s latest instruction PDF. Requirements change—verify seals, extracts vs full copies, and translation rules.\n\nNever pay random “agents” for guaranteed documents.`,
      `Pour ${c}, commencez par la page de réciprocité et documents civils du Département d’État, puis le PDF d’instructions de votre ambassade. Les exigences évoluent — vérifiez sceaux, extraits intégraux et règles de traduction.\n\nNe payez pas d’agents aléatoires pour des documents “garantis”.`,
      `بالنسبة إلى ${c}، ابدأ من صفحة التعامل المتبادل والوثائق المدنية لوزارة الخارجية الأمريكية، ثم نزل ملف تعليمات سفارتك الأحدث. المتطلبات تتغير — راجع الأختام والنسخ الكاملة وقواعد الترجمة.\n\nلا تدفع لوكلاء عشوائيين يعدون وثائق «مضمونة».`,
      `Para ${c}, comience por la página de reciprocidad y documentos civiles del Departamento de Estado y luego el PDF de instrucciones de su embajada. Los requisitos cambian: verifique sellos, copias íntegras y reglas de traducción.\n\nNo pague a gestores aleatorios por documentos “garantizados”.`
    ),
  }))
}
