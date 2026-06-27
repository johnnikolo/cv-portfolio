# Yiannis Nikolopoulos — Portfolio

Personal portfolio site built with React + Vite, deployed at [johnnikolo.github.io](https://johnnikolo.github.io).

## Tech Stack

- **React 18** + **Vite 5**
- **MUI v5** — component library and theming
- **lottie-react** — animated illustrations
- **react-icons** — tech stack icon grid
- Plain CSS custom properties for global styles

## Features

- Dark / light theme toggle
- Page loader animation (Lottie)
- Scroll-reveal animations via IntersectionObserver
- Typing effect in hero section
- Alternating left/right experience timeline with company logos
- Responsive layout (mobile-first)
- Code-split chunks (lottie / mui / vendor) for fast load times

## Project Structure

```
src/
├── App.jsx               # Theme state, IntersectionObserver setup
├── data.js               # All CV content (single source of truth)
├── theme.js              # MUI theme factory (dark + light)
├── index.css             # Global styles and scrollbar
└── components/
    ├── Header.jsx        # Sticky nav, theme toggle, mobile menu
    ├── Hero.jsx          # Full-viewport intro with typing effect
    ├── WhatIDo.jsx       # About section with Lottie
    ├── Experience.jsx    # Alternating timeline with company logos
    ├── Skills.jsx        # Tech icon grid
    ├── OpenSource.jsx    # Kibana contributions
    ├── Education.jsx     # AUEB card
    ├── Contact.jsx       # Email + LinkedIn CTAs
    ├── Footer.jsx
    ├── Loader.jsx        # Full-screen page loader
    ├── ScrollToTop.jsx   # FAB that appears on scroll
    └── Animate.jsx       # IntersectionObserver scroll-reveal wrapper
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Deployment

```bash
npm run build
npx gh-pages -d dist --repo https://github.com/johnnikolo/johnnikolo.github.io --branch main
```
