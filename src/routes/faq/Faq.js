import React from 'react'
import Navbar from '../../components/Navbar'
import FaqLanding from '../../chunks/FaqLanding'
// import FaqLogo from '../../assets/faq-logo.png'
import Footer from '../../components/Footer'

const Faq = () => {
  return (
    <div>
      <Navbar />
      <FaqLanding />
      {
        // faq section of the application
        <section className='mb-5' style={{ marginTop: '40em' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-12 text-center'>
                {/* {<img
                  loading='lazy'
                  src={FaqLogo}
                  alt='faq logo'
                  className='faq-logo'
                />} */}
                <h1 className='display-1 fw-bolder playfair-font'>
                  Frequently Asked <br /> <b className='text-warning'>Questions</b>
                </h1>
                <p className='lead'>
                  Here are some of the most common questions we receive. If you
                  have any other questions, feel free to reach out!
                </p>
              </div>
            </div>
          </div>
        </section>
      }
      {
        // THE FAQ SECTION BOX
        <section className='mb-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-2'></div>
              <div className='col-md-8 mx-auto'>
                {' '}
                {/* Added mx-auto for horizontal centering */}
                <div className='accordion' id='accordionExample'>
                  {/* Question 1 - About Services */}
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingOne'>
                      <button
                        className='accordion-button fw-bold'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                      >
                        What specialized care do you provide for Down Syndrome?
                      </button>
                    </h2>
                    <div
                      id='collapseOne'
                      className='accordion-collapse collapse show'
                      aria-labelledby='headingOne'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        We offer{' '}
                        <strong>chromosome 21-specific therapies</strong>{' '}
                        including speech development, motor skills training, and
                        cognitive enhancement programs tailored for Trisomy 21
                        individuals from infancy through adulthood.
                      </div>
                    </div>
                  </div>

                  {/* Question 2 - Parent Support */}
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingTwo'>
                      <button
                        className='accordion-button collapsed fw-bold'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                      >
                        How do you support parents of newly diagnosed children?
                      </button>
                    </h2>
                    <div
                      id='collapseTwo'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingTwo'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        Our <strong>First Steps Program</strong> provides
                        genetic counseling, connects families with medical
                        specialists, and offers peer mentoring from experienced
                        parents who've navigated similar journeys.
                      </div>
                    </div>
                  </div>

                  {/* Question 3 - Educational Programs */}
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingThree'>
                      <button
                        className='accordion-button collapsed fw-bold'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                      >
                        Do you offer inclusive education programs?
                      </button>
                    </h2>
                    <div
                      id='collapseThree'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingThree'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        Yes! Our <strong>Bright Minds Initiative</strong>{' '}
                        partners with local schools to create individualized
                        learning plans, train educators, and provide classroom
                        aides to support integration.
                      </div>
                    </div>
                  </div>

                  {/* Question 4 - Medical Assistance */}
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingFour'>
                      <button
                        className='accordion-button collapsed fw-bold'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFour'
                      >
                        Can you help with medical expenses?
                      </button>
                    </h2>
                    <div
                      id='collapseFour'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingFour'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        We maintain a <strong>Health Fund</strong> that
                        subsidizes heart screenings, thyroid tests, and other
                        common Down Syndrome-related medical needs for
                        qualifying families.
                      </div>
                    </div>
                  </div>

                  {/* Question 5 - Volunteer */}
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingFive'>
                      <button
                        className='accordion-button collapsed fw-bold'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFive'
                      >
                        What volunteer opportunities exist?
                      </button>
                    </h2>
                    <div
                      id='collapseFive'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingFive'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        Volunteers can assist as therapy aides, event
                        organizers, or administrative support. We especially
                        need <strong>sign language interpreters</strong> and{' '}
                        <strong>tutoring volunteers</strong> for our education
                        programs.
                      </div>
                    </div>
                  </div>

                  {/* Question 6 - Research */}
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingSix'>
                      <button
                        className='accordion-button collapsed fw-bold'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseSix'
                      >
                        Are you involved in Down Syndrome research?
                      </button>
                    </h2>
                    <div
                      id='collapseSix'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingSix'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        We collaborate with genetic research institutions on{' '}
                        <strong>Chromosome 21 studies</strong> and maintain a
                        participant registry for families interested in
                        contributing to scientific advancements.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-2'></div>
            </div>
          </div>
        </section>
      }
      <Footer />
    </div>
  )
}

export default Faq
