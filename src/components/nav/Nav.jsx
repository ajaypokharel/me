import React from 'react';
import './nav.css';
import {AiTwotoneHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {FaCode} from 'react-icons/fa'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'

import {useState} from 'react'



const Nav = () => {

  const [active, setActive] = useState('#')

  return (
    <nav>
      <a href='#' className={active === '#' ? 'active' : ''}><AiTwotoneHome /></a>
      <a href='#about' onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><FaUserAlt /></a>
      <a href='#experience' onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><FaCode /></a>
      <a href='#services' onClick={() => setActive('#services')} className={active === '#services' ? 'active' : ''}><RiCustomerService2Fill /></a>
      <a href='#contact' onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><AiFillMessage /></a>

    </nav>
  )
}

export default Nav