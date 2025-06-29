import React, { useEffect, useState } from 'react'
import { FiHeart, FiGlobe, FiCreditCard, FiMail, FiUser } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Loader from '../../components/Loader'
import { createClient } from 'contentful'

const Donation = () => {
  const [success, setSuccess] = useState(false)
  const [changeSuccessContent, setChangeSuccessContent] = useState([])
  const clientSuccess = createClient({
    space: process.env.REACT_APP_GENERAL_SPACE_ID,
    accessToken: process.env.REACT_APP_ACHIEVEMENTS_ACCESS_TOKEN
  })

  useEffect(() => {
    const successUi = async () => {
      try {
        const response = await clientSuccess.getEntries({
          content_type: 'successDonation'
        })
        setChangeSuccessContent(response.items)
        // console.log('Achievements fetched:', response.items)
        // setSuccess(true)
      } catch (error) {
        console.error('Error fetching achievements:', error)
      }
    }

    successUi()
    // clientSuccess()
  }, [clientSuccess]) // Empty dependency array means this runs once on component mount

  const Navigate = useNavigate()
  const [amount, setAmount] = useState(5000)
  const [currency, setCurrency] = useState('NGN')
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    message: ''
  })
  const presetAmounts = [1000, 2000, 5000, 10000, 20000, 50000]
  const currencies = [
    { code: 'NGN', symbol: '₦', name: 'Naira' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'EUR', symbol: '€', name: 'Euro' }
  ]
  const handleInputChange = e => {
    const { name, value } = e.target
    setDonorInfo(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = e => {
    e.preventDefault()
  }

  const handlePaystackPayment = () => {
    if (currency !== 'NGN') {
      Swal.fire({
        icon: 'error',
        title: 'Currency Not Supported',
        text: 'Please select NGN (₦) for donations at this time'
      })
      return
    }

    const handler = window.PaystackPop.setup({
      key: process.env.REACT_APP_PK_KEY,
      email: donorInfo.email,
      amount: amount * 100, // Paystack expects amount in kobo
      currency: currency,
      ref: '' + Math.floor(Math.random() * 1000000000 + 1),
      callback: function (response) {
        // alert('Payment complete! Reference: ' + response.reference)
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
          icon: 'info',
          title: 'Payment completed ' + response.reference
        })
        setSuccess(true)
      },
      onClose: function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 9000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.onmouseenter = Swal.stopTimer
            toast.onmouseleave = Swal.resumeTimer
          }
        })
        Toast.fire({
          icon: 'info',
          title: 'Payment not completed'
        })
      }
    })
    handler.openIframe()
  }

  const [delayed, setDelayed] = useState(true)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayed(false)
      setLoading(false)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  if (delayed || loading)
    return <Loader message='Making sure your donation is safe and sound...' />

  return (
    <div
      className='donation-page min-vh-100 py-5'
      style={{
        backgroundColor: 'orange',
        backgroundImage:
          'url(https://www.cbtkenya.org/wp-content/uploads/2021/05/liv-bruce-odIhQypCuUk-unsplash-1110x630.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='card shadow-lg border-0 rounded-lg overflow-hidden'>
              <div className='row g-0'>
                {/* Left Side - Visual */}
                <div className='col-md-5 d-none d-md-flex bg-primary text-white p-5 align-items-center'>
                  <div>
                    <div className='display-3 mb-3'>
                      <FiHeart className='text-danger' />
                    </div>
                    <h2 className='fw-bold mb-3'>Make a Difference</h2>
                    <p className='lead'>
                      Your generous donation helps us continue our mission and
                      create positive change.
                    </p>
                    <div className='mt-4'>
                      <div className='d-flex align-items-center mb-2'>
                        <div className='bg-white text-primary rounded-circle p-2 me-3'>
                          <FiCreditCard size={20} />
                        </div>
                        <span>Secure payment processing</span>
                      </div>
                      <div className='d-flex align-items-center'>
                        <div className='bg-white text-primary rounded-circle p-2 me-3'>
                          <FiGlobe size={20} />
                        </div>
                        <span className='text-danger'>
                          Currently accepting only NGN donations
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className='col-md-7 bg-white p-5'>
                  <h3 className='fw-bold mb-4 text-center text-md-start'>
                    Support a Good Cause
                  </h3>

                  <form onSubmit={handleSubmit}>
                    {/* Currency Selection */}
                    <div className='mb-4'>
                      <label className='form-label fw-bold'>
                        Select Currency
                      </label>
                      <div className='d-flex flex-wrap gap-2'>
                        {currencies.map(curr => (
                          <button
                            key={curr.code}
                            type='button'
                            className={`btn ${
                              currency === curr.code
                                ? 'btn-primary'
                                : curr.code === 'NGN'
                                ? 'btn-outline-primary'
                                : 'btn-outline-secondary'
                            } rounded-pill position-relative`}
                            onClick={() =>
                              curr.code === 'NGN' && setCurrency(curr.code)
                            }
                            disabled={curr.code !== 'NGN'}
                            title={curr.code !== 'NGN' ? 'Coming soon' : ''}
                          >
                            {curr.symbol} {curr.code}
                            {curr.code !== 'NGN' && (
                              <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark'>
                                Soon
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                      <small className='text-muted'>
                        Only Naira (₦) payments are currently enabled
                      </small>
                    </div>

                    {/* Amount Selection */}
                    <div className='mb-4'>
                      <label className='form-label fw-bold'>
                        Donation Amount
                      </label>
                      <div className='d-flex flex-wrap gap-2 mb-3'>
                        {presetAmounts.map(amt => (
                          <button
                            key={amt}
                            type='button'
                            className={`btn ${
                              amount === amt
                                ? 'btn-primary'
                                : 'btn-outline-primary'
                            } rounded-pill`}
                            onClick={() => setAmount(amt)}
                          >
                            ₦{amt.toLocaleString()}
                          </button>
                        ))}
                      </div>
                      <div className='input-group'>
                        <span className='input-group-text'>₦</span>
                        <input
                          type='number'
                          className='form-control'
                          value={amount}
                          onChange={e =>
                            setAmount(parseInt(e.target.value) || 0)
                          }
                          min='1'
                        />
                      </div>
                    </div>

                    {/* Donor Information */}
                    <div className='mb-4'>
                      <label className='form-label fw-bold'>
                        Your Information
                      </label>
                      <div className='input-group mb-3'>
                        <span className='input-group-text'>
                          <FiUser />
                        </span>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Full Name'
                          name='name'
                          value={donorInfo.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className='input-group mb-3'>
                        <span className='input-group-text'>
                          <FiMail />
                        </span>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='Email Address'
                          name='email'
                          value={donorInfo.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <textarea
                        className='form-control'
                        rows='3'
                        placeholder='Optional message (e.g. dedication)'
                        name='message'
                        value={donorInfo.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handlePaystackPayment}
                      type='submit'
                      className='btn btn-danger w-100 py-3 fw-bold'
                      style={{ backgroundColor: '#ff6b6b', border: 'none' }}
                    >
                      DONATE NOW ₦{amount.toLocaleString()}
                    </button>
                  </form>

                  <div className='mt-4 text-center text-muted small'>
                    <p>All donations are secure and tax-deductible.</p>
                    <p className='mb-0'>
                      We accept: Visa, Mastercard, Verve, Bank Transfer
                    </p>
                    <span
                      onClick={() => {
                        Navigate('/')
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        })
                      }}
                      className='cursor text-primary'
                      style={{ top: '1em', position: 'relative' }}
                    >
                      {' '}
                      - back home -{' '}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {success && (
        <div
          className='position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center'
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.86)',
            zIndex: 9999
          }}
        >
          <div
            className='text-center bg-white p-4 rounded shadow'
            style={{
              maxWidth: '500px',
              width: '90%',
              padding: '8em'
            }}
          >
            <div>
              {changeSuccessContent.map((item, index) => (
                <div key={index}>
                  <img
                    src={item.fields.image.fields.file.url}
                    alt='Thank You'
                    className='img-fluid mb-4'
                    style={{
                      width: '50px',
                      height: '50px',
                      objectFit: 'cover',
                      borderRadius: '50%' // perfect circle
                    }}
                  />

                  <h2 className='text-success'>{item.fields.title}</h2>
                  <p className='lead text-muted'>{item.fields.subtitle}</p>
                </div>
              ))}
            </div>

            <button
              className='btn btn-primary me-2'
              onClick={() => Navigate('/')}
            >
              Go Back Home
            </button>
            <button
              className='btn btn-warning'
              onClick={() => {
                Navigate('/donation')
                setSuccess(false)
              }}
            >
              Make Another Donation
            </button>

            {/* Footer Icons */}
            <div className='mt-4'>
              <ul className='d-flex justify-content-center gap-4 list-unstyled'>
                <li>
                  <a
                    href='https://www.instagram.com/c21downsyndromecarefoundation?igsh=MWYyNDR6aHR0bGlqaQ=='
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-dark fs-5'
                  >
                    <i className='bi bi-instagram'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.facebook.com/share/1CKwxp8vAF/?mibextid=wwXIfr'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-dark fs-5'
                  >
                    <i className='bi bi-facebook'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:c21downsyndromecare@gmail.com'
                    className='text-dark fs-5'
                  >
                    <i className='bi bi-envelope-fill'></i>
                  </a>
                </li>
                <li>
                  <a href='tel:08035881312' className='text-dark fs-5'>
                    <i className='bi bi-telephone-fill'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Donation
