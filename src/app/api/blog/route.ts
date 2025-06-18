import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { parseBlogContent, validateFrontmatter } from '@/lib/blog-content'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const featured = searchParams.get('featured')
    const published = searchParams.get('published') !== 'false'
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1
    const pageSize = limit || 10

    const where = {
      published: published,
      ...(featured !== null && { featured: featured === 'true' })
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: { publishedAt: 'desc' },
        skip: (page - 1) * pageSize,
        take: pageSize,
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          content: true,
          coverImage: true,
          published: true,
          featured: true,
          publishedAt: true,
          tags: true,
          createdAt: true,
          updatedAt: true,
        }
      }),
      prisma.blogPost.count({ where })
    ])

    return NextResponse.json({
      posts,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    let { title, content, excerpt, tags, featured, published, coverImage, seoTitle, seoDescription } = body

    // Check if content has frontmatter
    const { content: parsedContent, frontmatter, hasValidFrontmatter } = parseBlogContent(content)

    // If frontmatter exists, use it to override/supplement the provided data
    if (hasValidFrontmatter) {
      title = frontmatter.title || title
      excerpt = frontmatter.excerpt || excerpt
      tags = Array.isArray(frontmatter.tags) ? frontmatter.tags.join(', ') : (frontmatter.tags || tags)
      featured = frontmatter.featured !== undefined ? frontmatter.featured : featured
      coverImage = frontmatter.coverImage || coverImage
      seoTitle = frontmatter.seoTitle || seoTitle
      seoDescription = frontmatter.seoDescription || seoDescription
      
      // Update content to remove frontmatter
      content = parsedContent
    }

    // Validate required fields
    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      )
    }

    // Generate slug from title or frontmatter
    const slug = (frontmatter.slug || title)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        tags,
        featured: featured || false,
        published: published || false,
        publishedAt: published ? new Date() : null,
        coverImage,
        seoTitle,
        seoDescription,
      }
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}