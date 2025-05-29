import React from 'react'
import { TypeAnimation } from 'react-type-animation';
// import HeroBg from '../assets/hero-bg.png'

const ContactLanding = () => {
  return (
    <div className='contact-bg'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-12 text-white'>
            <h1 className='display-1 fw-bolder'>Contact Us Today!</h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Help us change a life today',
                1000, // wait 1s before replacing ...
                'Join the movement for compassionate inclusion',
                1000,
                'Become a volunteer',
                1000,
                'Sponsor a child with down syndrome',
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
