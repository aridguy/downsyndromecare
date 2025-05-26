import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { TypeAnimation } from 'react-type-animation'
import Footer from '../../components/Footer'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Marquee from 'react-fast-marquee'
import CountUp from 'react-countup'
// import Socials from '../../chunks/Socials'
import Projects from '../../assets/icons/projects.png'
import Donation from '../../assets/icons/donation.png'
import Missions from '../../assets/icons/missions.png'
import Volunteers from '../../assets/icons/volunteers.png'
import { createClient } from 'contentful'
import { useNavigate } from 'react-router-dom'

// Inside your component:
const Home = () => {
  const Navigate = useNavigate("/")
  // innitial states
  const [changeContent, setChangeContent] = useState([])
  const [achievements, setAchievements] = useState([])
  const [volunteers, setVolunteers] = useState([])
  const [testimonials, setTestimonials] = useState([])
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
    const AOS = require('aos')
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  useEffect(() => {
    // achievement section api call
    const clientAchievements = createClient({
      space: process.env.REACT_APP_GENERAL_SPACE_ID,
      accessToken: process.env.REACT_APP_ACHIEVEMENTS_ACCESS_TOKEN
    })
    const fetchAchievements = async () => {
      try {
        const response = await clientAchievements.getEntries({
          content_type: 'achievement'
        })
        setAchievements(response.items)
        // console.log('Achievements fetched:', response.items)
      } catch (error) {
        console.error('Error fetching achievements:', error)
      }
    }

    // THIS CALL IS FOR VOLUNTEERS
    const clientVolunteer = createClient({
      space: process.env.REACT_APP_GENERAL_SPACE_ID,
      accessToken: process.env.REACT_APP_VOLUNTEER_ACCESS_TOKEN
    })
    const fetchVolunteers = async () => {
      try {
        const response = await clientVolunteer.getEntries({
          content_type: 'volunteers'
        })
        setVolunteers(response.items)
        // console.log('Volunteer fetched:', response.items)
      } catch (error) {
        console.error('Error fetching volunteers:', error)
      }
    }

    // THIS CALL FOR TESTIMONIALS
    const clientTestimonials = createClient({
      space: process.env.REACT_APP_GENERAL_SPACE_ID,
      accessToken: process.env.REACT_APP_TESTIMONIAL_ACCESS_TOKEN
    })
    const fetchTestimonials = async () => {
      try {
        const response = await clientTestimonials.getEntries({
          content_type: 'testimonial'
        })
        setTestimonials(response.items)
        // console.log('Volunteer fetched:', response.items)
      } catch (error) {
        console.error('Error fetching volunteers:', error)
      }
    }

    // API CALLFOR CHANGE THE WORLD ON THE HOME PAGE OF THE APPLICATION
    const clientChangeTheWorld = createClient({
      space: process.env.REACT_APP_GENERAL_SPACE_ID,
      accessToken: process.env.REACT_APP_CHANGETHEWOLRD_ACCESSTOKEN_API_KEY
    })
    const fetchDataChangeTheWorld = async () => {
      try {
        const response = await clientChangeTheWorld.getEntries({
          content_type: 'changeTheWorld'
        })

        if (response.items.length > 0) {
          // console.log(response.items)
          setChangeContent(response.items)
        }
      } catch (err) {
        console.error('Error fetching content:', err)
        // setError(err.message)
      }
    }

    fetchTestimonials()
    fetchVolunteers()
    fetchAchievements()
    fetchDataChangeTheWorld()
  }, [])

  // FOR TESTIMONIALS

  return (
    <div className=''>
    
      <Navbar />
      {
        <div className='hero-bg'>
          <div className='container mt-5 hero-texts'>
            <div className='row'>
              <div className='col-12 col-md-12 text-center text-white'>
                <h1
                  data-aos='fade-up'
                  data-aos-offset='200'
                  className='display-1 fw-bolder'
                >
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
      }
      {
        // SECTION 2
        <section
          // data-aos='fade-up'
          data-aos-offset='300'
          style={{ marginTop: '37em' }}
        >
          <div className='container'>
            <div className='row'>
              <div className='2'></div>
              <div className='8'>
                <div className='what-we-do-box'>
                  <div className='row'>
                    <div className='col-12 col-md-4 text-center'>
                      <h1>🎓 </h1>
                      <h4  className='playfair-font fw-bolder' >
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
                        Creating public awareness to eliminate <br /> stigma and
                        foster empathy
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
          data-aos-offset='400'
          style={{ marginTop: '1px' }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-md-6 text-center'>
                <h1 className='playfair-font fw-bolder text-center'>
                  {changeContent?.title || 'Change the world'}
                </h1>
                <small className='text-center'>
                  Join us in our mission to empower individuals with Down
                  syndrome and promote acceptance, understanding, and love.
                </small>
              </div>
              <div className='col-3'></div>
            </div>
            <div className='row mt-5'>
              <div className='col-1'></div>
              <div className='col-10'>
                <div className='row text-center'>
                  {changeContent.map((item, index) => {
                    // Safely access nested properties
                    const itemFields = item.fields || item
                    const image = itemFields.image?.fields?.file?.url || ''
                    const altText =
                      itemFields.image?.fields?.title || 'change the world'
                    const heading = itemFields.title || ''
                    const text = itemFields.description || ''
                    return (
                      <div
                        className={
                          index === 2 ? 'col-12 col-md-4' : 'col-6 col-md-4'
                        }
                        key={item.sys.id}
                      >
                        {image && (
                          <img
                            decoding='async'
                            rel='preload'
                            loading='lazy'
                            style={{ width: '100%' }}
                            src={image}
                            alt={altText}
                          />
                        )}
                        <h3 className='playfair-font'>{heading}</h3>
                        <span>{text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='col-1'></div>
            </div>
          </div>
        </section>
      }
      {
        // Be The Change You Wish To See In The World
        <section
          data-aos='fade-up'
          data-aos-offset='500'
          className='bg-primary'
          style={{ marginTop: '7em' }}
        >
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
                  <button onClick={() => {
                    Navigate("/volunteer")
                  }} className='btn btn-primary text-white'>
                    Volunteer Now
                  </button>
                  <button onClick={() => {
                    Navigate("/donation")
                  }} className='btn bg-white text-primary'>
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
        <section data-aos='fade-up' data-aos-offset='600'>
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
                  {volunteers?.map((volunteer, index) => (
                    <div
                      className='text-center'
                      key={volunteer.sys.id || index}
                    >
                      <img
                        decoding='async'
                        src={
                          volunteer.fields?.volunteerImage?.fields?.file?.url
                        }
                        alt='change the world'
                        style={{ width: '90%', height: 'auto' }}
                      />
                      <div className='mt-4'>
                        <h4 className='playfair-font'>
                          {volunteer.fields.volunteerName}
                        </h4>
                        <span>{volunteer.fields.volunteerRole}</span>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className='col-md-1'></div>
            </div>
          </div>
        </section>
      }
      {
        // section 4 | counter things we have achieve
        <section
          data-aos='fade-up'
          data-aos-offset='700'
          className='container-fluid achievements-bg py-5 text-white'
        >
          <div className='container'>
            {achievements?.map((achievement, index) => (
              <div key={achievement.sys.id} className='row text-center'>
                {/* Project Done */}
                <div className='col-md-3 mb-4 d-flex flex-column align-items-center'>
                  <div className='mb-3'>
                    <img
                      decoding='async'
                      width='50'
                      src={Projects}
                      alt='project-icon'
                      className='img-fluid'
                    />
                  </div>
                  <h2 className='display-5 fw-bold mb-2'>
                    <CountUp
                      end={achievement.fields.projectsDone}
                      duration={10}
                    />
                    +
                  </h2>
                  <p className='mb-0'>Projects Done</p>
                </div>
                {/* Volunteers */}
                <div className='col-md-3 mb-4 d-flex flex-column align-items-center'>
                  <div className='mb-3'>
                    <img
                      decoding='async'
                      width='50'
                      src={Volunteers}
                      alt='volunteer-icon'
                      className='img-fluid'
                    />
                  </div>
                  <h2 className='display-5 fw-bold mb-2'>
                    <CountUp
                      end={achievement.fields.volunteers}
                      duration={10}
                    />
                    +
                  </h2>
                  <p className='mb-0'>Volunteers</p>
                </div>

                {/* Missions */}
                <div className='col-md-3 mb-4 d-flex flex-column align-items-center'>
                  <div className='mb-3'>
                    <img
                      decoding='async'
                      width='30'
                      src={Missions}
                      alt='mission-icon'
                      className='img-fluid'
                    />
                  </div>
                  <h2 className='display-5 fw-bold mb-2'>
                    <CountUp end={achievement.fields.missions} duration={10} />
                  </h2>
                  <p className='mb-0'>Missions</p>
                </div>

                {/* Donations */}
                <div className='col-md-3 mb-4 d-flex flex-column align-items-center'>
                  <div className='mb-3'>
                    <img
                      decoding='async'
                      width='30'
                      src={Donation}
                      alt='donation-icon'
                      className='img-fluid'
                    />
                  </div>
                  <h2 className='display-5 fw-bold mb-2'>
                    N
                    <CountUp
                      end={achievement.fields.donations}
                      duration={10}
                      separator=','
                    />
                    +
                  </h2>
                  <p className='mb-0'>Donations</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      }
      {
        // TESTIMONIALS
        <section
          data-aos='fade-up'
          data-aos-offset='800'
          className='mt-5 mb-5'
          style={{ MarginTop: '7em' }}
        >
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
                <Marquee pauseOnHover={true} speed={50} pauseOnClick={true} autoFill={true}>
                  <div className='d-flex gap-3'>
                    {testimonials?.map((testimonial, index) => (
                      <div
                        key={testimonial.sys.id}
                        style={{
                          padding: '2em',
                          width: '17em',
                          height: '300px',
                          backgroundColor: '#07263B',
                          borderRadius: '8px',
                          justifyContent: 'center', // Center horizontally
                          alignItems: 'center', // Center vertically
                          textAlign: 'center', // For additional text alignment
                          color: 'white',
                          // //marginLeft: "1em"
                        }}
                        className='testimonials mx-2'
                      >
                        <img
                          decoding='async'
                          rel='preload'
                          loading='lazy'
                          src={
                            testimonial.fields?.testimonialImage?.fields?.file
                              ?.url
                          }
                          alt='testimonials'
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50px'
                          }}
                        />
                        <p className='playfair-font'>
                          {testimonial.fields.testimonialName}
                        </p>
                        <i>{testimonial.fields.testimonialComment}</i>
                      </div> 
                    ))}
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
