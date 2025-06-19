'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { Loader2, Linkedin, ExternalLink } from 'lucide-react'
import styles from './LinkedInBadge.module.css'

declare global {
  interface Window {
    IN: any
  }
}

export interface LinkedInBadgeProps {
  profileUrl: string
  theme?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large'
  orientation?: 'horizontal' | 'vertical'
  vanity?: boolean
  locale?: string
  className?: string
  containerClassName?: string
  showCustomProfile?: boolean
  customProfileData?: {
    name: string
    headline?: string
    company?: string
    location?: string
    profileImage?: string
    connections?: string
  }
}

export function LinkedInBadge({
  profileUrl,
  theme = 'light',
  size = 'medium',
  orientation = 'horizontal',
  vanity = false,
  locale = 'en_US',
  className = '',
  containerClassName = '',
  showCustomProfile = false,
  customProfileData
}: LinkedInBadgeProps) {
  const badgeRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  // Extract profile ID from URL
  const getProfileId = (url: string) => {
    const match = url.match(/linkedin\.com\/in\/([^/]+)/i)
    return match ? match[1] : null
  }

  const profileId = getProfileId(profileUrl)

  useEffect(() => {
    if (!profileId || showCustomProfile) {
      setIsLoading(false)
      return
    }

    let mounted = true

    const renderBadge = () => {
      if (!badgeRef.current || !window.IN) return

      try {
        // Clear previous content
        badgeRef.current.innerHTML = ''
        
        // Create LinkedIn badge
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src = `https://platform.linkedin.com/badges/js/profile.js`
        
        // Add data attributes
        badgeRef.current.setAttribute('data-linkedin-id', profileId)
        badgeRef.current.setAttribute('data-theme', theme)
        badgeRef.current.setAttribute('data-size', size)
        badgeRef.current.setAttribute('data-orientation', orientation)
        badgeRef.current.setAttribute('data-vanity', vanity.toString())
        badgeRef.current.setAttribute('data-locale', locale)
        badgeRef.current.setAttribute('data-version', 'v1')
        
        badgeRef.current.appendChild(script)
        
        // Set loading to false after a delay
        setTimeout(() => {
          if (mounted) setIsLoading(false)
        }, 1500)
      } catch (err) {
        if (mounted) {
          setError('Failed to load LinkedIn badge')
          setIsLoading(false)
        }
      }
    }

    if (scriptLoaded) {
      renderBadge()
    }

    return () => {
      mounted = false
    }
  }, [profileId, theme, size, orientation, vanity, locale, scriptLoaded, showCustomProfile])

  // Custom profile component
  const CustomProfile = () => {
    if (!customProfileData) return null

    return (
      <div className={styles.customProfile}>
        <div className={styles.profileHeader}>
          {customProfileData.profileImage ? (
            <img 
              src={customProfileData.profileImage} 
              alt={customProfileData.name}
              className={styles.profileImage}
            />
          ) : (
            <div className={styles.profileImagePlaceholder}>
              <Linkedin className={styles.linkedinIcon} />
            </div>
          )}
          
          <div className={styles.profileInfo}>
            <h3 className={styles.profileName}>{customProfileData.name}</h3>
            {customProfileData.headline && (
              <p className={styles.profileHeadline}>{customProfileData.headline}</p>
            )}
            {customProfileData.company && (
              <p className={styles.profileCompany}>{customProfileData.company}</p>
            )}
            {customProfileData.location && (
              <p className={styles.profileLocation}>{customProfileData.location}</p>
            )}
          </div>
        </div>
        
        <div className={styles.profileActions}>
          <a 
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewProfileButton}
          >
            View LinkedIn Profile
            <ExternalLink className={styles.externalIcon} />
          </a>
          
          {customProfileData.connections && (
            <span className={styles.connections}>
              {customProfileData.connections} connections
            </span>
          )}
        </div>
      </div>
    )
  }

  if (!profileId) {
    return (
      <div className={`${styles.badgeWrapper} ${containerClassName}`}>
        <div className={styles.errorContainer}>
          <p className={styles.errorMessage}>Invalid LinkedIn profile URL</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Script
        id="linkedin-badge-script"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
      />
      
      <div className={`${styles.badgeWrapper} ${containerClassName}`}>
        <div className={`${styles.linkedinBadge} ${styles[size]} ${styles[theme]} ${className}`}>
          {isLoading && !showCustomProfile && (
            <div className={styles.loadingContainer}>
              <Loader2 className={styles.loadingIcon} />
              <p>Loading LinkedIn profile...</p>
            </div>
          )}
          
          {error && (
            <div className={styles.errorContainer}>
              <p className={styles.errorMessage}>{error}</p>
              <a 
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.fallbackLink}
              >
                View profile on LinkedIn
                <ExternalLink className={styles.externalIcon} />
              </a>
            </div>
          )}
          
          {showCustomProfile ? (
            <CustomProfile />
          ) : (
            <div 
              ref={badgeRef}
              className={`LI-profile-badge ${styles.badgeContainer}`}
              style={{ display: isLoading || error ? 'none' : 'block' }}
            />
          )}
        </div>
      </div>
    </>
  )
}

// Simplified LinkedIn Connect Button
export function LinkedInConnectButton({
  profileUrl,
  text = 'Connect on LinkedIn',
  className = ''
}: {
  profileUrl: string
  text?: string
  className?: string
}) {
  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.connectButton} ${className}`}
    >
      <Linkedin className={styles.buttonIcon} />
      {text}
    </a>
  )
}

// LinkedIn Share Button
export function LinkedInShareButton({
  url,
  title,
  summary,
  source,
  className = ''
}: {
  url: string
  title?: string
  summary?: string
  source?: string
  className?: string
}) {
  const shareUrl = new URL('https://www.linkedin.com/sharing/share-offsite/')
  shareUrl.searchParams.append('url', url)
  if (title) shareUrl.searchParams.append('title', title)
  if (summary) shareUrl.searchParams.append('summary', summary)
  if (source) shareUrl.searchParams.append('source', source)

  return (
    <a
      href={shareUrl.toString()}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.shareButton} ${className}`}
      onClick={(e) => {
        e.preventDefault()
        window.open(
          shareUrl.toString(),
          'linkedin-share-dialog',
          'width=626,height=436'
        )
      }}
    >
      <Linkedin className={styles.buttonIcon} />
      Share on LinkedIn
    </a>
  )
}