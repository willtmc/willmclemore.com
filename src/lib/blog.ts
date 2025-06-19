import { BlogPost } from '@prisma/client'
import { BlogPostWithMetadata } from '@/types/blog'

export interface GetPostsOptions {
  published?: boolean
  featured?: boolean
  page?: number
  pageSize?: number
}

export interface PaginatedResponse<T> {
  posts: T[]
  pagination: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}

export async function getPosts(options: GetPostsOptions = {}): Promise<BlogPost[]> {
  const { 
    published = true, 
    featured, 
    page = 1, 
    pageSize = 10 
  } = options

  const params = new URLSearchParams()
  params.set('published', published.toString())
  params.set('page', page.toString())
  params.set('limit', pageSize.toString())
  
  if (featured !== undefined) {
    params.set('featured', featured.toString())
  }

  const response = await fetch(`/api/blog?${params}`, {
    cache: 'no-store'
  })

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  const data = await response.json()
  return data.posts || data // Handle both paginated and non-paginated responses
}

export async function getPostsWithPagination(options: GetPostsOptions = {}): Promise<PaginatedResponse<BlogPost>> {
  const { 
    published = true, 
    featured, 
    page = 1, 
    pageSize = 10 
  } = options

  const params = new URLSearchParams()
  params.set('published', published.toString())
  params.set('page', page.toString())
  params.set('limit', pageSize.toString())
  
  if (featured !== undefined) {
    params.set('featured', featured.toString())
  }

  const response = await fetch(`/api/blog?${params}`, {
    cache: 'no-store'
  })

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  return response.json()
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const response = await fetch(`/api/blog/${slug}`, {
    cache: 'no-store'
  })

  if (!response.ok) {
    return null
  }

  return response.json()
}

// Alias for compatibility
export const getPostBySlug = getPost

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}

export function getReadingTimeStats(content: string): {
  minutes: number
  words: number
  time: string
} {
  const wordCount = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(wordCount / 200))
  const time = minutes === 1 ? '1 min read' : `${minutes} min read`
  
  return {
    minutes,
    words: wordCount,
    time
  }
}

export function addMetadataToPosts(posts: BlogPost[]): BlogPostWithMetadata[] {
  return posts.map(post => {
    const readingTimeStats = getReadingTimeStats(post.content)
    return {
      ...post,
      readingTime: readingTimeStats.minutes,
      readingTimeStats,
      category: determineCategory(post)
    }
  })
}

function determineCategory(post: BlogPost): string {
  const tags = post.tags?.toLowerCase() || ''
  const title = post.title.toLowerCase()
  const content = post.content.toLowerCase()
  
  if (tags.includes('ai') || title.includes('ai') || content.includes('artificial intelligence')) {
    return 'AI & Automation'
  }
  if (tags.includes('auction') || title.includes('auction') || content.includes('auction')) {
    return 'Auction Industry'
  }
  if (tags.includes('business') || title.includes('business') || content.includes('business')) {
    return 'Business Strategy'
  }
  if (tags.includes('technology') || title.includes('tech') || content.includes('technology')) {
    return 'Technology'
  }
  
  return 'General'
}