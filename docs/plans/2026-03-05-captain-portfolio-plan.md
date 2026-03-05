# Captain Portfolio Website — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a one-page portfolio website for Heavy-Lift Master Volodymyr Korablov at korablov.cv.

**Architecture:** Next.js 15 App Router with static export. All content in a single data file. Five sections: Hero, About, Experience, Gallery, Contact. Framer Motion for scroll animations. Playwright for visual testing.

**Tech Stack:** Next.js 15, Tailwind CSS 4, Framer Motion, Playwright, TypeScript

**Design doc:** `docs/plans/2026-03-05-captain-portfolio-design.md`

---

### Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
- Create: `public/cv/CV_Volodymyr_Korablov.pdf` (move existing PDF)
- Create: `public/images/profile.jpg` (move existing JPG)

**Step 1: Initialize Next.js project**

Run:
```bash
cd /Users/anton/IdeaProjects/portfolio-korablov
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias --turbopack
```

Accept defaults. This creates the full scaffold.

**Step 2: Install additional dependencies**

Run:
```bash
npm install framer-motion
npm install -D playwright @playwright/test
```

**Step 3: Move assets to public directory**

Run:
```bash
mkdir -p public/cv public/images
cp CV_Volodymyr_Korablov.pdf public/cv/
cp main.JPG public/images/profile.jpg
```

**Step 4: Configure next.config.ts for static export**

Replace `next.config.ts` with:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Note: `images.unoptimized: true` is required for static export since Next.js image optimization needs a server.

**Step 5: Set up Tailwind custom theme in globals.css**

Replace `src/app/globals.css` with:

```css
@import "tailwindcss";

@theme {
  --color-navy: #0a192f;
  --color-navy-light: #112240;
  --color-steel: #4a90a4;
  --color-gold: #c9a84c;
  --color-gold-hover: #d4b55a;
  --color-light-text: #e6f1ff;
  --color-dark-text: #1a1a2e;
  --color-light-bg: #f8f9fa;

  --font-heading: "Inter", "system-ui", "sans-serif";
  --font-body: "Inter", "system-ui", "sans-serif";
}
```

**Step 6: Set up root layout**

Replace `src/app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volodymyr Korablov — Heavy-Lift Master",
  description:
    "Experienced Heavy-Lift Master with 13+ years commanding heavy-lift operations worldwide. Specializing in project cargo and oversized shipments.",
  openGraph: {
    title: "Volodymyr Korablov — Heavy-Lift Master",
    description:
      "13+ years commanding heavy-lift operations worldwide",
    type: "website",
    url: "https://korablov.cv",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
```

**Step 7: Minimal page to verify scaffold**

Replace `src/app/page.tsx` with:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-navy text-light-text flex items-center justify-center">
      <h1 className="text-4xl font-bold tracking-wider">VOLODYMYR KORABLOV</h1>
    </main>
  );
}
```

**Step 8: Verify dev server starts**

Run: `npm run dev`
Expected: Page loads at localhost:3000 showing "VOLODYMYR KORABLOV" on dark navy background.

**Step 9: Verify build succeeds**

Run: `npm run build`
Expected: Static export generates in `out/` directory without errors.

**Step 10: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 15 project with Tailwind and Framer Motion"
```

---

### Task 2: Profile Data File

**Files:**
- Create: `src/data/profile.ts`

**Step 1: Create the data file with all content**

Create `src/data/profile.ts`:

```ts
export const profile = {
  name: "Volodymyr Korablov",
  title: "Master · Heavy-Lift Vessels",
  tagline: "13+ years commanding heavy-lift operations worldwide",
  email: "volodymyr.korablov@gmail.com",
  phone: "+380507662038",
  telegram: "", // to be provided
  cvPath: "/cv/CV_Volodymyr_Korablov.pdf",
  profileImage: "/images/profile.jpg",

  about:
    "Experienced Heavy-Lift Master with continuous service on heavy-lift vessels since 2012. Over 13 years of professional experience in heavy-lift and project cargo operations, including command as Master. Extensive background in handling complex, non-standard and oversized cargoes worldwide. Safety-oriented leader with calm decision-making under pressure.",

  keyFacts: [
    { value: "13+", label: "Years at Sea", sub: "Since 2012" },
    { value: "6", label: "Major Companies", sub: "Heavy-lift operators" },
    { value: "Master", label: "Certificate", sub: "Unlimited" },
    { value: "C1/D", label: "US Visa", sub: "Valid to 2027" },
  ],

  companies: [
    "BBC Chartering",
    "dship Carriers",
    "Intermarine",
    "SAL Heavy Lift",
    "Harren & Partner",
    "Combi Lift",
  ],

  cargoExpertise: [
    "Power plant modules",
    "Transformers",
    "Generators",
    "Industrial reactors",
    "Offshore equipment",
    "Cranes",
    "Wind turbine components",
    "Steel structures",
    "Heavy construction machinery",
    "Large project modules",
  ],

  operationsExpertise: [
    "Heavy-lift crane operations",
    "Tandem lifts",
    "Cargo securing & lashing plans",
    "Ballast & stability calculations",
    "Project cargo loading/discharging",
    "Marine Warranty Surveyor cooperation",
    "Oversized cargo transportation",
    "Port heavy-lift operations worldwide",
  ],

  experience: [
    {
      period: "Jun 2025 – Oct 2025",
      role: "Master",
      vessel: "Industrial Skipper",
      dwt: "12,329",
      owner: "Jaune International",
    },
    {
      period: "Dec 2024 – Feb 2025",
      role: "Master",
      vessel: "Industrial Skipper",
      dwt: "12,329",
      owner: "Jaune International",
    },
  ],

  gallery: [] as Array<{ src: string; alt: string }>,
} as const;
```

**Step 2: Commit**

```bash
git add src/data/profile.ts
git commit -m "feat: add profile data file with all content"
```

---

### Task 3: Navbar Component

**Files:**
- Create: `src/components/Navbar.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create Navbar component**

Create `src/components/Navbar.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-light-text font-bold tracking-widest text-sm">
          V. KORABLOV
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-light-text/70 hover:text-gold transition-colors text-sm tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-light-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-navy/95 backdrop-blur-sm px-6 pb-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-light-text/70 hover:text-gold transition-colors text-sm tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
```

**Step 2: Add Navbar to page**

Update `src/app/page.tsx`:

```tsx
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy text-light-text flex items-center justify-center">
        <h1 className="text-4xl font-bold tracking-wider">VOLODYMYR KORABLOV</h1>
      </main>
    </>
  );
}
```

**Step 3: Verify in browser**

Run: `npm run dev`
Expected: Transparent navbar on top, becomes solid navy on scroll. Hamburger works on mobile viewport.

**Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/app/page.tsx
git commit -m "feat: add sticky navbar with mobile hamburger menu"
```

---

### Task 4: Hero Section

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/components/WaveDivider.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create WaveDivider SVG component**

Create `src/components/WaveDivider.tsx`:

```tsx
export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[80px]"
      >
        <path
          d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
          className="fill-light-bg"
        />
      </svg>
    </div>
  );
}
```

**Step 2: Create Hero component**

Create `src/components/Hero.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";
import { WaveDivider } from "./WaveDivider";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-navy flex flex-col items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-gold/30 mb-8"
      >
        <Image
          src={profile.profileImage}
          alt={profile.name}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-light-text tracking-[0.2em] text-center"
      >
        {profile.name.toUpperCase()}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-steel text-lg md:text-xl mt-4 tracking-wider"
      >
        {profile.title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-light-text/60 mt-3 text-sm md:text-base"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex gap-4 mt-10"
      >
        <a
          href={profile.cvPath}
          download
          className="px-8 py-3 bg-gold text-navy font-semibold rounded tracking-wider text-sm hover:bg-gold-hover transition-colors"
        >
          DOWNLOAD CV
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-light-text/30 text-light-text rounded tracking-wider text-sm hover:border-gold hover:text-gold transition-colors"
        >
          GET IN TOUCH
        </a>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider />
      </div>
    </section>
  );
}
```

**Step 3: Update page.tsx to use Hero**

```tsx
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
```

**Step 4: Verify in browser**

Expected: Full-screen hero with photo, animated text, wave divider at bottom. Both buttons visible. Responsive on mobile.

**Step 5: Commit**

```bash
git add src/components/Hero.tsx src/components/WaveDivider.tsx src/app/page.tsx
git commit -m "feat: add Hero section with animations and wave divider"
```

---

### Task 5: About Section

**Files:**
- Create: `src/components/About.tsx`
- Create: `src/components/AnimateOnScroll.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create scroll animation wrapper**

Create `src/components/AnimateOnScroll.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**Step 2: Create About component**

Create `src/components/About.tsx`:

```tsx
"use client";

import { profile } from "@/data/profile";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function About() {
  return (
    <section id="about" className="bg-light-bg py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* About + Key Facts */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-dark-text tracking-wider mb-6">
              ABOUT ME
            </h2>
            <p className="text-dark-text/80 leading-relaxed text-base md:text-lg">
              {profile.about}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {profile.keyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-white rounded-lg p-5 shadow-sm border border-gray-100"
                >
                  <div className="text-3xl font-bold text-navy">{fact.value}</div>
                  <div className="text-dark-text font-medium text-sm mt-1">
                    {fact.label}
                  </div>
                  <div className="text-dark-text/50 text-xs mt-0.5">{fact.sub}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Companies */}
        <AnimateOnScroll className="mt-16">
          <h3 className="text-sm font-semibold text-dark-text/50 tracking-[0.2em] uppercase mb-6 text-center">
            Companies Worked With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {profile.companies.map((company) => (
              <span
                key={company}
                className="px-5 py-2.5 bg-white rounded-full text-dark-text/70 text-sm font-medium shadow-sm border border-gray-100"
              >
                {company}
              </span>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Expertise */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <AnimateOnScroll>
            <h3 className="text-sm font-semibold text-dark-text/50 tracking-[0.2em] uppercase mb-4">
              Project Cargo Experience
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.cargoExpertise.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-navy/5 text-dark-text/70 rounded text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h3 className="text-sm font-semibold text-dark-text/50 tracking-[0.2em] uppercase mb-4">
              Operations Experience
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.operationsExpertise.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-navy/5 text-dark-text/70 rounded text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Add About to page**

Update `src/app/page.tsx` — add `import { About } from "@/components/About";` and `<About />` after `<Hero />`.

**Step 4: Verify in browser**

Expected: Light section with two-column layout. Key facts as cards. Company names as pills. Expertise as compact tags. All animate on scroll.

**Step 5: Commit**

```bash
git add src/components/About.tsx src/components/AnimateOnScroll.tsx src/app/page.tsx
git commit -m "feat: add About section with key facts and expertise tags"
```

---

### Task 6: Experience Timeline Section

**Files:**
- Create: `src/components/Experience.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create Experience component**

Create `src/components/Experience.tsx`:

```tsx
"use client";

import { profile } from "@/data/profile";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Experience() {
  return (
    <section id="experience" className="bg-navy py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-light-text tracking-wider mb-12 text-center">
            EXPERIENCE
          </h2>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-steel/30 -translate-x-1/2" />

          {profile.experience.map((exp, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div
                className={`relative flex items-start mb-10 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1/2 mt-2 z-10" />

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-navy-light border border-steel/20 rounded-lg p-5">
                    <div className="text-gold text-xs font-semibold tracking-wider mb-1">
                      {exp.period}
                    </div>
                    <div className="text-light-text font-bold text-lg">
                      {exp.role}
                    </div>
                    <div className="text-steel text-sm mt-1">
                      {exp.vessel}
                    </div>
                    <div className="text-light-text/40 text-xs mt-2">
                      {exp.dwt} DWT · {exp.owner}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-12">
          <p className="text-light-text/40 text-sm">
            Total maritime career since 2012 —{" "}
            <a
              href={profile.cvPath}
              download
              className="text-steel hover:text-gold transition-colors underline"
            >
              view full history in CV
            </a>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
```

**Step 2: Add to page**

Add `import { Experience } from "@/components/Experience";` and `<Experience />` after `<About />`.

**Step 3: Verify in browser**

Expected: Dark navy section. Alternating left/right timeline cards on desktop, left-aligned on mobile. Gold dots on timeline. Cards animate on scroll.

**Step 4: Commit**

```bash
git add src/components/Experience.tsx src/app/page.tsx
git commit -m "feat: add Experience timeline section with Master positions"
```

---

### Task 7: Gallery Section

**Files:**
- Create: `src/components/Gallery.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create Gallery component with placeholder support**

Create `src/components/Gallery.tsx`:

```tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const photos = profile.gallery;

  if (photos.length === 0) return null;

  return (
    <section id="gallery" className="bg-light-bg py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-dark-text tracking-wider mb-12 text-center">
            OPERATIONS
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <button
                onClick={() => setSelected(i)}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-lg group cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors flex items-end">
                  <span className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {photo.alt}
                  </span>
                </div>
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selected].src}
                alt={photos[selected].alt}
                width={1200}
                height={800}
                className="object-contain w-full h-auto max-h-[85vh] rounded"
              />
              <p className="text-white/70 text-sm text-center mt-3">
                {photos[selected].alt}
              </p>
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-2 -right-2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
```

Note: The section renders nothing when `gallery` is empty. Once photos are added to `profile.gallery` array, the section appears automatically.

**Step 2: Add to page**

Add `import { Gallery } from "@/components/Gallery";` and `<Gallery />` after `<Experience />`.

**Step 3: Commit**

```bash
git add src/components/Gallery.tsx src/app/page.tsx
git commit -m "feat: add Gallery section with lightbox (hidden until photos added)"
```

---

### Task 8: Contact Section + Footer

**Files:**
- Create: `src/components/Contact.tsx`
- Create: `src/components/WaveDividerDark.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create dark wave divider (transition from Experience to Gallery/Contact)**

Create `src/components/WaveDividerDark.tsx`:

```tsx
export function WaveDividerDark({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[80px]"
      >
        <path
          d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
          className="fill-white"
        />
      </svg>
    </div>
  );
}
```

**Step 2: Create Contact component**

Create `src/components/Contact.tsx`:

```tsx
"use client";

import { profile } from "@/data/profile";
import { AnimateOnScroll } from "./AnimateOnScroll";

function ContactLink({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-dark-text/70 hover:text-steel transition-colors group"
    >
      <span className="text-2xl w-10 text-center">{icon}</span>
      <div>
        <div className="text-xs text-dark-text/40 uppercase tracking-wider">
          {label}
        </div>
        <div className="text-base group-hover:text-steel transition-colors">
          {value}
        </div>
      </div>
    </a>
  );
}

export function Contact() {
  const whatsappUrl = `https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`;
  const telegramUrl = profile.telegram
    ? `https://t.me/${profile.telegram}`
    : undefined;

  return (
    <section id="contact" className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-dark-text tracking-wider mb-12">
            GET IN TOUCH
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-col gap-6 items-start mx-auto w-fit">
            <ContactLink
              href={`mailto:${profile.email}`}
              icon="✉"
              label="Email"
              value={profile.email}
            />
            <ContactLink
              href={whatsappUrl}
              icon="💬"
              label="WhatsApp"
              value={profile.phone}
            />
            {telegramUrl && (
              <ContactLink
                href={telegramUrl}
                icon="✈"
                label="Telegram"
                value={`@${profile.telegram}`}
              />
            )}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2} className="mt-12">
          <a
            href={profile.cvPath}
            download
            className="inline-block px-10 py-4 bg-gold text-navy font-semibold rounded tracking-wider text-sm hover:bg-gold-hover transition-colors"
          >
            DOWNLOAD FULL CV
          </a>
        </AnimateOnScroll>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-gray-100 text-center">
        <p className="text-dark-text/30 text-xs tracking-wider">
          © {new Date().getFullYear()} Volodymyr Korablov
        </p>
      </div>
    </section>
  );
}
```

**Step 3: Assemble full page**

Final `src/app/page.tsx`:

```tsx
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}
```

**Step 4: Verify full page in browser**

Expected: All 5 sections flow together. Hero → About (wave transition) → Experience (dark) → Gallery (hidden for now) → Contact (white). Smooth scroll navigation works from navbar.

**Step 5: Verify build**

Run: `npm run build`
Expected: Clean build, static export in `out/`.

**Step 6: Commit**

```bash
git add src/components/Contact.tsx src/components/WaveDividerDark.tsx src/app/page.tsx
git commit -m "feat: add Contact section with footer and assemble full page"
```

---

### Task 9: Playwright Visual Tests

**Files:**
- Create: `playwright.config.ts`
- Create: `e2e/visual.spec.ts`

**Step 1: Install Playwright browsers**

Run:
```bash
npx playwright install chromium
```

**Step 2: Create Playwright config**

Create `playwright.config.ts`:

```ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  outputDir: "./e2e/results",
  use: {
    baseURL: "http://localhost:3000",
  },
  projects: [
    {
      name: "Desktop",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Tablet",
      use: { ...devices["iPad Mini"] },
    },
    {
      name: "Mobile",
      use: { ...devices["iPhone 14"] },
    },
  ],
  webServer: {
    command: "npm run dev",
    port: 3000,
    reuseExistingServer: true,
  },
});
```

**Step 3: Create visual test**

Create `e2e/visual.spec.ts`:

```ts
import { test, expect } from "@playwright/test";

test("full page screenshot", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  // Wait for animations to settle
  await page.waitForTimeout(1500);
  await expect(page).toHaveScreenshot("full-page.png", {
    fullPage: true,
  });
});

test("hero section visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("VOLODYMYR KORABLOV")).toBeVisible();
  await expect(page.getByText("DOWNLOAD CV")).toBeVisible();
});

test("navigation works", async ({ page }) => {
  await page.goto("/");
  await page.click('a[href="#contact"]');
  await expect(page.getByText("GET IN TOUCH")).toBeInViewport();
});
```

**Step 4: Run tests to generate baseline screenshots**

Run:
```bash
npx playwright test --update-snapshots
```

Expected: Tests pass, baseline screenshots generated in `e2e/visual.spec.ts-snapshots/`.

**Step 5: Run tests again to verify they pass against baselines**

Run: `npx playwright test`
Expected: All tests pass.

**Step 6: Add snapshots dir to .gitignore or commit them**

Add to `.gitignore`:
```
e2e/results/
```

**Step 7: Commit**

```bash
git add playwright.config.ts e2e/ .gitignore
git commit -m "test: add Playwright visual regression tests for 3 viewports"
```

---

### Task 10: Final Polish and Build Verification

**Files:**
- Modify: `src/app/layout.tsx` (favicon)
- Create: `.gitignore` updates

**Step 1: Add favicon**

Add to `src/app/layout.tsx` metadata:
```ts
icons: {
  icon: "/favicon.ico",
},
```

Generate a simple anchor/compass favicon or use a placeholder. Save to `public/favicon.ico`.

**Step 2: Full build and lighthouse check**

Run:
```bash
npm run build
npx serve out
```

Open in browser, run Lighthouse audit. Target: 95+ on all categories.

**Step 3: Final Playwright run**

Run: `npx playwright test`
Expected: All tests pass on desktop, tablet, mobile.

**Step 4: Update .gitignore**

Ensure `.gitignore` includes:
```
node_modules/
out/
.next/
e2e/results/
```

**Step 5: Final commit**

```bash
git add -A
git commit -m "chore: final polish — favicon, gitignore, build verification"
```

---

## Summary

| Task | Description | Key files |
|------|-------------|-----------|
| 1 | Project scaffold | next.config.ts, layout.tsx, globals.css |
| 2 | Profile data | src/data/profile.ts |
| 3 | Navbar | src/components/Navbar.tsx |
| 4 | Hero section | Hero.tsx, WaveDivider.tsx |
| 5 | About section | About.tsx, AnimateOnScroll.tsx |
| 6 | Experience timeline | Experience.tsx |
| 7 | Gallery | Gallery.tsx (hidden until photos) |
| 8 | Contact + Footer | Contact.tsx, full page assembly |
| 9 | Playwright tests | playwright.config.ts, e2e/ |
| 10 | Final polish | favicon, build, lighthouse |
