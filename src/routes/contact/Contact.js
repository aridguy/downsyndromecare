import React from 'react'
import Navbar from '../../components/Navbar'
import ContactLanding from '../../chunks/ContactLanding'
import Location from '../../assets/location.png'
import Phone from '../../assets/phone.png'
import Email from '../../assets/mail.png'
import Time from '../../assets/time.png'
import Maps from '../../chunks/Maps'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactLanding />
      <main>
        <div
          style={{
            marginTop: '37em'
          }}
          className='container'
        >
          <div className='row'>
            <div className='col-12 col-md-12 text-center'>
              <h4 className='playfair-font fw-bolder'>Our Location</h4>
              <small>Donec dapibus mauris id odio ornare tempus.</small>
            </div>
          </div>
        </div>
        <div className='container mt-5 text-center'>
          <div className='row'>
            <div className='col-md-3'>
              <img src={Location} alt='location' />
              <h5 className='fw-bolder playfair-font'>Our Location</h5>
              <small>1234 NW Bobcat Lane, St. </small> <br />
              <small>Robert, MO 65584-5678</small>
            </div>
            <div className='col-md-3'>
              <img src={Email} alt='location' />
              <h5 className='fw-bolder playfair-font'>Our Email</h5>
              <small>contact@c21downsyndromcare.org</small> <br />
              <small>Robert, MO 65584-5678</small>
            </div>
            <div className='col-md-3'>
              <img src={Phone} alt='location' />
              <h5 className='fw-bolder playfair-font'>Our Lines</h5>
              <small>+44367596005</small> <br />
              <small>+23488574643, +909069464</small>
            </div>
            <div className='col-md-3'>
              <img src={Time} alt='location' />
              <h5 className='fw-bolder playfair-font'>Our Lines</h5>
              <small>Monday - Friday: 9am - 6 pm</small> <br />
              <small>Weekends: 10:30 am - 6pm</small>
            </div>
          </div>
        </div>
        <div className='container pt-5 mt-5 text-center'>
          <div className='row '>
            <div className='col-12 col-md-12 text-center'>
              <h4 className='playfair-font fw-bolder'>
                Your Feedback Is Much Appreciated!
              </h4>
              <small>Donec dapibus mauris id odio ornare tempus.</small>
            </div>
          </div>
        </div>
        <div className='container mt-5'>
          <div className='row mt-5'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
              <form>
                <p>
                  <small>
                    your name <small className='text-danger'>*</small>
                  </small>{' '}
                  <br />
                  <input
                    className='form-control'
                    style={{ width: '100%' }}
                    type='text'
                    name='name'
                    // placeholder='your name'
                    required
                  />
                </p>
                <p>
                  <small>
                    your email address <small className='text-danger'>*</small>
                  </small>{' '}
                  <br />
                  <input
                    className='form-control'
                    style={{ width: '100%' }}
                    type='email'
                    name='email'
                    // placeholder='your name'
                    required
                  />
                </p>
                <p>
                  <small>
                    topic <small className='text-danger'>*</small>
                  </small>{' '}
                  <br />
                  <input
                    className='form-control'
                    style={{ width: '100%' }}
                    type='text'
                    name='topic'
                    // placeholder='your name'
                    required
                  />
                </p>
                <p>
                  <small>
                    your message <small className='text-danger'>*</small>
                  </small>{' '}
                  <br />
                  <textarea
                    className='form-control'
                    style={{ width: '100%', minHeight: '200px' }}
                    type='text'
                    name='name'
                    // placeholder='your name'
                    required
                  ></textarea>
                </p>
                <button className='btn btn-primary justify-content-center center'>
                  SEND
                </button>
              </form>
            </div>
            <div className='col-md-3'></div>
          </div>
        </div>
      </main>
      <section className=' mt-5'>
        <div className=''>
          <div className='col-md-12'>
            <Maps />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact
