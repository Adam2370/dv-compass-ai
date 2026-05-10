import { useMemo, useState } from 'react'
import {
  getPostVerificationStats,
  getPostsNeedingSupplementVerification,
} from '../data/immigrantVisaPosts'
import { VERIFICATION_STATUS } from '../data/verificationRegistry'
import { useLanguage } from '../hooks/useLanguage'
import { card, heading, muted } from '../theme/ui'

export function DataVerificationPanel() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const stats = getPostVerificationStats()
  const needsSupplement = getPostsNeedingSupplementVerification()
  const brokenLink = useMemo(
    () => needsSupplement.filter((p) => p.verificationStatus === VERIFICATION_STATUS.BROKEN_LINK).length,
    [needsSupplement]
  )

  return (
    <div className={`${card} mt-12 border-dashed border-slate-300/80 dark:border-white/15`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-start text-sm font-semibold ${heading}`}
      >
        {t('embassy.dataVerificationStatus')}
        <span className="text-slate-400">{open ? '▲' : '▼'}</span>
      </button>
      {open ? (
        <div className="border-t border-slate-200/80 px-4 py-4 dark:border-white/10">
          <ul className={`mb-4 grid gap-2 text-sm sm:grid-cols-2 ${muted}`}>
            <li>
              <span className="font-medium text-slate-800 dark:text-slate-200">{t('embassy.verifTotalPosts')}:</span>{' '}
              {stats.total}
            </li>
            <li>
              <span className="font-medium text-slate-800 dark:text-slate-200">{t('embassy.verifWithDirect')}:</span>{' '}
              {stats.withDirect}
            </li>
            <li>
              <span className="font-medium text-slate-800 dark:text-slate-200">{t('embassy.verifGeneralFallback')}:</span>{' '}
              {stats.generalListOnly}
            </li>
            <li>
              <span className="font-medium text-slate-800 dark:text-slate-200">{t('embassy.verifNeedsReview')}:</span>{' '}
              {stats.needsReview}
            </li>
            <li>
              <span className="font-medium text-slate-800 dark:text-slate-200">{t('embassy.verifBrokenLink')}:</span>{' '}
              {brokenLink}
            </li>
          </ul>
          <h4 className={`mb-2 text-xs font-semibold uppercase tracking-wide ${muted}`}>
            {t('embassy.verifPostsNeedingSupplementTitle')}
          </h4>
          <ul className={`max-h-48 overflow-y-auto text-xs ${muted} space-y-1`}>
            {needsSupplement.map((p) => (
              <li key={p.id}>
                <span className="font-mono text-slate-700 dark:text-slate-300">{p.id}</span> — {p.name} ({p.city},{' '}
                {p.countryCode})
                {p.verificationStatus === VERIFICATION_STATUS.NEEDS_REVIEW ? ` · ${t('embassy.verifNeedsReview')}` : ''}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
