import { useLanguage } from '../hooks/useLanguage'
import { SectionHeading } from './SectionHeading'

const topics = [
  'DV opening dates',
  'DV closing dates',
  'Visa Bulletin updates',
  'Embassy closures',
  'Immigration policy changes',
  'Travel restrictions',
  'Vaccination requirement updates',
]

export function NewsSection() {
  const { t } = useLanguage()
  return (
    <section id="news" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('news.title')} subtitle={t('news.subtitle')} />
        <p className="text-center text-sm text-violet-200/90 mb-10">{t('newsFuture')}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md hover:border-violet-400/35 transition-colors"
            >
              <h3 className="font-semibold text-white mb-2">{topic}</h3>
              <p className="text-sm text-slate-500">Placeholder headline — verify on official sources.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
