import React from 'react';
import './portfolio.css'
import PortfolioList from './PortfolioList';
import pythonImg from '../../assets/learn_python.jpg'
import movieImg from '../../assets/movie.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Tech Portfolio</h5>
      <h2> 🎯 GitHub Projects 🎯</h2>
      <div className="container portfolio__container">
        <PortfolioList 
          imagePath={pythonImg}
          title='Learn Python From Scratch'
          url='https://github.com/ajaypokharel/get-started-with-python'
          urlName='Get Started With Python'
        />

      <PortfolioList 
        imagePath={movieImg}
        title='Movie Recommender Backend'
        url='https://github.com/ajaypokharel/movie-commender'
        urlName='MovieCommender'
      
      />

      </div>
    </section>
  )
}

export default Portfolio