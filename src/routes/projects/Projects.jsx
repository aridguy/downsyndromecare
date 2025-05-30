import React, { useEffect, useState } from 'react'
import ProjectLanding from '../../chunks/ProjectsLanding'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import 'react-image-gallery/styles/css/image-gallery.css'
import ReactImageGallery from 'react-image-gallery'
import { createClient } from 'contentful'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader'
// import Socials from '../../chunks/Socials'

const Projects = () => {
  const Navigate = useNavigate("/")
  const [projects, setProjects] = useState([])
  const [projectDetails, setProjectDetails] = useState(false)
  const [selectedProject, setSelectedProject] = useState([])
  useEffect(() => {
    // achievement section api call
    const clientProject = createClient({
      space: process.env.REACT_APP_GENERAL_SPACE_ID,
      accessToken: process.env.REACT_APP_ACHIEVEMENTS_ACCESS_TOKEN
    })
    const fetchProject = async () => {
      try {
        const response = await clientProject.getEntries({
          content_type: 'projects'
        })
        setProjects(response.items)
        // console.log('projects fetched:', response.items)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }

    // API CALLFOR CHANGE THE WORLD ON THE HOME PAGE OF THE APPLICATION

    fetchProject()
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
      <ProjectLanding />
      {
        // PROJECT SECTION OF THE APPLICATION
        <section className='mb-5' style={{ marginTop: '37em' }}>
          <div className='container'>
            <div className='row'>
              {projects.map((item, index) => (
                <div key={item.sys.id} className='col-md-4 mt-5 text-center'>
                  <div
                    style={{
                      position: 'relative', // Needed for proper image containment
                      width: '100%',
                      aspectRatio: '16/9', // Set your desired aspect ratio (e.g., 16:9, 4:3, 1:1)
                      overflow: 'hidden', // Ensures image doesn't overflow container
                      borderRadius: '8px', // Optional styling
                      backgroundColor: '#f5f5f5' // Shows while image loads
                    }}
                  >
                    <img
                      style={{
                        position: 'relative',
                        width: '100%',
                        // height: '100%',
                        objectFit: 'cover', // This makes the image fill the container
                        // objectPosition: 'center' // Centers the image
                      }}
                      decoding='async'
                      className='mb-4'
                      src={item.fields?.projectImage[0]?.fields?.file?.url}
                      alt='project-img'
                    />
                  </div>
                  <h4> {item.fields.projectTitle.substring(0, 25)}...</h4>
                  <span className='playfair-font'>
                    {item.fields.projectDescription.substring(0, 40)}...
                  </span>{' '}
                  <br />
                  <span>
                    {new Date(item.fields.projectDate).toLocaleDateString(
                      'en-US',
                      {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      }
                    )}
                  </span>
                  {', '}
                  <span>
                    {new Intl.RelativeTimeFormat('en').format(
                      Math.floor(
                        (new Date() - new Date(item.fields.projectDate)) /
                          (1000 * 60 * 60 * 24)
                      ),
                      'day'
                    )}
                  </span>
                  <br />
                  <button
                    className='btn btn-primary btn-block btn-lg'
                    onClick={() => {
                      setSelectedProject(item)
                      setProjectDetails(true)
                      // console.log("Selected project" + item)
                    }}
                  >
                    See details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
      {
        // MORE INFO OF A PROJECT
        projectDetails && (
          <div
            className='container-fluid'
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              position: 'fixed', // Changed from absolute to fixed
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              margin: 0,
              padding: 0,
              overflow: 'hidden',
              zIndex: 1000 // Ensures it stays on top if needed
            }}
          >
            <div className='row'>
              <div className='col-md-2'></div>
              {projectDetails && selectedProject && (
                <div className='col-md-8'>
                  <div
                    className='row'
                    style={{
                      background: 'white',
                      borderTopRightRadius: '10px',
                      borderBottomRightRadius: '10px',
                      width: '100%',
                      marginTop: '5em',
                      overflowY: 'auto',
                      height: 'calc(95vh - 5em)',
                      position: 'relative'
                    }}
                  >
                    <div className='col-md-2'>
                      <div
                        className='cursor'
                        onClick={() => setProjectDetails(false)}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '100px',
                          width: '100px',
                          fontSize: '48px',
                          fontWeight: 'bold',
                          margin: '0 auto'
                        }}
                      >
                        ✕
                      </div>
                    </div>

                    <div className='col-md-8 mt-4 text-center'>
                      <h1 className='platfair-font fw-bold text-center'>
                        Project Title: {selectedProject.fields.projectTitle}
                      </h1>
                      <hr />
                      <ReactImageGallery
                        items={selectedProject.fields.projectImage.map(img => ({
                          original: img.fields.file.url,
                          thumbnail: img.fields.file.url
                        }))}
                      />
                      <p className='text-center'>
                        {selectedProject.fields.projectDescription}
                      </p>
                      <p>
                        Date Posted:{' '}
                        <b>
                          {new Date(
                            selectedProject.fields.projectDate
                          ).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </b>
                      </p>
                      <button onClick={() => {
                        Navigate("/donation")
                      }} className='btn btn-primary mb-4'>
                        Donate
                      </button>
                    </div>
                    <div className='col-md-2'></div>
                  </div>
                </div>
              )}
              <div className='col-md-2'></div>
            </div>
          </div>
        )
      }
      <Footer />
    </div>
  )
}

export default Projects
