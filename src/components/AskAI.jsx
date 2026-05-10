import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { SectionHeading } from './SectionHeading'

const prompts = [
  'I was selected. What should I do first?',
  'Which police certificates do I need?',
  'I studied in another country. Which documents do I need?',
  'How should I prepare for my embassy interview?',
  'What should I do during my first 30 days in America?',
]

const mockReply = `DV Compass AI will answer using official-source immigration guidance, country-specific civil document rules, embassy instructions, and verified community experience.

Future versions will include:
• AI-powered document roadmap
• Embassy-specific guidance
• Multilingual AI support
• Interview preparation assistant
• Immigration news monitoring
• Life-in-America planning assistant`

export function AskAI() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)

  return (
    <section id="ask-ai" className="py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_55%)]" />
      <div className="mx-auto max-w-5xl px-4 relative">
        <SectionHeading title={t('askAi.title')} subtitle={t('askAi.subtitle')} />

        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-100">
            {t('askAiBadge')}
          </span>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl shadow-2xl shadow-violet-950/40 overflow-hidden">
          <div className="border-b border-white/10 px-4 py-3 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-slate-200">DV Compass AI</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-slate-500">Preview</span>
          </div>

          <div className="p-4 md:p-6 space-y-4 min-h-[280px]">
            <div className="flex flex-wrap gap-2">
              {prompts.map((p, i) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`rounded-xl border px-3 py-2 text-xs md:text-sm text-start transition-all ${
                    active === i
                      ? 'border-violet-400/50 bg-violet-500/15 text-white'
                      : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
              <p className="text-xs text-slate-500 mb-2">Suggested prompt</p>
              <p className="text-sm text-violet-100/95 mb-4">{prompts[active]}</p>
              <div className="rounded-xl bg-slate-900/80 border border-white/5 p-4 text-sm text-slate-300 whitespace-pre-line leading-relaxed">
                {mockReply}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 px-4 py-3 flex gap-2 bg-black/20">
            <input
              disabled
              placeholder="Type a message (coming soon)"
              className="flex-1 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-slate-500 cursor-not-allowed"
            />
            <button
              type="button"
              disabled
              className="rounded-xl bg-violet-600/40 px-4 py-2 text-sm font-semibold text-slate-400 cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
