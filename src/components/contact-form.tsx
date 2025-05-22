"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Loader2 } from 'lucide-react'
import { PROJECT_TYPES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be less than 2000 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800">
          <p className="text-sm text-green-700 dark:text-green-400">
            Thanks for your message! I'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800">
          <p className="text-sm text-red-700 dark:text-red-400">
            Sorry, there was an error sending your message. Please try again or email me directly.
          </p>
        </div>
      )}

      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name *
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className={cn(
            "input",
            errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500"
          )}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={cn(
            "input",
            errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500"
          )}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* Project Type Field */}
      <div className="space-y-2">
        <label htmlFor="projectType" className="text-sm font-medium">
          Project Type
        </label>
        <select
          id="projectType"
          {...register('projectType')}
          className="input"
        >
          <option value="">Select a project type (optional)</option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.projectType.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message *
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message')}
          className={cn(
            "textarea",
            errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500"
          )}
          placeholder="Tell me about your project, challenge, or how I can help..."
        />
        {errors.message && (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
        )}
        <p className="text-xs text-muted-foreground">
          Please include relevant details about your timeline, budget, and specific needs.
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex items-center space-x-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "btn-primary flex items-center space-x-2",
            isSubmitting && "opacity-50 cursor-not-allowed"
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
        
        <p className="text-xs text-muted-foreground">
          Typically respond within 24 hours
        </p>
      </div>

      {/* Privacy Note */}
      <div className="pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          Your information will be kept confidential and used only to respond to your inquiry. 
          I respect your privacy and will never share your details with third parties.
        </p>
      </div>
    </form>
  )
} 