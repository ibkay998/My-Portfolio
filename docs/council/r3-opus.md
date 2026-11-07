# R3: Claude Opus review

Static export from `out/` on :3010 (`evidence-redesign` @ `751d3b4`). Tested at 1280, 768 and 390 @2x. GitHub `docs/` 404s are not penalised.

## Scores: **8.75 / 10** (R2 8.53)

| Criterion | W | R2 | R3 | Why |
|---|---:|---:|---:|---|
| Clarity | 1.5 | 9 | 9 | The eyebrow fits on one line at 390px. The desktop proof row is now ragged (fix 1). |
| Evidence | 2.0 | 8.5 | 9 | Receipts link to the evidence file; screenshots dated; "0 rejections" scoped; inferences gone. |
| Case depth | 1.5 | 7.5 | 7.5 | The export case is unchanged: no result, no tradeoff, and the Constraint row repeats the H3. |
| AI proof | 1.5 | 8.5 | 8.5 | The scorecard is collapsed. Still no public demo. |
| Visual craft | 1.5 | 8.5 | 9 | All five R2 layout defects are fixed. Four small wrap defects remain. |
| Perf/a11y/SEO | 1.0 | 9 | 9.5 | Zero JS, a11y 100, wider JSON-LD, static OG image. |
| Conversion | 1.0 | 9 | 9 | Added "Ask me about this work". Still no availability line. |

Weighted: 13.5 + 18 + 11.25 + 12.75 + 13.5 + 9.5 + 9 = **87.5 / 100**.

## R2 fixes: verification

| # | Fix | Status |
|---|---|---|
| 1 | Nav at 390px | **Landed.** 354/354px, 87px tall. |
| 2 | Eyebrow and chart labels | **Landed.** Eyebrow is one line (17px); `.latency__label` is 11.1px. |
| 3 | Collapse the scorecard | **Landed.** 131px closed on mobile, but the toggle wraps as "· SHOW / SCORES" (fix 3). |
| 4 | Zero JS | **Landed.** Only the JSON-LD script remains; 0 KB JS; HTML 74 KB. |
| 5 | Tablet hero | **Landed.** `#top` is 710px at 768px. "ms" orphans (fix 2). |
| 6 | Copy | **3 of 4.** HNG, "built it end to end" and the "every day" removal landed. The export Constraint row is still there. |

## Remaining defects

- `.proofs strong` (src/app/globals.css:131) at 1280px: the values wrap 1 / 2 / 2 lines, so the labels start at different heights. This was caused by the copy change to "0 rejections in one cycle".
- `.proofs strong` at 768px: "13.7 s → 45.5" leaves "ms" alone on line 2.
- `.scorecard summary strong::after`: the inline label breaks across lines at 390px and 768px.
- `h2#ai-title` at 1280px: "test." sits alone on its line. The export `h3` does the same with "week.". No `text-wrap` is set anywhere.
- `dl.case` (export, `page.tsx`): the Constraint row repeats the H3.
- Dead files in the deploy: `out/media/portrait.jpg` (113 KB, unreferenced) and the `out/*.txt` RSC payloads (111 KB each, unused with no runtime).

Blank product images in the 768px full-page capture are a lazy-load artefact, not a defect.

## Top 5 fixes

Fixes 1–3 were tested by injection at 1081, 1280, 1440, 768 and 390px; results in brackets.

### 1. One-line proof values on desktop [all 1 line, 25px; no overflow at 1081px]

```css
@media (min-width:1081px){
  .proofs strong { font-size: clamp(1.5rem, 1.75vw, 1.9rem); white-space: nowrap; }
}
```
`site.ts` `heroProofs[1]`: value `'0 rejections'`, label `'One Project Gold cycle: 14 tasks, 3 approved, 11 in human review'`. The scope stays on the label.

### 2. Keep the units with their numbers [768px: "13.7 s →" / "45.5 ms"]

`heroProofs[0].value: '13.7 s → 45.5 ms'`

### 3. Balance headings; put the toggle on its own line [scorecard 98px at 768px]

```css
h1, h2, h3, .eyebrow { text-wrap: balance; }
.scorecard summary strong::after { display: block; margin-top: 8px; content: 'Show scores +'; }
.scorecard[open] summary strong::after { content: 'Hide scores −'; }
```

### 4. Export case copy

Delete `<div><dt>Constraint</dt>…</div>`. Once the owner supplies a result, add a `Result` row (see owner input).

### 5. Ship only what is used

Delete `public/media/portrait.jpg`. In `strip-runtime.mjs`, add:

```js
import { rm, readdir } from 'node:fs/promises'
for (const f of await readdir('out')) if (f.endsWith('.txt') && f !== 'llms.txt') await rm(`out/${f}`)
```

## Measured

**Lighthouse 12, `:3010`** (sequential runs, none during screenshot capture):

| Run | Perf / a11y / BP / SEO | LCP | Other |
|---|---|---|---|
| Mobile, ×3 | **99 / 100 / 100 / 100** | 1.9 s every run | FCP 1.2 s, TBT 0–40 ms, CLS 0 |
| Desktop | **100 / 100 / 100 / 100** | 0.4 s | TBT 0 |

- **Mobile LCP:** the element is `p.hero__intro`, with 1.43 s render delay.
- **Transfer:** 177 KiB total. Document 73 KB, fonts 59 KB, CSS 22 KB, images 22 KB, JS 0.
- **Not the lead's 1.2 s:** `http.server` doesn't compress. Served gzipped (`npx serve`): **100**, LCP **1.4 s**, 99 KiB. Vercel compresses.
- **Ruled out:** inlining CSS or media-gating the portrait preload (1.9 / 2.0 s).

**Page heights:**
- Desktop 9,364px (−141)
- Tablet 10,796px (−341)
- Mobile **12,397px** (−258), even with the 4th fact added

## Needs owner input

Unchanged from R2:
- **Export result:** volume, duration, a recovery incident, users. Largest remaining gain (~+0.15).
- **Latency:** the tradeoffs rejected, and whether the gain held in production.
- **Availability / target-role line.**
- **Publishing raw scores.**
