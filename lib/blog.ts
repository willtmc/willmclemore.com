import { BlogPost, BlogPostWithMetadata } from '@/types/blog'
import readingTime from 'reading-time'
import { prisma } from '@/lib/prisma'

export async function getPosts(options?: {
  published?: boolean
  featured?: boolean
  limit?: number
  page?: number
}): Promise<BlogPost[]> {
  try {
    const where = {
      published: options?.published ?? true,
      ...(options?.featured !== undefined && { featured: options.featured })
    }
    
    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: { publishedAt: 'desc' },
      take: options?.limit,
      skip: options?.page ? (options.page - 1) * (options?.limit || 10) : 0,
    })
    
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await prisma.blogPost.findFirst({
      where: {
        OR: [
          { slug: slug },
          { id: slug }
        ]
      }
    })
    
    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export interface ReadingTimeResult {
  text: string
  minutes: number
  time: string
  words: number
}

export function calculateReadingTime(content: string): number {
  const stats = readingTime(content)
  return Math.ceil(stats.minutes)
}

export function getReadingTimeStats(content: string): ReadingTimeResult {
  const stats = readingTime(content)
  return {
    text: stats.text,
    minutes: stats.minutes,
    time: stats.text, // Use text as time for compatibility
    words: stats.words
  }
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