import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { CONTACT_CONFIG } from '@/lib/constants'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address').max(255),
  projectType: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(CONTACT_CONFIG.maxMessageLength),
})

// Basic spam detection
function detectSpam(message: string, email: string): boolean {
  const lowerMessage = message.toLowerCase()
  const lowerEmail = email.toLowerCase()
  
  // Check for spam keywords
  const hasSpamKeywords = CONTACT_CONFIG.spamKeywords.some(keyword => 
    lowerMessage.includes(keyword) || lowerEmail.includes(keyword)
  )
  
  // Check for excessive links
  const linkCount = (message.match(/https?:\/\//g) || []).length
  if (linkCount > 2) return true
  
  // Check for repeated characters/words
  const hasRepeatedChars = /(.)\1{10,}/.test(message)
  if (hasRepeatedChars) return true
  
  return hasSpamKeywords
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const result = contactFormSchema.safeParse(body)
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.issues },
        { status: 400 }
      )
    }
    
    const { name, email, projectType, message } = result.data
    
    // Basic spam detection
    if (detectSpam(message, email)) {
      console.log('Spam detected:', { email, name })
      // Return success to avoid revealing spam detection
      return NextResponse.json({ success: true })
    }
    
    // Rate limiting check (simple IP-based)
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown'
    
    // Check for recent submissions from same IP
    const recentSubmissions = await prisma.contactSubmission.count({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 60 * 60 * 1000), // Last hour
        },
        // Note: We'd need to add IP field to store this properly
      },
    })
    
    if (recentSubmissions > 5) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }
    
    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        projectType,
        message,
        status: 'new',
      },
    })
    
    // TODO: Send email notification
    // This would integrate with your email service (Resend, SendGrid, etc.)
    console.log('New contact submission:', submission.id)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! I\'ll get back to you within 24 hours.' 
    })
    
  } catch (error) {
    console.error('Contact API error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
} 