import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import AboutLanding from '../../chunks/AboutLanding'
import Describe2 from '../../assets/describe1.jpg'
// import Describe1 from '../../assets/describe2.jpg'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader'
import Carousel from 'react-multi-carousel'
import globalData from '../../services/globalData' // 👈 IMPORT globalData
// import { Link, useNavigate } from 'react-router-dom'
// import Socials from '../../chunks/Socials'

const About = () => {
  const [team, setTeam] = useState([])
  const [visionMissionGoal, setVisionMissionGoal] = useState([])
  const [objectives, setObjectives] = useState([])
  const [loading, setLoading] = useState(true)

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
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  // 👇 REPLACED all separate API calls with ONE unified fetch from cache
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // This uses the SAME cached data from Home page - NO new API calls!
        const data = await globalData.loadAllData()
        
        // Filter team from volunteers (or use a separate team content type)
        // If your About page uses 'team' content type, we need to handle it
        // For now, I'm assuming 'team' data comes from volunteers or a separate fetch
        setVisionMissionGoal(data.visionMissionGoal || [])
        setObjectives(data.objectives || [])
        setTeam(data.team || [])
        
        // Small delay for smoother UX
        setTimeout(() => setLoading(false), 500)
      } catch (error) {
        console.error('Error loading data:', error)
        setLoading(false)
      }
    }

    fetchAllData()
  }, [])

  if (loading) return <Loader message='' />

  return (
    <div>
      <Navbar />
      <AboutLanding />
      {
        // section 1 lets colaborate
        <section className='sect-1' style={{ marginTop: '39em' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <h1 className='playfair-font fw-bolder'>
                  Empowering Every Voice | Chromosome 21 Down Syndrome Care
                </h1>
                <p className='mt-4'>
                  We are a nonprofit organization dedicated to uplifting individuals with Down syndrome through education, advocacy, and community support.
                </p>
                <p className='mt-4'>
                  At Chromosome 21 Down Syndrome Care, we believe that every person deserves dignity, opportunity, and a voice that’s heard. Our mission is to foster inclusion, celebrate abilities, and build a world where differences are embraced—not just accepted.
                </p>
                <p className='mt-4'>
                  Through outreach programs, family support, and awareness campaigns, we stand beside individuals with Down syndrome and their families—amplifying their strengths and advocating for their rights.
                </p>
                <p className='mt-4'>Whether  you’re a parent, educator, ally, or advocate, there's a place for you here.</p>
                <div>
                  <p>Join us in creating a more inclusive tomorrow. </p>
                  <Link to='/volunteer' className='btn btn-primary mb-4 mt-4'>
                    Volunteer
                  </Link> &nbsp;
                  <Link to='/Donation' className='btn btn-primary mb-4 mt-4'>
                    Donate
                  </Link>
                </div>
              </div>
              <div className='col-md-6'>
                <div
                  style={{
                    width: "100%",
                    maxWidth: "900px",
                    margin: "40px auto",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    position: "relative",
                    background: "linear-gradient(135deg, #0f172a, #1e293b)",
                    padding: "10px"
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%", // 16:9 ratio
                      height: 0,
                      borderRadius: "15px",
                      overflow: "hidden"
                    }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/HYPKhdf34Zc"
                      title="The Birth of C21 Down Syndrome Care"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "15px"
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Optional caption */}
                  <div
                    style={{
                      marginTop: "12px",
                      color: "#e2e8f0",
                      fontSize: "14px",
                      textAlign: "center",
                      letterSpacing: "0.5px"
                    }}
                  >
                    🌟 The Birth of C21 Down Syndrome Care | Our Story Begins
                  </div>
                </div>
                {/* <img
                  style={{ borderRadius: '10px' }}
                  decoding='async'
                  rel='preload'
                  loading='lazy'
                  src={Describe1}
                  alt='about us'
                  className='img-fluid'
                /> */}
              </div>
            </div>
          </div>
        </section>
      }

      {
        // section 1 lets colaborate
        <section className='sect-1' style={{ marginTop: '8em' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3 className='playfair-font fw-bolder text-center'>
                  Chromosome 21 Down Syndrome Care <br /> Mission & Vision
                  Statements
                </h3>
                <small className='mt-4 text-center'>
                  Our mission is to provide comprehensive support and resources
                  for <br /> individuals with Down syndrome and their families.
                </small>
              </div>
            </div>
            {visionMissionGoal?.map((visonss, index) => (
              <div key={visonss.sys.id || index} className='row mt-5'>
                <div className='col-md-6 text-center'>
                  <img
                    style={{ borderRadius: '10px' }}
                    decoding='async'
                    rel='preload'
                    loading='lazy'
                    src={visonss.fields?.image?.fields?.file?.url || visonss.fields?.image?.fields?.file?.url}
                    alt='about us'
                    className='img-fluid'
                  />
                </div>
                <div className='col-md-6 mb-5'>
                  <div>
                    <h3 className='playfair-font fw-bolder text-primary'>
                      Vision Statement
                    </h3>
                    <small className='mt-4 text-center'>
                      {visonss.fields?.vision}
                    </small>
                  </div>
                  <div className='mt-3'>
                    <h3 className='playfair-font fw-bolder text-primary'>
                      Mission Statement
                    </h3>
                    <small className='mt-4 text-center'>
                      {visonss.fields?.mission}
                    </small>
                  </div>
                  <div className='mt-3'>
                    <h3 className='playfair-font fw-bolder text-primary'>
                      Goals
                    </h3>
                    <small className='mt-4 text-center'>
                      {visonss.fields?.goals}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      }

      {
        // section 1 lets colaborate
        <section className='sect-1' style={{ marginTop: '2em' }}>
          <div className='container-fluid objectiveBg p-5'>
            <div className='row '>
              <div className='col-md-12'>
                <h2 className='text-white playfair-font fw-bold'>
                  Our Aims & Objectives
                </h2>
              </div>
            </div>
            <div className='row mt-5 text-white playfair-font'>
              {objectives?.map((obj, index) => (
                <div key={obj.sys.id || index} className='col-md-3 mt-4'>
                  <p className='fw-bold'>{obj.fields?.objectiveTitle}</p>
                  <i>{obj.fields?.objectiveDescription}</i>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
      {
        // volunteers section
        <section>
          <div className='container mt-5' style={{ marginBottom: '6em' }}>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-md-6 text-center'>
                <h1 className='playfair-font fw-bolder text-center text-warning'>
                  Meet the Heart of Our Mission
                </h1>
                <small className='text-center'>
                  Dedicated volunteers and team members driving meaningful
                  change across the world
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
                  {team?.map((member, index) => (
                    <div
                      key={member.sys.id || index}
                      style={{
                        width: '230px', // Fixed width for each item
                        textAlign: 'center',
                        padding: '0 10px', // Adds horizontal spacing
                        margin: '0 auto' // Centers the item in the carousel slide
                      }}
                    >
                      <img
                        decoding='async'
                        src={member.fields?.teamImage?.fields?.file?.url || member.fields?.volunteerImage?.fields?.file?.url}
                        alt='Team Member'
                        style={{
                          width: '100%',
                          height: '280px',
                          objectFit: 'cover',
                          display: 'block',
                          borderRadius: '10px'
                        }}
                      />
                      <div style={{ marginTop: '16px' }}>
                        <h4
                          style={{
                            fontFamily: 'Playfair Display, serif',
                            margin: 0
                          }}
                        >
                          {member.fields?.teamName || member.fields?.volunteerName}
                        </h4>
                        <span>{member.fields?.teamPosition || member.fields?.volunteerRole}</span>
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
        // section 1 lets colaborate
        <section className='sect-1 mb-5' style={{ marginTop: '3em' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <h2 className='playfair-font'>
                  Success Of Our <br />
                  Completed Projects
                </h2>
                <p className='mt-4'>
                  We are proud to have successfully completed numerous projects
                  that have made a positive impact on the lives of individuals
                  with Down syndrome and their families. Our commitment to
                  excellence and dedication to our mission has driven us to
                  achieve significant milestones in our journey.
                </p>
                <Link to='/volunteer' className='btn btn-primary mb-4'>
                  Be a Volunteer
                </Link>
                &nbsp;
                <Link to='/projects' className='btn btn-primary mb-4'>
                  Find Out More
                </Link>
              </div>
              <div className='col-md-6'>
                <img
                  decoding='async'
                  style={{ borderRadius: '10px' }}
                  rel='preload'
                  loading='lazy'
                  src={Describe2}
                  alt='about us'
                  className='img-fluid mt-4'
                />
              </div>
            </div>
          </div>
        </section>
      }
      <Footer />
    </div>
  )
}

export default About