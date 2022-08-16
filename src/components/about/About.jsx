import React from 'react'
import './about.css'
import intro_image from '../../assets/workshop.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {IoMdSchool} from 'react-icons/io'

const Card = (props) => {
  return (
    <div className="about__cards">
            <article className='about__card'>
              {props.title === 'Experience' && <RiAwardFill className='about__icon'/>}
              {props.title === 'Education' && <IoMdSchool className='about__icon'/>}
              <h3>{props.title}</h3>  
              <h5>{props.headline}</h5>
            </article>  
    </div>    
  )
}

function About() {
  return (
    <section id='about'>
      <h2>Who am I...</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={intro_image} alt='This is Ajay' />
          </div>

        </div>
        <div className="about__content">
          <Card title="Education" headline="Fisk University, Class of 2025" />
          <Card title="Experience" headline="1.5+ Years Working"/>
         

         <p>

         A self-taught programmer, mathematician, and a CS student with participation in international competitions and professional experience 
            in high-paced tech outsourcing companies and startups, possessing decent knowledge of the software development lifecycle 
                              and a good understanding of algorithms and data structures.

         </p>

         <a href='mailto:ajaypokharel8@gmail.com' className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About