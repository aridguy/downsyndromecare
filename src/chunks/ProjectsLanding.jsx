import React from 'react'
import { TypeAnimation } from 'react-type-animation'
// import HeroBg from '../assets/hero-bg.png'

const ContactLanding = () => {
  return (
    <div className='hero-bg'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-12 text-white playfair-font'>
            <h1 className='display-1 fw-bolder playfair-font text-orange'>
              Projects{' '}
            </h1>
            <TypeAnimation
              sequence={[
                'Transforming Ideas into Impactful Projects',
                1000,
                'Innovative Solutions for Community Challenges',
                1000,
                'See Our Projects Creating Real Change',
                1000,
                'From Concept to Completion: Our Project Journey',
                1000,
                'Collaborative Projects Making a Difference',
                1000,
                'Explore Our Portfolio of Social Impact',
                1000
              ]}
              wrapper='span'
              speed={50} // Slightly faster typing speed
              deletionSpeed={70} // Slightly faster deletion speed
              style={{
                fontSize: '2em',
                display: 'inline-block',
                // fontWeight: 'bold',
                color: '#ffffff' // Optional: Add a color that matches your theme
              }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactLanding
