import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Navbar from '../../components/Navbar'
import VolunteerLanding from '../../chunks/VolunteerLanding'
import Footer from '../../components/Footer'
import Swal from 'sweetalert2'
import Socials from '../../chunks/Socials'

const Volunteer = () => {
  const [image, setImage] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    stateOfOrigin: '',
    lgaOrigin: '',
    stateOfResidence: '',
    nationality: '',
    address: '',
    skills: '',
    motivation: '',
    cv: null,
    passport: null,
    dataAccuracy: false,
    newsletterConsent: false
  })

  const handleImageChange = e => {
    const file = e.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))
      setFormData({ ...formData, passport: file })
    }
  }

  const handleFileChange = e => {
    setFormData({ ...formData, cv: e.target.files[0] })
  }

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Convert files to base64 for EmailJS
      // const toBase64 = file => new Promise((resolve, reject) => {
      //   const reader = new FileReader();
      //   reader.readAsDataURL(file);
      //   reader.onload = () => resolve(reader.result);
      //   reader.onerror = error => reject(error);
      // });

      // const passportBase64 = formData.passport ? await toBase64(formData.passport) : null;
      // const cvBase64 = formData.cv ? await toBase64(formData.cv) : null;

      // Prepare template parameters
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        stateOfOrigin: formData.stateOfOrigin,
        lgaOrigin: formData.lgaOrigin,
        stateOfResidence: formData.stateOfResidence,
        nationality: formData.nationality,
        address: formData.address,
        skills: formData.skills,
        motivation: formData.motivation,
        dataAccuracy: formData.dataAccuracy ? 'Confirmed' : 'Not Confirmed',
        newsletterConsent: formData.newsletterConsent
          ? 'Subscribed'
          : 'Not Subscribed',
        // passportPhoto: passportBase64,
        // cvFile: cvBase64,
        passportFilename: formData.passport?.name || 'No file',
        cvFilename: formData.cv?.name || 'No file'
      }

      // Send email via EmailJS
      await emailjs.send(
        process.env.REACT_APP_VOLUNTEER_SERVICE_ID, // Replace with your service ID
        process.env.REACT_APP_VOLUNTEER_TEMPLATE_ID, // Replace with your template ID
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Replace with your public key
      )

      setSubmitStatus({
        success: true,
        message: 'Application submitted successfully!'
      })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: toast => {
          toast.onmouseenter = Swal.stopTimer
          toast.onmouseleave = Swal.resumeTimer
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        stateOfOrigin: '',
        lgaOrigin: '',
        stateOfResidence: '',
        nationality: '',
        address: '',
        skills: '',
        motivation: '',
        cv: null,
        passport: null,
        dataAccuracy: false,
        newsletterConsent: false
      })
      setImage(null)
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus({
        success: false,
        message: 'Failed to submit application. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <Socials />
      <Navbar />
      <VolunteerLanding />
      <section className='mb-5' style={{ marginTop: '40em' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 text-center'>
              <h1 className='display-1 fw-bolder playfair-font'>
                Volunteer <b className='text-warning'>With Us</b>
              </h1>
              <p className='lead'>
                Join us in making a difference! Fill out the form below to
                express your interest in volunteering with us.
              </p>
            </div>
          </div>
          <div className='row volunteerBox'>
            <div className='col-md-2'></div>
            <div
              className='col-md-8'
              style={{
                borderRadius: '1em',
                padding: '2em',
                backgroundColor: '#ffffff',
                boxShadow: '8px 8px 16px #d9d9d9, -8px -8px 16px #ffffff'
              }}
            >
              <div className='volunteer-form'>
                <form onSubmit={handleSubmit}>
                  <div className='container'>
                    <div
                      className='row p-4'
                      style={{
                        background: '#f8f9fa',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        marginBottom: '20px'
                      }}
                    >
                      <div className='col-md-6 d-flex align-items-center'>
                        <div style={{ width: '100%' }}>
                          <label
                            style={{
                              display: 'block',
                              position: 'relative',
                              cursor: 'pointer'
                            }}
                          >
                            <input
                              required
                              type='file'
                              name='passport'
                              onChange={handleImageChange}
                              accept='image/*'
                              style={{
                                position: 'absolute',
                                width: '1px',
                                height: '1px',
                                padding: 0,
                                margin: '-1px',
                                overflow: 'hidden',
                                clip: 'rect(0,0,0,0)',
                                border: 0
                              }}
                            />
                            <span
                              style={{
                                display: 'inline-block',
                                padding: '8px 16px',
                                backgroundColor: '#ff9900',
                                color: 'white',
                                borderRadius: '4px',
                                fontSize: '14px',
                                transition: 'background-color 0.3s'
                              }}
                            >
                              Choose File
                            </span>
                            <sup
                              style={{
                                display: 'block',
                                marginTop: '8px',
                                fontSize: '12px',
                                color: '#6c757d'
                              }}
                            >
                              Upload Passport Photograph
                            </sup>
                            <sup>
                              Note: a physical copy might be requested later
                            </sup>
                          </label>
                        </div>
                      </div>
                      <div className='col-md-6 d-flex align-items-center justify-content-end'>
                        {image && (
                          <img
                            className='profilePics'
                            src={image}
                            alt='Preview'
                            style={{
                              width: '100px',
                              height: '100px',
                              borderRadius: '100px',
                              objectFit: 'cover',
                              border: '1px solid #dee2e6'
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className='mb-3'>
                    <label htmlFor='fullName' className='form-label'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='fullName'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='phone' className='form-label'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Origin Details */}
                  <div className='mb-3'>
                    <label htmlFor='stateOfOrigin' className='form-label'>
                      State of Origin
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='stateOfOrigin'
                      name='stateOfOrigin'
                      value={formData.stateOfOrigin}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='lgaOrigin' className='form-label'>
                      Local Government (Origin)
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='lgaOrigin'
                      name='lgaOrigin'
                      value={formData.lgaOrigin}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Residence Details */}
                  <div className='mb-3'>
                    <label htmlFor='stateOfResidence' className='form-label'>
                      State of Residence
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='stateOfResidence'
                      name='stateOfResidence'
                      value={formData.stateOfResidence}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='lgaResidence' className='form-label'>
                      Local Government (Residence)
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='lgaResidence'
                      name='lgaResidence'
                      value={formData.lgaResidence}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='nationality' className='form-label'>
                      Nationality
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='nationality'
                      name='nationality'
                      value={formData.nationality}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='address' className='form-label'>
                      Full Address
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='address'
                      name='address'
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Volunteer-Specific Fields */}
                  <div className='mb-3'>
                    <label htmlFor='skills' className='form-label'>
                      Skills/What You Can Offer
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='skills'
                      name='skills'
                      value={formData.skills}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='motivation' className='form-label'>
                      Why Do You Want to Join Us?
                    </label>
                    <textarea
                      className='form-control'
                      id='motivation'
                      name='motivation'
                      rows='3'
                      value={formData.motivation}
                      onChange={handleChange}
                      required
                      style={{ minHeight: '13em' }}
                    ></textarea>
                  </div>

                  <div className='mt-3'>
                    <label
                      htmlFor='cv'
                      style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        backgroundColor: '#f3a005',
                        color: 'white',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        fontSize: '14px',
                        marginBottom: '4px'
                      }}
                    >
                      Choose File
                      <input
                        id='cv'
                        name='cv'
                        required
                        type='file'
                        accept='.pdf,.doc,.docx'
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                    </label>
                    <br />
                    <sup
                      className='mt-1 text-muted'
                      style={{ fontSize: '12px' }}
                    >
                      Upload your CV (PDF, DOC, DOCX)
                    </sup>
                    <sup>Note: a physical copy might be requested later</sup>
                  </div>

                  {/* Consent Checkboxes */}
                  <div className='mb-3 form-check'>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      id='dataAccuracy'
                      name='dataAccuracy'
                      checked={formData.dataAccuracy}
                      onChange={handleChange}
                      required
                    />
                    <label className='form-check-label' htmlFor='dataAccuracy'>
                      I confirm that the above information is accurate.
                    </label>
                  </div>

                  <div className='mb-3 form-check'>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      id='newsletterConsent'
                      name='newsletterConsent'
                      checked={formData.newsletterConsent}
                      onChange={handleChange}
                    />
                    <label
                      className='form-check-label'
                      htmlFor='newsletterConsent'
                    >
                      Send me newsletters and updates about the charity.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    className='btn btn-primary btn-block btn-lg mt-4 playfair-font'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Join Us!'}
                  </button>

                  {submitStatus && (
                    <div
                      className={`alert mt-3 ${
                        submitStatus.success ? 'alert-success' : 'alert-danger'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div className='col-md-2'></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Volunteer
