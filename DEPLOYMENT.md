# Venus Funeral Website - Deployment Guide

This guide will help you deploy the Venus Funeral Service website to production.

## 📋 Prerequisites

Before deploying, ensure you have:
- Node.js 16+ and Yarn installed
- A GitHub repository for your code
- An account on your chosen hosting platform

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended for Netlify CMS)

Netlify is recommended since this project uses Netlify CMS for content management.

#### Step 1: Build Configuration

The site is already configured with an export target. Build commands are:

```bash
# Install dependencies
yarn install

# Build the production site
yarn build venus-funeral-website

# Export as static site
yarn nx run venus-funeral-website:export
```

The static files will be in: `dist/apps/venus-funeral-website/exported`

#### Step 2: Deploy to Netlify

**Option A: Via Netlify UI (Easiest)**

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command:** `yarn build venus-funeral-website && yarn nx run venus-funeral-website:export`
   - **Publish directory:** `dist/apps/venus-funeral-website/exported`
   - **Node version:** 16 or higher
6. Click "Deploy site"

**Option B: Using Netlify CLI**

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize and deploy:
   ```bash
   netlify init
   netlify deploy --prod
   ```

#### Step 3: Enable Netlify CMS

After deployment, you need to enable Git Gateway for Netlify CMS:

1. In Netlify dashboard, go to **Settings** → **Identity**
2. Click "Enable Identity"
3. Under **Registration preferences**, select "Invite only" (recommended)
4. Under **Services** → **Git Gateway**, click "Enable Git Gateway"
5. Invite users: Go to **Identity** tab → Click "Invite users"
6. Access the CMS at: `https://your-site.netlify.app/admin`

---

### Option 2: Vercel

Vercel is excellent for Next.js applications.

#### Deploy via Vercel UI

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project" → Import your repository
4. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `apps/venus-funeral-website`
   - **Build Command:** `cd ../.. && yarn build venus-funeral-website`
   - **Output Directory:** `.next` (leave as default)
5. Add Environment Variables (from `next.config.js`):
   - `facebookUrl`: `https://www.facebook.com/金星殯儀服務-395066911133842/`
   - `phone`: `9381 0003`
   - `email`: `info@venusfuneralservice.com`
6. Click "Deploy"

**Note:** Netlify CMS won't work out of the box on Vercel. You'll need to set up an alternative authentication method.

#### Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

### Option 3: Static Hosting (GitHub Pages, AWS S3, etc.)

For any static hosting provider:

#### Step 1: Build the static site

```bash
yarn install
yarn build venus-funeral-website
yarn nx run venus-funeral-website:export
```

#### Step 2: Deploy the exported files

Upload the contents of `dist/apps/venus-funeral-website/exported/` to your hosting provider.

**GitHub Pages:**
```bash
# Install gh-pages package
yarn add -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist/apps/venus-funeral-website/exported"

# Deploy
yarn deploy
```

---

## 🔧 Configuration Files

### Netlify Configuration

Create `netlify.toml` in the project root (already done if you used the setup):

```toml
[build]
  command = "yarn build venus-funeral-website && yarn nx run venus-funeral-website:export"
  publish = "dist/apps/venus-funeral-website/exported"

[build.environment]
  NODE_VERSION = "16"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel Configuration

Create `vercel.json` in the project root (already done if you used the setup):

```json
{
  "version": 2,
  "builds": [
    {
      "src": "apps/venus-funeral-website/package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "apps/venus-funeral-website/$1"
    }
  ]
}
```

---

## 🔐 Environment Variables

Make sure to set these environment variables in your hosting platform:

- `facebookUrl`: `https://www.facebook.com/金星殯儀服務-395066911133842/`
- `phone`: `9381 0003`
- `email`: `info@venusfuneralservice.com`

(These are already in `next.config.js` but you may want to make them configurable)

---

## 📝 Content Management

### Accessing Netlify CMS

Once deployed on Netlify with Identity enabled:

1. Go to `https://your-site.netlify.app/admin`
2. Log in with your invited email
3. Manage content through the CMS interface

### Local CMS Development

To test CMS locally:

```bash
# Terminal 1: Start the dev server
yarn dev

# Terminal 2: Start the CMS proxy
yarn start:cms
```

Then visit `http://localhost:4200/admin`

---

## 🧪 Testing Before Deploy

Always test your build locally:

```bash
# Build
yarn build venus-funeral-website

# Export
yarn nx run venus-funeral-website:export

# Serve locally (install serve if needed)
npx serve dist/apps/venus-funeral-website/exported
```

---

## 🐛 Troubleshooting

### Build Fails

1. Check Node.js version: `node --version` (should be 16+)
2. Clear cache: `rm -rf node_modules .next dist && yarn install`
3. Check for TypeScript errors: `yarn nx lint venus-funeral-website`

### CMS Not Working

1. Ensure Git Gateway is enabled in Netlify
2. Check that you're accessing via HTTPS (not HTTP)
3. Verify the backend configuration in `apps/venus-funeral-website/public/admin/config.yml`

### Images Not Loading

1. Check Cloudinary configuration (API key in config.yml)
2. Verify image paths in markdown files
3. Check network requests in browser DevTools

---

## 📊 Performance Tips

1. **Enable CDN**: Most hosting providers offer CDN by default
2. **Image Optimization**: The site uses Cloudinary - ensure images are optimized
3. **Caching**: Configure cache headers in your hosting platform
4. **Bundle Analysis**: Run `ANALYZE=true yarn build venus-funeral-website`

---

## 🔄 Continuous Deployment

Once connected to GitHub:

1. Push to `main` branch → Automatic deployment
2. Create branches for testing → Deploy previews
3. Pull requests → Preview deployments

---

## 📞 Support

For issues related to:
- **Nx**: Check [Nx Documentation](https://nx.dev)
- **Next.js**: Check [Next.js Documentation](https://nextjs.org/docs)
- **Netlify CMS**: Check [Netlify CMS Documentation](https://www.netlifycms.org/docs/)
- **Deployment**: Contact your hosting provider's support

---

## ✅ Post-Deployment Checklist

- [ ] Site loads correctly at production URL
- [ ] All pages are accessible
- [ ] Images and media load properly
- [ ] Forms work (contact form)
- [ ] CMS is accessible and functional (if using Netlify)
- [ ] Mobile responsive design works
- [ ] SEO meta tags are present
- [ ] Analytics tracking (if configured)
- [ ] SSL certificate is active (HTTPS)
- [ ] Custom domain is configured (if applicable)

---

**Ready to deploy? Choose your platform and follow the steps above!** 🚀

