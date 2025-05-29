import React, { useState, useEffect } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logos.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle menu toggle
  const handleToggle = () => {
    const nav = document.getElementById('navbarNavCenter')
    const willExpand = !nav.classList.contains('show')
    setIsExpanded(willExpand)

    // Force update the background by toggling a class
    if (willExpand) {
      nav.classList.add('mobile-menu-expanded')
    } else {
      nav.classList.remove('mobile-menu-expanded')
    }
  }

  return (
    <nav
      style={{
        height: '4em',
        zIndex: '9999',
        position: 'fixed',
        top: 0,
        width: '100%',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
        backgroundColor:
          scrolled || isExpanded ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
        backdropFilter: scrolled || isExpanded ? 'blur(8px)' : 'none'
      }}
      className='container-fluid navbar fixed navbar-expand-lg navbar-dark'
    >
      <div className='container'>
        {/* Logo on the left */}
        <Link className='nav-link' to='/'>
          <img
            decoding='async'
            rel='preload'
            loading='lazy'
            width='50'
            src={Logo}
            alt='logo-image'
          />
        </Link>
        {/* Toggler for small screens */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavCenter'
          aria-controls='navbarNavCenter'
          aria-expanded={isExpanded}
          aria-label='Toggle navigation'
          onClick={handleToggle}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        {/* Collapsible content */}
        <div
          className='collapse navbar-collapse justify-content-center'
          id='navbarNavCenter'
          style={{
            transition: 'background-color 0.3s ease'
          }}
        >
          <ul className='navbar-nav mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/'
                onClick={e => {
                  // If already on home page, scroll to top
                  if (window.location.pathname === '/') {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                  setIsExpanded(false)
                }}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/about'
                onClick={() => setIsExpanded(false)}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/contact'
                onClick={() => setIsExpanded(false)}
              >
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/volunteer'
                onClick={() => setIsExpanded(false)}
              >
                Volunteer
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/projects'
                onClick={() => setIsExpanded(false)}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/blog'
                onClick={() => setIsExpanded(false)}
              >
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/faq'
                onClick={() => setIsExpanded(false)}
              >
                FAQ
              </Link>
            </li>
            {/* Donate button for mobile */}
            <li className='nav-item d-lg-none mt-3 text-center'>
              <a
                href='/donation'
                className='btn btn-primary w-100'
                onClick={e => {
                  e.preventDefault()
                  setIsExpanded(false)
                  window.location.href = '/donation'
                }}
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
        {/* Donate button for large screens */}
        <div className='d-none d-lg-block'>
          <a href='/donation' className='btn btn-primary'>
            Donate
          </a>
        </div>
      </div>

      {/* Add this CSS to your App.css */}
      <style jsx>{`
        #navbarNavCenter.mobile-menu-expanded {
          background-color: rgba(0, 0, 0, 0.95) !important;
        }
        @media (max-width: 991.98px) {
          #navbarNavCenter.collapsing,
          #navbarNavCenter.show {
            background-color: rgba(0, 0, 0, 0.95);
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
