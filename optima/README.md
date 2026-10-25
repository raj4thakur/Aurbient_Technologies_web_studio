# Optima — Standalone Product Website

A standalone, responsive product website for Optima by Aurbient Technologies.

## Included
- `index.html` — complete product landing page
- `style.css` — responsive visual system using white, green, orange and deep navy
- `script.js` — mobile navigation and current year
- `assets/optima-logo.png` — supplied Optima logo with a transparent background

## Sections
- Product positioning and illustrative operations dashboard
- Six operational problem areas
- How the product works
- Integration paths for spreadsheets, ERP/MRP, databases, shop-floor logs, APIs and notifications
- Target manufacturing customer segments
- Custom Optima configuration
- Practical value measures
- FAQ and enquiry CTA

## Run locally
Open `index.html` in a browser, or run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploy
Upload the contents of this folder to any static host (for example, a static site on Render, Netlify, Cloudflare Pages or Vercel).

If deploying at `https://aurbient.com/optima/`, place this folder's contents under the host's `optima/` directory or configure the hosting rewrite accordingly. This is a static marketing site, not the Optima application backend.

## Important content notes
- The dashboard is a visual demo and its data is illustrative, not live customer data.
- No fabricated customer reviews or ratings are presented. The page explains this honestly and is ready to be updated with verified, permissioned customer testimonials.
- Integration capabilities depend on the customer's systems, access permissions, data quality and agreed scope.
- The CTA uses `mailto:contact@aurbient.com`; connect a form backend if a web enquiry form is required.
