import React from "react"
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'


const Content = (props) => {
    return (
        <div className={props.class}>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>{props.skill}</h4>
              
              <small className='text-light'>{props.level}</small>
            </div>
          </article>
        </div>
    )
  }

  export default Content;