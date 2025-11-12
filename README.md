# Uni‑Connect (Next.js 14) — built by a dev for a friend

A modern, production‑ready site for a Malaysian student consultancy. I’m building this for a friend — fast, simple and focused on real leads: clear services, success stories, quick contact, and an integrated “UniBuddy” advisor.

## Highlights
- Clean UX, responsive, animated with Framer Motion
- Real contact surface: WhatsApp, call, email (footer + quick help bar)
- Universities grid + partner strip
- Student stories (Cloudinary videos)
- Jersey promo popup (session‑only dismiss)
- UniBuddy (Workers AI) floating chat — short, direct answers
- Admin: protected dashboard, media manager, Cloudinary uploads + Base64→Cloudinary migration

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + Framer Motion
- NextAuth (Credentials) for admin
- Cloudinary (CDN) for images & videos
- Cloudflare Workers AI for UniBuddy

## Features (Overview)
- Home: hero video + brand logo, KPIs, services preview, UniBuddy, stories
- Services: clear cards, process flow, “How we work” video
- Universities: grid with logos (Cloudinary) + “...and many more”
- Success Stories: short video highlights
- Contact: form + quick actions (WhatsApp, call, email)
- Jersey Promo: tasteful bottom‑right video popup, dismiss for session
- Admin: `/admin` (credentials), media manager, instant uploads to Cloudinary, Base64 migration tool with toasts

## Environment
Create `.env.local` (example keys only — set yours):
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=strong_password

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Cloudflare Worker (UniBuddy adapter)
CF_WORKER_URL=https://<your-worker>.workers.dev
```

## Dev
```
npm i
npm run dev
```
Open http://localhost:3000

## Admin & Media
- Login: `/login` (Credentials from `.env.local`)
- Admin dashboard: `/admin`
- Media Manager: `/admin/media`
  - Image/Video upload → Cloudinary via signed `/api/upload`
  - “Migrate Base64 to Cloudinary” one‑click tool with progress toasts

## UniBuddy (Workers AI)
- Worker files: `cf-worker/worker.ts`, `cf-worker/wrangler.toml`
- Default model: `@cf/meta/llama-3.1-8b-instruct`
- System prompt: concise, direct replies (<= ~80 words)
- Endpoints accepted: POST `/api/degree-helper` and `/`

Run locally / deploy Worker:
```
npm i -g wrangler
wrangler login
npm run wrangler:dev     # local dev
npm run wrangler:deploy  # deploy to Cloudflare
```
Set `CF_WORKER_URL` to your Worker URL and restart Next dev. The adapter (app/api/degree-helper/route.ts) forwards requests server‑side — no client secrets.

## Cloudinary Assets
- Bulk upload existing media:
```
npm run cloudinary:upload            # uploads public/* → Cloudinary
node scripts/cloudinary-bulk-upload.mjs src/logos uniconnect/logos cloudinary-logos-map.json
```
- We’ve already swapped references to Cloudinary URLs across the app (logos, videos, hero). Next/Image is configured for `res.cloudinary.com`.

## Deploy (recommended: Vercel)
1) Push to GitHub
```
git init
git add .
git commit -m "chore: init"
git branch -M main
git remote add origin <your_repo>
git push -u origin main
```
2) Import on Vercel → set env vars (from `.env.local`) → Deploy
3) Optional: protect `main` & use PR previews

## Notes for Production
- Keep admin credentials strong (or switch to OAuth/provider).
- Rate‑limit upload API (basic limiter included; consider Redis/Upstash for durability).
- Validate mime types and size server‑side (we do basic checks now).
- Use HTTPS for NEXTAUTH_URL in production.

## Contact Links (live)
- Email: `uniconnectagency@gmail.com`
- WhatsApp: `+60143859084`
- Instagram: https://www.instagram.com/uni_connect24?igsh=bnNkcGNhYjg5Nm1j
- TikTok: https://www.tiktok.com/@uni_connect24?_r=1&_t=ZM-91Le4VdK7LM

---
Built with care by a developer for a friend — always shipping what helps students move forward fastest.
