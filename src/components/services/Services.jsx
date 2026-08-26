import React from 'react'
import { capabilities } from '../../data/portfolio'

const Services = () => (
  <section className="capabilities-section" id="about" aria-labelledby="capabilities-title">
    <div className="section-shell capabilities-grid">
      <div className="section-heading capabilities-heading">
        <p className="eyebrow">How I work</p>
        <h2 id="capabilities-title">Wide technical range.<br />One product mindset.</h2>
        <p>
          I work comfortably from interface details to service boundaries, data models, release pipelines, and evaluation harnesses. The goal is always the same: useful software that holds up in the real world.
        </p>
      </div>
      <div className="capability-list">
        {capabilities.map((capability, index) => (
          <article className="capability" key={capability.title}>
            <span className="capability-number">0{index + 1}</span>
            <div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <div className="capability-items">
                {capability.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Services
