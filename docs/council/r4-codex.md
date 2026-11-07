# R4 — Codex: 8.78/10

Reviewed 2026-11-07: `evidence-redesign` @ `c14329e`. Read R3, retained the R0 rubric, inspected `751d3b4..c14329e`, and audited against the updated `docs/evidence.md`.

Rendered localhost:3010 at 1280/768/390px; no horizontal document overflow. Requested screenshots: `/tmp/r4-codex/s-*`; desktop/mobile heights 9,419/12,618px. Product images load on approach. Confirmed valid fragment targets, JSON-LD without runtime scripts, HTTP 200 for CV/OG/llms.txt, and Enter opening/closing the scorecard. Mobile nav targets are at least 44×44px. Lighthouse was not rerun: R3 lab results remain prior evidence, not fresh measurements. The uncompressed Python server is not representative of Vercel transfer size. Comprehensive accessibility and production runtime remain unverified.

## Unchanged rubric

| Criterion | Weight | Rating | Contribution | Reason |
|---|---:|---:|---:|---|
| First-five-second clarity | 1.5 | 9.25 | 1.3875 | Explicit role breadth; concise identity, employer and proof. Mobile introduction still substantial. |
| Verifiable evidence density | 2.0 | 9.5 | 1.9000 | Dossier-backed attribution and scoped outcomes; confidential evidence boundaries explicit. |
| Case-study depth | 1.5 | 7 | 1.0500 | Latency diagnosis/fix/benchmark; export remains architecture and delivery scope without decisions/tradeoffs. |
| AI-skill proof | 1.5 | 8 | 1.2000 | Honest outcome ledger, method and product; no public reproducible evaluation example. |
| Visual craft and usability | 1.5 | 9.25 | 1.3875 | Aligned desktop proofs, balanced headings and clearer disclosure; phone page remains fifteen screens. |
| Performance, a11y and SEO | 1.0 | 9* | 0.9000 | Static crawlable content, metadata and keyboard disclosure; broader accessibility checks incomplete. |
| Hiring/contact conversion | 1.0 | 9.5 | 0.9500 | Persistent email, CV/profiles and contextual work CTA. |
| **Total** | **10** | | **8.7750 → 8.78** | **Σ(weight × rating / 10).** |

*Provisional foundations score. Expected pre-merge GitHub documentation 404s receive no penalty.*

## Remaining claim exceptions

None found in rendered copy, metadata/JSON-LD or llms.txt against the updated dossier.

## Fixes without new facts

1. `page.tsx:51–54`: shorten the mobile introduction; retain name, Babban Gona leadership and AfterQuery, and let the existing work sections carry product breadth. This raises proof and CV sooner.
2. `page.tsx:317–325`: put the existing topic list inside native `<details>`. It currently remains visible on phones because `.lc-stats > div` overrides `.lc-topics`; removing `!important` restored access but added length.
3. Remove unused `public/media/portrait.jpg` and generated RSC text payloads from the static deployment, preserving `llms.txt`. This reduces deployment clutter, not measured initial transfer.

## SHIP VERDICT: YES

Ready to publish as-is. **Blockers: none found.** Remaining depth/demo gaps limit the score; they do not require delaying publication. This verdict covers the inspected export, not an already verified production deployment.

## Reachable score

Existing facts plus layout/editorial fixes: **~9.0–9.1**. Without owner input, a genuinely executed public synthetic evaluation could raise that to **~9.3**. With owner-supplied constraints, rejected alternatives, benchmark procedure, export validation/outcomes and hiring intent, plus that artifact: **~9.5–9.7**. These are conditional estimates, not advance credit.
