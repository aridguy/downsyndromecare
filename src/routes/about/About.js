import React from 'react'
import Navbar from '../../components/Navbar'
import AboutLanding from '../../chunks/AboutLanding'
import Describe1 from '../../assets/describe1.png'
import Footer from '../../components/Footer'

const About = () => {
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
                <button className='btn btn-primary mb-4'>Find Out More</button>
              </div>
              <div className='col-md-6'>
                <img rel="preload" loading="lazy" src={Describe1} alt='about us' className='img-fluid' />
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
            <div className='row mt-5'>
              <div className='col-md-6 text-center'>
                <img rel="preload"  loading="lazy" src={Describe1} alt='about us' className='img-fluid' />
              </div>
              <div className='col-md-6 mb-5'>
                <div>
                  <h3 className='playfair-font fw-bolder text-primary'>
                    Vision Statement
                  </h3>
                  <small className='mt-4 text-center'>
                    To be one of the foremost humanitarian setup giving an
                    almost
                    <br /> normal life to persons with down syndrome.
                  </small>
                </div>
                <div className='mt-3'>
                  <h3 className='playfair-font fw-bolder text-primary'>
                    Vision Statement
                  </h3>
                  <small className='mt-4 text-center'>
                    Making life better for persons with down syndrome through
                    compassionate
                    <br />
                    inclusion in the world order, without discrimination.
                  </small>
                </div>
                <div className='mt-3'>
                  <h3 className='playfair-font fw-bolder text-primary'>
                    Goals
                  </h3>
                  <small className='mt-4 text-center'>
                    To achieve testimonies of Down Syndrome persons who are
                    beneficiaries of our foundation, proving to the world
                    through their success stories that Down Syndrome is never a
                    barrier; all living with Down Syndrome can live to their
                    full potentials in life.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      {
        // section 1 lets colaborate
        <section className='sect-1' style={{ marginTop: '8em' }}>
          <div className='container-fluid objectiveBg p-5'>
            <div className='row '>
              <div className='col-smd-12'>
                <h2 className='text-white playfair-font fw-bold'>
                  Our Aims & Objectives
                </h2>
              </div>
            </div>
            <div className='row mt-5 text-white playfair-font'>
              <div className='col-md-3 mt-4'>
                <p className='fw-bold'>Awareness Campaigns</p>
                <i>
                  Develop and execute campaigns to educate the public about Down
                  Syndrome, dispelling myths and promoting understanding and
                  acceptance.
                </i>
              </div>
              <div className='col-md-3 mt-4'>
                <p className='fw-bold'>Right Advocacy</p>
                <i>
                  Advocate for the rights, needs, and inclusion of individuals
                  with Down Syndrome, ensuring access to healthcare, education,
                  and development opportunities.
                </i>
              </div>
              <div className='col-md-3 mt-4'>
                <p className='fw-bold'>Family Support</p>
                <i>
                  Provide support, resources, and information to families of
                  individuals with Down Syndrome, offering guidance throughout
                  their journey.
                </i>
              </div>
              <div className='col-md-3 mt-4'>
                <p className='fw-bold'>Community Engagement</p>
                <i>
                  Engage with communities, schools, and institutions to promote
                  inclusion and foster supportive environments for individuals
                  with Down Syndrome.
                </i>
              </div>
              <div className='col-md-3 mt-4'>
                <p className='fw-bold'>Organizational Collaboration</p>
                <i>
                  Collaborating with other down syndrome organizations, both
                  nationally and internationally, to share knowledge resources
                  and best practice
                </i>
              </div>

              <div className='col-md-3 mt-4'>
                <p className='fw-bold'>Recreational Activities</p>
                <i>
                  Developing Recreational Activities and sport programs that
                  cater to the unique needs and abilities of individuals with
                  down syndrome
                </i>
              </div>
              <div className='col-md-3 mt-4'>
                <p className='fw-bold'>Research Funding</p>
                <i>
                  Raise funds and allocate resources for Down Syndrome research
                  to enhance medical treatments, therapies and interventions.
                </i>
              </div>
              <div className='col-md-3 mt-4'>
                <p className='fw-bold'>Professional Collaboration</p>
                <i>
                  Collaborate with healthcare professionals and educators to
                  improve medical care, early intervention, and educational
                  programs.
                </i>
              </div>
              <div className='col-md-3 mt-4'>
                <p className='fw-bold'>Advocating For Policy Change</p>
                <i>
                  Advocate for policy changes at local, regional and national
                  levels that benefits individuals with down syndrome and
                  promote their rights and welfare
                </i>
              </div>
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
                <h2 className='playfair-font'>Success Of Our <br />Completed Projects</h2>
                <p className='mt-4'>
                  We are proud to have successfully completed numerous projects
                  that have made a positive impact on the lives of individuals
                  with Down syndrome and their families. Our commitment to
                  excellence and dedication to our mission has driven us to
                  achieve significant milestones in our journey.</p>
                  <button className='btn btn-primary' style={{width:"100%"}}>Be a Volunteer!</button>
              </div>
              <div className='col-md-6'>
                <img rel="preload"  loading="lazy" src={Describe1} alt='about us' className='img-fluid' />
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
