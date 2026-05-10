/**
 * Central registry for automated / manual verification of official immigration links.
 * Future backend job should crawl/verify post supplement links and update verificationStatus on each post automatically.
 */

export const VERIFICATION_STATUS = {
  DIRECT_SUPPLEMENT_VERIFIED: 'direct_supplement_verified',
  DIRECT_SUPPLEMENT_IMPORTED: 'direct_supplement_imported',
  GENERAL_LIST_ONLY: 'general_list_only',
  NEEDS_REVIEW: 'needs_review',
  BROKEN_LINK: 'broken_link',
}

export const OFFICIAL_DATA_SOURCES = {
  postsList:
    'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/list-of-posts.html',
  supplementsBase: 'https://travel.state.gov/content/travel/en/us-visas/Supplements/Supplements_by_Post/',
  reciprocityBase:
    'https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country.html',
  visaBulletin: 'https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html',
}
