# 🔧 Troubleshooting Guide - Venus Funeral Website

Common issues and their solutions.

---

## 🛠️ Build Issues

### Error: "Node version too old"

**Problem:** Build fails with Node version error.

**Solution:**
```bash
# Check your Node version
node -v

# If less than v16, install Node 16+
# Using nvm (recommended):
nvm install 16
nvm use 16

# Or download from: https://nodejs.org
```

---

### Error: "Cannot find module" or dependency errors

**Problem:** Missing or corrupted dependencies.

**Solution:**
```bash
# Clean install
rm -rf node_modules yarn.lock
yarn install
```

---

### Build fails with "Out of memory"

**Problem:** Node runs out of memory during build.

**Solution:**
```bash
# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 yarn build:export
```

---

### Error: "Module parse failed" or webpack errors

**Problem:** Webpack configuration issue or incompatible package.

**Solution:**
```bash
# Clear all caches
rm -rf node_modules .next dist
yarn install
yarn build:export
```

---

## 🌐 Deployment Issues

### Netlify: Build fails with "Command failed with exit code 1"

**Problem:** Build command error on Netlify.

**Solution:**
1. Check Netlify build logs for specific error
2. Ensure build settings are:
   ```
   Build command: yarn build:export
   Publish directory: dist/apps/venus-funeral-website/exported
   Node version: 16
   ```
3. Add `.nvmrc` file (already included) to project root

---

### Vercel: "No Output Directory named 'public' found"

**Problem:** Vercel looking in wrong directory.

**Solution:**
- Set **Root Directory** to: `apps/venus-funeral-website`
- Or use the provided `vercel.json` configuration

---

### Site deployed but shows "Page Not Found"

**Problem:** Routing issue with static export.

**Solution:**
1. Check `netlify.toml` has redirect rules (it does)
2. For other hosts, ensure all requests route to `index.html`
3. Verify files were exported: `ls dist/apps/venus-funeral-website/exported/`

---

### Images return 404 errors

**Problem:** Image paths incorrect after deployment.

**Solution:**
1. Check image paths in markdown files
2. Verify Cloudinary configuration in `public/admin/config.yml`
3. Check browser DevTools Network tab for exact failing URL
4. Ensure images exist in Cloudinary or `/public` folder

---

## 🎨 CMS Issues

### Cannot access `/admin` page

**Problem:** CMS not loading.

**Solution:**
1. **Must use HTTPS** - CMS won't work on HTTP
2. Only works on Netlify with GitHub connection (not drag & drop)
3. Check that `public/admin/index.html` and `config.yml` exist
4. Clear browser cache

---

### CMS shows "Error loading config.yml"

**Problem:** CMS configuration error.

**Solution:**
1. Validate YAML syntax in `apps/venus-funeral-website/public/admin/config.yml`
2. Check browser console for specific error
3. Ensure file is at correct path: `public/admin/config.yml`

---

### Cannot log in to CMS

**Problem:** Authentication failure.

**Solution:**
1. Ensure Netlify Identity is enabled
2. Ensure Git Gateway is enabled
3. Check invitation email and accept it
4. Try password reset
5. Check browser cookies are enabled

---

### CMS login works but shows "Failed to load entries"

**Problem:** Git Gateway not properly configured.

**Solution:**
1. In Netlify: Settings → Identity → Services → Git Gateway
2. Click "Enable Git Gateway"
3. Ensure repository is connected
4. Check Netlify deploy logs for errors

---

### Changes in CMS don't appear on site

**Problem:** Changes not triggering rebuild.

**Solution:**
1. Check if deploy was triggered (Netlify dashboard → Deploys)
2. Verify Git Gateway has write access
3. Check GitHub for commits from Netlify CMS
4. Manual trigger: Netlify dashboard → Deploys → "Trigger deploy"

---

## 🎯 Content Issues

### Markdown content not rendering

**Problem:** Markdown not parsing correctly.

**Solution:**
1. Check frontmatter format (must have `---` delimiters)
2. Validate YAML in frontmatter
3. Check for special characters that need escaping
4. Verify markdown files are in correct folders

---

### Blog posts not showing

**Problem:** Posts not appearing on knowledges page.

**Solution:**
1. Verify files are in `_posts/blog/` directory
2. Check frontmatter has required fields: `title`, `date`, `thumbnail`
3. Ensure date format is correct: `YYYY-MM-DD`
4. Rebuild site: `yarn build:export`

---

### Chinese/Traditional characters not displaying

**Problem:** Character encoding issue.

**Solution:**
1. Ensure files are saved as UTF-8
2. Check `_document.tsx` has correct charset
3. Verify browser language settings
4. Check font supports Chinese characters

---

## 📱 Display Issues

### Site looks broken on mobile

**Problem:** Responsive design not working.

**Solution:**
1. Clear browser cache
2. Check viewport meta tag in `_document.tsx`
3. Test in Chrome DevTools device mode
4. Check for CSS that overrides responsive styles

---

### Fonts not loading

**Problem:** Custom fonts failing to load.

**Solution:**
1. Check network tab in DevTools
2. Verify font files exist in `public/` directory
3. Check font URLs in styled-components
4. Ensure CORS headers allow font loading

---

### Layout shifts / jumpy page load

**Problem:** Content shifting during load (CLS).

**Solution:**
1. Add `width` and `height` to images
2. Pre-load critical fonts
3. Use skeleton loaders
4. Check Lighthouse report for CLS issues

---

## 🔐 Security Issues

### "Not Secure" warning in browser

**Problem:** SSL certificate not working.

**Solution:**
- **Netlify/Vercel:** SSL is automatic, wait 24-48 hours
- Check that site is accessed via `https://` not `http://`
- Verify domain DNS is correct
- Force HTTPS redirect in hosting settings

---

### Mixed content warnings

**Problem:** Loading HTTP resources on HTTPS site.

**Solution:**
1. Check browser console for specific URLs
2. Update all URLs to use `https://` or protocol-relative (`//`)
3. Check external embeds (videos, maps, etc.)

---

## 🚀 Performance Issues

### Site loads slowly

**Problem:** Poor performance.

**Solution:**
1. Run Lighthouse audit in Chrome DevTools
2. Optimize images (use Cloudinary transformations)
3. Check bundle size: `ANALYZE=true yarn build:prod`
4. Enable CDN caching in hosting settings
5. Minimize CSS/JS

---

### Images load slowly

**Problem:** Large image files.

**Solution:**
1. Compress images before uploading
2. Use Cloudinary transformations for responsive images
3. Implement lazy loading (already included)
4. Use modern formats (WebP) via Cloudinary

---

## 🔄 Update Issues

### Git push doesn't trigger deploy

**Problem:** Automatic deployment not working.

**Solution:**
1. Check branch name (should be `main` or configured branch)
2. Verify webhook in GitHub: Settings → Webhooks
3. Check Netlify/Vercel GitHub app permissions
4. Manual deploy: Dashboard → "Trigger deploy"

---

### Old version still showing after deploy

**Problem:** Caching issue.

**Solution:**
1. Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Clear browser cache
3. Clear CDN cache in hosting dashboard
4. Check deploy logs confirm new version deployed
5. Try incognito/private window

---

## 📊 Analytics Issues

### Analytics not tracking

**Problem:** Analytics code not firing.

**Solution:**
1. Check analytics script is in `_document.tsx` or `_app.tsx`
2. Verify tracking ID is correct
3. Check browser console for errors
4. Disable ad blockers
5. Check Real-Time reports in Analytics dashboard

---

## 🆘 Emergency Recovery

### Site is completely down

**Immediate steps:**
1. Check hosting status page:
   - Netlify: https://www.netlifystatus.com/
   - Vercel: https://www.vercel-status.com/
2. Check Netlify/Vercel dashboard for alerts
3. Check domain DNS settings
4. Review recent deploys for errors

**Rollback to previous version:**
```bash
# Netlify: Dashboard → Deploys → Click on working deploy → "Publish deploy"
# Vercel: Dashboard → Deployments → Click on working deploy → "Promote to Production"
```

---

### Accidentally deleted content

**Recovery:**
```bash
# Check Git history
git log --all -- path/to/file

# Restore file from previous commit
git checkout <commit-hash> -- path/to/file

# Or view all changes
git reflog
```

---

### Lost admin access

**Solution:**
1. Netlify: Reset password via email
2. Check with other team members
3. Contact Netlify support with ownership proof
4. As last resort, remove and re-add Identity

---

## 🐛 Debug Mode

### Enable detailed error logging

**Local development:**
```bash
# Run build in debug mode
DEBUG=* yarn build:export

# Check Next.js build info
yarn build:prod --debug
```

**Production:**
1. Check deploy logs in hosting dashboard
2. Enable error tracking (Sentry, LogRocket, etc.)
3. Check browser console on live site
4. Use Chrome DevTools Network tab

---

## 📞 Getting Help

### Before asking for help:

1. [ ] Check this troubleshooting guide
2. [ ] Review recent changes (Git history)
3. [ ] Check deploy logs
4. [ ] Check browser console for errors
5. [ ] Try in incognito mode
6. [ ] Try different browser

### Information to provide:

- What you were trying to do
- What happened instead
- Error messages (exact text)
- Browser and version
- Screenshot if applicable
- Link to live site (if deployed)
- Recent changes made

### Where to get help:

1. **Documentation:**
   - [Next.js Docs](https://nextjs.org/docs)
   - [Nx Docs](https://nx.dev)
   - [Netlify Docs](https://docs.netlify.com)

2. **Community:**
   - [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
   - [Netlify Community](https://answers.netlify.com/)

3. **Support:**
   - Netlify Support: https://www.netlify.com/support/
   - Vercel Support: https://vercel.com/support

---

## 📝 Logging Issues

### Enable build logging

**Add to `package.json`:**
```json
{
  "build:debug": "yarn build:prod --verbose"
}
```

### Check logs:

**Netlify:**
1. Dashboard → Deploys → Click deploy → View logs

**Vercel:**
1. Dashboard → Deployments → Click deployment → View logs

**Local:**
```bash
yarn build:export > build.log 2>&1
cat build.log
```

---

## ✅ Still Having Issues?

If your issue isn't listed here:

1. Check the main documentation files:
   - [README.md](./README.md)
   - [DEPLOYMENT.md](./DEPLOYMENT.md)
   - [QUICK_START.md](./QUICK_START.md)

2. Search for the error message online
3. Check GitHub issues for similar problems
4. Contact hosting support
5. Create detailed bug report with reproduction steps

---

**Remember:** Most issues are simple and can be fixed by:
- Clearing cache
- Rebuilding from scratch
- Checking configuration files
- Reading error messages carefully

**Good luck!** 🍀

