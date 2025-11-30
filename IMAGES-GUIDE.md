# Image Assets Guide

This document explains the image assets used in the Tomorrow's Tech website and how to replace them with production-ready images.

## Current Status

All image placeholders have been created as SVG files. These are functional and will display correctly, but should be replaced with professional images for production use.

## Image Locations and Specifications

### 1. Testimonial Avatars
**Location:** `/public/testimonials/`

**Current Files:**
- `sarah.svg` - Sarah Johnson (CEO, TechStart Inc.)
- `michael.svg` - Michael Chen (Marketing Director, Global Solutions)
- `emily.svg` - Emily Rodriguez (Founder, Creative Studio)

**Recommended Specifications:**
- Format: JPG or WebP
- Dimensions: 400x400px (square)
- File size: < 100KB each
- Professional headshot photos of clients (with permission)

**How to Replace:**
1. Obtain professional headshots from clients
2. Resize to 400x400px
3. Save as `sarah.jpg`, `michael.jpg`, `emily.jpg`
4. Update paths in `/lib/constants.ts` (change .svg to .jpg)

---

### 2. Portfolio Project Images
**Location:** `/public/portfolio/`

**Current Files:**
- `ecommerce.svg` - E-Commerce Platform
- `healthcare.svg` - Healthcare Mobile App
- `dashboard.svg` - Digital Marketing Dashboard
- `restaurant.svg` - Restaurant Website

**Recommended Specifications:**
- Format: JPG or WebP
- Dimensions: 1600x1200px (4:3 ratio)
- File size: < 300KB each
- High-quality screenshots or mockups of actual projects

**How to Replace:**
1. Take screenshots of live projects or create mockups
2. Ensure images are 1600x1200px
3. Optimize for web (use TinyPNG or similar)
4. Save as `ecommerce.jpg`, `healthcare.jpg`, etc.
5. Update paths in `/components/sections/Portfolio.tsx` (change .svg to .jpg)

---

### 3. Client Logos
**Location:** `/public/clients/`

**Current Files:**
- `techstart.svg` - TechStart Inc.
- `globalsolutions.svg` - Global Solutions
- `creativestudio.svg` - Creative Studio

**Recommended Specifications:**
- Format: SVG or PNG (with transparency)
- Dimensions: 400x160px (5:2 ratio recommended)
- File size: < 50KB each
- Grayscale or monochrome versions work best

**How to Replace:**
1. Obtain official logos from clients (with permission)
2. Convert to grayscale if needed for consistency
3. Optimize SVG or use PNG with transparency
4. Maintain aspect ratio when resizing

---

### 4. Company Logos
**Location:** `/public/`

**Current Files:**
- `logo.png` (226KB) - Main company logo
- `navbar-logo.png` (46KB) - Navbar version

**Status:** ✅ Already in place

**Note:** These appear to be actual logo files already in the project.

---

### 5. Favicon
**Location:** `/public/favicon/`

**Status:** ✅ Already configured

---

## Missing Images for Production

### OpenGraph & Social Media Images
**Location:** `/public/og/`

**Needed:**
- `og-image.jpg` - Default OG image (1200x630px)
- `twitter-image.jpg` - Twitter card (1200x600px)

**Specifications:**
- Include company branding
- Clear, readable text
- High contrast for visibility
- Format: JPG
- File size: < 500KB

**Implementation:**
After creating, update in `app/layout.tsx`:
```typescript
openGraph: {
  images: ['/og/og-image.jpg'],
}
```

---

## Quick Replacement Checklist

- [ ] Replace testimonial avatars with real photos
- [ ] Replace portfolio images with project screenshots
- [ ] Replace client logos with official brand assets
- [ ] Create OpenGraph social media images
- [ ] Update file paths in code (if changing from .svg to .jpg)
- [ ] Optimize all images for web (compress without quality loss)
- [ ] Test on actual devices to ensure images load correctly

---

## Image Optimization Tips

1. **Use Modern Formats:**
   - WebP for photos (better compression)
   - SVG for logos and icons (scalable)

2. **Lazy Loading:**
   - Next.js Image component handles this automatically
   - All images already use `<Image>` component

3. **Responsive Images:**
   - Next.js generates multiple sizes automatically
   - Ensure original images are high quality

4. **Tools:**
   - [TinyPNG](https://tinypng.com/) - Compress PNG/JPG
   - [Squoosh](https://squoosh.app/) - Image optimization
   - [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

---

## Notes for Developers

- All images are configured to work with Next.js Image component
- SVG placeholders are currently functional and will display
- No code changes needed when replacing SVG with same-named JPG/PNG
- Remember to update `next.config.js` if adding external image domains
- Test build after replacing images: `npm run build`

---

Last Updated: 2025-11-29
