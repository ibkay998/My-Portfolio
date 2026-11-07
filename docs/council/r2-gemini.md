# R2 Council Review — Gemini

**Site:** `http://localhost:3010` (`3195f2c`) · **Rubric:** `docs/council/r0-codex-exemplars.md` · **Source:** `docs/evidence.md`

## 1. Rubric Scorecard

| Criterion | Weight | R1 | R2 | Weighted | Justification |
|---|---:|---:|---:|---:|---|
| Clarity | 1.5 | 8.5 | **9.0** | 1.350 | Desktop fold (`y=734px`) is clear; mobile restores nav (`93px`) and fits `Download CV` (`y=843px`), though `.button` (`y=851px`) and `See the evidence ↓` (`y=897px`) clip. |
| Evidence density | 2.0 | 8.0 | **8.8** | 1.760 | Pluto's `18 Ready for Review` is separated from `Approved`; scorecard proves the council loop (`docs/` 404s unpenalized). Omits Babban Gona services, stack, and `3 years` leadership. |
| Case-study depth | 1.5 | 6.5 | **7.5** | 1.125 | `#latency` and `#export` use `<dl>` blocks, but `#export` is 26 words (`Scope` defers to `(diagram)`) and cross-service debugging is absent. |
| AI-skill proof | 1.5 | 7.5 | **9.0** | 1.350 | Hatched `review` glyphs fix Pluto's conflation; `<details className="scorecard" open>` proves the council loop in-page. |
| Craft & usability | 1.5 | 8.5 | **8.8** | 1.320 | Restored mobile nav, clear latency labels, zero overflow. Held back by `<44px` targets (`13×36px` `"AI"` link, `32px` `.text-link`), `.swatch.heat--0` mismatch, and hidden mobile `.lc-topics`. |
| Perf, a11y & SEO | 1.0 | 8.0 | **8.2** | 0.820 | Full SSR HTML and `/llms.txt`, but product images have `alt=""` (`aria-hidden="true"`), and JSON-LD/`llms.txt` omit key employers and `Rust`/`Java` skills. |
| Conversion | 1.0 | 8.5 | **9.0** | 0.900 | `#contact` added to `nav` and mobile nav is persistent; still omits 3-year leadership tenure and Babban Gona stack. |
| **Total** | **10.0** | **7.90** | | **8.63 / 10** | **+0.73 vs R1 (`7.90`); +2.33 vs R0 (`6.30`).** |

## 2. Persona Test

* **AI-Lab Hiring Manager:** Hatched `Ready for Review` glyphs and the in-page Scorecard resolve R1's trust gaps (`docs/` 404s unpenalized). Missing: cross-service debugging across `Config, Entity, Workflow, Inventory, and IAM`, API gateways, persistence, and mobile sync.
* **30-Second Recruiter:** Mobile nav returns and `Download CV` (`y=811–843px`) fits the fold, though `.button` (`y=851px`) and `See the evidence ↓` (`y=897px`) clip. `#evidence` and `#career` omit **3 years of leadership responsibility** and Babban Gona's stack (`Python, GCP, Docker, GitHub Actions, Playwright, SonarQube, React Query`).
* **HTML-Reading AI Screener (`curl` / JSON-LD / `llms.txt`):** HTML omits `AgricOS 25`, `Config/Entity/Workflow/Inventory/IAM`, `GCP`, `Docker`, `Playwright`, `SonarQube`, and `~556` Python LeetCode solutions; `layout.tsx` JSON-LD omits `AfterQuery`, `Master Anything`, `Rust`, `Java`, and cloud/test tooling; `public/llms.txt` omits `Rust, Java` under `## Skills`.

## 3. Top 6 Fixes (No New Facts)

1. **Surface AgricOS 25 workflows, cross-service scope, and stack** (`src/app/page.tsx:100,115,143`): set `L100` to `<dd>Program Config Service in AgricOS 25 (10,000+ users; enrollment, input distribution, portfolio meetings, staff assignments, operational audits).</dd>`, `L115` to `<dd>React integration, PostgreSQL-backed async jobs, recoverable workers, and streamed CSV generation.</dd>`, and add after `L143`: `<p className="receipt">Cross-service: Config, Entity, Workflow, Inventory &amp; IAM (identity, permission and assignment fixes across API gateways, persistence and mobile sync) · Stack: React, Next.js, TypeScript, React Query, Python services, PostgreSQL, GCP, Docker, GitHub Actions, Playwright, SonarQube, canonical architecture docs.</p>`.
2. **Add 3-year leadership tenure and dossier scoping** (`src/data/site.ts:24,110,131`, `public/llms.txt:9`): append `' in one delivery cycle'` (`site.ts:24`), replace `site.ts:110` second sentence with `'Built as founder and product engineer on Next.js 16, TypeScript, Convex, Clerk and AI model integrations.'`, set `site.ts:131` `note` to `'Today: lead ~5 frontend engineers (3 years leadership responsibility) and own the AgricOS 25 configuration platform.'`, and insert `'(3 years of leadership responsibility)'` in `llms.txt:9`.
3. **Complete JSON-LD and `llms.txt` skills** (`src/app/layout.tsx:33,40`, `public/llms.txt:31`): add `AfterQuery Experts` and `Master Anything` to `worksFor` (`L33`), append `'Rust', 'Java', 'Expo', 'Node.js', 'NestJS', 'GraphQL', 'MongoDB', 'Redis', 'SQLite', 'Convex', 'GCP', 'AWS', 'Docker', 'GitHub Actions', 'Playwright', 'SonarQube', 'Sanitizer-backed fuzzing'` to `knowsAbout` (`L40`), and insert `Rust, Java, ` after `Python, ` in `llms.txt:31`.
4. **Restore product screenshot `alt` attributes** (`src/app/page.tsx:254-256`): remove `aria-hidden="true"` on `.product__shot` and replace `alt=""` with `alt={p.image.alt}`.
5. **Fix `<44px` targets, mobile fold, and legend swatch** (`src/app/globals.css:75,84,109,283,310,363-367`): set `min-height: 44px` on `.button--small`, `.text-link`, `.nav__links a` (`min-width: 44px`), and `.contact__links a`; change `.swatch.heat` (`L283`) to `.swatch.heat--0`; at `<=680px` set `.hero { padding: 16px 0 32px } .proofs { margin: 16px 0 } .proofs a, .proofs li + li a { padding: 10px 0 }`.
6. **Unhide mobile LeetCode topics and add Python/badges** (`src/app/globals.css:361`, `src/app/page.tsx:296,307`, `src/data/site.ts:212`): delete `.lc-topics { display: none !important; }`, set `page.tsx:296` to `<dd>{leetcode.solved} <span className="lc-small">(~556 in Python)</span></dd>` and `L307` to `<dd className="lc-small">17 badges · 365-day (Feb 2025) &amp; 500-day (Apr 2025)</dd>`, and append `['Backtracking', 26], ['Union-Find', 16], ['Trie', 14]` to `leetcode.topics`.

## 4. Needs Owner Input

* **Case-study tradeoffs:** Query/index changes in Program Config Service, why pagination + index optimization beat caching/read-replicas, and worker retry/backpressure design in the export pipeline.
* **Public synthetic AI-evaluation demo:** Non-confidential task package (prompt, buggy diff, oracle/NOP tests, failure-boundary trace) illustrating the AfterQuery method.
