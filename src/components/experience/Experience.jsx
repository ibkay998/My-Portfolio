import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { afterQueryPrograms } from '../../data/portfolio'

const Experience = () => (
  <section className="experience-section" id="afterquery" aria-labelledby="experience-title">
    <div className="section-shell">
      <div className="experience-intro">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-title">Software for people.<br />Benchmarks for machines.</h2>
        </div>
        <div className="experience-summary">
          <p>
            At <strong>Babban Gona</strong>, I have contributed to <strong>20+ projects</strong> serving tens of thousands of people—shipping across web, mobile, backend, data, and operational systems.
          </p>
          <p>
            As an <strong>AfterQuery Expert</strong>, I design and evaluate engineering work that tests the frontier of what coding agents can reliably do.
          </p>
        </div>
      </div>
      <div className="program-list">
        {afterQueryPrograms.map((program) => (
          <article className="program-row" key={program.name}>
            <span className="program-number">{program.number}</span>
            <div className="program-title">
              <p>{program.type}</p>
              <h3>{program.name}</h3>
            </div>
            <p className="program-description">{program.description}</p>
            <div className="program-skills">
              {program.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
            <FiArrowUpRight className="program-arrow" aria-hidden="true" />
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
