import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import Image from 'next/image'
import { CodeBlock, InlineCode } from '@/components/CodeBlock'
import { CodeBlockWithLineNumbers } from '@/components/CodeBlockWithLineNumbers'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Customize default MDX components
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-3 mt-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-2 mt-4">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base text-muted-foreground mb-4 leading-relaxed">
        {children}
      </p>
    ),
    a: ({ href, children }) => {
      const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
      
      if (isInternalLink) {
        return (
          <Link
            href={href}
            className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
          >
            {children}
          </Link>
        )
      }
      
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
        >
          {children}
        </a>
      )
    },
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="ml-4">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/20 pl-4 my-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      // Check if this is an inline code or part of a code block
      const isInline = typeof children === 'string'
      
      if (isInline) {
        return <InlineCode>{children}</InlineCode>
      }
      
      // This is handled by the pre component for code blocks
      return <code className={className}>{children}</code>
    },
    pre: ({ children, ...props }) => {
      // Extract props from the code element
      const codeElement = children as any
      
      if (codeElement?.props?.className || codeElement?.props?.children) {
        const className = codeElement.props.className || ''
        const codeContent = codeElement.props.children || ''
        const title = codeElement.props.title || props.title
        
        return (
          <CodeBlock 
            className={className}
            title={title}
          >
            {String(codeContent)}
          </CodeBlock>
        )
      }
      
      // Fallback for non-standard pre blocks
      return (
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...props}>
          {children}
        </pre>
      )
    },
    // Add custom components for advanced code blocks
    CodeBlock,
    CodeBlockWithLineNumbers,
    img: (props) => (
      <Image
        {...props}
        alt={props.alt || ''}
        className="rounded-lg my-6"
      />
    ),
    hr: () => <hr className="my-8 border-border" />,
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="w-full border-collapse">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border px-4 py-2 text-left font-semibold bg-muted">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2">
        {children}
      </td>
    ),
    ...components,
  }
}