import { NextRequest, NextResponse } from 'next/server'
import { generateRSS, generateAtom, generateJSON } from '@/lib/rss'

export const dynamic = 'force-dynamic'
export const revalidate = 300 // Cache for 5 minutes

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const format = searchParams.get('format') || 'rss'
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 20
    const includeContent = searchParams.get('content') !== 'false'
    
    let content: string
    let contentType: string
    
    switch (format.toLowerCase()) {
      case 'atom':
        content = await generateAtom({ limit, includeContent })
        contentType = 'application/atom+xml; charset=utf-8'
        break
      case 'json':
        content = await generateJSON({ limit, includeContent })
        contentType = 'application/feed+json; charset=utf-8'
        break
      case 'rss':
      default:
        content = await generateRSS({ limit, includeContent })
        contentType = 'application/rss+xml; charset=utf-8'
        break
    }
    
    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'X-Content-Type-Options': 'nosniff',
      }
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    return NextResponse.json(
      { error: 'Failed to generate RSS feed' },
      { status: 500 }
    )
  }
}