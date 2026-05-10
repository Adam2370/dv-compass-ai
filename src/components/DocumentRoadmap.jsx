import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { SectionHeading } from './SectionHeading'

const defaultForm = {
  nationality: 'Cameroon',
  birthCountry: 'Cameroon',
  residence: 'United Arab Emirates',
  lived: 'Cameroon, India, United Arab Emirates',
  studied: 'India',
  worked: 'United Arab Emirates',
  marital: 'Cameroon',
  military: 'None',
  embassy: 'U.S. Embassy Abu Dhabi',
  education: "Bachelor's degree",
  spouse: 'yes',
  children: 'no',
}

export function DocumentRoadmap() {
  const { t } = useLanguage()
  const [form, setForm] = useState(defaultForm)

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <section id="roadmap" className="py-20 md:py-28 border-t border-white/5 bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('roadmap.title')} subtitle={t('roadmap.subtitle')} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-xl space-y-4">
            {[
              ['nationality', t('roadmap.nationality')],
              ['birthCountry', t('roadmap.birthCountry')],
              ['residence', t('roadmap.residence')],
              ['lived', t('roadmap.lived')],
              ['studied', t('roadmap.studied')],
              ['worked', t('roadmap.worked')],
              ['marital', t('roadmap.marital')],
              ['military', t('roadmap.military')],
              ['embassy', t('roadmap.embassy')],
              ['education', t('roadmap.education')],
            ].map(([key, label]) => (
              <label key={key} className="block">
                <span className="text-xs font-medium text-slate-400">{label}</span>
                <input
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5 text-sm text-white outline-none focus:border-violet-400/50 focus:ring-1 focus:ring-violet-500/40"
                  value={form[key]}
                  onChange={onChange(key)}
                />
              </label>
            ))}
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-medium text-slate-400">{t('roadmap.spouse')}</span>
                <select
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5 text-sm text-white outline-none focus:border-violet-400/50"
                  value={form.spouse}
                  onChange={onChange('spouse')}
                >
                  <option value="yes">{t('roadmap.yes')}</option>
                  <option value="no">{t('roadmap.no')}</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-400">{t('roadmap.children')}</span>
                <select
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5 text-sm text-white outline-none focus:border-violet-400/50"
                  value={form.children}
                  onChange={onChange('children')}
                >
                  <option value="yes">{t('roadmap.yes')}</option>
                  <option value="no">{t('roadmap.no')}</option>
                </select>
              </label>
            </div>
            <button
              type="button"
              className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:brightness-110 transition-all"
            >
              {t('roadmap.generate')}
            </button>
            <p className="text-xs text-slate-500 leading-relaxed">{t('disclaimer.short')}</p>
          </div>

          <div className="space-y-5">
              <h3 className="text-lg font-semibold text-white">{t('roadmap.cardsTitle')}</h3>

              <article className="rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 to-transparent p-6 backdrop-blur-md">
                <h4 className="text-violet-200 font-semibold mb-1">Cameroon — civil documents</h4>
                <p className="text-xs text-slate-500 mb-4">Based on nationality / birth: {form.nationality}</p>
                <ul className="text-sm text-slate-300 space-y-2 list-disc ps-5">
                  <li>Birth certificate</li>
                  <li>Passport</li>
                  <li>National ID if applicable</li>
                  <li>Police certificate if required</li>
                  <li>Marriage certificate if applicable</li>
                  <li>Divorce certificate if applicable</li>
                  <li>Military records if applicable</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-white/5 px-2 py-1 text-[11px] text-slate-400 border border-white/10">
                    Portal: placeholder
                  </span>
                  <span className="rounded-lg bg-white/5 px-2 py-1 text-[11px] text-slate-400 border border-white/10">
                    Translations: certified if required
                  </span>
                  <span className="rounded-lg bg-white/5 px-2 py-1 text-[11px] text-slate-400 border border-white/10">
                    Prep time: varies
                  </span>
                </div>
                <p className="mt-3 text-xs text-amber-200/80">Common mistakes: wrong spelling vs passport; expired extracts; unofficial scans only.</p>
              </article>

              <article className="rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 to-transparent p-6 backdrop-blur-md">
                <h4 className="text-indigo-200 font-semibold mb-1">India — education</h4>
                <p className="text-xs text-slate-500 mb-4">Based on studies in: {form.studied}</p>
                <ul className="text-sm text-slate-300 space-y-2 list-disc ps-5">
                  <li>University degree</li>
                  <li>Transcripts</li>
                  <li>Police Clearance Certificate if required by residence-duration rules</li>
                  <li>Educational verification if needed by post</li>
                </ul>
                <p className="mt-3 text-xs text-slate-400">Keep originals and copies; verify English-language document requirements with your embassy.</p>
              </article>

              <article className="rounded-2xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 to-transparent p-6 backdrop-blur-md">
                <h4 className="text-sky-200 font-semibold mb-1">UAE — residence & police clearance</h4>
                <p className="text-xs text-slate-500 mb-4">Based on work/living in: {form.worked}</p>
                <ul className="text-sm text-slate-300 space-y-2 list-disc ps-5">
                  <li>Police Clearance Certificate</li>
                  <li>Employment / residency history if useful</li>
                  <li>Emirates ID history if applicable</li>
                  <li>Passport / visa history</li>
                </ul>
                <p className="mt-3 text-xs text-slate-400">PCC procedures vary by emirate and status—follow official UAE channels only.</p>
              </article>

              <article className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-md">
                <h4 className="text-white font-semibold mb-2">General immigration packet</h4>
                <ul className="text-sm text-slate-300 space-y-2 list-disc ps-5">
                  <li>DS-260 confirmation page</li>
                  <li>Passport biographic page</li>
                  <li>Interview appointment letter</li>
                  <li>Passport photos per instructions</li>
                  <li>Medical exam records</li>
                  <li>Vaccination records</li>
                  <li>Court / prison records if applicable</li>
                  <li>Military records if applicable</li>
                  <li>Certified translations if applicable</li>
                </ul>
                <p className="mt-4 text-xs text-amber-200/85">
                  Document requirements vary depending on personal history, embassy instructions, country reciprocity guidance,
                  age, and residence history.
                </p>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}
