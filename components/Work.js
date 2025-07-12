import React from 'react'

const Work = () => {
  return (
    <div>
      <h1>Featured Work</h1>
      <div>A showcase of my recent projects and achievements</div>
      <div className='x-scroll-projects'>
        <div>
            <div>image</div>
            <h2>title</h2>
            <div>description</div>
            <div className='tech_used'></div>
            <div>view project <Icon/></div>
        </div>
        <div>
            <div>image</div>
            <h2>title</h2>
            <div>description</div>
            <div className='tech_used'></div>
            <div>view project <Icon/></div>
        </div>
        <div>
            <div>image</div>
            <h2>title</h2>
            <div>description</div>
            <div className='tech_used'></div>
            <div>view project <Icon/></div>
        </div>
      </div>
    </div>
  )
}

export default Work
