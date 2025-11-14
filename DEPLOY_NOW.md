# 🚀 DEPLOY NOW - Venus Funeral Website

**Ready to go live? Follow these steps!**

---

## Step 1: Pre-Flight Check (2 minutes) ✈️

Run the automated check:

```bash
cd /Users/erictsang/Desktop/LetsGetWeb/Clients/Client_venusfuneralservice/venus-funeral-website-main
./deploy-check.sh
```

**If check fails**, fix the issues it reports.

---

## Step 2: Choose Deployment Method

### 🌟 Method A: Netlify Drag & Drop (Easiest - 2 minutes)

1. **Build locally:**
   ```bash
   yarn build:export
   ```

2. **Open in Finder:**
   ```bash
   open dist/apps/venus-funeral-website/exported
   ```

3. **Drag & Drop:**
   - Go to https://app.netlify.com/drop
   - Drag the `exported` folder onto the page
   - Wait 30 seconds
   - **Done!** Your site is live! 🎉

4. **Enable CMS:**
   - Click on your deployed site
   - Go to **Identity** → Enable Identity
   - Go to **Git Gateway** → Enable Git Gateway
   - Go to **Identity** → Invite users → Add your email
   - Check email and accept invitation
   - Access CMS at: `https://your-site.netlify.app/admin`

---

### 🔄 Method B: Netlify + GitHub (Recommended - Auto-updates)

**Prerequisites:** Code pushed to GitHub

1. **Go to Netlify:**
   https://app.netlify.com → "Add new site" → "Import an existing project"

2. **Connect GitHub:**
   - Authorize Netlify
   - Select your repository

3. **Configure (copy these exactly):**
   ```
   Build command: yarn build:export
   Publish directory: dist/apps/venus-funeral-website/exported
   ```

4. **Deploy:**
   - Click "Deploy site"
   - Wait 2-3 minutes
   - **Done!** Your site is live! 🎉

5. **Enable CMS:** (Same as Method A, step 4)

6. **Bonus - Auto-deploy on push:**
   - Now every time you `git push`, site auto-updates! ✨

---

### ⚡ Method C: Vercel (Alternative)

**Prerequisites:** Code pushed to GitHub

1. **Go to Vercel:**
   https://vercel.com → "Add New Project"

2. **Import repository:**
   - Select your GitHub repo
   - Click "Import"

3. **Configure:**
   ```
   Framework Preset: Next.js
   Root Directory: apps/venus-funeral-website
   Build Command: cd ../.. && yarn build venus-funeral-website
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - **Done!** Your site is live! 🎉

**Note:** CMS requires additional setup on Vercel. Netlify is recommended for CMS.

---

## Step 3: Verify Deployment (5 minutes) ✅

Visit your new site and check:

- [ ] Homepage loads
- [ ] Click all navigation links
- [ ] Images appear
- [ ] Contact form works
- [ ] Looks good on mobile (resize browser)
- [ ] CMS accessible at `/admin` (Netlify only)

**Full checklist:** See [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)

---

## Step 4: Configure Custom Domain (Optional)

**In Netlify/Vercel dashboard:**

1. Go to **Domain settings**
2. Click "Add custom domain"
3. Enter your domain (e.g., `venusfuneral.com`)
4. Update DNS records as instructed
5. Wait for SSL certificate (automatic, 24-48 hours)

**Popular domain registrars:**
- Namecheap: https://www.namecheap.com
- GoDaddy: https://www.godaddy.com
- Google Domains: https://domains.google

---

## 🎊 You're Live!

Your website is now online and accessible to the world!

### 📱 Share Your Site

Your site URL will be:
- **Netlify:** `https://venus-funeral-[random].netlify.app`
- **Vercel:** `https://venus-funeral-[random].vercel.app`
- **Custom domain:** `https://yourdomain.com`

### 📝 Update Content

**Via CMS (Netlify):**
1. Go to `https://your-site.com/admin`
2. Log in
3. Edit content
4. Save → Site auto-updates!

**Via Code:**
```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main
# Site auto-updates in 2-3 minutes
```

---

## 🆘 Having Issues?

### Build Failed?
```bash
rm -rf node_modules dist .next
yarn install
yarn build:export
```

### Can't access CMS?
- Only works on Netlify (not drag & drop, need GitHub connection)
- Must enable Identity + Git Gateway
- Must use HTTPS (not HTTP)
- Check invitation email

### Site not updating?
- Check deploy logs in dashboard
- Wait 2-3 minutes for deploy to complete
- Clear browser cache (Cmd+Shift+R)

### Need more help?
- 📖 **Quick Start:** [QUICK_START.md](./QUICK_START.md)
- 📖 **Full Guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- 📋 **Checklist:** [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)
- 💬 **Netlify Support:** https://www.netlify.com/support/
- 💬 **Vercel Support:** https://vercel.com/support

---

## 📊 Quick Reference

### Local Development
```bash
yarn dev              # Start dev server (localhost:4200)
yarn start:cms        # Start CMS proxy
```

### Build & Deploy
```bash
yarn build:export     # Build for production
yarn preview          # Preview build locally
./deploy-check.sh    # Validate before deploy
```

### Deployment Configs
- **Netlify:** See `netlify.toml`
- **Vercel:** See `vercel.json`
- **CMS:** See `apps/venus-funeral-website/public/admin/config.yml`

---

## 🎯 Success Checklist

After deployment:

- [ ] Site is live and accessible
- [ ] All pages work
- [ ] Images load
- [ ] Forms work
- [ ] Mobile responsive
- [ ] CMS accessible (if using Netlify + GitHub)
- [ ] SSL certificate active (HTTPS)
- [ ] Custom domain configured (if applicable)
- [ ] Social media links work
- [ ] Contact information is correct

---

## 🌟 Pro Tips

1. **Bookmark your CMS:** `https://your-site.com/admin`
2. **Save your Netlify/Vercel login** - you'll need it for updates
3. **Set up notifications** - get email alerts for failed deploys
4. **Regular backups** - Git does this automatically
5. **Monitor your site** - use UptimeRobot or similar
6. **Update regularly** - keep content fresh

---

## 🎉 Congratulations!

You've successfully deployed the Venus Funeral Service website!

**What's next?**
- Share your site with stakeholders
- Submit to search engines (Google, Bing)
- Update social media profiles with new URL
- Set up analytics (Google Analytics)
- Monitor traffic and feedback

**Need to make changes?**
- Content: Use CMS at `/admin`
- Code: Push to GitHub (auto-deploys)

---

**Deployment Date:** ________________

**Live URL:** ________________

**CMS URL:** ________________

**Deployed by:** ________________

---

### 🙏 Thank You!

Your Venus Funeral Service website is now live and ready to serve your community.

For ongoing support, refer to the documentation files in this project.

**Good luck!** 🚀

