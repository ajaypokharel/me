import React from 'react'
import './experience.css'
import ExperienceList from './ExperienceList'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        What skills I have
      </h5>
      <h2>My Experiences</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <ExperienceList title='Frontend' /> 
        </div>
        <div className="experience__backend">
          <ExperienceList title='Backend'/>
        </div>
      </div>
    </section>
  )
}

export default Experience