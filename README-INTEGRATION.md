# Aurbient Technologies — Integrated Website

This is **one website**, not three separate deployments. The main Aurbient single-page homepage remains the entry point, with the studio's service and studio pages integrated into the same root and an Optima product route.

## Routes

- `/` — Main Aurbient single-page homepage
- `/services.html` — AI, automation and custom software services
- `/studio.html` — Studio and delivery approach
- `/projects.html` — Project concepts and workflow explorations
- `/contact.html` — Start a project / contact
- `/project-lead-workspace.html`, `/project-document-intelligence.html`, `/project-operations-dashboard.html` — concept detail pages
- `/optima/` — Optima product website

All routes should be deployed together under the same domain. The Optima marketing page is a distinct product experience, but it is part of the same website/domain and is linked from the Aurbient homepage.

## Preview locally

Run from this directory:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/` and navigate using the site menu.

## API status

The uploaded Optima ZIP contains only a static marketing website; it did not include the product API/backend or a live API base URL. The `/optima/` route is integrated, and the homepage describes Optima as an Aurbient product with an “Explore Optima” link. No fake API endpoint or live connection is claimed. Connect the actual Optima app/API when its endpoint and integration details are available.

## Founder photo

The supplied source ZIPs do not contain a personal portrait. No stock or synthetic person image has been used. Provide the approved photo to add a small founder introduction to the homepage/studio page.

## Authenticity and contact forms

Project pages are presented as concepts/workflow explorations, not verified client case studies. Avoid adding invented metrics, testimonials or customer logos. Existing contact forms use email handoff; connect a backend/form provider before relying on them for lead capture.
