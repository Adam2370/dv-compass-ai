import { useLanguage } from '../hooks/useLanguage'
import { SectionHeading } from './SectionHeading'

const experiences = [
  {
    embassy: 'Abu Dhabi',
    status: 'Approved',
    range: '2027AF12XXX',
    questions: ['What did you study?', 'What work do you do?', 'Where will you live in the U.S.?', 'Who is your contact in America?'],
    docs: ['Passport', 'Police certificate', 'Degree', 'Birth certificate'],
    duration: '5–10 min',
    tip: 'Stay calm, organized, and answer clearly.',
  },
  {
    embassy: 'Yaoundé',
    status: 'Approved',
    range: '2026EU5XXX',
    questions: ['Highest education?', 'Any previous marriages?', 'Have you traveled before?', 'Where are you planning to live?'],
    docs: ['Birth certificate', 'Diploma', 'Police certificate'],
    duration: '~15 min',
    tip: null,
  },
  {
    embassy: 'New Delhi',
    status: 'Administrative Processing',
    range: '2027AS18XXX',
    questions: ['Study history', 'Residence history', 'U.S. address', 'Previous visas'],
    docs: ['PCC', 'Educational records', 'Passport'],
    duration: '~20 min',
    tip: null,
  },
]

export function InterviewExperiences() {
  const { t } = useLanguage()
  return (
    <section id="interviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('interview.title')} subtitle={t('interview.subtitle')} />
        <p className="text-center text-sm text-slate-500 mb-10 max-w-2xl mx-auto">
          Case numbers are masked for privacy (examples: 2027AF12XXX, 2026EU5XXX, 2027AS18XXX). Never post full case numbers
          publicly.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((ex) => (
            <article
              key={ex.embassy}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 backdrop-blur-md flex flex-col hover:border-fuchsia-400/35 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <h3 className="text-lg font-semibold text-white">{ex.embassy} experience</h3>
                <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-violet-500/20 text-violet-200 border border-violet-400/30">
                  {ex.status}
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-2">
                Case range: <span className="text-slate-300 font-mono">{ex.range}</span>
              </p>
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-2">Questions asked</h4>
                <ul className="text-sm text-slate-400 space-y-1 list-disc ps-4">
                  {ex.questions.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-2">Documents requested</h4>
                <ul className="text-sm text-slate-400 space-y-1 list-disc ps-4">
                  {ex.docs.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-slate-500 mb-2">Interview duration: {ex.duration}</p>
              {ex.tip ? <p className="text-sm text-violet-200/90 mt-auto italic">&ldquo;{ex.tip}&rdquo;</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
