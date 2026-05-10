import { useMemo, useState } from 'react'
import { genericGuideSections, getGuideSections, hasDetailedGuide } from '../content/countryGuideContent'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, input, muted } from '../theme/ui'
import { ALL_COUNTRY_CODES, countryLabel } from '../utils/countries'
import { SectionHeading } from './SectionHeading'

export function CountryGuides() {
  const { t, lang } = useLanguage()
  const [q, setQ] = useState('')
  const [iso, setIso] = useState('CM')

  const filteredCodes = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return ALL_COUNTRY_CODES
    return ALL_COUNTRY_CODES.filter((code) => {
      const name = countryLabel(code, lang).toLowerCase()
      return name.includes(s) || code.toLowerCase().includes(s)
    })
  }, [q, lang])

  const sections = hasDetailedGuide(iso) ? getGuideSections(iso, lang) : genericGuideSections(countryLabel(iso, lang), lang)

  return (
    <section id="countries" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('countryGuides.title')} subtitle={t('countryGuides.subtitle')} />

        <div className={`${card} p-6 md:p-8 mb-10 max-w-xl`}>
          <label className={`block text-sm font-medium mb-2 ${heading}`}>{t('countryGuides.pick')}</label>
          <input type="search" className={`${input} mb-2`} value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('countryGuides.search')} />
          <select className={input} value={iso} onChange={(e) => setIso(e.target.value)}>
            {filteredCodes.map((code) => (
              <option key={code} value={code}>
                {countryLabel(code, lang)} ({code})
              </option>
            ))}
          </select>
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
