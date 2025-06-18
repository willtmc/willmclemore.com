import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '@/mdx-components'

interface MDXContentProps {
  source: string
}

export async function MDXContent({ source }: MDXContentProps) {
  const components = useMDXComponents({})
  
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  )
}