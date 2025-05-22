import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logos.png'

const BlogNav = () => {
  return (
    <nav
      style={{
        zIndex: '9999',
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)' // Dark black background with slight transparency
      }}
      className='navbar fixed navbar-expand-lg navbar-dark'
    >
      <div className='container'>
        {/* Logo on the left */}
        <Link className='nav-link' to='/'>
          <img  decoding="async"  rel="preload"  loading="lazy" width='50' src={Logo} fill alt='logo-image' />
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
        {/* Collapsible content with dark background */}
        <div
          className='collapse navbar-collapse justify-content-center'
          id='navbarNavCenter'
          style={{
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)' // Slightly different shade for contrast
          }}
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
              <Link className='nav-link' to='/volunteer'>
                Volunteer
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/projects'>
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

export default BlogNav
