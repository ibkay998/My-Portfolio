# Evidence dossier — Ibukunoluwa Oyeniyi

Source of truth for every claim on the portfolio. Every public claim must trace to a line here.
Sources: CV (Sep 2026), Mercor profile, LinkedIn, LeetCode public API (pulled 2026-11-07), GitHub, and the
previous version of this portfolio (copy written by Ibukunoluwa, Aug 2026).
LeetCode daily granularity: src/data/leetcode-2022.json is the raw public submissionCalendar for 2022.

## Constraints
- Babban Gona (employer): NO product screenshots, no internal code, no customer data. Naming
  projects/services, describing the work, and quoting the numbers below is OK (they are already on CV/Mercor/LinkedIn).
- AfterQuery: program codenames + the outcome numbers below are already public on Mercor. No task contents.
- Every number on the site must come from this file. Do not invent metrics.

## Identity
- Self-described role (owner, 2026-11-07): full-stack engineer across backend, frontend, mobile, DevOps and AI evaluation.
  DevOps evidence: GCP, AWS, Docker, GitHub Actions (CV).
- Ibukunoluwa Oyeniyi, Lagos, Nigeria. ibukun46@gmail.com
- LinkedIn https://www.linkedin.com/in/ibukunoluwa-oyeniyi-86b202159/ (725 followers, 500+ connections)
- GitHub https://github.com/ibkay998 · LeetCode https://leetcode.com/ibkay998
- B.Sc. Civil Engineering, University of Lagos, 2015–2021 (owner, 2026-11-07; CV lists Jan 2022 as the award date). Worked as a Civil Engineer (Torek Engineering, Apr 2022–Jan 2023)
  while doing HNG internship → self-taught pivot into software.

## Career progression (LinkedIn) — Babban Gona, 3 yrs 11 mos
- Technical Accelerator Program (intern) Jan 2023 – Jul 2023
- Associate Developer Aug 2023 – Jun 2025
- Developer I Feb 2025 – Jul 2025
- Developer II Jul 2025 – present
- Developer of the Year, in second year at the company, "for delivery impact, engineering quality, and consistent
  ownership across critical products" (Mercor profile wording).
- Frontend team lead: leads ~5 engineers; 3 years of leadership responsibility.

## Babban Gona — what was built (nameable, no screenshots)
- Delivered 20+ projects and workstreams; platform serves 10,000+ (tens of thousands of) users across Nigeria.
- Owns delivery of the AgricOS (AgricOS 25) multi-tenant configuration platform: organization & program admin,
  staff, roles, operational workflows.
- Workflow configuration for enrollment, input distribution, portfolio meetings, staff assignments, operational audits.
- Backend + cross-service work across Config, Entity, Workflow, Inventory, IAM services; resolves identity,
  permission and assignment failures across API gateways, persistence and mobile sync.
- PERFORMANCE: found inefficient aggregation / index usage in Program Config Service; with backend engineers did
  pagination + query optimization. Controlled 20,000-record benchmark: median latency 13.7 s → 45.5 ms (~300×).
- DATA: Odoo integrations synchronizing tens of millions of records. Apps across agric ops, payments, inventory, internal platforms.
- SPEED: designed + delivered the export service in under one week — frontend integration, PostgreSQL-backed async
  jobs, recoverable workers, streamed CSV generation, tenant-scoped permissions, private downloads.
- QUALITY: ESLint warning backlog 79 → 0; changed-line quality gates; coverage-artifact validation; canonical architecture docs.
- AI ADOPTION: spearheads AI-assisted engineering across multiple teams — tool selection per task (implementation,
  debugging, testing, review), reusable repository context, validation practices so AI work is checkable; reusable
  AI-assisted workflows & documentation systems that helped other engineers deliver and review more consistently.
- Stack: React, Next.js, TypeScript, React Query, typed API adapters, validated forms, Python services, PostgreSQL, GCP, Docker,
  GitHub Actions, Playwright, SonarQube.

## AfterQuery Experts — Software Engineering & AI Evaluation Expert (contract, 2026–present)
Designs work that tests the frontier of what coding agents can reliably do.
- Project Gold (repository task design): designed production-shaped coding tasks from real repository histories, built
  test contracts, used model trajectories to improve fairness and signal quality (previous portfolio, user-authored).
  Authored 14 codebase tasks in a documented delivery cycle; 3 approved and
  11 advanced to human review with ZERO rejections in the cycle.
- Project Pluto (benchmark authoring): authored and calibrated terminal-agent engineering tasks across multiple
  languages, pairing realistic bugs with deterministic validation (previous portfolio, user-authored). All 18 task packages were approved (owner, 2026-11-07; Mercor lists them as
  advanced to Ready for Review, which was the earlier stage) — deterministic integration
  suites, NOP/oracle separation, fair specifications, calibrated multi-model difficulty probes. Langs: Python, Rust, Java.
- Project Silver (SWE-Bench-Pro-style task authoring): authored coding tasks against three of my own repositories that
  AfterQuery approved for the program; 2 tasks approved before the project was paused (AfterQuery dashboard, viewed
  2026-11-07).
- Project Fenrir (systems security): discovered, reproduced and repaired memory-safety vulnerabilities using
  sanitizer-backed fuzzing inputs; 3 approved paid findings, incl. a cross-call heap-use-after-free in Rust archive pipelines.
- Method: diagnose the exact failure boundary (environment, contract, tests, verifier, model reasoning, infra), then
  make the smallest evidence-backed repair preserving task fairness and test integrity.

## Products (public)
- Master Anything — https://masteranything.app (LIVE). Founder & product engineer, 2026. AI learning platform: turns a
  learner's goal, experience, intended use and study time into personalized roadmaps, curricula, assessments,
  progress tracking. Next.js 16, React, TypeScript, Convex, Clerk, AI model integrations.
- PennyTots — https://pennytots.com (LIVE site). Mobile & full-stack developer, Jun 2023–present. React Native community
  app: real-time chat, profiles, following, push notifications, deep links, payments. Hardened unread state, pagination,
  group messaging, helpdesk notifications. React Native, Expo, Node.js/NestJS, GraphQL/REST, MongoDB, Socket.IO, AWS.
- Wholeflo — https://wholeflo.com (landing page live, pre-launch with waitlist as of 2026-11-07). Independent product. "A cycle and wellbeing
  companion" (previous portfolio); site title "WholeFlo - Period Tracker App". Offline-first wellbeing app: React Native, Expo Router, SQLite, secure local data, optional sync, notifications, localization,
  biometric protection, RevenueCat subscriptions.
- Quikaar — marketplace (discovery, deals, multi-store carts, checkout, delivery estimates, vendor onboarding,
  real-time orders). Next.js, TypeScript, PostgreSQL, Redis. No public URL found.

## Problem solving — LeetCode (public API, 2026-11-07)
- 573–574 solved: 196 Easy / 308–309 Medium / 69 Hard. Global rank ~162,637.
- 2022: 905 submissions, 346 active days, max streak 65 days. Every monthly daily-challenge badge Jan–Dec 2022 except May.
- Lifetime: 365 Days badge (Feb 2025), 500 Days badge (Apr 2025). 17 badges.
- Yearly submissions: 2021 166 · 2022 905 · 2023 256 · 2024 134 · 2025 28.
- Top topics: Hash Table 126, Dynamic Programming 85, DFS 80, Math 66, Tree 64, BFS 60, Greedy 56, Binary Search 45,
  Design 33, Backtracking 26, Union-Find 16, Trie 14, Monotonic Stack 11, Segment Tree 6.
- Language: Python ~556 problems.

## Earlier
- HNG Internship 2022 (frontend+backend): Streetrates — FastAPI auth endpoints, React pages, Twitter + Telegram bots.
- Side Hustle backend intern 2021 (SQL, Laravel). Tuteria React intern 2018.

## How AI fluency is evidenced
(1) AfterQuery: paid to design tasks that measure frontier coding agents; (2) leads AI adoption across Babban Gona
engineering teams; (3) shipped an AI product (Master Anything).
