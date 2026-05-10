import { useLanguage } from '../hooks/useLanguage'
import { accent, muted } from '../theme/ui'
import { SectionHeading } from './SectionHeading'

export function AboutMission() {
  const { t } = useLanguage()
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-violet-100/80 to-transparent border-t border-slate-200/80 dark:from-violet-950/20 dark:border-white/5">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <SectionHeading title={t('about.title')} subtitle={t('about.subtitle')} />
        <p className={`leading-relaxed text-lg ${muted} whitespace-pre-line`}>{t('about.body')}</p>
        <p className={`mt-6 text-sm font-medium ${accent}`}>{t('about.mission')}</p>
      </div>
    </section>
  )
}
