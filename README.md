# Aurbient Technologies — Website

A single-page, responsive website for Aurbient Technologies.

## Direction

Italian/editorial-inspired design with a Gen-Z digital studio feel:
- warm paper and near-black sections
- existing Aurbient cyan-blue as the accent
- oversized editorial typography
- restrained motion
- static, minimal hero composition
- no location-specific positioning
- no founder/personal positioning
- no individual client/project names

## Sections

1. Hero
2. Studio introduction
3. Services
4. Automation Library — six adaptable workflow concepts
5. Studio approach
6. Custom AI automation enquiry form
7. Footer

## Automation Library

The site presents six general workflow categories:
- Lead Capture → CRM
- Document → Data
- Email Intelligence
- Support Automation
- Data Sync & Alerts
- Custom AI Workflow

## Contact form

The enquiry form currently uses `mailto:contact@aurbient.com` so the static site can work without a backend.

For production, the form can later be connected to:
- Formspree
- Web3Forms
- a custom FastAPI/Django endpoint
- an n8n webhook

## Run locally

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

The site is static and can be deployed to Vercel, Netlify, Cloudflare Pages, GitHub Pages or Render Static Site.


## Website updates
- Homepage positioning is written for non-technical businesses and focuses on everyday operational problems.
- The three service names are AI Solutions & Development, Business Process Automation, and Custom Software & Systems.
- Founder portrait is stored at `assets/raj-profile.png`.
- The contact forms use `mailto:` to prepare an email in the visitor's email application; they do not submit to a server or store submissions. Configure a form backend before relying on website-hosted enquiry delivery.
