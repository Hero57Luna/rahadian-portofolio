# Rahadian Portofolio

Personal portfolio SPA — React 19, Vite, Tailwind CSS v4. Migrated from the Laravel version (`portfolio-app`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
npm run preview  # serve the production build
```

## Edit content

Everything visible (profile, about text, services, projects) lives in [src/data.js](src/data.js). Project screenshots go in `src/assets/`.

## Deploy to Vercel

Import the repo in Vercel. The Vite preset is detected automatically (build: `npm run build`, output: `dist`). No extra config is needed because the site is a single page.
