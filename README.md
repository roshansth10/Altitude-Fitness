# Altitude Fitness — Premium Fitness Website

A complete, production-ready, multi-page fitness website for **Altitude Fitness**, a premium gym in Kathmandu, Nepal. Built with React + Vite + Tailwind CSS v4.

---

## 🏋️ Features

- **6 fully designed pages**: Home, Programs, Trainers, Gym, Membership, Contact
- **Pixel-faithful design**: Dark premium aesthetic with neon lime (#c6ff00) accent
- **Fully responsive**: Mobile-first, tablet, and desktop layouts
- **Interactive UI**: Hamburger menu, program selector, membership billing toggle, draggable gym carousel, testimonial slider
- **Sticky navbar** with scroll transparency effect and active route highlighting
- **Smooth transitions and hover animations** throughout
- **Google Maps embed** on Contact page
- **SEO-ready**: Meta titles, descriptions, Open Graph tags per page
- **Google Fonts**: Inter + Montserrat

---

## 🗂️ Project Structure

```
altitude-fitness/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout.jsx       # Shared layout (Navbar + Footer wrapper)
│   │   ├── Navbar.jsx       # Sticky responsive navbar with hamburger
│   │   └── Footer.jsx       # Footer with links, social icons
│   ├── pages/
│   │   ├── Home.jsx         # Hero, stats, feature cards, mountain CTA, testimonials
│   │   ├── Programs.jsx     # Program list + detail panel
│   │   ├── Trainers.jsx     # Trainer grid with social links
│   │   ├── Gym.jsx          # Gym interior + draggable category cards
│   │   ├── Membership.jsx   # Pricing cards with monthly/yearly toggle
│   │   └── Contact.jsx      # Contact info, map, and contact form
│   ├── App.jsx              # React Router setup
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind v4
├── index.html               # SEO meta + Google Fonts
├── vite.config.js           # Vite + Tailwind v4 plugin
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (project uses Node 20)
- npm 10+

### Installation

```bash
# Navigate to the project directory
cd altitude-fitness

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#0a0a0a` |
| Primary Accent | `#c6ff00` (neon lime green) |
| Cards | `#111111` / `#151515` |
| Borders | `#1f1f1f` |
| Text Primary | `#ffffff` |
| Text Secondary | `#e5e5e5` / `#9ca3af` |

**Fonts:** Inter + Montserrat (Google Fonts)

---

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats bar, feature cards, mountain CTA, transformations |
| Programs | `/programs` | Interactive program list with detail panel |
| Trainers | `/trainers` | Coach hero, 4-trainer grid |
| Gym | `/gym` | Facility overview, draggable category cards |
| Membership | `/membership` | Monthly/yearly pricing cards |
| Contact | `/contact` | Contact info, Google Map, contact form |

---

## 🌐 Navigation

All pages are linked via the sticky top navbar:
- **Logo** → Home
- **Join Now** → Membership
- Mobile: Hamburger menu with all links

---

## 🖼️ Images

All images are sourced from [Unsplash](https://unsplash.com) (dramatic gym/fitness photography) via direct URL. No additional setup required — images load from CDN automatically.

---

## ⚙️ Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first styling (via `@tailwindcss/vite` plugin)
- **React Router DOM v7** — Client-side routing
- **Lucide React** — Icon library

---

*Built for Altitude Fitness — Premium Fitness Club, Lazimpat, Kathmandu, Nepal*
