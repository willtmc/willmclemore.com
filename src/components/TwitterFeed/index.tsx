'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { Loader2 } from 'lucide-react'
import styles from './TwitterFeed.module.css'

declare global {
  interface Window {
    twttr: any
  }
}

interface TwitterFeedProps {
  // For timeline
  username?: string
  timeline?: boolean
  tweetLimit?: number
  
  // For single tweet
  tweetId?: string
  
  // Common options
  height?: number
  theme?: 'light' | 'dark' | 'auto'
  hideConversation?: boolean
  hideMedia?: boolean
  hideFooter?: boolean
  hideBorder?: boolean
  hideScrollbar?: boolean
  transparent?: boolean
  align?: 'left' | 'center' | 'right'
  width?: 'auto' | number
  dnt?: boolean
  lang?: string
  
  // Container styling
  className?: string
  containerClassName?: string
  title?: string
  showTitle?: boolean
}

export function TwitterFeed({
  username,
  tweetId,
  timeline = true,
  tweetLimit = 5,
  height = 600,
  theme = 'auto',
  hideConversation = false,
  hideMedia = false,
  hideFooter = false,
  hideBorder = false,
  hideScrollbar = false,
  transparent = false,
  align = 'center',
  width = 'auto',
  dnt = true,
  lang = 'en',
  className = '',
  containerClassName = '',
  title,
  showTitle = true
}: TwitterFeedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const renderWidget = () => {
      if (!containerRef.current || !window.twttr) return

      // Clear previous content
      containerRef.current.innerHTML = ''
      setError(null)
      
      try {
        if (timeline && username) {
          // Render timeline
          window.twttr.widgets.createTimeline(
            {
              sourceType: 'profile',
              screenName: username
            },
            containerRef.current,
            {
              height,
              theme: theme === 'auto' ? undefined : theme,
              chrome: [
                hideFooter && 'nofooter',
                hideBorder && 'noborders',
                hideScrollbar && 'noscrollbar',
                transparent && 'transparent',
                hideMedia && 'nomedia'
              ].filter(Boolean).join(' '),
              tweetLimit,
              width: width === 'auto' ? undefined : width,
              dnt,
              lang
            }
          ).then(() => {
            if (mounted) setIsLoading(false)
          }).catch((err: any) => {
            if (mounted) {
              setError('Failed to load timeline')
              setIsLoading(false)
            }
          })
        } else if (tweetId) {
          // Render single tweet
          window.twttr.widgets.createTweet(
            tweetId,
            containerRef.current,
            {
              theme: theme === 'auto' ? undefined : theme,
              cards: hideMedia ? 'hidden' : undefined,
              conversation: hideConversation ? 'none' : undefined,
              align,
              width: width === 'auto' ? undefined : width,
              dnt,
              lang
            }
          ).then(() => {
            if (mounted) setIsLoading(false)
          }).catch((err: any) => {
            if (mounted) {
              setError('Failed to load tweet')
              setIsLoading(false)
            }
          })
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to initialize Twitter widget')
          setIsLoading(false)
        }
      }
    }

    // Check if widgets are already loaded
    if (window.twttr && window.twttr.widgets) {
      renderWidget()
    } else {
      // Wait for script to load
      const checkInterval = setInterval(() => {
        if (window.twttr && window.twttr.widgets) {
          clearInterval(checkInterval)
          renderWidget()
        }
      }, 100)

      // Timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkInterval)
        if (mounted && isLoading) {
          setError('Twitter widgets failed to load')
          setIsLoading(false)
        }
      }, 10000)
    }

    return () => {
      mounted = false
    }
  }, [username, tweetId, timeline, tweetLimit, height, theme, hideConversation, 
      hideMedia, hideFooter, hideBorder, hideScrollbar, transparent, align, 
      width, dnt, lang])

  const displayTitle = title || (timeline && username ? `@${username}'s Timeline` : 'Tweet')

  return (
    <>
      <Script
        id="twitter-widgets"
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Trigger re-render when script loads
          if (containerRef.current && containerRef.current.innerHTML === '') {
            setIsLoading(true)
          }
        }}
      />
      
      <div className={`${styles.twitterFeedWrapper} ${containerClassName}`}>
        {showTitle && (timeline || tweetId) && (
          <h3 className={styles.feedTitle}>{displayTitle}</h3>
        )}
        
        <div className={`${styles.twitterFeed} ${className}`}>
          {isLoading && (
            <div className={styles.loadingContainer}>
              <Loader2 className={styles.loadingIcon} />
              <p>Loading Twitter content...</p>
            </div>
          )}
          
          {error && (
            <div className={styles.errorContainer}>
              <p className={styles.errorMessage}>{error}</p>
              <p className={styles.errorHint}>
                Make sure you have a stable internet connection and ad blockers are disabled for Twitter.
              </p>
            </div>
          )}
          
          <div 
            ref={containerRef} 
            className={styles.embedContainer}
            style={{ display: isLoading || error ? 'none' : 'block' }}
          />
        </div>
      </div>
    </>
  )
}

// Convenience components
export function TwitterTimeline(props: Omit<TwitterFeedProps, 'timeline' | 'tweetId'>) {
  return <TwitterFeed {...props} timeline={true} />
}

export function TwitterTweet(props: Omit<TwitterFeedProps, 'timeline' | 'username'> & { tweetId: string }) {
  return <TwitterFeed {...props} timeline={false} />
}