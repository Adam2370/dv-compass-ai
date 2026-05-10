import { useState } from 'react'
import { ds260Accordion, ds260FooterBulletsByLang, ds260IntroByLang, ds260MistakesByLang } from '../content/ds260AccordionByLang'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, muted } from '../theme/ui'
import { SectionHeading } from './SectionHeading'

export function DS260Guide() {
  const { t, lang } = useLanguage()
  const [open, setOpen] = useState('s0')
  const sections = ds260Accordion(lang)
  const intro = ds260IntroByLang[lang] || ds260IntroByLang.en
  const bullets = ds260FooterBulletsByLang[lang] || ds260FooterBulletsByLang.en
  const mistakes = ds260MistakesByLang[lang] || ds260MistakesByLang.en

  return (
    <section id="ds-260" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('ds260.title')} subtitle={t('ds260.subtitle')} />

        <div className={`${card} p-6 md:p-10 mb-10`}>
          <p className={`${muted} leading-relaxed`}>{intro}</p>
          <ul className={`mt-6 space-y-2 text-sm ${muted}`}>
            {bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          {sections.map((s, i) => {
            const id = `s${i}`
            const isOpen = open === id
            return (
              <div key={id} className={`${card} overflow-hidden`}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? '' : id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors"
                >
                  <span className={`font-semibold text-sm md:text-base ${heading}`}>{s.title}</span>
                  <span className={`shrink-0 text-violet-600 dark:text-violet-300 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden>
                    ▼
                  </span>
                </button>
                {isOpen ? (
                  <div className="border-t border-slate-200 dark:border-white/10 px-5 py-4 text-sm space-y-3">
                    <p className={`whitespace-pre-line ${muted}`}>{s.body}</p>
                    {s.warn ? <p className="text-amber-800 dark:text-amber-200/90 font-medium whitespace-pre-line">{s.warn}</p> : null}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>

        <h3 className={`text-2xl font-semibold mt-14 mb-6 ${heading}`}>{t('ds260.mistakes')}</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {mistakes.map((m) => (
            <div
              key={m.title}
              className={`${card} border-violet-200/60 dark:border-violet-400/25 bg-gradient-to-br from-violet-50/80 to-white dark:from-white/[0.04] dark:to-transparent p-5 hover:border-violet-400/40 transition-colors`}
            >
              <h4 className="font-semibold text-violet-800 dark:text-violet-200 mb-2">{m.title}</h4>
              <p className={`text-sm ${muted} leading-relaxed`}>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
