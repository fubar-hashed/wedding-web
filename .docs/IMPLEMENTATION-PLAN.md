# Implementation Plan: Dewanshi & Aayush Wedding Website

**Status:** Ready for implementation  
**Date:** 2026-09-20  
**Wedding:** 26–27 January 2027, Jabalpur, Madhya Pradesh  
**Hosting target:** GitHub Pages  
**V1 scope:** Static invitation, two public views, RSVP-form links, placeholder venue/accommodation content, and a deployed text-file-driven updates board.

## 1. Confirmed product decisions

- Couple: Dewanshi and Aayush.
- 26 January evening: Sangeet + Engagement.
- 27 January afternoon: Haldi.
- 27 January evening: Baraat + Reception.
- Link 1: public website showing only Baraat + Reception.
- Link 2: extended website showing Sangeet + Engagement, Haldi, Baraat + Reception.
- Link 3/admin link: removed. There are no admin privileges in V1.
- RSVP: external Google Form or another form provider; keep the URL in one editable configuration file.
- Venue and accommodation: placeholders in editable content files.
- Updates: a text file is read by the website and rendered as a live updates board after the site is redeployed; this is confirmed V1 scope.
- Guestbook, live admin publishing, QR check-in, registry links, and payment links: deferred.
- Anyone with either public link can view that link’s content.
- Site remains live until manually removed.

## 2. Recommended technical approach

### Stack

- **Astro + TypeScript:** best fit for a content-heavy static site on GitHub Pages; ships minimal JavaScript and supports clean static routes.
- **Plain CSS with design tokens:** keeps the minimal/elegant visual layer modular and replaceable.
- **Markdown/JSON/TypeScript content files:** keeps couple-specific content separate from components and layout code.
- **GitHub Actions:** builds and deploys the static site to GitHub Pages on every approved push.
- **No backend in V1:** RSVP data belongs to the external form provider. The site itself does not store guest data.

### Important behavior constraint

The updates board can fetch a text file at runtime, but GitHub Pages cannot change that file without a repository commit and deployment. Therefore the operational flow is:

```text
Edit updates.txt locally → review → commit/push → GitHub Actions deploys → website polls/loads updated file
```

This is not a secure admin CMS and must not be described to guests as one.

## 3. Repository structure to build

```text
/
├── .docs/
├── public/
│   ├── assets/
│   │   ├── couple/
│   │   ├── events/
│   │   └── motifs/
│   ├── content/
│   │   └── updates.txt
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── EventCard.astro
│   │   ├── EventSchedule.astro
│   │   ├── Hero.astro
│   │   ├── RsvpButton.astro
│   │   ├── SiteHeader.astro
│   │   ├── TravelPlaceholder.astro
│   │   └── UpdatesBoard.astro
│   ├── config/
│   │   ├── couple.ts
│   │   ├── events.ts
│   │   ├── links.ts
│   │   └── site.ts
│   ├── layouts/
│   │   └── WeddingLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── extended.astro
│   └── styles/
│       ├── tokens.css
│       ├── reset.css
│       ├── components.css
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

The exact filenames can change, but content/configuration must remain separate from reusable components and visual styling.

## 4. Critical path

```text
Content model → Static scaffold → Two link views → RSVP integration → Updates board
      ↓               ↓                 ↓                ↓                 ↓
  content review → design review → mobile QA → link/form QA → deployment QA
```

## 5. TODO list

### Milestone 0 — Project safety and decisions

- [ ] Confirm the GitHub repository name and owner.
- [ ] Confirm the intended GitHub Pages base path, for example `/wedding-planner/` versus a root/custom domain.
- [ ] Confirm the exact RSVP provider and create a placeholder form URL if the real form is not ready.
- [ ] Confirm whether Link 1 and Link 2 should be obvious paths such as `/` and `/extended`, or unguessable paths.
- [ ] Confirm whether the updates board should appear on both links or only Link 2.
- [ ] Create a content/asset checklist for the couple and family.

**Gate:** repository, base path, form URL strategy, and link mapping are documented before implementation.

### Milestone 1 — Static application scaffold

- [ ] Initialize Astro with TypeScript and GitHub Pages-compatible build settings.
- [ ] Configure the site `base` path so links and assets work under the final Pages URL.
- [ ] Add strict TypeScript and a formatting/linting command.
- [ ] Add local development and production build commands.
- [ ] Add a basic GitHub Actions workflow that builds the site.
- [ ] Add a placeholder favicon and metadata.

**Acceptance criteria:** local development works; production build succeeds; generated files work under the configured base path.

### Milestone 2 — Content and configuration model

- [ ] Create the couple config with names, date text, location, welcome copy, and placeholder imagery.
- [ ] Create event config for the three schedule blocks, including display order and visibility flags.
- [ ] Create link-view config for Link 1 and Link 2.
- [ ] Create one RSVP URL config value, initially a placeholder.
- [ ] Create placeholder venue, address, map URL, arrival note, accommodation text, and contact text.
- [ ] Create `public/content/updates.txt` with a small agreed format.
- [ ] Add validation for required fields so an incomplete deployment fails early.

**Acceptance criteria:** changing names, event details, RSVP URL, venue, accommodation, or updates requires editing content/config files only—not component markup.

### Milestone 3 — Modular visual system

- [ ] Define minimal/elegant design tokens: colors, typography, spacing, radii, shadows, borders, and motion.
- [ ] Keep tokens in one file so a later visual redesign does not require component rewrites.
- [ ] Build responsive layout primitives: page shell, section, stack, grid, card, button, and divider.
- [ ] Add responsive breakpoints for small mobile, large mobile/tablet, and desktop.
- [ ] Add an intentional reduced-motion mode.
- [ ] Add accessible focus, contrast, and text-size behavior.

**Acceptance criteria:** a design-token change visibly updates the site without changing wedding content or business logic.

### Milestone 4 — Guest-facing invitation

- [ ] Build the hero with Dewanshi and Aayush, wedding dates, location, and invitation message.
- [ ] Build the story/about section with placeholder copy and modular media slots.
- [ ] Build the schedule section from event config.
- [ ] Build event cards with date, time, venue placeholder, map placeholder, attire placeholder, and notes.
- [ ] Build the RSVP call-to-action using the configured external form URL.
- [ ] Build accommodation placeholder section.
- [ ] Build contact/FAQ section with editable copy.
- [ ] Add countdown only if the source timezone and exact wedding start time are confirmed; otherwise show dates only.

**Acceptance criteria:** no hard-coded event or venue text is duplicated across pages; all visible V1 sections work with placeholder content.

### Milestone 5 — Two public link views

- [ ] Make `/` or Link 1 show only Baraat + Reception.
- [ ] Make `/extended` or Link 2 show all three schedule blocks.
- [ ] Keep couple story, RSVP CTA, accommodation placeholder, contact, and design consistent between views.
- [ ] Make the visible event list explicit so Link 1 never accidentally exposes Sangeet, Engagement, or Haldi.
- [ ] Add page metadata and social preview text for each view.
- [ ] Test direct navigation and refresh behavior on GitHub Pages.

**Acceptance criteria:** a Link 1 screenshot contains only Baraat + Reception; a Link 2 screenshot contains all three event blocks; both pages load from a copied URL.

### Milestone 6 — RSVP integration

- [ ] Add the external form URL to configuration, not component code.
- [ ] Use a clear CTA such as “Please let us know” rather than implying native RSVP storage.
- [ ] Confirm the external form collects the approved fields: event attendance, number attending, accommodation needs, contact number, and optional message.
- [ ] Ensure the form opens correctly on mobile and in WhatsApp’s in-app browser.
- [ ] Add fallback contact instructions if the form is unavailable.
- [ ] Test that Link 1 guests are not asked to RSVP to hidden events by the website copy.

**Acceptance criteria:** the CTA opens the correct form; no RSVP data is stored in the static site; form ownership and response access are controlled outside GitHub Pages.

### Milestone 7 — Text-file updates board

- [ ] Define the text format, for example one update per line: `YYYY-MM-DD | Message`.
- [ ] Parse safe plain text only; do not render arbitrary HTML from the file.
- [ ] Display an empty state when there are no updates.
- [ ] Display updates newest-first or in the agreed order.
- [ ] Load the deployed text file on page load.
- [ ] Add cache-busting only if needed; do not claim instant updates before deployment completes.
- [ ] Document the offline workflow: edit file, preview locally, commit, push, verify deployment.

**Acceptance criteria:** a changed `updates.txt` appears after deployment on both intended link views and cannot inject scripts or layout-breaking HTML.

### Milestone 8 — Content, asset, and accessibility QA

- [ ] Replace placeholder names, dates, event text, images, venue, map, accommodation, and contacts when provided.
- [ ] Verify every date, weekday, time, and location with the couple.
- [ ] Verify Link 1 and Link 2 access boundaries with screenshots.
- [ ] Test 360px-wide mobile layout, common Android width, iPhone Safari, tablet, and desktop.
- [ ] Test slow network and image loading behavior.
- [ ] Test keyboard navigation and visible focus.
- [ ] Test screen-reader labels for buttons, images, links, and event sections.
- [ ] Check contrast and avoid text embedded only in images.
- [ ] Check social sharing previews and favicon.

**Gate:** the couple or designated reviewer signs off on content and screenshots before public deployment.

### Milestone 9 — Deployment and handoff

- [ ] Enable GitHub Pages from GitHub Actions.
- [ ] Configure the final Pages URL and verify base-path routing.
- [ ] Add a deployment status check.
- [ ] Verify the deployed site from a fresh browser and mobile device.
- [ ] Record the RSVP form URL, content-edit files, update-file workflow, and rollback procedure.
- [ ] Create a release/tag or backup commit for the approved invitation version.
- [ ] Document how to unpublish the site manually after the wedding.

**Acceptance criteria:** the final URL is shareable; both link views work; RSVP opens; updates render; no placeholder content remains unless intentionally approved.

## 6. Testing gates

### Before any guest sees it

- Build passes in a clean environment.
- No console errors on either public view.
- All internal links and RSVP links work.
- No secret keys, private files, or guest data are committed.
- Link 1/Link 2 visibility is verified manually.

### Before final approval

- Couple approves names, dates, schedule, wording, images, and visual design.
- Family coordinator approves venue, accommodation, contact, and RSVP wording.
- Mobile screenshots are reviewed at the exact link URLs.
- The external form is tested with a non-production response and its result is verified.

### After deployment

- Test from an incognito window and a phone on mobile data.
- Verify a copied link works after refresh.
- Verify the updates file is readable and safe.
- Verify the deployed commit matches the approved commit.
- Keep a rollback commit available.

## 7. Realistic delivery sequence

Assuming one engineer is implementing and content/assets arrive incrementally:

| Work period | Deliverable |
|---|---|
| Days 1–2 | Scaffold, GitHub Pages build, config/content model |
| Days 3–5 | Modular visual system and invitation shell |
| Days 6–8 | Event schedule, two link views, RSVP integration |
| Day 9 | Updates board and offline update workflow |
| Days 10–12 | Placeholder replacement, responsive/accessibility QA, fixes |
| Days 13–14 | Couple/family review, final content corrections, deployment |

The calendar is likely to extend if photos, wording, venue information, or RSVP form decisions arrive late. The critical path is content approval and link-view verification, not writing the components.

## 8. Explicitly deferred

- Guestbook/blessings
- Live admin publishing
- Accommodation assignment dashboard
- QR check-in
- Registry/payment links
- Native RSVP storage
- Login, OTP, or secure admin authentication
- Household-level personalized links
- Vendor integrations
- Custom domain
