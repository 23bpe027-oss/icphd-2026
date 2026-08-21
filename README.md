# ICPHD 2026 — Clean Rewrite

This version rewrites the website layout/CSS cleanly instead of stacking more override rules on top of the previous stylesheet.

## Main changes
- Hero: exact PDEU logo + SOET on the left, ICPHD circle logo on the right.
- Dark blue hero overlay while keeping the aerial campus photo visible.
- Larger navigation text and responsive three-line mobile menu.
- Scroll-in reveal animations using IntersectionObserver.
- Four association logo slots with equal spacing and consistent sizing.
- Clean transparent logo assets for PDEU, ICPHD, SPE, FIPI, IADC and the combined SEG/SPG/EAGE mark.
- No Chief Guest / Guest of Honor boxes.
- No Sponsor / Media Partner section.
- Conference Highlights icons centered in blue circles; Exhibition/Networking/Branding is slightly smaller than the other icons.
- Important Dates keeps the PDEU oil-pump photo.
- Conference Theme cards use dark-blue borders without the previous internal gradient.
- Registration fee table has full cell borders; Category is left aligned in body rows and Amount is centered.
- Bank note reads: “Official bank details will be available soon.”
- Venue map card remains clickable to Google Maps.

## Run

```bash
npm install
npm run dev
```

Then open the local address shown by Next.js.

## Deploy

Commit the project to GitHub. Vercel can deploy the repository automatically.
