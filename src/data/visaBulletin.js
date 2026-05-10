import { OFFICIAL_SOURCES } from './officialSources.js'

/** Static reference model — no cut-off numbers (verify monthly on the official bulletin). */
export const VISA_BULLETIN = {
  officialUrl: OFFICIAL_SOURCES.visaBulletin,
  currentMonthLabel: null,
  lastChecked: null,
  regions: ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America and Caribbean'],
}
