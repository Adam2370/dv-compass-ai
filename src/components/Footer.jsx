import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { heading, muted } from '../theme/ui'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-12 md:py-16 dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className={`font-semibold text-lg mb-2 ${heading}`}>{t('footer.brand')}</p>
            <p className={`text-sm max-w-md leading-relaxed ${muted}`}>{t('disclaimer.short')}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#" onClick={(e) => e.preventDefault()} className={`${muted} hover:text-violet-600 dark:hover:text-white transition-colors`}>
              {t('footer.privacy')}
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className={`${muted} hover:text-violet-600 dark:hover:text-white transition-colors`}>
              {t('footer.terms')}
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className={`${muted} hover:text-violet-600 dark:hover:text-white transition-colors`}>
              {t('footer.contact')}
            </a>
            <Link to="/scam" className={`${muted} hover:text-violet-600 dark:hover:text-white transition-colors`}>
              {t('scam.title')}
            </Link>
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500">
          <p>{t('footer.notGov')}</p>
          <p>{t('footer.verify')}</p>
          <p>
            © {new Date().getFullYear()} {t('footer.brand')} — {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
