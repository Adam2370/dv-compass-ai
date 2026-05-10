import { US_OVERSEAS_POSTS } from '../data/usEmbassies'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, muted } from '../theme/ui'
import { SectionHeading } from './SectionHeading'

const FEATURED_IDS = ['cm-yde', 'ae-abd', 'in-del', 'gh-acc', 'ke-nbo']

export function EmbassyMedical() {
  const { t } = useLanguage()
  const featured = FEATURED_IDS.map((id) => US_OVERSEAS_POSTS.find((p) => p.id === id)).filter(Boolean)

  return (
    <section id="embassy" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-white/5 bg-slate-100/40 dark:bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('embassy.title')} subtitle={t('embassy.subtitle')} />

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <article key={p.id} className={`${card} p-6 hover:border-indigo-400/35 transition-colors`}>
              <h3 className={`text-lg font-semibold mb-3 ${heading}`}>{p.label}</h3>
              <p className={`text-sm ${muted} whitespace-pre-line mb-3`}>{p.address}</p>
              <p className={`text-sm ${muted} mb-3`}>{p.phone}</p>
              <div className="flex flex-wrap gap-3">
                <a href={p.website} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-violet-600 dark:text-violet-300 hover:underline">
                  {p.website.replace('https://', '')}
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-cyan-600 dark:text-cyan-300 hover:underline"
                >
                  {t('common.mapsPlaceholder')}
                </a>
              </div>
              <ul className={`mt-4 text-sm ${muted} space-y-1 list-disc ps-5`}>
                <li>{t('embassy.tipBinder')}</li>
                <li>{t('embassy.tipSecurity')}</li>
                <li>{t('embassy.tipArrival')}</li>
                <li>{t('embassy.tipMedical')}</li>
              </ul>
            </article>
          ))}
        </div>

        <div className={`mt-16 ${card} border-emerald-300/40 dark:border-emerald-400/20 bg-emerald-50/80 dark:bg-emerald-500/5 p-8 md:p-10`}>
          <h3 className={`text-2xl font-semibold mb-4 ${heading}`}>{t('medicalGuide')}</h3>
          <p className={`${muted} leading-relaxed mb-4`}>{t('embassy.medicalIntro')}</p>
          <ul className={`list-disc ps-5 text-sm ${muted} space-y-2 mb-6`}>
            {(t('embassy.medicalBullets') && Array.isArray(t('embassy.medicalBullets')) ? t('embassy.medicalBullets') : []).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">{t('embassy.checklistTitle')}</h4>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
            {(t('embassy.checklist') && Array.isArray(t('embassy.checklist')) ? t('embassy.checklist') : []).map((x) => (
              <li key={x} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
