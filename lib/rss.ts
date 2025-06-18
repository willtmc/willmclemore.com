import { Feed } from 'feed'
import { BlogPost } from '@/types/blog'
import { getPosts } from './blog'
import { extractBlogPostData } from './blog-content'

interface RSSOptions {
  limit?: number
  includeContent?: boolean
}

export async function generateRSS(options: RSSOptions = {}): Promise<string> {
  const { limit = 20, includeContent = true } = options
  
  // Get published posts
  const posts = await getPosts({ published: true, limit })
  
  // Create feed instance
  const feed = new Feed({
    title: 'Will McLemore - Blog',
    description: 'Insights on AI automation, auction industry trends, and building automated business systems.',
    id: 'https://willmclemore.com',
    link: 'https://willmclemore.com',
    language: 'en',
    image: 'https://willmclemore.com/og-image.png',
    favicon: 'https://willmclemore.com/favicon.ico',
    copyright: `All rights reserved ${new Date().getFullYear()}, Will McLemore`,
    updated: posts.length > 0 ? new Date(posts[0].updatedAt) : new Date(),
    generator: 'Next.js',
    feedLinks: {
      rss: 'https://willmclemore.com/api/rss',
      json: 'https://willmclemore.com/api/rss?format=json',
      atom: 'https://willmclemore.com/api/rss?format=atom'
    },
    author: {
      name: 'Will McLemore',
      email: 'will@mclemoreauction.com',
      link: 'https://willmclemore.com/about'
    }
  })
  
  // Add posts to feed
  posts.forEach(post => {
    // Extract content and metadata
    const { content, metadata } = extractBlogPostData(post)
    
    // Build categories from tags
    const categories = metadata.tags
      ? metadata.tags.split(',').map(tag => tag.trim())
      : []
    
    feed.addItem({
      title: metadata.title,
      id: `https://willmclemore.com/blog/${metadata.slug}`,
      link: `https://willmclemore.com/blog/${metadata.slug}`,
      description: metadata.excerpt || metadata.title,
      content: includeContent ? content : undefined,
      author: [
        {
          name: 'Will McLemore',
          email: 'will@mclemoreauction.com',
          link: 'https://willmclemore.com/about'
        }
      ],
      date: metadata.publishedAt ? new Date(metadata.publishedAt) : new Date(post.createdAt),
      category: categories.map(cat => ({ name: cat })),
      image: metadata.coverImage || undefined
    })
  })
  
  return feed.rss2()
}

export async function generateAtom(options: RSSOptions = {}): Promise<string> {
  const { limit = 20, includeContent = true } = options
  
  const posts = await getPosts({ published: true, limit })
  
  const feed = new Feed({
    title: 'Will McLemore - Blog',
    description: 'Insights on AI automation, auction industry trends, and building automated business systems.',
    id: 'https://willmclemore.com',
    link: 'https://willmclemore.com',
    language: 'en',
    image: 'https://willmclemore.com/og-image.png',
    favicon: 'https://willmclemore.com/favicon.ico',
    copyright: `All rights reserved ${new Date().getFullYear()}, Will McLemore`,
    updated: posts.length > 0 ? new Date(posts[0].updatedAt) : new Date(),
    generator: 'Next.js',
    feedLinks: {
      rss: 'https://willmclemore.com/api/rss',
      json: 'https://willmclemore.com/api/rss?format=json',
      atom: 'https://willmclemore.com/api/rss?format=atom'
    },
    author: {
      name: 'Will McLemore',
      email: 'will@mclemoreauction.com',
      link: 'https://willmclemore.com/about'
    }
  })
  
  posts.forEach(post => {
    const { content, metadata } = extractBlogPostData(post)
    const categories = metadata.tags
      ? metadata.tags.split(',').map(tag => tag.trim())
      : []
    
    feed.addItem({
      title: metadata.title,
      id: `https://willmclemore.com/blog/${metadata.slug}`,
      link: `https://willmclemore.com/blog/${metadata.slug}`,
      description: metadata.excerpt || metadata.title,
      content: includeContent ? content : undefined,
      author: [
        {
          name: 'Will McLemore',
          email: 'will@mclemoreauction.com',
          link: 'https://willmclemore.com/about'
        }
      ],
      date: metadata.publishedAt ? new Date(metadata.publishedAt) : new Date(post.createdAt),
      category: categories.map(cat => ({ name: cat })),
      image: metadata.coverImage || undefined
    })
  })
  
  return feed.atom1()
}

export async function generateJSON(options: RSSOptions = {}): Promise<string> {
  const { limit = 20, includeContent = true } = options
  
  const posts = await getPosts({ published: true, limit })
  
  const feed = new Feed({
    title: 'Will McLemore - Blog',
    description: 'Insights on AI automation, auction industry trends, and building automated business systems.',
    id: 'https://willmclemore.com',
    link: 'https://willmclemore.com',
    language: 'en',
    image: 'https://willmclemore.com/og-image.png',
    favicon: 'https://willmclemore.com/favicon.ico',
    copyright: `All rights reserved ${new Date().getFullYear()}, Will McLemore`,
    updated: posts.length > 0 ? new Date(posts[0].updatedAt) : new Date(),
    generator: 'Next.js',
    feedLinks: {
      rss: 'https://willmclemore.com/api/rss',
      json: 'https://willmclemore.com/api/rss?format=json',
      atom: 'https://willmclemore.com/api/rss?format=atom'
    },
    author: {
      name: 'Will McLemore',
      email: 'will@mclemoreauction.com',
      link: 'https://willmclemore.com/about'
    }
  })
  
  posts.forEach(post => {
    const { content, metadata } = extractBlogPostData(post)
    const categories = metadata.tags
      ? metadata.tags.split(',').map(tag => tag.trim())
      : []
    
    feed.addItem({
      title: metadata.title,
      id: `https://willmclemore.com/blog/${metadata.slug}`,
      link: `https://willmclemore.com/blog/${metadata.slug}`,
      description: metadata.excerpt || metadata.title,
      content: includeContent ? content : undefined,
      author: [
        {
          name: 'Will McLemore',
          email: 'will@mclemoreauction.com',
          link: 'https://willmclemore.com/about'
        }
      ],
      date: metadata.publishedAt ? new Date(metadata.publishedAt) : new Date(post.createdAt),
      category: categories.map(cat => ({ name: cat })),
      image: metadata.coverImage || undefined
    })
  })
  
  return feed.json1()
}