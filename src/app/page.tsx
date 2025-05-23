import Link from 'next/link'
import { ArrowRight, Calendar, Mail, Phone, MapPin } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section hero-gradient text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Will McLemore</span>
              <span className="block gradient-text">
                Auctioneer × AI Automation
              </span>
            </h1>
            
            {/* Bat Signal */}
            <div className="glass rounded-2xl p-8 mb-8 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                <span className="text-lg font-semibold">Currently Available</span>
              </div>
              <p className="text-xl mb-4">
                🤝 <strong>Looking to connect with business owners using AI tools to grow</strong>
              </p>
              <p className="text-lg opacity-90">
                Available for consulting, joint ventures, speaking, and board positions. 
                My goal this year: automate myself before someone else does.
              </p>
            </div>

            <p className="text-xl mb-8 opacity-90">
              President of McLemore Auction Company. Building automated systems for the auction industry. 
              Former Sotheby's, Richie Brothers. Yale grad who chose hammers over stethoscopes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn btn-primary btn-lg inline-flex items-center gap-2"
              >
                Let's Connect <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/about" 
                className="btn btn-outline btn-lg"
              >
                My Story
              </Link>
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
                href="mailto:will@willmclemore.com" 
                className="card hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="card-content text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    will@willmclemore.com
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
                    Let's discuss opportunities
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

      {/* What I Do */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-4">🏠 Run Auctions</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    President of McLemore Auction Company since 2006. We handle real estate, 
                    personal property, and estate auctions. Six auction managers and growing 
                    through partnerships.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-4">🤖 Build AI Systems</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Currently building custom CRM and project management systems. 
                    Using AI tools to automate auction processes and grow the business 
                    efficiently.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-4">💼 Consult & Advise</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Help business owners integrate AI tools and automation. Available for 
                    consulting, board positions, speaking engagements, and expert witness work.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-4">🤝 Partner & Grow</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Looking for joint ventures and partnerships. Want to connect with 
                    like-minded people who are serious about using technology to scale 
                    their businesses.
                  </p>
                </div>
              </div>
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
                🎨 Sotheby's (Art Auctions)
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
