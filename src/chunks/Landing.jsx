import React from 'react'
import { TypeAnimation } from 'react-type-animation';
// import HeroBg from '../assets/hero-bg.png'

const Landing = () => {
  return (
    <div className='hero-bg'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-12 text-center text-white'>
            <h1 className='display-1 fw-bolder'>We Rise By Lifting Others</h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Help Us Change a Life Today',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Join the Movement for Compassionate Inclusion',
                1000,
                'Become a Volunteer',
                1000,
                'Sponsor a Child with Down Syndrome',
                1000
              ]}
              wrapper='span'
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
