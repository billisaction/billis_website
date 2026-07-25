# Design Review: Bilis Initiative Website

Reviewed against: live implementation at `http://localhost:3000` (no DESIGN_BRIEF.md found)
Philosophy inferred: editorial nonprofit — solemn, high-contrast, mission-first
Date: 2026-07-25

## Screenshots Captured

| Screenshot | Breakpoint | Description |
| --- | --- | --- |
| `screenshots/review-homepage-desktop-1280.png` | Desktop | Home hero and above-the-fold |
| `screenshots/review-homepage-tablet-768.png` | Tablet | Home hero + nav crowding |
| `screenshots/review-homepage-mobile-375.png` | Mobile | Home hero + mobile CTAs |
| `screenshots/review-homepage-mobile-menu-open.png` | Mobile | Open sheet navigation |
| `screenshots/review-what-we-do-desktop-1280.png` | Desktop | Programs page hero |
| `screenshots/review-impact-desktop-1280.png` | Desktop | Impact page with runtime issue |
| `screenshots/review-about-desktop-1280.png` | Desktop | About page hero |
| `screenshots/review-about-tablet-768.png` | Tablet | About hero overflow risk |

## Summary

The site has a strong emotional and visual direction. The black / cream / terra palette, Playfair headlines, and survivor-centred copy create a serious, trustworthy nonprofit presence. That said, it currently feels like a polished prototype rather than a launch-ready org website: primary conversion actions are dead ends, credibility claims look placeholder, content geography is inconsistent, and the homepage is overloaded with overlapping sections.

My overall take: **beautiful bones, unfinished experience**. If this launched tomorrow, donors and partners would feel the aesthetic first — then lose trust when Donate, news, resources, and partner claims do not hold up.

## Must Fix

1. **Primary CTAs do nothing**
   `Support Our Work`, `Donate Now`, `How You Can Help` buttons, `Download Resource`, and `Read more stories` either have no destination or no payment/contact flow. See `src/components/sections/Hero.tsx`, `Donate.tsx`, `HowYouCanHelp.tsx`, `Resources.tsx`, `Story.tsx`.
   _Fix: wire Donate to a real giving link or form; make secondary CTAs deep-link to real destinations or remove them._

2. **News / stories are fake navigation**
   `LatestNews` uses `href="#"` for every story and "View All Updates". See `screenshots/review-homepage-desktop-1280.png` and `src/components/sections/LatestNews.tsx`.
   _Fix: create real story pages or remove the section until content exists._

3. **Trust layer is placeholder**
   Footer shows `Registered Charity No. 1234567`; Donate claims `100% goes to programme work`; Partners are text badges (`UNICEF Partner`, `UK Gov't`) with no logos, links, or verification. See `Footer.tsx`, `Donate.tsx`, `Partners.tsx`.
   _Fix: replace with verified facts only. Unverified claims hurt more than omission._

4. **Impact page runtime issue**
   Next.js reports an issue in `RegionalImpact.tsx` because two cards share the same React key (`Somali Reginal State`). See `screenshots/review-impact-desktop-1280.png`.
   _Fix: use unique keys and unique region names._

5. **Content geography / spelling is inconsistent and incorrect**
   Repeated typos: `Reginal` / `Oramia`. Location model conflicts across pages: Kenya, Ethiopia, Western Europe, and duplicated Somali Regional State. See `WhereWeWork.tsx`, `RegionalImpact.tsx`, `Milestones.tsx`, About copy.
   _Fix: lock one true geographic model and rewrite all location content from that source of truth._

6. **Brand naming mismatch**
   Site copy says **Bilis Initiative**; logo wordmark reads as **Bilis Action Network**. That identity split is visible in every header/footer screenshot.
   _Fix: decide the legal/public name and align logo + UI copy immediately._

## Should Fix

1. **Homepage is too long and repetitive**
   Home stacks Hero → strip → Mission → Stats → Programs → News → Objectives → Help → Donate → Newsletter → Partners (~7.2k desktop / ~13.9k mobile). Much of this repeats About / What We Do / Impact.
   _Suggestion: keep Home as Mission + proof + programmes teaser + donate/newsletter. Move depth to subpages._

2. **Mobile accessibility targets are too small**
   Measured under 44px: hamburger (24×24), Learn More, View All Updates, Read Story, Share/Join buttons (~32px), footer links (~20px).
   _Suggestion: increase hit areas with padding / min-height, especially nav and footer._

3. **Hero feels half-finished**
   Floating cards are commented out, leaving an empty decorative photo zone; primary CTA is unlinked; Explore indicator competes with the stats bar.
   _Suggestion: either restore a meaningful photo caption/stat card or simplify the right column to pure photography._

4. **Subpage information architecture is shallow**
   Footer promises Team / Governance / Annual Reports / Volunteer / Contact, but nearly everything routes to generic `/about` or `/what-we-do` without anchors.
   _Suggestion: add real anchors/sections or remove over-promised links._

5. **Leadership / Story modules are commented out or incomplete**
   About hides Leadership; Home hides Story. That removes faces and lived narrative — the strongest assets for this cause.
   _Suggestion: reinstate people and stories, even if fewer and better curated._

6. **Image system is messy**
   Filenames like `WhatsApp Image...`, `Logoooo.png`, duplicated extensions (`JPG.jpeg`), unused new assets (`IMG_5385`–`5388`), missing `sizes` on many `fill` images, and at least one about-page image reported broken during review.
   _Suggestion: rename/curate a clean media set and optimize for Next Image._

## Could Improve

1. **Palette vs new logo**
   New logo uses plum/purple + gold; site system is terra rose + cream + black. They can coexist, but currently feel adjacent rather than unified.

2. **Motion / polish**
   Hover scale on Donate is a bit cheap for the solemn tone. Prefer quieter transitions and stronger focus states.

3. **Typography scale**
   Large serif heroes are beautiful, but on tablet/mobile some subpage heroes feel oversized relative to viewport and risk wrapping awkwardly.

4. **Newsletter authenticity**
   Current success state is a simulated `setTimeout`. Prefer a real ESP integration or honest waitlist copy.

5. **Semantic structure**
   Several sections jump from `h2` to `h4`; footer uses `h5`. Tighten heading order for accessibility and SEO.

## What Works Well

- Strong mission framing: "Every girl deserves to grow up whole." is memorable and emotionally precise.
- High-contrast editorial aesthetic feels appropriate for a rights-focused NGO, not generic SaaS charity template energy.
- Token system in `globals.css` is coherent (`terra`, `sand`, `earth`, `cream`, `gold`).
- Mobile menu is simple and clear once opened.
- Section vocabulary (eyebrow labels, serif H2s, restrained card treatment) is consistent enough to feel intentional.
- Donate amount selector UI is visually clear and easy to scan.

## Recommended Next Sprint

1. Fix identity + content truth (name, geography, charity details).
2. Make conversion real (donate / contact / newsletter).
3. Cut homepage length and restore people/story proof.
4. Accessibility pass on touch targets + focus states.
5. Media cleanup and brand-token alignment with the new logo.
