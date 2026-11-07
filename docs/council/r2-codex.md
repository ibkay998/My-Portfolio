# R2 — Codex: 8.23/10

Reviewed 2026-11-07: production build at localhost:3010; checkout `evidence-redesign`, HEAD `3195f2c`. Read R1 first, retained the R0 rubric, inspected `6ce441f..3195f2c`, and audited rendered copy, metadata, llms.txt and product imagery against updated `docs/evidence.md`.

Requested captures: `/tmp/r2-codex/s-*`; additional OG/tablet/tail captures in that directory. Desktop/mobile heights: 9,505/12,655 px; no horizontal document overflow at 1280/768/390 px. Mobile navigation returns, charts are readable, tablet career becomes a coherent timeline. HTML is server-rendered; llms.txt, CV and OG return 200. First Tab reaches Skip to content; reduced motion disables chart animation. Preview screenshot timeouts required Chrome fallback. No fresh Lighthouse, comprehensive keyboard, screen-reader or contrast audit; foundations provisional. Expected GitHub docs-on-main 404s receive **no penalty**.

## Rubric

| Criterion | Weight | Rating | Contribution | Reason |
|---|---:|---:|---:|---|
| First-five-second clarity | 1.5 | 9 | 1.350 | Identity, Lagos and scoped latency proof clear; mobile introduction still long. |
| Verifiable evidence density | 2.0 | 8.5 | 1.700 | Many R1 extensions now sourced or removed; exceptions below remain. |
| Case-study depth | 1.5 | 7 | 1.050 | Diagnosis, collaborative fix and benchmark validation explicit; export remains a summary. |
| AI-skill proof | 1.5 | 8 | 1.200 | Correct review/approval glyphs, method, live product and accurate R1 scorecard. |
| Visual craft and usability | 1.5 | 8.5 | 1.275 | Navigation/layout improved; mobile still roughly fifteen screens. |
| Performance, a11y and SEO | 1.0 | 7.5* | 0.750 | Rendering/metadata and basic checks pass; accessibility gaps and measurement limits remain. |
| Hiring/contact conversion | 1.0 | 9 | 0.900 | Persistent email, CV and profiles; contextual case-study contact absent. |
| **Total** | **10** | | **8.225 → 8.23** | **Σ(weight × rating / 10); R1 7.40.** |

Owner-dependent depth/demo gaps affect their respective criteria only, not additional evidence penalties.

## Claim audit — remaining exceptions only

Paths below are repository-relative.

- `src/data/site.ts:23–24`: hero “0 rejections” still omits **one delivery cycle**. Ledger and OG visible caption correctly scope it.
- `src/app/page.tsx:53`: “my own … mobile products” implies ownership/release beyond the documented mobile contributions and Wholeflo pre-launch status. `site.ts:109–110` adds running Master Anything and ownership of architecture/auth/data flows beyond founder/product-engineer evidence.
- `page.tsx:116,153,165`: “every export and every download,” “every day,” and mandatory failure-check order exceed documented permissions, adoption and diagnostic method.
- `page.tsx:88`; `src/app/layout.tsx:10`: universal receipt promise still overstates the remaining evidence coverage.
- Images referenced at `site.ts:164,175`: Master Anything free/premium offerings; Wholeflo “100% Private,” “Smart Predictions,” and faith-based promises remain outside the dossier. Screenshot text counts as claims.
- `src/app/opengraph-image.tsx:5`: OG alt omits the latency benchmark condition retained in the visible image. No remaining llms.txt factual exceptions found.

## Top six fixes without new facts

1. **Scope copy:** `site.ts:23` → `value: '0 rejections in one cycle'`; `109` → `title: 'I build an AI product'`; delete the ownership sentence at `110`. `page.tsx:53` replace “ship my own AI and mobile products” with “build AI and mobile products”; `116` → “Tenant-scoped permissions and private downloads.”; delete “every day” at `153` and “, in order” at `165`. OG alt `:5`: insert “on a controlled 20,000-record benchmark” after “median latency”.
2. **Remove unsupported screenshot promises:** delete the two `image:` properties at `site.ts:164,175`; existing text cards preserve supported features/status without introducing facts.
3. **Make receipts inspectable:** `page.tsx:88` → “Selected work, with evidence and context.” Delete “Every claim comes with a receipt.” from `layout.tsx:10`. Append `<a href={links.evidence}>Evidence dossier</a>` to employer/AfterQuery receipts (`LatencyChart.tsx:60`, `page.tsx:130,172`); import `links` in the chart. After both employer articles add `<a href="mailto:ibukun46@gmail.com?subject=Discuss%20AgricOS">Discuss this project</a>`.
4. **Preserve chart measurements:** delete the scroll-animation `@supports` block at `globals.css:316–322`; bars must retain their encoded lengths while scrolling.
5. **Accessible calendar:** `src/components/Heatmap.tsx:61` replace the string with `` `${MONTHS[index]}: ${monthTotal} submissions; monthly challenge badge ${leetcode.monthlyBadges[index] ? 'earned' : 'missed'}` ``; `globals.css:283` change `.swatch.heat` to `.swatch.heat--0` so zero activity has a visible legend swatch.
6. **Reduce mobile repetition:** remove `open` from `page.tsx:190`; within the phone media query set `.section { padding: 48px 0; }`. Keep the scorecard expandable and section navigation available.

## Needs owner input

- Actual engineering decisions, rejected alternatives, constraints and tradeoffs for latency/export; benchmark procedure and export recovery/authorization validation details.
- Public synthetic evaluation artifact: specification, no-op/oracle outputs, failure diagnosis, reproducible commands and limitations; clearly separate it from confidential AfterQuery work.
- Confirm specific Master Anything ownership/operating responsibilities and screenshot feature/pricing/privacy promises before restoring stronger wording or imagery.
