import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, muted } from '../theme/ui'
import { SectionHeading } from './SectionHeading'

const icons = [
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3v18M8 7h8M8 12h5M8 17h3" strokeLinecap="round" />
    </svg>
  ),
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" strokeLinejoin="round" />
    </svg>
  ),
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 4h10v16H7zM9 8h6M9 12h4" strokeLinecap="round" />
    </svg>
  ),
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" strokeLinecap="round" />
    </svg>
  ),
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 12h16M12 4v16" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" strokeLinejoin="round" />
    </svg>
  ),
]

export function JourneyStages() {
  const { t } = useLanguage()
  const cards = [
    { title: t('journey.c1t'), desc: t('journey.c1d'), to: '/dv-process' },
    { title: t('journey.c2t'), desc: t('journey.c2d'), to: '/ds-260' },
    { title: t('journey.c3t'), desc: t('journey.c3d'), to: '/roadmap' },
    { title: t('journey.c4t'), desc: t('journey.c4d'), to: '/embassy-medical' },
    { title: t('journey.c5t'), desc: t('journey.c5d'), to: '/life-america' },
    { title: t('journey.c6t'), desc: t('journey.c6d'), to: '/life-america' },
  ]

  return (
    <section id="journey" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('journey.title')} subtitle={t('journey.subtitle')} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = icons[i]
            return (
              <div
                key={c.title}
                className={`${card} group relative overflow-hidden p-6 hover:border-violet-400/35 transition-all duration-300 hover:-translate-y-0.5`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-indigo-500/15 text-violet-700 dark:text-violet-200 ring-1 ring-violet-200/50 dark:ring-white/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${heading}`}>{c.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${muted}`}>{c.desc}</p>
                <Link
                  to={c.to}
                  className="inline-flex text-sm font-semibold text-violet-600 dark:text-violet-300 hover:text-violet-500 dark:hover:text-violet-200 transition-colors"
                >
                  {t('common.viewSteps')}
                  <span className="ms-1 group-hover:translate-x-0.5 transition-transform rtl:rotate-180">→</span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
