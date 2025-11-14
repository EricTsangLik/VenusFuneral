# 🚀 Quick Start - Deploy Venus Funeral Website

This is a simplified guide to get your website deployed quickly.

## Prerequisites

- [ ] Node.js 16+ installed ([Download here](https://nodejs.org/))
- [ ] Yarn installed (`npm install -g yarn`)
- [ ] GitHub account
- [ ] Your code pushed to GitHub

## 🎯 Fastest Way to Deploy (5 minutes)

### Step 1: Test Your Build Locally

```bash
# Navigate to project directory
cd /Users/erictsang/Desktop/LetsGetWeb/Clients/Client_venusfuneralservice/venus-funeral-website-main

# Install dependencies (if not already done)
yarn install

# Build and export the site
yarn build:export

# Preview the built site
yarn preview
```

Visit `http://localhost:3000` to see your site.

### Step 2: Deploy to Netlify

**Option A: Drag & Drop (Simplest - 2 minutes)**

1. Build your site locally (run `yarn build:export`)
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the folder `dist/apps/venus-funeral-website/exported` onto the page
4. Done! 🎉

**Option B: Connect to GitHub (Recommended - Automatic updates)**

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize
4. Select your repository
5. Use these settings:
   ```
   Build command: yarn build:export
   Publish directory: dist/apps/venus-funeral-website/exported
   ```
6. Click "Deploy site"
7. Wait 2-3 minutes for deployment

### Step 3: Enable CMS (Optional but recommended)

After your site is deployed:

1. In Netlify dashboard → **Settings** → **Identity**
2. Click "Enable Identity"
3. Set registration to "Invite only"
4. Scroll to **Services** → **Git Gateway** → "Enable Git Gateway"
5. Go to **Identity** tab → "Invite users" → Add your email
6. Check your email and accept the invitation
7. Access CMS at: `https://your-site-name.netlify.app/admin`

## 🎨 Custom Domain (Optional)

In Netlify:
1. Go to **Domain settings**
2. Click "Add custom domain"
3. Follow the instructions to update your DNS

## ✅ Verify Everything Works

- [ ] Site loads at the Netlify URL
- [ ] All pages are accessible (Home, About, Services, etc.)
- [ ] Images load correctly
- [ ] Contact form works
- [ ] CMS is accessible at `/admin` (if enabled)

## 🆘 Quick Troubleshooting

**Build fails?**
```bash
# Clear everything and try again
rm -rf node_modules dist .next
yarn install
yarn build:export
```

**CMS not working?**
- Make sure you're using HTTPS (not HTTP)
- Check that Git Gateway is enabled in Netlify
- Verify you've accepted the email invitation

**Need help?**
- Check the full [DEPLOYMENT.md](./DEPLOYMENT.md) guide
- Contact Netlify support

## 📝 Useful Commands

```bash
# Start development server
yarn dev

# Build for production
yarn build:prod

# Export static site
yarn export

# Build and export in one command
yarn build:export

# Preview built site locally
yarn preview

# Start CMS proxy for local development
yarn start:cms
```

## 🔄 Making Updates

Once deployed via GitHub to Netlify:

1. Make changes to your code locally
2. Commit: `git add . && git commit -m "Your message"`
3. Push: `git push origin main`
4. Netlify automatically rebuilds and deploys! ✨

---

**That's it! Your site should now be live! 🎉**

Your Netlify URL will look like: `https://venus-funeral-[random].netlify.app`

You can change this to a custom name in Netlify settings.

