import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await prisma.blogPost.findFirst({
      where: {
        OR: [
          { slug: params.slug },
          { id: params.slug }
        ]
      }
    })

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const body = await request.json()
    const { title, content, excerpt, tags, featured, published, coverImage, seoTitle, seoDescription } = body

    // Find the post first
    const existingPost = await prisma.blogPost.findFirst({
      where: {
        OR: [
          { slug: params.slug },
          { id: params.slug }
        ]
      }
    })

    if (!existingPost) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }

    // Generate new slug if title changed
    let slug = existingPost.slug
    if (title && title !== existingPost.title) {
      slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
    }

    const post = await prisma.blogPost.update({
      where: { id: existingPost.id },
      data: {
        ...(title && { title }),
        ...(title && { slug }),
        ...(content !== undefined && { content }),
        ...(excerpt !== undefined && { excerpt }),
        ...(tags !== undefined && { tags }),
        ...(featured !== undefined && { featured }),
        ...(published !== undefined && { 
          published,
          publishedAt: published && !existingPost.published ? new Date() : existingPost.publishedAt
        }),
        ...(coverImage !== undefined && { coverImage }),
        ...(seoTitle !== undefined && { seoTitle }),
        ...(seoDescription !== undefined && { seoDescription }),
      }
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error updating blog post:', error)
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await prisma.blogPost.findFirst({
      where: {
        OR: [
          { slug: params.slug },
          { id: params.slug }
        ]
      }
    })

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }

    await prisma.blogPost.delete({
      where: { id: post.id }
    })

    return NextResponse.json({ message: 'Blog post deleted successfully' })
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    )
  }
}