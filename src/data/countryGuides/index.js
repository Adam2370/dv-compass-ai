import { getWorldCountry } from '../worldCountries.js'
import { DOCUMENT_FIELD_KEYS, createGenericCountryGuide } from './globalTemplate.js'
import { SEED_COUNTRY_GUIDES } from './seeds.js'

export const SEED_VERIFIED_ISO = new Set(['CM', 'IN', 'AE', 'NG', 'GH'])

/** @param {string} iso */
export function getCountryGuide(iso) {
  const code = iso?.toUpperCase()
  const wc = getWorldCountry(code)
  if (!wc) return null
  const base = SEED_COUNTRY_GUIDES[code]
    ? { ...SEED_COUNTRY_GUIDES[code] }
    : createGenericCountryGuide(code, wc.name, wc.reciprocityUrl)
  return {
    ...base,
    reciprocityUrl: wc.reciprocityUrl,
    reciprocityVerified: wc.verified,
  }
}

/** @param {string} iso */
export function isSeedCountryGuide(iso) {
  return SEED_VERIFIED_ISO.has(iso?.toUpperCase())
}

/**
 * @param {string} iso
 * @param {string} lang
 * @param {(k: string) => string} t
 */
export function getDocumentSections(iso, lang, t) {
  const guide = getCountryGuide(iso)
  if (!guide) return []
  const lc = lang === 'fr' ? 'fr' : lang === 'ar' ? 'ar' : lang === 'es' ? 'es' : 'en'

  const sections = DOCUMENT_FIELD_KEYS.map((key) => {
    const title = t(`countryGuides.docLabels.${key}`)
    if (guide.verificationStatus === 'generic') {
      return {
        key,
        title,
        body: t('countryGuides.genericDocBody'),
        isGeneric: true,
      }
    }
    const block = guide.documents?.[key]
    const body = block ? block[lc] || block.en : t('countryGuides.genericDocBody')
    return { key, title, body, isGeneric: false }
  })

  if (guide.embassyNotes) {
    sections.push({
      key: 'embassyNotes',
      title: t('countryGuides.docLabels.embassyNotes'),
      body: guide.embassyNotes[lc] || guide.embassyNotes.en,
      isGeneric: false,
    })
  }

  return sections
}

/**
 * @param {string} iso
 * @param {string} lang
 */
export function getGuideWarningsText(iso, lang) {
  const guide = getCountryGuide(iso)
  if (!guide?.warnings) return null
  const lc = lang === 'fr' ? 'fr' : lang === 'ar' ? 'ar' : lang === 'es' ? 'es' : 'en'
  return guide.warnings[lc] || guide.warnings.en
}

export { DOCUMENT_FIELD_KEYS, createGenericCountryGuide } from './globalTemplate.js'
export { SEED_COUNTRY_GUIDES } from './seeds.js'
