# Will McLemore - Personal Branding Website

A modern, professional personal branding website built with Next.js 14, TypeScript, Tailwind CSS, and deployed on Railway. Features a clean design, responsive layout, and powerful content management capabilities.

## 🚀 Features

### Core Functionality
- **5-Page Architecture**: Home, About, Projects, Blog, Contact
- **"Bat Signal" System**: Prominent availability messaging on homepage
- **Contact Management**: Professional contact form with spam protection
- **Project Showcase**: Portfolio display with detailed case studies
- **Blog System**: Content management with social media integration
- **Responsive Design**: Mobile-first approach with modern UI/UX

### Technical Features
- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** with custom design system and dark mode support
- **Prisma ORM** with PostgreSQL for robust data management
- **Railway Deployment** with health checks and monitoring
- **SEO Optimized** with sitemap generation and metadata management

### Advanced Capabilities
- **Social Media Integration**: Ready for Twitter, LinkedIn, GitHub, Instagram
- **Blog Auto-Syndication**: Framework for cross-platform content sharing
- **Analytics Integration**: Google Analytics and Vercel Analytics support
- **Contact Form Processing**: Validation, spam detection, and email notifications
- **Theme System**: Light/dark mode with system preference detection

## 🛠 Technology Stack

- **Frontend**: Next.js 14, React 19, TypeScript
- **Styling**: Tailwind CSS, Headless UI, Lucide React Icons
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (Railway hosted)
- **Deployment**: Railway with Docker containerization
- **Analytics**: Vercel Analytics, Google Analytics (configurable)
- **Form Handling**: React Hook Form with Zod validation

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- PostgreSQL database (local or hosted)
- Railway account for deployment
- Environment variables configured

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd willmclemore.com
npm install
```

### 2. Environment Setup

Copy the example environment file and configure your variables:

```bash
cp env.example .env
```

Configure the following environment variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/willmclemore_db?schema=public"

# Site Configuration
SITE_URL="https://willmclemore.com"
SITE_NAME="Will McLemore"
CONTACT_EMAIL="will@mclemoreauction.com"

# Social Media APIs (optional)
TWITTER_API_KEY=""
LINKEDIN_CLIENT_ID=""
GITHUB_TOKEN=""

# Analytics (optional)
GOOGLE_ANALYTICS_ID=""
VERCEL_ANALYTICS_ID=""

# Email Configuration (optional)
SMTP_HOST=""
SMTP_PORT=""
SMTP_USER=""
SMTP_PASS=""
```

### 3. Database Setup

This project uses **PostgreSQL for both development and production** to ensure environment parity and avoid database-specific issues.

### Local Development Setup

1. **Prerequisites**: Make sure you have Docker installed

2. **Start the local database**:
   ```bash
   npm run db:up
   ```

3. **Configure your environment file**:
   ```bash
   cp env.example .env
   ```

4. **Update `.env` with local development values**:
   ```bash
   DATABASE_URL="postgresql://willmclemore:dev_password_123@localhost:5432/willmclemore_dev?schema=public"
   NEXTAUTH_URL="http://localhost:3000"
   SITE_URL="http://localhost:3000"
   ```

5. **Run database migrations**:
   ```bash
   npm run db:migrate:dev
   ```

6. **Start the development server**:
   ```bash
   npm run dev
   ```

### Automated Setup

You can also use the automated setup command:
```bash
npm run dev:setup
```

This will:
- Start PostgreSQL with Docker
- Wait for the database to be ready
- Run migrations
- Start the development server

### Database Management Commands

```bash
# Start PostgreSQL container
npm run db:up

# Stop PostgreSQL container
npm run db:down

# Reset database (removes all data)
npm run db:reset

# Run migrations in development
npm run db:migrate:dev

# Push schema changes without migration
npm run db:push

# Open Prisma Studio (database GUI)
npm run db:studio
```

### Why PostgreSQL Everywhere?

- **Environment Parity**: Your local environment matches production exactly
- **No Schema Conflicts**: One `schema.prisma` file works for all environments
- **Better Testing**: Catch PostgreSQL-specific issues during development
- **Professional Practice**: Industry standard approach

### Production Deployment

Production uses Railway's managed PostgreSQL service. The deployment automatically:
1. Runs `prisma migrate deploy` to apply schema changes
2. Generates the Prisma client
3. Starts the application

Environment variables are managed through Railway's dashboard or CLI.

## 🚀 Railway Deployment

### 1. Database Setup

1. Create a PostgreSQL database on Railway
2. Copy the database URL to your environment variables
3. Run database migrations:

```bash
npx prisma migrate deploy
```

### 2. Deploy Application

1. Connect your GitHub repository to Railway
2. Configure environment variables in Railway dashboard
3. Deploy will happen automatically on push to main branch

### 3. Custom Domain

1. Add your custom domain in Railway dashboard
2. Update DNS records to point to Railway
3. SSL certificates are automatically provisioned

### 4. Health Monitoring

The application includes a health check endpoint at `/api/health` that Railway uses for monitoring.

## 📊 Analytics Setup

### Google Analytics 4

1. Create a GA4 property
2. Add your Measurement ID to `GOOGLE_ANALYTICS_ID`
3. Analytics will be automatically initialized

### Vercel Analytics

1. Enable Vercel Analytics in your project
2. Add your Analytics ID to `VERCEL_ANALYTICS_ID`

## 📧 Contact Form Configuration

The contact form includes:

- **Validation**: Client and server-side validation with Zod
- **Spam Protection**: Keyword filtering and rate limiting
- **Database Storage**: All submissions stored in PostgreSQL
- **Email Notifications**: Ready for integration with email services

To enable email notifications, configure SMTP settings and implement email sending in `/api/contact/route.ts`.

## 🎨 Customization

### Design System

The design system is built with Tailwind CSS and includes:

- **Color Palette**: Primary, secondary, and accent colors
- **Typography**: Inter font with proper hierarchy
- **Components**: Reusable UI components with consistent styling
- **Dark Mode**: Automatic system preference detection

### Content Management

Update content by modifying:

- **Constants**: `/src/lib/constants.ts` for site-wide settings
- **Homepage Content**: `/src/app/page.tsx` for hero and bat signal
- **About Content**: `/src/app/about/page.tsx` for bio and expertise
- **Projects**: Add to database or modify placeholder data

## 🔧 Development Guidelines

### Code Organization

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── lib/                # Utility functions and configurations
├── types/              # TypeScript type definitions
└── styles/             # Global styles and Tailwind config
```

### Best Practices

- **TypeScript**: Use strict typing for all components and functions
- **Responsive Design**: Mobile-first approach with breakpoint testing
- **Performance**: Optimize images, lazy load content, minimize bundle size
- **SEO**: Proper meta tags, structured data, and sitemap generation
- **Accessibility**: WCAG 2.1 AA compliance with proper ARIA labels

## 📈 Performance Optimization

### Core Web Vitals

- **LCP**: Optimized with Next.js Image component and font loading
- **FID**: Minimal JavaScript with efficient event handling
- **CLS**: Proper image dimensions and layout stability

### SEO Features

- **Meta Tags**: Dynamic generation for all pages
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Automatically generated with proper priorities
- **Robots.txt**: Search engine crawling configuration

## 🔒 Security

### Implementation

- **Input Validation**: All forms validated with Zod schemas
- **Rate Limiting**: API endpoints protected against abuse
- **Spam Protection**: Multiple layers of spam detection
- **Headers**: Security headers configured in Next.js config

## 📚 Additional Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Railway Documentation](https://docs.railway.app)

### Support

For questions or issues:

1. Check the documentation above
2. Review the codebase comments
3. Create an issue in the repository
4. Contact the development team

## 📝 License

This project is proprietary software. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**
