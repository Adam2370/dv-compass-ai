import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { muted } from '../theme/ui'
import { SectionHeading } from './SectionHeading'

export function CommunitySection() {
  const { t } = useLanguage()
  const groups = useMemo(() => {
    const g = t('community.groups')
    return Array.isArray(g) ? g : []
  }, [t])
  const future = useMemo(() => {
    const f = t('community.future')
    return Array.isArray(f) ? f : []
  }, [t])

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('community.title')} subtitle={t('community.subtitle')} />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-violet-700 dark:text-violet-300 mb-4">{t('community.groupsTitle')}</h3>
            <div className="flex flex-wrap gap-2">
              {groups.map((g, i) => (
                <span
                  key={`g-${i}`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-violet-700 dark:text-violet-300 mb-4">{t('community.futureTitle')}</h3>
            <ul className={`text-sm space-y-2 ${muted}`}>
              {future.map((f, i) => (
                <li key={`f-${i}`} className="flex gap-2">
                  <span className="text-violet-400 rtl:rotate-180">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/community"
            className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-900/30 hover:brightness-110 transition-all"
          >
            {t('communityCta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
