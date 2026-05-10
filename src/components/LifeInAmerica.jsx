import { useLanguage } from '../hooks/useLanguage'
import { SectionHeading } from './SectionHeading'

const phases = [
  {
    title: 'First 7 Days',
    items: [
      'Secure temporary housing',
      'Buy a SIM card and test connectivity',
      'Understand local transportation options',
      'Organize immigration documents in a waterproof pouch',
      'Learn emergency contacts (911, local hospitals)',
    ],
  },
  {
    title: 'First 30 Days',
    items: [
      'Apply for SSN if eligible and directed',
      'Open a bank account with required IDs',
      'Understand monthly budgeting (rent, food, transport)',
      'Explore job opportunities and networking channels',
      'Learn transit passes, rideshare safety, and commute patterns',
    ],
  },
  {
    title: 'First 90 Days',
    items: [
      'Start building credit responsibly (secured cards if needed)',
      'Learn basics of federal/state taxes and withholding',
      'Improve English through classes or conversation partners',
      'Build community through cultural centers or faith groups',
      'Understand healthcare: insurance, urgent care vs ER',
      'Obtain driver license or state ID per DMV rules',
    ],
  },
  {
    title: 'First 100 Days',
    items: [
      'Stabilize housing and roommate agreements',
      'Improve income through training or better roles',
      'Clarify long-term goals (education, certification, family reunification)',
      'Avoid debt traps (predatory loans, high-interest cards)',
      'Create a simple written financial plan',
    ],
  },
]

const states = [
  { name: 'California', dmv: 'DMV placeholder', col: 'High variability by metro', transit: 'Strong transit in major cities', housing: 'Competitive in coastal hubs', community: 'Large diaspora networks', jobs: 'Diverse industries' },
  { name: 'Texas', dmv: 'DMV placeholder', col: 'Generally lower than coastal CA', transit: 'Car-dependent in most cities', housing: 'Growing metros—plan ahead', community: 'Growing immigrant hubs', jobs: 'Energy, tech, healthcare' },
  { name: 'New Jersey', dmv: 'DMV placeholder', col: 'High near NYC corridor', transit: 'NYC access via PATH/NJ Transit', housing: 'Dense—research towns carefully', community: 'Diverse suburban networks', jobs: 'Pharma, logistics, NYC commute' },
  { name: 'Georgia', dmv: 'DMV placeholder', col: 'Atlanta vs rural spread', transit: 'Mixed; car common outside core', housing: 'Atlanta competitive pockets', community: 'Active cultural associations', jobs: 'Airport, film, corporate HQs' },
  { name: 'New York', dmv: 'DMV placeholder', col: 'Very high in NYC', transit: 'Extensive subway and bus', housing: 'Roommates often necessary', community: 'Neighborhood-level diversity', jobs: 'Finance, healthcare, gig economy' },
  { name: 'Maryland', dmv: 'DMV placeholder', col: 'Elevated near DC', transit: 'Metro access in pockets', housing: 'Research school districts if relevant', community: 'Federal city corridor diversity', jobs: 'Federal contractors, biotech' },
]

export function LifeInAmerica() {
  const { t } = useLanguage()
  return (
    <section id="life-america" className="py-20 md:py-28 border-t border-white/5 bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('lifeAmerica.title')} subtitle={t('lifeAmerica.subtitle')} />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {phases.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md"
            >
              <h3 className="text-lg font-semibold text-white mb-4">{p.title}</h3>
              <ul className="text-sm text-slate-400 space-y-2 list-disc ps-5">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-white text-center mb-8">{t('statesTitle')}</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((s) => (
            <article
              key={s.name}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 hover:border-teal-400/30 transition-colors"
            >
              <h4 className="text-lg font-semibold text-teal-200 mb-3">{s.name}</h4>
              <dl className="text-xs text-slate-400 space-y-2">
                <div>
                  <dt className="text-slate-500">DMV</dt>
                  <dd>{s.dmv}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Cost of living</dt>
                  <dd>{s.col}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Transportation</dt>
                  <dd>{s.transit}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Housing</dt>
                  <dd>{s.housing}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Immigrant communities</dt>
                  <dd>{s.community}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Job market</dt>
                  <dd>{s.jobs}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
