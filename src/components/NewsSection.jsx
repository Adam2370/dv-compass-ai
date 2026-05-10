import { useMemo } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, muted } from '../theme/ui'
import { SectionHeading } from './SectionHeading'

export function NewsSection() {
  const { t } = useLanguage()
  const topics = useMemo(() => {
    const x = t('news.topics')
    return Array.isArray(x) ? x : []
  }, [t])

  return (
    <section id="news" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('news.title')} subtitle={t('news.subtitle')} />
        <p className="text-center text-sm text-violet-700 dark:text-violet-200/90 mb-10">{t('newsFuture')}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, i) => (
            <article key={`topic-${i}`} className={`${card} p-6 hover:border-violet-400/35 transition-colors`}>
              <h3 className={`font-semibold mb-2 ${heading}`}>{topic}</h3>
              <p className={`text-sm ${muted}`}>{t('news.cardPlaceholder')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
