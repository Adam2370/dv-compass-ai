import { useMemo, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, input, muted, select } from '../theme/ui'
import { SectionHeading } from './SectionHeading'

const LS_KEY = 'dv-compass-interview-experiences-v1'

const DEFAULT_RAW = [
  { id: 'seed-abu', seedKey: 'abu', status: 'Approved', range: '2027AF12XXX', interviewDate: '', remarks: '' },
  { id: 'seed-yde', seedKey: 'yde', status: 'Approved', range: '2026EU5XXX', interviewDate: '', remarks: '' },
  { id: 'seed-del', seedKey: 'del', status: 'Administrative Processing', range: '2027AS18XXX', interviewDate: '', remarks: '' },
]

const SEED_ID_TO_KEY = { 'seed-abu': 'abu', 'seed-yde': 'yde', 'seed-del': 'del' }

function inferSeedKey(ex) {
  if (ex?.seedKey) return ex.seedKey
  return SEED_ID_TO_KEY[ex?.id] ?? null
}

function loadRaw() {
  if (typeof window === 'undefined') return [...DEFAULT_RAW]
  try {
    const raw = window.localStorage.getItem(LS_KEY)
    if (!raw) return [...DEFAULT_RAW]
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return [...DEFAULT_RAW]
    return parsed
  } catch {
    return [...DEFAULT_RAW]
  }
}

function saveRaw(list) {
  window.localStorage.setItem(LS_KEY, JSON.stringify(list))
}

function interviewStatusLabel(status, t) {
  if (status === 'Approved') return t('interview.statusApproved')
  if (status === 'Refused') return t('interview.statusRefused')
  if (status === 'Administrative Processing') return t('interview.statusAP')
  return status
}

function hydrateEntry(ex, t) {
  const seedKey = inferSeedKey(ex)
  if (seedKey) {
    const questions = t(`interview.seeds.${seedKey}.questions`)
    const docs = t(`interview.seeds.${seedKey}.docs`)
    const tip = t(`interview.seeds.${seedKey}.tip`)
    return {
      ...ex,
      seedKey,
      displayEmbassy: t(`interview.seeds.${seedKey}.embassy`),
      displayQuestions: Array.isArray(questions) ? questions : [],
      displayDocs: Array.isArray(docs) ? docs : [],
      displayDuration: t(`interview.seeds.${seedKey}.duration`),
      displayTip: typeof tip === 'string' ? tip : '',
      displayStatus: interviewStatusLabel(ex.status, t),
    }
  }
  return {
    ...ex,
    displayEmbassy: ex.embassyLabel ?? '',
    displayQuestions: Array.isArray(ex.questions) ? ex.questions : [],
    displayDocs: Array.isArray(ex.docs) ? ex.docs : [],
    displayDuration: ex.duration ?? '',
    displayTip: ex.tip ?? '',
    displayStatus: interviewStatusLabel(ex.status, t),
  }
}

export function InterviewExperiences() {
  const { t } = useLanguage()
  const [list, setList] = useState(loadRaw)
  const [open, setOpen] = useState(false)
  const [saveMsg, setSaveMsg] = useState(false)
  const [form, setForm] = useState({
    embassyLabel: '',
    interviewDate: '',
    status: 'Approved',
    range: '',
    questions: '',
    documents: '',
    duration: '',
    remarks: '',
  })

  const hydrated = useMemo(() => list.map((ex) => hydrateEntry(ex, t)), [list, t])

  const submit = () => {
    const entry = {
      id: `u-${Date.now()}`,
      embassyLabel: form.embassyLabel.trim(),
      interviewDate: form.interviewDate,
      status: form.status,
      range: form.range.trim(),
      questions: form.questions
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
      docs: form.documents
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
      duration: form.duration.trim(),
      tip: form.remarks.trim(),
      remarks: form.remarks,
    }
    if (!entry.embassyLabel) return
    setList((prev) => {
      const next = [entry, ...prev]
      saveRaw(next)
      return next
    })
    setOpen(false)
    setSaveMsg(true)
    window.setTimeout(() => setSaveMsg(false), 4000)
    setForm({
      embassyLabel: '',
      interviewDate: '',
      status: 'Approved',
      range: '',
      questions: '',
      documents: '',
      duration: '',
      remarks: '',
    })
  }

  return (
    <section id="interviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('interview.title')} subtitle={t('interview.subtitle')} />
        <p className={`text-center text-sm ${muted} mb-6 max-w-2xl mx-auto`}>{t('interview.privacyHint')}</p>
        {saveMsg ? (
          <p className="text-center text-sm text-emerald-700 dark:text-emerald-300 mb-4" role="status">
            {t('interview.saveSuccess')}
          </p>
        ) : null}
        <div className="flex justify-center mb-10">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:brightness-110"
          >
            {t('interview.write')}
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {hydrated.map((ex) => (
            <article
              key={ex.id}
              className={`${card} bg-gradient-to-b from-white to-slate-50 dark:from-white/[0.06] dark:to-transparent p-6 flex flex-col hover:border-fuchsia-400/35 transition-colors`}
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <h3 className={`text-lg font-semibold ${heading}`}>{ex.displayEmbassy}</h3>
                <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-violet-100 text-violet-800 border border-violet-200 dark:bg-violet-500/20 dark:text-violet-200 dark:border-violet-400/30">
                  {ex.displayStatus}
                </span>
              </div>
              {ex.range ? (
                <p className={`text-xs ${muted} mb-2`}>
                  {t('interview.cardCaseRange')}: <span className="text-slate-800 dark:text-slate-300 font-mono">{ex.range}</span>
                </p>
              ) : null}
              {ex.interviewDate ? (
                <p className={`text-xs ${muted} mb-2`}>
                  {t('interview.cardDate')}: {ex.interviewDate}
                </p>
              ) : null}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                  {t('interview.cardQuestionsTitle')}
                </h4>
                <ul className={`text-sm ${muted} space-y-1 list-disc ps-4`}>
                  {ex.displayQuestions.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                  {t('interview.cardDocumentsTitle')}
                </h4>
                <ul className={`text-sm ${muted} space-y-1 list-disc ps-4`}>
                  {ex.displayDocs.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              {ex.displayDuration ? (
                <p className={`text-xs ${muted} mb-2`}>
                  {t('interview.durationLabel')}: {ex.displayDuration}
                </p>
              ) : null}
              {ex.displayTip ? <p className="text-sm text-violet-700 dark:text-violet-200/90 mt-auto italic">&ldquo;{ex.displayTip}&rdquo;</p> : null}
            </article>
          ))}
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className={`${card} w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 shadow-2xl`}>
            <h3 className={`text-lg font-semibold mb-1 ${heading}`}>{t('interview.formTitle')}</h3>
            <p className={`text-xs ${muted} mb-4`}>{t('interview.savedLocal')}</p>
            <div className="space-y-3">
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400">
                {t('interview.embassyPost')}
                <input className={`${input} mt-1`} value={form.embassyLabel} onChange={(e) => setForm((f) => ({ ...f, embassyLabel: e.target.value }))} />
              </label>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400">
                {t('interview.interviewDate')}
                <input type="date" className={`${input} mt-1`} value={form.interviewDate} onChange={(e) => setForm((f) => ({ ...f, interviewDate: e.target.value }))} />
              </label>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400">
                {t('interview.status')}
                <select className={`${select} mt-1`} value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}>
                  <option value="Approved">{t('interview.statusApproved')}</option>
                  <option value="Administrative Processing">{t('interview.statusAP')}</option>
                  <option value="Refused">{t('interview.statusRefused')}</option>
                </select>
              </label>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400">
                {t('interview.caseRange')}
                <input
                  className={`${input} mt-1`}
                  value={form.range}
                  onChange={(e) => setForm((f) => ({ ...f, range: e.target.value }))}
                  placeholder={t('interview.casePlaceholder')}
                />
              </label>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400">
                {t('interview.questions')}
                <textarea className={`${input} mt-1 min-h-[80px]`} value={form.questions} onChange={(e) => setForm((f) => ({ ...f, questions: e.target.value }))} />
              </label>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400">
                {t('interview.documents')}
                <textarea className={`${input} mt-1 min-h-[80px]`} value={form.documents} onChange={(e) => setForm((f) => ({ ...f, documents: e.target.value }))} />
              </label>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400">
                {t('interview.duration')}
                <input className={`${input} mt-1`} value={form.duration} onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))} />
              </label>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-400">
                {t('interview.remarks')}
                <textarea className={`${input} mt-1 min-h-[64px]`} value={form.remarks} onChange={(e) => setForm((f) => ({ ...f, remarks: e.target.value }))} />
              </label>
            </div>
            <div className="mt-4 flex gap-2">
              <button type="button" className="flex-1 rounded-xl border border-slate-300 px-4 py-2 text-sm dark:border-white/15" onClick={() => setOpen(false)}>
                {t('interview.cancel')}
              </button>
              <button type="button" className="flex-1 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white" onClick={submit}>
                {t('interview.save')}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
