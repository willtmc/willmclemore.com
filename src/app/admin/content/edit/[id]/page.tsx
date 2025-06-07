'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Eye, Loader2 } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  tags: string | null
  featured: boolean
  published: boolean
  seoTitle: string | null
  seoDescription: string | null
  coverImage: string | null
}

export default function EditPostPage() {
  const router = useRouter()
  const params = useParams()
  const postId = params.id as string
  
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    tags: '',
    featured: false,
    published: false,
    seoTitle: '',
    seoDescription: '',
    coverImage: '',
  })

  useEffect(() => {
    fetchPost()
  }, [postId])

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/blog/${postId}`)
      if (res.ok) {
        const data = await res.json()
        setPost(data)
        setFormData({
          title: data.title || '',
          content: data.content || '',
          excerpt: data.excerpt || '',
          tags: data.tags || '',
          featured: data.featured || false,
          published: data.published || false,
          seoTitle: data.seoTitle || '',
          seoDescription: data.seoDescription || '',
          coverImage: data.coverImage || '',
        })
      } else {
        alert('Post not found')
        router.push('/admin/content?tab=posts')
      }
    } catch (error) {
      console.error('Error fetching post:', error)
      alert('Error loading post')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const res = await fetch(`/api/blog/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        router.push('/admin/content?tab=posts')
      } else {
        alert('Failed to update post')
      }
    } catch (error) {
      console.error('Error updating post:', error)
      alert('Error updating post')
    } finally {
      setSaving(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400">Loading post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">Post not found</p>
          <Link href="/admin/content?tab=posts" className="btn btn-primary">
            Back to Posts
          </Link>
        </div>
      </div>
    )
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
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Edit Blog Post</h1>
              <Link
                href={`/blog/${post.slug}`}
                target="_blank"
                className="btn btn-secondary flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Post
              </Link>
            </div>
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

            {/* Cover Image */}
            <div>
              <label htmlFor="coverImage" className="block text-sm font-medium mb-2">
                Cover Image URL
              </label>
              <input
                type="url"
                id="coverImage"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleChange}
                className="input w-full"
                placeholder="https://example.com/image.jpg"
              />
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
                <span className="text-sm font-medium">Published</span>
              </label>
            </div>

            {/* Post Info */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Post ID:</span>
                <code className="font-mono">{post.id}</code>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Slug:</span>
                <code className="font-mono">{post.slug}</code>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Note: Changing the title will update the slug
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-6">
              <button
                type="submit"
                disabled={saving}
                className="btn btn-primary flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                {saving ? 'Saving...' : 'Save Changes'}
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