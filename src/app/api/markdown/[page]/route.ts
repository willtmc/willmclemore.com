import { NextRequest, NextResponse } from 'next/server'
import { detectCrawler, logCrawlerHit } from '@/lib/crawler-tracking'

// Static page content as markdown (extracted from page components)
const STATIC_PAGES: Record<string, { title: string; description: string; content: string }> = {
  about: {
    title: 'About Will McLemore',
    description: 'Auctioneer, builder, automator. Nearly two decades running McLemore Auction Company in Nashville.',
    content: `# About Will McLemore

I run [McLemore Auction Company](https://mclemoreauction.com) in Nashville — nearly two decades, 350+ auctions a year. I'm obsessed with using AI and automation to eliminate the repetitive work so we can focus on what actually creates value: understanding what people are selling, finding the right buyers, and getting the best price.

I built our platform from scratch. It handles everything from intake to invoicing, and I'm pushing it further every day — AI-written descriptions, automated valuations, intelligent routing, and systems that handle the thousand small tasks that eat up an auctioneer's day.

Before Nashville, I worked at Ritchie Bros (world's largest industrial auctioneer), J.P. King Auction Company, and Sotheby's. I studied English at Yale, which taught me to read carefully and write clearly — turns out that matters more than most things.

*"Automate yourself before someone else does."*

## What I'm Working On

### AI for Auctions
Building systems that write descriptions, research values, route customer inquiries, and handle the thousand small tasks that eat up an auctioneer's day.

### Partnerships
I like working with other auctioneers. If you have a sale that needs Nashville expertise or want to collaborate on something bigger, let's talk.

## Beyond Business

- **Reading** - Always looking for new perspectives and ideas
- **Vizsla Dogs** - Hungarian hunting dogs. As energetic as I am.
- **Flat Picking Guitar** - Big fan of Tony Rice. Precision and timing.

## Contact

Interested in AI automation, auction industry insights, or just want to have an interesting conversation? Visit [willmclemore.com/contact](/contact) to get in touch.
`,
  },
  contact: {
    title: 'Contact Will McLemore',
    description: 'Get in touch with Will McLemore for consulting, speaking, or collaboration.',
    content: `# Contact Will McLemore

Have a question, interested in consulting, or want to discuss a potential collaboration? I'd love to hear from you.

## Ways to Connect

- **Email**: will@mclemoreauction.com
- **Website**: [willmclemore.com](https://willmclemore.com)
- **Company**: [McLemore Auction Company](https://mclemoreauction.com)

## What I'm Looking For

- **AI Automation Consulting** - Help integrating AI tools into your business
- **Strategic Partnerships** - Joint ventures in the auction industry
- **Speaking Engagements** - Topics: AI, automation, auction industry
- **Board Positions** - Advisory roles for tech-forward companies
- **Expert Witness** - Auction-related legal matters

Looking forward to connecting!
`,
  },
  projects: {
    title: 'Projects',
    description: 'Current projects and initiatives by Will McLemore.',
    content: `# Projects

A selection of projects and initiatives I'm currently working on.

## Current Focus

### McLemore Auction Company
My primary business - a full-service auction company handling real estate, personal property, and estate auctions across multiple markets.

### Gavel
Custom CRM and project management system built specifically for the auction industry. Integrates AI automation for routine tasks.

### AI Automation Research
Exploring ways to automate auction processes using modern AI tools. Goal: automate everything that can be automated.

## Open to Collaboration

If you're working on something interesting in:
- Auction technology
- AI automation for small businesses
- CRM systems for niche industries

Let's talk! Reach out at [willmclemore.com/contact](/contact).
`,
  },
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ page: string }> }
) {
  // Track AI crawler hits
  const userAgent = request.headers.get('user-agent') || ''
  const crawler = detectCrawler(userAgent)
  
  const { page } = await params
  
  if (crawler) {
    logCrawlerHit(crawler, `/${page}.md`, userAgent)
  }

  const pageData = STATIC_PAGES[page]

  if (!pageData) {
    return new NextResponse('# 404 Not Found\n\nThis page does not exist or does not have a markdown version.', {
      status: 404,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
      },
    })
  }

  // Build frontmatter
  const frontmatter = [
    '---',
    `title: '${pageData.title}'`,
    `description: '${pageData.description}'`,
    `author: Will McLemore`,
    `url: /${page}`,
    '---',
    '',
  ].join('\n')

  const markdown = frontmatter + pageData.content

  return new NextResponse(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800',
    },
  })
}
