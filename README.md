# THE WORLD IN A CITY

A premium, cinematic website for a global documentary series exploring how the FIFA World Cup transforms cities across North America.

**Built for:** Cloudflare Pages Static Deployment  
**Tech Stack:** Next.js 14 (Static Export), TypeScript, Tailwind CSS, Framer Motion  
**Design:** Netflix × Nike × Apple × FIFA World Cup

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build
```

The production build outputs to the `/out` directory.

---

## 📦 Cloudflare Pages Deployment

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages**
3. Click **Create a project**
4. Click **Connect to Git**
5. Select your GitHub repository

### Step 3: Configure Build Settings

Use these **EXACT** settings:

**Framework preset:** `None` (or leave blank)

**Build command:**
```
npm run build
```

**Build output directory:**
```
out
```

**Root directory:** `/` (leave as default)

**Environment variables:** None required

### Step 4: Deploy

Click **Save and Deploy**

Your site will be live at: `https://your-project.pages.dev`

---

## ✅ Build Safety Checklist

Before deploying, verify:

- ✅ No apostrophes in string literals (using double quotes instead)
- ✅ All imports use correct paths (`@/components`, `@/sections`)
- ✅ No `next/image` usage (using standard `<img>` tags)
- ✅ No server-side features (API routes, middleware, etc.)
- ✅ `package.json` includes `"type": "module"`
- ✅ All config files use ESM exports
- ✅ `next.config.js` has `output: 'export'`
- ✅ Build completes without errors: `npm run build`
- ✅ Output directory `/out` is created

---

## 📁 Project Structure

```
world-in-a-city/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky header
│   ├── Footer.tsx          # Footer with links
│   ├── SectionHeader.tsx   # Reusable section headers
│   └── CTAButton.tsx       # Call-to-action buttons
├── sections/
│   ├── Hero.tsx            # Hero section
│   ├── WhatThisIs.tsx      # Concept explanation
│   ├── WhyItMatters.tsx    # Impact pillars
│   ├── Cities.tsx          # Featured cities
│   ├── Sponsors.tsx        # Partnership opportunities
│   ├── Investors.tsx       # Investment opportunity
│   ├── AWSSection.tsx      # Technology infrastructure
│   ├── FAQ.tsx             # Frequently asked questions
│   └── FinalCTA.tsx        # Final call to action
├── public/
│   └── images/
│       ├── cities/         # City images (placeholders)
│       └── brand/          # Brand assets
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 🎨 Design System

### Colors

```css
Ink:        #0B0B0B  /* Primary background */
Pitch:      #111111  /* Secondary background */
Grass:      #0F2A25  /* Accent background */
Gold:       #C6A85B  /* Primary accent */
Gold Light: #D4BA7F  /* Gold hover state */
Chalk:      #EDEDED  /* Primary text */
Warm Gray:  #8A8478  /* Secondary text */
```

### Typography

- **Headings:** Bold, uppercase, wide tracking
- **Body:** Clean, readable system fonts
- **Accents:** Gold eyebrows with extended letter spacing

---

## 🛠 Development

### Running Locally

```bash
npm run dev
```

Opens at `http://localhost:3000`

### Building

```bash
npm run build
```

Outputs static files to `/out`

### Testing Build Locally

```bash
npm run build
npx serve out
```

---

## 🔧 Customization

### Update Colors

Edit `tailwind.config.js`:

```js
colors: {
  ink: '#0B0B0B',
  gold: '#C6A85B',
  // Add your colors
}
```

### Add Images

Place images in `/public/images/` and reference them:

```tsx
<img src="/images/cities/miami.jpg" alt="Miami" />
```

### Modify Sections

Edit individual section files in `/sections/`

---

## ⚠️ Critical Requirements for Cloudflare

This site is built for **static export only**. Do NOT use:

- ❌ `next/image` (use `<img>` instead)
- ❌ Server actions
- ❌ API routes
- ❌ Middleware
- ❌ Edge runtime features
- ❌ Dynamic imports (unless necessary)
- ❌ Environment variables at runtime
- ❌ Node.js filesystem access

---

## 📧 Contact

**Email:** hello@worldinacity.com  
**Production:** Hilton Sports Group

---

## 🎯 Deployment Summary

**Platform:** Cloudflare Pages  
**Build Command:** `npm run build`  
**Output Directory:** `out`  
**Framework Preset:** None  
**Node Version:** 18+

---

## ✅ Final Pre-Deploy Checklist

- [ ] Repository pushed to GitHub
- [ ] Cloudflare Pages project created
- [ ] Build settings configured correctly
- [ ] Build command: `npm run build`
- [ ] Output directory: `out`
- [ ] No framework preset selected
- [ ] Deploy triggered
- [ ] Site live and functional

---

**Built for production. Optimized for Cloudflare. Ready to deploy.**
