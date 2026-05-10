/** @typedef {import('./globalTemplate.js').CountryGuideModel} CountryGuideModel */
import { OFFICIAL_SOURCES } from '../officialSources.js'

const L = (en, fr, ar, es) => ({ en, fr, ar, es })

const SRC = [
  { id: 'reciprocity', url: OFFICIAL_SOURCES.reciprocityByCountry },
  { id: 'dvInstructions', url: OFFICIAL_SOURCES.dvInstructions },
  { id: 'listOfPosts', url: OFFICIAL_SOURCES.listOfImmigrantVisaPosts },
]

/** @type {Record<string, CountryGuideModel>} */
export const SEED_COUNTRY_GUIDES = {
  CM: {
    code: 'CM',
    name: 'Cameroon',
    verificationStatus: 'seed_verified',
    lastVerified: null,
    officialSources: SRC,
    documents: {
      passport: L(
        'Passport: Some applicants reference **passcam.cm** as a user-provided portal for online pre-enrollment steps. **Verify current official status and procedure on the State Department reciprocity page and your embassy’s instructions before relying on any portal.**\n\nAlso consult the official DGSN / passport channels listed on reciprocity. Avoid look-alike scam sites; pay only on authorized channels.',
        'Passeport : certains candidats mentionnent **passcam.cm** comme portail de préinscription. **Vérifiez le statut officiel actuel sur la page de réciprocité du Département d’État et les instructions de l’ambassade avant de vous fier à un portail.**\n\nConsultez aussi les canaux officiels indiqués en réciprocité. Méfiez-vous des faux sites.',
        'جواز السفر: يذكر بعض المتقدمين **passcam.cm** كبوابة للتسجيل المسبق. **تحقق من الوضع الرسمي الحالي عبر صفحة التعامل المتبادل وتعليمات السفارة قبل الاعتماد على أي بوابة.**\n\nراجع أيضاً القنوات الرسمية في صفحة التعامل المتبادل. تجنب المواقع المقلدة.',
        'Pasaporte: algunos solicitantes citan **passcam.cm** como portal de preinscripción. **Verifique el procedimiento oficial vigente en la página de reciprocidad del Departamento de Estado y en las instrucciones de la embajada antes de depender de cualquier portal.**\n\nConsulte los canales oficiales en reciprocidad. Evite sitios fraudulentos.'
      ),
      birthCertificate: L(
        'Birth certificate: Original or **certified civil-status extract** from the register is typically required—not an informal handwritten attestation. If names differ across documents, obtain an official amendment trail before interview.',
        'Acte de naissance : **copie certifiée conforme** des registres d’état civil, pas une attestation informelle.',
        'شهادة الميلاد: عادة **نسخة مصدقة من السجل المدني** وليس إيضاحاً غير رسمي.',
        'Acta de nacimiento: **copia certificada** del registro civil, no una nota informal.'
      ),
      policeCertificate: L(
        'Police certificate: For U.S. immigration this often means a criminal record extract commonly called **Bulletin No. 3** (extrait de casier judiciaire). Processing times vary; request **certified originals** accepted by your U.S. embassy. Use official channels only.',
        'Casier judiciaire : souvent le **bulletin n°3**. Délais variables ; demandez des **originaux certifiés** acceptés par l’ambassade américaine.',
        'شهادة الشرطة: غالباً **النشرة رقم 3** (مستخرج سوابق). اطلب **أصولاً مصدقة** تقبلها السفارة.',
        'Antecedentes: a menudo el **boletín n.º 3**. Solicite **originales certificados** aceptados por la embajada.'
      ),
      marriageCertificate: L(
        'Marriage: certified civil marriage certificate from civil status. **If not applicable, note N/A on forms per instructions.**',
        'Mariage : acte de mariage civil certifié. **Si sans objet, indiquez N/A selon les instructions.**',
        'الزواج: شهادة زواج مدنية مصدقة. **إن لم ينطبق، أشر إلى N/A حسب التعليمات.**',
        'Matrimonio: acta civil certificada. **Si no aplica, indique N/A según instrucciones.**'
      ),
      divorceCertificate: L(
        'Divorce: **If applicable**, certified court judgment or extract. Complex marital history should include a clear timeline and official dissolution documents.',
        'Divorce : **si applicable**, jugement ou extrait certifié. Historique complexe : chronologie et pièces officielles.',
        'الطلاق: **إن انطبق**، حكم أو مستخرج محكمة مصدق.',
        'Divorcio: **si aplica**, sentencia o extracto certificado.'
      ),
      militaryRecords: L(
        'Military records: **If applicable**, follow reciprocity and embassy instructions for certificates of military service or proof of non-service.',
        'Service militaire : **si applicable**, suivez la réciprocité et l’ambassade.',
        'الخدمة العسكرية: **إن انطبق**، اتبع التعامل المتبادل والسفارة.',
        'Servicio militar: **si aplica**, siga reciprocidad y embajada.'
      ),
      courtPrisonRecords: L(
        'Court / prison records: **If applicable**, certified documents per reciprocity (convictions, sentences, rehabilitation).',
        'Antécédents judiciaires / détention : **si applicable**, pièces certifiées selon réciprocité.',
        'سجلات قضائية: **إن انطبق**، وثائق مصدقة حسب التعامل المتبادل.',
        'Antecedentes judiciales o penitenciarios: **si aplica**, documentos certificados según reciprocidad.'
      ),
      educationDocuments: L(
        'Education: High school diploma, university degree, transcripts, and supporting education records **may help prove DV eligibility** where applicable. Organize originals and copies per post checklist.',
        'Études : diplômes, relevés et pièces pédagogiques selon le dossier DV et la convocation.',
        'التعليم: الشهادات والكشوف قد تثبت الأهلية حيث ينطبق ذلك.',
        'Educación: títulos y notas pueden respaldar elegibilidad DV cuando aplique.'
      ),
      translations: L(
        'Translations: French is widely used; **certified English translations** are commonly required. Follow embassy and reciprocity instructions for translator credentials.',
        'Traductions : traductions **certifiées en anglais** souvent requises.',
        'الترجمات: غالباً **ترجمات إنجليزية معتمدة**.',
        'Traducciones: suelen exigirse **traducciones certificadas al inglés**.'
      ),
    },
    embassyNotes: L(
      'Many applicants in Cameroon process through **U.S. Embassy Yaoundé**. Follow your appointment letter and official security instructions.',
      'Souvent **U.S. Embassy Yaoundé** — suivez la convocation officielle.',
      'غالباً **سفارة الولايات المتحدة ياوندي** — اتبع الخطاب الرسمي.',
      'Muchos tramitan en **Embajada de EE. UU. en Yaundé** — siga su carta oficial.'
    ),
    warnings: L(
      'Final document lists depend on **official reciprocity, embassy instructions, age, residence duration, and case facts**.',
      'La liste finale dépend de la **réciprocité officielle, de l’ambassade, de l’âge, des durées de résidence et des faits**.',
      'القائمة النهائية تعتمد على **التعامل المتبادل الرسمي وتعليمات السفارة والعمر والإقامة ووقائع الحالة**.',
      'Los requisitos finales dependen de la **reciprocidad oficial, la embajada, la edad, la residencia y los hechos del caso**.'
    ),
  },
  IN: {
    code: 'IN',
    name: 'India',
    verificationStatus: 'seed_verified',
    lastVerified: null,
    officialSources: SRC,
    documents: {
      passport: L(
        'Passport: Ministry of External Affairs **Passport Seva** (passportindia.gov.in). Book appointments only on the **official** portal.',
        'Passeport : **Passport Seva** — rendez-vous uniquement sur le portail officiel.',
        'جواز السفر: **Passport Seva** — احجز عبر البوابة الرسمية فقط.',
        'Pasaporte: **Passport Seva** — reserve solo en el portal oficial.'
      ),
      birthCertificate: L(
        'Birth certificate: Certified extracts from municipal corporation or registrar of births with seal and signature.',
        'Naissance : extraits certifiés avec sceau et signature.',
        'شهادة ميلاد: مستخرج مصدق بختم وتوقيع.',
        'Nacimiento: extracto certificado con sello y firma.'
      ),
      policeCertificate: L(
        'Police Clearance Certificate (PCC): Requirements **may depend on age, residence history, and official reciprocity rules**. Confirm current reciprocity and embassy instructions—do not assume a single nationwide rule for every applicant.',
        'PCC : les règles **peuvent varier** selon l’âge, les lieux de résidence et la réciprocité. Vérifiez les instructions officielles.',
        'شهادة عدم المحكومية PCC: قد تعتمد على **العمر وتاريخ الإقامة والتعامل المتبادل**. راجع التعليمات الرسمية.',
        'PCC: puede depender de **edad, historial de residencia y reciprocidad**. Confirme instrucciones oficiales.'
      ),
      marriageCertificate: L(
        'Marriage: Statutory / Hindu / Muslim / Christian registers produce different certificate formats—submit the version appropriate to your case with certified copies.',
        'Mariage : formats variables selon le régime — copies certifiées reconnues.',
        'الزواج: سجلات مختلفة — قدّم النسخ المعترف بها مصدقة.',
        'Matrimonio: distintos registros — actas certificadas reconocidas.'
      ),
      divorceCertificate: L(
        'Divorce: Certified court decrees when applicable.',
        'Divorce : jugements certifiés si applicable.',
        'الطلاق: أحكام محكمة مصدقة إن انطبق.',
        'Divorcio: sentencias certificadas si aplica.'
      ),
      militaryRecords: L(
        'Military records: **If applicable**, follow reciprocity for service or proof of non-service.',
        'Service militaire : **si applicable**, réciprocité.',
        'الخدمة العسكرية: **إن انطبق**، اتبع التعامل المتبادل.',
        'Servicio militar: **si aplica**, reciprocidad.'
      ),
      courtPrisonRecords: L(
        'Court / prison records: **If applicable**, certified per reciprocity.',
        'Jugements / détention : **si applicable**, selon réciprocité.',
        'سجلات قضائية: **إن انطبق** حسب التعامل المتبادل.',
        'Antecedentes judiciales: **si aplica**, según reciprocidad.'
      ),
      educationDocuments: L(
        'Education: Degrees, mark sheets, transcripts, and certificates from issuing institutions. Organize records used to support DV eligibility.',
        'Études : diplômes, relevés et certificats des établissements émetteurs.',
        'التعليم: شهادات وكشوف من الجهات المانحة.',
        'Educación: títulos, notas y certificados de las instituciones.'
      ),
      translations: L(
        'Translations: Hindi and regional-language documents often need **certified English translations** unless post guidance states otherwise. Many records may already be partly in English—**still verify** embassy and reciprocity requirements.',
        'Traductions : souvent **anglais certifié** ; vérifiez quand même les exigences du poste.',
        'الترجمات: غالباً **إنجليزية معتمدة**؛ تحقق من السفارة.',
        'Traducciones: a menudo **inglés certificado**; verifique con la embajada.'
      ),
    },
    embassyNotes: L(
      'Immigrant visa interviews may be at **U.S. Embassy New Delhi** or **U.S. Consulates** in India depending on official routing—follow your appointment letter.',
      'Entretiens souvent à **New Delhi** ou consulats — convocation officielle.',
      'المقابلات قد تكون في **نيودلهي** أو قنصليات — راجع خطاب الموعد.',
      'Entrevistas en **Nueva Delhi** u otros consulados — siga su carta.'
    ),
    warnings: L(
      'Final requirements depend on **official reciprocity, embassy instructions, and case facts**.',
      'Exigences finales : **réciprocité officielle, ambassade et faits**.',
      'المتطلبات النهائية: **التعامل المتبادل والسفارة ووقائع الحالة**.',
      'Requisitos finales: **reciprocidad, embajada y hechos**.'
    ),
  },
  AE: {
    code: 'AE',
    name: 'United Arab Emirates',
    verificationStatus: 'seed_verified',
    lastVerified: null,
    officialSources: SRC,
    documents: {
      passport: L(
        'Passport: Residency ties to **Emirates ID** and visas. Passport renewal for your nationality is often through your **home-country mission** in the UAE—verify that mission’s official guidance.',
        'Passeport : lien avec **Emirates ID** ; renouvellement souvent via la mission de votre pays.',
        'جواز السفر: مرتبط بهوية الإمارات؛ التجديد غالباً عبر بعثة بلدك.',
        'Pasaporte: vínculo con **Emirates ID**; renovación vía misión de su país.'
      ),
      birthCertificate: L(
        'Birth certificate: For children born in the UAE, follow **emirate-specific** civil/health procedures—request certified extracts.',
        'Naissance aux Émirats : procédures **par émirat** — extraits certifiés.',
        'الميلاد في الإمارات: إجراءات **حسب الإمارة** — مستخرج مصدق.',
        'Nacidos en EAU: trámites **por emirato** — extractos certificados.'
      ),
      policeCertificate: L(
        'Police clearance: May be required depending on **residence history and official reciprocity rules**. UAE procedures differ by emirate (e.g., Dubai, Abu Dhabi). **Emirates ID and biometrics** are commonly involved—confirm current official steps.',
        'Casier : peut être requis selon **résidence et réciprocité** ; procédures variables par émirat.',
        'الشرطة: قد تُطلب حسب **الإقامة والتعامل المتبادل**؛ تختلف الإجراءات بين الإمارات.',
        'Antecedentes: puede requerirse según **residencia y reciprocidad**; trámites por emirato.'
      ),
      marriageCertificate: L(
        'Marriage: UAE-issued certificates may need additional attestations for U.S. immigrant visa use—follow **reciprocity and post checklists**.',
        'Mariage : attestations supplémentaires possibles selon réciprocité.',
        'الزواج: قد تحتاج تصديقات إضافية حسب التعامل المتبادل.',
        'Matrimonio: pueden requerirse legalizaciones según reciprocidad.'
      ),
      divorceCertificate: L(
        'Divorce: **If applicable**, certified judgments per reciprocity and local law.',
        'Divorce : **si applicable**, jugements certifiés.',
        'الطلاق: **إن انطبق**، أحكام مصدقة.',
        'Divorcio: **si aplica**, sentencias certificadas.'
      ),
      militaryRecords: L(
        'Military records: **If applicable**, follow reciprocity.',
        'Service militaire : **si applicable**.',
        'الخدمة العسكرية: **إن انطبق**.',
        'Servicio militar: **si aplica**.'
      ),
      courtPrisonRecords: L(
        'Court / prison records: **If applicable**, certified per reciprocity.',
        'Jugements : **si applicable**.',
        'سجلات قضائية: **إن انطبق**.',
        'Antecedentes: **si aplica**.'
      ),
      educationDocuments: L(
        'Education: Degrees and transcripts; **Emirates ID, residence visa history, and employment history** may help organize DS-260 timelines—keep accurate, honest records.',
        'Études : diplômes et relevés ; historique **visa / emploi** utile pour le DS-260.',
        'التعليم: الشهادات؛ **تاريخ الإقامة والعمل** يساعد على تنظيم DS-260.',
        'Educación: títulos; historial de **visa y empleo** ayuda al DS-260.'
      ),
      translations: L(
        'Translations: Arabic documents often need **certified English translations** unless post guidance says otherwise.',
        'Traductions : **anglais certifié** fréquent pour l’arabe.',
        'الترجمات: غالباً **إنجليزية معتمدة** للعربية.',
        'Traducciones: **inglés certificado** frecuente para árabe.'
      ),
    },
    embassyNotes: L(
      'Many Gulf applicants attend **U.S. Embassy Abu Dhabi** or **U.S. Consulate General Dubai** depending on case routing—verify your appointment letter.',
      'Souvent **Abou Dabi** ou **Dubaï** — convocation officielle.',
      'غالباً **أبوظبي** أو **دبي** — الخطاب الرسمي.',
      'A menudo **Abu Dabi** o **Dubái** — carta oficial.'
    ),
    warnings: L(
      'Final requirements depend on **official reciprocity, embassy instructions, and case facts**.',
      'Final : **réciprocité, ambassade, faits**.',
      'النهائي: **التعامل المتبادل والسفارة**.',
      'Final: **reciprocidad y embajada**.'
    ),
  },
  NG: {
    code: 'NG',
    name: 'Nigeria',
    verificationStatus: 'seed_verified',
    lastVerified: null,
    officialSources: SRC,
    documents: {
      passport: L(
        'Passport: Nigerian e-passports through **Nigeria Immigration Service**—verify the **current official** URL and authorized capture centers on government sources.',
        'Passeport : **Nigeria Immigration Service** — URL et centres officiels.',
        'جواز: **خدمة الهجرة النيجيرية** — رابط رسمي ومراكز مصرح بها.',
        'Pasaporte: **Servicio de Inmigración** — sitio y centros oficiales.'
      ),
      birthCertificate: L(
        'Birth certificate: NPC / civil registration extracts—**certified copies** per reciprocity.',
        'Naissance : extraits NPC certifiés.',
        'الميلاد: مستخرجات مصدقة حسب التعامل المتبادل.',
        'Nacimiento: extractos certificados según reciprocidad.'
      ),
      policeCertificate: L(
        'Police certificate: Follow **official Nigeria Police** channels; procedures evolve. **Confirm format and validity on the reciprocity page and embassy instructions**—do not rely on informal brokers.',
        'Police : canaux officiels ; **vérifiez réciprocité et ambassade**.',
        'الشرطة: قنوات رسمية؛ **راجع التعامل المتبادل والسفارة**.',
        'Policía: canales oficiales; **confirme reciprocidad y embajada**.'
      ),
      marriageCertificate: L(
        'Marriage: Statutory or customary marriage evidence with **certified certificates** when applicable.',
        'Mariage : preuves certifiées (statutaire / coutumier).',
        'الزواج: مستندات مصدقة عند الانطباق.',
        'Matrimonio: pruebas certificadas si aplica.'
      ),
      divorceCertificate: L(
        'Divorce: **If applicable**, certified court decrees from competent courts.',
        'Divorce : jugements certifiés si applicable.',
        'الطلاق: أحكام مصدقة إن انطبق.',
        'Divorcio: sentencias certificadas si aplica.'
      ),
      militaryRecords: L(
        'Military records: **If applicable**, per reciprocity and embassy.',
        'Militaire : **si applicable**.',
        'عسكري: **إن انطبق**.',
        'Militar: **si aplica**.'
      ),
      courtPrisonRecords: L(
        'Court / prison records: **If applicable**, certified per reciprocity.',
        'Justice : **si applicable**.',
        'قضائي: **إن انطبق**.',
        'Judicial: **si aplica**.'
      ),
      educationDocuments: L(
        'Education: WAEC/NECO and university transcripts; **verification if instructed by post**.',
        'Études : WAEC/NECO et relevés ; vérification si demandée.',
        'التعليم: WAEC/NECO وكشوف؛ تحقق إذا طُلب.',
        'Educación: WAEC/NECO y notas; verificación si lo piden.'
      ),
      translations: L(
        'Translations: English is official; some local-language evidence may still need **certified translation** if used as primary civil proof—verify with the post.',
        'Traductions : anglais officiel ; traduction possible pour pièces locales.',
        'الترجمات: الإنجليزية رسمية؛ قد تُترجم بعض الوثائق المحلية.',
        'Traducciones: inglés oficial; posible traducción para pruebas locales.'
      ),
    },
    embassyNotes: L(
      'Interviews may be at **U.S. Embassy Abuja** or **U.S. Consulate General Lagos**—follow your appointment letter.',
      'Souvent **Abuja** ou **Lagos** — convocation.',
      'غالباً **أبوجا** أو **لاغوس** — الخطاب الرسمي.',
      'A menudo **Abuya** o **Lagos** — carta oficial.'
    ),
    warnings: L(
      '**Verify all requirements** on the official reciprocity page and embassy instructions; avoid unauthorized document brokers.',
      '**Vérifiez** réciprocité et ambassade ; évitez intermédiaires non officiels.',
      '**تحقق** من التعامل المتبادل والسفارة؛ تجنب الوسطاء غير الرسميين.',
      '**Verifique** reciprocidad y embajada; evite gestores no autorizados.'
    ),
  },
  GH: {
    code: 'GH',
    name: 'Ghana',
    verificationStatus: 'seed_verified',
    lastVerified: null,
    officialSources: SRC,
    documents: {
      passport: L(
        'Passport: Ghanaian passports via **Ministry of Foreign Affairs and Regional Integration** / official application channels—verify **current ghana.gov** or official portals; use authorized centers only.',
        'Passeport : **Ministère des Affaires étrangères** — canaux officiels (ghana.gov).',
        'جواز: **وزارة الخارجية** — قنوات رسمية.',
        'Pasaporte: **Ministerio de Relaciones Exteriores** — canales oficiales.'
      ),
      birthCertificate: L(
        'Birth certificate: Registry extracts from **Births and Deaths Registry** with certification per reciprocity.',
        'Naissance : extraits du registre certifiés.',
        'الميلاد: مستخرجات من السجل مصدقة.',
        'Nacimiento: extractos del registro certificados.'
      ),
      policeCertificate: L(
        'Police certificate: Through **Ghana Police Service** channels; **confirm certified format on reciprocity** and embassy instructions.',
        'Police : **Ghana Police Service** ; format selon réciprocité.',
        'الشرطة: **شرطة غانا**؛ راجع التعامل المتبادل.',
        'Policía: **Policía de Ghana**; formato según reciprocidad.'
      ),
      marriageCertificate: L(
        'Marriage: Certificates from **Registrar-General’s Department**; certified copies.',
        'Mariage : actes au registre général certifiés.',
        'الزواج: وثائق من السجل العام مصدقة.',
        'Matrimonio: actas del registro general certificadas.'
      ),
      divorceCertificate: L(
        'Divorce: **If applicable**, certified court decrees.',
        'Divorce : jugements certifiés.',
        'الطلاق: أحكام مصدقة.',
        'Divorcio: sentencias certificadas.'
      ),
      militaryRecords: L(
        'Military records: **If applicable**, per reciprocity.',
        'Militaire : si applicable.',
        'عسكري: إن انطبق.',
        'Militar: si aplica.'
      ),
      courtPrisonRecords: L(
        'Court / prison records: **If applicable**, certified.',
        'Justice : si applicable.',
        'قضائي: إن انطبق.',
        'Judicial: si aplica.'
      ),
      educationDocuments: L(
        'Education: **WAEC** certificates and tertiary transcripts from issuing institutions.',
        'Études : WAEC et relevés universitaires.',
        'التعليم: WAEC وكشوف جامعية.',
        'Educación: WAEC y notas universitarias.'
      ),
      translations: L(
        'Translations: English is official; some local documents may still need **certified English translation** if not in English—verify with post.',
        'Traductions : anglais officiel ; traduction si pièce locale.',
        'الترجمات: الإنجليزية رسمية؛ ترجمة عند الحاجة.',
        'Traducciones: inglés oficial; traducción si aplica.'
      ),
    },
    embassyNotes: L(
      'Immigrant visa processing is often at **U.S. Embassy Accra**—verify appointment location on your letter.',
      'Souvent **Accra** — vérifiez la convocation.',
      'غالباً **أكرا** — راجع الموعد.',
      'A menudo **Accra** — confirme la cita.'
    ),
    warnings: L(
      '**Confirm every requirement** on the State Department reciprocity page and your embassy’s official instructions.',
      '**Confirmez** sur la réciprocité et l’ambassade.',
      '**أكد** عبر التعامل المتبادل والسفارة.',
      '**Confirme** en reciprocidad y embajada.'
    ),
  },
}
