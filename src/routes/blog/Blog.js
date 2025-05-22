import React from 'react'
import BlogNav from '../../components/BlogNav'
import BlogImage from '../../assets/blog.png'
import BlogImage1 from '../../assets/blog2.png'

const Blog = () => {
  return (
    <div>
      <BlogNav />
      {
        /* Add your blog content here */
        <section>
          <div className='container'>
            <div className='row mt-5'>
              <div className='col-md-2'></div>
              <div className='col-md-8'>
                <div style={{ marginTop: '100px' }}>
                  <h1 className='fw-bold text-center display-4 playfair-font blog-title'>
                    Down Syndrome Cares c21 Down Syndrome Cares Visited
                  </h1>
                  <img  decoding="async" 
                    width='100%'
                    fill
                    src={BlogImage}
                    alt='Blog'
                    className='img-fluid blog-image'
                  />
                  <p className='blog-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <div className='mb-3'>
                    <button className='btn btn-primary'>Read more ...</button>
                  </div>
                  <span className='blog-date'>
                    <span className='fw-bold'>Date Posted:</span> Friday | 23
                    Aug, 2024
                  </span>{' '}
                  <br />
                  <span>
                    Author: <span className='fw-bold'>Idowu Ariyo</span>
                  </span>
                </div>
              </div>
              <div className='col-md-2'></div>
            </div>
            <div className='row mt-5'>
              <div className='col-md-2'></div>
              <div className='col-md-8'>
                <div style={{ marginTop: '100px' }}>
                  <h1 className='fw-bold text-center display-4 playfair-font blog-title'>
                    Down Syndrome Cares c21 Down Syndrome Cares Visited
                  </h1>
                  <img  decoding="async" 
                    width='100%'
                    fill
                    src={BlogImage}
                    alt='Blog'
                    className='img-fluid blog-image'
                  />
                  <p className='blog-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <div className='mb-3'>
                    <button className='btn btn-primary'>Read more ...</button>
                  </div>
                  <span className='blog-date'>
                    <span className='fw-bold'>Date Posted:</span> Friday | 23
                    Aug, 2024
                  </span>{' '}
                  <br />
                  <span>
                    Author: <span className='fw-bold'>Idowu Ariyo</span>
                  </span>
                </div>
              </div>
              <div className='col-md-2'></div>
            </div>
            <div className='row mt-5'>
              <div className='col-md-2'></div>
              <div className='col-md-8'>
                <div style={{ marginTop: '100px' }}>
                  <h1 className='fw-bold text-center display-4 playfair-font blog-title'>
                    Down Syndrome Cares c21 Down Syndrome Cares Visited
                  </h1>
                  <img  decoding="async" 
                    width='100%'
                    fill
                    src={BlogImage1}
                    alt='Blog'
                    className='img-fluid blog-image'
                  />
                  <p className='blog-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <div className='mb-3'>
                    <button className='btn btn-primary'>Read more ...</button>
                  </div>
                  <span className='blog-date'>
                    <span className='fw-bold'>Date Posted:</span> Friday | 23
                    Aug, 2024
                  </span>{' '}
                  <br />
                  <span>
                    Author: <span className='fw-bold'>Idowu Ariyo</span>
                  </span>
                </div>
              </div>
              <div className='col-md-2'></div>
            </div>
          </div>
        </section>
      }
    </div>
  )
}

export default Blog
