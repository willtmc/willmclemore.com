import { NextRequest, NextResponse } from 'next/server'
import { getStats } from '@/lib/crawler-tracking'

export async function GET(request: NextRequest) {
  // Simple auth via query param or header
  const authToken = request.nextUrl.searchParams.get('token') || 
                    request.headers.get('x-crawler-stats-token')
  
  const expectedToken = process.env.CRAWLER_STATS_TOKEN
  
  if (!expectedToken || authToken !== expectedToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  const hours = parseInt(request.nextUrl.searchParams.get('hours') || '24')
  const stats = getStats(hours)
  
  return NextResponse.json(stats)
}
