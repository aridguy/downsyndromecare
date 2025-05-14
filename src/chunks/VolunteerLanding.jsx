import React from 'react'
import { TypeAnimation } from 'react-type-animation'
// import HeroBg from '../assets/hero-bg.png'

const ContactLanding = () => {
  return (
    <div className='hero-bg'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-12 text-white'>
            <h1 className='display-1 fw-bolder playfair-font'>
              “Changing Lives: The Impact <b className='text-warning'>Of Our Charity Work”</b>{' '} 
            </h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Put Your Skills to Work for a Cause!',
                1000, // wait 1s before replacing ...
                'Tech, Teach, Build – Volunteer Your Expertise.',
                1000,
                'Your Talent + Our Mission = Real Change.',
                1000,
                'Be the Change You Wish to See – Volunteer With Us!',
                1000,
                'Tech, Teach, Build – Volunteer Your Expertise.',
                1000,
                'Time is Precious – Spend It Where It Matters.',
                1000
              ]}
              wrapper='span'
              speed={0}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactLanding
