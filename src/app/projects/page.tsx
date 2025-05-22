import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Github, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Will McLemore\'s portfolio of strategic consulting engagements, technical leadership projects, and innovative solutions across various industries.',
}

// Placeholder project data - in a real app, this would come from the database
const projects = [
  {
    id: '1',
    title: 'Enterprise Digital Transformation',
    description: 'Led a comprehensive digital transformation initiative for a Fortune 500 company, modernizing their technology stack and scaling their engineering organization.',
    longDescription: 'Architected and executed a multi-year digital transformation program that included cloud migration, microservices adoption, and team restructuring. Reduced deployment time by 85% and increased development velocity by 3x.',
    technologies: ['AWS', 'Kubernetes', 'React', 'Node.js', 'Python', 'PostgreSQL'],
    imageUrl: '/api/placeholder/600/400',
    featured: true,
    category: 'Strategic Consulting',
    year: '2023',
    outcome: '$2M+ annual cost savings, 3x faster time-to-market'
  },
  {
    id: '2',
    title: 'Fintech Startup Advisory',
    description: 'Strategic technical advisory for a Series A fintech startup, helping them scale from 50k to 2M+ users while maintaining security and compliance.',
    longDescription: 'Provided ongoing CTO advisory services including architecture reviews, team scaling, and regulatory compliance guidance. Helped navigate SOC 2 certification and PCI compliance.',
    technologies: ['TypeScript', 'GraphQL', 'Docker', 'MongoDB', 'Redis'],
    githubUrl: 'https://github.com/example',
    imageUrl: '/api/placeholder/600/400',
    featured: true,
    category: 'Startup Advisory',
    year: '2023',
    outcome: '40x user growth, successful Series B raise'
  },
  {
    id: '3',
    title: 'AI-Powered Analytics Platform',
    description: 'Designed and built a machine learning platform that provides real-time insights for e-commerce businesses, processing 100M+ events daily.',
    longDescription: 'End-to-end platform development including data pipeline architecture, ML model deployment, and real-time dashboard creation. Leveraged modern ML ops practices for continuous model improvement.',
    technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'BigQuery', 'React'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    imageUrl: '/api/placeholder/600/400',
    featured: true,
    category: 'Technical Leadership',
    year: '2022',
    outcome: '25% increase in client conversion rates'
  },
  {
    id: '4',
    title: 'Healthcare Platform Modernization',
    description: 'Modernized a legacy healthcare platform to support HIPAA compliance, improve performance, and enable rapid feature development.',
    longDescription: 'Complete platform overhaul including security hardening, performance optimization, and modern development practices. Implemented comprehensive testing and CI/CD pipelines.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Terraform', 'Jenkins'],
    imageUrl: '/api/placeholder/600/400',
    featured: false,
    category: 'Strategic Consulting',
    year: '2022',
    outcome: 'HIPAA compliance achieved, 60% performance improvement'
  },
  {
    id: '5',
    title: 'Open Source Developer Tools',
    description: 'Created and maintain several open source tools that help developers build better software faster, with 10k+ GitHub stars.',
    longDescription: 'Developed a suite of developer productivity tools including CLI utilities, VS Code extensions, and automation frameworks. Active maintainer with growing community.',
    technologies: ['TypeScript', 'Node.js', 'Go', 'Rust', 'WebAssembly'],
    githubUrl: 'https://github.com/example',
    imageUrl: '/api/placeholder/600/400',
    featured: false,
    category: 'Open Source',
    year: '2021-Present',
    outcome: '10k+ stars, 500+ contributors'
  },
  {
    id: '6',
    title: 'Innovation Workshop Series',
    description: 'Designed and facilitated innovation workshops for enterprise clients, helping them identify opportunities and build internal innovation capabilities.',
    longDescription: 'Created a methodology for innovation discovery and validation, delivered workshops to 500+ executives and engineers across multiple Fortune 500 companies.',
    technologies: ['Design Thinking', 'Lean Startup', 'Agile', 'User Research'],
    imageUrl: '/api/placeholder/600/400',
    featured: false,
    category: 'Speaking & Workshops',
    year: '2021-2023',
    outcome: '20+ workshops, 500+ participants trained'
  }
]

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Projects & <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of strategic consulting engagements, technical leadership projects, 
              and innovative solutions that drive measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
              <p className="text-lg text-muted-foreground">
                Highlighting some of the most impactful projects and engagements
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id} className="card group hover:shadow-lg transition-shadow">
                  <div className="card-content space-y-4">
                    {/* Project Image Placeholder */}
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <span className="text-muted-foreground">Project Screenshot</span>
                    </div>

                    {/* Category & Year */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-primary font-medium">
                        {project.category}
                      </span>
                      <span className="text-muted-foreground flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                      <div className="text-sm">
                        <span className="font-medium text-accent-600">Outcome: </span>
                        <span className="text-muted-foreground">{project.outcome}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span 
                          key={tech}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-4 pt-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-primary hover:underline"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="section bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">More Projects</h2>
              <p className="text-lg text-muted-foreground">
                Additional work across various domains and technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="card group hover:shadow-lg transition-shadow">
                  <div className="card-content space-y-4">
                    {/* Project Image Placeholder */}
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Project Screenshot</span>
                    </div>

                    {/* Category & Year */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-primary font-medium">
                        {project.category}
                      </span>
                      <span className="text-muted-foreground">{project.year}</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you need strategic guidance, technical leadership, or help 
              turning your vision into reality, let's discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary btn-lg"
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="btn-outline btn-lg"
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