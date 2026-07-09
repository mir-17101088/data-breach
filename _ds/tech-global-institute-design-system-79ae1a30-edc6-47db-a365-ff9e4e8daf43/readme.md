# Tech Global Institute — Design System

A design system for **Tech Global Institute (TGI)**, a digital rights nonprofit whose mission is to **advance equities for the Global Majority on the Internet**. TGI centers communication to the communities most affected by technology, contextualizing digital harms and opportunities through decolonial theory, legal discourse, and political science.

This system encodes TGI's brand foundations (color, type, logo, voice), a set of reusable React UI components, and a full recreation of the TGI website.

## Sources

- `uploads/Tgi_brand_guidelines.pdf` — the official TGI Brand Kit (23 pp): About/messaging, logo usage, color palette, typefaces, photo & AI-use guidance, contact. All tokens and rules here are drawn from it verbatim.
- `uploads/tgi_primary_logo.png` — the primary full-color logo. The white (single-color) and icon-only marks in `assets/logo/` were derived from this file (recolor / crop only — the mark itself is never reconstructed).
- Sample illustrations in `assets/illustrations/` were extracted from the brand kit's "Sample Illustrations" pages.

Contact on file: 8 Brunswick Street, Brampton, ON L6X 4Y6, Canada · info@techglobalinstitute.com

---

## CONTENT FUNDAMENTALS

**Voice.** Serious, clear, and rooted in justice. Communication depends on **trust and clarity** — a unified voice across a policy brief, a tweet, or a campaign poster. Two pillars govern every message:
- **People** — center the people most affected by technologies, their lived experiences, and technology's impact on their lives.
- **Context** — go beyond simple storytelling; contextualize harms and opportunities within decolonization theory, legal discourse, and political science.

**Perspective.** Institutional "we" ("We center our communication…", "Our work depends on trust and clarity"). Addresses the reader/collaborator as part of the mission. Not chatty; not first-person singular.

**Casing.** Sentence case for body and most headings. Montserrat display headlines and short kickers may be set in **UPPERCASE** with wide tracking (e.g. "WE CENTER OUR COMMUNICATION TO COMMUNITIES THAT ARE MOST AFFECTED BY TECHNOLOGIES."). Section labels/eyebrows are uppercase.

**Tone examples (from the kit):**
- "Tech Global Institute is a digital rights nonprofit with a mission to advance equities for the Global Majority on the Internet."
- "Our work depends on trust and clarity."
- "Represent communities with dignity — avoid stereotypical or exaggerated features."

**Emoji.** Not used. The tone is crisp and serious; rely on type, color, and minimalist iconography instead.

**Vibe.** Dignity, solidarity, rigor. Academic-adjacent but accessible. Global-South-centered rather than Global-North-default.

---

## VISUAL FOUNDATIONS

**Color.** Primary brand color is **Deep Teal `#174D4F`** (footers, headers, dark sections). **Teal Mid `#246E72`** is the working brand/illustration teal; **Ocean Blue `#1C7D84`** carries highlights and hyperlinks; **Grass Green `#259B5C`** is the CTA / success color. Soft accents — **Mint `#8DD8C2`**, **Pale Mint `#A7DED1`**, **Light Aqua `#B9E0DA`**, **Sage `#B1C9AC`** — are used for backgrounds, cards, and infographics. **Navy `#1F2A44`** and **Black** reinforce text and primary buttons, used sparingly. The overall palette is cool, calm, low-chroma, and teal-dominant. Neutrals are warm-teal-tinted grays derived from the palette (not pure grays).

**Type.** Three families, by medium: **Montserrat** — display/headlines for slides, posters, campaigns (ExtraBold, tight tracking); **Roboto** — all website & product UI plus social content (headings, subheads, body); **Lato** — long-form reading (policy briefs, essays), regular weight with relaxed 1.7 line-height. A modular scale runs 12 → 64px. Eyebrows/kickers are uppercase Roboto with 0.08em tracking, usually in Teal or Mint.

**Spacing & layout.** 4px base grid (`--space-1`…`--space-9`). Reading measure ~820px for briefs; content max-width ~1120px. Generous vertical rhythm (72px section padding on the site).

**Backgrounds.** Mostly clean white or very light teal-gray (`--surface-subtle`). Dark sections use Deep Teal. Full-bleed conceptual illustrations appear behind hero sections at low opacity. No gradients, no busy textures, no repeating patterns — the brand kit explicitly warns against placing the logo over busy backgrounds.

**Imagery.** Symbolic and illustrative over photographic. Conceptual, minimalist illustrations (contracted or CC-licensed), authentic and diverse, rooted in justice. Photos of people only when shot by TGI's own team with permission. AI imagery is allowed for abstract/conceptual visuals on-palette, but **never** to depict real (or realistic imaginary) people. Imagery skews cool/teal to match the palette.

**Corner radii.** Soft but restrained: 4/8/12/20px + pill. Cards use 12px.

**Cards.** White (or soft Light Aqua / Sage / Deep Teal) surface, 12px radius, 1px subtle border on white cards, soft low-chroma teal-tinted shadow (`--shadow-sm`). Interactive cards lift 2px with a slightly stronger shadow on hover. No colored-left-border card pattern.

**Shadows.** Soft, teal-tinted, low opacity (`rgba(16,32,31,·)`) — xs → lg. Elevation is gentle; nothing heavy or neon.

**Borders.** 1px subtle gray dividers; 2px on buttons and form-control focus/selected states. Focus uses an Ocean-Blue ring (`--focus-ring`).

**Animation.** Understated. 120–320ms transitions on a standard ease (`cubic-bezier(0.4,0,0.2,1)`). Fades and small translateY lifts; no bounces, no infinite decorative loops.

**Hover states.** Fills darken (primary → Deep Teal; CTA → darker grass); outline/ghost gain a soft Aqua wash; cards lift. **Press states.** Buttons nudge down 1px (`translateY(1px)`). Links shift from Ocean to Deep Teal + underline.

**Transparency & blur.** Sparing. The sticky site header uses a translucent white with `backdrop-filter: blur(8px)`. Hero illustrations sit at ~16% opacity behind Deep Teal.

---

## ICONOGRAPHY

The brand kit specifies a **minimalist icon style** to keep the tone "serious and crisp." There is **no proprietary icon font** in the source. This system standardizes on **[Lucide](https://lucide.dev)** — thin, consistent 2px-stroke line icons that match the brand's minimalist direction — used via `currentColor` so icons inherit brand color. **[Substitution flagged: Lucide is a substitute for an unspecified minimalist line set; swap to TGI's own set if one exists.]** Cards and UI-kit screens load Lucide from CDN and wrap glyphs in the `<Icon>` component to normalize size/stroke/color. Emoji and Unicode-glyph icons are **not** used. Decorative brand imagery (world map, portrait grids) is illustration, not iconography.

Logo/mark assets live in `assets/logo/` (primary, white, icon). Illustrations in `assets/illustrations/`.

---

## Components

Reusable React primitives (see each `*.prompt.md` for usage). Import from the compiled bundle namespace `window.TechGlobalInstituteDesignSystem_79ae1a`.

- **Actions** (`components/actions/`): **Button**, **IconButton**
- **Brand** (`components/brand/`): **Logo**, **Icon**
- **Forms** (`components/forms/`): **Input**, **Select**, **Checkbox**, **Radio**, **Switch**
- **Display** (`components/display/`): **Card**, **Badge**, **Tag**
- **Feedback** (`components/feedback/`): **Callout**, **Dialog**, **Tooltip**
- **Navigation** (`components/navigation/`): **Tabs**

*Intentional additions* (no source component library was provided; a standard brand-guidelines set was authored): **Icon** wraps the substituted Lucide glyph set to enforce consistent sizing/stroke; **Logo** wraps the official mark with the brand's variant + clear-space rules.

## UI kits

- **`ui_kits/website/`** — the TGI website recreation: interactive click-through across **Home**, **Research library**, and **Policy-brief detail** (plus a short About). Composes the components above; `SiteHeader` / `SiteFooter` are shared shells. Open `index.html`.

## Foundations (Design System tab)

20 specimen cards across **Colors** (core, accents, neutrals, semantic), **Type** (display, UI, body, scale), **Spacing** (scale, radii & shadows), and **Brand** (logo & clear space, illustration, voice), plus **Components** cards for every group.

---

## Index / manifest

- `styles.css` — entry point (imports only). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `components/<group>/` — `<Name>.jsx` + `.d.ts` + `.prompt.md` + one `*.card.html` per group.
- `ui_kits/website/` — website recreation.
- `guidelines/*.card.html` — foundation specimen cards.
- `assets/logo/`, `assets/illustrations/` — brand assets.
- `SKILL.md` — Agent-Skill entry point.
- `readme.md` — this file.

## Fonts note

Montserrat, Roboto, and Lato are all Google Fonts and are loaded via Google's CDN in `tokens/fonts.css` (no binaries are vendored). If you need fully offline/self-hosted webfont files, request them and they can be added as `@font-face` rules.
