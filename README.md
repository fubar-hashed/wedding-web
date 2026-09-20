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
- `public/assets/themes/` — local theme hero artwork used by the visual themes

The RSVP URL is intentionally a placeholder until the external form is ready.

## Switching visual themes

The active theme is controlled by `theme` in `src/config/site.ts`:

```ts
theme: 'contemporary-festive'
```

Available themes:

- `contemporary-festive` — current direction with coral, marigold, peach, and warm ivory accents
- `minimal` — preserved backup of the original restrained palette
- `earthy-handcrafted` — terracotta, sand, olive, tactile surfaces, and artisanal warmth
- `modern-editorial` — high contrast, sharp grids, and magazine-inspired typography
- `pastel-garden` — blush, sage, ivory, rounded surfaces, and soft romantic styling

Changing this one value switches the theme without changing wedding content, event visibility, or RSVP behavior.

For visual review, the site also includes a **Preview theme** dropdown. It changes the theme instantly and remembers the choice in the browser. This preview control should be hidden or removed before the invitation is shared with guests.

## Updating the live board

Edit `public/content/updates.txt`, review locally, commit, and push. GitHub Pages will redeploy the site and the updates board will load the new text after deployment.

## Build verification

```sh
ASTRO_TELEMETRY_DISABLED=1 npm run check
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

The GitHub Actions workflow in `.github/workflows/deploy.yml` deploys the generated `dist/` directory to GitHub Pages from `main`.

### GitHub Pages configuration

In the repository settings, open **Settings → Pages** and set **Source** to **GitHub Actions**. Do not select **Deploy from a branch**; that mode runs Jekyll against the Astro source files and produces YAML front-matter errors.
