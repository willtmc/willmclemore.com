import { LinkedInBadge, LinkedInConnectButton, LinkedInShareButton } from './index'

// Example: Basic LinkedIn Badge
export function BasicLinkedInBadge() {
  return (
    <LinkedInBadge 
      profileUrl="https://www.linkedin.com/in/willmclemore"
      theme="light"
      size="medium"
    />
  )
}

// Example: Sidebar LinkedIn Profile
export function SidebarLinkedInProfile() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Connect on LinkedIn</h3>
      <LinkedInBadge 
        profileUrl="https://www.linkedin.com/in/willmclemore"
        theme="light"
        size="small"
        orientation="vertical"
      />
    </div>
  )
}

// Example: Custom Profile Display
export function CustomLinkedInProfile() {
  return (
    <LinkedInBadge 
      profileUrl="https://www.linkedin.com/in/willmclemore"
      showCustomProfile={true}
      customProfileData={{
        name: "Will McLemore",
        headline: "CEO at Gavel | Auction Industry Expert",
        company: "Gavel",
        location: "Nashville, Tennessee",
        profileImage: "/images/profile-photo.jpg", // Replace with actual image
        connections: "500+"
      }}
      containerClassName="max-w-md mx-auto"
    />
  )
}

// Example: Footer LinkedIn Section
export function FooterLinkedInSection() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold">Professional Network</h4>
      <LinkedInConnectButton 
        profileUrl="https://www.linkedin.com/in/willmclemore"
        text="Connect with Will"
      />
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Let's connect and discuss auction industry innovations
      </p>
    </div>
  )
}

// Example: Blog Post Share Button
export function BlogPostLinkedInShare({ 
  postUrl, 
  postTitle, 
  postExcerpt 
}: { 
  postUrl: string
  postTitle: string
  postExcerpt: string
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-slate-600 dark:text-slate-400">Share this post:</span>
      <LinkedInShareButton 
        url={postUrl}
        title={postTitle}
        summary={postExcerpt}
        source="Will McLemore Blog"
      />
    </div>
  )
}

// Example: Contact Page LinkedIn Integration
export function ContactPageLinkedIn() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold">Let's Connect Professionally</h3>
        <p className="text-slate-600 dark:text-slate-400">
          Join my network on LinkedIn for industry insights and updates
        </p>
      </div>
      
      <LinkedInBadge 
        profileUrl="https://www.linkedin.com/in/willmclemore"
        theme="light"
        size="medium"
        orientation="horizontal"
        vanity={true}
      />
      
      <div className="flex justify-center">
        <LinkedInConnectButton 
          profileUrl="https://www.linkedin.com/in/willmclemore"
          className="text-lg"
        />
      </div>
    </div>
  )
}

// Example: Multiple Social Profiles
export function SocialProfilesSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* LinkedIn Profile */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <svg className="w-5 h-5 text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </h3>
        <LinkedInBadge 
          profileUrl="https://www.linkedin.com/in/willmclemore"
          theme="light"
          size="medium"
        />
      </div>
      
      {/* Twitter/X Profile (placeholder) */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Twitter/X
        </h3>
        {/* Add Twitter component here */}
      </div>
    </div>
  )
}