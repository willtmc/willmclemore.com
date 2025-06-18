import { generateRSS } from '@/lib/rss'

export const dynamic = 'force-dynamic'
export const revalidate = 300 // Cache for 5 minutes

export async function GET() {
  try {
    const content = await generateRSS({ limit: 50, includeContent: true })
    
    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'X-Content-Type-Options': 'nosniff',
      }
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    return new Response('Failed to generate RSS feed', { status: 500 })
  }
}