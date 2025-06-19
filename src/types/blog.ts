import { BlogPost as PrismaBlogPost } from '@prisma/client'

// Re-export BlogPost type from Prisma
export type BlogPost = PrismaBlogPost

export interface BlogPostWithMetadata extends BlogPost {
  readingTime: number
  readingTimeStats: {
    minutes: number
    words: number
    time: string
  }
  category: string
}