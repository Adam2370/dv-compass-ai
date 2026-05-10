import { dvSections } from '../content/dvLotterySections'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, muted } from '../theme/ui'
import { SectionHeading } from './SectionHeading'

export function DVLotterySection() {
  const { t, lang } = useLanguage()
  const sections = dvSections(lang)

  return (
    <section className="py-20 md:py-28 border-t border-slate-200/80 dark:border-white/5 bg-slate-100/40 dark:bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('dvLottery.title')} subtitle={t('dvLottery.subtitle')} />

        <div className="grid gap-6 md:gap-8">
          {sections.map((block, idx) => (
            <div key={block.title}>
              <div className={`${card} p-6 md:p-8`}>
                <h3 className={`text-xl font-semibold mb-4 ${heading}`}>{block.title}</h3>
                {idx === 2 ? (
                  <ul className={`list-disc ps-5 space-y-2 text-sm ${muted}`}>
                    {block.paragraphs.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                ) : (
                  <div className={`space-y-3 text-sm leading-relaxed ${muted}`}>
                    {block.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                )}
              </div>
              {idx === 2 ? (
                <div className="rounded-2xl border border-amber-300/50 bg-amber-50 dark:border-amber-400/30 dark:bg-amber-500/10 p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-3">{t('dvLottery.officialWarnTitle')}</h3>
                  <p className="text-amber-950/90 dark:text-amber-50/90 text-sm md:text-base leading-relaxed">{t('officialDvWarn')}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
