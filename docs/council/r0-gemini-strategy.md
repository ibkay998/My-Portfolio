# R0 Council Strategy & Information Architecture (Gemini)

## 1. Critique of the Current Live Site (`7.5/10` → Why It Plateaus)

The current site (`src/data/portfolio.js`, `src/components/*`) is visually polished but **narratively generic**. It reads like a styled agency brochure rather than the dossier of a high-velocity systems and AI engineer, hiding every hard metric in `docs/evidence.md` behind vague summaries.

* **At 5 Seconds (`Header.jsx` + `About.jsx`):**
  * *Seen:* *"I build systems that move people forward"* + vanity counters (`04 featured products`, `03 AfterQuery programs`).
  * *Conclusion:* "Competent mid-level React/mobile generalist." The `04` and `03` stat blocks waste prime above-the-fold real estate on section counts instead of engineering outcomes (`13.7s → 45.5ms`, `14/14 zero rejections`, `573+ LeetCode`).
* **At 30 Seconds (`Experience.jsx`):**
  * *Seen:* Nearly 4 years at Babban Gona compressed into a 29-word sentence, overshadowed by three AfterQuery rows (`Pluto`, `Gold`, `Fenrir`) with unclickable arrows and zero quantitative results.
  * *Conclusion:* "Four years of production leadership and 'Developer of the Year' is one sentence, and the AI benchmark rows state activities rather than outcomes."
* **At 3 Minutes (`Portfolio.jsx` + `Services.jsx`) & AI Screener Parse:**
  * *Seen:* Four CSS-mocked phone frames, only **one** live link (`masteranything.app`) despite `pennytots.com` and `wholeflo.com` being live, generic skill tags, and an unwired `CTA.jsx` resume component.
  * *Conclusion:* Humans miss architectural depth (latency curves, trade-offs, postmortems). AI screeners (Mercor, LLM parsers) scraping the DOM miss the career arc (Intern → Developer II in 2.5 years), team leadership (~5 engineers), and systems feats (`tens of millions of Odoo records`, `<1 week async export`, `Rust heap-UAF`).

---

## 2. Proposed Information Architecture: Evidence-First Narrative

**Positioning Thesis:**
> *A relentless problem solver who pivoted from Civil Engineering into software through daily algorithmic discipline, rose from Intern to Developer II & Frontend Team Lead in 2.5 years, and operates at the AI frontier—shipping AI products, leading multi-team AI adoption, and stress-testing frontier coding agents.*

| Order | Section & Purpose | Headline Copy Draft | Dossier Evidence Mapped (`docs/evidence.md`) |
| :--- | :--- | :--- | :--- |
| **01** | **`#top` — Hero & Proof Bar**<br>Differentiates in 5s for humans & AI scrapers. | **Eyebrow:** `Full-Stack & AI Systems Engineer · Frontend Lead · AfterQuery Expert`<br>**H1:** `I engineer high-throughput systems—and break frontier AI agents to make them better.`<br>**Subhead:** `From multi-tenant platforms serving 10,000+ users and syncing tens of millions of records, to C++/Rust security benchmarks and AI learning products.` | **Proof Bar (replaces 04/03 filler):**<br>• `13.7s → 45.5ms` (~300× speedup on 20k-record benchmark)<br>• `14/14` (AfterQuery Gold tasks advanced/approved, **0 rejections**)<br>• `573+` (LeetCode solved; 346 active days in 2022)<br>• `20+` (Babban Gona projects serving 10,000+ users) |
| **02** | **`#ai-frontier` — Pillar 1: "All Things AI"**<br>Turns the "99.9% AI user" claim into verifiable proof. | **Eyebrow:** `01 / AI Engineering & Agent Evaluation`<br>**H2:** `Beyond prompting: I evaluate frontier models, build AI-native products, and systematize AI across teams.` | • **AfterQuery:** Project Gold (14 tasks: 3 approved, 11 in human review, 0 rejections); Project Pluto (18 packages Ready for Review in Python/Rust/Java, NOP/oracle separation); Project Fenrir (3 paid memory-safety findings).<br>• **Babban Gona AI Lead:** Spearheads AI workflows across teams—tool selection per task, reusable repo context, verification gates.<br>• **Product & Meta-Proof:** Master Anything (`masteranything.app`) + Live **3-Model Council Build Log** (Opus + Codex + Gemini). |
| **03** | **`#case-studies` — Pillar 2: Problem Solving**<br>Replaces screenshots with architecture cards. | **Eyebrow:** `02 / Systems & Performance Case Studies`<br>**H2:** `Hard engineering problems, diagnosed at the root boundary.` | • **Case 1:** 13.7s → 45.5ms (~300×) Program Config Service optimization.<br>• **Case 2:** Cross-call heap-use-after-free in Rust archive pipelines (Fenrir).<br>• **Case 3:** Multi-tenant async CSV export service shipped in `< 1 week`.<br>• **Scope:** AgricOS 25 multi-tenant admin; Odoo sync (tens of millions of records); Config, Entity, Workflow, Inventory, IAM & mobile sync debugging. |
| **04** | **`#products` — Shipped Products**<br>Proves 0-to-1 founder & mobile execution. | **Eyebrow:** `03 / Independent Products`<br>**H2:** `Zero-to-one products in production.` | • **Master Anything** (`https://masteranything.app` — Next.js 16, Convex, Clerk, AI)<br>• **PennyTots** (`https://pennytots.com` — LIVE link added; React Native, NestJS, GraphQL, Socket.IO, AWS)<br>• **Wholeflo** (`https://wholeflo.com` — LIVE link added; Offline-first SQLite, biometrics, RevenueCat)<br>• **Quikaar** (Multi-store commerce, Next.js, PostgreSQL, Redis — badged *Architecture Case*). |
| **05** | **`#dedication` — Pillar 3: Dedication & Velocity**<br>Proves grit via career trajectory & consistency. | **Eyebrow:** `04 / Trajectory & Discipline`<br>**H2:** `Compounding consistency: Civil Engineer to Developer II & Team Lead in 2.5 years.` | • **Career Arc:** B.Sc. Civil Engineering (UNILAG 2022) + HNG 2022 → Babban Gona Intern (Jan 2023) → Associate (Aug 2023) → **Developer of the Year** (Year 2) → Developer I (Feb 2025) → Developer II (Jul 2025) + **Frontend Lead (~5 engineers, 3 yrs leadership)**.<br>• **LeetCode Grit:** 573–574 solved (196E / 308M / 69H, Python ~556); **2022: 905 submissions, 346 active days, 65-day streak**, 11/12 monthly badges; 365 & 500 Days badges.<br>• **Quality:** ESLint warnings `79 → 0`, changed-line gates, Playwright/SonarQube. |
| **06** | **`#contact` — Action & Machine Layer**<br>Converts human recruiters and AI parsers. | **Eyebrow:** `05 / Next Step`<br>**H2:** `Have a hard systems or AI problem worth building around?` | • Direct email (`ibukun46@gmail.com`), wired CV download, LinkedIn, GitHub, LeetCode, and `/llms.txt` link. |

---

## 3. Confidential-Safe Case Study Outlines (Zero Screenshots Needed)

Render as **Engineering Decision Cards** with SVG system-boundary diagrams and before/after metric pills.

### Case Study 1: ~300× Latency Collapse on Multi-Tenant Config Reads (Babban Gona)
* **Problem:** A core Program Config Service endpoint hit **13.7 s** median latency on a 20,000-record benchmark, blocking admin workflows.
* **Constraint:** Live platform serving **10,000+ users** across Nigeria; required zero downtime and strict tenant isolation.
* **What I Did:** Isolated inefficient aggregation pipelines and index misses; partnered with backend engineers to restructure queries, align composite indexes, and add deterministic pagination.
* **Result:** Cut median latency from **13.7 s to 45.5 ms (~300× speedup)** on the 20,000-record benchmark.

### Case Study 2: Under-One-Week Async Data Export Engine (Babban Gona)
* **Problem:** Operational teams needed large CSV exports across multi-tenant workflows without timing out gateways or spiking memory.
* **Constraint:** End-to-end delivery in **under 1 week** with strict tenant-scoped permissions.
* **What I Did:** Designed and shipped the service in `< 7 days`: PostgreSQL-backed async jobs, recoverable workers, streamed CSV generation, tenant permission checks, and private downloads in React.
* **Result:** Shipped in under one week, powering reliable operational audits across tens of thousands of users.

### Case Study 3: Memory-Safety Vulnerability Hunting & Agent Calibration (AfterQuery)
* **Problem:** Frontier coding agents pass shallow unit tests while failing on deep systems invariants, memory lifetimes, or ambiguous repo specs.
* **Constraint:** Requires 100% deterministic verification, strict NOP/oracle separation, and reproducible containers.
* **What I Did:** Used sanitizer-backed fuzzing in **Project Fenrir** to uncover native memory-safety bugs—including a **cross-call heap-use-after-free in a Rust archive pipeline**—and authored 14 repo tasks (**Project Gold**) plus 18 benchmark packages (**Project Pluto** in Python, Rust, Java).
* **Result:** **3 approved paid security findings** (Fenrir), **14/14 tasks advanced/approved with 0 rejections** (Gold), and **18 benchmark packages** Ready for Review (Pluto).

---

## 4. Creative Ideas to Prove "99.9% AI Fluency" on a Static Site

| Rank | Feature Idea | Mechanism & Why It Convinces | Impact | Effort |
| :---: | :--- | :--- | :---: | :---: |
| **1** | **Public "3-Model Council" Build Log (`#council-log`)** | Expandable scorecard showing how this site was hill-climbed from `7.5 → 10` by **Claude Opus, Codex, and Gemini**—with critiques, diffs, and scores. Proves multi-model orchestration in 10s. | **Very High** | **Low** |
| **2** | **`/llms.txt` + JSON-LD + "View as LLM Dossier" Toggle** | Serve `/llms.txt` and `Person` JSON-LD for AI screeners (Mercor, scrapers), plus a header toggle rendering a cited markdown dossier. Shows native design for agentic consumers. | **High** | **Low** |
| **3** | **"How I Orchestrate AI" System Blueprint** | Visual pipeline of his Babban Gona & AfterQuery workflow: *Task Routing (Impl/Debug/Review) → Reusable Repo Context → Deterministic Verification Gates (changed-line lint, Oracle tests)*. | **High** | **Low–Med** |
| **4** | **Interactive "Failure Boundary" Diagnostic Card** | A 3-tab widget showing how he evaluates agents (*Environment vs. Contract vs. Verifier vs. Model Reasoning*) via an anonymized Rust/Python trajectory repair. | **High** | **Medium** |

---

## 5. Risk & Hygiene Flags in `docs/evidence.md`

1. **LeetCode Contest Rating (`1,391` / Top 86%) & Yearly Drop (`905` in 2022 → `28` in 2025):** Never show the `1,391` rating or a yearly bar chart. Frame 2022 (`905 submissions, 346 active days`) as the **foundational grit crucible** behind his career pivot, and highlight lifetime totals (`573+ solved`, `365-Day` & `500-Day` badges in 2025).
2. **Internal Harness Names (`Harbor` in `src/data/portfolio.js`):** `'Harbor'` appears in `src/data/portfolio.js` under Project Pluto skills but is *not* in `docs/evidence.md`. Replace it with `'NOP/Oracle separation'` or `'Deterministic grading'` to avoid leaking internal AfterQuery tooling names.
3. **Missing Live URLs for `PennyTots` and `Wholeflo`:** Both `https://pennytots.com` and `https://wholeflo.com` are live in `docs/evidence.md` but missing `link` fields in `src/data/portfolio.js`. Add both links; badge **Quikaar** as `Architecture Case Study` (no public URL).
4. **Concurrent Roles Framing:** Frame AfterQuery and founder products as **frontier R&D and builder obsession** that reinforces his primary role at Babban Gona (Developer of the Year, 3 promotions in 2.5 years, multi-team AI lead).
