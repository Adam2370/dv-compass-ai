import { useMemo, useState } from 'react'
import { ALL_COUNTRY_CODES, countryLabel } from '../utils/countries'
import { card, heading, input, muted } from '../theme/ui'

export function MultiCountryPicker({ lang, selectedCodes, onChange, title, hint, onClose, doneLabel, clearLabel, searchPlaceholder }) {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return ALL_COUNTRY_CODES
    return ALL_COUNTRY_CODES.filter((code) => {
      const name = countryLabel(code, lang).toLowerCase()
      return name.includes(s) || code.toLowerCase().includes(s)
    })
  }, [q, lang])

  const toggle = (code) => {
    const next = new Set(selectedCodes)
    if (next.has(code)) next.delete(code)
    else next.add(code)
    onChange([...next])
  }

  const selectedSet = useMemo(() => new Set(selectedCodes), [selectedCodes])

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className={`${card} w-full max-w-lg max-h-[85vh] flex flex-col p-4 shadow-xl`}>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className={`text-lg font-semibold ${heading}`}>{title}</h3>
            <p className={`text-xs ${muted}`}>{hint}</p>
          </div>
          <button type="button" className="text-sm text-violet-600 dark:text-violet-300 hover:underline" onClick={() => onChange([])}>
            {clearLabel}
          </button>
        </div>
        <input
          type="search"
          className={`${input} mb-2`}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
        />
        <div className="flex-1 overflow-y-auto border border-slate-200 dark:border-white/10 rounded-xl divide-y divide-slate-200 dark:divide-white/10">
          {filtered.map((code) => (
            <label key={code} className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5">
              <input type="checkbox" checked={selectedSet.has(code)} onChange={() => toggle(code)} className="rounded border-slate-300 dark:border-white/20" />
              <span className="text-sm text-slate-800 dark:text-slate-200">
                {countryLabel(code, lang)} ({code})
              </span>
            </label>
          ))}
        </div>
        <button type="button" className="mt-3 w-full rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 py-3 text-sm font-semibold text-white" onClick={onClose}>
          {doneLabel}
        </button>
      </div>
    </div>
  )
}
