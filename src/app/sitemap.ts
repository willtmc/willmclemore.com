import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://willmclemore.com'
  
  let blogPosts: Array<{ slug: string; updatedAt: Date }> = []
  
  // Try to get blog posts, but don't fail if database is unavailable
  try {
    blogPosts = await prisma.blogPost.findMany({
      where: {
        published: true
      },
      select: {
        slug: true,
        updatedAt: true,
      },
      orderBy: {
        updatedAt: 'desc'
      }
    })
  } catch (error) {
    console.log('Could not fetch blog posts for sitemap, using static pages only')
  }
  
  // Get all published projects
  // TODO: ProjectShowcase model doesn't have a slug field yet
  // const projects = await prisma.projectShowcase.findMany({
  //   where: {
  //     featured: true
  //   },
  //   select: {
  //     id: true,
  //     updatedAt: true,
  //   },
  //   orderBy: {
  //     updatedAt: 'desc'
  //   }
  // })
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]
  
  // Blog post pages
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  // Project pages
  // TODO: Enable when ProjectShowcase has slug support
  // const projectPages = projects.map((project) => ({
  //   url: `${baseUrl}/projects/${project.id}`,
  //   lastModified: project.updatedAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))
  
  return [...staticPages, ...blogPages]
}