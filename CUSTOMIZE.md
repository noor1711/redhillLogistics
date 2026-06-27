# Trucking Company Website Template

This is a professional Next.js template for a trucking company website, ready to be deployed to Vercel's free hosting.

## Getting Started

The site is built with:
- **Next.js 16** - React framework
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## Project Structure

```
app/
  ├── page.tsx           # Home page
  ├── layout.tsx         # Root layout
  └── globals.css        # Global styles & theme

components/
  ├── header.tsx         # Navigation header
  ├── footer.tsx         # Footer
  └── ui/                # shadcn/ui components

public/                  # Static assets
```

## Customization Guide

### 1. Update Company Information

**In `components/header.tsx`:**
- Replace `TruckCo` with your company name
- Update the logo (currently "T" in the orange box)
- Update navigation links as needed

**In `components/footer.tsx`:**
- Replace company name, address, phone, and email
- Update the footer links and copyright

**In `app/layout.tsx`:**
- Update the page title and description in `metadata`
- Update theme colors in `viewport`

### 2. Customize Colors

Edit `/app/globals.css` to change the color scheme:
- **Primary color** (Dark Blue): Used for headings and main elements
- **Accent color** (Orange): Used for buttons and highlights
- **Background color**: Light beige

Replace the OKLCh color values in the `:root` section to match your brand.

### 3. Update Homepage Content

In `app/page.tsx`, update:
- Hero section heading and description
- Features section (Modern Fleet, Wide Coverage, etc.)
- Services section (Long-Haul Transport, Regional Delivery, etc.)
- Call-to-action text
- Button labels

### 4. Add Additional Pages

Create new pages by adding files to the `app/` directory:

```typescript
// app/about/page.tsx
export default function About() {
  return (
    <div>
      {/* Your content */}
    </div>
  )
}
```

Then update navigation links in `components/header.tsx` and `components/footer.tsx`.

### 5. Import Your HTML

If you have existing HTML files from Wix:
1. Copy the content from your HTML files
2. Convert HTML elements to JSX (lowercase tags, className instead of class)
3. Replace the content in the appropriate component files
4. Update styling with Tailwind CSS classes

## Deployment to Vercel

### Option 1: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Using Git + GitHub
1. Push code to GitHub
2. Visit [Vercel Dashboard](https://vercel.com/new)
3. Import your GitHub repository
4. Deploy with one click

### Option 3: Download & Deploy via v0
1. Click the three dots (⋯) in the top right of v0
2. Select "Download ZIP"
3. Extract the files
4. Deploy to Vercel

## Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Professional hero section
✅ Feature highlights
✅ Services overview
✅ Call-to-action section
✅ Sticky navigation header
✅ Mobile menu
✅ Footer with contact info
✅ Fast performance
✅ SEO optimized metadata

## Making It Your Own

### Run Locally
```bash
pnpm install
pnpm dev
# Visit http://localhost:3000
```

### Edit in v0 UI
You can open this project in v0 to visually edit components and add new pages without touching code.

## Free Hosting on Vercel

- No credit card required for free tier
- Automatic deployments on every push
- Free SSL certificate
- Global CDN
- Perfect for static or low-traffic sites

## Support

For help with:
- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel Deployment**: https://vercel.com/docs

## License

This template is open source and free to use.
