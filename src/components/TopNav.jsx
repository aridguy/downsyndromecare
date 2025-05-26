import React from 'react'

const TopNav = () => {
  return (
    <div style={{zIndex: '9999', position: 'relative', top: 0, width: '100%'}}>
      <div className='alert alert-warning alert-dismissible fade show' role='alert'>
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    </div>
  )
}

export default TopNav
