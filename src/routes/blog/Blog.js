import React, { useEffect, useState } from 'react'
import BlogNav from '../../components/BlogNav'
// import BlogImage from '../../assets/blog.png'

// import Socials from '../../chunks/Socials'
import { createClient } from 'contentful'
import { useNavigate } from 'react-router-dom'
import ReactImageGallery from 'react-image-gallery'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

const Blog = () => {
  const Navigate = useNavigate('/')
  const [blog, setBlog] = useState([])
  const [blogDetails, setBlogDetails] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState([])
  useEffect(() => {
    // achievement section api call
    const clientBlog = createClient({
      space: process.env.REACT_APP_GENERAL_SPACE_ID,
      accessToken: process.env.REACT_APP_ACHIEVEMENTS_ACCESS_TOKEN
    })
    const fetchBlog = async () => {
      try {
        const response = await clientBlog.getEntries({
          content_type: 'blog'
        })
        setBlog(response.items)
        // console.log('blog fetched:', response.items)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }
    // API CALL FOR CHANGE THE WORLD ON THE HOME PAGE OF THE APPLICATION
    fetchBlog()
  }, [])

  const [delayed, setDelayed] = useState(true)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayed(false)
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (delayed || loading) return <Loader message='' />

  return (
    <div>
      <BlogNav />
      <section style={{ marginBottom: '8em', marginTop: '8em' }}>
        <div className='container'>
          <div className='row justify-content-center'>
            {blog.map((item, index) => (
              <div key={index} className='col-md-10 mb-5'>
                <div className='card shadow border-0 p-4 rounded-4'>
                  {/* Title */}
                  <h2 className='text-center fw-bold playfair-font mb-4 display-5'>
                    {item.fields.blogTitle}
                  </h2>

                  {/* Blog Image */}
                  <div className='text-center mb-4'>
                    <img
                      decoding='async'
                      src={item.fields.blogImage[0]?.fields?.file?.url}
                      alt='Blog'
                      className='img-fluid rounded-3 w-100'
                      style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Description */}
                  <p className='lead text-muted mb-4'>
                    {item.fields.blogDescription.substring(0, 150)}...
                  </p>

                  {/* Read More Button */}
                  <div className='text-center mb-3'>
                    <button
                      className='btn btn-primary px-4'
                      onClick={() => {
                        setSelectedBlog(item)
                        setBlogDetails(true)
                      }}
                    >
                      Read more
                    </button>
                  </div>

                  {/* Metadata */}
                  <div className='d-flex justify-content-between text-muted small mt-2'>
                    <span>
                      <br />
                      <strong>by {item.fields.blogAuthor}</strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {blogDetails && selectedBlog && (
  <div
    className='container-fluid'
    style={{
      background: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: '1rem',
      overflowY: 'auto',
      zIndex: 1000
    }}
  >
    <div className='row justify-content-center'>
      <div className='col-12 col-md-10 col-lg-8 bg-white rounded shadow mt-5 position-relative p-4'>
        {/* Close Button */}
        <div
          className='position-absolute top-0 end-0 m-3 fs-3 fw-bold text-danger'
          onClick={() => setBlogDetails(false)}
          style={{ cursor: 'pointer' }}
        >
          ✕
        </div>

        {/* Title */}
        <h1 className='platfair-font fw-bold text-center'>
          Blog Title: {selectedBlog.fields.blogTitle}
        </h1>
        <hr />

        {/* Image Gallery */}
        <ReactImageGallery
          showPlayButton={false}
          items={selectedBlog.fields.blogImage.map(img => ({
            original: img.fields.file.url,
            thumbnail: img.fields.file.url
          }))}
        />

        {/* Description */}
        <p className='text-center mt-3'>
          {selectedBlog.fields.blogDescription}
        </p>

        {/* Optional Date */}
        {/* <p className='text-center'>
          Date Posted:{' '}
          <b>
            {new Date(
              selectedBlog.fields.blogDatePosted
            ).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </b>
        </p> */}

        {/* Donate Button */}
        <div className='text-center'>
          <button
            onClick={() => Navigate('/donation')}
            className='btn btn-primary mb-3'
          >
            Donate Today!
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      <Footer />
    </div>
  )
}

export default Blog
