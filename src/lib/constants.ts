export const SITE_CONFIG = {
  name: 'Will McLemore',
  title: 'Will McLemore - Technology Leader & Strategic Consultant',
  description: 'Personal website of Will McLemore - technology leader, strategic consultant, and innovation catalyst. Available for technical consulting, startup advisory, and speaking engagements.',
  url: process.env.SITE_URL || 'https://willmclemore.com',
  author: 'Will McLemore',
  email: 'will@willmclemore.com',
  keywords: ['Will McLemore', 'Technology Leader', 'Strategic Consultant', 'Startup Advisor', 'Innovation', 'Technical Consulting'],
  social: {
    twitter: 'https://twitter.com/willmclemore',
    linkedin: 'https://linkedin.com/in/willmclemore',
    github: 'https://github.com/willmclemore',
    instagram: 'https://instagram.com/willmclemore',
  },
}

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export const PROJECT_TYPES = [
  'Technical Consulting',
  'Startup Advisory',
  'Speaking Engagement',
  'Product Strategy',
  'Team Building',
  'Technology Assessment',
  'Other',
] as const

export const BAT_SIGNAL_DEFAULT = 'Available for: Complex technical challenges, early-stage startup advisory, speaking opportunities in technology leadership and innovation'

export const SOCIAL_PLATFORMS = {
  TWITTER: 'twitter',
  LINKEDIN: 'linkedin',
  INSTAGRAM: 'instagram',
  GITHUB: 'github',
} as const

export const BLOG_CONFIG = {
  postsPerPage: 6,
  featuredPostsCount: 3,
}

export const CONTACT_CONFIG = {
  maxMessageLength: 2000,
  allowedDomains: [], // Empty means all domains allowed
  spamKeywords: ['crypto', 'bitcoin', 'investment', 'loan', 'casino'],
} 