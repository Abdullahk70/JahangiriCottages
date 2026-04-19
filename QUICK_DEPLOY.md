# 🚀 Quick Vercel Deployment Guide

## One-Minute Deployment

### Option 1: Vercel CLI (Fastest)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy from project directory
vercel

# 3. Follow prompts (accept defaults)
# - Select "Y" for all questions
# - Project will deploy to Vercel

# 4. Deploy to production
vercel --prod
```

### Option 2: GitHub + Vercel (Recommended)

```bash
# 1. Push code to GitHub
git add .
git commit -m "Jahangiri Fort - Production Ready"
git push origin main

# 2. Go to https://vercel.com/new
# 3. Click "Continue with GitHub"
# 4. Select your repository
# 5. Click "Deploy"
# 6. Wait for deployment (2-3 minutes)
# 7. Get live URL
```

### Option 3: Vercel Dashboard (No CLI Needed)

1. Visit https://vercel.com
2. Click "New Project"
3. Import from Git
4. Select GitHub repository
5. Click "Deploy"
6. Wait for build to complete

## After Deployment

✅ **Your Site is Live!**

- Default URL: `https://jahangiri-cottages.vercel.app`
- View in browser: Visit the URL from Vercel dashboard
- Share with team: Use the preview URL

## Add Custom Domain

1. In Vercel Dashboard → Project Settings → Domains
2. Add your domain (e.g., jahangirifort.com)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (10-30 minutes)

## Environment Variables (Optional)

In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL = https://your-domain.com
```

## View Analytics

In Vercel Dashboard → Analytics:

- Real-time traffic
- Core Web Vitals
- Performance metrics
- Error tracking

## Redeploy After Changes

Every push to `main` branch automatically redeploys!

```bash
git add .
git commit -m "Update hotel description"
git push origin main
# Automatic deployment starts!
```

## Troubleshooting

**Build fails?**

- Check build logs in Vercel Dashboard
- Run `npm run build` locally
- Ensure all dependencies installed

**Images not loading?**

- Check image paths in `/public`
- Verify Next.js Image component used
- Check image format support

**Maps not displaying?**

- Verify DNS for Google Maps domain
- Check iframe allow attributes
- Enable third-party scripts

## Support

- 📧 Email: jahangirifort@gmail.com
- 📱 Phone: 0997-430238
- ❓ Docs: See `DEPLOYMENT.md` or `VERCEL_CHECKLIST.md`

---

**That's it!** Your Jahangiri Fort website is now deployed on Vercel. 🎉
