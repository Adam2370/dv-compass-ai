/**
 * Legacy shape for SearchableSelect / roadmap — sourced from immigrantVisaPosts.
 */
import { IMMIGRANT_VISA_POSTS, toLegacyPost } from './immigrantVisaPosts.js'

export const US_OVERSEAS_POSTS = IMMIGRANT_VISA_POSTS.map(toLegacyPost)

export function filterPosts(query) {
  const q = query.trim().toLowerCase()
  if (!q) return US_OVERSEAS_POSTS
  return US_OVERSEAS_POSTS.filter(
    (p) =>
      p.label.toLowerCase().includes(q) ||
      p.city.toLowerCase().includes(q) ||
      p.countryCode.toLowerCase().includes(q) ||
      p.address.toLowerCase().includes(q)
  )
}

export function postById(id) {
  return US_OVERSEAS_POSTS.find((p) => p.id === id) ?? null
}
