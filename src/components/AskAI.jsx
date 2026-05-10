import { useMemo, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { heading, input, muted } from '../theme/ui'
import { SectionHeading } from './SectionHeading'

export function AskAI() {
  const { t } = useLanguage()
  const chips = useMemo(() => {
    const c = t('askAi.chips')
    return Array.isArray(c) ? c : []
  }, [t])
  const [active, setActive] = useState(0)
  const safeActive = chips.length ? Math.min(active, chips.length - 1) : 0
  const activePrompt = chips[safeActive] ?? ''

  return (
    <section id="ask-ai" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-white/5 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-5xl px-4 relative">
        <SectionHeading title={t('askAi.title')} subtitle={t('askAi.subtitle')} />

        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-100/80 px-4 py-1.5 text-xs font-semibold text-amber-950 dark:border-amber-400/40 dark:bg-amber-500/10 dark:text-amber-100">
            {t('askAiBadge')}
          </span>
        </div>

        <div className={`rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-xl shadow-violet-200/40 overflow-hidden dark:border-white/10 dark:bg-slate-950/60 dark:shadow-violet-950/40`}>
          <div className="border-b border-slate-200 px-4 py-3 flex items-center justify-between bg-slate-50 dark:border-white/10 dark:bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className={`text-sm font-medium ${heading}`}>{t('askAi.panelBrand')}</span>
            </div>
            <span className={`text-[10px] uppercase tracking-widest ${muted}`}>{t('askAi.previewBadge')}</span>
          </div>

          <div className="p-4 md:p-6 space-y-4 min-h-[280px]">
            <div className="flex flex-wrap gap-2">
              {chips.map((p, i) => (
                <button
                  key={`chip-${i}`}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`rounded-xl border px-3 py-2 text-xs md:text-sm text-start transition-all ${
                    safeActive === i
                      ? 'border-violet-400/60 bg-violet-100 text-violet-900 dark:border-violet-400/50 dark:bg-violet-500/15 dark:text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:border-white/20'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className={`rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5 dark:border-white/10 dark:bg-white/[0.03]`}>
              <p className={`text-xs mb-2 ${muted}`}>{t('askAi.suggestedLabel')}</p>
              <p className="text-sm text-violet-800 dark:text-violet-100/95 mb-4">{activePrompt}</p>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 whitespace-pre-line leading-relaxed dark:border-white/5 dark:bg-slate-900/80 dark:text-slate-300">
                {t('askAi.mockReply')}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 px-4 py-3 flex gap-2 bg-slate-50 dark:border-white/10 dark:bg-black/20">
            <input disabled placeholder={t('askAi.inputPlaceholder')} className={`${input} flex-1 cursor-not-allowed opacity-60`} />
            <button type="button" disabled className="rounded-xl bg-violet-600/40 px-4 py-2 text-sm font-semibold text-slate-400 cursor-not-allowed">
              {t('askAi.send')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
