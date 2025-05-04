import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        {/* Logo on the left */}
        <a className='navbar-brand' href='/'>
          Navbar
        </a>

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

        {/* Collapsible content */}
        <div
          className='collapse navbar-collapse justify-content-center'
          id='navbarNavCenter'
        >
          <ul className='navbar-nav mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Contact{' '}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link ' href='/'>
                Faq
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link ' href='/'>
                Testimonial
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link ' href='/'>
                Blog
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link ' href='/'>
                Career
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link ' href='/'>
                Donations
              </a>
            </li>
            {/* Donate button for mobile - shows inside collapse */}
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
