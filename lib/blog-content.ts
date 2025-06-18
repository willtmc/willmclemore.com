import matter from 'gray-matter'
import { BlogPost } from '@/types/blog'
import { calculateReadingTime } from './blog'

export interface FrontmatterData {
  title?: string
  slug?: string
  excerpt?: string
  date?: string
  publishedAt?: string
  tags?: string[] | string
  featured?: boolean
  coverImage?: string
  seoTitle?: string
  seoDescription?: string
  author?: string
  [key: string]: any
}

export interface ParsedBlogContent {
  content: string
  frontmatter: FrontmatterData
  hasValidFrontmatter: boolean
}

/**
 * Parse blog content that may contain frontmatter
 */
export function parseBlogContent(content: string): ParsedBlogContent {
  try {
    const { content: parsedContent, data } = matter(content)
    
    return {
      content: parsedContent || content,
      frontmatter: data as FrontmatterData,
      hasValidFrontmatter: Object.keys(data).length > 0
    }
  } catch (error) {
    // If parsing fails, return original content
    return {
      content,
      frontmatter: {},
      hasValidFrontmatter: false
    }
  }
}

/**
 * Merge frontmatter data with existing blog post data
 */
export function mergeFrontmatterWithPost(post: BlogPost, frontmatter: FrontmatterData): BlogPost {
  // Convert tags array to comma-separated string if needed
  const tags = Array.isArray(frontmatter.tags) 
    ? frontmatter.tags.join(', ')
    : frontmatter.tags

  // Parse date strings to Date objects
  const publishedAt = frontmatter.publishedAt || frontmatter.date
    ? new Date(frontmatter.publishedAt || frontmatter.date || '')
    : post.publishedAt

  return {
    ...post,
    title: frontmatter.title || post.title,
    slug: frontmatter.slug || post.slug,
    excerpt: frontmatter.excerpt || post.excerpt,
    tags: tags || post.tags,
    featured: frontmatter.featured !== undefined ? frontmatter.featured : post.featured,
    coverImage: frontmatter.coverImage || post.coverImage,
    seoTitle: frontmatter.seoTitle || post.seoTitle,
    seoDescription: frontmatter.seoDescription || post.seoDescription,
    publishedAt: publishedAt
  }
}

/**
 * Extract content and metadata from a blog post
 * Handles both frontmatter and database content
 */
export function extractBlogPostData(post: BlogPost): {
  content: string
  metadata: BlogPost
  readingTime: number
} {
  const { content, frontmatter, hasValidFrontmatter } = parseBlogContent(post.content)
  
  const metadata = hasValidFrontmatter 
    ? mergeFrontmatterWithPost(post, frontmatter)
    : post

  const readingTime = calculateReadingTime(content)

  return {
    content,
    metadata,
    readingTime
  }
}

/**
 * Format frontmatter for storage in database
 * Converts a blog post with separate fields into frontmatter format
 */
export function formatAsFrontmatter(post: Partial<BlogPost>): string {
  const frontmatter: FrontmatterData = {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || undefined,
    publishedAt: post.publishedAt?.toISOString(),
    tags: post.tags || undefined,
    featured: post.featured,
    coverImage: post.coverImage || undefined,
    seoTitle: post.seoTitle || undefined,
    seoDescription: post.seoDescription || undefined,
  }

  // Remove undefined values
  Object.keys(frontmatter).forEach(key => {
    if (frontmatter[key] === undefined) {
      delete frontmatter[key]
    }
  })

  const yamlContent = matter.stringify(post.content || '', frontmatter as any)
  return yamlContent
}

/**
 * Validate frontmatter has required fields
 */
export function validateFrontmatter(frontmatter: FrontmatterData): {
  isValid: boolean
  errors: string[]
} {
  const errors: string[] = []

  if (!frontmatter.title) {
    errors.push('Title is required in frontmatter')
  }

  if (!frontmatter.slug && !frontmatter.title) {
    errors.push('Either slug or title is required to generate a slug')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}