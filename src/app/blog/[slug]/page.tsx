import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { getPostBySlug, getReadingTimeStats, formatDate } from '@/lib/blog'
import { MDXContent } from '@/components/MDXContent'
import { extractBlogPostData } from '@/lib/blog-content'
import { ReadingTime } from '@/components/ReadingTime'

// Force dynamic rendering for individual blog posts
export const dynamic = 'force-dynamic'
export const revalidate = 60 // Revalidate every minute


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Will McLemore',
    }
  }

  return {
    title: post.seoTitle || `${post.title} - Will McLemore`,
    description: post.seoDescription || post.excerpt || 'Read this blog post by Will McLemore',
    alternates: {
      types: {
        'text/markdown': `/blog/${slug}.md`,
      },
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt || 'Read this blog post by Will McLemore',
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  // Extract content and metadata, handling frontmatter if present
  const { content, metadata, readingTime } = extractBlogPostData(post)
  const readingStats = getReadingTimeStats(content)

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
              {metadata.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-8">
              {metadata.publishedAt && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(new Date(metadata.publishedAt))}
                </div>
              )}
              <ReadingTime 
                minutes={readingStats.minutes} 
                words={readingStats.words} 
                verbose={true}
              />
            </div>

            {metadata.tags && (
              <div className="flex flex-wrap gap-2 mb-8">
                {metadata.tags.split(',').map((tag) => (
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

            {metadata.excerpt && (
              <p className="text-xl text-slate-600 dark:text-slate-400 italic">
                {metadata.excerpt}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Cover Image */}
      {metadata.coverImage && (
        <div className="container mb-12">
          <div className="max-w-4xl mx-auto">
            <Image 
              src={metadata.coverImage} 
              alt={metadata.title}
              width={1200}
              height={630}
              className="w-full rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <MDXContent source={content} />
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