import React from "react"
import Content from "./Content"
import './experience.css'


const ExperienceList = (props) => {

  

    const tech_stack_frontend = [
      ['HTML', 'Beginner'],
      ['CSS', 'Beginner'],
      ['JavaScript', 'Beginner'],
      ['TypeScript', 'Beginner'],
      ['React', 'Intermediate'],
      ['Material UI', 'Beginner']
    ]
    
  
   const tech_stack_backend = [
     ['Python', 'Experienced'],
     ['Django', 'Experienced'],
     ['Django REST Framework', 'Experienced'],
     ['MySQL', 'Beginner'],
     ['Linux/Unix', 'Beginner'],
     ['C', 'Beginner']
   ]
   
  
  const frontend_content = tech_stack_frontend.map(
    item => {
      return (
        <Content skill={item[0]} level={item[1]} class='experience__content' />
      )
    }
  )
  
  const backend_content = tech_stack_backend.map(
    item => {
      return (
          <Content skill={item[0]} level={item[1]} class='experience__content' />        
      )
    }
  )
  
    return (
      <>
      {props.title === 'Frontend' && <h3>Frontend Development</h3>}
      {props.title === 'Backend' && <h3>Backend Development</h3>}
      {props.title === 'Frontend' && frontend_content}
      {props.title === 'Backend' && backend_content}
      
      
      </>
    )
  } 


export default ExperienceList