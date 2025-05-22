import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { formatDate, getReadingTime } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on technology leadership, strategic consulting, innovation, and the latest trends in software development and business strategy.',
}

// Placeholder blog posts - in a real app, this would come from the database
const blogPosts = [
  {
    id: '1',
    title: 'Building High-Performance Engineering Teams at Scale',
    slug: 'building-high-performance-engineering-teams-scale',
    excerpt: 'Learn the frameworks and strategies I use to help organizations scale their engineering teams from 10 to 100+ engineers while maintaining quality and velocity.',
    content: `# Building High-Performance Engineering Teams at Scale

Scaling engineering teams is one of the most challenging aspects of growing a technology company. Having worked with dozens of startups and enterprises through this transition, I've identified key patterns that separate successful scaling efforts from those that struggle.

## The Challenge of Scale

When teams grow beyond 10-15 engineers, many organizations hit what I call the "coordination cliff." What worked with a small, tight-knit team suddenly becomes inefficient and chaotic. Communication breaks down, code quality suffers, and velocity paradoxically decreases despite having more people.

## Framework for Successful Scaling

Through my consulting work, I've developed a framework that helps organizations navigate this transition successfully...`,
    tags: ['Leadership', 'Engineering', 'Scaling'],
    published: true,
    featured: true,
    publishedAt: new Date('2024-01-15'),
    coverImage: '/api/placeholder/800/400'
  },
  {
    id: '2',
    title: 'The Future of AI in Strategic Business Decision Making',
    slug: 'future-ai-strategic-business-decision-making',
    excerpt: 'Exploring how artificial intelligence is transforming strategic planning and what leaders need to know to stay ahead of the curve.',
    content: `# The Future of AI in Strategic Business Decision Making

Artificial intelligence is no longer a futuristic concept—it's reshaping how we approach strategic business decisions today. As organizations grapple with increasing complexity and accelerating change, AI-powered insights are becoming essential for competitive advantage.

## Current State of AI in Business Strategy

Most organizations are still in the early stages of integrating AI into their strategic processes...`,
    tags: ['AI', 'Strategy', 'Innovation'],
    published: true,
    featured: true,
    publishedAt: new Date('2024-01-10'),
    coverImage: '/api/placeholder/800/400'
  },
  {
    id: '3',
    title: 'Technical Due Diligence: A Startup Advisory Perspective',
    slug: 'technical-due-diligence-startup-advisory-perspective',
    excerpt: 'Key factors investors and advisors should evaluate when assessing the technical foundation of early-stage startups.',
    content: `# Technical Due Diligence: A Startup Advisory Perspective

Having conducted technical due diligence for dozens of startup investments, I've seen how the right technical foundation can make or break a company's growth trajectory. Here's what I look for when evaluating early-stage companies.

## Beyond the Code

Technical due diligence is about much more than code quality. While clean, well-documented code is important, the most critical factors are often organizational and strategic...`,
    tags: ['Startups', 'Investment', 'Technical Assessment'],
    published: true,
    featured: false,
    publishedAt: new Date('2024-01-05'),
    coverImage: '/api/placeholder/800/400'
  },
  {
    id: '4',
    title: 'Microservices vs Monoliths: Making the Right Choice',
    slug: 'microservices-vs-monoliths-making-right-choice',
    excerpt: 'A practical guide to choosing between microservices and monolithic architectures based on team size, complexity, and business requirements.',
    content: `# Microservices vs Monoliths: Making the Right Choice

The microservices vs monolith debate continues to rage in the tech community. Having implemented both approaches across various organizations, I believe the answer isn't black and white—it depends on your specific context.

## The Context-Driven Approach

The right architecture choice depends on several factors that are often overlooked in theoretical discussions...`,
    tags: ['Architecture', 'Microservices', 'System Design'],
    published: true,
    featured: false,
    publishedAt: new Date('2023-12-28'),
    coverImage: '/api/placeholder/800/400'
  },
  {
    id: '5',
    title: 'Innovation Workshops: Turning Ideas into Execution',
    slug: 'innovation-workshops-turning-ideas-execution',
    excerpt: 'How to design and facilitate innovation workshops that generate actionable ideas and create momentum for implementation.',
    content: `# Innovation Workshops: Turning Ideas into Execution

After facilitating over 50 innovation workshops for Fortune 500 companies and startups, I've learned that the most successful sessions share common characteristics that differentiate them from typical brainstorming meetings.

## The Problem with Traditional Brainstorming

Most brainstorming sessions fail because they focus solely on idea generation without considering implementation constraints or business viability...`,
    tags: ['Innovation', 'Workshops', 'Facilitation'],
    published: true,
    featured: false,
    publishedAt: new Date('2023-12-20'),
    coverImage: '/api/placeholder/800/400'
  }
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const otherPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Insights & <span className="gradient-text">Perspectives</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts on technology leadership, strategic consulting, innovation, 
              and the evolving landscape of software development and business strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Featured Posts</h2>
                <p className="text-lg text-muted-foreground">
                  In-depth articles on the topics that matter most
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="card group hover:shadow-lg transition-shadow">
                    <div className="card-content space-y-4">
                      {/* Cover Image Placeholder */}
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <span className="text-muted-foreground">Article Image</span>
                      </div>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {getReadingTime(post.content)} min read
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="pt-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-sm text-primary hover:underline group"
                        >
                          Read Full Article
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">All Posts</h2>
              <p className="text-lg text-muted-foreground">
                Browse all articles and insights
              </p>
            </div>

            <div className="space-y-8">
              {otherPosts.map((post) => (
                <article key={post.id} className="card group hover:shadow-lg transition-shadow">
                  <div className="card-content">
                    <div className="grid md:grid-cols-4 gap-6">
                      {/* Image */}
                      <div className="md:col-span-1">
                        <div className="aspect-video md:aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">Article</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-3 space-y-4">
                        {/* Meta */}
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {getReadingTime(post.content)} min read
                          </span>
                        </div>

                        {/* Title & Excerpt */}
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>
                          <p className="text-muted-foreground">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Read More */}
                        <div>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-sm text-primary hover:underline group"
                          >
                            Read More
                            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground">
              Get notified when I publish new insights on technology leadership, 
              strategic consulting, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input flex-1"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              No spam, unsubscribe at any time. I respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 