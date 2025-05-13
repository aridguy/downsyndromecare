import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { TypeAnimation } from 'react-type-animation'
import Footer from '../../components/Footer'
import Change1 from '../../assets/change1.png'
import Change2 from '../../assets/change2.png'
import Change3 from '../../assets/change3.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Volunteer1 from '../../assets/volunteer1.png'
import Volunteer2 from '../../assets/volunteer2.png'
import Volunteer3 from '../../assets/volunteer3.png'
import Volunteer4 from '../../assets/volunteer4.png'
import Marquee from 'react-fast-marquee'
import Testimonial1 from '../../assets/testimonial.png'
import CountUp from 'react-countup'
import Socials from '../../chunks/Socials'
import Projects from '../../assets/icons/projects.png'
import Donation from '../../assets/icons/donation.png'
import Missions from '../../assets/icons/missions.png'
import Volunteers from '../../assets/icons/volunteers.png'

// import WhatWeDo from '../../components/WhatWeDo'
// import Landing from '../../chunks/Landing'

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
  useEffect(() => {
    // Initialize AOS when component mounts
    const AOS = require('aos')
    AOS.init({
      duration: 1000,
      once: true // Animations happen only once
    })
  }, [])
  return (
    <div className=''>
      <Socials />
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
                      <h1>🤝 </h1>
                      <h4 className='playfair-font fw-bolder'>
                        Community Inclusions
                      </h4>
                      <small>
                        Building a world where everyone, <br /> regardless of
                        ability, belongs
                      </small>
                    </div>
                    <div className='col-12 col-md-4 text-center'>
                      <h1>🌍 </h1>
                      <h4 className='playfair-font fw-bolder'>
                        Global Partnership
                      </h4>
                      <small>
                        Collaborating with national &<br /> and therapy services
                        international
                        <br /> bodies for sustainable impacts
                      </small>
                    </div>
                    <div className='col-12 col-md-4 text-center'>
                      <h1>💬</h1>
                      <h4 className='playfair-font fw-bolder'>
                        Advocacy & Awareness
                      </h4>
                      <small>
                        Creating public awareness to eliminate <br /> stigma and foster
                        empathy
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
        <section
          data-aos='fade-up'
          data-aos-duration='1000'
          style={{ marginTop: '1px' }}
        >
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
      {
        // volunteers section
        <section>
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-md-6 text-center'>
                <h1 className='playfair-font fw-bolder text-center'>
                  Our Volunteers
                </h1>
                <small className='text-center'>
                  Our Volunteers contributing to the good course across the
                  world
                </small>
              </div>
              <div className='col-3'></div>
            </div>
            <div className='row mt-5 mb-5'>
              <div className='col-md-1'></div>
              <div className='col-md-10'>
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000} // Scroll every 3 seconds
                  keyBoardControl={true}
                  customTransition='all 0.5s ease-in-out'
                  transitionDuration={500} // Smooth transition
                  containerClass='carousel-container'
                  removeArrowOnDeviceType={['tablet']}
                  dotListClass='custom-dot-list-style'
                  itemClass='carousel-item-padding-40-px'
                  ssr={true} // Server-side render
                  // showDots={true}
                >
                  <div className='text-center'>
                    <img
                      src={Volunteer1}
                      alt='change the world'
                      style={{ width: '90%', height: 'auto' }}
                    />
                    <div className='mt-4'>
                      <h4 className='playfair-font'>George Fisher </h4>
                      <span>Health care</span>
                    </div>
                  </div>
                  <div className='text-center'>
                    <img
                      src={Volunteer3}
                      alt='change the world'
                      style={{ width: '90%', height: 'auto' }}
                    />
                    <div className='mt-4'>
                      <h4 className='playfair-font'>George Fisher </h4>
                      <span>Health care</span>
                    </div>
                  </div>
                  <div className='text-center'>
                    <img
                      src={Volunteer2}
                      alt='change the world'
                      style={{ width: '90%', height: 'auto' }}
                    />
                    <div className='mt-4'>
                      <h4 className='playfair-font'>Laurel Clerk</h4>
                      <span>Social Worker</span>
                    </div>
                  </div>
                  <div className='text-center'>
                    <img
                      src={Volunteer4}
                      alt='change the world'
                      style={{ width: '90%', height: 'auto' }}
                    />
                    <div className='mt-4'>
                      <h4 className='playfair-font'>Nick Porter </h4>
                      <span>Lawyer</span>
                    </div>
                  </div>
                </Carousel>
              </div>
              <div className='col-md-1'></div>
            </div>
          </div>
        </section>
      }

      {
        // section 4 | counter things we have achieve
        <section className='container-fluid achievements-bg py-5 text-white'>
          <div className='container'>
            <div className='row text-center'>
              {/* Project Done */}
              <div className='col-md-3 mb-4 d-flex flex-column align-items-center'>
                <div className='mb-3'>
                  <img
                    width='50'
                    src={Projects}
                    alt='project-icon'
                    className='img-fluid'
                  />
                </div>
                <h2 className='display-5 fw-bold mb-2'>
                  <CountUp end={120} duration={10} />+
                </h2>
                <p className='mb-0'>Projects Done</p>
              </div>

              {/* Volunteers */}
              <div className='col-md-3 mb-4 d-flex flex-column align-items-center'>
                <div className='mb-3'>
                  <img
                    width='50'
                    src={Volunteers}
                    alt='volunteer-icon'
                    className='img-fluid'
                  />
                </div>
                <h2 className='display-5 fw-bold mb-2'>
                  <CountUp end={300} duration={10} />+
                </h2>
                <p className='mb-0'>Volunteers</p>
              </div>

              {/* Missions */}
              <div className='col-md-3 mb-4 d-flex flex-column align-items-center'>
                <div className='mb-3'>
                  <img
                    width='30'
                    src={Missions}
                    alt='mission-icon'
                    className='img-fluid'
                  />
                </div>
                <h2 className='display-5 fw-bold mb-2'>
                  <CountUp end={85} duration={10} />
                </h2>
                <p className='mb-0'>Missions</p>
              </div>

              {/* Donations */}
              <div className='col-md-3 mb-4 d-flex flex-column align-items-center'>
                <div className='mb-3'>
                  <img
                    width='30'
                    src={Donation}
                    alt='donation-icon'
                    className='img-fluid'
                  />
                </div>
                <h2 className='display-5 fw-bold mb-2'>
                  N<CountUp end={15000} duration={10} separator=',' />+
                </h2>
                <p className='mb-0'>Donations</p>
              </div>
            </div>
          </div>
        </section>
      }

      {
        // TESTIMONIALS
        <section className='mt-5 mb-5' style={{ MarginTop: '7em' }}>
          <div className='container'>
            <div className='row mt-5 mb-5'>
              <div className='col-3'></div>
              <div className='col-md-6 text-center'>
                <h1 className='playfair-font fw-bolder text-center'>
                  Testimonials
                </h1>
                <small className='text-center'>
                  hear what people say about Chromosome 21 Down Syndrome Care
                </small>
              </div>
              <div className='col-3'></div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='col-md-10'>
                <Marquee pauseOnHover={true} speed={50} pauseOnClick={true}>
                  <div className='d-flex gap-3'>
                    <div
                      style={{
                        padding: '2em',
                        width: '17em',
                        height: '300px',
                        backgroundColor: '#07263B',
                        borderRadius: '8px',
                        // display: 'flex', // Enable flexbox
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        textAlign: 'center', // For additional text alignment
                        color: 'white'
                      }}
                      className='testimonials'
                    >
                      <img src={Testimonial1} alt='testimonials' />
                      <p className='playfair-font'>George Fisher </p>
                      <i>
                        "The support and resources provided by Chromosome 21
                        have been invaluable in our journey. We are forever
                        grateful."
                      </i>
                    </div>
                    &nbsp;
                    <div
                      style={{
                        padding: '2em',
                        width: '17em',
                        height: '300px',
                        backgroundColor: '#07263B',
                        borderRadius: '8px',
                        // display: 'flex', // Enable flexbox
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        textAlign: 'center', // For additional text alignment
                        color: 'white'
                      }}
                      className='testimonials'
                    >
                      <img src={Testimonial1} alt='testimonials' />
                      <p className='playfair-font'>George Fisher </p>
                      <i>
                        "The support and resources provided by Chromosome 21
                        have been invaluable in our journey. We are forever
                        grateful."
                      </i>
                    </div>
                    &nbsp;
                    <div
                      style={{
                        padding: '2em',
                        width: '17em',
                        height: '300px',
                        backgroundColor: '#07263B',
                        borderRadius: '8px',
                        // display: 'flex', // Enable flexbox
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        textAlign: 'center', // For additional text alignment
                        color: 'white'
                      }}
                      className='testimonials'
                    >
                      <img src={Testimonial1} alt='testimonials' />
                      <p className='playfair-font'>George Fisher </p>
                      <i>
                        "The support and resources provided by Chromosome 21
                        have been invaluable in our journey. We are forever
                        grateful."
                      </i>
                    </div>
                    &nbsp;
                    <div
                      style={{
                        padding: '2em',
                        width: '17em',
                        height: '300px',
                        backgroundColor: '#07263B',
                        borderRadius: '8px',
                        // display: 'flex', // Enable flexbox
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        textAlign: 'center', // For additional text alignment
                        color: 'white'
                      }}
                      className='testimonials'
                    >
                      <img src={Testimonial1} alt='testimonials' />
                      <p className='playfair-font'>George Fisher </p>
                      <i>
                        "The support and resources provided by Chromosome 21
                        have been invaluable in our journey. We are forever
                        grateful."
                      </i>
                    </div>
                    &nbsp;
                    <div
                      style={{
                        padding: '2em',
                        width: '17em',
                        height: '300px',
                        backgroundColor: '#07263B',
                        borderRadius: '8px',
                        // display: 'flex', // Enable flexbox
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        textAlign: 'center', // For additional text alignment
                        color: 'white'
                      }}
                      className='testimonials'
                    >
                      <img src={Testimonial1} alt='testimonials' />
                      <p className='playfair-font'>George Fisher </p>
                      <i>
                        "The support and resources provided by Chromosome 21
                        have been invaluable in our journey. We are forever
                        grateful."
                      </i>
                    </div>
                    &nbsp;
                  </div>
                </Marquee>
              </div>
              <div className='col-md-1'></div>
            </div>
          </div>
        </section>
      }
      {<Footer />}
    </div>
  )
}

export default Home
