import countries from 'i18n-iso-countries'
import ar from 'i18n-iso-countries/langs/ar.json'
import en from 'i18n-iso-countries/langs/en.json'
import es from 'i18n-iso-countries/langs/es.json'
import fr from 'i18n-iso-countries/langs/fr.json'

countries.registerLocale(en)
countries.registerLocale(fr)
countries.registerLocale(es)
countries.registerLocale(ar)

const alpha2 = countries.getAlpha2Codes()

/** ISO 3166-1 alpha-2 codes sorted by English display name */
export const ALL_COUNTRY_CODES = Object.keys(alpha2).sort((a, b) => {
  const na = countries.getName(a, 'en') || a
  const nb = countries.getName(b, 'en') || b
  return na.localeCompare(nb, 'en')
})

/** Localized country name for UI language */
export function countryLabel(code, lang) {
  const loc = lang === 'ar' ? 'ar' : lang === 'fr' ? 'fr' : lang === 'es' ? 'es' : 'en'
  return countries.getName(code, loc, { select: 'official' }) || code
}
