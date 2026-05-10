import { useLanguage } from '../hooks/useLanguage'
import { SectionHeading } from './SectionHeading'

const resources = [
  { title: 'DV Instructions', desc: 'Official rules, dates, and photo standards for each program year.' },
  { title: 'Entrant Status Check', desc: 'Check selection and visa interview readiness through authorized portals.' },
  { title: 'DS-260', desc: 'Immigrant visa application used after selection and fee payment where required.' },
  { title: 'Visa Bulletin', desc: 'Monthly priority date and DV cut-off tracking for visa availability.' },
  { title: 'Reciprocity & Civil Documents', desc: 'Country-specific document formats and issuance guidance.' },
  { title: 'Embassy Interview Instructions', desc: 'Post-specific guidance for appointments, security, and documents.' },
  { title: 'USCIS New Immigrant Guide', desc: 'Orientation for new permanent residents after admission.' },
  { title: 'Social Security', desc: 'SSN application guidance for work-authorized newcomers.' },
  { title: 'IRS', desc: 'Taxpayer basics for first-time filers and ITIN where applicable.' },
  { title: 'DMV Resources', desc: 'State-level driver licensing and ID requirements (varies widely).' },
]

export function OfficialResources() {
  const { t } = useLanguage()
  return (
    <section id="resources" className="py-20 md:py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('resources.title')} subtitle={t('resources.subtitle')} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.title}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all"
            >
              <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-100 transition-colors">{r.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{r.desc}</p>
              <span className="text-xs font-medium text-cyan-300/90">{t('common.officialPlaceholder')} ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
