import { TwitterFeed, TwitterTimeline, TwitterTweet } from './index'

// Example: Sidebar Twitter Timeline
export function SidebarTwitterFeed() {
  return (
    <TwitterTimeline 
      username="willmclemore"
      height={600}
      tweetLimit={3}
      hideFooter={true}
      containerClassName="narrow"
      title="Latest Updates"
    />
  )
}

// Example: Homepage Twitter Section
export function HomepageTwitterSection() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Follow My Journey</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Stay updated with the latest auction industry insights and AI innovations
            </p>
          </div>
          
          <TwitterTimeline 
            username="willmclemore"
            height={500}
            tweetLimit={4}
            theme="auto"
            containerClassName="medium"
            showTitle={false}
          />
          
          <a 
            href="https://twitter.com/willmclemore" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Follow @willmclemore on Twitter
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

// Example: Blog Post Tweet Embed
export function BlogPostTweetEmbed({ tweetId }: { tweetId: string }) {
  return (
    <div className="my-8">
      <TwitterTweet 
        tweetId={tweetId}
        align="center"
        showTitle={false}
      />
    </div>
  )
}

// Example: Multiple Account Feeds
export function MultipleAccountFeeds() {
  const accounts = [
    { username: 'willmclemore', title: 'Personal Updates' },
    { username: 'mclemoreauction', title: 'Auction Company News' },
    { username: 'GavelPlatform', title: 'Gavel Platform' }
  ]
  
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {accounts.map((account) => (
        <TwitterTimeline 
          key={account.username}
          username={account.username}
          title={account.title}
          height={400}
          tweetLimit={2}
          hideFooter={true}
          hideBorder={true}
        />
      ))}
    </div>
  )
}