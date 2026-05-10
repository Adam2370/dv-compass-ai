import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { muted } from '../theme/ui'

export function NewsPage() {
  const { t } = useLanguage()
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className={`${muted} mb-6`}>{t('news.movedToHome')}</p>
      <Link to="/" className="text-sm font-semibold text-violet-600 hover:underline dark:text-violet-300">
        {t('nav.home')}
      </Link>
    </div>
  )
}
