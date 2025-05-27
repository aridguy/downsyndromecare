import React, { useEffect, useState } from 'react'
import { FiHeart, FiGlobe, FiCreditCard, FiMail, FiUser } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Loader from '../../components/Loader'

const Donation = () => {
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
  // Add this to your handleSubmit function
  const handlePaystackPayment = () => {
    const handler = window.PaystackPop.setup({
      key: 'pk_test_a1015af9fc065137e0b7fbd27f1a962322fd4211',
      email: donorInfo.email,
      amount: amount * 100, // Paystack expects amount in kobo
      currency: currency,
      ref: '' + Math.floor(Math.random() * 1000000000 + 1),
      callback: function (response) {
        alert('Payment complete! Reference: ' + response.reference)
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
      },
      onClose: function () {
        // alert('Payment window closed');
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
    
      if (delayed || loading) return <Loader message="Making sure your donation is safe and sound..." />

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
                        <span>Multiple currency support | coming soon</span>
                      </div>
                      <div className='d-flex align-items-center'>
                        <div className='bg-white text-primary rounded-circle p-2 me-3'>
                          <FiGlobe size={20} />
                        </div>
                        <span className='text-danger'>Donate in naira for now!</span>
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
                                : 'btn-outline-primary'
                            } rounded-pill`}
                            onClick={() => setCurrency(curr.code)}
                          >
                            {curr.symbol} {curr.code}
                          </button>
                        ))}
                      </div>
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
                            {currency === 'NGN' ? '₦' : '$'}
                            {amt.toLocaleString()}
                          </button>
                        ))}
                      </div>
                      <div className='input-group'>
                        <span className='input-group-text'>
                          {currencies.find(c => c.code === currency)?.symbol}
                        </span>
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
                      DONATE NOW {currency === 'NGN' ? '₦' : '$'}
                      {amount.toLocaleString()}
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
                          behavior: 'smooth' // Smooth scrolling
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
    </div>
  )
}

export default Donation
