# Repository Guidelines

## Project Structure

This repository is a static Astro wedding website. Pages live in `src/pages/` (`index.astro`, `extended.astro`, and the development-only `develop.astro`); shared page layout and UI are in `src/layouts/` and `src/components/`. Wedding details and page event selection are centralized in `src/config/`. Global styles and design tokens are in `src/styles/`. Public files such as images and live-board text belong in `public/`. Astro builds the site into `dist/`; do not edit generated output.

## Development and Build Commands

- `npm install` installs the locked dependencies.
- `npm run dev` starts the local Astro development server.
- `npm run check` runs Astro and TypeScript diagnostics.
- `npm run build` checks the project and generates the production site in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run format` formats supported files with Prettier; review the resulting diff before committing.

For CI-like local verification, run `ASTRO_TELEMETRY_DISABLED=1 npm run check` and `ASTRO_TELEMETRY_DISABLED=1 npm run build`. No separate test suite is currently configured.

## Code Style and Content

Use the existing Astro component patterns and TypeScript for configuration. Keep wedding copy, event data, and view selection in `src/config/` rather than duplicating them in page markup. Use descriptive PascalCase names for Astro components (for example, `EventCard.astro`), camelCase for TypeScript values, and CSS variables from `src/styles/tokens.css` for shared design values. Keep public asset names descriptive and place theme artwork in `public/assets/themes/` and couple portraits in `public/assets/couple/`. Run Prettier on edited files and preserve the established formatting.

## Testing and Review

There are no unit or integration tests at present. Run `npm run check` and `npm run build` for changes to pages, components, styles, or configuration, then inspect the affected route locally with `npm run dev` when visual behavior changes. For visual changes, include screenshots in the pull request when useful.

## Commits and Pull Requests

Recent commits use short, imperative descriptions (for example, “Add theme preview selector” and “Fix theme artwork…”). Follow that style and keep each commit focused. Pull requests should summarize the user-visible change, list verification commands and results, link related issues when applicable, and note any content or asset updates. Avoid committing secrets, generated `dist/` output, or unoptimized source images intended for public use.
