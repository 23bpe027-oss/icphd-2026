# ICPHD 2026 — final merged website update

This build merges the latest requested website changes instead of reverting to an older version.

- Preserved the original hero text: “FOURTH EDITION OF” and the previously approved organizer wording.
- Restored the full About section text from the approved version.
- Hero logo order: PDEU on the left, ICPHD centered, SOET on the right; mobile has dedicated spacing/sizing.
- SOET uses the supplied sharp-edged logo asset without removing its blue background.
- Student chapter association cards are blue, equal-sized and evenly spaced.
- SEG/SPG/EAGE and IADC are larger; supplied colored references are used, with dark supporting text converted to white for contrast on blue cards. IADC fan is red.
- FIPI remains visually smaller and SPE remains slightly smaller than the larger chapter group.
- Conference Highlights restored to six cards, with consistent typography; Exhibition/Networking/Branding illustration is slightly smaller.
- Important Dates uses flyer dates and removes weekday text in brackets.
- Conference Theme uses the flyer headings, with concise generated points, including Carbon Capture, Utilization and Removal.
- Registration table uses the flyer’s Delegate Type / Before / After / International delegate structure with a dark-blue header and stronger contrast.
- Venue keeps the approved two-card layout with the blue “Open in Google Maps →” footer.
- Event Schedule / Download Brochure / Download Flyer controls are larger.
- Mobile styling is responsive in the same `app/page.tsx` + `app/globals.css`; no separate mobile page is required.
- `'use client';` is the first line of `app/page.tsx` so Vercel/Turbopack can compile the interactive page.

## Latest update — 24 Aug 2026
- Mobile hero conference title now uses the same sizing scale as “International Conference on” and may wrap naturally on narrow screens instead of clipping.
- Hero conference title remains centered on desktop and mobile.
- “Driving Innovation, Enabling Transition and Shaping the Energy Future” is now italic on desktop and mobile.
- Removed “Last date for Registration: 20 November 2026” from the announcement strip.
