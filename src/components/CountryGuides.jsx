import { useLanguage } from '../hooks/useLanguage'
import { countryList } from '../data/countries'
import { SectionHeading } from './SectionHeading'

function CountryCard({ name }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md hover:border-violet-400/30 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
        {name}
      </h3>
      <div className="space-y-6 text-sm text-slate-400">
        {[
          {
            h: 'Passport information',
            lines: ['Where to apply (placeholder)', 'Processing notes: plan ahead for peak seasons', 'Official link placeholder'],
          },
          {
            h: 'Police certificate',
            lines: ['Who needs it depends on age and residence history', 'Obtain through official national channels', 'Common delays: name variations, backlog seasons'],
          },
          {
            h: 'Birth certificate',
            lines: ['Acceptable formats per reciprocity schedule', 'Replacement process varies—start early'],
          },
          {
            h: 'Marriage / divorce documents',
            lines: ['Required formats for registration systems', 'Certified translations if not in English'],
          },
          {
            h: 'Education documents',
            lines: ['Diplomas and transcripts', 'Equivalency notes where applicable'],
          },
          {
            h: 'Translation rules',
            lines: ['Certified translations when required', 'English-language packaging for interview binders'],
          },
          {
            h: 'Embassy notes',
            lines: ['Common interview languages vary by post', 'Arrive per appointment instructions; verify security rules'],
          },
        ].map((block) => (
          <div key={block.h}>
            <h4 className="text-slate-200 font-medium mb-2">{block.h}</h4>
            <ul className="list-disc ps-5 space-y-1">
              {block.lines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  )
}

export function CountryGuides() {
  const { t } = useLanguage()
  return (
    <section id="countries" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('countryGuides.title')} subtitle={t('countryGuides.subtitle')} />
        <p className="text-center text-sm text-violet-200/90 mb-10 max-w-2xl mx-auto">{t('countrySoon')}</p>
        <div className="grid gap-6 md:grid-cols-2">
          {countryList.map((c) => (
            <CountryCard key={c} name={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
