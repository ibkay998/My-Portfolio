import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Oyeniyi Ibukunoluwa</h1>
        <div className="text-light">Full Stack Developer</div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" /> 
        </div>
        
      </div>
    </header>
  )
}

export default Header