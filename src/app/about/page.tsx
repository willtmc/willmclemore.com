import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building, GraduationCap, Hammer, Bot } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - Will McLemore',
  description: 'From Yale to Sotheby\'s to building AI-powered auction systems. The story of an auctioneer who chose hammers over stethoscopes.',
  openGraph: {
    title: 'About Will McLemore',
    description: 'From Yale to Sotheby\'s to building AI-powered auction systems.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                About Will McLemore
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Yale grad who chose hammers over stethoscopes. Building the future of auctions through AI automation.
              </p>
            </div>

            {/* Personal Story */}
            <div className="prose prose-lg max-w-none mb-16">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-50">The Origin Story</h2>
                <div className="text-slate-700 dark:text-slate-300 space-y-4">
                  <p>
                    Born in Nashville, Tennessee, I grew up around the auction business thanks to my dad, 
                    who worked as a bankruptcy trustee. While he hoped I'd become a doctor, he took me to 
                    too many auctions when I was young. The energy, the strategy, the split-second decisions - 
                    I was hooked.
                  </p>
                  <p>
                    After graduating from Yale, I dove headfirst into the auction world instead of med school. 
                    Started at Sotheby's in New York City, dealing with million-dollar art pieces and learning 
                    the high-end auction game.
                  </p>
                  <p>
                    But I wanted to understand the full spectrum. So I moved to J.P. King Auction Company in 
                    Gadsden, Alabama, then to Richie Brothers Auctioneers - the world's largest heavy equipment 
                    auctioneer. From fine art to bulldozers, I've probably seen it all.
                  </p>
                  <p>
                    In 2006, I founded McLemore Auction Company. Now, 18 years later, we've got six auction 
                    managers and handle everything from estate auctions to major real estate sales. But here's 
                    the kicker - I'm not content to just do things the old way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section-sm bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Career Journey</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Yale University</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Graduated from Yale with plans that didn't include becoming an auctioneer. 
                    But sometimes the best plans are the ones you don't make.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <Building className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Sotheby's, New York</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Started my auction career at the world's largest art auction house. 
                    Learned how million-dollar decisions get made and how presentation matters as much as product.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Building className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">J.P. King & Richie Brothers</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Moved to Alabama and then worked with the largest heavy equipment auctioneer in the world. 
                    From art to bulldozers - now I truly understood the full auction spectrum.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                    <Hammer className="w-8 h-8 text-orange-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">McLemore Auction Company (2006-Present)</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Founded my own company and built it into a thriving business with six auction managers. 
                    We handle real estate, personal property, and estate auctions across multiple markets.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                    <Bot className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">AI Automation Focus (2024)</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    My current mission: automate myself before someone else does. Building custom CRM and 
                    project management systems. My goal this year is to automate every process that can be automated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Drives Me Now</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-4">🤖 AI Automation</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Building custom systems to automate auction processes. If my job's going to get automated, 
                    I want to be the one doing the automating.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Currently developing CRM and project management tools specifically for the auction industry.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-4">🤝 Strategic Partnerships</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Looking for joint ventures and partnerships to handle larger clients. We've got six auction 
                    managers and want to grow through smart partnerships.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Interested in connecting with like-minded business owners who are serious about using technology to scale.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-4">💼 Consulting & Advisory</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Available for consulting on AI tools integration, speaking engagements, and board positions. 
                    I've had success automating my own business and want to help others do the same.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Also available for expert witness work in auction-related legal matters.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-4">🎯 Connect & Learn</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    My main goal right now is to run into interesting people. Specifically, those who are 
                    using AI tools to enhance their businesses and grow organically.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Always up for travel, consulting, and meaningful conversations about the future of business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="section-sm bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Beyond Business</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              When I'm not automating auction processes or looking for the next interesting partnership...
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <div className="card-content text-center">
                  <h3 className="font-semibold mb-2">📚 Reading</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Love reading all kinds of different things. Always looking for new perspectives and ideas.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content text-center">
                  <h3 className="font-semibold mb-2">🐕 Vizsla Dogs</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Proud owner of these amazing Hungarian hunting dogs. They're as energetic as I am.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-content text-center">
                  <h3 className="font-semibold mb-2">🎸 Flat Picking Guitar</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Big fan of Tony Rice and the art of flat picking. There's something about precision and timing that resonates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Interested in AI automation, auction industry insights, or just want to have 
              an interesting conversation? I'd love to hear from you.
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