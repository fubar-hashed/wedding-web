# Dewanshi & Aayush Wedding Website

Static Astro website for Dewanshi and Aayush’s wedding celebrations in Jabalpur.

The planned GitHub Pages URL is `https://fubar-hashed.github.io/wedding-web/`.

## Local development

```sh
npm install
npm run dev
```

The two planned public views are:

- `/` — Baraat + Reception
- `/extended` — Sangeet + Engagement, Haldi, Baraat + Reception

## Editing wedding content

Edit these files without changing components:

- `src/config/site.ts` — couple copy, RSVP URL, venue, accommodation, contact
- `src/config/events.ts` — event names, dates, times, descriptions, and attire
- `src/config/links.ts` — which events appear in each public view
- `public/content/updates.txt` — one live-board update per line
- `src/styles/tokens.css` — colors, typography, spacing, and visual direction
- `public/assets/` — approved images and visual assets

The RSVP URL is intentionally a placeholder until the external form is ready.

## Updating the live board

Edit `public/content/updates.txt`, review locally, commit, and push. GitHub Pages will redeploy the site and the updates board will load the new text after deployment.

## Build verification

```sh
ASTRO_TELEMETRY_DISABLED=1 npm run check
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

The GitHub Actions workflow in `.github/workflows/deploy.yml` deploys the generated `dist/` directory to GitHub Pages from `main`.
