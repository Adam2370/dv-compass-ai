import { useMemo, useState } from 'react'
import { US_OVERSEAS_POSTS } from '../data/usEmbassies'
import { input, muted } from '../theme/ui'

export function EmbassyCombobox({ valueId, onChange, placeholder }) {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return US_OVERSEAS_POSTS
    return US_OVERSEAS_POSTS.filter(
      (p) =>
        p.label.toLowerCase().includes(s) ||
        p.city.toLowerCase().includes(s) ||
        p.countryCode.toLowerCase().includes(s) ||
        p.address.toLowerCase().includes(s)
    )
  }, [q])

  const selected = US_OVERSEAS_POSTS.find((p) => p.id === valueId)

  return (
    <div className="space-y-2">
      <input
        type="search"
        className={input}
        placeholder={placeholder}
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <select className={input} value={valueId} onChange={(e) => onChange(e.target.value)}>
        <option value="">{placeholder}</option>
        {filtered.map((p) => (
          <option key={p.id} value={p.id}>
            {p.label} — {p.city}
          </option>
        ))}
      </select>
      {selected ? (
        <p className={`text-xs ${muted} whitespace-pre-line`}>
          {selected.address}
          {'\n'}
          {selected.phone} · {selected.website}
        </p>
      ) : null}
    </div>
  )
}
