import React from 'react'

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <div>Comprehensive solutions for your digital needs</div>
      <div className='services'>
        <div>
            <Icon/>
            <h2>Title</h2>
            <div>Description</div>
            <div className='subtopics'>
                <div>Frontend Application</div>
                <div>Backend Application</div>
            </div>
        </div>
        <div>
            <Icon/>
            <h2>Title</h2>
            <div>Description</div>
            <div className='subtopics'>
                <div>Frontend Application</div>
                <div>Backend Application</div>
            </div>
        </div>
        <div>
            <Icon/>
            <h2>Title</h2>
            <div>Description</div>
            <div className='subtopics'>
                <div>Frontend Application</div>
                <div>Backend Application</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
