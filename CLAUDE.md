# CLAUDE.md - willmclemore.com

## What This Is

Will McLemore's personal site. Static HTML, deployed to DigitalOcean droplet.

## Deployment

```bash
# Source file
static/index.html

# Deploy
scp static/index.html root@104.131.182.220:/var/www/willmclemore.com/index.html

# Push
git add -A && git commit -m "..." && git push
```

## Infrastructure

- **Live**: https://willmclemore.com
- **Host**: DigitalOcean droplet (104.131.182.220)
- **Web root**: `/var/www/willmclemore.com/`
- **Nginx**: `/etc/nginx/sites-available/willmclemore.com`
- **SSL**: Certbot (auto-renew)
- **Repo**: https://github.com/willtmc/willmclemore.com
