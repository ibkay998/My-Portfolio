# R4: Claude Opus review

Static export on :3010 (`evidence-redesign` @ `c14329e`). Tested at 390 @2x, 700, 768, 1081, 1280 and 1440.

## Scores: **8.90 / 10** (R3 8.75)

| Criterion | W | R3 | R4 | Why |
|---|---:|---:|---:|---|
| Clarity | 1.5 | 9 | 9.5 | The full role is named. The proof row is one line at every desktop width. |
| Evidence | 2.0 | 9 | 9 | Every new claim (role, stack, DevOps, cross-service) is in `evidence.md`. |
| Case depth | 1.5 | 7.5 | 7.5 | Constraint row is gone. Still no result, and Safety repeats diagram steps 2 and 6. |
| AI proof | 1.5 | 8.5 | 8.5 | Unchanged. No public demo. |
| Visual craft | 1.5 | 9 | 9.5 | All R3 wrap defects are fixed. Two small ones are new (fixes 1 and 2). |
| Perf/a11y/SEO | 1.0 | 9.5 | 9.5 | Gzipped mobile scores 100/100/100/100 on all 3 runs. Dead files still ship. |
| Conversion | 1.0 | 9 | 9 | No availability line. |

Weighted: 14.25 + 18 + 11.25 + 12.75 + 14.25 + 9.5 + 9 = **89.0 / 100**.

## R3 fixes: verification

| # | Fix | Status |
|---|---|---|
| 1 | One-line proof values | **Landed.** 1 line, 25–26px at 1081/1280/1440. Labels align. No overflow. |
| 2 | Units stay with numbers | **Landed.** 768px: "13.7 s →" / "45.5 ms". |
| 3 | Balanced headings and block toggle | **Landed.** No orphans. Summary is 106px at 390 and 77px at 768. |
| 4 | Remove Constraint row | Landed. |
| 5 | Ship only what's used | **Not done.** |

## Remaining defects

- **Mobile nav spacing (new in this commit).** `min-width:44px` centres "AI" in a 44px box. The gaps around it look about 3× wider than the others.
- **Tablet proof labels are staggered.** At 768 they start at 544/520/544px; at 700, "Developer of the Year" takes 3 lines.
- **Dead deploy weight.** `portrait.jpg` (113 KB) and four RSC `.txt` payloads (~343 KB) still ship. The `.eyebrow__long` rule no longer matches any markup.
- **Duplicate tab stops.** Each product image link and its "Visit" link go to the same URL.

## Fixes (tested by injection)

### 1. Even mobile nav [gaps 20/20/20/20 at 390; 12px at 360; height stays 44]
```css
@media (max-width:680px){
  .nav__links { justify-content: space-between; gap: 0; }
  .nav__links a { min-width: 0; }
}
```
"AI" (13×44) passes WCAG 2.5.8 under the spacing exception.

### 2. Align tablet proof labels [labels at the same height at 681/700/768/900/1080]
```css
@media (min-width:681px) and (max-width:1080px){
  .proofs { grid-template-rows: auto 1fr; }
  .proofs li, .proofs a { display: grid; grid-row: span 2; grid-template-rows: subgrid; }
  .proofs a { row-gap: 6px; align-content: start; }
}
```

### 3. Ship only what's used
Delete `public/media/portrait.jpg` and the `.eyebrow__long` rule. Then add the R3 `strip-runtime.mjs` loop that removes every `out/*.txt` except `llms.txt`.

### 4. One tab stop per product
`page.tsx`: `<a href={p.href} className="product__shot" tabIndex={-1}>`. Keep the new `alt`.

## Measured

Lighthouse 12, `out/` served gzipped with `npx serve`, run after all screenshots:

| Run | Perf / a11y / BP / SEO | LCP | FCP | TBT | CLS |
|---|---|---|---|---|---|
| Mobile ×3 | **100 / 100 / 100 / 100** | 1.4 s | 0.8 s | 0–50 ms | 0 |
| Desktop | **100 / 100 / 100 / 100** | 0.4 s | 0.3 s | 0 | 0 |

Transfer is 100 KiB. Page heights: 9,519px at 1280, 10,749px at 768, 12,618px at 390 (+221, from the 2-line eyebrow).

## Ship verdict: **YES, ready for production as-is**

There are no blockers. Fixes 1–4 are polish. The only deploy condition: the receipts link to `blob/main/docs/evidence.md`, so `evidence.md` must reach `main` in the same merge.

## Reachable score

- **Without owner input: ~9.0.** Fixes 1–4 take visual craft and perf to 10.
- **With owner input: ~9.5.** That needs four things from the owner:
  - an export result (volume, duration or a recovery incident), which takes case depth to 9;
  - the latency tradeoffs, and whether the gain held in production;
  - a public synthetic evaluation sample (AI proof 9.5);
  - an availability or target-role line (conversion 10).
