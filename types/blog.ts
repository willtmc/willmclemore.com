export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  publishedAt: Date | null
  tags: string | null
  featured: boolean
  coverImage: string | null
  seoTitle: string | null
  seoDescription: string | null
  createdAt: Date
  updatedAt: Date
}

export interface BlogPostWithMetadata extends BlogPost {
  readingTime: number
  readingTimeStats: {
    text: string
    minutes: number
    time: string
    words: number
  }
  category: string
}

export interface BlogPostsResponse {
  posts: BlogPost[]
  total: number
  page: number
  pageSize: number
}