import { Metadata } from 'next'
import { TwitterFeed, TwitterTimeline, TwitterTweet } from '@/components/TwitterFeed'

export const metadata: Metadata = {
  title: 'Twitter Feed Demo',
  description: 'Demo of Twitter Feed component integration'
}

export default function TwitterFeedDemo() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Twitter Feed Component Demo</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Examples of embedding Twitter timelines and tweets
            </p>
          </div>

          {/* Timeline Example */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Twitter Timeline</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Display a user's timeline with customizable options
            </p>
            
            <div className="grid gap-8 md:grid-cols-2">
              {/* Default Timeline */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Default Timeline</h3>
                <TwitterTimeline 
                  username="willmclemore"
                  height={500}
                  containerClassName="narrow"
                />
              </div>

              {/* Customized Timeline */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Customized Timeline</h3>
                <TwitterTimeline 
                  username="GavelPlatform"
                  height={500}
                  theme="dark"
                  hideFooter={true}
                  hideBorder={true}
                  tweetLimit={3}
                  containerClassName="narrow"
                />
              </div>
            </div>
          </section>

          {/* Single Tweet Example */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Single Tweet Embed</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Embed individual tweets with full interactivity
            </p>
            
            <div className="grid gap-8 md:grid-cols-2">
              {/* Standard Tweet */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Standard Tweet</h3>
                <TwitterTweet 
                  tweetId="1234567890123456789"
                  showTitle={false}
                />
              </div>

              {/* Tweet without media */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Tweet (No Media)</h3>
                <TwitterTweet 
                  tweetId="1234567890123456789"
                  hideMedia={true}
                  hideConversation={true}
                  showTitle={false}
                />
              </div>
            </div>
          </section>

          {/* Multiple Feeds */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Multiple Feeds</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Display multiple Twitter feeds on the same page
            </p>
            
            <div className="space-y-6">
              <TwitterFeed 
                username="mclemoreauction"
                title="McLemore Auction Updates"
                height={400}
                tweetLimit={2}
                containerClassName="medium"
              />
              
              <TwitterFeed 
                username="auctiontech"
                title="Auction Technology News"
                height={400}
                tweetLimit={2}
                hideMedia={true}
                containerClassName="medium"
              />
            </div>
          </section>

          {/* Usage Examples */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Usage Examples</h2>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Basic Timeline</h3>
              <pre className="text-sm overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded">
{`import { TwitterTimeline } from '@/components/TwitterFeed'

<TwitterTimeline 
  username="willmclemore"
  height={500}
/>`}
              </pre>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Single Tweet</h3>
              <pre className="text-sm overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded">
{`import { TwitterTweet } from '@/components/TwitterFeed'

<TwitterTweet 
  tweetId="1234567890123456789"
  hideConversation={true}
/>`}
              </pre>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Custom Styled Feed</h3>
              <pre className="text-sm overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded">
{`import { TwitterFeed } from '@/components/TwitterFeed'

<TwitterFeed 
  username="willmclemore"
  height={600}
  theme="dark"
  hideFooter={true}
  tweetLimit={5}
  containerClassName="narrow"
  className="custom-twitter-feed"
/>`}
              </pre>
            </div>
          </section>

          {/* Props Documentation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Available Props</h2>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">
                      username
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                      Twitter username for timeline
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">
                      tweetId
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                      ID of specific tweet to embed
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">
                      height
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      600
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                      Height of timeline in pixels
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">
                      theme
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      'light' | 'dark' | 'auto'
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      'auto'
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                      Widget theme
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">
                      tweetLimit
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      5
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                      Number of tweets to show
                    </td>
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