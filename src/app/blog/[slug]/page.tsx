import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'

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
  seoTitle: string | null
  seoDescription: string | null
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/blog/${slug}`, {
      cache: 'no-store'
    })
    
    if (!res.ok) {
      return null
    }
    
    return await res.json()
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Will McLemore',
    }
  }

  return {
    title: post.seoTitle || `${post.title} - Will McLemore`,
    description: post.seoDescription || post.excerpt || 'Read this blog post by Will McLemore',
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt || 'Read this blog post by Will McLemore',
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const readingTime = calculateReadingTime(post.content)

  return (
    <article className="min-h-screen">
      {/* Header */}
      <header className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all posts
            </Link>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-8">
              {post.publishedAt && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(new Date(post.publishedAt))}
                </div>
              )}
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {readingTime} min read
              </div>
            </div>

            {post.tags && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.split(',').map((tag) => (
                  <span 
                    key={tag.trim()}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}

            {post.excerpt && (
              <p className="text-xl text-slate-600 dark:text-slate-400 italic">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="container mb-12">
          <div className="max-w-4xl mx-auto">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="section bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Thanks for reading!</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              If you found this post valuable, consider sharing it with others who might benefit.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/blog" 
                className="btn btn-primary"
              >
                Read more posts
              </Link>
              <Link 
                href="/contact" 
                className="btn btn-secondary"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </article>
  )
}