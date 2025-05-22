import React, { useRef } from 'react'
import Navbar from '../../components/Navbar'
import ContactLanding from '../../chunks/ContactLanding'
import Location from '../../assets/location.png'
import Phone from '../../assets/phone.png'
import Email from '../../assets/mail.png'
import Time from '../../assets/time.png'
import Maps from '../../chunks/Maps'
import Footer from '../../components/Footer'
import emailjs from '@emailjs/browser'

// import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.style.zIndex = '1000';
              toast.style.marginTop = '2.7em';
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: 'success',
            title: 'message sent'
          })
          form.current.reset()
        },
        error => {
          alert('Failed to send the message. Please try again.')
        }
      )
  }
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
              <img  decoding="async"  rel="preload"  loading="lazy" src={Location} alt='location' />
              <h5 className='fw-bolder playfair-font'>Our Location</h5>
              <small>1234 NW Bobcat Lane, St. </small> <br />
              <small>Robert, MO 65584-5678</small>
            </div>
            <div className='col-md-3'>
              <img  decoding="async"  rel="preload"  loading="lazy" src={Email} alt='location' />
              <h5 className='fw-bolder playfair-font'>Our Email</h5>
              <small>contact@c21downsyndromcare.org</small> <br />
              <small>Robert, MO 65584-5678</small>
            </div>
            <div className='col-md-3'>
              <img  decoding="async"  rel="preload"  loading="lazy" src={Phone} alt='location' />
              <h5 className='fw-bolder playfair-font'>Our Lines</h5>
              <small>+44367596005</small> <br />
              <small>+23488574643, +909069464</small>
            </div>
            <div className='col-md-3'>
              <img  decoding="async"  rel="preload"  loading="lazy" src={Time} alt='location' />
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
              <form ref={form} onSubmit={sendEmail}>
                <p>
                  <small>
                    your name <small className='text-danger'>*</small>
                  </small>{' '}
                  <br />
                  <input
                    className='form-control'
                    style={{ width: '100%' }}
                    type='text'
                    name='name' // This matches EmailJS template
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
                    name='email' // This matches EmailJS template
                    required
                  />
                </p>
                <p>
                  <small>
                    Subject <small className='text-danger'>*</small>
                  </small>{' '}
                  <br />
                  <input
                    className='form-control'
                    style={{ width: '100%' }}
                    type='text'
                    name='subject' // Changed from 'topic' to match template
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
                    name='message' // Changed from 'name' to match template
                    required
                  ></textarea>
                </p>
                <button
                  type='submit'
                  className='btn btn-primary justify-content-center center'
                >
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
