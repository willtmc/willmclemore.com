import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

export interface ParsedMDX {
  content: string
  frontmatter: Record<string, any>
}

export function parseFrontmatter(source: string): ParsedMDX {
  const { content, data } = matter(source)
  return {
    content,
    frontmatter: data
  }
}

export async function serializeMDX(content: string) {
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm, // GitHub Flavored Markdown
      ],
      rehypePlugins: [
        rehypeSlug, // Add IDs to headings
        rehypeCodeTitles, // Add titles to code blocks
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
        rehypePrism, // Syntax highlighting
      ],
    },
  })

  return mdxSource
}

export async function serializeMDXWithFrontmatter(source: string) {
  const { content, frontmatter } = parseFrontmatter(source)
  const mdxSource = await serializeMDX(content)
  
  return {
    mdxSource,
    frontmatter
  }
}

// Helper to check if content contains MDX-specific syntax
export function isMDXContent(content: string): boolean {
  // Check for JSX tags or import statements
  const mdxPatterns = [
    /<[A-Z][a-zA-Z]*/, // JSX components
    /import\s+.*\s+from/, // Import statements
    /export\s+/, // Export statements
    /{[^}]*}/, // JSX expressions
  ]
  
  return mdxPatterns.some(pattern => pattern.test(content))
}

// Convert plain markdown to MDX-compatible format
export function markdownToMDX(content: string): string {
  // This is a simple conversion - extend as needed
  return content
    .replace(/```(\w+)\n/g, '```$1\n') // Ensure code blocks have language
    .replace(/\n\n/g, '\n\n') // Normalize paragraph breaks
}