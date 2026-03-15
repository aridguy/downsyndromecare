import React, { useState, useEffect } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logos.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const handleNavClick = (e, path) => {
    if (window.location.pathname === path) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsExpanded(false)
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
        backgroundColor: scrolled || isExpanded ? '#07263b' : 'transparent',
        backdropFilter: scrolled || isExpanded ? 'blur(8px)' : 'none'
      }}
      className='container-fluid navbar navbar-expand-lg navbar-dark'
    >
      <div className='container'>
        
        {/* Logo */}
        <Link className='nav-link' to='/' onClick={(e)=>handleNavClick(e,'/')}>
          <img
            decoding='async'
            loading='lazy'
            width='50'
            src={Logo}
            alt='logo'
          />
        </Link>

        {/* Mobile Toggle */}
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
        >
          <ul className='navbar-nav mb-2 mb-lg-0'>

            <li className='nav-item'>
              <Link className='nav-link' to='/' onClick={(e)=>handleNavClick(e,'/')}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/about' onClick={(e)=>handleNavClick(e,'/about')}>
                About
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/contact' onClick={(e)=>handleNavClick(e,'/contact')}>
                Contact
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/volunteer' onClick={(e)=>handleNavClick(e,'/volunteer')}>
                Volunteer
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/projects' onClick={(e)=>handleNavClick(e,'/projects')}>
                Projects
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/articles' onClick={(e)=>handleNavClick(e,'/articles')}>
                Articles
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/faq' onClick={(e)=>handleNavClick(e,'/faq')}>
                FAQ
              </Link>
            </li>

            {/* Mobile Donate */}
            <li className='nav-item d-lg-none mt-3 text-center'>
              <Link
                to='/donation'
                className='btn btn-primary w-100'
                onClick={()=>setIsExpanded(false)}
              >
                Donate
              </Link>
            </li>

          </ul>
        </div>

        {/* Desktop Donate */}
        <div className='d-none d-lg-block'>
          <Link to='/donation' className='btn btn-primary'>
            Donate
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
