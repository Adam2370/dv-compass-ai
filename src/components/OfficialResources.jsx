import { useMemo } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, muted } from '../theme/ui'
import { SectionHeading } from './SectionHeading'

export function OfficialResources() {
  const { t } = useLanguage()
  const resources = useMemo(() => {
    const c = t('officialResources.cards')
    return Array.isArray(c) ? c : []
  }, [t])

  return (
    <section id="resources" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('resources.title')} subtitle={t('resources.subtitle')} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <a
              key={`res-${i}`}
              href="#"
              onClick={(e) => e.preventDefault()}
              className={`group ${card} p-6 hover:border-cyan-400/40 transition-all`}
            >
              <h3 className={`font-semibold mb-2 group-hover:text-cyan-700 dark:group-hover:text-cyan-100 transition-colors ${heading}`}>{r.title}</h3>
              <p className={`text-sm mb-4 ${muted}`}>{r.desc}</p>
              <span className="text-xs font-medium text-cyan-700 dark:text-cyan-300/90">{t('common.officialPlaceholder')} ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
