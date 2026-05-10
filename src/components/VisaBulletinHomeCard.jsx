import { VISA_BULLETIN } from '../data/visaBulletin'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, muted } from '../theme/ui'

export function VisaBulletinHomeCard() {
  const { t } = useLanguage()
  const regions = VISA_BULLETIN.regions

  return (
    <section className="py-12 border-t border-slate-200/80 dark:border-white/5 bg-gradient-to-b from-amber-50/50 to-transparent dark:from-amber-950/20 dark:to-transparent">
      <div className="mx-auto max-w-6xl px-4">
        <article className={`${card} border-amber-200/60 dark:border-amber-400/25 p-6 md:p-8`}>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className={`text-xl font-semibold md:text-2xl ${heading}`}>{t('visaBulletin.cardTitle')}</h2>
              <p className={`mt-2 text-sm ${muted} max-w-2xl`}>{t('visaBulletin.cardSubtitle')}</p>
            </div>
            <a
              href={VISA_BULLETIN.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-xl bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-amber-500 transition-colors"
            >
              {t('visaBulletin.openOfficial')}
            </a>
          </div>
          <p className={`mt-4 text-sm leading-relaxed ${muted}`}>{t('visaBulletin.explanation')}</p>
          <p className="mt-3 text-xs font-medium text-amber-800 dark:text-amber-200/90">{t('visaBulletin.liveParsingLater')}</p>
          <div className="mt-5">
            <p className={`text-xs font-medium uppercase tracking-wide ${muted}`}>{t('visaBulletin.regionsIntro')}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {regions.map((r) => (
                <li
                  key={r}
                  className="rounded-lg bg-slate-100/90 px-2.5 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-slate-200"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
