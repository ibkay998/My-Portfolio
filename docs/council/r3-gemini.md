# R3 Council Review — Gemini

**Site:** `http://localhost:3010` (`751d3b4`, static export) · **Rubric:** `docs/council/r0-codex-exemplars.md` · **Source:** `docs/evidence.md`

## 1. Rubric Scorecard

|Criterion|Weight|R1|R2|R3|Weighted|Justification|
|---|---:|---:|---:|---:|---:|---|
|Clarity|1.5|8.5|9.0|**9.4**|1.410|Hero scopes `0 rejections in one cycle`; mobile (`390×844`) fits `Email me` (`y=780–828px`) and `Download CV` (`y=788–820px`), though `.eyebrow__long` hides and `See the evidence ↓` (`y=842–874px`) clips by `30px`.|
|Evidence density|2.0|8.0|8.8|**9.3**|1.860|Adds `5 services`, `3 years` leadership, `HNG`, screenshot dates, and receipt `Evidence file` links (`docs/` 404s unpenalized). Omits Babban Gona stack, `AgricOS 25` workflows, and `~556` Python LeetCode count.|
|Case-study depth|1.5|6.5|7.5|**7.8**|1.170|`#export` replaces `(diagram)` with `as shown` and `.facts` adds `5 services`, but `#export` `<dl>` is 26 words (`Constraint` repeats `<h3>`) and cross-service debugging lacks a case block.|
|AI-skill proof|1.5|7.5|9.0|**9.1**|1.365|Three-round council table (`R0`–`R2`) and `Evidence file` link in `#afterquery`, but `<details className="scorecard">` is collapsed by default and lacks a synthetic task demo.|
|Craft & usability|1.5|8.5|8.8|**9.0**|1.350|`.swatch.heat--0` fixed, 4-column `.facts` balanced, zero overflow. Held back by `<44px` targets (`13×36px` `"AI"` link, `32px` `.text-link`, `40px` `.button--small`) and mobile `display: none` on `.lc-topics` and `a[href="#contact"]`.|
|Perf, a11y & SEO|1.0|8.0|8.2|**9.5**|0.950|Stripped Next runtime (`1` JSON-LD script in `74.4 KB` HTML), WebP images, Lighthouse mobile `100/100/100/100` (`LCP 1.2 s`), expanded JSON-LD/`llms.txt`, and badge `.sr-only`. Product images still use `alt=""` (`aria-hidden="true"`).|
|Conversion|1.0|8.5|9.0|**9.4**|0.940|Adds `Ask me about this work →` after `#evidence`, `3 years` leadership in `#career`, and above-fold mobile CTAs. Mobile nav still hides `#contact`, and Babban Gona's stack is absent in-page.|
|**Total**|**10.0**|**7.90**|**8.63**||**9.05 / 10**|**9.045 weighted (+0.42 vs R2 `8.63`; +1.15 vs R1 `7.90`; +2.75 vs R0 `6.30`).**|

## 2. Persona Test — What Still Stops a 10

* **AI-Lab Hiring Manager:** `<details className="scorecard">` (`src/app/page.tsx:194`) is collapsed by default; `.facts` mentions `5 services` (`site.ts:38`) but omits `API gateways, persistence` and Babban Gona's stack (`Python, PostgreSQL, GCP, Docker, GitHub Actions, Playwright, SonarQube`); and `#afterquery` lacks a synthetic task demo.
* **30-Second Recruiter:** Mobile fold (`390×844`) fits `Email me` and `Download CV`, but hides `.eyebrow__long` (`globals.css:358`) and clips `See the evidence ↓` (`y=842–874px`). In-page Babban Gona copy omits `AgricOS 25` workflows (`enrollment, input distribution, portfolio meetings, staff assignments, operational audits`) and stack keywords.
* **HTML-Reading AI Screener (`curl` / JSON-LD / `llms.txt`):** Zero-JS HTML (`74,378 B`) is clean, but `<Image alt="">` (`aria-hidden="true"`, `page.tsx:260-261`) hides product screenshot descriptions (`site.ts:166,177`); HTML omits `AgricOS 25`, `Python`, `React Query`, `GCP`, `Docker`, `GitHub Actions`, `Playwright`, `SonarQube`, and `~556` Python LeetCode solutions; `layout.tsx` `knowsAbout` omits `SQLite, Convex, GitHub Actions, SonarQube`; and `public/llms.txt` omits the `5 services` bullet from `site.ts:38`.

## 3. Top 5 Fixes Achievable Without New Facts

1. **Surface Babban Gona stack, `AgricOS 25` workflows, and export/cross-service scope** (`src/app/page.tsx:100,114-115`, `src/data/site.ts:38`): set `page.tsx:100` to `<dd>Program Config Service in AgricOS 25 (10,000+ users; enrollment, input distribution, portfolio meetings, staff assignments, operational audits).</dd>`, `L114-115` to `<dd>Under one week; multi-tenant isolation across 10,000+ users.</dd>` and `<dd>React integration, PostgreSQL-backed async jobs, recoverable workers, streamed CSV generation, and private downloads.</dd>`, and `site.ts:38` `label` to `'Config, Entity, Workflow, Inventory & IAM: identity, permission and assignment fixes across API gateways, persistence and mobile sync (React, Next.js, TypeScript, React Query, Python, PostgreSQL, GCP, Docker, GitHub Actions, Playwright, SonarQube)'`.
2. **Re-open `.scorecard` and restore product image `alt` text** (`src/app/page.tsx:194,260-261`): set `<details className="scorecard" open>` (`L194`), remove `tabIndex={-1} aria-hidden="true"` on `.product__shot` (`L260`), and set `alt={p.image.alt}` on `<Image>` (`L261`).
3. **Sync `llms.txt` and JSON-LD with `site.ts` and `evidence.md`** (`public/llms.txt:17`, `src/app/layout.tsx:51`): insert `- Systems: cross-service work across Config, Entity, Workflow, Inventory and IAM (identity, permission and assignment fixes across API gateways, persistence and mobile sync).` after `llms.txt:17`; append `'SQLite', 'Convex', 'GitHub Actions', 'SonarQube'` to `knowsAbout` (`layout.tsx:51`).
4. **Fix `<44px` tap targets and mobile fold clipping** (`src/app/globals.css:78,87,112,315,369-373,388`): set `min-height:44px` on `.button--small`, `.text-link`, `.nav__links a` (`min-width:44px`), and `.contact__links a`; at `<=680px` delete `.nav__links a[href="#contact"]{display:none}` (`L388`) and set `.hero{padding:18px 0 36px}.proofs{margin:16px 0}.proofs a,.proofs li+li a{padding:10px 0}`.
5. **Unhide mobile LeetCode topics and add `~556` Python + `17 badges`** (`src/app/globals.css:367`, `src/app/page.tsx:304,316`): delete `.lc-topics{display:none!important}` (`L367`); set `page.tsx:304` to `<dd>{leetcode.solved} <span className="lc-small">(~556 in Python)</span></dd>` and `L316` to `<dd className="lc-small">17 badges · 365-day (Feb 2025) &amp; 500-day (Apr 2025)</dd>`.

## 4. Needs Owner Input

* **Case-study tradeoffs:** Query/index changes in Program Config Service, why pagination + indexing beat caching/read-replicas, and worker retry/backpressure design in the export pipeline.
* **Public synthetic AI-evaluation demo:** Non-confidential task package (prompt, buggy diff, oracle/NOP tests, failure-boundary trace) illustrating the AfterQuery method.
