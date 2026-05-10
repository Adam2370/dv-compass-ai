import { useMemo } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, muted } from '../theme/ui'
import { SectionHeading } from './SectionHeading'

export function LifeInAmerica() {
  const { t } = useLanguage()
  const phases = useMemo(() => {
    const p = t('lifeAmerica.phases')
    return Array.isArray(p) ? p : []
  }, [t])
  const states = useMemo(() => {
    const s = t('lifeAmerica.states')
    return Array.isArray(s) ? s : []
  }, [t])

  return (
    <section id="life-america" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-white/5 bg-slate-100/50 dark:bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('lifeAmerica.title')} subtitle={t('lifeAmerica.subtitle')} />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {phases.map((p, i) => (
            <div key={`phase-${i}`} className={`${card} p-6 md:p-8`}>
              <h3 className={`text-lg font-semibold mb-4 ${heading}`}>{p.title}</h3>
              <ul className={`text-sm space-y-2 list-disc ps-5 ${muted}`}>
                {(Array.isArray(p.items) ? p.items : []).map((it, j) => (
                  <li key={`phase-${i}-it-${j}`}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className={`text-2xl font-semibold text-center mb-8 ${heading}`}>{t('statesTitle')}</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((s) => (
            <article
              key={s.id}
              className={`${card} bg-gradient-to-br from-teal-50/80 to-white dark:from-white/[0.05] dark:to-transparent p-6 hover:border-teal-400/40 transition-colors`}
            >
              <h4 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-3">{s.name}</h4>
              <dl className={`text-xs space-y-2 ${muted}`}>
                <div>
                  <dt className="text-slate-500 dark:text-slate-500">{t('lifeAmerica.dt.dmv')}</dt>
                  <dd>{s.dmv}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{t('lifeAmerica.dt.costOfLiving')}</dt>
                  <dd>{s.col}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{t('lifeAmerica.dt.transportation')}</dt>
                  <dd>{s.transit}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{t('lifeAmerica.dt.housing')}</dt>
                  <dd>{s.housing}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{t('lifeAmerica.dt.immigrantCommunities')}</dt>
                  <dd>{s.community}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{t('lifeAmerica.dt.jobMarket')}</dt>
                  <dd>{s.jobs}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
