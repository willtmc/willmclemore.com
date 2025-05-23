import { Metadata } from 'next'
import { Phone, Mail, MapPin, Calendar, MessageCircle, Users, Hammer, Bot, Building } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact - Will McLemore',
  description: 'Get in touch for auction services, AI automation consulting, partnerships, or speaking opportunities.',
  openGraph: {
    title: 'Contact Will McLemore',
    description: 'Ready to connect? Let\'s discuss auctions, AI automation, or partnership opportunities.',
  },
}

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    description: "Best for detailed inquiries and project discussions",
    action: "will@willmclemore.com",
    href: "mailto:will@willmclemore.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone Call",
    description: "For urgent matters or quick conversations",
    action: "Schedule a call",
    href: "/contact#form"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Video Meeting",
    description: "Perfect for partnership discussions and consulting",
    action: "Book a meeting",
    href: "/contact#form"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "General Inquiry",
    description: "Questions, ideas, or just want to connect",
    action: "Send a message",
    href: "/contact#form"
  }
]

const availabilityInfo = [
  {
    icon: <Bot className="w-6 h-6 text-blue-600" />,
    title: "AI Automation Consulting",
    description: "Help you integrate AI tools into your business processes. I've automated my own auction business and can help you do the same with yours.",
    commitment: "Project-based or ongoing advisory"
  },
  {
    icon: <Hammer className="w-6 h-6 text-orange-600" />,
    title: "Auction Services & Expertise",
    description: "Real estate auctions, estate sales, expert witness work, and industry insights from 18+ years in the business.",
    commitment: "Case-by-case basis"
  },
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    title: "Partnerships & Joint Ventures",
    description: "Looking for qualified auction managers or business partners. We have 6 managers and want to grow through smart partnerships.",
    commitment: "Long-term strategic relationships"
  },
  {
    icon: <Building className="w-6 h-6 text-purple-600" />,
    title: "Speaking & Board Positions",
    description: "Available for conferences, workshops, board positions, and advisory roles. Love sharing knowledge about auctions and AI automation.",
    commitment: "Flexible scheduling, willing to travel"
  }
]

const faqs = [
  {
    question: "What kind of AI automation projects do you work on?",
    answer: "I help businesses automate their processes using AI tools. My specialty is in auction and real estate businesses, but the principles apply broadly. I'm currently building a custom CRM and project management system for the auction industry. I can help you identify automation opportunities and implement solutions."
  },
  {
    question: "Do you handle auctions outside your local area?",
    answer: "Yes! While McLemore Auction Company is based in Tennessee, we handle auctions across multiple states through our network of six auction managers. We're always interested in joint ventures and partnerships for larger or distant projects."
  },
  {
    question: "What makes your auction expertise unique?",
    answer: "I'm possibly the only auctioneer who has worked at both Sotheby's (the largest art auction house) and Richie Brothers (the largest heavy equipment auctioneer). This gives me perspective across the entire auction spectrum - from million-dollar art to bulldozers to real estate."
  },
  {
    question: "Are you available for full-time roles?",
    answer: "No, I'm focused on growing McLemore Auction Company and my AI automation projects. However, I'm very interested in consulting, advisory roles, board positions, and strategic partnerships with like-minded business owners."
  },
  {
    question: "What's your typical consulting engagement like?",
    answer: "It varies based on needs. For AI automation, I might work with you for a few months to identify opportunities and implement solutions. For auction expertise, it could be a one-time consultation or ongoing advisory. I'm flexible and focused on delivering real value."
  },
  {
    question: "How do partnerships with McLemore Auction Company work?",
    answer: "We're looking for experienced auction managers who want to partner with us on larger projects or in new markets. This could involve joint ventures, revenue sharing, or other creative arrangements. We provide technology, training, and support while you bring local expertise and relationships."
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              Interested in AI automation, auction services, partnerships, or just want to have 
              an interesting conversation? I'd love to hear from you.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Currently available for new projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-sm bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How to Reach Me</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="card hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="card-content text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{method.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {method.description}
                    </p>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {method.action}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Available For */}
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What I'm Available For</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Here's how I can help you and what kind of engagements I'm looking for
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {availabilityInfo.map((item, index) => (
                <div key={index} className="card">
                  <div className="card-content">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                          {item.description}
                        </p>
                        <div className="text-sm">
                          <span className="font-medium text-slate-900 dark:text-slate-100">Commitment: </span>
                          <span className="text-slate-600 dark:text-slate-400">{item.commitment}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="form" className="section bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Me a Message</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Tell me about your project, partnership idea, or just say hello
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <div className="card-content">
                    <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Travel */}
      <section className="section-sm bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Location & Travel</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Based in Tennessee</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Home base for McLemore Auction Company
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <Building className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">Multi-State Operations</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Auction services across multiple states
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Travel Available</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Happy to travel for the right opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 