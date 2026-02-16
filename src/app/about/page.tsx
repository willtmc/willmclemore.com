import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - Will McLemore',
  description: 'Auctioneer, builder, automator. Nearly two decades running McLemore Auction Company in Nashville.',
  openGraph: {
    title: 'About Will McLemore',
    description: 'Auctioneer, builder, automator. Nearly two decades running McLemore Auction Company in Nashville.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Bio */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              About
            </h1>

            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <p>
                I run{' '}
                <a 
                  href="https://mclemoreauction.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  McLemore Auction Company
                </a>
                {' '}in Nashville — nearly two decades, 350+ auctions a year. 
                I&apos;m obsessed with using AI and automation to eliminate the 
                repetitive work so we can focus on what actually creates value: 
                understanding what people are selling, finding the right buyers, 
                and getting the best price.
              </p>
              <p>
                I built our platform from scratch. It handles everything from 
                intake to invoicing, and I&apos;m pushing it further every day — 
                AI-written descriptions, automated valuations, intelligent routing, 
                and systems that handle the thousand small tasks that eat up an 
                auctioneer&apos;s day.
              </p>
              <p>
                Before Nashville, I worked at Ritchie Bros (world&apos;s largest 
                industrial auctioneer), J.P. King Auction Company, and 
                Sotheby&apos;s. I studied English at Yale, which taught me to read 
                carefully and write clearly — turns out that matters more than 
                most things.
              </p>
              <p className="text-slate-500 dark:text-slate-400 italic">
                &ldquo;Automate yourself before someone else does.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Working On */}
      <section className="section-sm bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">What I&apos;m Working On</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl bg-white dark:bg-slate-800">
                <h3 className="font-semibold mb-2">AI for Auctions</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Building systems that write descriptions, research values, 
                  route customer inquiries, and handle the thousand small tasks 
                  that eat up an auctioneer&apos;s day.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-slate-800">
                <h3 className="font-semibold mb-2">Partnerships</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  I like working with other auctioneers. If you have a sale 
                  that needs Nashville expertise or want to collaborate on 
                  something bigger, let&apos;s talk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Business */}
      <section className="section-sm">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Beyond Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <h3 className="font-semibold mb-2">📚 Reading</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Always looking for new perspectives and ideas.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <h3 className="font-semibold mb-2">🐕 Vizsla Dogs</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Hungarian hunting dogs. As energetic as I am.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <h3 className="font-semibold mb-2">🎸 Flat Picking Guitar</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Big fan of Tony Rice. Precision and timing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm border-t border-slate-200 dark:border-slate-700">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Interested in AI automation, auction industry insights, or just 
              want to have an interesting conversation?
            </p>
            <Link 
              href="/contact" 
              className="btn btn-primary btn-lg inline-flex items-center gap-2"
            >
              Get In Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
