import { useCallback, useMemo, useState } from 'react'
import { getCountryGuide, getDocumentSections } from '../data/countryGuides'
import { OFFICIAL_SOURCES } from '../data/officialSources'
import { postById, US_OVERSEAS_POSTS } from '../data/usEmbassies'
import { useLanguage } from '../hooks/useLanguage'
import { renderInlineBold } from '../utils/formatInlineBold'
import { card, heading, input, muted, mutedSm, select } from '../theme/ui'
import { ALL_COUNTRY_CODES, countryLabel } from '../utils/countries'
import { SearchableMultiSelect } from './SearchableMultiSelect'
import { SearchableSelect } from './SearchableSelect'
import { SectionHeading } from './SectionHeading'

const DEFAULT = {
  nationality: 'CM',
  birthCountry: 'CM',
  residence: 'AE',
  lived: ['CM', 'IN', 'AE'],
  studied: ['IN'],
  worked: ['AE'],
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

  const eduLevels = t('roadmap.educationLevels')
  const eduList = Array.isArray(eduLevels) ? eduLevels : []

  const embassy = postById(form.embassyPostId)

  const countryOptions = useMemo(() => [...ALL_COUNTRY_CODES], [])
  const countryItemLabel = useCallback((code) => `${countryLabel(code, lang)} (${code})`, [lang])

  const militaryOptions = useMemo(
    () => [
      { value: '', label: t('roadmap.militaryNone') },
      ...ALL_COUNTRY_CODES.map((code) => ({
        value: code,
        label: countryItemLabel(code),
      })),
    ],
    [t, countryItemLabel]
  )

  const derivedCountries = useMemo(() => {
    return uniqueIso([
      form.nationality,
      form.birthCountry,
      form.residence,
      ...form.lived,
      ...form.studied,
      ...form.worked,
      ...(form.military ? [form.military] : []),
    ])
  }, [form])

  const sectionsFor = (iso) => getDocumentSections(iso, lang, t)

  return (
    <section className="py-20 md:py-28 border-t border-slate-200/80 dark:border-white/5 bg-slate-100/50 dark:bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('roadmap.title')} subtitle={t('roadmap.subtitle')} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className={`${card} p-6 md:p-8 space-y-4`}>
            <SearchableSelect
              label={t('roadmap.nationality')}
              id="roadmap-nationality"
              value={form.nationality}
              onChange={(v) => setForm((f) => ({ ...f, nationality: v }))}
              options={countryOptions}
              getOptionValue={(c) => c}
              getOptionLabel={countryItemLabel}
              placeholder={t('roadmap.selectCountry')}
              noResultsText={t('common.noMatches')}
            />
            <SearchableSelect
              label={t('roadmap.birthCountry')}
              id="roadmap-birth"
              value={form.birthCountry}
              onChange={(v) => setForm((f) => ({ ...f, birthCountry: v }))}
              options={countryOptions}
              getOptionValue={(c) => c}
              getOptionLabel={countryItemLabel}
              placeholder={t('roadmap.selectCountry')}
              noResultsText={t('common.noMatches')}
            />
            <SearchableSelect
              label={t('roadmap.residence')}
              id="roadmap-residence"
              value={form.residence}
              onChange={(v) => setForm((f) => ({ ...f, residence: v }))}
              options={countryOptions}
              getOptionValue={(c) => c}
              getOptionLabel={countryItemLabel}
              placeholder={t('roadmap.selectCountry')}
              noResultsText={t('common.noMatches')}
            />
            <SearchableMultiSelect
              label={t('roadmap.lived')}
              id="roadmap-lived"
              value={form.lived}
              onChange={(codes) => setForm((f) => ({ ...f, lived: codes }))}
              options={countryOptions}
              getOptionValue={(c) => c}
              getOptionLabel={countryItemLabel}
              placeholder={t('roadmap.searchCountries')}
              noResultsText={t('common.noMatches')}
              hint={t('roadmap.livedHint')}
            />
            <SearchableMultiSelect
              label={t('roadmap.studied')}
              id="roadmap-studied"
              value={form.studied}
              onChange={(codes) => setForm((f) => ({ ...f, studied: codes }))}
              options={countryOptions}
              getOptionValue={(c) => c}
              getOptionLabel={countryItemLabel}
              placeholder={t('roadmap.searchCountries')}
              noResultsText={t('common.noMatches')}
            />
            <SearchableMultiSelect
              label={t('roadmap.worked')}
              id="roadmap-worked"
              value={form.worked}
              onChange={(codes) => setForm((f) => ({ ...f, worked: codes }))}
              options={countryOptions}
              getOptionValue={(c) => c}
              getOptionLabel={countryItemLabel}
              placeholder={t('roadmap.searchCountries')}
              noResultsText={t('common.noMatches')}
            />
            <Field label={t('roadmap.marital')}>
              <textarea
                className={`${input} min-h-[72px]`}
                value={form.maritalNote}
                onChange={(e) => setForm((f) => ({ ...f, maritalNote: e.target.value }))}
                placeholder={t('roadmap.maritalHelp')}
              />
            </Field>
            <SearchableSelect
              label={t('roadmap.military')}
              id="roadmap-military"
              value={form.military}
              onChange={(v) => setForm((f) => ({ ...f, military: v }))}
              options={militaryOptions}
              getOptionValue={(o) => o.value}
              getOptionLabel={(o) => o.label}
              placeholder={t('roadmap.militaryHelp')}
              noResultsText={t('common.noMatches')}
            />
            <SearchableSelect
              label={t('roadmap.embassy')}
              id="roadmap-embassy"
              value={form.embassyPostId}
              onChange={(id) => setForm((f) => ({ ...f, embassyPostId: id }))}
              options={US_OVERSEAS_POSTS}
              getOptionValue={(p) => p.id}
              getOptionLabel={(p) => `${p.label} — ${p.city}`}
              placeholder={t('roadmap.embassySearch')}
              noResultsText={t('common.noMatches')}
              footer={
                embassy ? (
                  <p className={`text-xs ${muted} mt-2 whitespace-pre-line`}>
                    {embassy.address}
                    {'\n'}
                    {embassy.phone} · {embassy.website}
                  </p>
                ) : null
              }
            />
            <Field label={t('roadmap.education')}>
              <select
                className={select}
                value={form.educationIndex}
                onChange={(e) => setForm((f) => ({ ...f, educationIndex: Number(e.target.value) }))}
              >
                {eduList.map((lbl, i) => (
                  <option key={lbl} value={i}>
                    {lbl}
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

            <p className={`text-sm ${muted} rounded-lg border border-slate-200/80 bg-white/50 px-3 py-2 dark:border-white/10 dark:bg-slate-900/40`}>
              {t('roadmap.finalRequirementsDisclaimer')}
            </p>

            {embassy ? (
              <article className={`${card} border-indigo-300/40 dark:border-indigo-400/30 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-500/10 dark:to-transparent p-6`}>
                <h4 className="text-indigo-800 dark:text-indigo-200 font-semibold mb-1">{embassy.label}</h4>
                <p className={`text-xs ${muted} mb-2 whitespace-pre-line`}>{embassy.address}</p>
                <a href={embassy.website} target="_blank" rel="noopener noreferrer" className="text-sm text-violet-600 dark:text-violet-300 hover:underline">
                  {embassy.website}
                </a>
              </article>
            ) : null}

            {derivedCountries.map((code) => {
              const g = getCountryGuide(code)
              const reciprocityHref = g?.reciprocityUrl ?? OFFICIAL_SOURCES.reciprocityByCountry
              return (
                <article key={code} className={`${card} border-violet-200/60 dark:border-violet-400/20 p-6`}>
                  <h4 className="text-violet-800 dark:text-violet-200 font-semibold mb-3">
                    {countryLabel(code, lang)} ({code})
                  </h4>
                  <div className="space-y-3">
                    {sectionsFor(code).map((block) => (
                      <details key={block.key} className="rounded-lg border border-slate-200/60 dark:border-white/10 open:bg-slate-50/50 dark:open:bg-white/5">
                        <summary className="cursor-pointer px-3 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 list-none flex justify-between gap-2 [&::-webkit-details-marker]:hidden">
                          {block.title}
                          <span className="text-violet-500 text-xs">▼</span>
                        </summary>
                        <p className={`px-3 pb-3 text-sm ${muted} whitespace-pre-line`}>{renderInlineBold(block.body)}</p>
                      </details>
                    ))}
                  </div>
                  <a
                    className="mt-4 inline-block text-xs font-semibold text-violet-600 dark:text-violet-300 hover:underline"
                    href={reciprocityHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('countryGuides.openReciprocity')}
                  </a>
                </article>
              )
            })}

            <article className={`${card} p-6`}>
              <h4 className={`font-semibold mb-2 ${heading}`}>{t('roadmap.packetCardTitle')}</h4>
              <ul className={`text-sm ${muted} space-y-1 list-disc ps-5`}>
                {(Array.isArray(t('roadmap.packetBullets')) ? t('roadmap.packetBullets') : []).map((line, i) => (
                  <li key={`pkt-${i}`}>{line}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-amber-700 dark:text-amber-200/85">{t('disclaimer.short')}</p>
            </article>
          </div>
        </div>
      </div>
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
