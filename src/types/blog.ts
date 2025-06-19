import { BlogPost } from '@prisma/client'

export interface BlogPostWithMetadata extends BlogPost {
  readingTime: number
  readingTimeStats: {
    minutes: number
    words: number
    time: string
  }
  category: string
}