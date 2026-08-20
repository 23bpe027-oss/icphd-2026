# ICPHD 2026 — Vercel-ready website

This project recreates the supplied ICPHD 2026 website preview as a responsive Next.js App Router site.

## Included

- Responsive single-page conference website
- Sticky navigation with section anchors
- Hero section using the supplied PDEU/campus assets
- Sponsors and media partners
- About sections
- Conference highlights
- Important dates
- All conference theme/topic cards from the supplied preview
- Registration fee table
- Abstract submission requirements
- Venue/map image and Google Maps link
- Contact section
- Live countdown to the conference
- Downloadable preview brochure and derived flyer PDF
- No external database required

## Before going live

The supplied preview does **not** contain the final registration URL, abstract submission URL, or official bank details. Do not invent them.

Set these Vercel environment variables when the official links are available:

- `NEXT_PUBLIC_REGISTRATION_URL`
- `NEXT_PUBLIC_ABSTRACT_URL`

If you prefer, replace the two constants at the top of `app/page.tsx`.

## Run locally

Requires a current Node.js installation.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

Push the project to GitHub and import it into Vercel. Vercel automatically detects a Next.js app, so the default framework/build settings can be used.

Or install the Vercel CLI and run:

```bash
npm i -g vercel
vercel
vercel --prod
```

## Source basis

Content and visual direction are based on the supplied 4-page ICPHD 2026 website preview PDF. Items explicitly marked "To Be Announced" in that source remain so here.
