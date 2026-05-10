import countries from 'i18n-iso-countries'
import en from 'i18n-iso-countries/langs/en.json'
import { countryLabel } from '../utils/countries.js'
import { getMacroRegion } from './countryMacroRegions.js'
import { OFFICIAL_POSTS_LIST_URL } from '../utils/postLinks.js'
import { VERIFICATION_STATUS } from './verificationRegistry.js'

countries.registerLocale(en)

function uniqueStrings(arr) {
  return [...new Set(arr.filter(Boolean).map(String))]
}

/**
 * @param {object[]} generatedPosts
 * @param {object[]} manualOverrides objects with postCode
 */
export function mergeGeneratedPostsWithOverrides(generatedPosts, manualOverrides) {
  const overrideByCode = new Map(manualOverrides.map((o) => [String(o.postCode).toUpperCase(), o]))
  const seen = new Map()

  for (const g of generatedPosts) {
    const code = String(g.postCode || '').toUpperCase()
    if (!code) continue
    const ov = overrideByCode.get(code)
    const merged = ov
      ? {
          ...g,
          ...ov,
          supplementUrl: g.supplementUrl || ov.supplementUrl || null,
          aliases: uniqueStrings([
            ...(g.aliases || []),
            ...(ov.aliases || []),
            ov.city,
            ov.country,
            code,
          ]),
        }
      : {
          ...g,
          aliases: uniqueStrings([...(g.aliases || []), g.city, g.country, code].filter(Boolean)),
        }
    if (g.supplementUrl && !merged.supplementUrl) merged.supplementUrl = g.supplementUrl
    seen.set(code, merged)
  }

  return [...seen.values()].sort((a, b) => {
    const ca = (a.country || '').localeCompare(b.country || '', 'en')
    if (ca !== 0) return ca
    return (a.city || '').localeCompare(b.city || '', 'en')
  })
}

/** @param {string} countryName */
function resolveCountryCode(countryName) {
  if (!countryName || countryName === 'Unknown') return ''
  let c = countries.getAlpha2Code(countryName, 'en')
  if (c) return c
  c = countries.getAlpha2Code(countryName.replace(/’/g, "'"), 'en')
  return c || ''
}

/**
 * @param {object} row merged import row
 * @param {{ id?: string, address?: string, phone?: string, website?: string, countryCode?: string, label?: string } | null} enrich
 */
export function mergedImportRowToImmigrantVisaPost(row, enrich = null) {
  const postCode = row.postCode ? String(row.postCode).toUpperCase() : null
  const supplementUrl = row.supplementUrl || null
  const countryName = row.country || 'Unknown'
  const countryCode = enrich?.countryCode || resolveCountryCode(countryName) || ''
  const displayCountry =
    countryName === 'Unknown' ? 'Unknown' : countryCode ? countryLabel(countryCode, 'en') : countryName
  const needsCountryReview = Boolean(row.needsCountryReview) || countryName === 'Unknown' || !countryCode

  const displayName = row.name || enrich?.label || `${displayCountry} — ${row.city}`
  const city = row.city || 'Unknown'
  const type = String(displayName).toLowerCase().includes('consulate') ? 'Consulate' : 'Embassy'
  const id =
    enrich?.id ||
    row.id ||
    `${(countryCode || 'xx').toLowerCase()}-${(postCode || 'unk').toLowerCase()}`.replace(/\s+/g, '')

  const interviewInstructionsUrl = supplementUrl
  const medicalInstructionsUrl = supplementUrl
  const panelPhysicianUrl = supplementUrl
  const sourceUrl = supplementUrl || OFFICIAL_POSTS_LIST_URL

  const aliases = uniqueStrings([
    ...(row.aliases || []),
    postCode,
    city,
    row.citySlug,
    displayCountry,
    countryCode,
  ])

  const verificationStatus =
    row.verificationStatus === VERIFICATION_STATUS.DIRECT_SUPPLEMENT_IMPORTED ||
    row.verificationStatus === 'direct_supplement_imported'
      ? VERIFICATION_STATUS.DIRECT_SUPPLEMENT_IMPORTED
      : VERIFICATION_STATUS.DIRECT_SUPPLEMENT_VERIFIED

  const searchText = [displayName, city, displayCountry, countryCode, postCode, ...aliases]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  return {
    id,
    name: displayName,
    city,
    country: displayCountry,
    countryCode,
    region: countryCode ? getMacroRegion(countryCode) : 'Unknown',
    type,
    processesImmigrantVisas: true,
    postCode,
    aliases,
    supplementUrl,
    officialWebsite: enrich?.website || row.officialWebsite || '',
    interviewInstructionsUrl,
    medicalInstructionsUrl,
    panelPhysicianUrl,
    address: enrich?.address ?? '',
    phone: enrich?.phone ?? '',
    sourceUrl,
    verificationStatus: supplementUrl ? verificationStatus : VERIFICATION_STATUS.GENERAL_LIST_ONLY,
    lastVerified: null,
    lastImported: row.lastImported ?? null,
    notes: row.notes ?? null,
    searchText,
    needsCountryReview,
  }
}
