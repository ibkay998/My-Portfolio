import Image from 'next/image'
import Heatmap from '@/components/Heatmap'
import LatencyChart from '@/components/LatencyChart'
import Ledger from '@/components/Ledger'
import {
  aiPractice,
  careerSteps,
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
        <a href="#top" className="nav__brand" aria-label="Ibukunoluwa Oyeniyi, back to top">
          <span className="nav__mark" aria-hidden="true">IO</span>
          <span className="nav__name">Ibukunoluwa Oyeniyi</span>
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
              Developer II &amp; frontend lead, Babban Gona · AI evaluation expert, AfterQuery · Lagos, Nigeria
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
              <p>
                A core configuration endpoint slowed to a crawl at scale. I traced it to inefficient aggregation and
                poor index usage, then worked with the backend engineers on pagination and query optimization.
              </p>
            </div>
            <LatencyChart />
          </article>

          <article id="export" className="evidence">
            <div className="evidence__text">
              <p className="kicker">Babban Gona · Export service</p>
              <h3>Designed and shipped a full export service in under a week.</h3>
              <p>
                Frontend to database: large exports run as background jobs that survive failures, stream
                CSV instead of building it in memory, and respect each tenant’s permissions.
              </p>
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
                Lots of engineers use AI. Fewer get paid to find where it breaks. I do both, and both show up below.
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
          </div>
        </section>

        {/* Career */}
        <section id="career" className="section shell" aria-labelledby="career-title">
          <div className="section__head">
            <p className="kicker">03 · Career</p>
            <h2 id="career-title">From civil engineering to Developer of the Year.</h2>
            <p className="section__lede">
              I didn’t start in software. I earned my way in through practice, then got promoted three times in two
              and a half years.
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
            <h2 id="products-title">Products I’ve built and shipped myself.</h2>
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
                In 2022, while working as a civil engineer, I solved algorithm problems on 346 of 365 days. That habit
                is how I switched careers.
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
          Every number on this page traces to a <a href={links.evidence}>public evidence file</a>. Built with Next.js.{' '}
          <a href={links.repo}>Source</a>.
        </p>
      </footer>
    </>
  )
}
