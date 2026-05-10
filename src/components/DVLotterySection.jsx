import { useLanguage } from '../hooks/useLanguage'
import { SectionHeading } from './SectionHeading'

function Sub({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="prose prose-invert prose-sm max-w-none text-slate-400 space-y-3 leading-relaxed">{children}</div>
    </div>
  )
}

export function DVLotterySection() {
  const { t } = useLanguage()
  return (
    <section className="py-20 md:py-28 border-t border-white/5 bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('dvLottery.title')} subtitle={t('dvLottery.subtitle')} />

        <div className="grid gap-6 md:gap-8">
          <Sub title="What is the Diversity Visa Lottery?">
            <p>
              The Diversity Visa (DV) Lottery is a U.S. government program that makes a limited number of immigrant visas
              available each year to nationals of countries with historically low rates of immigration to the United States.
            </p>
            <p>
              Selection is randomized among qualified entries submitted during the official registration period. Millions of
              people apply globally each year, and only a subset are selected to continue processing.
            </p>
          </Sub>

          <Sub title="Who Can Apply?">
            <ul className="list-disc ps-5 space-y-2">
              <li>
                <strong className="text-slate-200">Eligible countries:</strong> eligibility is generally based on country of
                birth, with exceptions for cross-chargeability in limited family situations per official rules.
              </li>
              <li>
                <strong className="text-slate-200">Education:</strong> at least a high school education or its equivalent, as
                defined in official instructions.
              </li>
              <li>
                <strong className="text-slate-200">Work experience:</strong> alternatively, two years of qualifying work
                experience in an eligible occupation within the past five years, per official definitions.
              </li>
              <li>
                <strong className="text-slate-200">Passport rules:</strong> primary entrants must meet valid passport
                requirements described each year in the official DV instructions.
              </li>
            </ul>
          </Sub>

          <Sub title="Common Mistakes">
            <ul className="list-disc ps-5 space-y-2">
              <li>Submitting a non-compliant or outdated photo.</li>
              <li>Submitting more than one entry for the same person in the same program year.</li>
              <li>Using unofficial or fraudulent websites that mimic the U.S. government.</li>
              <li>Spelling errors that do not match passport or civil documents.</li>
              <li>Losing the confirmation number needed to check results.</li>
              <li>Paying unauthorized &quot;agents&quot; who promise guaranteed selection or expedited processing.</li>
            </ul>
          </Sub>

          <div className="rounded-2xl border border-amber-400/30 bg-amber-500/10 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-amber-100 mb-3">Official DV Entry Warning</h3>
            <p className="text-amber-50/90 text-sm md:text-base leading-relaxed">{t('officialDvWarn')}</p>
          </div>

          <Sub title="Photo Requirements">
            <ul className="list-disc ps-5 space-y-2">
              <li>Plain white or off-white background as specified.</li>
              <li>Recent photo that reflects your current appearance.</li>
              <li>No heavy filters, digital alterations, or improper framing.</li>
              <li>Full face visible; composition and dimensions must match official examples.</li>
            </ul>
          </Sub>

          <Sub title="Education Requirement">
            <p>
              High school education means the successful completion of a formal course of elementary and secondary education
              comparable to completion of a 12-year course in the United States. Always read the precise definition in the
              official DV instructions for the program year.
            </p>
          </Sub>

          <Sub title="Work Experience Requirement">
            <p>
              If you do not meet the education requirement, you may qualify based on two years of work experience in an
              occupation that requires at least two years of training or experience, within the past five years, as defined by
              the U.S. Department of Labor and referenced in official DV materials.
            </p>
          </Sub>
        </div>
      </div>
    </section>
  )
}
