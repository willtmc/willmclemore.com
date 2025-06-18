'use client'

import { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import { Copy, Check, FileCode2 } from 'lucide-react'
import { useTheme } from 'next-themes'

interface CodeBlockWithLineNumbersProps {
  children: string
  className?: string
  title?: string
  showLineNumbers?: boolean
  highlightLines?: number[]
}

const languageNames: Record<string, string> = {
  js: 'JavaScript',
  javascript: 'JavaScript',
  jsx: 'JSX',
  ts: 'TypeScript',
  typescript: 'TypeScript',
  tsx: 'TSX',
  python: 'Python',
  py: 'Python',
  css: 'CSS',
  scss: 'SCSS',
  html: 'HTML',
  bash: 'Bash',
  shell: 'Shell',
  json: 'JSON',
  yaml: 'YAML',
  yml: 'YAML',
  md: 'Markdown',
  mdx: 'MDX',
  sql: 'SQL',
  graphql: 'GraphQL',
  go: 'Go',
  rust: 'Rust',
  java: 'Java',
  php: 'PHP',
  ruby: 'Ruby',
  c: 'C',
  cpp: 'C++',
  csharp: 'C#',
  swift: 'Swift',
  kotlin: 'Kotlin',
  dart: 'Dart',
  r: 'R',
}

export function CodeBlockWithLineNumbers({ 
  children, 
  className, 
  title, 
  showLineNumbers = true,
  highlightLines = []
}: CodeBlockWithLineNumbersProps) {
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()
  
  // Extract language from className
  const language = className?.replace(/language-/, '') || 'text'
  const languageLabel = languageNames[language] || language.toUpperCase()
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(children.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group my-6 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileCode2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          {title ? (
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{title}</span>
          ) : (
            <span className="text-sm text-slate-500 dark:text-slate-400">{languageLabel}</span>
          )}
        </div>
        
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 
                     text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300
                     transition-colors duration-200"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
      
      {/* Code */}
      <Highlight
        theme={theme === 'dark' ? themes.nightOwl : themes.github}
        code={children.trim()}
        language={language}
      >
        {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
          <pre 
            className={`${highlightClassName} text-sm overflow-x-auto`}
            style={{
              ...style,
              backgroundColor: theme === 'dark' ? '#011627' : '#ffffff',
              margin: 0,
              padding: 0,
            }}
          >
            <code>
              {tokens.map((line, i) => {
                const lineNumber = i + 1
                const isHighlighted = highlightLines.includes(lineNumber)
                
                return (
                  <div 
                    key={i} 
                    {...getLineProps({ line, key: i })}
                    className={`
                      ${isHighlighted ? 'bg-blue-500/10 dark:bg-blue-400/10' : ''}
                      ${showLineNumbers ? 'grid grid-cols-[auto_1fr]' : ''}
                    `}
                  >
                    {showLineNumbers && (
                      <span 
                        className={`
                          select-none pr-4 pl-4 text-right
                          ${isHighlighted 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-slate-400 dark:text-slate-600'
                          }
                        `}
                      >
                        {lineNumber}
                      </span>
                    )}
                    <span className={`pr-4 ${!showLineNumbers ? 'pl-4' : ''}`}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </span>
                  </div>
                )
              })}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  )
}