/** Shared Tailwind class strings for light + dark mode (html.dark). */

export const page = 'min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased selection:bg-violet-500/30 dark:selection:bg-violet-500/40 selection:text-white'

export const sectionBorder = 'border-slate-200/80 dark:border-white/5'

export const card =
  'rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none backdrop-blur-md'

export const cardMuted = 'rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.02] dark:bg-slate-950/40'

export const heading = 'text-slate-900 dark:text-white'

export const heading2 = 'text-2xl font-semibold text-slate-900 dark:text-white'

export const muted = 'text-slate-600 dark:text-slate-400'

export const mutedSm = 'text-slate-500 dark:text-slate-500'

export const accent = 'text-violet-700 dark:text-violet-300'

export const input =
  'w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:focus:border-violet-400/50'

export const select = input

export const navBar = (scrolled) =>
  scrolled
    ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm dark:bg-slate-950/85 dark:border-white/10 dark:shadow-lg dark:shadow-violet-950/20'
    : 'bg-transparent border-b border-transparent'

export const navLink =
  'rounded-lg px-2.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white transition-colors'

export const navLinkActive =
  'rounded-lg px-2.5 py-2 text-xs font-medium text-violet-700 bg-violet-50 dark:text-violet-200 dark:bg-white/10'

export const glassHero =
  'rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-xs font-medium tracking-wide text-violet-800 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-violet-100/95'

/** Portaled combobox list: max-height overridden inline when positioning. */
export const portalListboxClassName =
  'overflow-y-auto overflow-x-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl dark:border-white/10 dark:bg-slate-900 overscroll-contain outline-none'
