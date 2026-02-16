import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Will McLemore',
  description: 'Insights on AI automation, auction industry trends, and building automated business systems.',
  openGraph: {
    title: 'Blog - Will McLemore',
    description: 'AI automation insights and auction industry expertise.',
  },
}

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  publishedAt: Date | null
  tags: string | null
  featured: boolean
  coverImage: string | null
}

async function getBlogPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/blog?published=true`, {
      cache: 'no-store'
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch posts')
    }
    
    const data = await res.json()
    return data.posts as BlogPost[]
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    // Return empty array if fetch fails
    return []
  }
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

function getCategory(tags: string | null): string {
  if (!tags) return 'General'
  const tagList = tags.split(',').map(t => t.trim())
  
  if (tagList.some(t => t.toLowerCase().includes('automation') || t.toLowerCase().includes('ai'))) {
    return 'Automation'
  }
  if (tagList.some(t => t.toLowerCase().includes('auction') || t.toLowerCase().includes('industry'))) {
    return 'Industry'
  }
  if (tagList.some(t => t.toLowerCase().includes('business') || t.toLowerCase().includes('partnership'))) {
    return 'Business'
  }
  if (tagList.some(t => t.toLowerCase().includes('personal') || t.toLowerCase().includes('career'))) {
    return 'Personal'
  }
  if (tagList.some(t => t.toLowerCase().includes('tool') || t.toLowerCase().includes('productivity'))) {
    return 'Tools'
  }
  
  return 'General'
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function PostCard({ post, featured = false }: { post: BlogPost & { readingTime: number, category: string }, featured?: boolean }) {
  return (
    <article className={`card ${featured ? 'border-2 border-blue-200 dark:border-blue-800' : ''}`}>
      <div className="card-content space-y-4">
        {featured && (
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            Featured Post
          </div>
        )}
        
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          {post.publishedAt && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(new Date(post.publishedAt))}
            </div>
          )}
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readingTime} min read
          </div>
          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">
            {post.category}
          </span>
        </div>

        <div className="space-y-3">
          <h2 className={`font-bold ${featured ? 'text-2xl' : 'text-xl'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400">
            {post.excerpt}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags && post.tags.split(',').map((tag) => (
            <span 
              key={tag.trim()}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag.trim()}
            </span>
          ))}
        </div>

        <div className="pt-2">
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read more <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default async function BlogPage() {
  const posts = await getBlogPosts()
  
  // Add calculated fields to posts
  const postsWithMetadata = posts.map(post => ({
    ...post,
    readingTime: calculateReadingTime(post.content),
    category: getCategory(post.tags)
  }))
  
  const featuredPosts = postsWithMetadata.filter(post => post.featured)
  const otherPosts = postsWithMetadata.filter(post => !post.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              Thoughts on AI automation, auction industry trends, and building systems 
              that let you focus on what matters most.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                🤖 AI Automation
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full">
                🏠 Auction Industry
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
                💼 Business Systems
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 rounded-full">
                🎯 Productivity Tips
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section-sm">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Featured Posts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <PostCard key={post.id} post={post} featured={true} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">All Posts</h2>
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-600 dark:text-slate-400 mb-4">No blog posts yet. Check back soon!</p>
              </div>
            ) : otherPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600 dark:text-slate-400">All posts are currently featured above.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="card bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
              <div className="card-content space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">Stay Updated</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Get insights on AI automation, auction industry trends, and practical tips 
                    for building better business systems. No spam, just valuable content.
                  </p>
                </div>
                
                <div className="max-w-md mx-auto">
                  <form className="flex gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="input flex-1"
                      required
                    />
                    <button 
                      type="submit" 
                      className="btn btn-primary whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    Typically 1-2 emails per month. Unsubscribe anytime.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span>Or just email me directly at will@mclemoreauction.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics & Categories */}
      <section className="section-sm bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Popular Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-3">
                  🤖
                </div>
                <h3 className="font-semibold mb-2">AI Automation</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Practical tips for automating your business processes
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 mx-auto mb-3">
                  🏠
                </div>
                <h3 className="font-semibold mb-2">Auction Insights</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Industry trends and behind-the-scenes knowledge
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-3">
                  💼
                </div>
                <h3 className="font-semibold mb-2">Business Systems</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Building scalable systems and processes
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mx-auto mb-3">
                  🤝
                </div>
                <h3 className="font-semibold mb-2">Partnerships</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Building strategic relationships and joint ventures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 