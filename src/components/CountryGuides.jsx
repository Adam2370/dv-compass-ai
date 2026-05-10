import { useMemo, useState } from 'react'
import { genericGuideSections, getGuideSections, hasDetailedGuide } from '../content/countryGuideContent'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, muted } from '../theme/ui'
import { ALL_COUNTRY_CODES, countryLabel } from '../utils/countries'
import { SearchableSelect } from './SearchableSelect'
import { SectionHeading } from './SectionHeading'

export function CountryGuides() {
  const { t, lang } = useLanguage()
  const [iso, setIso] = useState('CM')

  const countryOptions = useMemo(() => [...ALL_COUNTRY_CODES], [])
  const countryItemLabel = (code) => `${countryLabel(code, lang)} (${code})`

  const sections = hasDetailedGuide(iso) ? getGuideSections(iso, lang) : genericGuideSections(countryLabel(iso, lang), lang)

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
          <a
            className="mt-4 inline-flex text-sm font-semibold text-violet-600 dark:text-violet-300 hover:underline"
            href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/reciprocity-by-country.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('countryGuides.openReciprocity')}
          </a>
        </div>

        <h3 className={`text-xl font-semibold mb-6 ${heading}`}>
          {t('countryGuides.detailTitle')}: {countryLabel(iso, lang)}
        </h3>
        <div className="grid gap-6">
          {sections.map((block) => (
            <article key={block.key} className={`${card} p-6 md:p-8`}>
              <h4 className={`text-lg font-semibold mb-3 ${heading}`}>{block.title}</h4>
              <p className={`text-sm leading-relaxed whitespace-pre-line ${muted}`}>{block.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
