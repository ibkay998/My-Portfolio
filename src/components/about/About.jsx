import React from 'react'
import "./about.css"
import ME from "../../assets/me1.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

    <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="AboutImage" />
          </div>
          
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5> Experience</h5>
              <small>1+ Years Working</small>

            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>

            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>

            </article> 
          </div>

          <p>
            Hey My name is Ibukunoluwa Oyeniyi and I am a graduate of the University of Lagos. 
            I love all things Programing and have a soft spot for python. I love Algorithms and you can check out my leetcode profile here <a href="https://leetcode.com/ibkay998">Leetcode Profile</a>
          </p>

          <a href="#contact" className='btn btn-primary'>Lets Talk</a>

        </div>
    </div>
    </section>
  )
}

export default About
