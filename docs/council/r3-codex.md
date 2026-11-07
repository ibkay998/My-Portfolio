# R3 — Codex: 8.60/10

Reviewed 2026-11-07: `evidence-redesign` @ `751d3b4`, static export at localhost:3010. Read R2 first; retained the R0 rubric; inspected `3195f2c..751d3b4` and audited against `docs/evidence.md`.

Requested captures: `/tmp/r3-codex/s-*`. Desktop/mobile heights: 9,364/12,397 px; no horizontal document overflow at 1280/768/390 px. Tablet hero fits beside its portrait. Confirmed one JSON-LD script and no runtime scripts, working fragment targets, and HTTP 200 for llms.txt, OG and CV. First Tab reveals Skip to content; the native scorecard opens by click and closes with Enter. Lead-reported mobile Lighthouse **100/100/100/100, LCP 1.2 s, 176 KiB** accepted as supplied measurement, not independently rerun. Comprehensive screen-reader/contrast testing remains unperformed. Expected GitHub docs 404s receive **no penalty**.

## Rubric

| Criterion | Weight | Rating | Contribution | Reason |
|---|---:|---:|---:|---|
| First-five-second clarity | 1.5 | 9 | 1.350 | Identity, Lagos and scoped proof clear; mobile introduction remains long. |
| Verifiable evidence density | 2.0 | 9 | 1.800 | Scoped outcomes and linked receipts; one ownership extension remains. |
| Case-study depth | 1.5 | 7 | 1.050 | Latency explains diagnosis/fix/validation; export still lacks decisions and tradeoffs. |
| AI-skill proof | 1.5 | 8 | 1.200 | Honest outcome ledger, method, product and council record; public experiment still absent. |
| Visual craft and usability | 1.5 | 9 | 1.350 | Coherent responsive layout, stable chart lengths and collapsed scorecard; mobile remains roughly fifteen screens. |
| Performance, a11y and SEO | 1.0 | 9* | 0.900 | Strong supplied lab results, static content and metadata; limited manual accessibility coverage. |
| Hiring/contact conversion | 1.0 | 9.5 | 0.950 | Persistent email, CV/profiles and contextual employer-work contact. |
| **Total** | **10** | | **8.600 → 8.60** | **Σ(weight × rating / 10); R2 8.23.** |

*Foundations provisional. Owner-dependent case depth and public-demo gaps affect their respective criteria only; no additional evidence deduction.*

## Claim audit — remaining exceptions only

- **Page:** `src/data/site.ts:112`, “I built it end to end,” exceeds the dossier’s founder/product-engineer attribution (`docs/evidence.md:64–66`). Ownership of the product does not establish implementation responsibility across every layer.
- **Screenshot decision:** accepted. The dated public-site caption (`page.tsx:264`), product links and Wholeflo pre-launch label resolve my R2 objection to retaining these as visual artifacts of the engineer’s own products. Embedded pricing/privacy/prediction slogans remain marketing copy, not independent validation; no separate claim penalty or removal request.
- **llms.txt, og.png alt and JSON-LD:** no remaining factual exceptions found. OG alt now includes benchmark conditions and cycle scope.

## Top five fixes without new facts

1. `site.ts:112`: replace the final sentence with **“I’m its founder and product engineer.”**
2. `page.tsx:51–54`: shorten the introduction to **“I’m Ibukunoluwa Oyeniyi. I lead frontend at Babban Gona, build AI and mobile products, and design coding-agent evaluations.”** Keep the civil-engineering pivot in Career; this brings proof and CV higher on mobile.
3. In the phone media query, use `.nav__links { gap: 10px; }` and `.nav__links a { display: inline-flex; align-items: center; min-width: 44px; min-height: 44px; padding: 0; }`. The current AI target is only 13 × 34 px; retain horizontal scrolling for narrower widths.
4. After the employer section’s lede, add **“Stack: React, Next.js, TypeScript, React Query, Python, PostgreSQL and GCP.”** These are dossier-backed and currently missing from the employer narrative.
5. Remove the phone-only `.lc-topics { display: none !important; }`; put its existing list inside `<details><summary>Most practised topics</summary>…</details>` to preserve mobile access without expanding the initial page.

## Needs owner input

- Actual constraints, rejected alternatives, tradeoffs, benchmark procedure, and export recovery/authorization validation details.
- An original public synthetic evaluation artifact with specification, no-op/oracle outputs, commands, observed failures and limitations, separate from confidential AfterQuery work.
- Specific implementation responsibility if stronger Master Anything ownership wording is desired; availability/target-role wording for hiring.
