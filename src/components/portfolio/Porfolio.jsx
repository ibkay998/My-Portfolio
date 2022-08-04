import React from 'react'
import "./portfolio.css"
import PORTFOLIO1 from "../../assets/portfolio1.jpg"
import PORTFOLIO2 from "../../assets/portfolio2.png"
import PORTFOLIO3 from "../../assets/portfolio3.jpg"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO1} alt="portfolio1" />
          </div>
          <h3>PISURV</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/ibkay998/piSurv" target="_blank" rel='noreferrer' className='btn ' >Github</a>
            <a href="https://frontend-pisurv.herokuapp.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
            
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO2} alt="portfolio2" />
          </div>
            <h3>CHAT APP</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com/ibkay998/piSurv" target="_blank" rel='noreferrer' className='btn '>Github</a>
              <a href="https://chatapp-420.herokuapp.com/login" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO3} alt="portfolio1"/>
          </div>
            <h3>Social-Book</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com/ibkay998/piSurv" target="_blank" rel='noreferrer' className='btn '>Github</a>
              <a href="https://social-booknew.herokuapp.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio