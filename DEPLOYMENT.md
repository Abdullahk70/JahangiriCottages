# Jahangiri Fort - Luxury Hotel Website

A modern, responsive website for Jahangiri Fort luxury hotel in Naran, Pakistan, built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS 4
- **Smooth Animations**: Framer Motion for interactive elements
- **Fast Performance**: Static site generation with Next.js
- **Professional Icons**: Lucide React icon library
- **Google Maps Integration**: Location display on About & Contact pages
- **SEO Optimized**: Meta tags and structured content
- **Accessibility**: WCAG compliant
- **Production Ready**: Fully optimized for Vercel deployment

## 📱 Pages

- **Home** (`/`) - Hero section, carousel, amenities showcase
- **Rooms** (`/rooms`) - Room listings with expandable features
- **Amenities** (`/amenities`) - In-room amenities & exclusive services
- **About** (`/about`) - Hotel story, leadership, values, Google Maps
- **Contact** (`/contact`) - Contact information, clickable phone/email/WhatsApp, Google Maps

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Local Development

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd jahangiri-cottages
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run development server**:

   ```bash
   npm run dev
   ```

4. **Open browser**:
   - Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run start
```

## 🔧 Tech Stack

- **Framework**: Next.js 16.2.4 with App Router
- **React**: 19.2.4
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animations**: Framer Motion 12.38.0
- **Icons**: Lucide React 1.8.0
- **Language**: TypeScript
- **Linting**: ESLint

## 📄 Project Structure

```
jahangiri-cottages/
├── app/
│   ├── layout.tsx          # Root layout with navbar/footer
│   ├── page.tsx            # Homepage
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── amenities/
│   │   └── page.tsx        # Amenities page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── rooms/
│   │   └── page.tsx        # Rooms page
│   └── globals.css         # Global styles
├── components/
│   └── Navbar.tsx          # Navigation component
├── public/
│   └── jahangiri/          # Hotel images
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind configuration
├── postcss.config.mjs      # PostCSS configuration
├── vercel.json             # Vercel deployment config
└── package.json            # Dependencies
```

## 🌐 Vercel Deployment

### Option 1: Direct Deployment (Recommended)

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Jahangiri Fort - Production Ready"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to https://vercel.com/new
   - Click "Continue with GitHub"
   - Select your repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Custom Domain**:
   - After deployment, go to Project Settings
   - Add your custom domain
   - Follow DNS configuration steps

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🔒 Environment Variables

Create a `.env.local` file (or set via Vercel dashboard):

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_LANDLINE=0997-430238
NEXT_PUBLIC_CELL=+923009116246
NEXT_PUBLIC_EMAIL=jahangirifort@gmail.com
```

See `.env.example` for all available variables.

## 📊 Performance Optimization

- ✅ Static site generation (SSG) for all pages
- ✅ Image optimization with Next.js Image component
- ✅ CSS-in-JS with Tailwind (no runtime overhead)
- ✅ Code splitting with Next.js
- ✅ Gzip compression enabled
- ✅ Security headers configured
- ✅ SEO meta tags included

## 🔐 Security

- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Content Security Policy ready
- No external scripts
- HTTPS enforced on Vercel

## 📈 SEO Features

- Meta tags on all pages
- Open Graph tags for social sharing
- Responsive viewport configuration
- Semantic HTML structure
- Fast Core Web Vitals
- Static site optimization

## 🧪 Testing

```bash
# Lint code
npm run lint

# Type check
npx tsc --noEmit

# Build check
npm run build
```

## 📝 Content Structure

### Contact Information

- **Landline**: 0997-430238
- **Cell**: +923009116246
- **WhatsApp**: +92 345 947 2567, +92 333 502 1031
- **Email**: jahangirifort@gmail.com
- **Director**: Mr. Yasir Sadiq (Founding & Managing Director)

### Hotel Details

- **Location**: Mansehra Jheel Road, Katha, Naran, Pakistan
- **Plus Code**: WM56+P59
- **Rooms**: 22 luxury rooms
- **Price**: PKR 10,500 per night
- **Established**: 2024

### Room Types

1. Single Bedroom (1-2 guests)
2. Double Bedroom Suite (2-3 guests)
3. Executive Bedroom (2-4 guests)
4. Family Room (4-6 guests)
5. Twin Room (2-4 guests)
6. Family Room with Bunker Beds (6-8 guests)

## 🎨 Design System

- **Color Palette**: Black, White, Amber/Gold accents
- **Typography**: Geist font family
- **Spacing**: Tailwind's default scale
- **Breakpoints**: Mobile-first (sm, md, lg, xl)
- **Icons**: 40+ lucide-react icons
- **Animations**: Framer Motion with scroll triggers

## 📞 Support

For issues or questions about deployment:

- Check Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- GitHub Issues: [repository-issues-url]

## 📄 License

Private project for Jahangiri Fort

## 🎉 Deployment Checklist

Before deploying:

- ✅ Run `npm run build` locally
- ✅ Test all links and forms
- ✅ Check mobile responsiveness
- ✅ Verify images load correctly
- ✅ Test Google Maps integration
- ✅ Check all contact links (email, phone, WhatsApp)
- ✅ Review meta tags and SEO
- ✅ Test on major browsers

After deployment:

- ✅ Verify site loads
- ✅ Test all pages
- ✅ Verify contact links work
- ✅ Check Google Maps loads
- ✅ Monitor performance
- ✅ Set up analytics (optional)

---

Made with ❤️ for Jahangiri Fort Luxury Hotel
