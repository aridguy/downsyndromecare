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
  const normalizeDate = date => {
    const d = new Date(date)
    d.setHours(0, 0, 0, 0)
    return d
  }

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
                            status === 'Completed'
                              ? '#4caf50'
                              : status === 'Ongoing'
                              ? '#f59e0b'
                              : '#3b82f6',
                          color: '#fff',
                          padding: '4px 10px',
                          borderRadius: '10px',
                          fontSize: '0.75rem',
                          fontWeight: 'bold'
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
                              (normalizeDate(projectDate) -
                                normalizeDate(new Date())) /
                                (1000 * 60 * 60 * 24)
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

      {projectDetails && selectedProject && (
        <div
          className='container'
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            zIndex: 1000,
            overflowY: 'auto',
            padding: '1rem'
          }}
        >
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-8 bg-white rounded shadow p-4 mt-5 position-relative'>
              {/* Close Button */}
              <div
                className='position-absolute top-0 end-0 m-3 fs-3 fw-bold text-danger cursor-pointer'
                onClick={() => setProjectDetails(false)}
                style={{ cursor: 'pointer' }}
              >
                ✕
              </div>

              {/* Title */}
              <h1 className='platfair-font fw-bold text-center text-primary'>
                Project Title: {selectedProject.fields.projectTitle}
              </h1>
              <hr />

              {/* Gallery */}
              <ReactImageGallery
                showPlayButton={false}
                loading='lazy'
                items={selectedProject.fields.projectImage.map(img => ({
                  original: img.fields.file.url,
                  thumbnail: img.fields.file.url
                }))}
              />

              {/* Description */}
              <p className='text-center mt-3'>
                {selectedProject.fields.projectDescription}
              </p>

              {/* Video Button */}
              <p className='text-center'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='video-play-button'
                  href={selectedProject.fields.projectVideoLink}
                >
                  <span></span>
                </a>
              </p>

              {/* Date */}
              <p className='text-center'>
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

              {/* Donate Button */}
              <div className='text-center'>
                <button
                  onClick={() => Navigate('/donation')}
                  className='btn btn-primary mb-3'
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Projects
