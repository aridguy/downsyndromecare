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
  const Navigate = useNavigate('/')
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

  if (delayed || loading) return <Loader message='' />

  return (
    <div>
      <Navbar />
      <ProjectLanding />

      <section className='mb-5' style={{ marginTop: '37em' }}>
        <div className='container'>
          <div className='row'>
            {projects.map((item, index) => {
              const title = item.fields.projectTitle || ''
              const description = item.fields.projectDescription || ''
              const status = item.fields.projectStatus || 'Completed' // default status
              const projectDate = new Date(item.fields.projectDate)

              return (
                <div
                  key={item.sys.id}
                  className='col-md-4 mt-5 d-flex justify-content-center'
                >
                  <div
                    className='card shadow-sm border-0'
                    style={{
                      width: '100%',
                      maxWidth: '360px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      transition: 'transform 0.3s'
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '16/9',
                        overflow: 'hidden'
                      }}
                    >
                      <img
                        src={item.fields?.projectImage[0]?.fields?.file?.url}
                        alt='project-img'
                        decoding='async'
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          backgroundColor:
                            status === 'Completed' ? '#4caf50' : '#f59e0b',
                          color: '#fff',
                          padding: '4px 10px',
                          borderRadius: '10px',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          // textTransform: 'uppercase'
                        }}
                      >
                        {status}
                      </span>
                    </div>

                    <div className='card-body text-center'>
                      <h5 className='card-title fw-bold'>
                        {title.length > 30
                          ? `${title.substring(0, 30)}...`
                          : title}
                      </h5>
                      <p className='card-text text-muted playfair-font'>
                        {description.length > 60
                          ? `${description.substring(0, 60)}...`
                          : description}
                      </p>
                      <div className='mb-3'>
                        <small className='text-secondary'>
                          {projectDate.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                          {' • '}
                          {new Intl.RelativeTimeFormat('en', {
                            numeric: 'auto'
                          }).format(
                            Math.floor(
                              (new Date() - projectDate) / (1000 * 60 * 60 * 24)
                            ),
                            'day'
                          )}
                        </small>
                      </div>
                      <button
                        className='btn btn-primary btn-sm w-100'
                        onClick={() => {
                          setSelectedProject(item)
                          setProjectDetails(true)
                        }}
                      >
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

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
                      <h1 className='platfair-font fw-bold text-center text-primary'>
                        Project Title: {selectedProject.fields.projectTitle}
                      </h1>
                      <hr />
                      <ReactImageGallery
                        showPlayButton={false}
                        loading='lazy'
                        items={selectedProject.fields.projectImage.map(img => ({
                          original: img.fields.file.url,
                          thumbnail: img.fields.file.url
                        }))}
                      />
                      <p className='text-center'>
                        {selectedProject.fields.projectDescription}
                      </p>
                      <p className='play-project-video'>
                        <a
                          target='_blank'
                          id='play-video'
                          rel='noReferrer'
                          class='video-play-button'
                          href={selectedProject.fields.projectVideoLink}
                          data-toggle='modal'
                          data-target='#savoybeachhotel'
                        >
                          <span></span>
                        </a>
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
                      <button
                        onClick={() => {
                          Navigate('/donation')
                        }}
                        className='btn btn-primary mb-4'
                      >
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
