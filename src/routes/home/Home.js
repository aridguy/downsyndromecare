import React from 'react'
import Navbar from '../../components/Navbar'
import { TypeAnimation } from 'react-type-animation'
import Footer from '../../components/Footer'
// import WhatWeDo from '../../components/WhatWeDo'
// import Landing from '../../chunks/Landing'

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='hero-bg'>
        <div className='container mt-5 hero-texts'>
          <div className='row'>
            <div className='col-12 col-md-12 text-center text-white'>
              <h1 className='display-1 fw-bolder'>
                We <b className='text-primary'>Rise</b> By Lifting Others
              </h1>
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
      {
        // section 2 what we do
        <section style={{ marginTop: '37em' }}>
          <div className='container'>
            <div className='row'>
              <div className='2'></div>
              <div className='8'>
                <div className='what-we-do-box'>
                  <div className='row'>
                    <div className='col-12 col-md-4 text-center'>
                      <h1>🎓 </h1>
                      <h4 className='playfair-font fw-bolder'>
                        Inclusive Education
                      </h4>
                      <small>
                        Promoting inclusive learning <br /> in schools tailored<br />
                        for every child's growth.
                      </small>
                    </div>
                    <div className='col-12 col-md-4 text-center'>
                      <h1>🧑</h1>
                      <h4 className='playfair-font fw-bolder'>
                        Health & Therapy
                      </h4>
                      <small>
                        Access to quality medical <br /> and therapy services
                        for physical and <br /> mental well-being.
                      </small>
                    </div>
                    <div className='col-12 col-md-4 text-center'>
                      <h1>👨‍👩‍👧</h1>
                      <h4 className='playfair-font fw-bolder'>
                        Family Support
                      </h4>
                      <small>
                        Empowering families of <br /> children with Down Syndrome<br />
                        through guidance & care.
                      </small>
                    </div>
                  </div>
                  <div className='row mt-5'>
                    <div className='col-12 col-md-4 text-center'>
                      <h1>🎓 </h1>
                      <h4 className='playfair-font fw-bolder'>
                        Inclusive Education
                      </h4>
                      <small>
                        Promoting inclusive learning <br /> in schools tailored<br />
                        for every child's growth.
                      </small>
                    </div>
                    <div className='col-12 col-md-4 text-center'>
                      <h1>🧑</h1>
                      <h4 className='playfair-font fw-bolder'>
                        Health & Therapy
                      </h4>
                      <small>
                        Access to quality medical <br /> and therapy services
                        for physical and <br /> mental well-being.
                      </small>
                    </div>
                    <div className='col-12 col-md-4 text-center'>
                      <h1>👨‍👩‍👧</h1>
                      <h4 className='playfair-font fw-bolder'>
                        Family Support
                      </h4>
                      <small>
                        Empowering families of <br /> children with Down Syndrome<br />
                        through guidance & care.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='2'></div>
            </div>
          </div>
        </section>
      }
      {<Footer />}
    </div>
  )
}

export default Home
