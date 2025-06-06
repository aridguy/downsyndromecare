import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tel from '../assets/icons/tel.png'
import Time from '../assets/icons/time.png'
import Location from '../assets/icons/location.png'
import Email from '../assets/icons/mail.png'
import { BsInstagram } from 'react-icons/bs'
import { ImFacebook2 } from 'react-icons/im'
import { TfiEmail, TfiHeadphone } from 'react-icons/tfi'
import { subscribeToNewsletter } from '../services/GlobalFunctions'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ text: '', type: '' })
  const handleSubmit = async e => {
    e.preventDefault()

    // Basic validation
    if (!email) {
      setMessage({ text: 'Please enter your email', type: 'error' })
      return
    }
    setIsSubmitting(true)
    setMessage({ text: '', type: '' })
    const { success } = await subscribeToNewsletter(email)
    if (success) {
      setMessage({ text: 'Subscription successful!', type: 'success' })
      setEmail('')
    } else {
      setMessage({
        text: 'Subscription failed. Please try again.',
        type: 'error'
      })
    }

    setIsSubmitting(false)
  }

  return (
    <footer
      className=' text-white pt-5 pb-4'
      style={{ background: '#07263B', position: 'absolute', width: '100%' }}
    >
      <div className='container'>
        <div className='row text-md-left'>
          {/* About Us */}
          <div className='col-md-4 col-6 mb-4'>
            <h5 className='text-uppercase mb-3'>About Us</h5>
            <p>
              Chromosome 21 Down Syndrome Care is a non-profit organization
              dedicated to providing support and resources for individuals with
              Down syndrome and their families. Our mission is to promote
              awareness, acceptance, and inclusion in society.
            </p>
            <ul className='d-flex gap-4 list-unstyled'>
              <li>
                <Link
                  target='_blank'
                  to='https://www.instagram.com/c21downsyndromecarefoundation?igsh=MWYyNDR6aHR0bGlqaQ=='
                  className='text-white text-decoration-none'
                >
                  <BsInstagram />
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  to='https://www.facebook.com/share/1CKwxp8vAF/?mibextid=wwXIfr'
                  className='text-white text-decoration-none'
                >
                  <ImFacebook2 />
                </Link>
              </li>
              <li>
                <a
                  href='mailto:c21downsyndromecare@gmail.com'
                  className='text-white text-decoration-none'
                >
                  <TfiEmail />
                </a>
              </li>
              <li>
                <a
                  href='tel:08035881312'
                  className='text-white text-decoration-none'
                >
                  <TfiHeadphone />{' '}
                  {/* You can also use an icon like <TfiPhone /> */}
                </a>
              </li>
            </ul>
          </div>
          {/* Important Links */}
          <div className='col-md-3  mb-4'>
            <h5 className='text-uppercase mb-3'>important pages</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/' className='text-white text-decoration-none'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' className='text-white text-decoration-none'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/contact' className='text-white text-decoration-none'>
                  Contact
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  to='/projects'
                  className='text-white text-decoration-none'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link to='/blog' className='text-white text-decoration-none'>
                  Blog
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  to='/donation'
                  className='text-white text-decoration-none'
                >
                  Donation
                </Link>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div className='col-md-2  mb-4 '>
            <h5 className='text-uppercase mb-3'>legals</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/privacypolicy' className='text-white text-decoration-none'>
                  Privacy / Policy
                </Link>
              </li>
              <li>
                <Link to='/termsandcondition' className='text-white text-decoration-none'>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className='col-md-3 mb-4'>
            <h5 className='text-uppercase mb-3'>Newsletter</h5>
            <div>
              <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='subscribe to our newsletter'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-primary w-100'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>

              {message.text && (
                <div className={`mt-2 alert alert-${message.type}`}>
                  {message.text}
                </div>
              )}
            </div>
            <small className='d-block mt-2'>
              Subscribing to our newsletter indicates that you want to get
              frequent information about Chromosome 21 Down Syndrome Care.
            </small>
          </div>
        </div>
        {/* Contact Info */}
        <div className='container-fluid text-white py-2'>
          <div className='row text-center text-md-start justify-content-center align-items-center'>
            {/* Phone */}
            <div className=' col-md-3 mb-2 d-flex align-items-center justify-content-center justify-content-md-start'>
              <img
                src={Tel}
                alt='phone icon'
                style={{
                  width: '20px',
                  height: '20px',
                  objectFit: 'contain',
                  marginRight: '10px'
                }}
              />
              <div>
                <small>+234 08058518598</small>
                <br />
                <small>+234 08035881312</small>
              </div>
            </div>

            {/* Email */}
            <div className=' col-md-3 mb-2 d-flex align-items-center justify-content-center justify-content-md-start'>
              <img
                src={Email}
                alt='email icon'
                style={{
                  width: '20px',
                  height: '20px',
                  objectFit: 'contain',
                  marginRight: '10px'
                }}
              />
              <div>
                <small>infos@c21downsyndromecare.org</small>
                <br />
                <small>contact@c21downsyndromecare.org</small>
              </div>
            </div>

            {/* Time */}
            <div className=' col-md-3 mb-2 d-flex align-items-center justify-content-center justify-content-md-start'>
              <img
                src={Time}
                alt='time icon'
                style={{
                  width: '20px',
                  height: '20px',
                  objectFit: 'contain',
                  marginRight: '10px'
                }}
              />
              <div>
                <small>Mon–Friday: 8am – 7pm</small>
                <br />
                <small>Sat: 9am – 5pm</small>
              </div>
            </div>

            {/* Location */}
            <div className='col-md-3 mb-2 d-flex align-items-center justify-content-center justify-content-md-start'>
              <img
                src={Location}
                alt='location icon'
                style={{
                  width: '20px',
                  height: '20px',
                  objectFit: 'contain',
                  marginRight: '10px'
                }}
              />
              <div>
                <small>Lagos Nigeria</small>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}

        <div className='text-center mt-4 border-top pt-3'>
          <p className='mb-0'>&copy; Copyright {new Date().getFullYear()}</p>
          <div>
            <sup className='text-grey mt-5' style={{ marginTop: '3em' }}>
              {/* codeTECHS did it! */}
            </sup>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
