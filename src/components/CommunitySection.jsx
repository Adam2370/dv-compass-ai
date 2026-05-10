import { useLanguage } from '../hooks/useLanguage'
import { SectionHeading } from './SectionHeading'

const groups = ['Applicants', 'Selected Winners', 'DS-260 Help', 'Interview Preparation', 'Visa Approved', 'New Arrivals', 'Alumni / Mentors']

const future = ['Embassy groups', 'Country groups', 'City groups', 'Housing tips', 'Job opportunities', 'Interview experiences', 'Scam alerts']

export function CommunitySection() {
  const { t } = useLanguage()
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('community.title')} subtitle={t('community.subtitle')} />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-violet-300 mb-4">Groups</h3>
            <div className="flex flex-wrap gap-2">
              {groups.map((g) => (
                <span key={g} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                  {g}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-violet-300 mb-4">Future features</h3>
            <ul className="text-sm text-slate-400 space-y-2">
              {future.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-violet-400">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-900/30 hover:brightness-110 transition-all"
          >
            {t('communityCta')}
          </button>
        </div>
      </div>
    </section>
  )
}
