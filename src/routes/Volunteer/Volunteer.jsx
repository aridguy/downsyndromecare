import React from 'react'
import Navbar from '../../components/Navbar'
import VolunteerLanding from '../../chunks/VolunteerLanding'
import Footer from '../../components/Footer'

const Volunteer = () => {
  return (
    <div>
      <Navbar />
      <VolunteerLanding />
      {
        // volunteer form section of the application
        <section className='mb-5' style={{ marginTop: '40em' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-12 text-center'>
                <h1 className='display-1 fw-bolder playfair-font'>
                  Volunteer <b className='text-warning'>With Us</b>
                </h1>
                <p className='lead'>
                  Join us in making a difference! Fill out the form below to
                  express your interest in volunteering with us.
                </p>
              </div>
            </div>
            <div className='row volunteerBox'>
              <div className='col-md-2'></div>
              <div
                className='col-md-8'
                style={{
                  borderRadius: '1em',
                  padding: '2em',
                  backgroundColor: '#ffffff',
                  boxShadow: '8px 8px 16px #d9d9d9, -8px -8px 16px #ffffff' // Horizontal, Vertical, Blur, Color
                }}
              >
                <div className='volunteer-form'>
                  <form>
                    {/* Personal Information */}
                    <div className='mb-3'>
                      <label htmlFor='fullName' className='form-label'>
                        Full Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='fullName'
                        name='fullName'
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor='email' className='form-label'>
                        Email Address
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        name='email'
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor='phone' className='form-label'>
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        className='form-control'
                        id='phone'
                        name='phone'
                        required
                      />
                    </div>

                    {/* Origin Details */}
                    <div className='mb-3'>
                      <label htmlFor='stateOfOrigin' className='form-label'>
                        State of Origin
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='stateOfOrigin'
                        name='stateOfOrigin'
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor='lgaOrigin' className='form-label'>
                        Local Government (Origin)
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='lgaOrigin'
                        name='lgaOrigin'
                        required
                      />
                    </div>

                    {/* Residence Details */}
                    <div className='mb-3'>
                      <label htmlFor='stateOfResidence' className='form-label'>
                        State of Residence
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='stateOfResidence'
                        name='stateOfResidence'
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor='lgaResidence' className='form-label'>
                        Local Government (Residence)
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='lgaResidence'
                        name='lgaResidence'
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor='nationality' className='form-label'>
                        Nationality
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='nationality'
                        name='nationality'
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor='address' className='form-label'>
                        Full Address
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='address'
                        name='address'
                        required
                      />
                    </div>

                    {/* Volunteer-Specific Fields */}
                    <div className='mb-3'>
                      <label htmlFor='skills' className='form-label'>
                        Skills/What You Can Offer
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='skills'
                        name='skills'
                        required
                      />
                    </div>

                    <div className='mb-3'>
                      <label htmlFor='motivation' className='form-label'>
                        Why Do You Want to Join Us?
                      </label>
                      <textarea
                        className='form-control'
                        id='motivation'
                        name='motivation'
                        rows='3'
                        required
                        style={{minHeight: "13em"}}
                      ></textarea>
                    </div>

                    {/* Consent Checkboxes */}
                    <div className='mb-3 form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='dataAccuracy'
                        name='dataAccuracy'
                        required
                      />
                      <label
                        className='form-check-label'
                        htmlFor='dataAccuracy'
                      >
                        I confirm that the above information is accurate.
                      </label>
                    </div>
                    <div className='mb-3 form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='newsletterConsent'
                        name='newsletterConsent'
                      />
                      <label
                        className='form-check-label'
                        htmlFor='newsletterConsent'
                      >
                        Send me newsletters and updates about the charity.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type='submit'
                      className='btn btn-primary btn-block btn-lg mt-4 playfair-font'
                    >
                      Join Us!
                    </button>
                  </form>
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

export default Volunteer
