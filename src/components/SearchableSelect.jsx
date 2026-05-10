import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { input, muted } from '../theme/ui'

/**
 * Single searchable combobox: one field shows selection; open to type filter and pick option.
 */
export function SearchableSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
  getOptionLabel = (o) => String(o),
  getOptionValue = (o) => o,
  noResultsText,
  id: idProp,
  disabled = false,
  footer,
}) {
  const { isRtl } = useLanguage()
  const reactId = useId()
  const id = idProp ?? reactId
  const listId = `${id}-list`
  const containerRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [highlight, setHighlight] = useState(0)

  const selectedOption = useMemo(
    () => options.find((o) => getOptionValue(o) === value),
    [options, value, getOptionValue]
  )
  const displayLabel = selectedOption != null ? getOptionLabel(selectedOption) : ''

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return options
    return options.filter((o) => getOptionLabel(o).toLowerCase().includes(q))
  }, [options, query, getOptionLabel])

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  const selectOption = useCallback(
    (opt) => {
      onChange(getOptionValue(opt))
      setOpen(false)
      setQuery('')
    },
    [onChange, getOptionValue]
  )

  const inputValue = open ? query : displayLabel
  const showPlaceholder = !open && !displayLabel

  const onInputChange = (e) => {
    const v = e.target.value
    setHighlight(0)
    if (!open) {
      setOpen(true)
      setQuery(v)
    } else {
      setQuery(v)
    }
  }

  const onKeyDown = (e) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      e.preventDefault()
      setHighlight(0)
      setOpen(true)
      setQuery('')
      return
    }
    if (!open) return
    if (e.key === 'Escape') {
      e.preventDefault()
      setOpen(false)
      setQuery('')
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlight((h) => Math.min(h + 1, Math.max(filtered.length - 1, 0)))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlight((h) => Math.max(h - 1, 0))
    }
    if (e.key === 'Enter' && filtered.length > 0) {
      e.preventDefault()
      const opt = filtered[Math.min(highlight, filtered.length - 1)]
      if (opt) selectOption(opt)
    }
  }

  const toggleOpen = () => {
    if (disabled) return
    if (open) {
      setOpen(false)
      setQuery('')
    } else {
      setHighlight(0)
      setOpen(true)
      setQuery('')
    }
  }

  const control = (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <input
          id={id}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          disabled={disabled}
          readOnly={false}
          placeholder={showPlaceholder ? placeholder : undefined}
          value={open ? inputValue : displayLabel}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          onFocus={() => {
            if (!disabled) {
              setHighlight(0)
              setOpen(true)
              setQuery('')
            }
          }}
          className={`${input} ${isRtl ? 'ps-10 pe-3' : 'pe-10 ps-3'}`}
        />
        <button
          type="button"
          tabIndex={-1}
          aria-hidden
          disabled={disabled}
          onMouseDown={(e) => e.preventDefault()}
          onClick={toggleOpen}
          className={`absolute top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10 dark:text-slate-400 ${isRtl ? 'start-2' : 'end-2'}`}
        >
          <svg className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {open && !disabled ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-slate-200 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-slate-900"
        >
          {filtered.length === 0 ? (
            <li className={`px-3 py-2 text-sm ${muted}`} role="option">
              {noResultsText}
            </li>
          ) : (
            filtered.map((opt, i) => {
              const v = getOptionValue(opt)
              const lbl = getOptionLabel(opt)
              const active = i === highlight
              return (
                <li key={String(v)}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={v === value}
                    className={`w-full px-3 py-2 text-start text-sm ${
                      active ? 'bg-violet-100 text-violet-900 dark:bg-violet-500/20 dark:text-violet-100' : 'text-slate-800 dark:text-slate-200'
                    } hover:bg-slate-100 dark:hover:bg-white/10`}
                    onMouseDown={(e) => e.preventDefault()}
                    onMouseEnter={() => setHighlight(i)}
                    onClick={() => selectOption(opt)}
                  >
                    {lbl}
                  </button>
                </li>
              )
            })
          )}
        </ul>
      ) : null}
      {footer}
    </div>
  )

  if (label) {
    return (
      <label className="block">
        <span className={`text-xs font-medium ${muted}`}>{label}</span>
        <div className="mt-1">{control}</div>
      </label>
    )
  }

  return control
}
