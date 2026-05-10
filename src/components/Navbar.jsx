import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { useTheme } from '../hooks/useTheme'
import { navBar, navLink, navLinkActive } from '../theme/ui'

const links = [
  { to: '/', key: 'nav.home', end: true },
  { to: '/dv-process', key: 'nav.dvProcess' },
  { to: '/ds-260', key: 'nav.ds260' },
  { to: '/roadmap', key: 'nav.roadmap' },
  { to: '/country-guides', key: 'nav.countries' },
  { to: '/embassy-medical', key: 'nav.embassy' },
  { to: '/interviews', key: 'nav.interviews' },
  { to: '/life-america', key: 'nav.life' },
  { to: '/ask-ai', key: 'nav.askAi' },
  { to: '/resources', key: 'nav.resources' },
  { to: '/community', key: 'nav.community' },
]

const langs = [
  { code: 'en', key: 'lang.en' },
  { code: 'fr', key: 'lang.fr' },
  { code: 'ar', key: 'lang.ar' },
  { code: 'es', key: 'lang.es' },
]

export function Navbar() {
  const { t, lang, setLang, isRtl } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const dirNav = isRtl ? 'rtl' : 'ltr'
  const navClass = `${navBar(scrolled)} sticky top-0 z-50 transition-all duration-300`

  const linkClass = ({ isActive }) => (isActive ? navLinkActive : navLink)

  return (
    <header dir={dirNav} className={navClass}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <NavLink to="/" className="group flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/25 ring-1 ring-white/20">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-semibold tracking-tight text-slate-900 dark:text-white text-sm sm:text-base">
            {t('nav.brandPrefix')} <span className="text-violet-600 dark:text-violet-300">{t('nav.brandSuffix')}</span>
          </span>
        </NavLink>

        <div className="hidden xl:flex flex-wrap items-center justify-end gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {t(l.key)}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-500">{t('theme.label')}</span>
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-50 dark:border-white/15 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {theme === 'dark' ? t('theme.light') : t('theme.dark')}
          </button>
          <label className="sr-only" htmlFor="lang-select">
            {t('nav.languageLabel')}
          </label>
          <select
            id="lang-select"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-xs font-medium text-slate-800 outline-none focus:ring-2 focus:ring-violet-500/60 dark:border-white/15 dark:bg-slate-900/80 dark:text-slate-200"
          >
            {langs.map((lg) => (
              <option key={lg.code} value={lg.code}>
                {t(lg.key)}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 transition-colors"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? t('nav.close') : t('nav.menu')}</span>
          {open ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="xl:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl max-h-[min(70vh,calc(100dvh-4rem))] overflow-y-auto dark:border-white/10 dark:bg-slate-950/95"
          dir={dirNav}
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass} onClick={() => setOpen(false)}>
                {t(l.key)}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-white/10 mt-2 space-y-2">
              <button
                type="button"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-800 dark:border-white/15 dark:text-slate-200"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {t('theme.label')}: {theme === 'dark' ? t('theme.light') : t('theme.dark')}
              </button>
              <label className="block text-xs text-slate-500 mb-1 px-1">{t('nav.languageLabel')}</label>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 dark:border-white/15 dark:bg-slate-900 dark:text-slate-200"
              >
                {langs.map((lg) => (
                  <option key={lg.code} value={lg.code}>
                    {t(lg.key)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
