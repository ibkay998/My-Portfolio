# R1 — Claude Opus review

Reviewed 2026-11-07 against `next start -p 3010`, served from the `main` working tree (HEAD `a6e3b7e`, clean). The local `evidence-redesign` branch points to an older lineage. Viewports: 1280×800, 768×1024, 390×844 @2x. Rubric from `r0-codex-exemplars.md`.

## Scores — **7.98 / 10**

| Criterion | W | Score | Why |
|---|---:|---:|---|
| First-five-second clarity | 1.5 | 9 | H1, role, Lagos and three proofs all sit above the fold at 1280 and 390. The name appears only in body copy (on mobile the nav name is hidden). |
| Verifiable evidence density | 2.0 | 7.5 | Receipts are excellent, but there are ~7 lines not found in `evidence.md` (listed in fix 1), and Pluto's glyphs present "Ready for Review" as approval. |
| Case-study depth | 1.5 | 7 | Latency and export cover problem, decision and outcome. Constraints, tradeoffs and how the fix was validated are missing, and nothing links to a deeper write-up. |
| AI-skill proof | 1.5 | 8 | The failure-boundary method and the separated Gold outcomes are strong. There is no public demonstration, such as a synthetic eval. |
| Visual craft & usability | 1.5 | 7.5 | Distinctive and coherent. Pulling it down: no nav at ≤1080px, unreadable chart text on mobile, a broken staircase on tablet, grid-stretch misalignment, and a 12.9k px mobile page. |
| Perf, a11y, SEO | 1.0 | 8.5 | Lighthouse is 100 on everything except a11y at 96. Real contrast failure, label mismatch, JS ~3× over the spec's budget. |
| Hiring/contact conversion | 1.0 | 9 | Sticky email, CV download, profiles, product links, llms.txt. No availability or target-role line. |

Weighted total: 13.5 + 15 + 10.5 + 12 + 11.25 + 8.5 + 9 = **79.75 / 100**.

## Measured

**Lighthouse** (mobile, default throttling):
- Perf 100, A11y 96, Best practices 100, SEO 100.
- LCP 0.9 s, TBT 70 ms, CLS 0.
- A first run gave Perf 82 / TBT 750 ms, but another agent's Playwright run overlapped it. I treat it as noise.

**Lighthouse** (desktop preset): 100 / 96 / 100 / 100, LCP 0.6 s.

**A11y failures**:
- `color-contrast`: `.kicker` on `.section--deep` is #b83c17 on #e6e3d8, **4.42:1** (×4).
- `label-content-name-mismatch`: `.nav__brand`.

**Contrast**, computed with the WCAG formula:

| Pair | Ratio |
|---|---:|
| ink / paper | 16.38 |
| ink-soft / paper | 12.26 |
| muted / paper | 5.38 |
| muted / paper-deep | 4.78 |
| coral-ink / paper | 4.98 |
| **coral-ink / paper-deep** | **4.42 ✗** |
| coral / ink | 6.69 |
| coral / paper | 2.45 (fills only, OK) |
| muted-light / ink | 9.70 |
| acid / ink | 15.90 |
| live green / paper | 5.67 |
| heat-0 / ink | 1.23 (empty cell vs. background, non-text) |

**Weights**:
- Total transfer: 253 KiB.
- JS: 144 KB transferred, about 141 KB gzip across 4 chunks. The page has zero client components; the spec's budget is ≤50 KB.
- Fonts: 61 KB across 3 woff2 files. CSS: 5 KB. Portrait: 21 KB (next/image at w=640).

**Page heights**: desktop 9,069 px, tablet 10,190 px, mobile **12,890 px** (spec target <7,500). On mobile, the AI section alone is 3,019 px.

**Keyboard**: tab order is logical and every stop shows a 3px outline. Footer links are 19px tall, which passes WCAG 2.5.8 only because of their spacing.

**Reduced motion**: honoured. `scroll-behavior` is `auto` and the bar animation is off.

## Visual / UX defects

1. **No section nav at ≤1080px**: `globals.css` `.nav__links { display:none }`. That leaves a 12.9k px page with only "Email me" in the header.
2. **Latency chart text is ~6.6px on mobile**: the SVG uses viewBox 640 but renders at 354px, so its 12px ticks, labels and note shrink to 0.55×. The `.latency__value` override only fixes the values.
3. **"≈300× faster" is struck through by the 10 s dashed gridline**: `LatencyChart.tsx` `.latency__speedup` sits over `.latency__grid`, at every width.
4. **Grid items stretch, so content drops out of line**:
   - `.flow__steps li` (card 6 "Download": the title sits about 8px lower).
   - `.facts li` ("10s of millions": the caption sits lower). Both have `display:grid` with no `align-content`.
5. **Double 2px borders on the export grid**: `.flow__steps` has a border and so does each `li`.
6. **The tablet staircase is broken** (768–1080px): `.stairs` switches to 3 columns while keeping `align-items:end`. The tops land unevenly, so it reads as a misaligned grid rather than a rise.
7. **Dead space**:
   - Discipline (desktop): about 300px of empty ink under the heatmap beside the stats column.
   - Career: about 200px below `.lanes`.
   - Tablet hero: the portrait sits left at 320px with the right half empty.
8. **Pluto glyphs**: all 18 are filled lime, the same encoding Gold uses for *Approved*. `Ledger.tsx` / `site.ts` `approved: 18`.
9. **The mobile eyebrow wraps to 2 lines** (the spec asked for a short one), and the Master Anything 16:9 crop cuts off its nav and CTAs.

## Top 8 fixes (ranked by score impact)

### 1. Remove claims not in `evidence.md` (Evidence +1.5 → ≈+0.3 total)

Make these edits in `site.ts`:

| Where | Change |
|---|---|
| `careerSteps[3].note` | Delete. |
| PennyTots `kicker` | "A real-time community app." |
| Wholeflo `kicker` | "Offline-first wellbeing app." (or add cycle tracking to the dossier) |
| Gold `detail` | Replace the first sentence with "Authored in a documented delivery cycle." |
| Pluto `detail` | "Terminal-agent tasks" → "Task packages". |
| `aiPractice[2].body` | "I iterated until all three agreed" → "I iterate on their critiques". |
| `leetcode.topics` | Insert `['Math', 66]` after DFS. |

Also edit `page.tsx:98`: drop "slowed to a crawl at scale" and say "took a median 13.7 s in a controlled 20,000-record benchmark."

### 2. Make Pluto's encoding honest (Evidence, AI)

- In `site.ts`, set Pluto to `approved: 0`.
- In `Ledger.tsx`, change the legend glyph to `data-approved={i === 0 && row.approved > 0}`.
- Optionally add a review state, `.glyph[data-review='true'] { background: repeating-linear-gradient(45deg, var(--ink) 0 2px, transparent 2px 5px) }`, so Gold's 11 and Pluto's 18 read as "in review", not "approved".

### 3. Add nav at ≤1080px (Craft)

In `globals.css`, replace `.nav__links { display:none }` in `@media (max-width:1080px)` with:

```css
.nav { flex-wrap: wrap; height: auto; padding-block: 10px; row-gap: 4px; }
.nav__links { order: 3; width: 100%; overflow-x: auto; gap: 22px; scrollbar-width: none; }
.nav__links a { padding: 10px 0; white-space: nowrap; }
```

Then add `{ href: '#contact', label: 'Contact' }` to `nav`, and set `scroll-padding-top: 112px` at that breakpoint.

### 4. Make the mobile chart readable and unstrike "≈300×" (Craft, A11y)

- In `LatencyChart.tsx`, set `LEFT = 112`.
- Add to `.latency__speedup`: `paint-order: stroke; stroke: var(--paper); stroke-width: 8px;`.
- Inside `@media (max-width:680px)`, add: `.latency__tick, .latency__note, .latency__label { font-size: 21px } .latency__value { font-size: 34px } .latency__speedup { font-size: 38px }`. These are user units, so they render at about 11.6px, 19px and 21px.

### 5. Fix grid stretch and double borders (Craft)

```css
.flow__steps li, .facts li { align-content: start; }
.flow__steps { border: 0; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
.flow__steps li { border: 0; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
```

### 6. Use the vertical rail for the staircase at tablet widths (Craft)

Move the five `.stairs*` rules from `@media (max-width:680px)` into the `(max-width:1080px)` block, and delete `.stairs { grid-template-columns: repeat(3,1fr) }` there.

### 7. Cut mobile height from 12.9k to about 9k (Craft, Clarity)

Inside `@media (max-width:680px)`:

```css
.section { padding: 64px 0 }
.section__head { margin-bottom: 28px }
.evidence { padding: 32px 0 40px }
.afterquery { padding: 20px 16px }
.ledger__row { padding: 20px 0 }
.lc-topics li:nth-child(n+5) { display: none }
.heatmap__months svg { width: 84px }
.boundary li { padding: 4px 10px; font-size: .74rem }
.hero__portrait { width: min(56%, 220px) }
```

Also shorten the mobile eyebrow to "Developer II · Babban Gona — Lagos". To do that, wrap the AfterQuery clause in `<span className="eyebrow__long">` and hide it at ≤680px.

### 8. Clear the remaining a11y failures (Foundations)

- Add `.section--deep .kicker { color: #a3340f }`, which gives **5.35:1** on paper-deep and 6.02:1 on paper.
- In `page.tsx:27`, drop the `aria-label` and append `<span className="sr-only">, back to top</span>`. Note that `.sr-only` also needs `margin:-1px; border:0`.
- Change `.footer a` to `display:inline-block; padding-block:6px` so targets are at least 24px.
