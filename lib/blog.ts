import { BlogPost, BlogPostWithMetadata } from '@/types/blog'
import readingTime from 'reading-time'

export async function getPosts(options?: {
  published?: boolean
  featured?: boolean
  limit?: number
  page?: number
}): Promise<BlogPost[]> {
  try {
    const params = new URLSearchParams()
    
    if (options?.published !== undefined) {
      params.append('published', String(options.published))
    }
    if (options?.featured !== undefined) {
      params.append('featured', String(options.featured))
    }
    if (options?.limit !== undefined) {
      params.append('limit', String(options.limit))
    }
    if (options?.page !== undefined) {
      params.append('page', String(options.page))
    }
    
    const url = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/blog${params.toString() ? `?${params.toString()}` : ''}`
    
    const res = await fetch(url, {
      next: { revalidate: 60 } // Cache for 1 minute
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch posts')
    }
    
    const data = await res.json()
    return data.posts as BlogPost[]
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/blog/${slug}`,
      { next: { revalidate: 60 } }
    )
    
    if (!res.ok) {
      return null
    }
    
    return await res.json()
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export interface ReadingTimeResult {
  text: string
  minutes: number
  time: number
  words: number
}

export function calculateReadingTime(content: string): number {
  const stats = readingTime(content)
  return Math.ceil(stats.minutes)
}

export function getReadingTimeStats(content: string): ReadingTimeResult {
  return readingTime(content)
}

export function getCategory(tags: string | null): string {
  if (!tags) return 'General'
  const tagList = tags.split(',').map(t => t.trim().toLowerCase())
  
  if (tagList.some(t => t.includes('automation') || t.includes('ai'))) {
    return 'Automation'
  }
  if (tagList.some(t => t.includes('auction') || t.includes('industry'))) {
    return 'Industry'
  }
  if (tagList.some(t => t.includes('business') || t.includes('partnership'))) {
    return 'Business'
  }
  if (tagList.some(t => t.includes('personal') || t.includes('career'))) {
    return 'Personal'
  }
  if (tagList.some(t => t.includes('tool') || t.includes('productivity'))) {
    return 'Tools'
  }
  
  return 'General'
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function addMetadataToPosts(posts: BlogPost[]): BlogPostWithMetadata[] {
  return posts.map(post => {
    const stats = getReadingTimeStats(post.content)
    return {
      ...post,
      readingTime: Math.ceil(stats.minutes),
      readingTimeStats: stats,
      category: getCategory(post.tags)
    }
  })
}