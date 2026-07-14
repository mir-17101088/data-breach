# Breached and Unanswered — Deployment Guide (TGI Dev Team)

No build step, no backend, no
database, no environment variables. Deploy by uploading the files to any static
host or web server (Nginx, Apache, S3/CloudFront, Netlify, GitHub Pages, etc.).

---

## 1. Files to upload

Upload these, **preserving the folder structure** (all asset paths are relative):

index.html            ← the report
support.js            ← runtime helper (loaded first in <head>)
incidents-data.js     ← the full 68-incident dataset (appendix table)
assets/               ← images (hero, logos, section art, stage cards)
_ds/                  ← design system: fonts, color/spacing tokens, styles, JS bundle


open `index.html` at the site root and it runs.

---

## 2. Set the production domain (required for SEO & social sharing)

The `<head>` of `index.html` contains social-preview tags that **must be absolute
URLs** (crawlers for X, Facebook, LinkedIn, Slack do not run JavaScript, so these
live in the static head on purpose).

**Action:** global find-and-replace, in `index.html`, of the token:

```
https://REPLACE_WITH_PRODUCTION_ORIGIN   →   https://<your-live-origin>
```

Use the real deployed origin with **no trailing slash**, e.g.
`https://reports.techglobalinstitute.com`.

This updates 4 tags: `canonical`, `og:url`, `og:image`, `twitter:image`
(the OG/Twitter image is `assets/hero_image.png`). There is also one mention
inside an explanatory comment — replacing it too is harmless.

---

## 3. Set the "View PDF report" link (PDF not uploaded yet)

The header button and the footer link both read from a single `pdfUrl` value,
which currently defaults to the placeholder `#pdf-report-link-placeholder`
(an in-page anchor).

**Steps once the report PDF gets uploaded:**

1. Upload the PDF somewhere (e.g. `assets/breached-and-unanswered.pdf`,
   or your document host / CDN) and copy its URL.
2. In `index.html`, replace **both** occurrences of the placeholder string
   `#pdf-report-link-placeholder` with that URL:
   - the default inside the `data-props="…"` attribute on the `data-dc-script` block, and
   - the fallback line `pdfUrl: this.props.pdfUrl ?? '#pdf-report-link-placeholder'`.

   (A find-and-replace of `#pdf-report-link-placeholder` across the file covers both.)

Both the sticky-header **View PDF report** button and the footer link will then
point to the live PDF.

---

## 4.

- **No relative-path surprises:** every CSS/JS/image reference is relative, so the
  site also works from a sub-path (e.g. `https://example.com/reports/breaches/`)
  as long as the folder structure above is kept intact.
- **Caching:** `assets/` and `_ds/` are safe to serve with long cache lifetimes;
  give `index.html` a short/no-cache policy so content edits go live immediately.
- **Edits drift line numbers** — locate the tokens above by search
  (`REPLACE_WITH_PRODUCTION_ORIGIN`, `#pdf-report-link-placeholder`).
