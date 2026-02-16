# Deployment — willmclemore.com

Static HTML served by nginx on the DigitalOcean droplet.

## Infrastructure

- **Server:** `root@104.131.182.220` (DigitalOcean droplet)
- **Web root:** `/var/www/willmclemore.com/`
- **Web server:** nginx with Let's Encrypt SSL
- **Content:** Single `index.html` + `will-mclemore.jpg`

## Deploy

```bash
# Edit locally, then push to droplet
scp static/index.html root@104.131.182.220:/var/www/willmclemore.com/index.html
```

Or edit directly:
```bash
ssh root@104.131.182.220
vi /var/www/willmclemore.com/index.html
```

No build step. No restart needed. nginx serves static files immediately.

## SSL

Managed by Certbot (Let's Encrypt). Auto-renews via cron.

## Backup

Before changes:
```bash
ssh root@104.131.182.220 "cp /var/www/willmclemore.com/index.html /var/www/willmclemore.com/index.html.bak"
```
