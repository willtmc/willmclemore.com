import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const category = searchParams.get('category')
    const sortBy = searchParams.get('sortBy') || 'priority'

    const where: any = {}
    if (status && status !== 'all') {
      where.status = status
    }
    if (category && category !== 'all') {
      where.category = category
    }

    let orderBy: any = { priority: 'desc' }
    if (sortBy === 'created') {
      orderBy = { createdAt: 'desc' }
    } else if (sortBy === 'status') {
      orderBy = { status: 'asc' }
    }

    const ideas = await prisma.contentIdea.findMany({
      where,
      include: {
        trend: true,
        blogPost: true
      },
      orderBy
    })

    return NextResponse.json({ ideas })
  } catch (error) {
    console.error('Error fetching content ideas:', error)
    return NextResponse.json(
      { error: 'Failed to fetch content ideas' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const idea = await prisma.contentIdea.create({
      data: {
        title: body.title,
        description: body.description,
        category: body.category,
        priority: body.priority || 5,
        status: body.status || 'idea',
        angle: body.angle,
        estimatedLength: body.estimatedLength,
        targetKeywords: body.targetKeywords,
        aiModel: body.aiModel,
        trendId: body.trendId
      }
    })

    return NextResponse.json(idea, { status: 201 })
  } catch (error) {
    console.error('Error creating content idea:', error)
    return NextResponse.json(
      { error: 'Failed to create content idea' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body
    
    if (!id) {
      return NextResponse.json(
        { error: 'Content idea ID is required' },
        { status: 400 }
      )
    }

    const idea = await prisma.contentIdea.update({
      where: { id },
      data: updateData
    })

    return NextResponse.json(idea)
  } catch (error) {
    console.error('Error updating content idea:', error)
    return NextResponse.json(
      { error: 'Failed to update content idea' },
      { status: 500 }
    )
  }
}