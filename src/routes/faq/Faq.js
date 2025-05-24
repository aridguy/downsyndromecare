import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import FaqLanding from '../../chunks/FaqLanding'

import Footer from '../../components/Footer'
import { TypeAnimation } from 'react-type-animation'
import Socials from '../../chunks/Socials'
import { createClient } from 'contentful'

const Faq = () => {
  const [faq, setFaq] = useState([])
  useEffect(() => {
    // achievement section api call
    const clientFaq = createClient({
      space: process.env.REACT_APP_GENERAL_SPACE_ID,
      accessToken: process.env.REACT_APP_ACHIEVEMENTS_ACCESS_TOKEN
    })
    const fetchFaq = async () => {
      try {
        const response = await clientFaq.getEntries({
          content_type: 'faq'
        })
        setFaq(response.items)
        // console.log('faq fetched:', response.items)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }
    // API CALLFOR CHANGE THE WORLD ON THE HOME PAGE OF THE APPLICATION
    fetchFaq()
  }, [])
  return (
    <div>
      <Socials />
      <Navbar />
      <FaqLanding />
      {
        // faq section of the application
        <section className='mb-5' style={{ marginTop: '40em' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-12 text-center'>
                {/* {<img  decoding="async" 
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
                  Here are some of the most common questions we receive. <br />If you
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
                <div className='accordion' id='accordionExample'>
                  {faq.map((item, index) => (
                    <div className='accordion-item' key={item.sys.id}>
                      <h2 className='accordion-header' id={`heading-${index}`}>
                        <button
                          className={`accordion-button ${
                            index !== 0 ? 'collapsed' : ''
                          } fw-bold`}
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target={`#collapse-${index}`}
                          aria-expanded={index === 0 ? 'true' : 'false'}
                          aria-controls={`collapse-${index}`}
                        >
                          {item.fields.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse-${index}`}
                        className={`accordion-collapse collapse ${
                          index === 0 ? 'show' : ''
                        }`}
                        aria-labelledby={`heading-${index}`}
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body'>
                          {item.fields.answer}
                        </div>
                      </div>
                    </div>
                  ))}
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
              <div
                className='col-md-6 text-white text-center'
                style={{ color: 'white' }}
              >
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
