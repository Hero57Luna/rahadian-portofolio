# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server, http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # oxlint (rules in .oxlintrc.json)
```

There is no test suite.

## Architecture

Single-page React 19 + Vite portfolio site, styled with Tailwind CSS v4 (via `@tailwindcss/vite`, no `tailwind.config.js` — theme tokens live in `src/index.css` under `@theme`). Migrated from a Laravel version (`portfolio-app`).

**Content lives in one place: `src/data.js`.** Profile info, about text, services, and project data (including image imports) are all exported as plain objects/arrays from this file. Components import from `data.js` and map over it — they contain no hardcoded content. When asked to change visible text, tags, links, or add/remove a project or service, edit `data.js`, not the components. Project screenshots go in `src/assets/`; `refview-*` project images are loaded in bulk via `import.meta.glob`.

`App.jsx` composes the page as a fixed sequence of top-level sections (Navbar, Hero, About, Services, Projects, Contact, Footer), each anchored by id for the nav (`nav` array in `data.js`) and an `IntersectionObserver`-based active-link highlight in `Navbar.jsx`.

**Shared patterns worth knowing before touching components:**
- `Section.jsx` is the common wrapper for titled sections (anchor scroll offset, container width, heading style) — new sections should use it rather than duplicating its markup.
- `ProjectModal.jsx` and `Lightbox.jsx` both use the native `<dialog>` element (`showModal()`/`close()`) for backdrop, focus trap, and Esc-to-close, instead of a modal library or hand-rolled focus management.
- Dark mode is a `dark` class on `<html>`, toggled by `Navbar.jsx` and persisted to `localStorage.theme`; it's applied pre-render by an inline script in `index.html` to avoid a flash. Tailwind's dark variant is customized in `index.css` (`@custom-variant dark`) to key off that class.
- Scroll-in reveal animations (`.reveal` class) are pure CSS using scroll-driven animations (`animation-timeline: view()`), with no JS/library fallback — browsers without support just show content statically.

No routing library, state management library, or backend — it's a static SPA deployed to Vercel (auto-detected Vite preset, output `dist/`).
