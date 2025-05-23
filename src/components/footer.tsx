import Link from 'next/link'
import { Github, Linkedin, Twitter, Instagram, Mail, Facebook } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Twitter',
      href: SITE_CONFIG.social.twitter,
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: SITE_CONFIG.social.linkedin,
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: SITE_CONFIG.social.github,
      icon: Github,
    },
    {
      name: 'Instagram',
      href: SITE_CONFIG.social.instagram,
      icon: Instagram,
    },
    {
      name: 'Facebook',
      href: SITE_CONFIG.social.facebook,
      icon: Facebook,
    },
  ]

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold gradient-text">
              {SITE_CONFIG.name}
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
              Technology leader, strategic consultant, and innovation catalyst. 
              Available for complex challenges and growth opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <a 
                href={`mailto:${SITE_CONFIG.email}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Built with Next.js, deployed on Railway
          </p>
        </div>
      </div>
    </footer>
  )
} 