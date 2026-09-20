# PRD: Personal Wedding Website for Hindu Weddings

**Status:** Draft for review  
**Date:** 2026-09-20  
**Working name:** [Couple names] Wedding Website  
**Audience:** The couple, their family coordinators, designer, and implementation team

> This is a one-off website for one specific wedding. It is not a reusable wedding-website platform, marketplace, or SaaS product. Couple-specific decisions, content, visual identity, guest list, and wedding logistics take priority over generalization.

## 1. Summary

Build one private, mobile-first wedding microsite for **[Bride name] and [Groom name]**. It should feel like their digital invitation and personal story while also serving as the single guest information hub for their wedding. It will support event details, per-function RSVP, registry/gifting information, travel guidance, and selected day-of updates.

The product is designed around the reality that a Hindu/Indian wedding is often a sequence of functions—such as engagement, haldi, mehendi, sangeet, baraat, wedding ceremony/pherās, and reception—with different dates, venues, timings, dress guidance, and guest lists. The product must support regional and family-specific variation rather than imposing a fixed ritual template.

## 2. Problem

Couples and families currently split information across printed cards, PDFs, WhatsApp messages, spreadsheets, map links, payment/registry pages, and phone calls. This creates predictable problems:

- Guests do not know which events they are invited to, or where and when each event occurs.
- A single wedding-level RSVP does not provide reliable per-function headcounts.
- Last-minute changes are hard to distribute consistently.
- Out-of-town guests need travel, accommodation, pickup, parking, and local information.
- Older relatives and mixed-language families may not be comfortable with email-first flows.
- Couples want a beautiful, emotionally personal invitation without losing operational usefulness.
- Private details such as addresses, room assignments, and family contact numbers should not be publicly indexed.

## 3. Product thesis

One beautiful, private link should serve as the source of truth for this couple’s guest experience. The site should be hand-curated around their story, family, traditions, guest list, venues, and preferred tone. It only needs to support the couple’s expected guest count and wedding workflow; platform-level extensibility is not a goal.

## 4. Goals and non-goals

### Goals

1. Represent this couple’s personality, story, families, and Hindu wedding traditions accurately and warmly.
2. Make every event easy for their guests to understand: date, time, venue, map, attire, schedule, and notes.
3. Collect structured RSVPs per event, household, and guest for this wedding.
4. Make the site easy to share through WhatsApp, QR codes, SMS, email, and printed invitations.
5. Provide the couple’s chosen registry/gift information without making gifts the center of the invitation.
6. Present this wedding in English only, using English transliterations for event names.
7. Keep private guest and logistics information visible only to the intended audience.
8. Remain easy for the couple and designated family members to update through the wedding period.

### Non-goals for MVP

- Vendor marketplace, vendor booking, or support for other couples.
- Full budget, task, procurement, or seating-chart management.
- Automated religious advice, astrology, muhurat calculation, or claims about ritual correctness.
- Payment processing or holding cash gifts directly.
- A social network or public wedding directory.
- Multi-tenant accounts, reusable templates for sale, public self-serve signup, or general-purpose wedding planning.
- Replacing the family coordinator or professional wedding planner.

## 5. Research findings and reference patterns

The following products were reviewed through their current public product pages. They are reference points for deciding which patterns are worth borrowing for this couple’s site; this project does not need to reproduce their full product surface.

| Product | Strong patterns to learn from | Gap/opportunity for this product |
|---|---|---|
| [Zola](https://www.zola.com/wedding-planning/website) | Free website builder, large template library, custom URL, password protection, registry integration, guest list, online RSVP, travel/accommodation, gallery, FAQs, attire, maps, and thank-you tracking. | Primarily framed around a Western single-wedding flow; needs a more explicit multi-function, household, regional-language, and WhatsApp-first model for Hindu weddings. |
| [Joy / WithJoy](https://withjoy.com/wedding-website/) | Connected guest list, personalized invitations, online RSVP, meal preferences, travel tools, guest messaging, mobile-friendly site, registry links, and privacy controls. | Strong general-purpose baseline; opportunity is finer-grained event visibility, regional ceremony vocabulary, and family-side collaboration. |
| [Paperless Post](https://www.paperlesspost.com/features) | Rich digital invitations, email/text/shareable-link distribution, RSVP tracking, galleries, schedule, registry, directions, travel/accommodation, guest check-in, analytics, and co-hosts. | Invitation and event tooling is strong, but a Hindu wedding needs a multi-day event model and per-function RSVP/access as first-class concepts. |
| [WeddingWire India](https://www.weddingwire.in/wedding-tips/how-to-make-a-free-wedding-website--c9703) | Indian wedding-planning context and a wedding website feature. | The product opportunity is to make the personal couple site—not vendor discovery—the primary experience. |
| [WedMeGood](https://www.wedmegood.com/about_us) | India-focused planning ecosystem with vendor discovery, prices, reviews, and wedding inspiration. | Useful ecosystem benchmark; not a focused private invitation and guest-operations product. |
| [Lovewed](https://lovewed.in/) | Indian wedding websites, digital invitations/videos/print cards, Hindu and regional templates, multiple Indian languages, timeline, RSVP, guest list, gallery, and countdown. | Validates demand for culturally specific templates and localization; opportunity is deeper guest segmentation, access control, transport, and operational dashboards. |
| [Sacred Invite](https://www.sacredinvite.com/) | Indian/destination wedding sites, animated invitations, traditional Hindu templates, RSVP, galleries, schedules, countdowns, and venue maps. | Strong visual/invitation baseline; opportunity is structured per-event attendance, household records, and day-of coordination. |
| [Shaadify](https://shaadify.org/) | Multi-event microsites, personalized WhatsApp links, no-app/no-account RSVP, per-event details, guest list, plus-ones, meal preferences, mobile-first design. | Closest competitive pattern; opportunity is broader content, multilingual editing, accommodations/transport, family roles, and post-wedding continuity. |
| [Riwaaz](https://www.riwaaz.in/invitations/website) | Done-for-you multi-event sites, per-ceremony RSVP, meal preferences, maps, gallery, bilingual content, registry/gift links, and voice/video blessings. | Useful reference for the couple’s multi-event schedule, guest experience, and optional blessings/guestbook. |
| [Wedence](https://wedence.in/) | Per-event RSVP, guest segmentation, WhatsApp reminders, travel/hotel tracking, QR check-in, multi-host lists, and multilingual/customizable invitations. | Strong operations benchmark; opportunity is an elegant couple-owned brand and clearer MVP scope. |
| [Varumo](https://varumo.com/) | Fast setup, templates, custom subdomain, RSVP/gallery/countdown, Indian and Kerala designs, and broad language support. | Validates one-time, simple publishing; opportunity is wedding-specific guest intelligence and event-level access. |

### Key conclusions

1. **Multi-event is the primary product distinction.** Indian-focused products consistently make Haldi/Mehendi/Sangeet/ceremony/reception separate objects rather than one schedule block.
2. **Per-event RSVP is more valuable than a single attending/not-attending question.** It drives catering, seating, transport, and accommodation planning.
3. **WhatsApp and phone sharing should be first-class.** The website must produce a rich link preview and work without a guest app or account.
4. **Guest-specific visibility is essential.** Not every guest is invited to every function; the site should show only what a guest or household is meant to see when desired.
5. **Cultural personalization should be configurable.** Hindu rituals and event names vary by region, family, and couple; “custom event” should be as easy as choosing a preset.
6. **The wedding site is a living document.** It must support updates after invites are sent and clearly surface changes.

## 6. Users and audiences for this wedding

### Primary

- **The couple:** Owns the story, visual direction, privacy, event details, registry, and final publishing.
- **Named family coordinators:** Help maintain this wedding’s guest list, follow up on missing RSVPs, and manage accommodation/transport details.

### Secondary

- **Guest:** Needs fast answers on invitation scope, schedule, directions, dress, food, travel, and gifts.
- **Out-of-town guest:** Needs accommodation, airport/rail guidance, pickup, local recommendations, and emergency contacts.
- **Optional wedding coordinator/vendor (limited access):** May receive a one-time export of headcounts, meal totals, arrival information, or check-in names. They do not need a product account.

## 7. Core use cases

### Invitation and storytelling

- Publish a digital invitation with the couple’s names, photos, welcome message, families, and wedding date.
- Share a custom link, QR code, short link, or downloadable invitation card/video.
- Tell the couple’s story, show a gallery, include a countdown, and optionally add music/video.
- Offer an elegant traditional, contemporary, regional, or minimal visual direction.

### Event information

- Add the actual events in this wedding: engagement, roka, haldi, mehendi, sangeet, garba, baraat, pherās, reception, post-wedding lunch, or custom family events.
- For each event: title, date, start/end time, optional auspicious/muhurat time, venue, map, arrival instructions, attire, host, description, schedule, accessibility, and contact.
- Support the venues and timezone(s) needed for this wedding, including destination or diaspora logistics if applicable.

### RSVP and guest management

- Add this wedding’s individuals, couples, and households; designate side/family, host, tags, plus-one policy, children, and contact channel.
- Assign each guest/household to the specific events they are invited to.
- Ask attendance per event, number attending, accommodation needs, contact number, and an optional message to the couple.
- Allow “yes / no / not sure” and a later edit path.
- Send reminders and record delivery/open/response status where channel permissions allow.
- Export CSV for caterers, transport, hotels, and family coordinators.

### Registry and gifting

- Link external registries, honeymoon funds, charitable giving, or a bank/UPI instruction page.
- Allow private registry visibility for selected guests or after RSVP.
- Provide culturally appropriate copy such as “Your presence is our gift,” while leaving the choice to the couple.
- Avoid holding money or presenting financial links as required.

### Travel and hospitality

- Share hotel blocks, room booking instructions, check-in/out, airport/rail routes, shuttle schedule, parking, local taxis, and venue access notes.
- Collect arrival/departure details and room needs from guests.
- Offer guest-specific accommodation and transport assignments.

### During the wedding

- Day-of schedule and live announcements.
- Emergency/contact card and lost-and-found/help information.
- Guest photo upload, moderated guestbook, blessings, voice notes, and short videos.
- Broadcast urgent updates through WhatsApp/SMS/email links or an in-site banner.

### After the wedding

- Publish selected photos/video, thank-you note, guestbook, and final story.
- Share vendor credits and album links.
- Export the guest list and RSVP history.
- Archive or unpublish private logistics while keeping a public/guest-facing memory page.

## 8. MVP scope

### P0: Must have for this wedding

- A fixed, couple-specific visual design and content structure; no theme marketplace.
- Couple profile, hero media, welcome copy, story, family acknowledgements, gallery, and countdown.
- The actual wedding events configured for this couple, with per-event date/time/venue/map/dress/details.
- This wedding’s guest and household records with event assignment.
- Guest-specific invite link or access code where required.
- Per-event RSVP with number attending and accommodation needs.
- RSVP dashboard with confirmed/pending/declined totals by event.
- WhatsApp/shareable link with correct preview image/title/description.
- Private-by-default site, password or magic-link access, and no-index default.
- The couple’s selected external registry/gift links.
- Basic travel/accommodation/FAQ pages.
- One-time CSV import/export for this wedding’s guest list and operational handoffs.
- English-only content for this wedding.

### P1: Should have

- Reminder message templates for the couple/family to send through their chosen channels.
- Family co-host roles and a simple change history.
- Downloadable invitation card or shareable invitation QR code; QR check-in is deferred.
- Guest photo upload and moderated guestbook.
- Accommodation and transport assignment dashboard.
- Downloadable invitation card.

### P2: Later

- QR check-in with live attendance dashboard.
- In-site live updates and notification center if the couple needs them.
- AI-assisted copy/layout suggestions with human approval, only if useful during this site’s creation.
- Public ceremony explainer cards, pronunciation help, and ritual glossary.
- Post-wedding gallery and anniversary mode.

## 9. Guest experience requirements

1. A guest should understand the couple, the next relevant event, and the RSVP action within 10 seconds of opening the link.
2. A guest must not need to create an account or install an app to view or RSVP.
3. The first screen must be legible on a low-end mobile device and on WhatsApp’s in-app browser.
5. Dates and times must be unambiguous, with local timezone and optional muhurat label.
6. Every venue must offer a map link plus plain-text address and arrival notes.
8. The site must remain usable for English-speaking guests and include a visible family contact option for guests who need help.
9. The site should not autoplay audio or depend on animation to convey essential information.

## 10. Couple/admin experience requirements

- Preview as public site, invited guest, and different household/event combinations.
- Edit content after publishing with an explicit “last updated” indicator for guests.
- Edit the couple’s actual events and use a small number of optional presets only as setup shortcuts.
- See event-level headcount, accommodation needs, and missing responses.
- Filter/export by family side, event, RSVP status, meal, transport, hotel, and accessibility need.
- Support the couple and named family coordinators without sharing the couple’s full credentials.
- Preserve an audit trail for RSVP edits and published changes.

## 11. Suggested information architecture

### Guest-facing

1. Home / invitation
2. Our story
3. Events / schedule
4. RSVP
5. Travel & stay
6. Registry / gifting
7. Gallery
8. FAQ / contact
9. Guestbook (optional)

### Couple-facing

1. Overview
2. Site editor
3. Events
4. Guests & households
5. RSVP dashboard
6. Travel, rooms & transport
7. Registry/gifts
8. Messages/reminders
9. Settings, privacy, roles, export

## 12. Content and data needed for this wedding

- **Couple profile:** names, preferred display order, photos, welcome, story, family names, wedding date, timezone, and visual identity.
- **Wedding events:** only the functions in this wedding, such as haldi, mehendi, sangeet, pherās, reception, or custom family events; each has date/time, optional muhurat, venue, map, attire, description, host, visibility, and RSVP deadline.
- **Guest list:** the actual people and households invited to this wedding, their contact details, family side, relationship, language, plus-one/children rules, and event access.
- **RSVP responses:** per-event attendance, party count, accommodation need, contact number, optional message, and last update.
- **Site content:** approved copy, translations, photos, videos, gallery order, FAQs, travel instructions, contacts, and update notices.
- **Gift links:** the couple’s chosen registry, honeymoon fund, charitable giving, or gift wording.
- **Operational exports:** event headcounts and accommodation requirements for this wedding only.

No generalized wedding templates, public directory, cross-wedding analytics, or reusable customer-account model is required.

## 13. Privacy, safety, and trust

- Private by default; no search indexing unless explicitly enabled.
- Per-wedding data isolation and least-privilege family/vendor roles.
- Do not expose full guest lists to other guests.
- Signed, expiring guest links or access codes; ability to revoke a link.
- Encrypt data in transit and at rest; protect exported files.
- Clear consent for guest photos, voice notes, and videos; moderation and delete controls.
- Do not store payment credentials; outbound gift links should be clearly identified.
- Provide a retention/unpublish option after the wedding.
- Make cultural/religious copy editable and label any ritual information as couple-provided, not authoritative religious guidance.

## 14. Success criteria for this wedding

### Before the wedding

- The couple approves the design, content, privacy settings, and guest experience before the invitation is shared.
- All confirmed wedding events have complete and reviewed date, time, venue, map, attire, and arrival information.
- The site can be updated by the couple or a named family coordinator without developer intervention.

### Guest outcomes

- Most invited households can open the site successfully from WhatsApp or a QR code.
- The couple reaches its chosen RSVP completion target before catering/transport deadlines.
- Guests can find the next relevant event, directions, dress guidance, and contact details without asking the couple.
- The site works on the phones and browsers used by the couple’s guest group, including low-bandwidth conditions.

### Operational outcomes

- The couple/family can produce event-level headcount and accommodation lists in under 2 minutes.
- Every RSVP response is attributable to a guest or household.
- Last-minute venue/time changes can be published and communicated to the affected guests.

### Quality and trust

- The site remains available through the wedding period and the post-wedding archive window chosen by the couple.
- No accidental public exposure of private guest records in the pre-launch review.
- Core guest pages pass mobile accessibility and performance checks.

## 15. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Guests ignore online RSVP or prefer WhatsApp/phone | Plain-language prompts, WhatsApp-friendly links, family coordinator follow-up, phone RSVP field, CSV/manual entry. |
| Rituals and event names vary by region | Presets are optional; custom events, custom copy, custom language, and couple approval are always available. |
| Sensitive data leaks through shared links | Private-by-default access, guest-specific tokens, no-index, revocation, minimal guest exposure. |
| Too many features make setup intimidating | Progressive disclosure, import from spreadsheet, event presets, strong P0 focus. |
| Registry/gifting feels culturally awkward | Optional module, configurable wording, private visibility, external links only. |
| WhatsApp API availability and policy constraints | Launch with share links and prefilled messages; add official integration only with consent and compliance. |
| Older/low-connectivity guests struggle | Fast pages, text-first fallback, downloadable/printable invite, map/address text, phone contact. |
| Last-minute changes are missed | In-site update banner, “updated” timestamps, targeted notifications, resendable change messages. |

## 16. Launch plan

### Phase 1: Couple content and design

- Confirm the couple’s names, story, family details, ceremony traditions, event list, language, tone, photos, and visual direction.
- Produce a clickable or staging version with the actual event content and sample guest records.

### Phase 2: Guest readiness

- Import and verify the real guest list and event assignments.
- Test private links, RSVP paths, maps, registry links, QR code, WhatsApp preview, and exports.
- Run a review with the couple and at least one family coordinator before sending invitations.

### Phase 3: Wedding operations

- Send the approved invitation.
- Monitor missing RSVPs, issue reminders, publish changes, and produce catering/accommodation/transport lists.
- Keep a simple day-of contact/update page available if needed.

### Phase 4: After the wedding

- Publish selected photos, thank-you message, guestbook, and album links.
- Remove or hide private logistics and retain the memory page for the period chosen by the couple.

## 17. Open questions for review

1. What are the couple’s names, wedding date, city/country, timezone, and preferred domain or URL?
2. Which events are actually part of this wedding, and which guests are invited to each one?
3. Should the site be fully public, password-protected, or guest-specific through household links?
4. Which language(s) should guests see, and should event names use English, Hindi, transliteration, or regional terminology?
5. What tone and visual direction should the site follow: traditional, contemporary, editorial, playful, or a specific family/ceremony aesthetic?
6. What RSVP information is genuinely needed for this wedding: meal choice, allergies, plus-ones, children, accommodation, travel, transport, accessibility, or other needs?
7. Which registry/gift links and wording have the couple approved?
8. Does the family need a guestbook, live updates, QR check-in, accommodation assignments, or only invitation + RSVP?
9. How long should the site and any private guest data remain available after the wedding?

## 18. Decisions from review

### Confirmed

- Couple: Dewanshi and Aayush
- Wedding dates: 26 January and 27 January 2027
- Location: Jabalpur, Madhya Pradesh, India
- Hosting: GitHub Pages
- Custom URL/domain: None planned
- Event schedule:
  - 26 January 2027 evening: Sangeet + Engagement
  - 27 January 2027 afternoon: Haldi
  - 27 January 2027 evening: Baraat + Reception
- Guest visibility: different guests/households should see different schedules through the personalized link shared with them.
- Guest authentication: no account or OTP; access is granted through the personalized private link alone.
- Language: English only; event names use English transliteration.
- Initial visual direction: minimal and elegant.
- Design architecture: keep visual design files, tokens, assets, and reusable components separate from wedding content and RSVP logic so the design can be changed later without restructuring the site.
- RSVP fields: per-event attendance, number of guests attending, accommodation needs, contact number, and optional message to the couple.
- RSVP fields intentionally excluded: guest names, dietary restrictions, and transport needs.
- Gifting for V1: display only the note “Your presence is our gift”; registry or payment links are deferred to V2.
- QR check-in: excluded from V1 and deferred for later consideration.
- V1 extras: include guestbook/blessings, live updates/announcements, and accommodation assignment details.
- Retention: keep the site live, including private wedding data, until the couple manually removes or unpublishes it.
- V1 updates implementation: the updates board reads an editable text file; changes become visible after the file is committed and the GitHub Pages deployment completes.

## 19. Research notes and sources

Research was conducted on 2026-09-20. Product capabilities and pricing may change; the links below are the source of truth for current implementations.

- [Zola wedding websites](https://www.zola.com/wedding-planning/website)
- [Zola registry FAQ](https://www.zola.com/faq/115002835012)
- [Joy / WithJoy wedding website](https://withjoy.com/wedding-website/)
- [Paperless Post features](https://www.paperlesspost.com/features)
- [WeddingWire India wedding website guide](https://www.weddingwire.in/wedding-tips/how-to-make-a-free-wedding-website--c9703)
- [WedMeGood about page](https://www.wedmegood.com/about_us)
- [Lovewed](https://lovewed.in/)
- [Sacred Invite](https://www.sacredinvite.com/)
- [Shaadify](https://shaadify.org/)
- [Riwaaz multi-event wedding website](https://www.riwaaz.in/invitations/website)
- [Wedence](https://wedence.in/)
- [Varumo](https://varumo.com/)
- [Hindu wedding overview and regional variation](https://en.wikipedia.org/wiki/Hindu_wedding)
- [Australian Council of Hindu Clergy: The Hindu Sacrament of Marriage](https://www.australiancouncilofhinduclergy.com/uploads/5/5/4/9/5549439/the_hindu_sacrament_of_marriage.pdf)

The product recommendations in this PRD are inferences from the capabilities and positioning described in these sources, combined with the needs of a private, multi-event Hindu wedding guest experience.
