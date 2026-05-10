import { useLanguage } from '../hooks/useLanguage'
import { SectionHeading } from './SectionHeading'

export function AboutMission() {
  const { t } = useLanguage()
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-violet-950/20 to-transparent border-t border-white/5">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <SectionHeading title={t('about.title')} subtitle={t('about.subtitle')} />
        <p className="text-slate-300 leading-relaxed text-lg">
          DV Compass AI was inspired by real immigrant journeys. Many immigrants face confusion, misinformation, scams,
          stress, and uncertainty during the DV Lottery and immigration process. This platform was created to organize trusted
          information, simplify complex steps, and help people move forward with confidence.
        </p>
        <p className="mt-6 text-sm text-violet-200/90 font-medium">
          Mission: To organize official immigration information, reduce confusion, fight scams, and help immigrants move with
          confidence.
        </p>
      </div>
    </section>
  )
}
