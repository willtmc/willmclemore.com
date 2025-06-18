'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useMDXComponents } from '@/mdx-components'

interface MDXClientWrapperProps {
  source: MDXRemoteSerializeResult
}

export function MDXClientWrapper({ source }: MDXClientWrapperProps) {
  const components = useMDXComponents({})
  
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <MDXRemote {...source} components={components} />
    </div>
  )
}