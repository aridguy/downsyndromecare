import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer
      className=' text-white pt-5 pb-4'
      style={{ background: '#07263B', position: 'absolute', width: '100%' }}
    >
      <div className='container'>
        <div className='row text-md-left'>
          {/* About Us */}
          <div className='col-md-3 col-6 mb-4'>
            <h5 className='text-uppercase mb-3'>About Us</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/' className='text-white text-decoration-none'>
                  Organisation
                </Link>
              </li>
              <li>
                <Link to='/' className='text-white text-decoration-none'>
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          {/* Important Links */}
          <div className='col-md-3 col-6 mb-4'>
            <h5 className='text-uppercase mb-3'>Important Links</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/' className='text-white text-decoration-none'>
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to='/' className='text-white text-decoration-none'>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to='/' className='text-white text-decoration-none'>
                  Donation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className='col-md-3 col-6 mb-4'>
            <h5 className='text-uppercase mb-3'>Legals</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/' className='text-white text-decoration-none'>
                  Privacy / Policy
                </Link>
              </li>
              <li>
                <Link to='/' className='text-white text-decoration-none'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='/' className='text-white text-decoration-none'>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='col-md-3 col-12 mb-4'>
            <h5 className='text-uppercase mb-3'>Newsletter</h5>
            <form>
              <div className='mb-2'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='subscribe to our newsletter'
                />
              </div>
              <button type='submit' className='btn btn-primary w-100'>
                Subscribe
              </button>
            </form>
            <small className='d-block mt-2'>
              Subscribing to our newsletter indicates that you want to get
              frequent information about Chromosome 21 Down Syndrome Care.
            </small>
          </div>
        </div>

        {/* Contact Info */}
        <div className='row text-center text-md-left mt-4'>
          <div className='col-md-3 mb-3'>
            <p>
              <i className='bi bi-telephone-fill me-2'></i>+234 08058518598
            </p>
            <p>
              <i className='bi bi-telephone-fill me-2'></i>+234 08058884312
            </p>
          </div>
          <div className='col-md-3 mb-3'>
            <p>
              <i className='bi bi-envelope-fill me-2'></i>
              info@c21downsyndromecare.org
            </p>
            <p>
              <i className='bi bi-envelope-fill me-2'></i>
              contact@c21downsyndromecare.org
            </p>
          </div>
          <div className='col-md-3 mb-3'>
            <p>
              <i className='bi bi-clock-fill me-2'></i>Mon–Fri: 8am–7pm
            </p>
            <p>
              <i className='bi bi-clock-fill me-2'></i>Sat: 9am–5pm
            </p>
          </div>
          <div className='col-md-3 mb-3'>
            <p>
              <i className='bi bi-geo-alt-fill me-2'></i>Lagos Nigeria
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='text-center mt-4 border-top pt-3'>
          <p className='mb-0'>&copy; Copyright {new Date().getFullYear()}</p>
          <small className='text-grey'></small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
