# R2: Claude Opus review

`next start -p 3010` on `evidence-redesign` @ `3195f2c`; the served HTML includes the scorecard, so the build is current. Tested at 1280, 768 and 390 @2x. GitHub `docs/` 404s are not penalised.

## Scores: **8.53 / 10** (R1 7.98)

| Criterion | W | R1 | R2 | Why |
|---|---:|---:|---:|---|
| Clarity | 1.5 | 9 | 9 | Name now in the mobile nav. Eyebrow still orphans "LAGOS". |
| Evidence | 2.0 | 7.5 | 8.5 | All 7 flagged lines sourced or rewritten; Pluto honest. Three small inferences left (fix 6). |
| Case depth | 1.5 | 7 | 7.5 | Latency has Context/Diagnosis/Fix/Validation. Export has no result or tradeoff. |
| AI proof | 1.5 | 8 | 8.5 | Honest approved/review glyphs and an in-page scorecard. No public demo. |
| Visual craft | 1.5 | 7.5 | 8.5 | Every R1 layout defect is fixed. Nav overflow, eyebrow, tablet hero and height remain. |
| Perf/a11y/SEO | 1.0 | 8.5 | 9 | A11y 100, but mobile LCP regressed to 2.6 s. |
| Conversion | 1.0 | 9 | 9 | Contact added to the nav. Still no availability line. |

Weighted: 13.5 + 17 + 11.25 + 12.75 + 12.75 + 9 + 9 = **85.25 / 100**.

## R1 fixes: verification

| # | Fix | Status |
|---|---|---|
| 1 | Unsourced claims | **Landed**, mostly by adding sources to `evidence.md`. |
| 2 | Pluto encoding | **Landed.** The hatched `data-state='review'` glyph is better than my proposal. |
| 3 | Nav ≤1080 | **Landed.** At 390px the links scroll (448 vs 354px) and Contact is hidden with no cue. |
| 4 | Mobile chart / "≈300×" | **Mostly.** Ticks 11.6px, value 18.8px, strike gone. `.latency__label` renders at **9.4px**. |
| 5 | Grid stretch, double borders | **Landed.** |
| 6 | Tablet staircase | **Landed.** |
| 7 | Mobile height | **Partial.** 12,890 → 12,655px. The open scorecard adds 428px (AI section 3,019 → 3,456px). The eyebrow still wraps. |
| 8 | A11y | **Landed.** 100; kicker 5.35:1; footer links 29px. |

I withdraw R1 defect 7: the career "dead space" is just the 128px section padding.

## Remaining defects

These are fixed by the like-numbered items below:
- `.nav__links` hides Contact with no cue, and the nav is 93px tall.
- `.eyebrow` leaves "LAGOS" alone on line 2 at 390px.
- `.latency__label` renders at 9.4px.
- `details.scorecard[open]` costs 428px on mobile, and its "−" toggle reads as an em dash.

Also:
- **Tablet hero (681–1080px):** the portrait sits alone on the left.
- **Mobile LCP:** hiding the portrait made `p.hero__intro` the LCP element, with 2.1 s of JS-driven render delay.
- **Export `.case`:** the Constraint row repeats the H3.

## Top 6 fixes

Fixes 1–3 and 5 were tested by injecting the CSS; results in brackets.

### 1. Make the nav fit at 390px [354/354px, height 87px]

Contact duplicates the "Email me" pill, so it can go at this width.

```css
@media (max-width:680px){
  .nav__links { gap: 14px; }
  .nav__links a[href="#contact"] { display: none; }
  .nav__links a { padding: 7px 0; }
}
```

### 2. Eyebrow and chart labels [eyebrow on one line; label bbox 94 < LEFT 112]

```css
@media (max-width:680px){
  .eyebrow { letter-spacing: .06em; }
  .latency__label { font-size: 20px; letter-spacing: 0; } /* ≈11px */
}
```

### 3. Collapse the scorecard [mobile 12,305px (−350); desktop −227px]

Drop `open` from `<details className="scorecard">`, then:

```css
.scorecard summary strong { line-height: 1.15; }
.scorecard summary strong::after { content: ' · show scores'; font: 700 .8rem var(--body); letter-spacing: .08em; text-transform: uppercase; }
.scorecard[open] summary strong::after { content: ' · hide'; }
```

### 4. Ship zero JS

Worth doing: with JS blocked, mobile perf goes from 96 to **100** and LCP from 2.6 s to **1.7 s**. I tested the stripped HTML: same height, 0 scripts, `<details>` still works, JSON-LD kept, and the HTML drops from 206 KB to 75 KB.

- `next.config.ts`: `output: 'export', images: { unoptimized: true }`, and drop `cacheComponents`/`partialPrefetching`.
- Pre-resize images to WebP (portrait 640w, product shots 1280w); otherwise the export serves the 113 KB JPG.
- Add `"postbuild": "node scripts/strip-runtime.mjs"`:

```js
import { readFile, writeFile } from 'node:fs/promises'
const f = 'out/index.html'
const html = (await readFile(f, 'utf8'))
  .replace(/<script\b(?![^>]*ld\+json)[^>]*>[\s\S]*?<\/script>/g, '')
  .replace(/<link[^>]*as="script"[^>]*>/g, '')
if (/<script(?![^>]*ld\+json)/.test(html)) throw new Error('runtime script survived')
await writeFile(f, html)
```

### 5. Tablet hero [`#top` 1,016 → 712px]

```css
@media (min-width:681px) and (max-width:1080px){
  .hero { grid-template-columns: 1fr 200px; gap: 32px; align-items: start; }
  .hero__portrait { width: 100%; justify-self: end; margin-top: 40px; }
  .proofs strong { font-size: 1.45rem; } /* "45.5 ms" wraps otherwise */
}
```

### 6. Copy

- Export `.case`: delete the Constraint row; change Scope to "End to end, frontend to private download, as shown."
- `careerSteps[0].note`: "…while doing the HNG internship on the side". The dossier names one internship.
- `aiPractice[1].body`: "own its architecture, auth, data flows" is not in the dossier. Add it there, or say "built it end to end".
- `#ai` lede: "every day" has no source. Use "I use AI to build".

## Measured

**Lighthouse mobile** (2 sequential runs, none during screenshot capture):

| Metric | Value |
|---|---|
| Perf / a11y / BP / SEO | **96 / 100 / 100 / 100** |
| LCP | 2.6 s (both runs) |
| TBT | 100–130 ms |
| CLS / FCP | 0 / 0.9 s |
| LCP element | `p.hero__intro`, render delay 2,100 ms |
| Fonts blocked | LCP 2.6 s, so fonts are not the cause |
| JS blocked | perf 100, LCP 1.7 s |

**Lighthouse desktop:** 100 / 100 / 100 / 100, LCP 0.6 s, TBT 0.

**Transfer, 254 KB total:** script 141 KB (53 KiB unused), fonts 59 KB, document 27 KB, images 21 KB, CSS 6 KB.

**Page heights:**
- Desktop 9,505px (+436 from the scorecard)
- Tablet 11,137px (+947)
- Mobile **12,655px** at 390×844 @2x, not the ~12.3k in the brief

**Contrast:** `#a3340f` is 5.35:1 on paper-deep and 6.08:1 on paper.

## Needs owner input

- **Export result:** rows/MB per export, job duration, one recovery incident, and who uses it. This would lift case depth to about 8.5.
- **Latency tradeoffs:** what was rejected, and whether the gain held in production.
- **Availability / target role:** e.g. "Open to senior frontend / full-stack roles, remote or Lagos."
- **Publishing raw scores:** the scorecard tells hiring managers that reviewers rated the site 7.4–8.0. Show it now, or once scores rise? Leaving out Gemini's off-rubric R0 7.5 is defensible.
