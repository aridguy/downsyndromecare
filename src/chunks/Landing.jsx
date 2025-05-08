import React from 'react'
import { TypeAnimation } from 'react-type-animation';
// import HeroBg from '../assets/hero-bg.png'

const Landing = () => {
  return (
    <div className='hero-bg'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-12 text-center text-white'>
            <h1 className='display-1 fw-bolder'>We <b className='text-primary'>Rise</b> By Lifting Others</h1>
            <TypeAnimation
              sequence={[
                'Every chromosome matters.',
                1000,
                'Love creates possibilities.',
                1000,
                "Inclusion is not a favor — it's a right",
                1000,
                // Same substring at the start will only be typed out once, initially
                'Help us change a life today',
                1000, // wait 1s before replacing ...
                'Join the movement for compassionate inclusion',
                1000,
                'Support our mission to empower individuals with Down syndrome',
                1000,
                'Celebrating uniqueness, embracing love',
                1000,
                'Become a volunteer',
                1000,
                'We see ability, not disability',
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

export default Landing
