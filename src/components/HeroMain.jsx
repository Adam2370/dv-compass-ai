import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { card, glassHero, muted } from '../theme/ui'

/** Hero marketing block — centered on small screens, start-aligned on large (homepage column). */
export function HeroMain() {
  const { t } = useLanguage()
  return (
    <div className="text-center lg:text-start">
      <p className={`mb-4 inline-flex items-center gap-2 ${glassHero}`}>{t('hero.tagline')}</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 bg-gradient-to-br from-slate-900 via-violet-800 to-indigo-700 bg-clip-text text-transparent dark:from-white dark:via-slate-100 dark:to-slate-400">
        {t('hero.title')}
      </h1>
      <p className={`mx-auto lg:mx-0 max-w-2xl text-lg md:text-xl leading-relaxed mb-10 ${muted}`}>{t('hero.subtitle')}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14">
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto lg:mx-0">
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
  )
}
