# Deployment Guide - willmclemore.com

This guide covers the deployment process for willmclemore.com, which is hosted on Railway with automatic deployments from GitHub.

## 🚀 Quick Start

The site is already deployed and live at https://willmclemore.com. Any push to the `main` branch automatically deploys to production.

## 📋 Prerequisites

1. **Railway Account**: Sign up at [railway.app](https://railway.app)
2. **GitHub Repository**: Code must be in the connected GitHub repo
3. **Environment Variables**: Set up in Railway dashboard (see below)

## 🏗️ Infrastructure Overview

### Platform: Railway
- **Why Railway?** Full-stack platform with integrated PostgreSQL, automatic SSL, and simple deployment
- **Database**: PostgreSQL hosted on Railway (single database for all environments)
- **Domain**: Custom domain with SSL configured
- **Auto-deploy**: Connected to GitHub for continuous deployment

### Architecture
```
GitHub (main branch) → Railway Build → Deploy → willmclemore.com
                          ↓
                    PostgreSQL DB
```

## 🔧 Railway Configuration

### railway.toml
```toml
[build]
builder = "nixpacks"

[deploy]
healthcheckPath = "/api/health"
healthcheckTimeout = 300
restartPolicyType = "on_failure"
restartPolicyMaxRetries = 3
startCommand = "npm run railway:start"

[deploy.domains]
"willmclemore.com" = { port = 8080 }

[environments.production]
[environments.production.variables]
NODE_ENV = "production"
```

### Key Configuration Points
- **Port**: 8080 (required for custom domain routing)
- **Health Check**: `/api/health` endpoint monitors app status
- **Restart Policy**: Automatically restarts on failure (max 3 retries)
- **Build**: Uses Nixpacks for automatic dependency detection

## 🔐 Environment Variables

### Required Variables

```bash
# Database (automatically provided by Railway)
DATABASE_URL="postgresql://..."

# Site Configuration
SITE_URL="https://willmclemore.com"
SITE_NAME="Will McLemore"
CONTACT_EMAIL="your-email@example.com"

# Authentication (if using admin features)
NEXTAUTH_URL="https://willmclemore.com"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
```

### Optional Variables

```bash
# Analytics
GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# Email Service (choose one)
SENDGRID_API_KEY="SG...."
# or
RESEND_API_KEY="re_..."

# AI Services (for content generation)
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."
GROK_API_KEY="..."
DEEPSEEK_API_KEY="..."

# Social Media (for auto-posting)
TWITTER_API_KEY="..."
TWITTER_API_SECRET="..."
LINKEDIN_API_KEY="..."
```

### Setting Environment Variables in Railway

1. Navigate to your project in Railway dashboard
2. Click on your service
3. Go to "Variables" tab
4. Add each variable as key-value pairs
5. Railway automatically restarts the app when variables change

## 📦 Deployment Process

### Automatic Deployment (Recommended)

1. **Make changes locally**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Railway automatically**:
   - Detects the push
   - Runs the build process
   - Deploys database migrations
   - Starts the application
   - Performs health checks

3. **Monitor deployment**:
   - Check Railway dashboard for build logs
   - Visit https://willmclemore.com to verify

### Manual Deployment

If needed, you can trigger a manual deployment:

1. **Via Railway CLI**:
   ```bash
   railway up
   ```

2. **Via Dashboard**:
   - Go to your Railway project
   - Click "Redeploy" button

## 🗄️ Database Management

### Production Database

- **Hosted by Railway**: Automatically provisioned PostgreSQL
- **Connection**: Via `DATABASE_URL` environment variable
- **Backups**: Railway provides automatic daily backups

### Database Migrations

Migrations run automatically during deployment via the start command:

```bash
# This runs automatically, but you can run manually if needed:
railway run npx prisma migrate deploy
```

### Accessing Production Database

```bash
# View/edit data in production
railway run npx prisma studio

# Run production migrations manually
railway run npx prisma migrate deploy

# Reset database (CAUTION: destroys all data)
railway run npx prisma migrate reset
```

## 🚨 Troubleshooting

### Common Issues and Solutions

#### 1. Build Failures

**Symptom**: Deployment fails during build phase

**Solutions**:
- Check Railway build logs for specific errors
- Ensure all dependencies are in `package.json`
- Verify `prisma generate` runs before `next build`
- Check for TypeScript errors locally with `npm run build`

#### 2. Health Check Failures

**Symptom**: App builds but won't start, health checks fail

**Solutions**:
- Verify `/api/health` endpoint exists and returns 200
- Check `NODE_ENV` is set to "production"
- Ensure port 8080 is used (not 3000)
- Disable Next.js standalone mode if enabled

#### 3. Database Connection Issues

**Symptom**: "Can't reach database server" errors

**Solutions**:
- Verify `DATABASE_URL` is set in Railway variables
- Check database service is running in Railway
- Ensure Prisma client is generated (`npx prisma generate`)
- Run migrations: `railway run npx prisma migrate deploy`

#### 4. Environment Variable Issues

**Symptom**: Features not working, API keys not found

**Solutions**:
- Double-check variable names (case-sensitive)
- Ensure no quotes around values in Railway dashboard
- Restart service after adding new variables
- Use `process.env` consistently in code

### Debugging Commands

```bash
# View production logs
railway logs

# Check environment variables
railway run env | grep YOUR_VAR

# Test database connection
railway run npx prisma db pull

# Run commands in production context
railway run [any command]
```

## 🔄 Rollback Procedure

If a deployment causes issues:

1. **Via GitHub**:
   - Revert the problematic commit
   - Push to main to trigger new deployment

2. **Via Railway**:
   - Go to "Deployments" tab
   - Find previous successful deployment
   - Click "Redeploy" on that version

## 📊 Monitoring

### Health Checks
- Endpoint: `https://willmclemore.com/api/health`
- Checked every 30 seconds by Railway
- Returns JSON with status and timestamp

### Logs
- Available in Railway dashboard
- Includes build logs and runtime logs
- Can filter by date and search

### Performance
- Railway provides basic metrics (CPU, Memory, Network)
- Consider adding external monitoring (e.g., Sentry, LogRocket)

## 🛠️ Local Development

### Setup
```bash
# Clone repository
git clone https://github.com/willtmc/willmclemore.com
cd willmclemore.com

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Railway DATABASE_URL

# Run development server
npm run dev
```

### Using Production Database Locally
The project is configured to use Railway's production database for local development:
- No Docker or local database needed
- Same data in development and production
- Be cautious when testing destructive operations

## 📝 Deployment Checklist

Before deploying:

- [ ] Run `npm run build` locally to check for errors
- [ ] Test database migrations with `npx prisma migrate dev`
- [ ] Verify environment variables are set in Railway
- [ ] Check that health endpoint works
- [ ] Review changes for sensitive data
- [ ] Ensure no console.log statements in production code

## 🆘 Getting Help

1. **Railway Documentation**: https://docs.railway.app
2. **Railway Discord**: Active community for support
3. **Project Issues**: https://github.com/willtmc/willmclemore.com/issues
4. **Railway Status**: https://status.railway.app

## 📌 Important Notes

1. **No Vercel**: Despite the todo mentioning Vercel, this project uses Railway
2. **Single Database**: Both local and production use the same Railway database
3. **Auto-deploy**: Every push to main deploys automatically - be careful!
4. **SSL**: Handled automatically by Railway for custom domains
5. **Scaling**: Railway handles scaling automatically based on traffic

---

Last updated: January 2025