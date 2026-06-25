# Portfolio — Claude Context

Personal portfolio site for Yiannis Nikolopoulos, built with React + Vite, deployable to GitHub Pages.

## Stack
- **React 18.2.0** + **Vite 5.0.12** + `@vitejs/plugin-react 4.2.1`
- No runtime deps beyond react/react-dom (intentional — user is security-conscious about supply chain)
- Plain CSS custom properties for theming (no Tailwind, no CSS-in-JS)
- Google Fonts via `<link>`: Space Grotesk (body) + Space Mono (mono accents)
- `vite.config.js` has `base: '/portfolio/'` for GitHub Pages at `https://johnnikolo.github.io/portfolio/`

## Design system
Two themes, toggled by `data-theme` attribute on `<html>`:

| Token | Dark (default) | Light (bold) |
|---|---|---|
| `--bg` | `#0b0b12` | `#f9f5ef` |
| `--accent` | `#22d3ee` (cyan) | `#7c3aed` (purple) |
| `--accent-2` | `#a78bfa` (violet) | `#f97316` (orange) |
| `--gradient` | cyan → violet | purple → orange |

Scroll reveal: `.animate` elements get `.visible` added by IntersectionObserver in `App.jsx` → CSS opacity/transform transition.

## File map
```
src/
├── App.jsx          — theme state (useState), IntersectionObserver setup (useEffect)
├── data.js          — all CV content: personal, experience[], skills{}, education, languages[]
├── index.css        — all styles: tokens, reset, every component class
└── components/
    ├── Icons.jsx    — inline SVG: SunIcon, MoonIcon, LocationIcon, EmailIcon, LinkedInIcon, ArrowDownIcon, StarIcon
    ├── Header.jsx   — sticky header, blur on scroll, mobile hamburger, theme toggle button
    ├── Hero.jsx     — full-vh section, dot-grid + radial glow backgrounds, scroll-down hint
    ├── Experience.jsx — left-border accent cards, per-job color via CSS var --exp-color
    ├── Skills.jsx   — 4 skill categories + Languages, pill tags
    ├── Education.jsx — single AUEB card with thesis block
    ├── Contact.jsx  — centred, email + LinkedIn links
    └── Footer.jsx
```

## Where we left off
All source files are written. `npm install` was interrupted. Next steps:

```powershell
cd C:\Users\johng\portfolio
npm install
npm run dev        # preview at http://localhost:5173/portfolio/
```

After reviewing in browser:
```powershell
npm run build      # outputs to dist/
```
Then push `dist/` to GitHub Pages (either the `gh-pages` branch via the `gh-pages` npm tool, or configure the repo to serve from `dist/` directly).

## CV source
Yiannis Nikolopoulos — Software Engineer @ Elastic (Athens, Greece).  
LinkedIn: https://www.linkedin.com/in/ioannis-nikolopoulos/  
Email: ioannis.nikolopoulos@yahoo.com
