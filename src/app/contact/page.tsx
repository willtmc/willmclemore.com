import { Metadata } from 'next'
import { Mail, Calendar, MapPin, Phone, MessageCircle } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Will McLemore for strategic consulting, technical leadership, speaking engagements, or general inquiries. Multiple ways to connect and start the conversation.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to tackle your next challenge? Whether you need strategic guidance, 
              technical leadership, or innovation support, I'm here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">How to Reach Me</h2>
              <p className="text-lg text-muted-foreground">
                Choose the method that works best for your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Email */}
              <div className="card text-center group hover:shadow-lg transition-shadow">
                <div className="card-content space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      For detailed inquiries and project discussions
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div className="card text-center group hover:shadow-lg transition-shadow">
                <div className="card-content space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Schedule a Call</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Book a 30-minute consultation
                    </p>
                    <a
                      href="https://cal.com/willmclemore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      Book Meeting
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="card text-center group hover:shadow-lg transition-shadow">
                <div className="card-content space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Connect professionally
                    </p>
                    <a
                      href={SITE_CONFIG.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      Connect
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="card text-center group hover:shadow-lg transition-shadow">
                <div className="card-content space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Response Time</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Typically within 24 hours
                    </p>
                    <span className="text-sm text-primary font-medium">
                      Quick & Professional
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Contact Form */}
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Send a Message</h3>
                    <p className="card-description">
                      Fill out the form below and I'll get back to you within 24 hours.
                    </p>
                  </div>
                  <div className="card-content">
                    <ContactForm />
                  </div>
                </div>
              </div>

              {/* Side Information */}
              <div className="space-y-8">
                {/* Availability */}
                <div className="card">
                  <div className="card-content">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      Current Availability
                    </h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>✅ Strategic consulting engagements</p>
                      <p>✅ Technical advisory roles</p>
                      <p>✅ Speaking opportunities</p>
                      <p>⏰ Limited project capacity</p>
                    </div>
                  </div>
                </div>

                {/* Engagement Types */}
                <div className="card">
                  <div className="card-content">
                    <h4 className="font-semibold mb-3">Engagement Types</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h5 className="font-medium text-primary">Strategic Consulting</h5>
                        <p className="text-muted-foreground">Technology strategy, team scaling, architecture decisions</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-primary">Startup Advisory</h5>
                        <p className="text-muted-foreground">Technical due diligence, product strategy, fundraising support</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-primary">Speaking & Workshops</h5>
                        <p className="text-muted-foreground">Conference talks, team workshops, executive training</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="card">
                  <div className="card-content">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      Location & Travel
                    </h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Based in Austin, Texas</p>
                      <p>Available for remote engagements globally</p>
                      <p>Open to travel for the right opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Common questions about working together
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">What types of projects do you take on?</h3>
                  <p className="text-sm text-muted-foreground">
                    I focus on strategic consulting, technical leadership, and startup advisory. 
                    This includes technology strategy, team scaling, architecture reviews, 
                    and product development guidance.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">What's your typical engagement length?</h3>
                  <p className="text-sm text-muted-foreground">
                    Engagements typically range from 3-12 months, depending on the scope. 
                    I also offer one-time assessments and ongoing advisory relationships.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Do you work with startups or enterprises?</h3>
                  <p className="text-sm text-muted-foreground">
                    Both! I work with early-stage startups through Fortune 500 companies. 
                    Each brings unique challenges and opportunities for impact.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">How do you structure your fees?</h3>
                  <p className="text-sm text-muted-foreground">
                    I offer both project-based and retainer arrangements. Fees depend on 
                    scope, timeline, and complexity. Happy to discuss options that work for your budget.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Can you help with fundraising?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, I regularly help startups prepare for fundraising through technical 
                    due diligence preparation, pitch deck reviews, and investor introductions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">What about speaking opportunities?</h3>
                  <p className="text-sm text-muted-foreground">
                    I'm available for conference talks, internal company presentations, 
                    and workshop facilitation on topics related to technology leadership and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 