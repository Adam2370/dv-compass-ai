import { useMemo, useState } from 'react'
import { ALL_COUNTRY_CODES, countryLabel } from '../utils/countries'
import { input } from '../theme/ui'

export function SearchableCountrySelect({ value, onChange, lang, placeholder, id }) {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return ALL_COUNTRY_CODES
    return ALL_COUNTRY_CODES.filter((code) => {
      const name = countryLabel(code, lang).toLowerCase()
      return name.includes(s) || code.toLowerCase().includes(s)
    })
  }, [q, lang])

  return (
    <div className="space-y-1">
      <input
        type="search"
        className={input}
        placeholder={placeholder}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label={placeholder}
      />
      <select id={id} className={input} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">{placeholder}</option>
        {filtered.map((code) => (
          <option key={code} value={code}>
            {countryLabel(code, lang)} ({code})
          </option>
        ))}
      </select>
    </div>
  )
}
