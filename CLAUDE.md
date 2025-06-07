# CLAUDE.md - willmclemore.com Project Guide

## Project Overview

This is Will McLemore's personal branding website, live at https://willmclemore.com. The site serves multiple purposes:
- Personal portfolio and professional showcase
- Blog platform with automated content generation
- "Bat Signal" for interesting project opportunities
- Thought leadership platform for the auction industry

## Current Status (as of January 2025)

### ✅ What's Already Built and Deployed
- **Live Site**: Fully deployed on Railway at willmclemore.com
- **Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL
- **Core Pages**: Home, About, Projects, Blog, Contact
- **Database Schema**: Complete schema for all features including Intelligence System
- **UI/UX**: Responsive design with dark mode support
- **Infrastructure**: Docker Compose, Railway deployment, SSL configured

### 🔧 What Needs Implementation
1. **Blog Database Integration** - Blog posts are currently hardcoded
2. **Project Portfolio** - Need to add real case studies and projects
3. **Intelligence System** - Schema exists but needs activation
4. **Newsletter** - UI exists but backend not connected
5. **Admin Dashboard** - Basic structure at /admin needs development

## Key Project Context

### 1. This is THREE Projects Merged Into One
Based on our Gavel database review, this site combines:
- **Project 6844**: Personal branding website (original)
- **Project 6858**: Daily Auction Industry Blog automation
- **Project 6864**: Weekly AI Deep Dive reports

### 2. Content Strategy
- **Daily (Mon-Fri)**: Automated auction industry news with Will's commentary
- **Weekly (Sunday)**: AI-powered deep dive analysis using multiple models
- **Monthly**: AI debate format on hot auction topics
- **Ad-hoc**: Manual blog posts (like the Elting Morison book review)

### 3. Intelligence System Architecture
The database already has tables for:
- `IntelligenceItem` - News and data collection
- `AIAnalysis` - Multi-model AI responses
- `TrendAnalysis` - Pattern detection
- `ContentIdea` - Blog post generation
- `ResearchSource` - Data sources
- `BlogPost` - With syndication tracking

## Development Priorities

### Phase 1: Activate What Exists
1. **Connect Blog to Database** (High Priority)
   - Wire up existing blog UI to Prisma models
   - Implement create/edit/publish workflow
   - Test with first real posts

2. **Populate Projects** (High Priority)
   - Add Gavel v2 as showcase project
   - Add McLemore Auction Company work
   - Include measurable outcomes

3. **Implement Basic Admin** (Medium Priority)
   - Secure /admin route
   - Add blog post creation UI
   - Project management interface

### Phase 2: Automation Features
1. **Daily News Aggregation**
   - Implement news fetching from identified sources
   - Create morning email/Slack integration
   - Auto-generate daily posts

2. **Weekly AI Analysis**
   - Integrate Grok, DeepSeek, Claude, GPT-4 APIs
   - Build synthesis engine
   - Generate comprehensive reports

3. **Publishing Pipeline**
   - Auto-publish to blog
   - Cross-post to social media
   - Track engagement metrics

## Important Technical Details

### Environment Variables Needed
```bash
# Database (already configured)
DATABASE_URL

# AI Services (need to add)
OPENAI_API_KEY
ANTHROPIC_API_KEY
GROK_API_KEY
DEEPSEEK_API_KEY

# Email Service (choose one)
SENDGRID_API_KEY
# or
RESEND_API_KEY

# Analytics (ready to configure)
GA_MEASUREMENT_ID

# Social Media (for auto-posting)
TWITTER_API_KEY
TWITTER_API_SECRET
LINKEDIN_API_KEY
```

### Repository Information
- **GitHub**: https://github.com/willtmc/willmclemore.com
- **Local Path**: /Users/willmclemore/wills_code/willmclemore.com
- **Deployment**: Railway (auto-deploys from main branch)

### Database Models Ready for Use
All these Prisma models exist and are ready:
- User (admin access)
- BlogPost (with publishing workflow)
- Project (portfolio items)
- Contact (form submissions)
- NewsletterSubscriber
- IntelligenceItem (news data)
- AIAnalysis (AI responses)
- TrendAnalysis
- ContentIdea
- ResearchSource
- SocialMediaPost (syndication)

## Quick Start for AI Agents

To work on this project:

1. **Always use the existing schema** - Don't create new tables, use what's there
2. **Check Railway logs** - The app is live, so check production logs for issues
3. **Use Prisma Studio** - `npx prisma studio` to view/edit data locally
4. **Test locally first** - `docker-compose up` for local development
5. **Small PRs** - Make focused changes that can be reviewed easily

## Content Examples Needed

### Blog Post Ideas
1. "Why Organizations Resist Innovation: Lessons from Naval Gunnery" (Elting Morison book)
2. Daily auction industry news with commentary
3. Weekly AI analysis of auction trends
4. Case studies from successful auctions

### Project Portfolio Items
1. Gavel v2 - Auction Management Platform
2. McLemore Auction Company - Digital transformation
3. Auction industry speaking engagements
4. Open source contributions

## Integration Points

### With Gavel v2
- Could showcase Gavel as a major project
- Use Gavel's press release system for content ideas
- Cross-promote between platforms

### With McLemore Auction
- Highlight successful auction case studies
- Link to current auctions
- Showcase expertise through real examples

## Notes for Will

1. **The foundation is solid** - The hard part (infrastructure, deployment, schema) is done
2. **Focus on content first** - Get real projects and blog posts in to make it valuable
3. **Automation can wait** - Manual posting works fine initially
4. **The Intelligence System is powerful** - When activated, it will differentiate your site

## Common Commands

```bash
# Local development
cd /Users/willmclemore/wills_code/willmclemore.com
docker-compose up

# Database management
npx prisma studio
npx prisma migrate dev

# Deploy (automatic via Railway)
git push origin main

# View production logs
railway logs
```

## Architecture Decisions

1. **Why Railway over Vercel?** - Full-stack support with PostgreSQL
2. **Why Prisma?** - Type-safe database access with great DX
3. **Why not MDX files?** - Database allows dynamic content and automation
4. **Why Intelligence System?** - Differentiator for thought leadership

Remember: This site is not just a portfolio - it's a platform for establishing thought leadership in the auction industry through automated, AI-enhanced content creation.