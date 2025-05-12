import React from 'react'
import Navbar from '../../components/Navbar'
import AboutLanding from '../../chunks/AboutLanding'
import Describe1 from '../../assets/describe1.png'

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
                <img src={Describe1} alt='about us' className='img-fluid' />
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
                <img src={Describe1} alt='about us' className='img-fluid' />
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
                <h3 className='playfair-font fw-bolder text-primary'>Goals</h3>
                <small className='mt-4 text-center'>
                  To achieve testimonies of Down Syndrome persons who are
                  beneficiaries of our foundation, proving to the world through
                  their success stories that Down Syndrome is never a barrier;
                  all living with Down Syndrome can live to their full
                  potentials in life.
                </small>
              </div>
              </div>
             
            </div>
          </div>
        </section>
      }
    </div>
  )
}

export default About
