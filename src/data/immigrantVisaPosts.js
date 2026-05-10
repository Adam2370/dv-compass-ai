import { getPostInstructionsUrl, getPostMedicalUrl, OFFICIAL_POSTS_LIST_URL } from '../utils/postLinks.js'
import { getMacroRegion } from './countryMacroRegions.js'
import { VERIFICATION_STATUS } from './verificationRegistry.js'
import { countryLabel } from '../utils/countries.js'

const DEFAULT_NO_SUPPLEMENT_NOTE =
  'Direct post supplement URL not yet verified. User must select post manually from official list.'

/**
 * @typedef {'Embassy' | 'Consulate'} PostType
 * @typedef {typeof VERIFICATION_STATUS[keyof typeof VERIFICATION_STATUS]} PostVerificationStatus
 * @typedef {{
 *   id: string,
 *   name: string,
 *   city: string,
 *   country: string,
 *   countryCode: string,
 *   region: string,
 *   type: PostType,
 *   processesImmigrantVisas: boolean,
 *   postCode: string | null,
 *   aliases: string[],
 *   supplementUrl: string | null,
 *   officialWebsite: string,
 *   interviewInstructionsUrl: string | null,
 *   medicalInstructionsUrl: string | null,
 *   panelPhysicianUrl: string | null,
 *   address: string,
 *   phone: string,
 *   sourceUrl: string,
 *   verificationStatus: PostVerificationStatus,
 *   lastVerified: string | null,
 *   notes: string | null,
 *   searchText: string,
 * }} ImmigrantVisaPost
 */

/**
 * @param {{
 *   id: string,
 *   label: string,
 *   countryCode: string,
 *   city: string,
 *   address: string,
 *   phone: string,
 *   website: string,
 *   type?: PostType,
 *   verificationStatus?: PostVerificationStatus,
 *   postCode?: string | null,
 *   supplementUrl?: string | null,
 *   interviewInstructionsUrl?: string | null,
 *   medicalInstructionsUrl?: string | null,
 *   panelPhysicianUrl?: string | null,
 *   aliases?: string[],
 *   searchExtras?: string[],
 *   notes?: string | null,
 *   lastVerified?: string | null,
 * }} raw
 */
function buildPost(raw) {
  const type =
    raw.type ?? (raw.label.toLowerCase().includes('consulate') ? 'Consulate' : 'Embassy')
  const supplementUrl = raw.supplementUrl ?? null
  const countryName = countryLabel(raw.countryCode, 'en')
  const aliases = [...(raw.aliases ?? []), ...(raw.searchExtras ?? [])].filter(Boolean)
  const postCode = raw.postCode ?? null

  let interviewInstructionsUrl
  let medicalInstructionsUrl
  let panelPhysicianUrl
  let sourceUrl
  /** @type {PostVerificationStatus} */
  let verificationStatus
  let notes

  if (supplementUrl) {
    interviewInstructionsUrl = supplementUrl
    medicalInstructionsUrl = raw.medicalInstructionsUrl ?? supplementUrl
    panelPhysicianUrl = raw.panelPhysicianUrl ?? supplementUrl
    sourceUrl = supplementUrl
    verificationStatus = VERIFICATION_STATUS.DIRECT_SUPPLEMENT_VERIFIED
    notes = raw.notes ?? null
  } else {
    interviewInstructionsUrl = raw.interviewInstructionsUrl ?? null
    medicalInstructionsUrl = raw.medicalInstructionsUrl ?? null
    panelPhysicianUrl = raw.panelPhysicianUrl ?? null
    sourceUrl = OFFICIAL_POSTS_LIST_URL
    verificationStatus =
      raw.verificationStatus === VERIFICATION_STATUS.NEEDS_REVIEW
        ? VERIFICATION_STATUS.NEEDS_REVIEW
        : VERIFICATION_STATUS.GENERAL_LIST_ONLY
    notes = raw.notes ? `${DEFAULT_NO_SUPPLEMENT_NOTE} ${raw.notes}` : DEFAULT_NO_SUPPLEMENT_NOTE
  }

  const searchText = [raw.label, raw.city, countryName, raw.countryCode, postCode, ...aliases]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  return {
    id: raw.id,
    name: raw.label,
    city: raw.city,
    country: countryName,
    countryCode: raw.countryCode,
    region: getMacroRegion(raw.countryCode),
    type,
    processesImmigrantVisas: true,
    postCode,
    aliases,
    supplementUrl,
    officialWebsite: raw.website,
    interviewInstructionsUrl,
    medicalInstructionsUrl,
    panelPhysicianUrl,
    address: raw.address,
    phone: raw.phone,
    sourceUrl,
    verificationStatus,
    lastVerified: raw.lastVerified ?? null,
    notes,
    searchText,
  }
}

/** @type {ImmigrantVisaPost[]} */
export const IMMIGRANT_VISA_POSTS = [
  buildPost({
    id: 'cm-yde',
    postCode: 'YDE',
    supplementUrl:
      'https://travel.state.gov/content/travel/en/us-visas/Supplements/Supplements_by_Post/YDE-Yaounde.html',
    label: 'U.S. Embassy Yaoundé',
    countryCode: 'CM',
    city: 'Yaoundé',
    address: 'Avenue Rosa Parks, Mbankolo, P.O. Box 817, Yaoundé, Cameroon',
    phone: '(237) 222-514-000',
    website: 'https://cm.usembassy.gov',
    aliases: ['Cameroon', 'Yaounde', 'Yaoundé', 'YDE'],
  }),
  buildPost({
    id: 'ae-abd',
    postCode: 'ABD',
    supplementUrl:
      'https://travel.state.gov/content/travel/en/us-visas/Supplements/Supplements_by_Post/ABD-Abu-Dhabi.html',
    label: 'U.S. Embassy Abu Dhabi',
    countryCode: 'AE',
    city: 'Abu Dhabi',
    address: 'Embassies District, Plot 38, Sector W59-02, Street No. 4, Abu Dhabi, UAE (P.O. Box 4009)',
    phone: '+971-2-414-2200',
    website: 'https://ae.usembassy.gov',
    aliases: ['UAE', 'United Arab Emirates', 'Abu Dhabi', 'Dubai', 'ABD'],
  }),
  buildPost({
    id: 'in-del',
    label: 'U.S. Embassy New Delhi',
    countryCode: 'IN',
    city: 'New Delhi',
    address:
      'Shantipath, Chanakyapuri, New Delhi 110021, India (consular: Gate 6 / “Visa Gate” on Andre Malraux Marg)',
    phone: '011-2419-8000 (from India); see usembassy.gov for dialing from abroad',
    website: 'https://in.usembassy.gov',
    aliases: ['India', 'New Delhi', 'Delhi', 'IN'],
  }),
  buildPost({
    id: 'gh-acc',
    label: 'U.S. Embassy Accra',
    countryCode: 'GH',
    city: 'Accra',
    address: 'No. 24, Fourth Circular Rd., Cantonments, Accra, Ghana (P.O. Box 194)',
    phone: '+233-30-274-1000',
    website: 'https://gh.usembassy.gov',
    aliases: ['Ghana', 'Accra', 'GH'],
  }),
  buildPost({
    id: 'ke-nbo',
    label: 'U.S. Embassy Nairobi',
    countryCode: 'KE',
    city: 'Nairobi',
    address: 'United Nations Avenue, Gigiri, Nairobi, Kenya',
    phone: '+254-20-363-6000',
    website: 'https://ke.usembassy.gov',
    aliases: ['Kenya', 'Nairobi', 'KE'],
  }),
  buildPost({
    id: 'ma-rba',
    label: 'U.S. Embassy Rabat',
    countryCode: 'MA',
    city: 'Rabat',
    address: 'Km 5.7, Avenue Mohammed VI, Souissi, Rabat, Morocco',
    phone: '+212-537-637-200',
    website: 'https://ma.usembassy.gov',
    aliases: ['Morocco', 'Rabat', 'MA'],
  }),
  buildPost({
    id: 'ma-cas',
    label: 'U.S. Consulate General Casablanca',
    countryCode: 'MA',
    city: 'Casablanca',
    address: '',
    phone: '',
    website: 'https://ma.usembassy.gov',
    verificationStatus: VERIFICATION_STATUS.NEEDS_REVIEW,
    aliases: ['Morocco', 'Casablanca', 'MA'],
  }),
  buildPost({
    id: 'dz-alg',
    label: 'U.S. Embassy Algiers',
    countryCode: 'DZ',
    city: 'Algiers',
    address: '5 Chemin Cheikh Bachir Ibrahimi, El Biar 16030, Algiers, Algeria',
    phone: '+213-770-08-2000',
    website: 'https://dz.usembassy.gov',
    aliases: ['Algeria', 'Algiers', 'DZ'],
  }),
  buildPost({
    id: 'et-add',
    label: 'U.S. Embassy Addis Ababa',
    countryCode: 'ET',
    city: 'Addis Ababa',
    address: 'Entoto Street, P.O. Box 1014, Addis Ababa, Ethiopia',
    phone: '+251-11-130-6000',
    website: 'https://et.usembassy.gov',
    aliases: ['Ethiopia', 'Addis Ababa', 'ET'],
  }),
  buildPost({
    id: 'np-ktm',
    label: 'U.S. Embassy Kathmandu',
    countryCode: 'NP',
    city: 'Kathmandu',
    address: 'Maharajgunj, Kathmandu, Nepal',
    phone: '+977-1-423-4500',
    website: 'https://np.usembassy.gov',
    aliases: ['Nepal', 'Kathmandu', 'NP'],
  }),
  buildPost({
    id: 'ng-abj',
    label: 'U.S. Embassy Abuja',
    countryCode: 'NG',
    city: 'Abuja',
    address: 'Diplomatic Drive, Central District Area, Abuja, Nigeria',
    phone: '+234-9-461-4000',
    website: 'https://ng.usembassy.gov',
    aliases: ['Nigeria', 'Abuja', 'NG'],
  }),
  buildPost({
    id: 'ng-los',
    label: 'U.S. Consulate General Lagos',
    countryCode: 'NG',
    city: 'Lagos',
    address: '2 Walter Carrington Crescent, Victoria Island, Lagos, Nigeria',
    phone: '+234-1-460-3400',
    website: 'https://ng.usembassy.gov/embassy-consulates/lagos',
    aliases: ['Nigeria', 'Lagos', 'NG'],
  }),
  buildPost({
    id: 'sn-dkr',
    label: 'U.S. Embassy Dakar',
    countryCode: 'SN',
    city: 'Dakar',
    address: 'Route des Almadies, Dakar, Senegal',
    phone: '+221-33-879-4000',
    website: 'https://sn.usembassy.gov',
    aliases: ['Senegal', 'Dakar', 'SN'],
  }),
  buildPost({
    id: 'fr-par',
    postCode: 'PRS',
    supplementUrl:
      'https://travel.state.gov/content/travel/en/us-visas/Supplements/Supplements_by_Post/PRS-Paris.html',
    label: 'U.S. Embassy Paris',
    countryCode: 'FR',
    city: 'Paris',
    address: '2 Avenue Gabriel, 75008 Paris, France',
    phone: '+33-1-43-12-22-22',
    website: 'https://fr.usembassy.gov',
    aliases: ['France', 'Paris', 'PRS'],
  }),
  buildPost({
    id: 'gb-lon',
    label: 'U.S. Embassy London',
    countryCode: 'GB',
    city: 'London',
    address: '33 Nine Elms Lane, London SW11 7US, United Kingdom',
    phone: '+44-20-7499-9000',
    website: 'https://uk.usembassy.gov',
    aliases: ['United Kingdom', 'UK', 'London', 'GB', 'Britain', 'Great Britain'],
  }),
  buildPost({
    id: 'tr-ank',
    label: 'U.S. Embassy Ankara',
    countryCode: 'TR',
    city: 'Ankara',
    address: 'Atatürk Boulevard No:110, Kavaklıdere, 06100 Ankara, Turkey',
    phone: '+90-312-455-5555',
    website: 'https://tr.usembassy.gov',
    aliases: ['Turkey', 'Ankara', 'TR', 'Türkiye'],
  }),
  buildPost({
    id: 'eg-cai',
    postCode: 'CRO',
    supplementUrl:
      'https://travel.state.gov/content/travel/en/us-visas/Supplements/Supplements_by_Post/CRO-Cairo.html',
    label: 'U.S. Embassy Cairo',
    countryCode: 'EG',
    city: 'Cairo',
    address: '5 Tawfik Diab St., Garden City, Cairo, Egypt',
    phone: '+20-2-2797-3300',
    website: 'https://eg.usembassy.gov',
    aliases: ['Egypt', 'Cairo', 'CRO'],
  }),
  buildPost({
    id: 'bd-dac',
    postCode: 'DHK',
    supplementUrl:
      'https://travel.state.gov/content/travel/en/us-visas/Supplements/Supplements_by_Post/DHK-Dhaka.html',
    label: 'U.S. Embassy Dhaka',
    countryCode: 'BD',
    city: 'Dhaka',
    address: 'Madani Avenue, Baridhara Diplomatic Enclave, Dhaka 1212, Bangladesh',
    phone: '+880-2-5566-2000',
    website: 'https://bd.usembassy.gov',
    aliases: ['Bangladesh', 'Dhaka', 'DHK'],
  }),
  buildPost({
    id: 'de-frn',
    postCode: 'FRN',
    supplementUrl:
      'https://travel.state.gov/content/travel/en/us-visas/Supplements/Supplements_by_Post/FRN-Frankfurt.html',
    label: 'U.S. Consulate General Frankfurt',
    countryCode: 'DE',
    city: 'Frankfurt',
    address: 'Giessener Str. 30, 60435 Frankfurt am Main, Germany',
    phone: '+49-69-7535-0',
    website: 'https://de.usembassy.gov/embassy-consulates/frankfurt/',
    type: 'Consulate',
    aliases: ['Germany', 'Berlin', 'Frankfurt', 'FRN', 'Deutschland', 'Frankfurt am Main'],
    notes: 'Germany immigrant visa post instructions are listed under Frankfurt in this dataset.',
  }),
  buildPost({
    id: 'ca-ott',
    label: 'U.S. Embassy Ottawa',
    countryCode: 'CA',
    city: 'Ottawa',
    address: '490 Sussex Drive, Ottawa, ON K1N 1G8, Canada',
    phone: '+1-613-688-5335',
    website: 'https://ca.usembassy.gov',
    aliases: ['Canada', 'Ottawa', 'CA'],
  }),
  buildPost({
    id: 'mx-mex',
    label: 'U.S. Embassy Mexico City',
    countryCode: 'MX',
    city: 'Mexico City',
    address: 'Paseo de la Reforma 305, Col. Cuauhtémoc, 06500 Mexico City, Mexico',
    phone: '+55-5080-2000',
    website: 'https://mx.usembassy.gov',
    aliases: ['Mexico', 'Mexico City', 'MX', 'Ciudad de México'],
  }),
  buildPost({
    id: 'za-jnb',
    label: 'U.S. Consulate General Johannesburg',
    countryCode: 'ZA',
    city: 'Johannesburg',
    address: '1 Sandton Drive, Sandhurst, Johannesburg, South Africa',
    phone: '+27-11-290-3000',
    website: 'https://za.usembassy.gov',
    aliases: ['South Africa', 'Johannesburg', 'ZA'],
  }),
  buildPost({
    id: 'ci-abj',
    postCode: 'ABJ',
    supplementUrl:
      'https://travel.state.gov/content/travel/en/us-visas/Supplements/Supplements_by_Post/ABJ-Abidjan.html',
    label: 'U.S. Embassy Abidjan',
    countryCode: 'CI',
    city: 'Abidjan',
    address: 'Riviera Golf, 01 B.P. 1712 Abidjan 01, Côte d’Ivoire',
    phone: '+225-22-49-40-00',
    website: 'https://ci.usembassy.gov',
    aliases: ["Côte d'Ivoire", "Cote d'Ivoire", 'Ivory Coast', 'Abidjan', 'ABJ'],
  }),
  buildPost({
    id: 'ph-mnl',
    label: 'U.S. Embassy Manila',
    countryCode: 'PH',
    city: 'Manila',
    address: '1201 Roxas Boulevard, Ermita, Manila 1000, Philippines',
    phone: '+63-2-5301-2000',
    website: 'https://ph.usembassy.gov',
  }),
  buildPost({
    id: 'pk-isl',
    label: 'U.S. Embassy Islamabad',
    countryCode: 'PK',
    city: 'Islamabad',
    address: 'Diplomatic Enclave, Ramna 5, Islamabad, Pakistan',
    phone: '+92-51-201-4000',
    website: 'https://pk.usembassy.gov',
  }),
  buildPost({
    id: 'lk-cmb',
    label: 'U.S. Embassy Colombo',
    countryCode: 'LK',
    city: 'Colombo',
    address: '210 Galle Road, Colombo 03, Sri Lanka',
    phone: '+94-11-249-8500',
    website: 'https://lk.usembassy.gov',
  }),
  buildPost({
    id: 'vn-han',
    label: 'U.S. Embassy Hanoi',
    countryCode: 'VN',
    city: 'Hanoi',
    address: '170 Ngoc Khanh, Ba Dinh District, Hanoi, Vietnam',
    phone: '+84-24-3850-5000',
    website: 'https://vn.usembassy.gov',
  }),
  buildPost({
    id: 'th-bkk',
    label: 'U.S. Embassy Bangkok',
    countryCode: 'TH',
    city: 'Bangkok',
    address: '95 Wireless Road, Lumpini, Pathumwan, Bangkok 10330, Thailand',
    phone: '+66-2-205-4000',
    website: 'https://th.usembassy.gov',
  }),
  buildPost({
    id: 'id-jkt',
    label: 'U.S. Embassy Jakarta',
    countryCode: 'ID',
    city: 'Jakarta',
    address: 'Jl. Medan Merdeka Selatan 3–5, Jakarta 10110, Indonesia',
    phone: '+62-21-3435-9000',
    website: 'https://id.usembassy.gov',
  }),
  buildPost({
    id: 'br-bsb',
    label: 'U.S. Embassy Brasilia',
    countryCode: 'BR',
    city: 'Brasília',
    address: 'SES Av. das Nações, Quadra 801, Lote 03, 70406-900 Brasília, DF, Brazil',
    phone: '+55-61-3312-7000',
    website: 'https://br.usembassy.gov',
    aliases: ['Brazil', 'Brasília', 'Brasilia', 'BR'],
  }),
  buildPost({
    id: 'co-bog',
    label: 'U.S. Embassy Bogotá',
    countryCode: 'CO',
    city: 'Bogotá',
    address: 'Carrera 45 # 24B-27, Bogotá, Colombia',
    phone: '+57-601-275-2000',
    website: 'https://co.usembassy.gov',
    aliases: ['Colombia', 'Bogotá', 'Bogota', 'CO'],
  }),
  buildPost({
    id: 'do-sdq',
    label: 'U.S. Embassy Santo Domingo',
    countryCode: 'DO',
    city: 'Santo Domingo',
    address: 'Av. República de Colombia #57, Ens. La Julia, Santo Domingo, Dominican Republic',
    phone: '+1-809-567-7775',
    website: 'https://do.usembassy.gov',
    aliases: ['Dominican Republic', 'Dominicana', 'Santo Domingo', 'DO', 'DR'],
  }),
  buildPost({
    id: 'cu-hav',
    label: 'U.S. Embassy Havana',
    countryCode: 'CU',
    city: 'Havana',
    address: 'Calzada between L & M Streets, Vedado, Havana, Cuba',
    phone: '+53-7-839-4100',
    website: 'https://cu.usembassy.gov',
  }),
  buildPost({
    id: 'jm-kng',
    label: 'U.S. Embassy Kingston',
    countryCode: 'JM',
    city: 'Kingston',
    address: '142 Old Hope Road, Kingston 6, Jamaica',
    phone: '+1-876-702-6000',
    website: 'https://jm.usembassy.gov',
  }),
  buildPost({
    id: 'sa-ruh',
    label: 'U.S. Embassy Riyadh',
    countryCode: 'SA',
    city: 'Riyadh',
    address: 'Collector Road M, Riyadh Diplomatic Quarter, Riyadh, Saudi Arabia',
    phone: '+966-11-488-3800',
    website: 'https://sa.usembassy.gov',
  }),
  buildPost({
    id: 'il-tlv',
    label: 'U.S. Embassy Jerusalem',
    countryCode: 'IL',
    city: 'Jerusalem',
    address: '14 David Flusser St., Arnona, Jerusalem 9378322, Israel',
    phone: '+972-2-630-4000',
    website: 'https://il.usembassy.gov',
  }),
  buildPost({
    id: 'pl-waw',
    label: 'U.S. Embassy Warsaw',
    countryCode: 'PL',
    city: 'Warsaw',
    address: 'Aleje Ujazdowskie 29/31, 00-540 Warsaw, Poland',
    phone: '+48-22-504-2000',
    website: 'https://pl.usembassy.gov',
  }),
  buildPost({
    id: 'ua-kyv',
    label: 'U.S. Embassy Kyiv',
    countryCode: 'UA',
    city: 'Kyiv',
    address: '4 Igor Sikorsky St., 04112 Kyiv, Ukraine (verify current operations on usembassy.gov)',
    phone: '+380-44-521-5000',
    website: 'https://ua.usembassy.gov',
  }),
  buildPost({
    id: 'ru-mow',
    label: 'U.S. Embassy Moscow',
    countryCode: 'RU',
    city: 'Moscow',
    address: 'Bolshoy Deviatinsky Pereulok No. 8, 119121 Moscow, Russia (verify current services)',
    phone: '+7-495-728-5000',
    website: 'https://ru.usembassy.gov',
  }),
  buildPost({
    id: 'cn-bej',
    label: 'U.S. Embassy Beijing',
    countryCode: 'CN',
    city: 'Beijing',
    address: '55 An Jia Lou Lu, Chaoyang District, Beijing 100600, China',
    phone: '+86-10-8531-3000',
    website: 'https://china.usembassy.gov',
  }),
  buildPost({
    id: 'jp-tky',
    label: 'U.S. Embassy Tokyo',
    countryCode: 'JP',
    city: 'Tokyo',
    address: '1-10-5 Akasaka, Minato-ku, Tokyo 107-8420, Japan',
    phone: '+81-3-3224-5000',
    website: 'https://jp.usembassy.gov',
  }),
  buildPost({
    id: 'kr-seo',
    label: 'U.S. Embassy Seoul',
    countryCode: 'KR',
    city: 'Seoul',
    address: '188 Sejong-daero, Jongno-gu, Seoul 03141, Republic of Korea',
    phone: '+82-2-397-4114',
    website: 'https://kr.usembassy.gov',
  }),
  buildPost({
    id: 'au-can',
    label: 'U.S. Embassy Canberra',
    countryCode: 'AU',
    city: 'Canberra',
    address: 'Moonah Place, Yarralumla, ACT 2600, Australia',
    phone: '+61-2-6214-5600',
    website: 'https://au.usembassy.gov',
  }),
].sort((a, b) => a.name.localeCompare(b.name, 'en'))

/** @param {string} id */
export function getImmigrantPostById(id) {
  return IMMIGRANT_VISA_POSTS.find((p) => p.id === id) ?? null
}

/** @param {ImmigrantVisaPost} post */
export function toLegacyPost(post) {
  return {
    id: post.id,
    label: post.name,
    countryCode: post.countryCode,
    city: post.city,
    address: post.address,
    phone: post.phone,
    website: post.officialWebsite,
    supplementUrl: post.supplementUrl ?? null,
    searchText: post.searchText,
    verificationStatus: post.verificationStatus,
    instructionsUrl: getPostInstructionsUrl(post),
    medicalUrl: getPostMedicalUrl(post),
  }
}

export function filterImmigrantPosts(query) {
  const q = query.trim().toLowerCase()
  if (!q) return IMMIGRANT_VISA_POSTS
  return IMMIGRANT_VISA_POSTS.filter(
    (p) =>
      p.searchText.includes(q) ||
      (p.postCode && p.postCode.toLowerCase().includes(q)) ||
      (p.address && p.address.toLowerCase().includes(q))
  )
}

export function getPostVerificationStats() {
  const total = IMMIGRANT_VISA_POSTS.length
  const withDirect = IMMIGRANT_VISA_POSTS.filter((p) => p.supplementUrl).length
  const generalListOnly = IMMIGRANT_VISA_POSTS.filter(
    (p) => p.verificationStatus === VERIFICATION_STATUS.GENERAL_LIST_ONLY
  ).length
  const needsReview = IMMIGRANT_VISA_POSTS.filter(
    (p) => p.verificationStatus === VERIFICATION_STATUS.NEEDS_REVIEW
  ).length
  return { total, withDirect, generalListOnly, needsReview }
}

export function getPostsNeedingSupplementVerification() {
  return IMMIGRANT_VISA_POSTS.filter((p) => !p.supplementUrl)
}
