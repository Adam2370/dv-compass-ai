import { useCallback, useLayoutEffect, useState } from 'react'

const GAP = 8

/**
 * Fixed positioning for a portaled dropdown aligned to `anchorRef` (viewport coords).
 * Flips above the anchor when there is more room above than below.
 *
 * @param {boolean} open
 * @param {React.RefObject<HTMLElement | null>} anchorRef
 * @param {{ maxHeight?: number, repositionKey?: unknown }} options
 */
export function usePortalDropdownPosition(open, anchorRef, { maxHeight = 280, repositionKey = 0 } = {}) {
  const [style, setStyle] = useState({
    position: 'fixed',
    top: 0,
    left: 0,
    width: 0,
    maxHeight,
    zIndex: 9999,
  })

  const update = useCallback(() => {
    const el = anchorRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const vv = window.visualViewport
    const vh = vv?.height ?? window.innerHeight
    const vw = vv?.width ?? window.innerWidth

    const spaceBelow = vh - rect.bottom - GAP
    const spaceAbove = rect.top - GAP
    const preferDown = spaceBelow >= Math.min(200, maxHeight) || spaceBelow >= spaceAbove
    const placement = preferDown ? 'bottom' : 'top'
    const available = placement === 'bottom' ? spaceBelow : spaceAbove
    const mh = Math.min(maxHeight, Math.max(80, available))

    let left = rect.left
    let width = rect.width
    if (left + width > vw - 8) left = Math.max(8, vw - width - 8)
    if (left < 8) left = 8
    if (width > vw - 16) {
      width = vw - 16
      left = 8
    }

    let top = placement === 'bottom' ? rect.bottom + GAP : rect.top - GAP - mh

    if (top < 8) top = 8
    if (top + mh > vh - 8) top = Math.max(8, vh - mh - 8)

    setStyle({
      position: 'fixed',
      top,
      left,
      width,
      maxHeight: mh,
      zIndex: 9999,
    })
  }, [anchorRef, maxHeight])

  useLayoutEffect(() => {
    if (!open) return
    update()
    const vv = window.visualViewport
    const ro =
      typeof ResizeObserver !== 'undefined' && anchorRef.current
        ? new ResizeObserver(() => update())
        : null
    ro?.observe(anchorRef.current)

    const cap = true
    window.addEventListener('scroll', update, cap)
    window.addEventListener('resize', update)
    vv?.addEventListener('scroll', update)
    vv?.addEventListener('resize', update)

    return () => {
      ro?.disconnect()
      window.removeEventListener('scroll', update, cap)
      window.removeEventListener('resize', update)
      vv?.removeEventListener('scroll', update)
      vv?.removeEventListener('resize', update)
    }
  }, [open, update, anchorRef, repositionKey])

  return style
}
