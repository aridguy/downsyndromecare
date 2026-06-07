import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import ContactLanding from '../../chunks/ContactLanding'
import Phone from '../../assets/phone.png'
import Email from '../../assets/mail.png'
import Time from '../../assets/time.png'
import Footer from '../../components/Footer'
import Swal from 'sweetalert2'
import Loader from '../../components/Loader'

const Contact = () => {
  const [delayed, setDelayed] = useState(true)
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayed(false)
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Formspree submission handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target)
    
    try {
      const response = await fetch('https://formspree.io/f/mpqepndl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.style.zIndex = '1000'
            toast.style.marginTop = '2.7em'
            toast.onmouseenter = Swal.stopTimer
            toast.onmouseleave = Swal.resumeTimer
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Message sent successfully!'
        })
        e.target.reset() // Clear the form
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to send message')
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to send the message. Please try again.',
        confirmButtonColor: '#3085d6'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (delayed || loading) return <Loader message='' />

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
              <small>Conveniently located with full accessibility.</small>
            </div>
          </div>
        </div>
        <div className='container mt-5 text-center'>
          <div className='row'>
            <div className='col-md-4 mt-4'>
              <img
                decoding='async'
                rel='preload'
                loading='lazy'
                src={Email}
                alt='email icon'
              />
              <h5 className='fw-bolder playfair-font'>Our Email</h5>
              <small>contact@c21downsyndromcare.org</small> <br />
            </div>
            <div className='col-md-4 mt-4'>
              <img
                decoding='async'
                rel='preload'
                loading='lazy'
                src={Phone}
                alt='phone icon'
              />
              <h5 className='fw-bolder playfair-font'>Our Lines</h5>
              <small>+234 803 9518 058</small> <br />
              <small>+234 703 3691 388</small>
            </div>
            <div className='col-md-4 mt-4'>
              <img
                decoding='async'
                rel='preload'
                loading='lazy'
                src={Time}
                alt='time icon'
              />
              <h5 className='fw-bolder playfair-font'>Opening Hours</h5>
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
            </div>
          </div>
        </div>
        <div className='container mt-5'>
          <div className='row mt-5'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
              <form onSubmit={handleSubmit}>
                <p>
                  <small>
                    Your Name <small className='text-danger'>*</small>
                  </small>{' '}
                  <br />
                  <input
                    className='form-control'
                    style={{ width: '100%' }}
                    type='text'
                    name='name'
                    required
                  />
                </p>
                <p>
                  <small>
                    Your Email Address <small className='text-danger'>*</small>
                  </small>{' '}
                  <br />
                  <input
                    className='form-control'
                    style={{ width: '100%' }}
                    type='email'
                    name='email'
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
                    name='subject'
                    required
                  />
                </p>
                <p>
                  <small>
                    Your Message <small className='text-danger'>*</small>
                  </small>{' '}
                  <br />
                  <textarea
                    className='form-control'
                    style={{ width: '100%', minHeight: '200px' }}
                    name='message'
                    required
                  ></textarea>
                </p>
                <button
                  type='submit'
                  className='btn btn-primary justify-content-center center'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND'}
                </button>
              </form>
            </div>
            <div className='col-md-3'></div>
          </div>
        </div>
      </main>
      <section className='mt-5'>
        <div className=''>
          <div className='col-md-12'>
            {/* Your content here */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact