import { useLanguage } from '../hooks/useLanguage'
import { SectionHeading } from './SectionHeading'

const embassies = [
  'U.S. Embassy Yaoundé',
  'U.S. Embassy Abu Dhabi',
  'U.S. Embassy New Delhi',
  'U.S. Embassy Accra',
  'U.S. Embassy Nairobi',
]

export function EmbassyMedical() {
  const { t } = useLanguage()
  return (
    <section id="embassy" className="py-20 md:py-28 border-t border-white/5 bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('embassy.title')} subtitle={t('embassy.subtitle')} />

        <div className="grid gap-6 md:grid-cols-2">
          {embassies.map((name) => (
            <article
              key={name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md hover:border-indigo-400/35 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-4">{name}</h3>
              <ul className="text-sm text-slate-400 space-y-2 mb-4">
                <li>Address: official placeholder</li>
                <li>
                  <button
                    type="button"
                    className="text-violet-300 hover:text-violet-200 underline-offset-2 hover:underline"
                  >
                    {t('common.mapsPlaceholder')}
                  </button>
                </li>
                <li>Interview prep: organize originals + copies; tabbed binder.</li>
                <li>Security: expect screening; prohibited items vary—check post notices.</li>
                <li>Arrival: plan to arrive earlier than the appointment window recommends.</li>
                <li>Medical: complete exam only with panel physician listed by the embassy.</li>
                <li>Panel physician: placeholder link per post instructions.</li>
                <li>Nearby hotel / transport: placeholders for planning.</li>
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-8 md:p-10 backdrop-blur-md">
          <h3 className="text-2xl font-semibold text-white mb-4">{t('medicalGuide')}</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            A medical examination by an embassy-approved panel physician is required before most immigrant visa interviews.
            Only authorized physicians may complete the exam forms accepted by the consulate.
          </p>
          <ul className="list-disc ps-5 text-sm text-slate-400 space-y-2 mb-6">
            <li>Bring vaccination records and passport-sized photos if instructed.</li>
            <li>Carry your passport and interview-related documents to the clinic.</li>
            <li>Follow the embassy-specific medical instructions for scheduling and payment.</li>
          </ul>
          <h4 className="font-semibold text-emerald-200 mb-2">Checklist</h4>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-400">
            {['Passport', 'Interview letter', 'Vaccination history', 'Medical payment', 'Passport photos if required'].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
