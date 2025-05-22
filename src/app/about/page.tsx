import { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Will McLemore - technology leader, strategic consultant, and innovation catalyst with extensive experience in building scalable systems and high-performing teams.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                About <span className="gradient-text">Will McLemore</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Technology leader, strategic consultant, and innovation catalyst helping 
                organizations navigate complex challenges and achieve breakthrough results.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image Placeholder */}
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">WM</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Driving Innovation Through Technology</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    With over a decade of experience in technology leadership, I've had the privilege 
                    of architecting solutions that scale, building teams that deliver, and advising 
                    organizations through their most critical growth phases.
                  </p>
                  <p>
                    My journey spans from hands-on engineering to strategic leadership, giving me 
                    a unique perspective on both the technical and business challenges that modern 
                    organizations face. I believe that the best solutions emerge at the intersection 
                    of deep technical expertise and strategic thinking.
                  </p>
                  <p>
                    Today, I work with startups, scale-ups, and established enterprises to solve 
                    complex problems, accelerate growth, and build the technical capabilities needed 
                    for long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Core Expertise</h2>
              <p className="text-lg text-muted-foreground">
                Areas where I help organizations achieve breakthrough results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card">
                <div className="card-content">
                  <h3 className="font-semibold mb-3">Technical Leadership</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Engineering team scaling and development</li>
                    <li>• System architecture and scalability</li>
                    <li>• Technical strategy and roadmapping</li>
                    <li>• DevOps and platform engineering</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="font-semibold mb-3">Startup Advisory</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Product strategy and market fit</li>
                    <li>• Technical due diligence</li>
                    <li>• Go-to-market technical strategy</li>
                    <li>• Fundraising and investor relations</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="font-semibold mb-3">Strategic Consulting</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Digital transformation initiatives</li>
                    <li>• Technology assessment and optimization</li>
                    <li>• Innovation workshop facilitation</li>
                    <li>• Executive coaching and mentoring</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="font-semibold mb-3">Technology Stack</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cloud platforms (AWS, GCP, Azure)</li>
                    <li>• Modern web technologies</li>
                    <li>• Microservices and distributed systems</li>
                    <li>• AI/ML and emerging technologies</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="font-semibold mb-3">Industry Experience</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Fintech and financial services</li>
                    <li>• SaaS and enterprise software</li>
                    <li>• E-commerce and marketplaces</li>
                    <li>• Healthcare and regulated industries</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="font-semibold mb-3">Speaking & Thought Leadership</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Conference speaking and keynotes</li>
                    <li>• Technical blog writing and content</li>
                    <li>• Podcast appearances and interviews</li>
                    <li>• Workshop and masterclass facilitation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">My Approach</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-semibold">Listen & Understand</h3>
                <p className="text-sm text-muted-foreground">
                  Every challenge is unique. I start by deeply understanding your context, 
                  constraints, and objectives before proposing solutions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-semibold">Strategic Thinking</h3>
                <p className="text-sm text-muted-foreground">
                  Technology decisions should align with business goals. I help bridge 
                  the gap between technical capabilities and strategic outcomes.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-semibold">Deliver Results</h3>
                <p className="text-sm text-muted-foreground">
                  Success is measured by outcomes, not just outputs. I focus on 
                  delivering tangible value and sustainable improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Tackle Your Next Challenge?
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you're looking for strategic advice, technical leadership, or 
              innovation guidance, I'm here to help you achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary btn-lg"
              >
                Let's Talk
              </a>
              <a
                href="/projects"
                className="btn-outline btn-lg"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 