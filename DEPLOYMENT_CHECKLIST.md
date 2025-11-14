# 📋 Deployment Checklist

Use this checklist to ensure your deployment is successful and complete.

## Pre-Deployment

### Code Preparation
- [ ] All code is committed to Git
- [ ] Latest changes are pushed to GitHub/GitLab
- [ ] No console errors in development mode
- [ ] All dependencies are listed in `package.json`
- [ ] Build succeeds locally (`yarn build:export`)
- [ ] Preview looks correct (`yarn preview`)

### Content Review
- [ ] All images are optimized (compressed)
- [ ] All text is proofread and correct
- [ ] Contact information is up-to-date
- [ ] Phone numbers and emails are correct
- [ ] Social media links work
- [ ] All blog posts are published

### Configuration
- [ ] Environment variables are documented
- [ ] Cloudinary API key is valid
- [ ] Facebook page URL is correct
- [ ] Email and phone in `next.config.js` are correct

## Deployment Process

### Initial Setup
- [ ] Hosting platform account created (Netlify/Vercel)
- [ ] Repository connected to hosting platform
- [ ] Build commands configured correctly
- [ ] Publish directory set correctly
- [ ] Node version specified (16+)

### Build Settings

**Netlify:**
- [ ] Build command: `yarn build:export`
- [ ] Publish directory: `dist/apps/venus-funeral-website/exported`
- [ ] Node version: 16 or higher

**Vercel:**
- [ ] Framework: Next.js
- [ ] Root directory: `apps/venus-funeral-website`
- [ ] Build command: Custom (from root)

### First Deployment
- [ ] Deployment initiated
- [ ] Build completed successfully
- [ ] No build errors or warnings
- [ ] Deploy logs reviewed
- [ ] Site is accessible at generated URL

## Post-Deployment Testing

### Functionality Testing
- [ ] Homepage loads correctly
- [ ] Navigation works (all menu items)
- [ ] All pages are accessible:
  - [ ] Home (`/`)
  - [ ] About (`/about`)
  - [ ] Services (`/services`)
  - [ ] Flowers (`/flowers`)
  - [ ] Knowledge/Blog (`/knowledges`)
  - [ ] Processes (`/processes`)
  - [ ] Contact (`/contact`)
- [ ] Dynamic routes work (service pages, blog posts)
- [ ] Contact form submits successfully
- [ ] Form validation works

### Content & Media
- [ ] All images load correctly
- [ ] No broken image links
- [ ] Videos play (if any)
- [ ] Image galleries work
- [ ] Lightbox/modals function properly
- [ ] Cloudinary images load

### Design & Responsiveness
- [ ] Desktop view looks correct (1920px, 1440px, 1024px)
- [ ] Tablet view looks correct (768px)
- [ ] Mobile view looks correct (375px, 414px)
- [ ] Navigation menu works on mobile
- [ ] Touch interactions work on mobile
- [ ] Fonts load correctly
- [ ] Colors match design

### Performance
- [ ] Page load time is acceptable (< 3 seconds)
- [ ] Images are lazy-loaded
- [ ] No layout shift (CLS)
- [ ] Lighthouse score > 80 (run in Chrome DevTools)
- [ ] Core Web Vitals are good

### SEO
- [ ] Page titles are correct
- [ ] Meta descriptions are present
- [ ] Open Graph tags for social sharing
- [ ] `robots.txt` allows indexing
- [ ] `sitemap.xml` is generated (if applicable)
- [ ] Favicon appears in browser tab

### Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Links & Navigation
- [ ] All internal links work
- [ ] All external links work
- [ ] External links open in new tab
- [ ] No 404 errors
- [ ] Redirects work (if any)

## CMS Setup (Netlify Only)

### Netlify Identity
- [ ] Identity is enabled
- [ ] Git Gateway is enabled
- [ ] Registration set to "Invite only"
- [ ] Users invited via email
- [ ] Invitation emails received
- [ ] Can log in to CMS at `/admin`

### CMS Testing
- [ ] Can access CMS dashboard
- [ ] Can view existing content
- [ ] Can edit existing content
- [ ] Can create new blog post
- [ ] Can upload images
- [ ] Changes trigger rebuilds
- [ ] Changes appear on live site

### CMS Permissions
- [ ] Correct users have access
- [ ] Admin access is restricted
- [ ] Content editors can only edit content
- [ ] Git commits show CMS changes

## Security

### HTTPS & SSL
- [ ] Site loads over HTTPS
- [ ] SSL certificate is valid
- [ ] HTTP redirects to HTTPS
- [ ] No mixed content warnings

### Security Headers
- [ ] Security headers are configured
- [ ] No sensitive data in client code
- [ ] API keys are not exposed
- [ ] Environment variables are secure

## Domain & DNS (If Using Custom Domain)

### Domain Configuration
- [ ] Custom domain purchased
- [ ] DNS records updated
- [ ] Domain pointing to hosting provider
- [ ] SSL certificate issued for domain
- [ ] www and non-www both work
- [ ] Domain propagation complete (24-48 hours)

### DNS Records
- [ ] A record or CNAME configured
- [ ] Netlify DNS or external DNS configured
- [ ] Email records preserved (if applicable)
- [ ] Subdomain records (if applicable)

## Analytics & Monitoring

### Analytics Setup (If Applicable)
- [ ] Google Analytics installed
- [ ] Facebook Pixel (if needed)
- [ ] Analytics tracking code tested
- [ ] Events are firing correctly

### Monitoring
- [ ] Uptime monitoring enabled
- [ ] Error tracking configured (Sentry, etc.)
- [ ] Performance monitoring enabled
- [ ] Email notifications set up

## Documentation

### Team Documentation
- [ ] Deployment process documented
- [ ] CMS access instructions provided
- [ ] Content update guidelines created
- [ ] Emergency contact information listed
- [ ] Credentials stored securely

### Client Handoff
- [ ] Site URL shared with client
- [ ] CMS login instructions provided
- [ ] Training session scheduled (if needed)
- [ ] Support contact information provided
- [ ] Domain transfer completed (if applicable)

## Backup & Recovery

### Backups
- [ ] Git repository is backed up
- [ ] Content is version controlled
- [ ] Database backup (if applicable)
- [ ] Media files backed up
- [ ] Recovery plan documented

## Optimization

### Performance Optimization
- [ ] Images compressed and optimized
- [ ] Unused code removed
- [ ] JavaScript minified
- [ ] CSS minified
- [ ] Caching configured

### SEO Optimization
- [ ] Submit sitemap to Google Search Console
- [ ] Submit site to Bing Webmaster Tools
- [ ] Social media profiles updated with URL
- [ ] Google My Business updated (if applicable)

## Final Checks

### Pre-Launch
- [ ] Client approval received
- [ ] Staging site reviewed
- [ ] All feedback implemented
- [ ] Final testing complete

### Launch Day
- [ ] Deployment to production completed
- [ ] DNS propagation verified
- [ ] All systems operational
- [ ] Monitoring active
- [ ] Team notified of launch

### Post-Launch (Week 1)
- [ ] Monitor error logs daily
- [ ] Check analytics for traffic
- [ ] Monitor server performance
- [ ] Check for any user-reported issues
- [ ] Verify CMS content updates work

## Maintenance Schedule

### Weekly
- [ ] Check uptime and performance
- [ ] Review error logs
- [ ] Update content via CMS

### Monthly
- [ ] Security updates check
- [ ] Dependency updates (`yarn upgrade-interactive`)
- [ ] Backup verification
- [ ] Performance audit

### Quarterly
- [ ] Full security audit
- [ ] SEO audit
- [ ] Content audit
- [ ] User feedback review

---

## Emergency Contacts

**Hosting Support:**
- Netlify: https://www.netlify.com/support/
- Vercel: https://vercel.com/support

**Technical Issues:**
- Developer: [Your contact info]
- Backup contact: [Backup contact]

**Critical Issues:**
1. Check status pages: status.netlify.com or vercel-status.com
2. Review deploy logs in hosting dashboard
3. Roll back to previous deployment if needed
4. Contact support immediately

---

**Deployment Date:** _______________  
**Deployed By:** _______________  
**Production URL:** _______________  
**CMS URL:** _______________

---

✅ **Checklist completed! Your site is ready for production!** 🚀

