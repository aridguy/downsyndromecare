import React, { useEffect, useState } from 'react'
import { createClient } from 'contentful'
import CountUp from 'react-countup'

const AchievementsSection = () => {
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    const clientAchievements = createClient({
      space: process.env.REACT_APP_ACHIEVEMENTS_SPACE_ID,
      accessToken: process.env.REACT_APP_ACHIEVEMENTS_ACCESS_TOKEN
    })

    const fetchData = async () => {
      try {
        const response = await clientAchievements.getEntries({
          content_type: 'achievement'
        })
        setAchievements(response)
        console.log("here is the achievement response" + response)
      } catch (error) {
        console.error('Error fetching achievements:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <section
      data-aos='fade-up'
      data-aos-offset='700'
      className='container-fluid achievements-bg py-5 text-white'
    >
      <div className='container'>
        <div className='row text-center'>
          {achievements.map(item => (
            <div
              key={item.id}
              className='col-md-3 mb-4 d-flex flex-column align-items-center'
            >
              <div className='mb-3'>
                <img  decoding="async" 
                  width={item.iconWidth}
                  src={item.icon}
                  alt={item.label}
                  className='img-fluid'
                />
              </div>
              <h2 className='display-5 fw-bold mb-2'>
                {item.currency}
                <CountUp end={item.value} duration={10} separator=',' />
                {item.suffix}
              </h2>
              <p className='mb-0'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
