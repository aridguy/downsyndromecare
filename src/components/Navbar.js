import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav
      style={{ zIndex: '9999', position: 'fixed', top: 0, width: '100%' }}
      className='navbar fixed navbar-expand-lg navbar-dark'
    >
      <div className='container'>
        {/* Logo on the left */}
        <Link className='nav-link' to='/'>
          Navbar
        </Link>
        {/* Toggler for small screens */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavCenter'
          aria-controls='navbarNavCenter'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        {/* Collapsible content with light blue transparent background bg-primary bg-opacity-25 rounded-3*/}
        <div
          className='collapse navbar-collapse justify-content-center '
          id='navbarNavCenter'
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <ul className='navbar-nav mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/faq'>
                Volunteer
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/testimonial'>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/blog'>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/faq'>
                FAQ
              </Link>
            </li>
            {/* Donate button for mobile */}
            <li className='nav-item d-lg-none mt-3 text-center'>
              <a href='/' className='btn btn-primary w-100'>
                Donate
              </a>
            </li>
          </ul>
        </div>
        {/* Donate button for large screens */}
        <div className='d-none d-lg-block'>
          <a href='/' className='btn btn-primary'>
            Donate
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
