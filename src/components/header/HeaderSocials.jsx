import React from 'react'
import {SiLinkedin} from 'react-icons/si';
import {SiGithub} from 'react-icons/si';
import {SiMedium} from 'react-icons/si'

const HeaderSocials = () => {
  return (
        <div className="header__socials">
            <a href='https://www.linkedin.com/in/ajaypokharel' target='_blank'> <SiLinkedin /> </a>
            <a href='https://www.github.com/ajaypokharel' target='_blank'><SiGithub /></a>
            <a href='https://ajaypokharel8.medium.com/' target='_blank'><SiMedium /></a>
        </div>
  )
}

export default HeaderSocials