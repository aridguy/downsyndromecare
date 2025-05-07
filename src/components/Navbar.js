import React from 'react'
import "../App.css"

const Navbar = () => {
  return (
    <nav style={{ zIndex: '10' }} className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        {/* Logo on the left */}
        <a className="navbar-brand text-white routes" href="/">
          Navbar
        </a>
        {/* Toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavCenter"
          aria-controls="navbarNavCenter"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible content with light blue transparent background bg-primary bg-opacity-25 rounded-3*/}
        <div
          className="collapse navbar-collapse justify-content-center "
          id="navbarNavCenter"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Faq
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Donations
              </a>
            </li>
            {/* Donate button for mobile */}
            <li className="nav-item d-lg-none mt-3 text-center">
              <a href="/" className="btn btn-primary w-100">
                Donate
              </a>
            </li>
          </ul>
        </div>
        {/* Donate button for large screens */}
        <div className="d-none d-lg-block">
          <a href="/" className="btn btn-primary">
            Donate
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar