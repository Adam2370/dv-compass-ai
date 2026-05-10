import { OFFICIAL_SOURCES } from '../officialSources.js'

/** Document category keys aligned with UI / i18n. */
export const DOCUMENT_FIELD_KEYS = [
  'passport',
  'birthCertificate',
  'policeCertificate',
  'marriageCertificate',
  'divorceCertificate',
  'militaryRecords',
  'courtPrisonRecords',
  'educationDocuments',
  'translations',
]

/**
 * @typedef {'seed_verified' | 'generic'} VerificationStatus
 * @typedef {{ id: string, url: string }} OfficialSourceRef
 * @typedef {{ en: string, fr: string, ar: string, es: string }} I18nText
 *
 * @typedef {{
 *   code: string,
 *   name: string,
 *   verificationStatus: VerificationStatus,
 *   lastVerified: string | null,
 *   officialSources: OfficialSourceRef[],
 *   documents: Partial<Record<string, I18nText>> | null,
 *   embassyNotes: I18nText | null,
 *   warnings: I18nText | null,
 * }} CountryGuideModel
 */

export const DEFAULT_OFFICIAL_SOURCE_REFS = [
  { id: 'reciprocity', url: OFFICIAL_SOURCES.reciprocityByCountry },
  { id: 'dvInstructions', url: OFFICIAL_SOURCES.dvInstructions },
  { id: 'listOfPosts', url: OFFICIAL_SOURCES.listOfImmigrantVisaPosts },
]

/**
 * @param {string} code
 * @param {string} nameEnglish
 * @param {string} reciprocityUrl
 * @returns {CountryGuideModel}
 */
export function createGenericCountryGuide(code, nameEnglish, reciprocityUrl) {
  return {
    code,
    name: nameEnglish,
    verificationStatus: 'generic',
    lastVerified: null,
    officialSources: DEFAULT_OFFICIAL_SOURCE_REFS,
    documents: null,
    embassyNotes: null,
    warnings: null,
    reciprocityUrl,
  }
}
