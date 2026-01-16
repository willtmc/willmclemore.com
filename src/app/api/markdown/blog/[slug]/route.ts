import { NextRequest, NextResponse } from 'next/server'
import { getPostBySlug, formatDate } from '@/lib/blog'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return new NextResponse('# 404 Not Found\n\nThis blog post does not exist.', {
      status: 404,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
      },
    })
  }

  // Build frontmatter
  const frontmatter = [
    '---',
    `title: '${post.title.replace(/'/g, "''")}'`,
    post.publishedAt ? `date: '${post.publishedAt.toISOString()}'` : null,
    `author: Will McLemore`,
    post.excerpt ? `summary: '${post.excerpt.replace(/'/g, "''")}'` : null,
    post.coverImage ? `image: ${post.coverImage}` : null,
    post.tags ? `tags:\n${post.tags.split(',').map(t => `  - '${t.trim()}'`).join('\n')}` : null,
    `published: ${post.published}`,
    `type: blog`,
    `url: /blog/${post.slug}`,
    '---',
    '',
  ].filter(Boolean).join('\n')

  const markdown = frontmatter + post.content

  return new NextResponse(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
