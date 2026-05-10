import { useMemo, useState } from 'react'
import { IMMIGRANT_VISA_POSTS } from '../data/immigrantVisaPosts'
import { VERIFICATION_STATUS } from '../data/verificationRegistry'
import { useLanguage } from '../hooks/useLanguage'
import {
  getPostInstructionsUrl,
  getPostMedicalUrl,
  getPostPanelPhysicianUrl,
  hasDirectPostPage,
} from '../utils/postLinks'
import { card, heading, muted } from '../theme/ui'
import { DataVerificationPanel } from './DataVerificationPanel'
import { SearchableSelect } from './SearchableSelect'
import { SectionHeading } from './SectionHeading'

export function EmbassyMedical() {
  const { t } = useLanguage()
  const [postId, setPostId] = useState(IMMIGRANT_VISA_POSTS[0]?.id ?? '')

  const post = useMemo(() => IMMIGRANT_VISA_POSTS.find((p) => p.id === postId) ?? null, [postId])

  const interviewUrl = post ? getPostInstructionsUrl(post) : '#'
  const medicalUrl = post ? getPostMedicalUrl(post) : '#'
  const officialPostUrl = post ? getPostInstructionsUrl(post) : '#'
  const panelUrl = post ? getPostPanelPhysicianUrl(post) : '#'
  const mapQuery = post?.address?.trim() ? post.address : `${post?.name ?? ''} ${post?.city ?? ''}`
  const directPage = post ? hasDirectPostPage(post) : false

  return (
    <section id="embassy" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-white/5 bg-slate-100/40 dark:bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title={t('embassy.title')} subtitle={t('embassy.subtitle')} />

        <div className={`${card} p-6 md:p-8 mb-12 lg:mb-16 max-w-2xl`}>
          <SearchableSelect
            label={t('embassy.pickPost')}
            id="embassy-post-select"
            value={postId}
            onChange={setPostId}
            options={IMMIGRANT_VISA_POSTS}
            getOptionValue={(p) => p.id}
            getOptionLabel={(p) => `${p.name} — ${p.city}, ${p.country}`}
            getOptionFilterText={(p) => p.searchText}
            placeholder={t('roadmap.embassySearch')}
            noResultsText={t('common.noMatches')}
          />
          {post?.id === 'de-frn' ? (
            <p className={`mt-3 text-xs leading-relaxed ${muted}`}>{t('embassy.germanyDatasetNote')}</p>
          ) : null}
        </div>

        {post ? (
          <div className="grid gap-8 lg:grid-cols-2">
            <article className={`${card} p-6 md:p-8`}>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className={`text-lg font-semibold ${heading}`}>{post.name}</h3>
                  <p className={`text-sm ${muted}`}>
                    {post.city}, {post.country} · {post.type} · {post.region}
                    {post.postCode ? ` · ${post.postCode}` : null}
                  </p>
                </div>
                <div className="flex flex-wrap justify-end gap-2">
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                      directPage
                        ? 'bg-emerald-100 text-emerald-950 dark:bg-emerald-500/20 dark:text-emerald-100'
                        : 'bg-slate-200 text-slate-900 dark:bg-white/10 dark:text-slate-200'
                    }`}
                  >
                    {directPage ? t('embassy.badgeDirectSupplement') : t('embassy.badgeGeneralPostsList')}
                  </span>
                  {post.verificationStatus === VERIFICATION_STATUS.NEEDS_REVIEW ? (
                    <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-950 dark:bg-amber-500/20 dark:text-amber-100">
                      {t('embassy.verifNeedsReview')}
                    </span>
                  ) : null}
                </div>
              </div>

              <p
                className={`mb-4 rounded-lg border px-3 py-2 text-xs leading-relaxed ${
                  directPage
                    ? 'border-emerald-200/80 bg-emerald-50/80 text-emerald-950 dark:border-emerald-400/25 dark:bg-emerald-500/10 dark:text-emerald-50/95'
                    : 'border-amber-200/80 bg-amber-50/80 text-amber-950 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-50/95'
                }`}
              >
                {directPage ? t('embassy.openingDirectInstructions') : t('embassy.openingGeneralListFallback')}
              </p>

              {post.verificationStatus === VERIFICATION_STATUS.NEEDS_REVIEW ? (
                <p className="mb-4 rounded-lg border border-amber-200/70 bg-amber-50/80 px-3 py-2 text-sm text-amber-950 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-50/95">
                  {t('embassy.verifyPostProcessing')}
                </p>
              ) : null}

              {post.address ? (
                <p className={`text-sm ${muted} whitespace-pre-line mb-3`}>{post.address}</p>
              ) : (
                <p className={`text-sm ${muted} mb-3`}>{t('embassy.verifyPostProcessing')}</p>
              )}
              {post.phone ? <p className={`text-sm ${muted} mb-4`}>{post.phone}</p> : null}

              <div className="flex flex-wrap gap-2">
                <a
                  href={post.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white hover:bg-violet-500"
                >
                  {t('embassy.officialWebsite')}
                </a>
                <a
                  href={officialPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg border border-slate-300/60 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/5"
                >
                  {t('embassy.officialPostInstructions')}
                </a>
                <a
                  href={interviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg border border-violet-300/60 bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-800 hover:bg-violet-100 dark:border-violet-400/30 dark:bg-violet-500/10 dark:text-violet-100"
                >
                  {t('embassy.interviewInstructions')}
                </a>
                <a
                  href={medicalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg border border-cyan-300/60 bg-cyan-50 px-3 py-2 text-xs font-semibold text-cyan-900 hover:bg-cyan-100 dark:border-cyan-400/30 dark:bg-cyan-500/10 dark:text-cyan-100"
                >
                  {t('embassy.medicalInstructions')}
                </a>
                <a
                  href={panelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg border border-teal-300/60 bg-teal-50 px-3 py-2 text-xs font-semibold text-teal-900 hover:bg-teal-100 dark:border-teal-400/30 dark:bg-teal-500/10 dark:text-teal-100"
                >
                  {t('embassy.panelPhysicians')}
                </a>
              </div>
              {!directPage ? (
                <p className={`mt-3 text-xs ${muted}`}>{t('embassy.instructionsOnWebsite')}</p>
              ) : null}

              <p className="mt-5 rounded-lg border border-rose-200/70 bg-rose-50/80 px-3 py-2 text-sm text-rose-950 dark:border-rose-400/25 dark:bg-rose-500/10 dark:text-rose-50/95">
                {t('embassy.panelPhysicianWarn')}
              </p>

              <ul className={`mt-5 text-sm ${muted} space-y-1 list-disc ps-5`}>
                <li>{t('embassy.tipBinder')}</li>
                <li>{t('embassy.tipSecurity')}</li>
                <li>{t('embassy.tipArrival')}</li>
                <li>{t('embassy.tipMedical')}</li>
              </ul>
            </article>

            <div className="space-y-4">
              <div
                className={`${card} flex min-h-[220px] flex-col items-center justify-center border-dashed border-2 border-slate-300/60 p-8 text-center dark:border-white/15`}
              >
                <p className={`text-sm font-medium ${muted}`}>{t('common.mapsPlaceholder')}</p>
                <p className={`mt-1 text-xs ${muted}`}>{mapQuery}</p>
                {mapQuery ? (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-semibold text-cyan-600 dark:text-cyan-300 hover:underline"
                  >
                    {t('common.mapsPlaceholder')}
                  </a>
                ) : null}
              </div>
              <a
                href={post ? getPostInstructionsUrl(post) : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`${card} block p-4 text-sm font-semibold text-violet-600 dark:text-violet-300 hover:underline`}
              >
                {t('embassy.verifyPostProcessing')}
              </a>
            </div>
          </div>
        ) : null}

        <div className={`mt-16 ${card} border-emerald-300/40 dark:border-emerald-400/20 bg-emerald-50/80 dark:bg-emerald-500/5 p-8 md:p-10`}>
          <h3 className={`text-2xl font-semibold mb-4 ${heading}`}>{t('medicalGuide')}</h3>
          <p className={`${muted} leading-relaxed mb-4`}>{t('embassy.medicalIntro')}</p>
          <ul className={`list-disc ps-5 text-sm ${muted} space-y-2 mb-6`}>
            {(t('embassy.medicalBullets') && Array.isArray(t('embassy.medicalBullets')) ? t('embassy.medicalBullets') : []).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">{t('embassy.checklistTitle')}</h4>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
            {(t('embassy.checklist') && Array.isArray(t('embassy.checklist')) ? t('embassy.checklist') : []).map((x) => (
              <li key={x} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <DataVerificationPanel />
      </div>
    </section>
  )
}
