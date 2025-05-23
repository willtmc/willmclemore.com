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

// Sample blog posts - in a real app, these would come from the database
const featuredPosts = [
  {
    id: '1',
    title: 'Automating My Auction Business: A Year-Long Journey',
    excerpt: 'How I built custom CRM and project management systems to automate 50% of our auction processes. Lessons learned, tools used, and results achieved.',
    content: 'Building automation in a traditional industry like auctions...',
    publishedAt: new Date('2024-01-15'),
    readingTime: 8,
    tags: ['AI Automation', 'Business Systems', 'Case Study'],
    featured: true,
    category: 'Automation'
  },
  {
    id: '2', 
    title: 'From Sotheby\'s to Heavy Equipment: What I Learned Working Every Type of Auction',
    excerpt: 'Unique insights from working at the world\'s largest art auction house and the largest heavy equipment auctioneer. The patterns that apply across all auction types.',
    content: 'Most auctioneers specialize in one area...',
    publishedAt: new Date('2024-01-02'),
    readingTime: 6,
    tags: ['Auction Industry', 'Career Insights', 'Expertise'],
    featured: true,
    category: 'Industry'
  }
]

const allPosts = [
  ...featuredPosts,
  {
    id: '3',
    title: 'AI Tools Every Business Owner Should Try in 2024',
    excerpt: 'The specific AI tools I use to automate client intake, project management, and marketing in my auction business.',
    publishedAt: new Date('2023-12-18'),
    readingTime: 5,
    tags: ['AI Tools', 'Productivity', 'Small Business'],
    featured: false,
    category: 'Tools'
  },
  {
    id: '4',
    title: 'Why I Choose Hammers Over Stethoscopes: Lessons from a Yale Graduate in Auctions',
    excerpt: 'How following your passion instead of conventional wisdom can lead to unexpected success and fulfillment.',
    publishedAt: new Date('2023-12-05'),
    readingTime: 4,
    tags: ['Career Advice', 'Personal Story', 'Life Lessons'],
    featured: false,
    category: 'Personal'
  },
  {
    id: '5',
    title: 'Building Partnerships in Traditional Industries',
    excerpt: 'Strategies for finding and building successful joint ventures in established businesses like real estate and auctions.',
    publishedAt: new Date('2023-11-22'),
    readingTime: 7,
    tags: ['Partnerships', 'Business Growth', 'Strategy'],
    featured: false,
    category: 'Business'
  },
  {
    id: '6',
    title: 'The Future of Real Estate Auctions: Technology Trends to Watch',
    excerpt: 'How AI, online bidding platforms, and automation are changing the auction industry and what it means for buyers and sellers.',
    publishedAt: new Date('2023-11-08'),
    readingTime: 6,
    tags: ['Real Estate', 'Technology Trends', 'Future Outlook'],
    featured: false,
    category: 'Industry'
  }
]

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function PostCard({ post, featured = false }: { post: typeof allPosts[0], featured?: boolean }) {
  return (
    <article className={`card ${featured ? 'border-2 border-blue-200 dark:border-blue-800' : ''}`}>
      <div className="card-content space-y-4">
        {featured && (
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            Featured Post
          </div>
        )}
        
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatDate(post.publishedAt)}
          </div>
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
            <Link href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400">
            {post.excerpt}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-2">
          <Link 
            href={`/blog/${post.id}`}
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read more <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function BlogPage() {
  const otherPosts = allPosts.filter(post => !post.featured)

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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
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
                  <span>Or just email me directly at will@willmclemore.com</span>
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