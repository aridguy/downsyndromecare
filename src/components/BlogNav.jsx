import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logos.png'

const BlogNav = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const handleNavClick = () => {
    setIsExpanded(false)
  }

  return (
    <nav
      style={{
        zIndex: '9999',
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.9)'
      }}
      className='navbar navbar-expand-lg navbar-dark'
    >
      <div className='container'>
        
        {/* Logo */}
        <Link className='nav-link' to='/' onClick={handleNavClick}>
          <img
            decoding='async'
            loading='lazy'
            width='50'
            src={Logo}
            alt='logo-image'
          />
        </Link>

        {/* Toggle button */}
        <button
          className='navbar-toggler'
          type='button'
          aria-expanded={isExpanded}
          aria-label='Toggle navigation'
          onClick={handleToggle}
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Menu */}
        <div
          className={`collapse navbar-collapse justify-content-center ${
            isExpanded ? 'show' : ''
          }`}
          style={{
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0,0,0,0.7)'
          }}
        >
          <ul className='navbar-nav mb-2 mb-lg-0'>

            <li className='nav-item'>
              <Link className='nav-link' to='/' onClick={handleNavClick}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/about' onClick={handleNavClick}>
                About
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/contact' onClick={handleNavClick}>
                Contact
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/volunteer' onClick={handleNavClick}>
                Volunteer
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/projects' onClick={handleNavClick}>
                Projects
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/articles' onClick={handleNavClick}>
                Articles
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/faq' onClick={handleNavClick}>
                FAQ
              </Link>
            </li>

            {/* Mobile donate */}
            <li className='nav-item d-lg-none mt-3 text-center'>
              <Link
                to='/donation'
                className='btn btn-primary w-100'
                onClick={handleNavClick}
              >
                Donate
              </Link>
            </li>

          </ul>
        </div>

        {/* Desktop donate */}
        <div className='d-none d-lg-block'>
          <Link to='/donation' className='btn btn-primary'>
            Donate
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default BlogNav
