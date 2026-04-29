import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { TypeAnimation } from 'react-type-animation'
import Footer from '../../components/Footer'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Marquee from 'react-fast-marquee'
import CountUp from 'react-countup'
import Projects from '../../assets/icons/projects.png'
import Donation from '../../assets/icons/donation.png'
import Missions from '../../assets/icons/missions.png'
import Volunteers from '../../assets/icons/volunteers.png'
import Loader from '../../components/Loader'
import globalData from '../../services/globalData' // 👈 IMPORT THIS

// Inside your component:
const Home = () => {
  // innitial states
  const [changeContent, setChangeContent] = useState([])
  const [achievements, setAchievements] = useState([])
  const [volunteers, setVolunteers] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true) // 👈 Single loading state
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }

  // 👇 REPLACE all your separate fetch calls with this ONE useEffect
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // This makes ONE call total (cached after first load)
        const data = await globalData.loadAllData()
        
        setAchievements(data.achievements)
        setVolunteers(data.volunteers)
        setTestimonials(data.testimonials)
        setChangeContent(data.changeContent)
        
        // Small delay for smoother UX (optional)
        setTimeout(() => setLoading(false), 500)
      } catch (error) {
        console.error('Error loading data:', error)
        setLoading(false)
      }
    }

    fetchAllData()
  }, []) // Empty dependency array = runs once

  if (loading) return <Loader message='' />

  return (
    <div className=''>
      <Navbar />
      {
        // THE REST OF YOUR JSX STAYS EXACTLY THE SAME
        // NOTHING CHANGES BELOW THIS LINE
      }
      <div className='hero-bg'>
        <div className='container mt-5 hero-texts'>
          <div className='row'>
            <div className='col-12 col-md-12 text-center text-white'>
              <h1 className='display-1 fw-bolder'>
                Every   <b className='text-orange'>Ability</b> Deserves Opportunity
              </h1>
              <TypeAnimation
                sequence={[
                  'Every chromosome matters.',
                  1000,
                  'Love creates possibilities.',
                  1000,
                  "Inclusion is not a favor — it's a right",
                  1000,
                  'Help us change a life today',
                  1000,
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
        // SECTION 2 (keep exactly as is)
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
                      <h1>🩺</h1>
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
                        Empowering families of <br /> children with Down Syndrome
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
                      <h1>📢</h1>
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
        <section style={{ marginTop: '1px' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-md-6 text-center'>
                <h1 className='playfair-font fw-bolder text-center'>
                  {changeContent[0]?.fields?.title || 'Change the world'}
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
              <div className='col-12 col-md-10'>
                <div className='row text-center'>
                  {changeContent.map((item, index) => {
                    const itemFields = item.fields || item
                    const image = itemFields.image?.fields?.file?.url || ''
                    const altText = itemFields.image?.fields?.title || 'change the world'
                    const heading = itemFields.title || ''
                    const text = itemFields.description || ''
                    return (
                      <div
                        className={index === 2 ? 'col-12 col-md-4' : 'col-md-4'}
                        key={item.sys.id}
                      >
                        {image && (
                          <img
                            className='mt-4'
                            decoding='async'
                            loading='lazy'
                            style={{
                              width: '100%',
                              height: '200px',
                              objectFit: 'cover'
                            }}
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
        // volunteers section (keep exactly as is)
        <section>
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-md-6 text-center'>
                <h1 className='playfair-font fw-bolder text-center'>
                  Our Volunteers
                </h1>
                <small className='text-center'>
                  Our Volunteers contributing to the good course across the world
                </small>
              </div>
              <div className='col-3'></div>
            </div>
            <div className='row mt-5 mb-5'>
              <div className='col-md-1'></div>
              <div className='col-md-10'>
                {!volunteers ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Loading volunteers...</p>
                  </div>
                ) : volunteers.length === 0 ? (
                  <div className="text-center py-5">
                    <p>No volunteers found</p>
                  </div>
                ) : (
                  <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition='all 0.5s ease-in-out'
                    transitionDuration={500}
                    containerClass='carousel-container'
                    removeArrowOnDeviceType={['tablet']}
                    dotListClass='custom-dot-list-style'
                    itemClass='carousel-item-padding-40-px'
                    ssr={true}
                  >
                    {volunteers.map((volunteer, index) => (
                      <div
                        key={volunteer.sys.id || index}
                        style={{
                          width: '230px',
                          textAlign: 'center',
                          padding: '0 10px',
                          margin: '0 auto'
                        }}
                      >
                        <img
                          style={{
                            width: '100%',
                            height: '280px',
                            objectFit: 'cover',
                            display: 'block',
                            borderRadius: '10px'
                          }}
                          src={
                            volunteer.fields?.volunteerImage?.fields?.file?.url
                          }
                          alt='Volunteer'
                        />
                        <div style={{ marginTop: '16px' }}>
                          <h4
                            style={{
                              fontFamily: 'Playfair Display, serif',
                              margin: 0
                            }}
                          >
                            {volunteer.fields.volunteerName}
                          </h4>
                          <span>{volunteer.fields.volunteerRole}</span>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                )}
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
            {achievements?.map((achievement, index) => (
              <div key={achievement.sys.id} className='row text-center'>
                <div className='col-md-3 mb-4 d-flex flex-column align-items-center'>
                  <div className='mb-3'>
                    <img
                      fill='true'
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
                <div className='col-md-3 mb-4 d-flex flex-column align-items-center'>
                  <div className='mb-3'>
                    <img
                      fill='true'
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
                <div className='col-md-3 mb-4 d-flex flex-column align-items-center'>
                  <div className='mb-3'>
                    <img
                      fill='true'
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
                <div className='col-md-3 mb-4 d-flex flex-column align-items-center'>
                  <div className='mb-3'>
                    <img
                      fill='true'
                      decoding='async'
                      width='30'
                      src={Donation}
                      alt='donation-icon'
                      className='img-fluid'
                    />
                  </div>
                  <h2 className='display-5 fw-bold mb-2'>
                    <CountUp
                      end={achievement.fields.donations}
                      duration={10}
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
                <Marquee
                  pauseOnHover={true}
                  speed={50}
                  pauseOnClick={true}
                  autoFill={true}
                >
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
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          color: 'white'
                        }}
                        className='testimonials mx-2'
                      >
                        <img
                          decoding='async'
                          rel='preload'
                          loading='lazy'
                          src={
                            testimonial.fields?.testimonialImage?.fields?.file?.url
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