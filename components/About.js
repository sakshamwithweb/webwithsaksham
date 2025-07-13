import { Heart, RocketIcon, TrophyIcon } from 'lucide-react'
import React from 'react'

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className='text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <div className='w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-[#e2ecf5] m-auto'><Icon color="#8BBEE8" /></div>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='text-gray-600'>{description}</p>
    </div>
  )
}

const About = () => {
  const data = {
    description:"With over 1 year of experience in web development and design, I specialize in creating digital solutions that drive business growth and enhance user experiences.",
    achievement:[
      {
        icon:TrophyIcon,
        title:"1+ Year",
        description:"Professional Experience"
      },
      {
        icon:RocketIcon,
        title:"10+",
        description:"Projects Completed"
      },
      {
        icon:Heart,
        title:"89%",
        description:"Client Satisfaction"
      },
    ]
  }

  return (
    <div id='about' className='scroll-mt-[12px] h-[80vh] py-20 px-6 text-center flex flex-col gap-8'>
      <h2 className='text-4xl font-bold'>About Me</h2>
      <p className='text-xl font-semibold text-center text-gray-600 max-w-3xl mx-auto leading-relaxed'>{data.description}</p>
      <div className='achievement-cards grid grid-cols-3 gap-8'>
        {data.achievement.map(({title,icon,description},index)=>{
          return <Card key={index} icon={icon} title={title} description={description} />
        })}
      </div>
    </div>
  )
}

export default About
