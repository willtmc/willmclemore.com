import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Calendar, MapPin, DollarSign, Users, Bot, Hammer } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects & Case Studies - Will McLemore',
  description: 'Auction case studies, AI automation projects, and business ventures from McLemore Auction Company.',
  openGraph: {
    title: 'Projects & Case Studies - Will McLemore',
    description: 'Auction case studies, AI automation projects, and business ventures.',
  },
}

const featuredProjects = [
  {
    id: 1,
    title: "Custom Auction CRM & Project Management System",
    category: "AI Automation",
    description: "Building a comprehensive CRM and project management platform specifically designed for the auction industry. Automating everything from client intake to post-sale follow-up.",
    technologies: ["AI Integration", "Custom Database", "Workflow Automation", "Client Portal"],
    status: "In Development",
    impact: "Targeting 50% reduction in administrative time",
    icon: <Bot className="w-6 h-6" />,
    details: [
      "Automated client onboarding and documentation",
      "AI-powered property valuation assistance", 
      "Integrated marketing and bidder management",
      "Real-time analytics and reporting dashboard"
    ]
  },
  {
    id: 2,
    title: "Multi-Million Dollar Estate Auction Series",
    category: "Real Estate",
    description: "Successfully managed a series of high-value estate auctions including residential properties, luxury items, and collectibles across multiple markets.",
    technologies: ["Estate Valuation", "Multi-Platform Marketing", "Bidder Coordination", "Legal Compliance"],
    status: "Completed",
    impact: "$3.2M+ in total sales",
    icon: <Hammer className="w-6 h-6" />,
    details: [
      "Coordinated 12 properties across 3 states",
      "Managed 200+ registered bidders per auction",
      "Implemented hybrid online/in-person bidding",
      "Achieved 98% sale rate with strong premiums"
    ]
  },
  {
    id: 3,
    title: "Strategic Partnership Program",
    category: "Business Development", 
    description: "Developing partnership framework to expand auction capacity and geographic reach through joint ventures with qualified auction managers.",
    technologies: ["Partnership Framework", "Training Systems", "Quality Standards", "Revenue Sharing"],
    status: "Active Expansion",
    impact: "6 current managers, targeting 12",
    icon: <Users className="w-6 h-6" />,
    details: [
      "Standardized training and certification program",
      "Joint venture legal framework development",
      "Quality control and brand standards",
      "Technology platform sharing and support"
    ]
  }
]

const additionalProjects = [
  {
    title: "Commercial Real Estate Liquidation",
    description: "Multi-property commercial auction for distressed portfolio",
    category: "Real Estate",
    value: "$1.8M",
    status: "Completed"
  },
  {
    title: "Heavy Equipment Auction Consulting",
    description: "Advisory work for construction company equipment liquidation",
    category: "Consulting", 
    value: "$850K",
    status: "Completed"
  },
  {
    title: "AI Bidder Behavior Analysis",
    description: "Machine learning project to predict bidding patterns",
    category: "AI Research",
    value: "Internal",
    status: "In Development"
  },
  {
    title: "Estate Planning Workshop Series",
    description: "Educational seminars for estate planning professionals",
    category: "Speaking",
    value: "Community",
    status: "Ongoing"
  },
  {
    title: "Auction Industry Podcast Appearances",
    description: "Regular appearances discussing AI automation in auctions",
    category: "Thought Leadership",
    value: "Industry",
    status: "Ongoing"
  },
  {
    title: "Art Auction Market Analysis",
    description: "Consulting project leveraging Sotheby's experience",
    category: "Art Advisory",
    value: "Confidential",
    status: "Completed"
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Projects & Case Studies
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              From multi-million dollar auctions to AI automation projects - here's how we're 
              building the future of the auction industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                🏠 Real Estate Auctions
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full">
                🤖 AI Automation
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
                🤝 Strategic Partnerships
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 rounded-full">
                💼 Consulting Work
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-sm">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            
            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="card">
                  <div className="card-content">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Project Info */}
                      <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                            {project.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold">{project.title}</h3>
                              <span className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 rounded-full">
                                {project.category}
                              </span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">Key Components:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {project.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <span className="text-blue-500 mt-1">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Metrics */}
                      <div className="space-y-6">
                        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 space-y-4">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">Project Status</h4>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm text-slate-600 dark:text-slate-400">Status:</span>
                              <span className="text-sm font-medium">{project.status}</span>
                            </div>
                            
                            <div className="flex justify-between">
                              <span className="text-sm text-slate-600 dark:text-slate-400">Impact:</span>
                              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                                {project.impact}
                              </span>
                            </div>
                          </div>
                        </div>

                        {index === 0 && (
                          <div className="text-center">
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                              Want to learn more about AI automation in your business?
                            </p>
                            <Link 
                              href="/contact"
                              className="btn btn-primary btn-sm"
                            >
                              Let's Discuss
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Projects Grid */}
      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Additional Work</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalProjects.map((project, index) => (
                <div key={index} className="card">
                  <div className="card-content">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <span className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <DollarSign className="w-4 h-4" />
                        <span>{project.value}</span>
                      </div>
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services & Capabilities */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What I Can Help With</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Hammer className="w-5 h-5 text-blue-600" />
                    Auction Services
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>• Real estate and property auctions</li>
                    <li>• Estate liquidation and asset sales</li>
                    <li>• Commercial and industrial auctions</li>
                    <li>• Expert witness and valuation services</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Bot className="w-5 h-5 text-purple-600" />
                    AI & Automation Consulting
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>• Business process automation</li>
                    <li>• Custom CRM and project management</li>
                    <li>• AI tool integration and training</li>
                    <li>• Workflow optimization and efficiency</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    Strategic Partnerships
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>• Joint venture opportunities</li>
                    <li>• Auction manager partnerships</li>
                    <li>• Business expansion consulting</li>
                    <li>• Market entry and growth strategies</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    Speaking & Advisory
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>• Conference speaking and keynotes</li>
                    <li>• Board positions and advisory roles</li>
                    <li>• Workshop facilitation and training</li>
                    <li>• Industry expertise and insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start a Project?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Whether you're looking to automate your business, need auction expertise, 
              or want to explore partnership opportunities - let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="btn btn-primary btn-lg"
              >
                Start a Conversation
              </Link>
              <Link 
                href="/about"
                className="btn btn-outline btn-lg"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 