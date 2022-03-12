import React from 'react'
import './contact.css'
import ContactBox from './ContactBox'
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'

function Contact() {

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <HiOutlineMail className='contact__option-icon'/>
              <ContactBox 
              title='Email' 
              info='ajaypokharel8@gmail.com'
              link='mailto:ajaypokharel8@gmail.com'
              text='Email Me'  />
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <ContactBox
              title='LinkedIn'
              info= 'Ajay Pokharel'
              link='https//www.linkedin.com/in/ajaypokharel'
              text='My LinkedIn' />
          </article>

          <article className="contact__option">
            <BsFillTelephoneFill className='contact__option-icon'/>
            <ContactBox
              title='Phone'
              info= '(765) 350-6805'
              link='tel:+17653506805'
              text='Call Me' />
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact