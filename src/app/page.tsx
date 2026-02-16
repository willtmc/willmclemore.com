import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowUpRight, Mail, Linkedin, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Will McLemore',
  description: 'Auctioneer, builder, automator. President of McLemore Auction Company.',
  openGraph: {
    title: 'Will McLemore',
    description: 'Auctioneer, builder, automator. President of McLemore Auction Company.',
    url: 'https://willmclemore.com',
    siteName: 'Will McLemore',
    images: [{ url: '/will-mclemore.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Will McLemore',
    description: 'Auctioneer, builder, automator.',
    images: ['/will-mclemore.jpg'],
  },
}

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Will McLemore',
    jobTitle: 'President',
    worksFor: {
      '@type': 'Organization',
      name: 'McLemore Auction Company',
      url: 'https://mclemoreauction.com',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Yale University',
    },
    url: 'https://willmclemore.com',
    sameAs: [
      'https://www.linkedin.com/in/willmclemore',
      'https://mclemoreauction.com',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Hero - Photo + Intro */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="container max-w-4xl">
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
              {/* Photo */}
              <div className="relative shrink-0">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200 dark:ring-slate-700">
                  <Image
                    src="/will-mclemore.jpg"
                    alt="Will McLemore"
                    width={288}
                    height={288}
                    className="object-cover object-top w-full h-full"
                    priority
                  />
                </div>
              </div>
              
              {/* Intro */}
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                  Will McLemore
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Auctioneer. Builder. Automator.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                  I&apos;ve run{' '}
                  <a 
                    href="https://mclemoreauction.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    McLemore Auction Company
                  </a>
                  {' '}in Nashville for nearly 20 years. We sell everything from estates 
                  to industrial equipment to real estate. I&apos;m also building AI systems 
                  to automate the parts of this business that shouldn&apos;t require a human.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Arc */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-8 text-center">The Path Here</h2>
            <div className="prose prose-slate dark:prose-invert prose-lg mx-auto">
              <p>
                I studied English at Yale, which taught me to read carefully 
                and write clearly—skills that turned out to matter more than 
                anything else I learned.
              </p>
              <p>
                After graduation, I got a taste of the auction world at{' '}
                <strong>Sotheby&apos;s</strong> in New York. Then I spent five years 
                at <strong>J.P. King Auction Company</strong>, selling premier 
                real estate auctions nationwide and opening their Southwest 
                regional office in Austin.
              </p>
              <p>
                At <strong>Ritchie Bros</strong>, the world&apos;s largest 
                industrial auctioneer, I helped develop their real estate 
                auction division in the United States. I learned how to scale: 
                systems, data, relentless process improvement.
              </p>
              <p>
                In 2006, I came home to Nashville to build something of my own.{' '}
                <strong>McLemore Auction Company</strong> has now been running 
                for nearly two decades. We do 350+ auctions a year, and I&apos;ve 
                become obsessed with using AI to automate the repetitive work 
                so we can focus on what actually matters: understanding what 
                people are selling, finding the right buyers, and getting the 
                best price.
              </p>
              <p className="text-slate-500 dark:text-slate-400 italic">
                &ldquo;Automate yourself before someone else does.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* What I'm Interested In */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-8 text-center">What I&apos;m Working On</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <h3 className="font-semibold mb-2">AI for Auctions</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Building systems that write descriptions, research values, 
                  route customer inquiries, and handle the thousand small tasks 
                  that eat up an auctioneer&apos;s day.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <h3 className="font-semibold mb-2">Partnerships</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  I like working with other auctioneers. If you have a sale 
                  that needs Nashville expertise or want to collaborate on 
                  something bigger, let&apos;s talk.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 md:col-span-2">
                <h3 className="font-semibold mb-2">
                  <a 
                    href="https://nashvillemoment.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Nashville Moment
                  </a>
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  A timeline of interesting things that happened in Nashville — 
                  cholera epidemics, reservoir collapses, infamous statues, 
                  and the stories behind them. Every city has its moments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Connect */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-700">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://mclemoreauction.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Building2 className="w-5 h-5" />
                McLemore Auction
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/willmclemore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="mailto:will@mclemoreauction.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
