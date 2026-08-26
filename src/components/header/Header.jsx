import React from 'react'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import ME from '../../assets/linkedin-profile.jpg'
import { socialLinks } from '../../data/portfolio'

const Header = () => (
  <header className="hero" id="top">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-copy">
      <div className="eyebrow hero-eyebrow">
        <span className="status-dot" />
        Full-stack &amp; mobile engineer · Lagos, Nigeria
      </div>
      <h1>
        I build systems that
        <span> move people forward.</span>
      </h1>
      <p className="hero-intro">
        I turn complex operations into resilient software—from platforms serving tens of thousands to founder-led products and frontier AI engineering benchmarks.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#work">
          Explore my work <FiArrowDownRight aria-hidden="true" />
        </a>
        <a className="text-link" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </div>
    <div className="hero-portrait" aria-label="Portrait of Ibukunoluwa Oyeniyi">
      <div className="portrait-note portrait-note-top">Founder<br />Product engineer</div>
      <div className="portrait-frame">
        <div className="portrait-orbit" aria-hidden="true" />
        <img src={ME} alt="Ibukunoluwa Oyeniyi" />
      </div>
      <div className="portrait-note portrait-note-bottom">Web · Mobile · AI systems</div>
    </div>
    <div className="hero-index" aria-hidden="true">01 / 06</div>
  </header>
)

export default Header
