# ICPHD 2026 — Final Updated Website

This package contains the final responsive ICPHD 2026 website.

## Main website code

- `app/page.tsx` — single responsive page containing the desktop and mobile layouts/styles.
- `app/layout.tsx` — Next.js root layout/metadata.
- `app/globals.css` — existing global stylesheet retained for project compatibility.
- `public/assets/` — website assets.

The desktop and mobile versions are handled by responsive CSS inside `app/page.tsx`; there is no separate mobile page.

## Run

```bash
npm install
npm run dev
```
