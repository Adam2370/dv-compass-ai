import { useLanguage } from '../hooks/useLanguage'

export function DisclaimerStrip() {
  const { t } = useLanguage()
  return (
    <div className="border-b border-slate-200 bg-amber-50/90 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/90">
      <div className="mx-auto max-w-6xl px-4 py-2.5 text-center text-xs sm:text-sm text-amber-950/90 dark:text-slate-300 leading-snug">
        <span className="font-medium text-amber-800 dark:text-amber-200/90">{t('disclaimer.banner')}: </span>
        {t('disclaimer.short')}
      </div>
    </div>
  )
}
