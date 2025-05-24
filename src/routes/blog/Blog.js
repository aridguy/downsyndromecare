import React, { useEffect, useState } from 'react'
import BlogNav from '../../components/BlogNav'
import BlogImage from '../../assets/blog.png'

import Socials from '../../chunks/Socials'
import { createClient } from 'contentful'
import { useNavigate } from 'react-router-dom'
import ReactImageGallery from 'react-image-gallery'

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

  return (
    <div>
      <Socials />
      <BlogNav />
      {
        /* Add your blog content here */
        <section>
          <div className='container'>
            <div className='row mt-5'>
              <div className='col-md-2'></div>
              {blog.map((item, index) => (
                <div className='col-md-8'>
                  <div style={{ marginTop: '100px' }}>
                    <h1 className='fw-bold text-center display-4 playfair-font blog-title'>
                      {item.fields.blogTitle}
                    </h1>
                    <img
                      decoding='async'
                      width='100%'
                      fill
                      src={BlogImage}
                      alt='Blog'
                      className='img-fluid blog-image'
                    />
                    <h3 className='blog-description'>
                      {item.fields.blogDescription.substring(0, 120)}...
                    </h3>
                    <div className='mb-3'>
                      <button
                        className='btn btn-primary'
                        onClick={() => {
                          setSelectedBlog(item)
                          setBlogDetails(true)
                          // console.log("Selected project" + item)
                        }}
                      >
                        Read more ...
                      </button>
                    </div>
                    <span>
                      {new Date(item.fields.blogDatePosted).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        }
                      )}
                    </span>
                    {', '}
                    <span>
                      {new Intl.RelativeTimeFormat('en').format(
                        Math.floor(
                          (new Date() - new Date(item.fields.blogDatePosted)) /
                            (1000 * 60 * 60 * 24)
                        ),
                        'day'
                      )}
                    </span>
                    <br />
                    <span>
                      Author: <span className='fw-bold'>Idowu Ariyo</span>
                    </span>
                  </div>
                </div>
              ))}

              <div className='col-md-2'></div>
            </div>
          </div>
        </section>
      }
      {
        // MORE INFO OF A PROJECT
        blogDetails && (
          <div
            className='container-fluid'
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              position: 'fixed', // Changed from absolute to fixed
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              margin: 0,
              padding: 0,
              overflow: 'hidden',
              zIndex: 1000 // Ensures it stays on top if needed
            }}
          >
            <div className='row'>
              <div className='col-md-2'></div>
              {blogDetails && selectedBlog && (
                <div className='col-md-8'>
                  <div
                    className='row'
                    style={{
                      background: 'white',
                      borderTopRightRadius: '10px',
                      borderBottomRightRadius: '10px',
                      width: '100%',
                      marginTop: '5em',
                      overflowY: 'auto',
                      height: 'calc(95vh - 5em)',
                      position: 'relative'
                    }}
                  >
                    <div className='col-md-2'>
                      <div
                        className='cursor'
                        onClick={() => {
                          setBlogDetails(false)

                        }}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '100px',
                          width: '100px',
                          fontSize: '48px',
                          fontWeight: 'bold',
                          margin: '0 auto'
                        }}
                      >
                        ✕
                      </div>
                    </div>

                    <div className='col-md-8 mt-4 text-center'>
                      <h1 className='platfair-font fw-bold text-center'>
                        Blog Title: {selectedBlog.fields.blogTitle}
                      </h1>
                      <hr />
                      <ReactImageGallery
                        items={selectedBlog.fields.blogImage.map(img => ({
                          original: img.fields.file.url,
                          thumbnail: img.fields.file.url
                        }))}
                      />
                      <p className='text-center'>
                        {selectedBlog.fields.blogDescription}
                      </p>
                      <p>
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
                      </p>
                      <button
                        onClick={() => {
                          Navigate('/donate')
                        }}
                        className='btn btn-primary mb-4'
                      >
                        Donate Today!
                      </button>
                    </div>
                    <div className='col-md-2'></div>
                  </div>
                </div>
              )}
              <div className='col-md-2'></div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Blog
