import React from 'react';
import './index.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import NavBar from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'


const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App;