export const OFFICIAL_POSTS_LIST_URL =
  'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/list-of-posts.html'

/** @param {{ supplementUrl?: string | null, interviewInstructionsUrl?: string | null, sourceUrl?: string } | null | undefined} post */
export function getPostInstructionsUrl(post) {
  return post?.supplementUrl || post?.interviewInstructionsUrl || post?.sourceUrl || OFFICIAL_POSTS_LIST_URL
}

/** @param {{ medicalInstructionsUrl?: string | null, supplementUrl?: string | null, sourceUrl?: string } | null | undefined} post */
export function getPostMedicalUrl(post) {
  return post?.medicalInstructionsUrl || post?.supplementUrl || post?.sourceUrl || OFFICIAL_POSTS_LIST_URL
}

/** @param {{ panelPhysicianUrl?: string | null, medicalInstructionsUrl?: string | null, supplementUrl?: string | null, sourceUrl?: string } | null | undefined} post */
export function getPostPanelPhysicianUrl(post) {
  return (
    post?.panelPhysicianUrl ||
    post?.medicalInstructionsUrl ||
    post?.supplementUrl ||
    post?.sourceUrl ||
    OFFICIAL_POSTS_LIST_URL
  )
}

/** @param {{ supplementUrl?: string | null } | null | undefined} post */
export function hasDirectPostPage(post) {
  return Boolean(post?.supplementUrl)
}

/** @param {{ supplementUrl?: string | null } | null | undefined} post */
export function getPostVerificationBadge(post) {
  return hasDirectPostPage(post) ? 'direct' : 'general_list_only'
}
