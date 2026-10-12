# NEXUS Marketplace — Telegram Mini App starter

Mobile-first marketplace UI built with Next.js 14, React and TypeScript. Includes initial Telegram Mini App WebApp SDK integration: calls `ready()` and `expand()`, sets Telegram header/background colors, disables vertical swipes when supported, and accounts for device safe areas.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Outside Telegram, the app remains usable as a regular responsive web page.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository at https://vercel.com/new.
3. Deploy with the default Next.js settings.
4. Configure the deployed HTTPS URL as the Mini App URL in BotFather (Menu Button / Mini App settings).

## Current functionality

- Marketplace feed, search and category/subcategory filters
- Rotating banners
- Ad detail views, favorites and report form
- Create-ad UI, profile, stores, FAQ and admin UI concepts
- Telegram WebApp initialization and mobile safe-area support

## Important: prototype, not production yet

Listings and favorites are React state and reset after refresh. Photo upload, Telegram identity verification, database persistence, server-enforced roles, moderation workflows, real notifications, and owner authorization are not implemented. Telegram's `initDataUnsafe` is only for displaying client-side information and must never be trusted for authentication or permissions. On the backend, validate the raw `Telegram.WebApp.initData` signature before using the Telegram user ID.

## Recommended production stack

- **Frontend/hosting:** Next.js + Vercel
- **Database/auth:** PostgreSQL (for example Supabase) with server-side Telegram initData validation
- **Image storage:** Supabase Storage or compatible object storage
- **Bot:** Telegram Bot API; set the deployed HTTPS URL as the Mini App URL

Never put bot tokens, database service-role keys, or other secrets in `NEXT_PUBLIC_*` variables or client-side code.
