# R0 — Design direction (Claude Opus)

Every number below comes from `docs/evidence.md`. I reviewed the live site at 1280 and 390 px on 2026-11-07.

## 0. What I saw

- **Hero:** the slogan has no proof. The first number appears at y≈1,300 on desktop and y≈1,870 on mobile. The mobile page is 11,773 px tall.
- **Misleading affordances:** the AfterQuery rows have ↗ arrows but aren't links. "Founder / Product engineer" competes with the eyebrow title.
- **Fake mockups:** the product phone frames hold grey placeholder lines and read as wireframes.
- **Contrast (approximate):** `--muted #6c7067` on paper ≈4.4:1, which fails AA. Coral `#ff6d43` on paper ≈2.5:1, which fails even as large text, and the H1 accent line uses it.
- **Fonts:** a render-blocking Google Fonts `@import`.

## 1. Identity: keep / change

**Keep:** DM Serif Display with tight tracking and the italic coral accent line, Manrope body, paper `#f2f0e8`, ink `#11130f`, lime on ink, the ruled editorial rows, the alternating paper/ink bands, the arched lime portrait frame, and the uppercase micro-labels.

**Change:**
- **Tokens:** add `--coral-ink #b83c17` (≈5:1) for coral text on paper. Keep `#ff6d43` for fills and for coral on ink (≈6.6:1). Set `--muted` to `#5f635a`. Never put lime text on paper.
- **Delete decoration that carries no information:** the vertical label, the "Founder" note, the rotated grid, the "01 / 06" index, and the dead arrows.
- **Delete the stats band.** Its filler counts ("04 products", "03 programs") give way to the evidence modules.
- **Products:** for the live products (Master Anything, PennyTots, Wholeflo), use real screenshots of their public sites in a thin frame, plus "Visit ↗". Quikaar becomes a smaller text row tagged "Private build · no public URL".
- **Signature pattern, the evidence card:** *kicker* (where) → *claim* (serif) → *visual* → *receipt line* (small caps, muted), e.g. "Source: controlled 20,000-record benchmark · CV, Mercor", with a verify link where one exists. Making the receipts visible is what makes this site different.

## 2. Hero: the first 5 seconds

Who → what → three proofs, all above the fold.

```
eyebrow  Developer II & frontend lead, Babban Gona · AI evaluation expert, AfterQuery · Lagos
H1       I make software *prove* itself.        (italic coral-ink on "prove")
intro    Civil engineer turned software engineer. I ship platforms used by 10,000+ people
         across Nigeria, and design tasks that test what frontier coding agents can do.
proofs   13.7 s → 45.5 ms        | 14 tasks · 0 rejections   | Developer of the Year
         median latency,         | AfterQuery Project Gold   | intern → Developer II
         20k-record benchmark    |                           | in 2½ years
CTA      Email me (primary) · See the evidence ↓
```

- **Proof cells:** hairline-separated with no cards. Each one is an anchor to its evidence module. Numbers are DM Serif at 40–56px (30–34px on mobile), captions Manrope 13px muted.
- **Headline:** the short H1 frees the vertical space the proofs need. Fallback headline: "Civil engineer turned *systems builder*."
- **Desktop (1280×800):** copy at 7/12, portrait at 5/12. The frame shrinks from 600 to 470px tall. The H1 is about 104px. The proof strip ends above y≈760.
- **Mobile (390×844):** the eyebrow shortens to "Developer II · Babban Gona — Lagos". H1 at about 46px. The proofs stack as rows of about 60px. The CTA lands at y≈760, and the portrait moves below the proofs.
- **No layout shift:** explicit image dimensions and static HTML text.

## 3. Evidence components

These are hand-built SVG rendered at build time, with no chart library.

**3a. Latency, "~300× faster"**
- **Visual:** two horizontal bars on a labelled **log axis** from 10 ms to 100 s, with decade ticks.
  - *Before* (ink) ends at 13.7 s, *after* (coral) at 45.5 ms, and a bracket between them reads "~300×".
  - Below sits a linear-scale inset: a full-width 13.7 s line beside a 1/300-width sliver. This is honest about the log scale and also striking.
- **Receipt:** "Median, controlled 20,000-record benchmark; pagination + query/index optimization with backend engineers."
- **Motion:** the bars grow once on intersection (600 ms).
- **Mobile:** the same bars at full width, with ticks at 10 ms / 1 s / 100 s only.

**3b. Career arc as a staircase**
- **Desktop axis:** 2018–2026.
- **Main lane:** a rising **step line**: Civil Engineer, Torek (Apr 2022) → TAP intern (Jan 2023) → Associate (Aug 2023) → Developer I (Feb 2025) → Developer II (Jul 2025).
  - A lime ★ "Developer of the Year" marks the "Year 2" span. Don't invent a date for it.
  - A coral hairline at 2022 is labelled "pivot: civil → software".
- **Thin lanes below:** PennyTots (Jun 2023–), AfterQuery (2026–), Master Anything (2026). Faint dots for Tuteria 2018, Side Hustle 2021, HNG + B.Sc. 2022.
- **Data note:** Associate and Developer I overlap on LinkedIn, so plot start dates only.
- **Accessibility:** the SVG sits over a real `<ol>`, and every step can be focused or hovered to show a one-line note.
- **Mobile:** a vertical left rail. The side lanes become tags.

**3c. LeetCode 2022 heatmap**
- **Data:**
  - Fetch `submissionCalendar` for 2022 from the public API at build time and commit it as JSON.
  - **The build fails unless the data sums to 905 submissions and 346 active days.** These are receipts enforced in code.
- **Look:**
  - It sits on an ink band. Grid of 53×7 cells, 11px each with 3px gaps.
  - 5-step lime ramp with quantile bins and a legend.
  - A bracket marks the "65-day streak".
  - A row of 12 badge dots for the monthly daily-challenge badges, with May hollow because it was missed.
- **Side panel:**
  - 573 solved, with an Easy/Med/Hard bar (196/308/69).
  - Top topics (Hash Table 126, DP 85, DFS 80…).
  - The 365- and 500-day badges.
  - **Don't** show the contest rating or the yearly decline.
- **Interaction:** a pointer tooltip ("12 Mar 2022 · 4 submissions"). Cells aren't individually focusable. A `<details>` element holds a monthly totals table for keyboard and screen-reader users.
- **Mobile:** **12 small multiples** (a 3×4 grid of month calendars with 13px cells) instead of an unreadable 53-column strip.

**3d. Export service architecture** ("designed and delivered in under one week")
- **SVG flow:** Browser (React Query) → API (tenant-scoped permissions) → PostgreSQL async job → Recoverable worker (with a dashed "retry/recover" loop) → Streamed CSV → Private download.
- **Style:** ink strokes at 1.5px, hairline nodes, and the stream edge in coral. Don't name cloud products the dossier doesn't name.
- **Interaction:** an optional 1–6 "step through" control highlights each node and edge and shows its caption. The default is static with numbered captions.
- **Mobile:** the flow runs vertically.

**3e. AfterQuery ledger**
- **Layout:** three ruled rows with numbers drawn as **unit glyphs**:
  - **Gold:** 14 squares, 3 lime ("approved") and 11 outlined ("to human review"), plus a large "0 rejections".
  - **Pluto:** 18 squares, "Ready for Review", tagged Python/Rust/Java.
  - **Fenrir:** 3 shields, "approved paid findings", with the note "cross-call heap-use-after-free in a Rust archive pipeline".
- **No count-up animations.** The final values are in the HTML.
- **Receipt:** "Outcomes public on Mercor; no task contents."

**Order:** Hero → Evidence (3a, 3d, 3e) → Career arc → Products (live first) → Problem solving (3c) → AI practice (adoption + a "built by a scored model council" build-log link) → Contact.

## 4. og:image (1200×630)

- **Base:** paper background with a 60px safe margin.
- **Left column (about 720px):**
  - "IBUKUNOLUWA OYENIYI — LAGOS" (22px, tracked).
  - H1 "I make software *prove* itself." (DM Serif at 76px, with "prove" in coral-ink italic).
  - A ruled three-cell proof strip at 30px: "13.7 s → 45.5 ms" · "0 rejections" · "Developer of the Year".
- **Right column:** the lime arched portrait (about 380×500), bleeding off the bottom edge.
- **Thumbnail test:** the name, H1 and one number must stay legible when scaled to 600×315.
- **Production:** generate a static PNG at build (≤250 KB) from the same fonts. Set `og:image:width/height/alt` and `twitter:card=summary_large_image`.

## 5. System rules

**Type**
- DM Serif only at 28px and above (tracking −0.03 to −0.05em, line-height 0.9–1.0).
- H1 `clamp(2.9rem, 7vw, 6.5rem)`.
- Body: Manrope 17px, line-height 1.65, max 68ch. Labels: 11–12px, 700 weight, tracking 0.1em.
- Data numbers use `tabular-nums lining-nums` with a thin space before units.
- Two families only.

**Spacing**
- 8px scale: 8/16/24/40/64/96/144.
- Section padding: 144px on desktop, 72px on mobile.
- Mobile page height under 7,500px.

**Motion**
- `cubic-bezier(.2,.7,.2,1)`, 400–700 ms, each visual animates once on first intersection.
- No parallax, scroll-jacking, count-ups or infinite loops (the pulse dot goes).
- `prefers-reduced-motion: reduce` gets final states, no transforms, `scroll-behavior: auto`, and no autoplay.

**Accessibility (WCAG 2.2 AA)**
- **Contrast:** apply the token fixes and enforce them with axe in CI.
- **Figures:** every visual is a `<figure>` whose `<figcaption>` states the claim and numbers in text. SVGs get `role="img"` with `<title>`/`<desc>`, or `aria-hidden` when the caption duplicates them.
- **Colour:** never the only signal.
- **Focus and targets:** 3px coral-ink focus rings, targets of 44px or more.
- **Structure:** one H1, logical heading order, and descriptive external links ("Visit pennytots.com ↗").

**Performance** (Next.js static export)
- **Speed:** LCP under 1.8 s on mid-tier mobile over 4G, CLS under 0.05, INP under 100 ms. Lighthouse 100 in every category.
- **JavaScript:** 50 KB gz or less (tooltips, step-through and nav only). Charts are server-rendered SVG.
- **Fonts:** self-hosted `next/font` woff2 subsets, 100 KB or less, with only the display face preloaded.
- **Images:** portrait AVIF at 60 KB or less, screenshots 120 KB or less each and lazy-loaded.
- **Total first-load weight:** 450 KB or less.
