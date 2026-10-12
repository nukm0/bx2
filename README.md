# NEXUS Marketplace — UI prototype

Mobile-first marketplace interface prototype built with Next.js, React and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Create a GitHub repository and upload this project.
2. Import the repository at https://vercel.com/new.
3. Vercel detects Next.js automatically. Deploy with the default settings.

## What's interactive in this prototype

- Marketplace feed, search and category/subcategory filters
- Rotating banner controls (manual; 5-second autoplay can be added)
- Ad detail pages, favorite toggles and report forms
- Create-ad modal with required title and photo simulation
- Personal account, favorites, store directory, FAQ and seller profile
- Admin dashboard sections and role/permissions concept
- Notifications popover and mobile bottom navigation

## Important limitations

This is a **front-end prototype**, not a production marketplace. Data lives in React state and resets on refresh. Photos are simulated; no real image upload is performed. Telegram login, Telegram deep links, persistent database, moderation enforcement, bans, real notifications, and owner-only server authorization are not implemented yet.

Before public launch, implement server-side authentication and role checks, database persistence, file storage, audit logs, rate limits, and moderation workflows. Do not rely on hidden UI controls for security. The owner account `@nukm0` is shown as demo data only and is not authenticated.
