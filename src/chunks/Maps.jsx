import React from 'react'
// import MapIcon from '../assets/map.svg'

const Maps = () => {
  return (
    <div className='mt-5 text-center'>
      <div className=''>
        <div className='col-md-12'>
          <iframe
            title='maps'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253691.86237234634!2d3.1987105263723272!3d6.529849811286145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1746546421228!5m2!1sen!2sng'
            width='100%'
            height='350'
            allowFullScreen='allow'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Maps
