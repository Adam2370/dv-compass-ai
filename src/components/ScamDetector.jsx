import { useLanguage } from '../hooks/useLanguage'
import { SectionHeading } from './SectionHeading'

export function ScamDetector() {
  const { t } = useLanguage()
  return (
    <section id="scam" className="py-20 md:py-28 bg-gradient-to-b from-red-950/30 to-transparent border-y border-red-500/10">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('scam.title')} subtitle={t('scam.subtitle')} />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            'Fake DV websites that charge fees or harvest data',
            'Fake immigration agents promising guaranteed selection',
            'Fake payment requests unrelated to official government receipts',
            'Fake embassy emails or SMS phishing links',
            'Social media scammers impersonating lawyers or “visa officers”',
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl border border-red-400/20 bg-red-500/5 p-5 text-sm text-red-100/90 backdrop-blur-md"
            >
              <span className="text-red-400 shrink-0">⚠</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <ul className="max-w-3xl mx-auto text-sm text-slate-300 space-y-2 mb-10 list-disc ps-5">
          <li>Never pay random agents for guaranteed selection—the DV entry itself is free through official channels.</li>
          <li>Always verify embassy and interview instructions using official U.S. government websites.</li>
          <li>Protect your passport numbers, confirmation codes, and personal data from unsolicited contacts.</li>
        </ul>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            {t('scamBtn1')}
          </button>
          <button
            type="button"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            {t('scamBtn2')}
          </button>
          <button
            type="button"
            className="rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/40 hover:brightness-110 transition-all"
          >
            {t('scamBtn3')}
          </button>
        </div>
      </div>
    </section>
  )
}
