import Link from 'next/link'
import { ArrowRight, Calendar, Mail, MapPin, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section hero-gradient text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block gradient-text">
                Turn Bidders into Buyers—with AI-Driven Auction Strategy
              </span>
            </h1>
            
            <p className="text-xl mb-8 opacity-90">
              For owners and leaders who want faster sales, higher prices, and zero overhead.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/contact" 
                className="btn btn-primary btn-lg inline-flex items-center gap-2"
              >
                Book a 15-min strategy call <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/projects" 
                className="btn btn-outline btn-lg"
              >
                View Case Studies
              </Link>
            </div>

            <p className="text-sm opacity-75 italic">
              &ldquo;Automate yourself before someone else does.&rdquo; — Will McLemore
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner with Me */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Partner with Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="card-content">
                  <h3 className="text-5xl font-bold text-blue-600 mb-4">550</h3>
                  <p className="text-lg font-semibold mb-2">Auctions Closed</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Last year alone, including a single-day $12.1M result
                  </p>
                </div>
              </div>

              <div className="card text-center">
                <div className="card-content">
                  <h3 className="text-5xl font-bold text-blue-600 mb-4">+23%</h3>
                  <p className="text-lg font-semibold mb-2">Above Reserve</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Average price uplift on online-only events
                  </p>
                </div>
              </div>

              <div className="card text-center">
                <div className="card-content">
                  <h3 className="text-5xl font-bold text-blue-600 mb-4">70%</h3>
                  <p className="text-lg font-semibold mb-2">Time Saved</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Custom AI workflows cut admin time by 70%, keeping more margin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="section-sm bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Get In Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <a 
                href="mailto:will@mclemoreauction.com" 
                className="card hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="card-content text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    will@mclemoreauction.com
                  </p>
                </div>
              </a>
              
              <a 
                href="/contact" 
                className="card hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="card-content text-center">
                  <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Schedule a Call</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Let&apos;s discuss opportunities
                  </p>
                </div>
              </a>

              <a 
                href="/projects" 
                className="card hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="card-content text-center">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">View My Work</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Auction case studies & projects
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help You */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How I Help You</h2>
            <div className="space-y-8">
              <div className="card">
                <div className="card-content">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-blue-600">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Run Your Auction</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-3">
                        From catalog to closing, my team handles real estate, estates, and business liquidations across the Southeast.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">Tennessee&apos;s busiest online auction house</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">Six auction managers, expanding through partnerships</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-blue-600">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Automate Your Operation</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-3">
                        I design bespoke CRM & project-management systems that eliminate manual data entry.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">Cut catalog prep from 10 hours to 90 minutes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">AI-powered workflows that scale without hiring</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-blue-600">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Advise & Train</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-3">
                        Board-level consulting, expert-witness work, and keynote speaking on auction innovation.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">Strategic guidance from Sotheby&apos;s to Richie Brothers experience</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">Yale-educated perspective on business transformation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Proof in Clients&apos; Words</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card bg-white dark:bg-slate-800">
                <div className="card-content">
                  <p className="text-lg italic mb-4">
                    &ldquo;Will&apos;s AI toolkit added $382K to our bottom line on day one.&rdquo;
                  </p>
                  <p className="font-semibold">— Jane R., Estate Executor</p>
                </div>
              </div>
              
              <div className="card bg-white dark:bg-slate-800">
                <div className="card-content">
                  <p className="text-lg italic mb-4">
                    &ldquo;We cut catalog prep from 10 hours to 90 minutes.&rdquo;
                  </p>
                  <p className="font-semibold">— David S., Equipment Dealer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is This You? */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Is This You?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <div className="card-content text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <p className="text-lg">You own high-value assets and a tight timeline</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <p className="text-lg">You run an auction firm that wants to scale without hiring</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <p className="text-lg">You&apos;re a PE partner seeking operational lift before exit</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold mb-6">Next Step</h3>
              <Link 
                href="/contact" 
                className="btn btn-primary btn-lg inline-flex items-center gap-2 mb-4"
              >
                Book a 15-minute strategy call <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-slate-600 dark:text-slate-400">
                Get a tailored action plan—or keep your playbook, on me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Background */}
      <section className="section-sm bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Background</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Unique perspective from working at both ends of the auction spectrum
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow">
                🎨 Sotheby&apos;s (Art Auctions)
              </span>
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow">
                🚜 Richie Brothers (Heavy Equipment)
              </span>
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow">
                🏠 J.P. King (Real Estate)
              </span>
              <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow">
                🎓 Yale Graduate
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
