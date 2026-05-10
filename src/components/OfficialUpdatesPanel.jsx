import { useMemo } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, muted } from '../theme/ui'

export function OfficialUpdatesPanel() {
  const { t } = useLanguage()
  const items = useMemo(() => {
    const raw = t('homeUpdates.items')
    return Array.isArray(raw) ? raw : []
  }, [t])

  return (
    <aside
      className={`${card} border-violet-200/60 bg-white/75 p-5 shadow-xl shadow-violet-500/10 backdrop-blur-xl dark:border-violet-400/20 dark:bg-slate-950/55 dark:shadow-violet-950/30 lg:sticky lg:top-24`}
      aria-label={t('homeUpdates.title')}
    >
      <h2 className={`mb-4 text-lg font-semibold leading-tight sm:text-xl ${heading}`}>{t('homeUpdates.title')}</h2>
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="rounded-full border border-emerald-300/70 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-900 dark:border-emerald-400/40 dark:bg-emerald-500/15 dark:text-emerald-100">
          {t('homeUpdates.badgeOfficialOnly')}
        </span>
        <span className="rounded-full border border-amber-300/70 bg-amber-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-950 dark:border-amber-400/40 dark:bg-amber-500/15 dark:text-amber-100">
          {t('homeUpdates.badgeLiveSoon')}
        </span>
      </div>
      <p className={`mb-4 text-xs leading-relaxed ${muted}`}>{t('homeUpdates.staticNote')}</p>
      <ul className="max-h-[min(70vh,520px)] space-y-3 overflow-y-auto overscroll-contain pe-1">
        {items.map((item, i) => (
          <li
            key={`${item.title}-${i}`}
            className="rounded-xl border border-slate-200/90 bg-white/90 p-4 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-300">{item.category}</p>
            <h3 className={`mt-1 text-sm font-semibold ${heading}`}>{item.title}</h3>
            <p className={`mt-2 text-xs leading-relaxed ${muted}`}>{item.summary}</p>
            <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-500">
              <span className="font-medium text-slate-600 dark:text-slate-400">{t('homeUpdates.dateLabel')}:</span> {t('homeUpdates.datePlaceholder')}
            </p>
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-500">
              <span className="font-medium text-slate-600 dark:text-slate-400">{t('homeUpdates.audienceLabel')}:</span> {item.audience}
            </p>
            <p className={`mt-1 text-[11px] ${muted}`}>
              <span className="font-medium text-slate-600 dark:text-slate-400">{item.source}</span>
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-xs font-semibold text-violet-600 hover:underline dark:text-violet-300"
            >
              {t('homeUpdates.readOfficial')} ↗
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
