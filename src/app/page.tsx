import Link from 'next/link'
import { ArrowRight, Mail, Calendar, Github, Linkedin, Twitter } from 'lucide-react'
import { SITE_CONFIG, BAT_SIGNAL_DEFAULT } from '@/lib/constants'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            {/* Bat Signal */}
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-6 py-2 text-sm">
              <span className="mr-2">🦇</span>
              <span className="font-medium text-primary">Available Now</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Technology Leader &{' '}
              <span className="gradient-text">Strategic Consultant</span>
            </h1>

            {/* Bat Signal Message */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              {BAT_SIGNAL_DEFAULT}
            </p>

            {/* Brief Introduction */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I help organizations navigate complex technical challenges, scale effectively, 
              and build high-performing teams. With deep expertise in technology leadership 
              and strategic innovation, I'm here to turn ambitious visions into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary btn-lg group"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="btn-outline btn-lg"
              >
                Learn More About Me
              </Link>
            </div>

            {/* Quick Contact Options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                {SITE_CONFIG.email}
              </a>
              <a
                href="https://cal.com/willmclemore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Preview */}
      <section className="section-sm">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Expertise Areas
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <div className="card-content">
                  <h3 className="font-semibold mb-3">Technical Leadership</h3>
                  <p className="text-muted-foreground text-sm">
                    Architecting scalable systems, leading engineering teams, 
                    and driving technical strategy for growing organizations.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="font-semibold mb-3">Startup Advisory</h3>
                  <p className="text-muted-foreground text-sm">
                    Product strategy, technical due diligence, and growth guidance 
                    for early-stage and scaling startups.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="font-semibold mb-3">Innovation Catalyst</h3>
                  <p className="text-muted-foreground text-sm">
                    Speaking engagements, workshop facilitation, and thought leadership 
                    in emerging technologies and industry trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Latest Updates */}
      <section className="section-sm bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Stay Connected
            </h2>
            <p className="text-lg text-muted-foreground">
              Follow my latest thoughts on technology, leadership, and innovation
            </p>
            
            <div className="flex justify-center space-x-6">
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 btn-outline"
              >
                <Twitter className="h-4 w-4" />
                <span>Twitter</span>
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 btn-outline"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 btn-outline"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
