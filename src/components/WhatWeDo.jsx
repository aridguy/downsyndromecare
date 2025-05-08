import React from 'react'

const WhatWeDo = () => {
  const services = [
    {
      icon: '🎓',
      title: 'Inclusive Education',
      description: 'Promoting inclusive learning in schools tailored for every child\'s growth.',
    },
    {
      icon: '🧑‍⚕️',
      title: 'Health & Therapy',
      description: 'Access to quality medical and therapy services for physical and mental well-being.',
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Family Support',
      description: 'Empowering families of children with Down Syndrome through guidance & care.',
    },
    {
      icon: '🤝',
      title: 'Community Inclusions',
      description: 'Building a world where everyone, regardless of ability, belongs.',
    },
    {
      icon: '🌍',
      title: 'Global Partnership',
      description: 'Collaborating with national & international bodies for sustainable impact.',
    },
    {
      icon: '💬',
      title: 'Advocacy & Awareness',
      description: 'Creating public awareness to eliminate stigma and foster empathy.',
    },
  ]

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {services.map((item, index) => (
            <div className="col-md-6 col-lg-4 text-center" key={index}>
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <div style={{ fontSize: '2rem' }}>{item.icon}</div>
                <h5 className="mt-3 fw-bold">{item.title}</h5>
                <p className="mb-0 text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
