import { useCallback, useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n/translations'
import { LanguageContext } from './languageContext'

const RTL_LANGS = new Set(['ar'])

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en')

  const setLang = useCallback((code) => {
    if (translations[code]) setLangState(code)
  }, [])

  const t = useCallback(
    (key) => {
      const dict = translations[lang]
      const parts = key.split('.')
      let cur = dict
      for (const p of parts) {
        if (cur == null || typeof cur !== 'object') return key
        const next = cur[p]
        if (next === undefined) return key
        cur = next
      }
      if (cur === undefined || cur === null) return key
      return cur
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
