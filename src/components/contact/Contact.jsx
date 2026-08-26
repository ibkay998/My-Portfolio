import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { socialLinks } from '../../data/portfolio'

const Contact = () => (
  <section className="contact-section" id="contact" aria-labelledby="contact-title">
    <div className="contact-orbit" aria-hidden="true" />
    <div className="section-shell contact-inner">
      <p className="eyebrow">Start a conversation</p>
      <h2 id="contact-title">Have a hard problem<br />worth building around?</h2>
      <a className="contact-email" href={socialLinks.email}>
        ibukun46@gmail.com <FiArrowUpRight aria-hidden="true" />
      </a>
      <div className="contact-links">
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight aria-hidden="true" /></a>
        <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub <FiArrowUpRight aria-hidden="true" /></a>
        <a href={socialLinks.leetcode} target="_blank" rel="noreferrer">LeetCode <FiArrowUpRight aria-hidden="true" /></a>
      </div>
    </div>
  </section>
)

export default Contact
