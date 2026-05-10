import { useLanguage } from '../hooks/useLanguage'

export function DisclaimerStrip() {
  const { t } = useLanguage()
  return (
    <div className="border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-2.5 text-center text-xs sm:text-sm text-slate-300 leading-snug">
        <span className="font-medium text-amber-200/90">{t('disclaimer.banner')}: </span>
        {t('disclaimer.short')}
      </div>
    </div>
  )
}
