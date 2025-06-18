'use client'

import { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import { Copy, Check } from 'lucide-react'
import { useTheme } from 'next-themes'

interface CodeBlockProps {
  children: string
  className?: string
  title?: string
}

export function CodeBlock({ children, className, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()
  
  // Extract language from className (e.g., "language-javascript" -> "javascript")
  const language = className?.replace(/language-/, '') || 'text'
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(children.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group my-6">
      {title && (
        <div className="bg-slate-700 dark:bg-slate-800 text-slate-200 px-4 py-2 text-sm font-mono rounded-t-lg">
          {title}
        </div>
      )}
      <div className={`relative ${title ? 'rounded-b-lg' : 'rounded-lg'} overflow-hidden`}>
        <Highlight
          theme={theme === 'dark' ? themes.nightOwl : themes.github}
          code={children.trim()}
          language={language}
        >
          {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
            <pre 
              className={`${highlightClassName} text-sm overflow-x-auto p-4`}
              style={{
                ...style,
                backgroundColor: theme === 'dark' ? '#011627' : '#f6f8fa',
                margin: 0,
              }}
            >
              <code>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
        
        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 rounded-md bg-slate-700/50 dark:bg-slate-800/50 
                     text-slate-300 hover:text-white opacity-0 group-hover:opacity-100 
                     transition-opacity duration-200"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  )
}

// Inline code component
export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono text-slate-800 dark:text-slate-200">
      {children}
    </code>
  )
}