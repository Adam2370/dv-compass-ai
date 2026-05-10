import { arOverlay } from './ar'
import { enOverlay } from './en'
import { esOverlay } from './es'
import { frOverlay } from './fr'

/** Per-language overlays merged on top of `translations.js` for strict i18n. */
export const contentByLang = {
  en: enOverlay,
  fr: frOverlay,
  ar: arOverlay,
  es: esOverlay,
}
