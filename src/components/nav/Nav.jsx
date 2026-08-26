import React, { useState } from 'react'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import { socialLinks } from '../../data/portfolio'

const navItems = [
  ['Work', '#work'],
  ['AfterQuery', '#afterquery'],
  ['Products', '#products'],
  ['About', '#about'],
]

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Ibukunoluwa Oyeniyi, home">
        <span className="brand-mark">IO</span>
        <span className="brand-name">Ibukunoluwa<br />Oyeniyi</span>
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <div className={`nav-links ${isOpen ? 'is-open' : ''}`}>
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a className="nav-contact" href={socialLinks.email} onClick={closeMenu}>
          Let&apos;s talk <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </nav>
  )
}

export default Nav
