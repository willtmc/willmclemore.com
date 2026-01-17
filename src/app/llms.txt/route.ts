import { NextRequest, NextResponse } from 'next/server'
import { getPosts } from '@/lib/blog'
import { detectCrawler, logCrawlerHit } from '@/lib/crawler-tracking'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

export async function GET(request: NextRequest) {
  // Track AI crawler hits
  const userAgent = request.headers.get('user-agent') || ''
  const crawler = detectCrawler(userAgent)
  if (crawler) {
    logCrawlerHit(crawler, '/llms.txt', userAgent)
  }

  const posts = await getPosts({ published: true })

  const llmsTxt = `# Will McLemore

> Yale grad who chose hammers over stethoscopes. Building the future of auctions through AI automation.

This site contains blog posts and information about Will McLemore, founder of McLemore Auction Company.

## Site Information

- Author: Will McLemore
- Email: will@mclemoreauction.com
- Company: McLemore Auction Company
- Location: Nashville, Tennessee

## Key Topics

- Auction industry insights
- AI and automation in small business
- Entrepreneurship and business strategy
- Technology integration

## Pages

- [About](/about.md): Background, career journey, and current focus
- [Contact](/contact.md): Ways to get in touch
- [Projects](/projects.md): Current projects and initiatives

## Blog Posts

${posts.map(post => `- [${post.title}](/blog/${post.slug}.md): ${post.excerpt || 'Read the full post'}`).join('\n')}

## Feeds

- RSS: /feed.xml
- Atom: /api/rss?format=atom
- JSON Feed: /api/rss?format=json

## For AI Agents

All pages on this site support markdown alternatives:
- Append \`.md\` to any URL to get markdown
- Set \`Accept: text/markdown\` header
- This file lists all available content

Example: \`/blog/my-post\` → \`/blog/my-post.md\`
`

  return new NextResponse(llmsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
