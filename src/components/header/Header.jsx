import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import profile_pic from '../../assets/profile.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
          Hello 👋, I'm
        </h5>
        <h1>Ajay</h1>
        <h5 className="text-light">Python Developer</h5>
        <CTA />
        <div className="me">
            <img src={profile_pic} alt='Ajay Pokharel' />
        </div>

        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header