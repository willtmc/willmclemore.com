import { NextRequest, NextResponse } from 'next/server'
import { detectCrawler, logCrawlerHit } from '@/lib/crawler-tracking'

// Static page content as markdown (extracted from page components)
const STATIC_PAGES: Record<string, { title: string; description: string; content: string }> = {
  about: {
    title: 'About Will McLemore',
    description: 'From Yale to Sotheby\'s to building AI-powered auction systems. The story of an auctioneer who chose hammers over stethoscopes.',
    content: `# About Will McLemore

Yale grad who chose hammers over stethoscopes. Building the future of auctions through AI automation.

## The Origin Story

Born in Nashville, Tennessee, I grew up around the auction business thanks to my dad, who worked as a bankruptcy trustee. While he hoped I'd become a doctor, he took me to too many auctions when I was young. The energy, the strategy, the split-second decisions - I was hooked.

After graduating from Yale, I dove headfirst into the auction world instead of med school. Started at Sotheby's in New York City, dealing with million-dollar art pieces and learning the high-end auction game.

But I wanted to understand the full spectrum. So I moved to J.P. King Auction Company in Gadsden, Alabama, then to Richie Brothers Auctioneers - the world's largest heavy equipment auctioneer. From fine art to bulldozers, I've probably seen it all.

In 2006, I founded McLemore Auction Company. Now, 18 years later, we've got six auction managers and handle everything from estate auctions to major real estate sales. But here's the kicker - I'm not content to just do things the old way.

## Career Journey

- **Yale University** - Graduated with plans that didn't include becoming an auctioneer
- **Sotheby's, New York** - Started at the world's largest art auction house
- **J.P. King & Richie Brothers** - Learned the full spectrum from art to heavy equipment
- **McLemore Auction Company (2006-Present)** - Founded and built a thriving business with six auction managers
- **AI Automation Focus (2024)** - Building custom CRM and automation systems

## What Drives Me Now

### AI Automation
Building custom systems to automate auction processes. If my job's going to get automated, I want to be the one doing the automating. Currently developing CRM and project management tools specifically for the auction industry.

### Strategic Partnerships
Looking for joint ventures and partnerships to handle larger clients. Interested in connecting with like-minded business owners who are serious about using technology to scale.

### Consulting & Advisory
Available for consulting on AI tools integration, speaking engagements, and board positions. Also available for expert witness work in auction-related legal matters.

## Beyond Business

- **Reading** - Always looking for new perspectives and ideas
- **Vizsla Dogs** - Proud owner of these amazing Hungarian hunting dogs
- **Flat Picking Guitar** - Big fan of Tony Rice and the art of flat picking

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
