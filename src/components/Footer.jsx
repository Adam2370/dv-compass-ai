import { useLanguage } from '../hooks/useLanguage'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-white/10 bg-black/40 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-semibold text-white text-lg mb-2">DV Compass AI</p>
            <p className="text-sm text-slate-500 max-w-md leading-relaxed">{t('disclaimer.short')}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
              {t('footer.contact')}
            </a>
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-500">
          <p>{t('footer.notGov')}</p>
          <p>{t('footer.verify')}</p>
          <p>© {new Date().getFullYear()} DV Compass AI — {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
