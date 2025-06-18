import matter from 'gray-matter'
import readingTime from 'reading-time'
import fs from 'fs'
import path from 'path'

export interface Frontmatter {
  title: string
  date: string
  excerpt?: string
  tags?: string[]
  author?: string
  featured?: boolean
  coverImage?: string
  [key: string]: any
}

export interface MDXFile {
  slug: string
  frontmatter: Frontmatter
  content: string
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
}

export function parseMDXFile(fileContent: string): Omit<MDXFile, 'slug'> {
  const { data, content } = matter(fileContent)
  const stats = readingTime(content)
  
  return {
    frontmatter: data as Frontmatter,
    content,
    readingTime: stats
  }
}

export function getMDXFiles(directory: string): MDXFile[] {
  const dirPath = path.join(process.cwd(), directory)
  
  if (!fs.existsSync(dirPath)) {
    return []
  }
  
  const files = fs.readdirSync(dirPath)
  
  const mdxFiles = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(dirPath, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { frontmatter, content, readingTime } = parseMDXFile(fileContent)
      const slug = file.replace(/\.(mdx|md)$/, '')
      
      return {
        slug,
        frontmatter,
        content,
        readingTime
      }
    })
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date || 0)
      const dateB = new Date(b.frontmatter.date || 0)
      return dateB.getTime() - dateA.getTime()
    })
  
  return mdxFiles
}

export function getMDXFileBySlug(directory: string, slug: string): MDXFile | null {
  const dirPath = path.join(process.cwd(), directory)
  
  // Try .mdx first, then .md
  const extensions = ['.mdx', '.md']
  
  for (const ext of extensions) {
    const filePath = path.join(dirPath, `${slug}${ext}`)
    
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { frontmatter, content, readingTime } = parseMDXFile(fileContent)
      
      return {
        slug,
        frontmatter,
        content,
        readingTime
      }
    }
  }
  
  return null
}