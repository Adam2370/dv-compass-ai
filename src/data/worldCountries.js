import countries from 'i18n-iso-countries'
import { RECIPROCITY_COUNTRY_PAGE_BASE } from './officialSources.js'
import { getMacroRegion } from './countryMacroRegions.js'
import { ALL_COUNTRY_CODES } from '../utils/countries.js'

/**
 * Only slugs we treat as spot-checked for a direct reciprocity country page.
 * Everyone else: reciprocity index URL + verified: false (per product policy).
 */
export const VERIFIED_RECIPROCITY_SLUG = {
  CM: 'Cameroon',
  IN: 'India',
  AE: 'United-Arab-Emirates',
  NG: 'Nigeria',
  GH: 'Ghana',
  US: 'United-States',
}

const RECIPROCITY_INDEX_URL = `${RECIPROCITY_COUNTRY_PAGE_BASE}.html`

function reciprocityUrlFor(code) {
  const slug = VERIFIED_RECIPROCITY_SLUG[code]
  if (slug) return `${RECIPROCITY_COUNTRY_PAGE_BASE}/${slug}.html`
  return RECIPROCITY_INDEX_URL
}

/** @typedef {{ code: string, name: string, region: string, reciprocitySlug: string | null, reciprocityUrl: string, verified: boolean }} WorldCountry */

/** @type {WorldCountry[]} */
export const WORLD_COUNTRIES = ALL_COUNTRY_CODES.map((code) => {
  const name = countries.getName(code, 'en', { select: 'official' }) || code
  const slug = VERIFIED_RECIPROCITY_SLUG[code] ?? null
  const verified = Boolean(slug)
  return {
    code,
    name,
    region: getMacroRegion(code),
    reciprocitySlug: slug,
    reciprocityUrl: reciprocityUrlFor(code),
    verified,
  }
})

/** @type {Record<string, WorldCountry>} */
export const WORLD_COUNTRY_BY_CODE = Object.fromEntries(WORLD_COUNTRIES.map((c) => [c.code, c]))

/** @param {string} code */
export function getWorldCountry(code) {
  return WORLD_COUNTRY_BY_CODE[code?.toUpperCase()] ?? null
}
