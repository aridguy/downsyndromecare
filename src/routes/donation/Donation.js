import React, { useState } from 'react'
import { FiHeart, FiGlobe, FiCreditCard, FiMail, FiUser } from 'react-icons/fi'

const Donation = () => {
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
    // Paystack integration will go here
    console.log({ amount, currency, donorInfo })
    alert(`Thank you for your donation of ${currency}${amount}!`)
  }
  // Add this to your handleSubmit function
const handlePaystackPayment = () => {
  const handler = window.PaystackPop.setup({
    key: 'YOUR_PUBLIC_KEY',
    email: donorInfo.email,
    amount: amount * 100, // Paystack expects amount in kobo
    currency: currency,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1),
    callback: function(response) {
      alert('Payment complete! Reference: ' + response.reference);
    },
    onClose: function() {
      alert('Payment window closed');
    }
  });
  handler.openIframe();
}

  return (
    <div
      className='donation-page min-vh-100 py-5'
      style={{
        backgroundColor: 'red',
        backgroundImage:
          'url(https://www.cbtkenya.org/wp-content/uploads/2021/05/liv-bruce-odIhQypCuUk-unsplash-1110x630.jpg)', 
          backgroundSize: "cover", backgroundRepeat: "no-repeat"
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
                        <span>Multiple currency support</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className='col-md-7 bg-white p-5'>
                  <h3 className='fw-bold mb-4 text-center text-md-start'>
                    Support Our Cause
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
