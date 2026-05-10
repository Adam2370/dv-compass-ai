import { useMemo, useState } from 'react'
import { getCountryGuide, getDocumentSections, getGuideWarningsText } from '../data/countryGuides'
import { OFFICIAL_SOURCES } from '../data/officialSources'
import { useLanguage } from '../hooks/useLanguage'
import { renderInlineBold } from '../utils/formatInlineBold'
import { card, heading, muted } from '../theme/ui'
import { ALL_COUNTRY_CODES, countryLabel } from '../utils/countries'
import { SearchableSelect } from './SearchableSelect'
import { SectionHeading } from './SectionHeading'

export function CountryGuides() {
  const { t, lang } = useLanguage()
  const [iso, setIso] = useState('CM')

  const countryOptions = useMemo(() => [...ALL_COUNTRY_CODES], [])
  const countryItemLabel = (code) => `${countryLabel(code, lang)} (${code})`

  const guide = getCountryGuide(iso)
  const sections = getDocumentSections(iso, lang, t)
  const warnExtra = getGuideWarningsText(iso, lang)
  const isGeneric = guide?.verificationStatus === 'generic'

  return (
    <section id="countries" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('countryGuides.title')} subtitle={t('countryGuides.subtitle')} />

        <div className={`${card} p-6 md:p-8 mb-10 max-w-xl`}>
          <SearchableSelect
            label={t('countryGuides.pick')}
            id="country-guides-select"
            value={iso}
            onChange={setIso}
            options={countryOptions}
            getOptionValue={(c) => c}
            getOptionLabel={countryItemLabel}
            placeholder={t('countryGuides.search')}
            noResultsText={t('common.noMatches')}
          />
          {guide ? (
            <div className="mt-4 flex flex-wrap gap-2">
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  isGeneric
                    ? 'bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-100'
                    : 'bg-emerald-100 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100'
                }`}
              >
                {isGeneric ? t('countryGuides.badgeGeneric') : t('countryGuides.badgeSeed')}
              </span>
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  guide.reciprocityVerified
                    ? 'bg-slate-200/80 text-slate-800 dark:bg-white/10 dark:text-slate-200'
                    : 'bg-violet-100 text-violet-900 dark:bg-violet-500/15 dark:text-violet-100'
                }`}
              >
                {guide.reciprocityVerified ? t('countryGuides.reciprocityLinkVerified') : t('countryGuides.reciprocityLinkUnverified')}
              </span>
            </div>
          ) : null}
          <a
            className="mt-4 inline-flex text-sm font-semibold text-violet-600 dark:text-violet-300 hover:underline"
            href={guide?.reciprocityUrl ?? OFFICIAL_SOURCES.reciprocityByCountry}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('countryGuides.openReciprocity')}
          </a>
        </div>

        <h3 className={`text-xl font-semibold mb-6 ${heading}`}>
          {t('countryGuides.detailTitle')}: {countryLabel(iso, lang)}
        </h3>

        {isGeneric ? (
          <p className={`mb-6 rounded-xl border border-amber-200/70 bg-amber-50/80 px-4 py-3 text-sm text-amber-950 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-50/95`}>
            {t('countryGuides.genericCountryWarn')}
          </p>
        ) : null}

        {warnExtra ? (
          <p className={`mb-6 rounded-xl border border-slate-200/80 px-4 py-3 text-sm ${muted} dark:border-white/10`}>
            {renderInlineBold(warnExtra)}
          </p>
        ) : null}

        <div className="grid gap-4">
          {sections.map((block) => (
            <details
              key={block.key}
              className={`${card} group overflow-hidden open:ring-1 open:ring-violet-300/40 dark:open:ring-violet-400/25`}
            >
              <summary className={`cursor-pointer list-none p-6 md:p-8 [&::-webkit-details-marker]:hidden flex items-center justify-between gap-3 ${heading}`}>
                <span className="text-base font-semibold">
                  {block.title}
                  {block.isGeneric ? (
                    <span className="ms-2 text-xs font-normal text-amber-700 dark:text-amber-200/85">({t('countryGuides.badgeGeneric')})</span>
                  ) : null}
                </span>
                <span className="text-violet-600 dark:text-violet-300 text-sm group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className={`border-t border-slate-200/60 px-6 pb-6 md:px-8 md:pb-8 dark:border-white/10`}>
                <p className={`text-sm leading-relaxed whitespace-pre-line ${muted} pt-4`}>{renderInlineBold(block.body)}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
