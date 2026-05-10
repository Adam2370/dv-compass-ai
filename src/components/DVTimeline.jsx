import { useLanguage } from '../hooks/useLanguage'
import { timelineDetailSteps } from '../data/timelineSteps'
import { SectionHeading } from './SectionHeading'

export function DVTimeline() {
  const { t } = useLanguage()
  const titles = t('timeline.timelineTitles')
  const titleList = Array.isArray(titles) ? titles : timelineDetailSteps.map((_, i) => `Step ${i + 1}`)

  return (
    <section id="dv-process" className="py-20 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 end-0 w-1/3 bg-gradient-to-l from-violet-600/10 to-transparent" />
      <div className="mx-auto max-w-3xl px-4 relative">
        <SectionHeading title={t('timeline.title')} subtitle={t('timeline.subtitle')} />

        <div className="relative ms-2 sm:ms-4">
          <div
            className="absolute top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-violet-400/40 to-transparent start-3 sm:start-4"
            aria-hidden
          />

          <ul className="space-y-6 sm:space-y-8">
            {timelineDetailSteps.map((step, i) => {
              const stepTitle = titleList[i] ?? `Step ${i + 1}`
              return (
                <li key={i} className="relative ps-10 sm:ps-14">
                  <span className="absolute start-1.5 sm:start-2 top-3 flex h-5 w-5 items-center justify-center rounded-full border border-violet-400/50 bg-slate-950 ring-4 ring-violet-500/15">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-violet-300 to-indigo-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />
                  </span>
                  <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-md hover:border-violet-400/35 hover:bg-white/[0.06] transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-violet-300/90">
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-white">{stepTitle}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.expl}</p>
                    <div className="mt-4 space-y-2 text-xs sm:text-sm">
                      <p>
                        <span className="font-semibold text-amber-200/90">{t('timeline.warn')}: </span>
                        <span className="text-slate-400">{step.warn}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-emerald-200/90">{t('timeline.remind')}: </span>
                        <span className="text-slate-400">{step.remind}</span>
                      </p>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
