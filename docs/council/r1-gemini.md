# R1 Council Review — Gemini

**Site:** `http://localhost:3010` (`evidence-redesign`) · **Rubric:** `docs/council/r0-codex-exemplars.md` · **Source:** `docs/evidence.md`

## 1. Rubric Scorecard

| Criterion | Weight | Score | Weighted | Justification |
| :--- | :---: | :---: | :---: | :--- |
| **First-five-second clarity** | 1.5 | **8.5** | 1.275 | Desktop fold (`y=734px < 800px`) lands role, Lagos, and 3 proofs; H1 is abstract and mobile clips CV CTA (`y=864px > 844px`). |
| **Verifiable evidence density** | 2.0 | **8.0** | 1.600 | Key metrics (`13.7 s → 45.5 ms`, `14` Gold tasks, `905` submissions) present, but `links.evidence`/`links.council` 404 on `main` and Babban Gona backend scope/stack are missing. |
| **Case-study depth** | 1.5 | **6.5** | 0.975 | Latency (34 words) and Export (29 words) read as short captions rather than constraint/tradeoff/boundary/verification narratives. |
| **AI-skill proof** | 1.5 | **7.5** | 1.125 | Strong programs/product, but conflates Pluto's `Ready for Review` with `Approved`, leaves failure boundaries unexplained, and links the council claim to a 404 URL. |
| **Visual craft and usability** | 1.5 | **8.5** | 1.275 | Strong palette and zero overflow, held back by `12,890px` mobile height, hidden nav below `1080px`, and sub-44px touch targets. |
| **Performance, a11y and SEO** | 1.0 | **8.0** | 0.800 | Full SSR HTML and `/llms.txt`, but product images have `alt=""`, targets are `32–36px`, and JSON-LD omits AfterQuery, Master Anything, Rust, Java, and cloud stack. |
| **Hiring/contact conversion** | 1.0 | **8.5** | 0.850 | Working CV PDF, email CTA, and 3 live product links, but mobile nav drops section/CV links and GitHub proof links 404. |
| **Total** | **10.0** | | **7.90 / 10** | **Up from 6.30/10 on `main`; 2.10 pts from 10.** |

## 2. Persona Narrative Test (5s / 30s / 3min)

* **(a) AI Lab Hiring Manager:**
  * **5s:** Sees a Lagos frontend lead at Babban Gona and AfterQuery agent evaluator (`14 tasks · 0 rejections`).
  * **30s:** Likes latency chart (`13.7 s → 45.5 ms`) and ledger, but Pluto's 18 `Ready for Review` squares use Gold's `data-approved="true"` fill.
  * **3min:** `Read the council log ↗` and `public evidence file` both **404 on GitHub** (`main`). Wants failure-boundary mechanics (NOP/oracle separation, Rust archive cross-call UAF).
* **(b) Recruiter (30s):**
  * **5s:** Clear desktop hero, portrait, Developer of the Year, and email/CV CTAs; on mobile (`390×844`), `Download CV (PDF)` drops below fold (`y=864px`) with no nav menu.
  * **30s:** Scans career staircase (Civil Engineer → Developer II · Frontend lead), but misses **3 years of leadership responsibility** and Babban Gona stack (`Python, GCP, Docker, Playwright, SonarQube, React Query`).
* **(c) AI Screener (Mercor / non-JS parser):**
  * **5s / 30s / 3min:** `curl` gets full SSR HTML, `Person` JSON-LD, and `/llms.txt`, but HTML/JSON-LD omit `AgricOS 25` services (`Config, Entity, Workflow, Inventory, IAM`), mobile sync debugging, `Rust`, `Java`, `Python`, `GCP`, `Docker`, `Playwright`, and `SonarQube`.
* **Missing for an undeniable "dedicated, problem solver, exceptional with AI" verdict:**
  1. **Self-contained proof:** In-page council scorecard (no 404s) and distinct `Ready for Review` vs. `Approved` glyphs.
  2. **Decision-level case studies:** Problem/constraint/decision/validation breakdown for latency, export, and cross-service/UAF debugging.
  3. **Full-stack & leadership surface:** `AgricOS 25`, `Config/Entity/Workflow/Inventory/IAM`, `Python/GCP/Docker/Playwright/SonarQube`, and `3 years leadership` in HTML/JSON-LD.

## 3. Top 8 Concrete Fixes (Ranked by Score Impact)

1. **Expand `#latency`, `#export`, and cross-service work into Problem/Constraint/Decision/Validation case studies (`+0.40`)** — `src/app/page.tsx` (`#evidence`), `src/data/site.ts`. Add `<dl>` rows to `#latency` (`AgricOS 25`, `10,000+` users; aggregation/index bottleneck at `13.7 s` median; pagination + index fix with backend engineers; `45.5 ms` / `~300×` on `20,000-record` benchmark) and `#export` (`< 1 week` deadline; React UI, tenant permissions, PostgreSQL async jobs, recoverable workers, streamed CSV, private downloads). Add a 3rd card for **AgricOS 25 & Cross-Service Debugging**: multi-tenant admin (org/program, staff, roles, enrollment, input distribution, portfolio meetings, assignments, audits) and fixing identity/permission/assignment bugs across `Config, Entity, Workflow, Inventory, IAM`, API gateways, persistence, and mobile sync.
2. **Fix Project Pluto glyph conflation (`+0.35`)** — `src/data/site.ts` (`afterQuery[1]`), `src/components/Ledger.tsx`, `src/app/globals.css`. Remove `approved: 18` (`data-approved="true"`) on Pluto's `18 packages Ready for Review`; style `data-status="review"` with a coral-ink hatch or half-fill so review status is distinct from `Approved`.
3. **Replace 404 GitHub links with an in-page Council Scorecard (`+0.35`)** — `src/data/site.ts` (`links.council`, `links.evidence`), `src/app/page.tsx` (`#ai`). Replace `links.council` (404) with an in-page `#council` `<details>` table showing R0 (`6.3/10`) → R1 scores (Opus, Codex, Gemini); route `links.evidence` locally or to `/llms.txt`.
4. **Unpack AI evaluation mechanics (`+0.25`)** — `src/app/page.tsx` (`#afterquery`). Add below `.boundary`: *"Pluto: deterministic integration suites, NOP/oracle separation, and multi-model difficulty probes in Python, Rust, and Java. Fenrir: sanitizer-backed fuzzing isolating memory-safety bugs, including a cross-call heap-use-after-free in a Rust archive pipeline."*
5. **Surface Babban Gona stack & leadership tenure (`+0.25`)** — `src/app/page.tsx` (`#evidence`), `src/data/site.ts` (`careerSteps`), `src/app/layout.tsx`. Render stack tags (`React, Next.js, TypeScript, React Query, Python services, PostgreSQL, GCP, Docker, GitHub Actions, Playwright, SonarQube`). Update `Jul 2025` note to `"Lead ~5 frontend engineers (3 years leadership responsibility). Own AgricOS 25."` Add `Rust, Java, NestJS, GraphQL, MongoDB, Redis, SQLite, GCP, AWS, Docker, Playwright, SonarQube` to JSON-LD `knowsAbout`.
6. **Fix mobile fold clipping, hidden nav, and `12,890px` height (`+0.20`)** — `src/app/globals.css` (`<=1080px`, `<=680px`). Keep a scrollable section/CV strip on mobile, tighten `.hero` (`padding: 16px 0 32px`, `.proofs a { padding: 10px 0 }`) so `.hero__actions` sits `<800px`, and cut `.section` padding to `56px 0`.
7. **Restore product `alt` text and `>=44px` touch targets (`+0.15`)** — `src/app/page.tsx:183`, `src/app/globals.css`. Use `alt={p.image.alt}` (remove `aria-hidden` on `.product__shot`) and set `min-height: 44px` on `.text-link`, `.nav__links a`, `.button--small`, `.contact__links a`.
8. **Add Python count and badge dates (`+0.15`)** — `src/app/page.tsx` (`#discipline`), `src/data/site.ts`. Note `~556 in Python` under `573` solved, `17 badges · 365-day (Feb 2025) & 500-day (Apr 2025)`, and `Union-Find (16)` / `Trie (14)` topics.

## 4. Risk & Confidentiality Audit

* **Unverified claim (`"cycle tracking"`):** `src/data/site.ts:153` (`"Privacy-first cycle tracking."`) and `public/llms.txt:25` (`"offline-first cycle-tracking app"`) use a claim absent from `docs/evidence.md` (**"Offline-first wellbeing app"**). Replace `"cycle tracking"` with `"wellbeing"`.
* **Confidentiality & LeetCode hygiene:** Clean: no employer screenshots/code, AfterQuery tasks, `Harbor`, `1,391` rating, or post-2022 drop.
