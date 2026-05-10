import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../hooks/useLanguage'
import { usePortalDropdownPosition } from '../hooks/usePortalDropdownPosition'
import { input, muted, portalListboxClassName } from '../theme/ui'

/**
 * Multi-select: one searchable input; chips below; pick from portaled dropdown to add.
 */
export function SearchableMultiSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
  getOptionLabel = (o) => String(o),
  getOptionValue = (o) => o,
  noResultsText,
  id: idProp,
  hint,
}) {
  const { isRtl, t } = useLanguage()
  const reactId = useId()
  const id = idProp ?? reactId
  const listId = `${id}-list`
  const containerRef = useRef(null)
  const anchorRef = useRef(null)
  const portalRef = useRef(null)
  const listInnerRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [highlight, setHighlight] = useState(0)

  const selectedSet = useMemo(() => new Set(value), [value])

  const available = useMemo(
    () => options.filter((o) => !selectedSet.has(getOptionValue(o))),
    [options, selectedSet, getOptionValue]
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return available
    return available.filter((o) => getOptionLabel(o).toLowerCase().includes(q))
  }, [available, query, getOptionLabel])

  const emptyLabel = noResultsText ?? t('select.noResults')
  const ph = placeholder ?? t('select.typeToSearch')

  const portalStyle = usePortalDropdownPosition(open, anchorRef, {
    maxHeight: 280,
    repositionKey: `${filtered.length}-${query}`,
  })

  const safeHighlight = useMemo(
    () => Math.min(highlight, Math.max(0, filtered.length - 1)),
    [highlight, filtered.length]
  )

  useLayoutEffect(() => {
    if (!open || !listInnerRef.current) return
    const node = listInnerRef.current.querySelector(`[data-opt-index="${safeHighlight}"]`)
    node?.scrollIntoView({ block: 'nearest' })
  }, [safeHighlight, open, filtered.length])

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      const target = e.target
      if (!(target instanceof Node)) return
      if (containerRef.current?.contains(target)) return
      if (portalRef.current?.contains(target)) return
      setOpen(false)
      setQuery('')
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const add = (opt) => {
    const v = getOptionValue(opt)
    if (selectedSet.has(v)) return
    onChange([...value, v])
    setQuery('')
    setHighlight(0)
  }

  const remove = (v) => {
    onChange(value.filter((x) => x !== v))
  }

  const onKeyDown = (e) => {
    if (e.key === 'Tab') return
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
      const opt = filtered[safeHighlight]
      if (opt) add(opt)
    }
  }

  const dropdown = open
    ? createPortal(
        <ul
          ref={(n) => {
            portalRef.current = n
            listInnerRef.current = n
          }}
          id={listId}
          role="listbox"
          dir={isRtl ? 'rtl' : 'ltr'}
          style={portalStyle}
          className={portalListboxClassName}
        >
          {filtered.length === 0 ? (
            <li className={`px-3 py-2 text-sm ${muted}`} role="option">
              {emptyLabel}
            </li>
          ) : (
            filtered.map((opt, i) => {
              const lbl = getOptionLabel(opt)
              const active = i === safeHighlight
              return (
                <li key={String(getOptionValue(opt))} role="presentation">
                  <button
                    type="button"
                    role="option"
                    data-opt-index={i}
                    className={`w-full px-3 py-2 text-start text-sm ${
                      active ? 'bg-violet-100 text-violet-900 dark:bg-violet-500/20 dark:text-violet-100' : 'text-slate-800 dark:text-slate-200'
                    } hover:bg-slate-100 dark:hover:bg-white/10`}
                    onMouseDown={(e) => e.preventDefault()}
                    onMouseEnter={() => setHighlight(i)}
                    onClick={() => add(opt)}
                  >
                    {lbl}
                  </button>
                </li>
              )
            })
          )}
        </ul>,
        document.body
      )
    : null

  const inner = (
    <div ref={containerRef} className="space-y-2">
      <div ref={anchorRef} className="relative">
        <input
          id={id}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          placeholder={ph}
          value={open ? query : ''}
          onChange={(e) => {
            setHighlight(0)
            setQuery(e.target.value)
            if (!open) setOpen(true)
          }}
          onFocus={() => {
            setHighlight(0)
            setOpen(true)
          }}
          onKeyDown={onKeyDown}
          className={`${input} ${isRtl ? 'ps-10 pe-3' : 'pe-10 ps-3'}`}
        />
        <span className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 ${isRtl ? 'start-3' : 'end-3'}`}>
          <svg className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {dropdown}

      {value.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {value.map((v) => (
            <span
              key={v}
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 py-1 ps-3 pe-1.5 text-xs text-slate-800 dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
            >
              {getOptionLabel(v)}
              <button
                type="button"
                className="rounded-full p-0.5 text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
                aria-label={`${t('common.removeItem')}: ${getOptionLabel(v)}`}
                onClick={() => remove(v)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )

  return (
    <label className="block">
      <span className={`text-xs font-medium ${muted}`}>{label}</span>
      <div className="mt-1">{inner}</div>
      {hint ? <p className={`mt-1 text-xs ${muted}`}>{hint}</p> : null}
    </label>
  )
}
