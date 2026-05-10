import { useMemo } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { SectionHeading } from './SectionHeading'

export function ScamDetector() {
  const { t } = useLanguage()
  const cards = useMemo(() => {
    const c = t('scam.cards')
    return Array.isArray(c) ? c : []
  }, [t])
  const bullets = useMemo(() => {
    const b = t('scam.bullets')
    return Array.isArray(b) ? b : []
  }, [t])

  return (
    <section id="scam" className="py-20 md:py-28 bg-gradient-to-b from-red-50 to-transparent border-y border-red-200/60 dark:from-red-950/30 dark:border-red-500/10">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('scam.title')} subtitle={t('scam.subtitle')} />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {cards.map((item, i) => (
            <div
              key={`scam-card-${i}`}
              className="flex gap-3 rounded-2xl border border-red-200 bg-red-50/90 p-5 text-sm text-red-900 dark:border-red-400/20 dark:bg-red-500/5 dark:text-red-100/90 backdrop-blur-md"
            >
              <span className="text-red-400 shrink-0">⚠</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <ul className="max-w-3xl mx-auto text-sm text-slate-700 dark:text-slate-300 space-y-2 mb-10 list-disc ps-5">
          {bullets.map((line, i) => (
            <li key={`scam-li-${i}`}>{line}</li>
          ))}
        </ul>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 transition-colors"
          >
            {t('scamBtn1')}
          </button>
          <button
            type="button"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 transition-colors"
          >
            {t('scamBtn2')}
          </button>
          <button
            type="button"
            className="rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/40 hover:brightness-110 transition-all"
          >
            {t('scamBtn3')}
          </button>
        </div>
      </div>
    </section>
  )
}
