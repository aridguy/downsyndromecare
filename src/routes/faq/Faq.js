import React from 'react'
import Navbar from '../../components/Navbar'
import FaqLanding from '../../chunks/FaqLanding'
// import FaqLogo from '../../assets/faq-logo.png'
import Footer from '../../components/Footer'
import { TypeAnimation } from 'react-type-animation'
// import CountUp from 'react-countup'
// import Projects from '../../assets/icons/projects.png'
// import Donation from '../../assets/icons/donation.png'
// import Missions from '../../assets/icons/missions.png'
// import Volunteers from '../../assets/icons/volunteers.png'

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
                  Frequently Asked <br />{' '}
                  <b className='text-warning'>Questions</b>
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
      {
        // section 4 | counter things we have achieve
        <section className='container-fluid achievements-bg py-5 text-white'>
          <div className='container'>
            <div className='row text-center'>
              <h1 className='display-3 playfair-font'>
                Making The World A Better Place, <br />
                One Act Of Kindness At A Time
              </h1>
            </div>
            <div className='row text-white'>
              <div className='col-md-3'></div>
              <div className='col-md-6 text-white text-center' style={{color: "white"}}>
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
                    'Sponsor a child with Down syndrome',
                    1000,
                    // New additions from your request:
                    'Making the world a better place, one act of kindness at a time',
                    1000,
                    'Small hands shape big futures—every act plants seeds for change',
                    1000,
                    'Kindness bridges all divides. Be the reason someone believes in goodness',
                    1000,
                    'Hope is built meal by meal, heart by heart',
                    1000,
                    'The world changes in moments: a held hand, a listening ear',
                    1000,
                    'No act is too small when millions join in',
                    1000,
                    'Kindness doesn’t ask for language or borders',
                    1000,
                    'One classroom built, one life healed—this is how love begins',
                    1000,
                    'Behind every statistic is a person waiting to be seen.',
                    1000,
                    'We don’t need superheroes—just everyday heroes choosing compassion',
                    1000
                  ]}
                  wrapper='span'
                  speed={50} // Slightly faster typing speed for better flow
                  deletionSpeed={70} // Smooth backspacing
                 
                  repeat={Infinity}
                />
              </div>
              <div className='col-md-3'></div>
            </div>
          </div>
        </section>
      }
      <Footer />
    </div>
  )
}

export default Faq
