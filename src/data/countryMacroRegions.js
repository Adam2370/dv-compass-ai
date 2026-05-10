/**
 * UN-style macro regions (approximate) for ISO 3166-1 alpha-2 codes.
 * Used for filtering/display only — not a legal classification.
 */
const AFRICA = new Set(
  'DZ AO BJ BW BF BI CV CM CF TD KM CG CD CI DJ EG GQ ER SZ ET GA GM GH GN GW KE LS LR LY MG MW ML MR MU YT MA MZ NA NE NG RW ST SN SC SL SO ZA SS SD TZ TG TN UG ZM ZW EH RE SH'.split(
    ' '
  )
)
const EUROPE = new Set(
  'AL AD AM AT AZ BY BE BA BG HR CY CZ DK EE FO FI FR GE DE GI GR GL HU IS IE IT XK LV LI LT LU MT MD MC ME NL MK NO PL PT RO RU SM RS SK SI ES SE CH TR UA GB VA AX GG IM JE'.split(
    ' '
  )
)
const ASIA = new Set(
  'AF AM BH BD BT BN KH CN HK IN ID IR IQ IL JP JO KZ KW KG LA LB MO MY MV MN MM NP KP KR OM PK PS PH QA SA SG LK SY TW TJ TH TL TM AE UZ VN YE'.split(
    ' '
  )
)
const AMERICAS = new Set(
  'CA AI AG AR AW BS BB BZ BM BO BQ BR VG KY CL CO CR CU CW DM DO EC SV FK GF GD GP GT GY HT HN JM MQ MX MS NI PA PY PE PR BL KN LC MF VC SX TT TC US UY VE VI'.split(
    ' '
  )
)
const OCEANIA = new Set(
  'AS AU CK FJ PF GU KI MH FM NR NC NZ NU MP PW PG PN WS SB TK TO TV UM VU WF'.split(' ')
)
const ANTARCTICA = new Set(['AQ', 'BV', 'GS', 'HM', 'TF'])

/** @param {string} code */
export function getMacroRegion(code) {
  const c = code?.toUpperCase()
  if (!c) return 'Other'
  if (AFRICA.has(c)) return 'Africa'
  if (EUROPE.has(c)) return 'Europe'
  if (ASIA.has(c)) return 'Asia'
  if (AMERICAS.has(c)) return 'Americas'
  if (OCEANIA.has(c)) return 'Oceania'
  if (ANTARCTICA.has(c)) return 'Antarctica'
  return 'Other'
}
