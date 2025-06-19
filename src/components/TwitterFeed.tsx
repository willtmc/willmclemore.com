'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

interface TwitterFeedProps {
  username?: string
  tweetId?: string
  timeline?: boolean
  height?: number
  theme?: 'light' | 'dark'
  hideConversation?: boolean
  hideMedia?: boolean
  align?: 'left' | 'center' | 'right'
  width?: 'auto' | number
  dnt?: boolean
  lang?: string
}

export function TwitterEmbed({
  tweetId,
  hideConversation = false,
  hideMedia = false,
  align = 'center',
  theme,
  width = 'auto',
  dnt = true,
  lang = 'en'
}: TwitterFeedProps) {
  const embedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (embedRef.current && tweetId && (window as any).twttr) {
      // Clear previous content
      embedRef.current.innerHTML = ''
      
      // Create tweet embed
      ;(window as any).twttr.widgets.createTweet(
        tweetId,
        embedRef.current,
        {
          theme,
          cards: hideMedia ? 'hidden' : undefined,
          conversation: hideConversation ? 'none' : undefined,
          align,
          width: width === 'auto' ? undefined : width,
          dnt,
          lang
        }
      )
    }
  }, [tweetId, theme, hideMedia, hideConversation, align, width, dnt, lang])

  if (!tweetId) return null

  return (
    <div className="twitter-embed-container">
      <div ref={embedRef} className="twitter-embed" />
    </div>
  )
}

export function TwitterTimeline({
  username,
  height = 600,
  theme,
  hideMedia = false,
  width = 'auto',
  dnt = true,
  lang = 'en'
}: TwitterFeedProps) {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (timelineRef.current && username && (window as any).twttr) {
      // Clear previous content
      timelineRef.current.innerHTML = ''
      
      // Create timeline embed
      ;(window as any).twttr.widgets.createTimeline(
        {
          sourceType: 'profile',
          screenName: username
        },
        timelineRef.current,
        {
          height,
          theme,
          chrome: hideMedia ? 'nomedia' : undefined,
          width: width === 'auto' ? undefined : width,
          dnt,
          lang
        }
      )
    }
  }, [username, height, theme, hideMedia, width, dnt, lang])

  if (!username) return null

  return (
    <div className="twitter-timeline-container">
      <div ref={timelineRef} className="twitter-timeline" />
    </div>
  )
}

export default function TwitterFeed({
  username,
  tweetId,
  timeline = true,
  ...props
}: TwitterFeedProps) {
  return (
    <>
      <Script
        id="twitter-widgets"
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />
      
      <div className="twitter-feed">
        {timeline && username ? (
          <TwitterTimeline username={username} {...props} />
        ) : tweetId ? (
          <TwitterEmbed tweetId={tweetId} {...props} />
        ) : null}
      </div>
      
      <style jsx>{`
        .twitter-feed {
          width: 100%;
          max-width: 100%;
        }
        
        .twitter-embed-container,
        .twitter-timeline-container {
          display: flex;
          justify-content: center;
          width: 100%;
          overflow: hidden;
        }
        
        .twitter-embed,
        .twitter-timeline {
          width: 100%;
          max-width: 550px;
        }
        
        @media (max-width: 640px) {
          .twitter-embed,
          .twitter-timeline {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  )
}