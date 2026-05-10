import { useMemo, useState } from 'react'
import { genericGuideSections, getGuideSections, hasDetailedGuide } from '../content/countryGuideContent'
import { postById } from '../data/usEmbassies'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, input, muted, mutedSm, select } from '../theme/ui'
import { countryLabel } from '../utils/countries'
import { EmbassyCombobox } from './EmbassyCombobox'
import { MultiCountryPicker } from './MultiCountryPicker'
import { SearchableCountrySelect } from './SearchableCountrySelect'
import { SectionHeading } from './SectionHeading'

const DEFAULT = {
  nationality: 'CM',
  birthCountry: 'CM',
  residence: 'AE',
  lived: ['CM', 'IN', 'AE'],
  studied: 'IN',
  worked: 'AE',
  maritalNote: '',
  military: '',
  embassyPostId: 'ae-abd',
  educationIndex: 6,
  spouse: 'yes',
  children: 'no',
}

function uniqueIso(list) {
  return [...new Set(list.filter(Boolean))]
}

export function DocumentRoadmap() {
  const { t, lang } = useLanguage()
  const [form, setForm] = useState(DEFAULT)
  const [livedOpen, setLivedOpen] = useState(false)

  const eduLevels = t('roadmap.educationLevels')
  const eduList = Array.isArray(eduLevels) ? eduLevels : []

  const embassy = postById(form.embassyPostId)

  const derivedCountries = useMemo(() => {
    return uniqueIso([
      form.nationality,
      form.birthCountry,
      form.residence,
      ...form.lived,
      form.studied,
      form.worked,
    ])
  }, [form])

  const sectionsFor = (iso) => {
    if (hasDetailedGuide(iso)) return getGuideSections(iso, lang)
    return genericGuideSections(countryLabel(iso, lang), lang)
  }

  return (
    <section className="py-20 md:py-28 border-t border-slate-200/80 dark:border-white/5 bg-slate-100/50 dark:bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('roadmap.title')} subtitle={t('roadmap.subtitle')} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className={`${card} p-6 md:p-8 space-y-4`}>
            <Field label={t('roadmap.nationality')}>
              <SearchableCountrySelect
                id="nat"
                lang={lang}
                value={form.nationality}
                onChange={(v) => setForm((f) => ({ ...f, nationality: v }))}
                placeholder={t('roadmap.selectCountry')}
              />
            </Field>
            <Field label={t('roadmap.birthCountry')}>
              <SearchableCountrySelect
                id="birth"
                lang={lang}
                value={form.birthCountry}
                onChange={(v) => setForm((f) => ({ ...f, birthCountry: v }))}
                placeholder={t('roadmap.selectCountry')}
              />
            </Field>
            <Field label={t('roadmap.residence')}>
              <SearchableCountrySelect
                id="res"
                lang={lang}
                value={form.residence}
                onChange={(v) => setForm((f) => ({ ...f, residence: v }))}
                placeholder={t('roadmap.selectCountry')}
              />
            </Field>
            <Field label={t('roadmap.lived')}>
              <button
                type="button"
                onClick={() => setLivedOpen(true)}
                className={`${input} text-start cursor-pointer`}
              >
                {form.lived.length
                  ? form.lived.map((c) => countryLabel(c, lang)).join(', ')
                  : t('roadmap.selectCountry')}
              </button>
            </Field>
            <Field label={t('roadmap.studied')}>
              <SearchableCountrySelect
                id="stu"
                lang={lang}
                value={form.studied}
                onChange={(v) => setForm((f) => ({ ...f, studied: v }))}
                placeholder={t('roadmap.selectCountry')}
              />
            </Field>
            <Field label={t('roadmap.worked')}>
              <SearchableCountrySelect
                id="work"
                lang={lang}
                value={form.worked}
                onChange={(v) => setForm((f) => ({ ...f, worked: v }))}
                placeholder={t('roadmap.selectCountry')}
              />
            </Field>
            <Field label={t('roadmap.marital')}>
              <textarea
                className={`${input} min-h-[72px]`}
                value={form.maritalNote}
                onChange={(e) => setForm((f) => ({ ...f, maritalNote: e.target.value }))}
                placeholder={t('roadmap.maritalHelp')}
              />
            </Field>
            <Field label={t('roadmap.military')}>
              <input
                className={input}
                value={form.military}
                onChange={(e) => setForm((f) => ({ ...f, military: e.target.value }))}
                placeholder={t('roadmap.militaryHelp')}
              />
            </Field>
            <Field label={t('roadmap.embassy')}>
              <EmbassyCombobox
                valueId={form.embassyPostId}
                onChange={(id) => setForm((f) => ({ ...f, embassyPostId: id }))}
                placeholder={t('roadmap.embassySearch')}
              />
            </Field>
            <Field label={t('roadmap.education')}>
              <select
                className={select}
                value={form.educationIndex}
                onChange={(e) => setForm((f) => ({ ...f, educationIndex: Number(e.target.value) }))}
              >
                {eduList.map((label, i) => (
                  <option key={label} value={i}>
                    {label}
                  </option>
                ))}
              </select>
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label={t('roadmap.spouse')}>
                <select className={select} value={form.spouse} onChange={(e) => setForm((f) => ({ ...f, spouse: e.target.value }))}>
                  <option value="yes">{t('roadmap.yes')}</option>
                  <option value="no">{t('roadmap.no')}</option>
                </select>
              </Field>
              <Field label={t('roadmap.children')}>
                <select className={select} value={form.children} onChange={(e) => setForm((f) => ({ ...f, children: e.target.value }))}>
                  <option value="yes">{t('roadmap.yes')}</option>
                  <option value="no">{t('roadmap.no')}</option>
                </select>
              </Field>
            </div>
            <button type="button" className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:brightness-110 transition-all">
              {t('roadmap.generate')}
            </button>
            <p className={`text-xs ${mutedSm} leading-relaxed`}>{t('disclaimer.short')}</p>
          </div>

          <div className="space-y-5">
            <h3 className={`text-lg font-semibold ${heading}`}>{t('roadmap.cardsTitle')}</h3>

            {embassy ? (
              <article className={`${card} border-indigo-300/40 dark:border-indigo-400/30 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-500/10 dark:to-transparent p-6`}>
                <h4 className="text-indigo-800 dark:text-indigo-200 font-semibold mb-1">{embassy.label}</h4>
                <p className={`text-xs ${muted} mb-2 whitespace-pre-line`}>{embassy.address}</p>
                <a href={embassy.website} target="_blank" rel="noopener noreferrer" className="text-sm text-violet-600 dark:text-violet-300 hover:underline">
                  {embassy.website}
                </a>
              </article>
            ) : null}

            {derivedCountries.map((iso) => (
              <article key={iso} className={`${card} border-violet-200/60 dark:border-violet-400/20 p-6`}>
                <h4 className="text-violet-800 dark:text-violet-200 font-semibold mb-3">
                  {countryLabel(iso, lang)} ({iso})
                </h4>
                <div className="space-y-4">
                  {sectionsFor(iso).map((block) => (
                    <div key={block.key}>
                      <h5 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">{block.title}</h5>
                      <p className={`text-sm ${muted} whitespace-pre-line`}>{block.body}</p>
                    </div>
                  ))}
                </div>
                <a
                  className="mt-4 inline-block text-xs font-semibold text-violet-600 dark:text-violet-300 hover:underline"
                  href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/reciprocity-by-country.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('countryGuides.openReciprocity')} ({iso})
                </a>
              </article>
            ))}

            <article className={`${card} p-6`}>
              <h4 className={`font-semibold mb-2 ${heading}`}>{t('roadmap.packetCardTitle')}</h4>
              <ul className={`text-sm ${muted} space-y-1 list-disc ps-5`}>
                {(Array.isArray(t('roadmap.packetBullets')) ? t('roadmap.packetBullets') : []).map((line, i) => (
                  <li key={`pkt-${i}`}>{line}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-amber-700 dark:text-amber-200/85">
                {t('disclaimer.short')}
              </p>
            </article>
          </div>
        </div>
      </div>

      {livedOpen ? (
        <MultiCountryPicker
          lang={lang}
          selectedCodes={form.lived}
          onChange={(codes) => setForm((f) => ({ ...f, lived: codes }))}
          title={t('roadmap.livedModalTitle')}
          hint={t('roadmap.livedHint')}
          doneLabel={t('roadmap.done')}
          clearLabel={t('roadmap.clearLived')}
          searchPlaceholder={t('roadmap.searchCountries')}
          onClose={() => setLivedOpen(false)}
        />
      ) : null}
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className={`text-xs font-medium ${muted}`}>{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  )
}
