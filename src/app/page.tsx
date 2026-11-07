import Image from 'next/image'
import Heatmap from '@/components/Heatmap'
import LatencyChart from '@/components/LatencyChart'
import Ledger from '@/components/Ledger'
import {
  aiPractice,
  careerSteps,
  council,
  engineeringFacts,
  exportSteps,
  failureBoundary,
  heroProofs,
  leetcode,
  links,
  nav,
  products,
  sideLanes,
} from '@/data/site'

const Arrow = () => <span aria-hidden="true">↗</span>

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="nav">
        <a href="#top" className="nav__brand">
          <span className="nav__mark" aria-hidden="true">IO</span>
          <span className="nav__name">Ibukunoluwa Oyeniyi</span>
          <span className="sr-only">, back to top</span>
        </a>
        <nav aria-label="Sections" className="nav__links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a href={links.email} className="button button--small">Email me</a>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="hero shell">
          <div className="hero__copy">
            <p className="eyebrow">
              Developer II &amp; frontend lead, Babban Gona<span className="eyebrow__long"> · AI evaluation expert, AfterQuery</span> · Lagos
            </p>
            <h1>
              I make software <em>prove</em> itself.
            </h1>
            <p className="hero__intro">
              I’m Ibukunoluwa Oyeniyi, a civil engineer turned software engineer. I lead frontend for an agricultural
              operations platform used by 10,000+ people across Nigeria, ship my own AI and mobile products, and get
              paid to design tasks that test what frontier coding agents can really do.
            </p>
            <ul className="proofs">
              {heroProofs.map((p) => (
                <li key={p.href}>
                  <a href={p.href}>
                    <strong>{p.value}</strong>
                    <span>{p.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="hero__actions">
              <a href={links.email} className="button">Email me</a>
              <a href={links.cv} className="text-link" download>Download CV (PDF)</a>
              <a href="#evidence" className="text-link">See the evidence ↓</a>
            </div>
          </div>
          <div className="hero__portrait">
            <Image
              src="/media/portrait.jpg"
              alt="Portrait of Ibukunoluwa Oyeniyi"
              width={800}
              height={800}
              priority
              sizes="(max-width: 900px) 70vw, 420px"
            />
          </div>
        </section>

        {/* Evidence */}
        <section id="evidence" className="section shell" aria-labelledby="evidence-title">
          <div className="section__head">
            <p className="kicker">01 · Selected evidence</p>
            <h2 id="evidence-title">Every claim here comes with a receipt.</h2>
            <p className="section__lede">
              I can’t show screenshots of my employer’s product, so this section shows the numbers, how the systems
              fit together, and where each claim comes from.
            </p>
          </div>

          <article id="latency" className="evidence">
            <div className="evidence__text">
              <p className="kicker">Babban Gona · Program Config Service</p>
              <h3>A 13.7-second request, made about 300× faster.</h3>
              <dl className="case">
                <div><dt>Context</dt><dd>Program Config Service, part of the AgricOS platform used by 10,000+ people.</dd></div>
                <div><dt>Diagnosis</dt><dd>I identified inefficient aggregation and missed opportunities to use indexes.</dd></div>
                <div><dt>Fix</dt><dd>Pagination and query optimization, worked through with the backend engineers.</dd></div>
                <div><dt>Validation</dt><dd>A controlled 20,000-record benchmark, comparing median latency before and after.</dd></div>
              </dl>
            </div>
            <LatencyChart />
          </article>

          <article id="export" className="evidence">
            <div className="evidence__text">
              <p className="kicker">Babban Gona · Export service</p>
              <h3>Designed and shipped a full export service in under a week.</h3>
              <dl className="case">
                <div><dt>Constraint</dt><dd>Designed and delivered in under one week.</dd></div>
                <div><dt>Scope</dt><dd>End to end, from frontend integration to private downloads (diagram).</dd></div>
                <div><dt>Safety</dt><dd>Tenant-scoped permissions on every export and every download.</dd></div>
              </dl>
            </div>
            <figure className="flow">
              <ol className="flow__steps">
                {exportSteps.map((step, i) => (
                  <li key={step.title}>
                    <span className="flow__n">{i + 1}</span>
                    <strong>{step.title}</strong>
                    <span>{step.detail}</span>
                  </li>
                ))}
              </ol>
              <figcaption className="receipt">
                Architecture as described on my CV. No internal code or screenshots, out of respect for employer
                confidentiality.
              </figcaption>
            </figure>
          </article>

          <ul className="facts">
            {engineeringFacts.map((f) => (
              <li key={f.value}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* AI */}
        <section id="ai" className="section section--deep" aria-labelledby="ai-title">
          <div className="shell">
            <div className="section__head">
              <p className="kicker">02 · AI</p>
              <h2 id="ai-title">AI is how I work, and what I test.</h2>
              <p className="section__lede">
                I use AI every day to build, and I get paid to design the tasks that measure where it breaks.
              </p>
            </div>

            <div id="afterquery" className="afterquery">
              <div className="afterquery__intro">
                <p className="kicker">AfterQuery Experts · Software engineering &amp; AI evaluation expert · 2026 →</p>
                <h3>I design the tasks that frontier coding agents are measured on.</h3>
                <p>
                  When an agent fails, I find the exact boundary where it went wrong, then make the smallest repair the
                  evidence supports, without making the task unfair or weakening its tests.
                </p>
                <ol className="boundary" aria-label="Failure boundaries I check, in order">
                  {failureBoundary.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ol>
              </div>
              <Ledger />
              <p className="receipt">Outcomes as listed on my Mercor profile. Task contents are confidential.</p>
            </div>

            <ul className="practice">
              {aiPractice.map((card) => (
                <li key={card.title}>
                  <p className="kicker">{card.kicker}</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  {card.href && (
                    <a href={card.href} className="text-link">
                      {card.cta} <Arrow />
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <details className="scorecard" open>
              <summary>
                <span className="kicker">Council scorecard</span>
                <strong>How three models scored this portfolio, round by round</strong>
              </summary>
              <table>
                <caption className="sr-only">Scores out of 10 from each model, by review round</caption>
                <thead>
                  <tr><th scope="col">Round</th>{council.models.map((m) => <th key={m} scope="col">{m}</th>)}</tr>
                </thead>
                <tbody>
                  {council.rounds.map((r) => (
                    <tr key={r.label}>
                      <th scope="row">{r.label}</th>
                      {r.scores.map((score, i) => <td key={i}>{score ?? '—'}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="receipt">
                Same seven-criterion rubric each round, written by the Codex reviewer in round 0. Full critiques:{' '}
                <a href={links.council}>docs/council</a>.
              </p>
            </details>
          </div>
        </section>

        {/* Career */}
        <section id="career" className="section shell" aria-labelledby="career-title">
          <div className="section__head">
            <p className="kicker">03 · Career</p>
            <h2 id="career-title">From civil engineering to Developer of the Year.</h2>
            <p className="section__lede">
              I didn’t start in software. I joined Babban Gona as an intern in January 2023 and was Developer II by July
              2025.
            </p>
          </div>
          <ol className="stairs">
            {careerSteps.map((s, i) => (
              <li key={s.role} className={s.star ? 'stairs__step stairs__step--star' : 'stairs__step'} style={{ '--i': i } as React.CSSProperties}>
                <time>{s.date}</time>
                <strong>{s.role}</strong>
                <span className="stairs__org">{s.org}</span>
                {s.note && <span className="stairs__note">{s.note}</span>}
              </li>
            ))}
          </ol>
          <ul className="lanes" aria-label="Alongside the main path">
            {sideLanes.map((l) => (
              <li key={l.label}>
                <time>{l.date}</time> {l.label}
              </li>
            ))}
          </ul>
        </section>

        {/* Products */}
        <section id="products" className="section shell" aria-labelledby="products-title">
          <div className="section__head">
            <p className="kicker">04 · Products</p>
            <h2 id="products-title">Products I’ve founded or helped build.</h2>
          </div>
          <div className="products">
            {products.map((p) => (
              <article key={p.name} className={p.image ? 'product product--visual' : 'product'}>
                {p.image && (
                  <a href={p.href} className="product__shot" tabIndex={-1} aria-hidden="true">
                    <Image src={p.image.src} alt="" width={p.image.width} height={p.image.height} sizes="(max-width: 900px) 100vw, 640px" />
                  </a>
                )}
                <div className="product__text">
                  <p className="kicker">
                    {p.role} · <span className={p.status === 'Live' ? 'status status--live' : 'status'}>{p.status}</span>
                  </p>
                  <h3>{p.name}</h3>
                  <p className="product__kicker">{p.kicker}</p>
                  <p>{p.description}</p>
                  <ul className="tags" aria-label="Stack">
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {p.href && (
                    <a href={p.href} className="text-link">
                      Visit {p.href.replace('https://', '')} <Arrow />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Discipline */}
        <section id="discipline" className="section section--ink" aria-labelledby="discipline-title">
          <div className="shell">
            <div className="section__head">
              <p className="kicker">05 · Discipline</p>
              <h2 id="discipline-title">346 days of practice in a single year.</h2>
              <p className="section__lede">
                In 2022, the year I worked as a civil engineer and moved into software, I submitted LeetCode solutions on
                346 of 365 days.
              </p>
            </div>
            <div className="discipline">
              <Heatmap />
              <dl className="lc-stats">
                <div><dt>Submissions in 2022</dt><dd>905</dd></div>
                <div><dt>Longest streak</dt><dd>65 days</dd></div>
                <div><dt>Problems solved</dt><dd>{leetcode.solved}</dd></div>
                <div className="lc-split">
                  <dt>Easy / Medium / Hard</dt>
                  <dd>
                    {leetcode.easy} / {leetcode.medium} / {leetcode.hard}
                    <span className="split-bar" aria-hidden="true">
                      <span style={{ flex: leetcode.easy }} />
                      <span style={{ flex: leetcode.medium }} />
                      <span style={{ flex: leetcode.hard }} />
                    </span>
                  </dd>
                </div>
                <div><dt>Badges</dt><dd className="lc-small">365-day and 500-day submission badges</dd></div>
                <div className="lc-topics">
                  <dt>Most practised</dt>
                  <dd>
                    <ul>
                      {leetcode.topics.map(([t, n]) => (
                        <li key={t}><span>{t}</span><span>{n}</span></li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
            <a href={links.leetcode} className="text-link text-link--light">
              Verify on leetcode.com/ibkay998 <Arrow />
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section shell contact" aria-labelledby="contact-title">
          <p className="kicker">06 · Contact</p>
          <h2 id="contact-title">
            Got a hard problem worth building around? <em>Let’s talk.</em>
          </h2>
          <a href={links.email} className="contact__email">{links.emailLabel}</a>
          <ul className="contact__links">
            <li><a href={links.cv} download>CV (PDF)</a></li>
            <li><a href={links.linkedin}>LinkedIn <Arrow /></a></li>
            <li><a href={links.github}>GitHub <Arrow /></a></li>
            <li><a href={links.leetcode}>LeetCode <Arrow /></a></li>
            <li><a href="/llms.txt">llms.txt, for AI screeners</a></li>
          </ul>
        </section>
      </main>

      <footer className="footer shell">
        <p>
          Numbers on this page come from a <a href={links.evidence}>public evidence file</a>. Built with Next.js.{' '}
          <a href={links.repo}>Source</a>.
        </p>
      </footer>
    </>
  )
}
