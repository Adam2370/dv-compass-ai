import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { SectionHeading } from './SectionHeading'

const sections = [
  {
    id: 's1',
    title: 'Section 1 — Personal Information',
    body: (
      <>
        <p>
          Provide your full legal names exactly as shown on your passport. Include any aliases, previous names, marital status,
          date and place of birth, and nationality as requested.
        </p>
        <p className="text-amber-200/90 font-medium">Warnings: match the passport exactly; avoid spelling inconsistencies across the form and civil documents.</p>
      </>
    ),
  },
  {
    id: 's2',
    title: 'Section 2 — Address History',
    body: (
      <>
        <p>List your current address and previous addresses with accurate dates. Include countries where you have lived.</p>
        <p className="text-sky-200/90 font-medium">
          Important note: residence history can affect which police certificates you need and how you document presence in
          each country.
        </p>
      </>
    ),
  },
  {
    id: 's3',
    title: 'Section 3 — Travel & Immigration History',
    body: (
      <p>
        Disclose prior U.S. travel, visas, refusals, overstays, removals, or other immigration events truthfully. Embassy
        officers compare answers with systems and your passport stamps.
      </p>
    ),
  },
  {
    id: 's4',
    title: 'Section 4 — Family Information',
    body: (
      <>
        <p>Declare your spouse and all qualifying children, parents where required, and derivatives according to official definitions.</p>
        <p className="text-amber-200/90 font-medium">
          Warning: failing to declare an eligible spouse or child can result in disqualification or denial.
        </p>
      </>
    ),
  },
  {
    id: 's5',
    title: 'Section 5 — Education & Work',
    body: (
      <p>
        Summarize schools attended, degrees earned, employment history, and military service. Keep dates consistent with CVs,
        reference letters, and supporting evidence you may present later.
      </p>
    ),
  },
  {
    id: 's6',
    title: 'Section 6 — Security Questions',
    body: (
      <p>
        Answer criminal, immigration fraud, terrorism, public health, and related security questions carefully. If an item
        could apply to you, seek qualified legal advice before submitting—this platform does not provide legal advice.
      </p>
    ),
  },
  {
    id: 's7',
    title: 'Section 7 — U.S. Address',
    body: (
      <p>
        Provide the address where your green card may be mailed after admission. This may be a friend, family member, or
        sponsor address if permitted by official guidance and your circumstances.
      </p>
    ),
  },
]

const mistakeCards = [
  {
    title: 'Name mismatches',
    text: 'Passport, DS-260, and civil documents show different spellings or name order.',
  },
  {
    title: 'Hidden addresses',
    text: 'Skipping short-term residences that still appear in police or tax records.',
  },
  {
    title: 'Incomplete family',
    text: 'Omitting a spouse or child who must be declared under program rules.',
  },
  {
    title: 'Rushing submission',
    text: 'Submitting without printing or saving the confirmation and supporting screenshots.',
  },
]

export function DS260Guide() {
  const { t } = useLanguage()
  const [open, setOpen] = useState('s1')

  return (
    <section id="ds-260" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('ds260.title')} subtitle={t('ds260.subtitle')} />

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10 backdrop-blur-md mb-10">
          <p className="text-slate-300 leading-relaxed">
            The DS-260 is the online immigrant visa application completed after DV selection (and for other immigrant visa
            categories). It collects biographic, security, and contact data used by consular officers to adjudicate your case.
            The expandable sections below summarize major blocks—always rely on the live form and official instructions.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-400">
            <li>• Review every screen before signing and submitting.</li>
            <li>• Print or save the confirmation page and keep screenshots.</li>
            <li>• Some answers may be clarified at interview, but material misrepresentation carries serious risk.</li>
          </ul>
        </div>

        <div className="space-y-3">
          {sections.map((s) => {
            const isOpen = open === s.id
            return (
              <div key={s.id} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? '' : s.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start hover:bg-white/[0.04] transition-colors"
                >
                  <span className="font-semibold text-white text-sm md:text-base">{s.title}</span>
                  <span
                    className={`shrink-0 text-violet-300 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  >
                    ▼
                  </span>
                </button>
                {isOpen ? <div className="border-t border-white/10 px-5 py-4 text-sm text-slate-400 space-y-3">{s.body}</div> : null}
              </div>
            )
          })}
        </div>

        <h3 className="text-2xl font-semibold text-white mt-14 mb-6">{t('ds260.mistakes')}</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {mistakeCards.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 hover:border-violet-400/35 transition-colors"
            >
              <h4 className="font-semibold text-violet-200 mb-2">{m.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
