import { useEffect, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'

const links = [
  { href: '#home', key: 'nav.home' },
  { href: '#dv-process', key: 'nav.dvProcess' },
  { href: '#ds-260', key: 'nav.ds260' },
  { href: '#roadmap', key: 'nav.roadmap' },
  { href: '#countries', key: 'nav.countries' },
  { href: '#embassy', key: 'nav.embassy' },
  { href: '#interviews', key: 'nav.interviews' },
  { href: '#life-america', key: 'nav.life' },
  { href: '#news', key: 'nav.news' },
  { href: '#ask-ai', key: 'nav.askAi' },
  { href: '#resources', key: 'nav.resources' },
]

const langs = [
  { code: 'en', key: 'lang.en' },
  { code: 'fr', key: 'lang.fr' },
  { code: 'ar', key: 'lang.ar' },
  { code: 'es', key: 'lang.es' },
]

export function Navbar() {
  const { t, lang, setLang, isRtl } = useLanguage()
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

  return (
    <header
      dir={dirNav}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-violet-950/20' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <a href="#home" className="group flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/25 ring-1 ring-white/20">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-semibold tracking-tight text-white text-sm sm:text-base">
            DV Compass <span className="text-violet-300">AI</span>
          </span>
        </a>

        <div className="hidden xl:flex flex-wrap items-center justify-end gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-2.5 py-2 text-xs font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
            >
              {t(l.key)}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <label className="sr-only" htmlFor="lang-select">
            Language
          </label>
          <select
            id="lang-select"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="rounded-lg border border-white/15 bg-slate-900/80 px-2 py-1.5 text-xs font-medium text-slate-200 outline-none focus:ring-2 focus:ring-violet-500/60"
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
          className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
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
          className="xl:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl max-h-[min(70vh,calc(100dvh-4rem))] overflow-y-auto"
          dir={dirNav}
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {t(l.key)}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 mt-2">
              <label className="block text-xs text-slate-500 mb-1 px-1">Language</label>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2.5 text-sm text-slate-200"
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
