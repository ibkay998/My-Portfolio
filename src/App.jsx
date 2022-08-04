import React from 'react'
import Header from "./components/header/Header"
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import About from "./components/about/About"
import Portfolio from './components/portfolio/Porfolio'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </>
    
  )
}

export default App