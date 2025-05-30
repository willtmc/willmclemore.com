import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    const where: any = {}
    if (category && category !== 'all') {
      where.category = category
    }

    const items = await prisma.intelligenceItem.findMany({
      where,
      include: {
        aiAnalyses: true,
        trends: true
      },
      orderBy: [
        { importance: 'desc' },
        { publishedAt: 'desc' }
      ],
      take: limit,
      skip: offset
    })

    const total = await prisma.intelligenceItem.count({ where })

    return NextResponse.json({
      items,
      total,
      hasMore: offset + limit < total
    })
  } catch (error) {
    console.error('Error fetching intelligence items:', error)
    return NextResponse.json(
      { error: 'Failed to fetch intelligence items' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const item = await prisma.intelligenceItem.create({
      data: {
        title: body.title,
        summary: body.summary,
        url: body.url,
        source: body.source,
        category: body.category,
        importance: body.importance || 5,
        region: body.region,
        content: body.content,
        tags: body.tags?.join(','),
        sentiment: body.sentiment,
        publishedAt: new Date(body.publishedAt)
      }
    })

    return NextResponse.json(item, { status: 201 })
  } catch (error) {
    console.error('Error creating intelligence item:', error)
    return NextResponse.json(
      { error: 'Failed to create intelligence item' },
      { status: 500 }
    )
  }
}