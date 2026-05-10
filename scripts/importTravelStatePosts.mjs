#!/usr/bin/env node
/**
 * Fetches Travel.State.gov list-of-posts and extracts immigrant visa supplement URLs.
 * Writes src/data/generated/travelStatePosts.generated.js
 * On fetch/parse failure: exits 1 without overwriting an existing generated file.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const LIST_URL =
  'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/list-of-posts.html'
const OUT_DIR = path.join(__dirname, '../src/data/generated')
const OUT_FILE = path.join(OUT_DIR, 'travelStatePosts.generated.js')

function slugToCity(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

/** @param {string} linkText e.g. "Brazil - Rio de Janeiro (RDJ)" */
function parseBracket(linkText) {
  const m = linkText.match(/^(.+?)\s-\s(.+?)\s\(([A-Z0-9]+)\)\s*$/)
  if (m) return { country: m[1].trim(), city: m[2].trim(), linkPostCode: m[3].trim() }
  return null
}

function writeOutput(posts, meta) {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const body = [
    '/**',
    ' * AUTO-GENERATED — run `npm run import:posts`. Do not edit by hand.',
    ' */',
    '',
    `export const GENERATED_TRAVEL_STATE_IMPORT_META = ${JSON.stringify(meta, null, 2)};`,
    '',
    `export const GENERATED_TRAVEL_STATE_POSTS = ${JSON.stringify(posts, null, 2)};`,
    '',
  ].join('\n')
  fs.writeFileSync(OUT_FILE, body, 'utf8')
}

async function main() {
  const prevExists = fs.existsSync(OUT_FILE)
  let html
  try {
    const res = await fetch(LIST_URL, {
      headers: {
        'User-Agent': 'DV-Compass-Importer/0.5 (educational; contact: project maintainer)',
        Accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8',
      },
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    html = await res.text()
  } catch (e) {
    console.error('Travel.State.gov import failed:', e.message)
    if (prevExists) {
      console.error('Existing generated file was not modified.')
    } else {
      console.error('No existing generated file; create one after fixing network or URL.')
    }
    process.exit(1)
  }

  const ORIGIN = 'https://travel.state.gov'
  /** Page uses <a href="/content/.../CODE-Slug.html">Country - City (CODE)</a> */
  const re =
    /href="([^"]*\/Supplements\/Supplements_by_Post\/([A-Z0-9]+)-([^."]+)\.html)"[^>]*>([^<]*)</gi
  const byCode = new Map()
  let m
  while ((m = re.exec(html)) !== null) {
    const hrefRaw = m[1].trim()
    const supplementUrl = hrefRaw.startsWith('http')
      ? hrefRaw
      : `${ORIGIN}${hrefRaw.startsWith('/') ? hrefRaw : `/${hrefRaw}`}`
    const postCode = m[2]
    const citySlug = m[3]
    const linkText = m[4].replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()
    const cityFromSlug = slugToCity(citySlug)
    const br = parseBracket(linkText)
    let country
    let city
    let needsCountryReview
    if (br) {
      country = br.country
      city = br.city || cityFromSlug
      needsCountryReview = br.linkPostCode !== postCode
    } else {
      country = 'Unknown'
      city = cityFromSlug
      needsCountryReview = true
    }

    const id = `${postCode.toLowerCase()}-${citySlug.replace(/[^a-z0-9-]+/gi, '-').toLowerCase()}`
    const name = `${country} — ${city}`
    const lastImported = new Date().toISOString()
    const aliases = [postCode, city, citySlug, country !== 'Unknown' ? country : null].filter(Boolean)

    const post = {
      id,
      name,
      city,
      country,
      region: 'Unknown',
      type: 'Immigrant Visa Post',
      postCode,
      citySlug,
      aliases,
      supplementUrl,
      officialWebsite: '',
      interviewInstructionsUrl: supplementUrl,
      medicalInstructionsUrl: supplementUrl,
      panelPhysicianUrl: supplementUrl,
      sourceUrl: supplementUrl,
      verificationStatus: 'direct_supplement_imported',
      lastImported,
      notes: br ? (needsCountryReview ? 'Post code in link text did not match URL filename.' : null) : null,
      needsCountryReview,
    }
    byCode.set(postCode, post)
  }

  const posts = [...byCode.values()].sort((a, b) => String(a.postCode).localeCompare(String(b.postCode)))
  if (posts.length === 0) {
    console.error('No supplement links parsed (HTML format may have changed). Not overwriting output.')
    process.exit(1)
  }
  const meta = {
    fetchOk: true,
    lastImported: new Date().toISOString(),
    sourceUrl: LIST_URL,
    supplementLinkCount: posts.length,
  }

  writeOutput(posts, meta)
  console.log(`Wrote ${posts.length} supplement posts to ${path.relative(process.cwd(), OUT_FILE)}`)
}

main()
