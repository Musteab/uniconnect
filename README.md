# Uni-Connect Showcase (Next.js 14, App Router)

A modern, multi-page website for Uni-Connect, a Malaysian student consultancy. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Includes a simple localStorage-backed Admin panel for demo content editing and a media library storing Base64 images/videos.

## Tech
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- EmailJS (client) with demo-mode fallback

## Getting Started

1. Install dependencies
```
pnpm i
# or
npm i
# or
yarn
```

2. Run the dev server
```
npm run dev
```
Open http://localhost:3000.

## Admin
- Visit `/admin`
- Demo password: `admin123`
- Content, Media Library, and Submissions pages use `localStorage`.

## Email/Forms
- In demo mode, contact form saves submissions locally.
- To enable EmailJS, set `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```
Then set `DEMO_MODE=false` in `lib/utils.ts`.

## Media Uploads
- Images: JPG/PNG/WebP up to ~5MB (compressed client-side to JPEG).
- Videos: MP4/WebM up to 50MB (stored as Base64 for demo; use a CDN for production).

## Project Structure
- `app/` pages with App Router
- `components/` UI, layout, admin tools
- `context/` simple admin auth context
- `lib/` storage, email, utils

## Deployment
- Ready for Vercel: `npm run build` then deploy.
- Sitemap: `/sitemap.xml`; Robots: `/robots.txt`.

## Notes
- This is a demo-friendly baseline. For production, replace Base64 media with Cloudinary/Uploadcare, and secure admin auth with a real backend/session.
