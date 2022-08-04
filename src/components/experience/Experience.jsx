import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id = "experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            
              </div>

              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>REACT</h4>
              <small className='text-light'>Intermediate</small>
            
              </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>TAILWIND</h4>
              <small className='text-light'>Intermediate</small>
            
              </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Next.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>
            
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Node.js</h4>
              <small className='text-light'>Intermediate</small>
            
              </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Django</h4>
                <small className='text-light'>Intermediate</small>
            
              </div>
              </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
            
                </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
              
              </div>
              </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PostgreSql</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>
            
          </div>
        </div>
      </div>
      <div>

      </div>
    </section>
  )
}

export default Experience