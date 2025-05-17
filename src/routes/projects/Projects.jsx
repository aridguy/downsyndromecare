import React from 'react'
import ProjectLanding from '../../chunks/ProjectsLanding'
import Proj1 from '../../assets/pro-a.png'
import Proj2 from '../../assets/pro-b.png'
import Proj3 from '../../assets/pro-c.png'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <ProjectLanding />
      {
        // PROJECT SECTION OF THE APPLICATION
        <section className='mb-5' style={{ marginTop: '37em' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 mt-5 text-center'>
                <img
                  className='mb-4'
                  width='100%'
                  src={Proj1}
                  alt='project-img'
                  fill
                />
                <h3 className='playfair-font'>
                  Donec Dapibus Mauris Id Odio Ornare Tempusduis Sit Amet.{' '}
                </h3>
                <button className='btn btn-primary btn-blobk btn-lg'>
                  See details
                </button>
              </div>
              <div className='col-md-4 mt-5 text-center'>
                <img
                  className='mb-4'
                  width='100%'
                  src={Proj2}
                  alt='project-img'
                  fill
                />
                <h3 className='playfair-font'>
                  Donec Dapibus Mauris Id Odio Ornare Tempusduis Sit Amet.{' '}
                </h3>
                <button className='btn btn-primary btn-blobk btn-lg'>
                  See details
                </button>
              </div>
              <div className='col-md-4 mt-5 text-center'>
                <img
                  className='mb-4'
                  width='100%'
                  src={Proj3}
                  alt='project-img'
                  fill
                />
                <h3 className='playfair-font'>
                  Donec Dapibus Mauris Id Odio Ornare Tempusduis Sit Amet.{' '}
                </h3>
                <button className='btn btn-primary btn-blobk btn-lg'>
                  See details
                </button>
              </div>
            </div>
          </div>
        </section>
      }
      <Footer />
    </div>
  )
}

export default Projects
