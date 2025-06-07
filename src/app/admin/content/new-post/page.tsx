'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Eye } from 'lucide-react'

export default function NewPostPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    tags: '',
    featured: false,
    published: false,
    seoTitle: '',
    seoDescription: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        const post = await res.json()
        router.push('/admin/content?tab=posts')
      } else {
        alert('Failed to create post')
      }
    } catch (error) {
      console.error('Error creating post:', error)
      alert('Error creating post')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/admin/content?tab=posts" 
              className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Content Pipeline
            </Link>
            <h1 className="text-3xl font-bold">Create New Blog Post</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="input w-full"
                required
              />
            </div>

            {/* Excerpt */}
            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={3}
                className="input w-full"
                placeholder="Brief summary of the post..."
              />
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium mb-2">
                Content *
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={15}
                className="input w-full font-mono text-sm"
                required
                placeholder="Write your blog post content here..."
              />
              <p className="text-xs text-slate-500 mt-1">
                Separate paragraphs with double line breaks
              </p>
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium mb-2">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="input w-full"
                placeholder="AI Automation, Auction Industry, Business Systems"
              />
              <p className="text-xs text-slate-500 mt-1">
                Comma-separated list of tags
              </p>
            </div>

            {/* SEO Fields */}
            <div className="space-y-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <h3 className="font-medium">SEO Settings (Optional)</h3>
              
              <div>
                <label htmlFor="seoTitle" className="block text-sm font-medium mb-2">
                  SEO Title
                </label>
                <input
                  type="text"
                  id="seoTitle"
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="Custom title for search engines"
                />
              </div>

              <div>
                <label htmlFor="seoDescription" className="block text-sm font-medium mb-2">
                  SEO Description
                </label>
                <textarea
                  id="seoDescription"
                  name="seoDescription"
                  value={formData.seoDescription}
                  onChange={handleChange}
                  rows={2}
                  className="input w-full"
                  placeholder="Custom description for search engines"
                />
              </div>
            </div>

            {/* Publishing Options */}
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">Featured Post</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">Publish Immediately</span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                {loading ? 'Creating...' : 'Create Post'}
              </button>
              
              <Link
                href="/admin/content?tab=posts"
                className="btn btn-secondary"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}