'use client'

import { Rss } from 'lucide-react'
import Link from 'next/link'

export function RSSLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link
        href="/feed.xml"
        className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="RSS Feed"
      >
        <Rss className="w-4 h-4" />
        <span>RSS</span>
      </Link>
      <Link
        href="/api/rss?format=atom"
        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="Atom Feed"
      >
        Atom
      </Link>
      <Link
        href="/api/rss?format=json"
        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="JSON Feed"
      >
        JSON
      </Link>
    </div>
  )
}

// RSS Subscribe button component
export function RSSSubscribeButton({ className = '' }: { className?: string }) {
  const handleSubscribe = () => {
    // Try to open in default RSS reader
    window.open(`feed://${window.location.host}/feed.xml`, '_blank')
  }

  return (
    <button
      onClick={handleSubscribe}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors ${className}`}
      aria-label="Subscribe to RSS Feed"
    >
      <Rss className="w-4 h-4" />
      <span className="font-medium">Subscribe via RSS</span>
    </button>
  )
}