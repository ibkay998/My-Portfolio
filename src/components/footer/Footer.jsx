import React from 'react'
import "./footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">IBKAY</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ibukunoluwa-oyeniyi-86b202159/" target="_blank" rel='noreferrer'><BsLinkedin/> </a>
        <a href="https://github.com/ibkay998" target="_blank" rel='noreferrer'> <FaGithub/></a>
        <a href="https://twitter.com/ibkay998" target="_blank" rel='noreferrer'> <FaTwitter/></a>
        <a href="https://facebook.com/ibukunoluwa-oyeniyi" target="_blank" rel='noreferrer'> <FaFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; IBKAY All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer