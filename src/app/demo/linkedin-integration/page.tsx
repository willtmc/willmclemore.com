import { Metadata } from 'next'
import { 
  LinkedInBadge, 
  LinkedInConnectButton, 
  LinkedInShareButton 
} from '@/components/LinkedInBadge'
import {
  BasicLinkedInBadge,
  SidebarLinkedInProfile,
  CustomLinkedInProfile,
  FooterLinkedInSection,
  BlogPostLinkedInShare,
  ContactPageLinkedIn,
  SocialProfilesSection
} from '@/components/LinkedInBadge/examples'

export const metadata: Metadata = {
  title: 'LinkedIn Integration Demo',
  description: 'Demo of LinkedIn Badge API and profile display components'
}

export default function LinkedInIntegrationDemo() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">LinkedIn Integration Demo</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Examples of LinkedIn Badge API and profile display components
            </p>
          </div>

          {/* Basic Badge */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">LinkedIn Badge Variations</h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              {/* Standard Badge */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Standard Badge</h3>
                <LinkedInBadge 
                  profileUrl="https://www.linkedin.com/in/willmclemore"
                  theme="light"
                  size="medium"
                />
              </div>

              {/* Dark Theme Badge */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Dark Theme Badge</h3>
                <div className="p-4 bg-slate-900 rounded-lg">
                  <LinkedInBadge 
                    profileUrl="https://www.linkedin.com/in/willmclemore"
                    theme="dark"
                    size="medium"
                  />
                </div>
              </div>

              {/* Small Vertical Badge */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Small Vertical Badge</h3>
                <LinkedInBadge 
                  profileUrl="https://www.linkedin.com/in/willmclemore"
                  theme="light"
                  size="small"
                  orientation="vertical"
                />
              </div>

              {/* Large Horizontal Badge */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Large Horizontal Badge</h3>
                <LinkedInBadge 
                  profileUrl="https://www.linkedin.com/in/willmclemore"
                  theme="light"
                  size="large"
                  orientation="horizontal"
                  vanity={true}
                />
              </div>
            </div>
          </section>

          {/* Custom Profile Display */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Custom Profile Display</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Custom-styled profile display without relying on LinkedIn's embed
            </p>
            <CustomLinkedInProfile />
          </section>

          {/* Buttons */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">LinkedIn Buttons</h2>
            
            <div className="space-y-6">
              {/* Connect Buttons */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Connect Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <LinkedInConnectButton 
                    profileUrl="https://www.linkedin.com/in/willmclemore"
                  />
                  <LinkedInConnectButton 
                    profileUrl="https://www.linkedin.com/in/willmclemore"
                    text="Let's Connect"
                  />
                  <LinkedInConnectButton 
                    profileUrl="https://www.linkedin.com/in/willmclemore"
                    text="View My Profile"
                  />
                </div>
              </div>

              {/* Share Buttons */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Share Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <LinkedInShareButton 
                    url="https://willmclemore.com/blog/welcome-auction-innovation-meets-ai"
                    title="Welcome to My New Blog"
                    summary="Insights from the intersection of auction technology and AI"
                  />
                  <LinkedInShareButton 
                    url="https://willmclemore.com"
                    title="Will McLemore - Auction Industry Expert"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Use Case Examples */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold">Use Case Examples</h2>
            
            {/* Sidebar Profile */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Sidebar Profile</h3>
              <div className="max-w-sm p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <SidebarLinkedInProfile />
              </div>
            </div>

            {/* Footer Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Footer Integration</h3>
              <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <FooterLinkedInSection />
              </div>
            </div>

            {/* Blog Post Share */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Blog Post Share</h3>
              <div className="p-6 border border-slate-200 dark:border-slate-700 rounded-lg">
                <BlogPostLinkedInShare 
                  postUrl="https://willmclemore.com/blog/example-post"
                  postTitle="How AI is Transforming the Auction Industry"
                  postExcerpt="Explore the latest innovations in auction technology..."
                />
              </div>
            </div>

            {/* Contact Page */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Page Integration</h3>
              <ContactPageLinkedIn />
            </div>
          </section>

          {/* Code Examples */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Code Examples</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Basic Badge</h3>
                <pre className="text-sm overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded">
{`import { LinkedInBadge } from '@/components/LinkedInBadge'

<LinkedInBadge 
  profileUrl="https://www.linkedin.com/in/willmclemore"
  theme="light"
  size="medium"
/>`}
                </pre>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Custom Profile</h3>
                <pre className="text-sm overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded">
{`<LinkedInBadge 
  profileUrl="https://www.linkedin.com/in/willmclemore"
  showCustomProfile={true}
  customProfileData={{
    name: "Will McLemore",
    headline: "CEO at Gavel",
    company: "Gavel",
    location: "Nashville, TN",
    connections: "500+"
  }}
/>`}
                </pre>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Share Button</h3>
                <pre className="text-sm overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded">
{`import { LinkedInShareButton } from '@/components/LinkedInBadge'

<LinkedInShareButton 
  url="https://example.com/post"
  title="Post Title"
  summary="Post summary..."
/>`}
                </pre>
              </div>
            </div>
          </section>

          {/* Props Reference */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Props Reference</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                <thead className="bg-slate-50 dark:bg-slate-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">profileUrl</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                    <td className="px-6 py-4 text-sm">LinkedIn profile URL</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">theme</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">'light' | 'dark'</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">'light'</td>
                    <td className="px-6 py-4 text-sm">Badge theme</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">size</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">'small' | 'medium' | 'large'</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">'medium'</td>
                    <td className="px-6 py-4 text-sm">Badge size</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">orientation</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">'horizontal' | 'vertical'</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">'horizontal'</td>
                    <td className="px-6 py-4 text-sm">Badge orientation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">showCustomProfile</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">boolean</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">false</td>
                    <td className="px-6 py-4 text-sm">Use custom profile display</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}