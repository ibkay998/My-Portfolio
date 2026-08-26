import React from 'react'
import { impactStats } from '../../data/portfolio'

const About = () => (
  <section className="impact-band" id="work" aria-labelledby="impact-title">
    <div className="section-shell">
      <div className="section-heading impact-heading">
        <p className="eyebrow">Selected impact</p>
        <h2 id="impact-title">Built across the stack.<br />Measured in outcomes.</h2>
      </div>
      <div className="stats-grid">
        {impactStats.map((stat) => (
          <article className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
      <div className="company-line" aria-label="Companies and products">
        {['BABBAN GONA', 'AFTERQUERY', 'MASTER ANYTHING', 'WHOLEFLO', 'QUIKAAR', 'PENNYTOTS'].map((name) => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </div>
  </section>
)

export default About
