export const SITE_CONFIG = {
  name: 'Will McLemore',
  title: 'Will McLemore',
  description: 'Auctioneer, builder, automator. President of McLemore Auction Company in Nashville.',
  url: process.env.SITE_URL || 'https://willmclemore.com',
  author: 'Will McLemore',
  email: 'will@mclemoreauction.com',
  keywords: ['Will McLemore', 'McLemore Auction Company', 'Nashville Auctioneer', 'Auction Technology'],
  social: {
    twitter: 'https://twitter.com/willtmc',
    linkedin: 'https://linkedin.com/in/willmclemore',
    github: 'https://github.com/willtmc',
    instagram: 'https://instagram.com/willtmc',
    facebook: 'https://facebook.com/willtmc',
  },
}

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
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
  FACEBOOK: 'facebook',
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