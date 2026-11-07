# R5: Claude Opus confirmation

Static export on :3010 (`8d30a49`). Tested at 360, 390 @2x, 700, 768 and 1280. No horizontal overflow at any width.

## Score: **8.95 / 10** (R4 8.90)

| Criterion | W | R4 | R5 | Why |
|---|---:|---:|---:|---|
| Clarity | 1.5 | 9.5 | 9.5 | The shorter intro reads faster. "AfterQuery" still appears in the proof row. |
| Evidence | 2.0 | 9 | 9 | All the new stack and gateway claims are backed in `evidence.md`. |
| Case depth | 1.5 | 7.5 | 7.5 | Unchanged. There is still no export result. |
| AI proof | 1.5 | 8.5 | 8.5 | Unchanged. There is still no public demo. |
| Visual craft | 1.5 | 9.5 | 9.5 | The nav is now even, but tablet labels are still staggered. One small new defect. |
| Perf/a11y/SEO | 1.0 | 9.5 | 10 | Dead files are gone and the duplicate tab stop is fixed. *Lighthouse was not re-run; this change only removes bytes.* |
| Conversion | 1.0 | 9 | 9 | There is still no availability line. |

Weighted: 14.25 + 18 + 11.25 + 12.75 + 14.25 + 10 + 9 = **89.5 / 100**.

## R4 fixes: verification

| # | Fix | Status |
|---|---|---|
| 1 | Even mobile nav | **Landed.** Gaps are 20/20/20/20 at 390 and 12px at 360. Every link is 44px tall. |
| 2 | Tablet subgrid | **Not done.** At 768, label tops sit at 515/491/515. |
| 3 | Ship only what's used | **Mostly landed.** `portrait.jpg` and the RSC `.txt` files are gone, and `llms.txt` is kept. The unused `.eyebrow__long` rule is still at `globals.css:363`. |
| 4 | One tab stop per product | **Landed.** `product__shot` now has `tabindex="-1"`. |

## Regressions

- **Minor:** at 1280, the longer "5 services" fact label runs to 5 lines while its neighbours take 2, so that row's bottom edge is uneven.
- There are no functional or content regressions.

## Ship verdict: **YES, ship.**

There are no blockers. Before deploy, `evidence.md` must reach `main` in the same merge.
