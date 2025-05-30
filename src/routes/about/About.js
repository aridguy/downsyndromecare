import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import AboutLanding from '../../chunks/AboutLanding'
import Describe2 from '../../assets/describe1.jpg'
import Describe1 from '../../assets/describe2.jpg'
import Footer from '../../components/Footer'
import { createClient } from 'contentful'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader'
// import { Link, useNavigate } from 'react-router-dom'
// import Socials from '../../chunks/Socials'

const About = () => {
  
  const [visionMissionGoal, setVisionMissionGoal] = useState([])
  const [objectives, setObjectives] = useState([])
  useEffect(() => {
    // achievement section api call
    const missionsVisionsGoal = createClient({
      space: process.env.REACT_APP_GENERAL_SPACE_ID,
      accessToken: process.env.REACT_APP_MISSIONVISIONGOAL_ACCESS_TOKEN
    })
    const fetchMissionAndVisionStatements = async () => {
      try {
        const response = await missionsVisionsGoal.getEntries({
          content_type: 'missionAndVisionStatements'
        })
        setVisionMissionGoal(response.items)
        // console.log('Achievements fetched:', response.items)
      } catch (error) {
        console.error(
          'Error fetching fetch Mission And Vision Statements:',
          error
        )
      }
    }
    // OBJECTIVES API CAL STARTS HERE
    const objectives = createClient({
      space: process.env.REACT_APP_GENERAL_SPACE_ID,
      accessToken: process.env.REACT_APP_OBJECTIVES_ACCESS_TOKEN
    })
    const fetchObjectives = async () => {
      try {
        const response = await objectives.getEntries({
          content_type: 'aimsAndObjectives'
        })
        setObjectives(response.items)
        // console.log('objectives fetched:', response.items)
      } catch (error) {
        console.error(
          'Error fetching fetch Mission And Vision Statements:',
          error
        )
      }
    }
    fetchObjectives()
    fetchMissionAndVisionStatements()
  }, [])

   const [delayed, setDelayed] = useState(true)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      const timer = setTimeout(() => {
        setDelayed(false)
        setLoading(false)
      }, 1000)
      return () => clearTimeout(timer)
    }, [])
  
    if (delayed || loading) return <Loader message="" />
      
  
  return (
    <div>
      <Navbar />
      <AboutLanding />
      {
        // section 1 lets colaborate
        <section className='sect-1' style={{ marginTop: '37em' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <h1 className='playfair-font fw-bolder'>
                  We are Organization that Operates on a Non-Profit Basis
                </h1>
                <p className='mt-4'>
                  A non-profit organization dedicated to supporting individuals
                  with Down syndrome through advocacy, education, and community
                  programs.
                </p>
                <Link to="/contact" className='btn btn-primary mb-4'>Find Out More</Link>
              </div>
              <div className='col-md-6'>
                <img
                style={{borderRadius: "10px"}}
                  decoding='async'
                  rel='preload'
                  loading='lazy'
                  src={Describe1}
                  alt='about us'
                  className='img-fluid'
                />
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
                  style={{borderRadius: "10px"}}
                    decoding='async'
                    rel='preload'
                    loading='lazy'
                    src={visonss.fields.image.fields.file.url}
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
                      {visonss.fields.vision}
                    </small>
                  </div>
                  <div className='mt-3'>
                    <h3 className='playfair-font fw-bolder text-primary'>
                      Mission Statement
                    </h3>
                    <small className='mt-4 text-center'>
                      {visonss.fields.mission}
                    </small>
                  </div>
                  <div className='mt-3'>
                    <h3 className='playfair-font fw-bolder text-primary'>
                      Goals
                    </h3>
                    <small className='mt-4 text-center'>
                      {visonss.fields.goals}
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
        <section className='sect-1' style={{ marginTop: '8em' }}>
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
                  <p className='fw-bold'>{obj.fields.objectiveTitle}</p>
                  <i>{obj.fields.objectiveDescription}</i>
                </div>
              ))}
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
                <Link to="/volunteer" className='btn btn-primary mb-4'>Be a Volunteer</Link>
              </div>
              <div className='col-md-6'>
                <img
                  decoding='async'
                  style={{borderRadius: "10px"}}
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
