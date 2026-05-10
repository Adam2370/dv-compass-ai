import { useCallback, useEffect, useMemo, useState } from 'react'
import { contentByLang } from '../i18n/content'
import { deepMerge } from '../i18n/deepMerge'
import { translations } from '../i18n/translations'
import { LanguageContext } from './languageContext'

const RTL_LANGS = new Set(['ar'])

function mergedFor(code) {
  const c = translations[code] ? code : 'en'
  const base = translations[c]
  const overlay = contentByLang[c] || contentByLang.en
  return deepMerge(base, overlay)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en')

  const setLang = useCallback((code) => {
    if (translations[code]) setLangState(code)
  }, [])

  const t = useCallback(
    (key) => {
      const walk = (dict) => {
        const parts = key.split('.')
        let cur = dict
        for (const p of parts) {
          if (cur == null || typeof cur !== 'object') return undefined
          const next = cur[p]
          if (next === undefined) return undefined
          cur = next
        }
        return cur === undefined || cur === null ? undefined : cur
      }
      const primary = walk(mergedFor(lang))
      if (primary !== undefined) return primary
      if (lang !== 'en') {
        const fallback = walk(mergedFor('en'))
        if (fallback !== undefined) return fallback
      }
      return key
    },
    [lang]
  )

  const isRtl = RTL_LANGS.has(lang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
  }, [lang, isRtl])

  const value = useMemo(() => ({ lang, setLang, t, isRtl }), [lang, setLang, t, isRtl])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
