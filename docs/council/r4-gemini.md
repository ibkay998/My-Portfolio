# R4 Council Review — Gemini: 9.29 / 10

**Site:** `http://localhost:3010` (`c14329e`, `751d3b4..c14329e`) · **Rubric:** `docs/council/r0-codex-exemplars.md` · **Source:** `docs/evidence.md`

**Scorecard decision:** **Accepted.** Keeping `<details className="scorecard">` collapsed saves scroll height with a visible `<summary>` (`Show scores +`) and static `R0`–`R3` `<table>` in the DOM.

## 1. Rubric Scorecard

|Criterion|W|R3|R4|Weighted|Justification|
|---|---:|---:|---:|---:|---|
|Clarity|1.5|9.4|**9.7**|1.455|Eyebrow names `backend, frontend, mobile, DevOps & AI evaluation · Lagos`; mobile fold (`390×844`) fits all 3 proofs + 3 CTAs (`bottom=844px`); desktop `.proofs strong` align on one `25px` line.|
|Evidence density|2.0|9.3|**9.6**|1.920|`site.ts:112` fixes attribution (`founder and product engineer`), `#evidence` names Babban Gona's stack, and `llms.txt` adds the 5-service bullet. In-page copy omits `Docker, GitHub Actions, Playwright, SonarQube` and `~556` Python LeetCode solutions.|
|Case-study depth|1.5|7.8|**7.9**|1.185|`#export` drops the duplicate `Constraint` row (`2` rows, 17 words); tradeoffs and export metrics require owner input.|
|AI-skill proof|1.5|9.1|**9.2**|1.380|Scorecard adds `R3` (`8.60 / 9.05 / 8.75`); collapsed `<details>` accepted. Only a synthetic evaluation demo remains.|
|Craft & usability|1.5|9.0|**9.4**|1.410|`text-wrap: balance`, block `Show scores +`, non-breaking units at `768px`, and `44×44px` mobile `.nav__links a` landed. Mobile hides `.lc-topics` and `a[href="#contact"]`; `.text-link` (`32px`) / `.button--small` (`40px`) are `<44px`.|
|Perf, a11y & SEO|1.0|9.5|**9.8**|0.980|Restored `<Image alt={p.image.alt}>` (`page.tsx:261`), expanded JSON-LD `knowsAbout` (26 skills) and `jobTitle`, and kept zero-JS `74.7 KB` HTML. Unused `out/media/portrait.jpg` and RSC `.txt` files remain.|
|Conversion|1.0|9.4|**9.6**|0.960|Above-fold mobile CTAs, Babban Gona stack, and `#evidence` contact CTA are live; only mobile `#contact` hiding and availability copy remain.|
|**Total**|**10.0**|**9.05**||**9.29 / 10**|**9.290 weighted (+0.24 vs R3 `9.05`; +2.99 vs R0 `6.30`).**|

## 2. Persona Check

* **AI-Lab Hiring Manager:** Sees scoped AfterQuery outcomes (`3` approved / `11` review; `18` Pluto packages; `3` Fenrir findings), Babban Gona stack, and `R0`–`R3` scores; misses only a synthetic task demo and tradeoffs.
* **Recruiter:** Gets role breadth, Lagos, top proofs, and CV/email CTAs inside the `844px` mobile fold; `#evidence` omits `Docker, GitHub Actions, Playwright, SonarQube`.
* **HTML-Reading Screener:** `curl`, JSON-LD, `llms.txt`, and image `alt` text align with zero JS; only `~556` Python LeetCode solutions and `AgricOS 25` workflows are absent from HTML.

## 3. Top 4 Fixes Achievable Without New Facts

1. **Complete Babban Gona stack & `#export` `<dl>`** (`src/app/page.tsx:91-92,114-117`, `src/data/site.ts:38`): append `Docker, GitHub Actions, Playwright and SonarQube` (`L92`); add `<dt>Architecture</dt><dd>React UI, PostgreSQL async jobs, recoverable workers, streamed CSVs.</dd>` (`#export`); add `API gateways, persistence` (`site.ts:38`).
2. **Expose mobile LeetCode topics + `~556 in Python`** (`src/app/globals.css:372`, `src/app/page.tsx:304,316`): replace mobile `.lc-topics { display: none; }` with `<details>` and add `(~556 in Python)` (`L304`) and `17 badges · ` (`L316`).
3. **Finish `44px` tap targets & mobile `#contact` link** (`src/app/globals.css:79,88,113,316,393`): set `min-height: 44px` on `.button--small`, `.text-link`, `.contact__links a`, and desktop `.nav__links a` (`min-width: 44px`); remove `.nav__links a[href="#contact"] { display: none; }`.
4. **Prune unused `out/` files** (`public/media/portrait.jpg`, `scripts/strip-runtime.mjs`): delete `public/media/portrait.jpg` (`113 KB`) and strip non-`llms.txt` RSC `out/*.txt` (`~343 KB`).

## 4. Ship Verdict & Reachable Score

* **SHIP VERDICT:** **YES — ready for production as-is (0 blockers).** All claims match `docs/evidence.md`, zero JS ships, and all viewports fit cleanly.
* **Reachable score:** **9.50 / 10** without owner input (fixes 1–4); **9.85–10.0 / 10** with owner input (tradeoffs, metrics, synthetic eval demo, availability).
