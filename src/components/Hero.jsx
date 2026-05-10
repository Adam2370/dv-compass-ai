import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { card, glassHero, muted } from '../theme/ui'

export function Hero() {
  const { t } = useLanguage()
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[120px] animate-pulse dark:bg-violet-600/25" style={{ animationDuration: '5s' }} />
        <div className="absolute right-0 top-24 h-[380px] w-[380px] rounded-full bg-indigo-500/15 blur-[100px] animate-pulse dark:bg-indigo-500/20" style={{ animationDuration: '7s' }} />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-fuchsia-600/10 blur-[90px] dark:bg-fuchsia-600/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.22),transparent)] dark:opacity-100" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <p className={`mb-4 inline-flex items-center gap-2 ${glassHero}`}>{t('hero.tagline')}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 bg-gradient-to-br from-slate-900 via-violet-800 to-indigo-700 bg-clip-text text-transparent dark:from-white dark:via-slate-100 dark:to-slate-400">
          {t('hero.title')}
        </h1>
        <p className={`mx-auto max-w-2xl text-lg md:text-xl leading-relaxed mb-10 ${muted}`}>{t('hero.subtitle')}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            to="/dv-process"
            className="inline-flex w-full sm:w-auto justify-center rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 ring-1 ring-white/20 hover:brightness-110 hover:scale-[1.02] transition-all"
          >
            {t('hero.start')}
          </Link>
          <Link
            to="/ask-ai"
            className="inline-flex w-full sm:w-auto justify-center rounded-xl border border-slate-300 bg-white/80 px-8 py-3.5 text-sm font-semibold text-slate-900 backdrop-blur-sm hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 transition-all"
          >
            {t('hero.ask')}
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          {[t('hero.badge1'), t('hero.badge2'), t('hero.badge3'), t('hero.badge4')].map((label) => (
            <div
              key={label}
              className={`${card} px-4 py-3 text-xs md:text-sm text-slate-700 dark:text-slate-300 hover:border-violet-400/30 transition-colors`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
