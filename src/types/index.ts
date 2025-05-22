import { PROJECT_TYPES, SOCIAL_PLATFORMS } from '@/lib/constants'

export type ProjectType = typeof PROJECT_TYPES[number]
export type SocialPlatform = typeof SOCIAL_PLATFORMS[keyof typeof SOCIAL_PLATFORMS]

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  coverImage?: string
  published: boolean
  featured: boolean
  tags: string[]
  seoTitle?: string
  seoDescription?: string
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
  syndicatedTo: string[]
  readingTime?: number
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  projectType?: string
  message: string
  status: 'new' | 'read' | 'responded' | 'archived'
  createdAt: Date
}

export interface SocialMediaPost {
  id: string
  platform: string
  postId: string
  content: string
  url?: string
  publishedAt: Date
  createdAt: Date
  blogPostId?: string
}

export interface ProjectShowcase {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  imageUrl?: string
  featured: boolean
  order: number
  createdAt: Date
  updatedAt: Date
}

export interface SiteSettings {
  id: string
  batSignal: string
  about?: string
  socialLinks?: SocialLinks
  contactEmail?: string
  resumeUrl?: string
  updatedAt: Date
}

export interface SocialLinks {
  twitter?: string
  linkedin?: string
  github?: string
  instagram?: string
  youtube?: string
  [key: string]: string | undefined
}

export interface ContactFormData {
  name: string
  email: string
  projectType?: ProjectType
  message: string
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export interface NavigationItem {
  name: string
  href: string
  icon?: React.ComponentType<any>
  external?: boolean
}

export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
} 