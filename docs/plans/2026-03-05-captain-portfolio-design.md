# Captain Portfolio Website — Design Document

**Date:** 2026-03-05
**Domain:** korablov.cv
**Subject:** Volodymyr Korablov — Heavy-Lift Master

## Overview

A one-page portfolio/CV website for a ship captain (Master) specializing in heavy-lift vessel operations. The site targets maritime employers and recruiters, presenting professional experience in a clean, visually appealing format. English only.

## Visual Style

**Maritime minimalism** — dark navy backgrounds alternating with clean white sections. Subtle nautical accents (wave dividers, compass motifs) without kitsch.

### Color Palette

| Token        | Value     | Usage                      |
|--------------|-----------|----------------------------|
| Navy         | `#0a192f` | Hero bg, Experience bg     |
| Steel Blue   | `#4a90a4` | Links, secondary accents   |
| Gold         | `#c9a84c` | CTA buttons, highlights    |
| Light text   | `#e6f1ff` | Text on dark backgrounds   |
| Dark text    | `#1a1a2e` | Text on light backgrounds  |
| Light bg     | `#f8f9fa` | About, Gallery sections    |
| White        | `#ffffff` | Contact section            |

### Typography

- Headings: Inter or similar clean sans-serif, uppercase with letter-spacing
- Body: Inter, regular weight, comfortable line-height (1.6-1.7)

## Sections (5 total)

### 1. Hero

Full-viewport dark navy block. Centered layout:
- Profile photo (circle or soft rounded rectangle)
- Name: "VOLODYMYR KORABLOV" (large, white)
- Subtitle: "Master · Heavy-Lift Vessels"
- Tagline: "13+ years commanding heavy-lift operations worldwide"
- Two CTA buttons: "Download CV" (gold) and "Get in Touch" (outlined)
- SVG wave divider at bottom

Animations: fade-in name/subtitle on load, gentle scale-up on photo.

### 2. About Me + Expertise

Light background (`#f8f9fa`). Two-column layout (stacks on mobile):

**Left — About Me text:**
Concise 3-4 sentence professional summary from CV. Focus: heavy-lift expertise, worldwide operations, safety-oriented leadership.

**Right — Key Facts (compact cards):**
- `13+` Years at Sea (since 2012)
- `6` Major Companies
- `Master` Certificate
- `US C1/D` Visa Valid

**Below — Companies Worked With:**
Horizontal row of company names: BBC Chartering, dship Carriers, Intermarine, SAL Heavy Lift, Harren & Partner, Combi Lift.

**Below — Expertise areas (compact chips/tags):**
Types of cargo handled and operational experience, displayed as clean tag chips. Two groups:
1. Project Cargo: Power plant modules, Transformers, Generators, Offshore equipment, Wind turbine components, etc.
2. Operations: Heavy-lift crane ops, Tandem lifts, Ballast/stability calculations, Cargo securing, MWS cooperation, etc.

Animations: elements appear on scroll (intersection observer).

### 3. Experience Timeline

Dark navy background. Vertical timeline showing **Master positions only**:

| Period            | Vessel              | DWT    |
|-------------------|---------------------|--------|
| Jun 2025 – Oct 2025 | Industrial Skipper | 12,329 |
| Dec 2024 – Feb 2025 | Industrial Skipper | 12,329 |

Note at bottom: "Total maritime career since 2012 — view full history in CV"

Cards appear with slide-in animation on scroll.

### 4. Gallery

Light background. Grid of photos from cargo operations, vessels, and loading procedures. Responsive grid (3 cols desktop, 2 tablet, 1 mobile). Lightbox on click for full-size viewing. Photos to be provided later — structure and placeholders built in advance.

### 5. Contact + Download CV

White background. Centered layout:
- Section heading: "GET IN TOUCH"
- Email: volodymyr.korablov@gmail.com (mailto link)
- WhatsApp: +380507662038 (wa.me link)
- Telegram: link (to be provided)
- Prominent "Download Full CV" button (gold accent)
- Minimal footer: "© 2026 Volodymyr Korablov"

## Navigation

Sticky top navbar (transparent on hero, solid on scroll). Anchor links: About, Experience, Gallery, Contact. Mobile: hamburger menu.

## Technical Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Build:** Static export (`output: 'export'`)
- **Hosting:** Vercel (korablov.cv domain)
- **Images:** next/image optimization
- **Testing:** Playwright for visual regression (desktop/tablet/mobile screenshots)
- **SEO:** Meta tags, Open Graph, structured data

## Data Architecture

All content in `src/data/profile.ts` — single source of truth. No CMS, no external data fetching. To update content, edit the file and push to GitHub (auto-deploy via Vercel).

## Responsive Breakpoints

- Mobile: < 640px (single column, stacked layout)
- Tablet: 640-1024px (two columns where applicable)
- Desktop: > 1024px (full layout)

Mobile-first approach throughout.

## Performance Targets

- Lighthouse score: 95+ across all categories
- First Contentful Paint: < 1.5s
- Total bundle: < 100KB JS (excl. images)

## Out of Scope

- CMS integration
- Blog / news section
- Multi-language support
- Contact form with backend
- Certificates/documents section (available in downloadable CV)
