import { SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700">
      <div className="container py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>© {currentYear} {SITE_CONFIG.name}</p>
          <p>Nashville, Tennessee</p>
        </div>
      </div>
    </footer>
  )
}
