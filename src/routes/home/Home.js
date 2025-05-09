import React from 'react'
import Navbar from '../../components/Navbar'
import { TypeAnimation } from 'react-type-animation'
import Footer from '../../components/Footer'
import Change1 from '../../assets/change1.png'
import Change2 from '../../assets/change2.png'
import Change3 from '../../assets/change3.png'

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
        // SECTION 2
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
                        Promoting inclusive learning <br /> in schools tailored
                        <br />
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
                        Empowering families of <br /> children with Down
                        Syndrome
                        <br />
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
                        Promoting inclusive learning <br /> in schools tailored
                        <br />
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
                        Empowering families of <br /> children with Down
                        Syndrome
                        <br />
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
      {
        // section 3 change the world
        <section style={{ marginTop: '1px' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-md-6 text-center'>
                <h1 className='playfair-font fw-bolder text-center'>
                  Change the world
                </h1>
                <small className='text-center'>
                  Join us in our mission to empower individuals with Down
                  syndrome and promote acceptance, understanding, and love.
                </small>
              </div>
              <div className='col-3'></div>
            </div>
            <div className='row mt-5'>
              <div className='2'></div>
              <div className='8'>
                <div className='row text-center'>
                  <div className='col-6 col-md-4'>
                    <img width='100%' src={Change1} alt='change the world' />
                    <h3 className='playfair-font'>
                      Spreading Joy Through Inclusive Education
                    </h3>
                    <span>
                      Providing adaptive learning tools and trained educators to
                      help children with Down Syndrome thrive in mainstream
                      classrooms.
                    </span>
                  </div>
                  <div className='col-6 col-md-4'>
                    <img width='100%' src={Change2} alt='change the world' />
                    <h3 className='playfair-font'>
                      Support for Families and Caregivers
                    </h3>
                    <span>
                      Offering counseling, peer networks, and parenting
                      workshops tailored for families raising children with Down
                      Syndrome.
                    </span>
                  </div>
                  <div className='col-12 col-md-4'>
                    <img width='100%' src={Change3} alt='change the world' />
                    <h3 className='playfair-font'>
                      Community Drives & Volunteer Programs
                    </h3>
                    <span>
                      Engaging communities to eliminate stigma through outreach,
                      medical aid, and empowerment events across diverse
                      regions.
                    </span>
                  </div>
                </div>
              </div>
              <div className='2'></div>
            </div>
          </div>
        </section>
      }
      {
        // BIG THE CHANGE
        <section className='bg-primary' style={{ marginTop: '7em' }}>
          <div className='container-fluid'>
            <div className='row'>
              <div
                style={{ backgroundImage: '../../assets/change3.png' }}
                className='col-6 volunteer-bg'
              ></div>
              <div
                className='col-md-6 p-5'
                style={{ backgroundColor: '#07263B' }}
              >
                <h3 className='playfair-font fw-bolder text-white mt-5'>
                  Be The Change You Wish <br /> To See In The World
                </h3>
                <h6 className='playfair-font fw-bolder text-white mt-5'>
                  Welfare
                </h6>
                <small className='text-white'>
                  Your support can make a difference. Together, we can create a
                  world <br />
                  where every individual is valued and included.
                </small>
                <h6 className='playfair-font fw-bolder text-white mt-5'>
                  Schooling
                </h6>
                <small className='text-white'>
                  Your support can make a difference. Together, we can create a
                  world <br />
                  where every individual is valued and included.
                </small>
                <div className='d-flex gap-3 mt-5'>
                  <button className='btn btn-primary text-white'>
                    Volunteer Now
                  </button>
                  <button className='btn bg-white text-primary'>
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      {<Footer />}
    </div>
  )
}

export default Home
