import { TrophyIcon } from 'lucide-react'
import React from 'react'

const Card = ({icon:Icon,title,description}) => {
  return (
    <div className='text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <div className='w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-[#e2ecf5] m-auto'><Icon color="#8BBEE8" /></div>
      <div className='text-2xl font-bold'>{title}</div>
      <div className='text-gray-600'>{description}</div>
    </div>
  )
}

const About = () => {
  return (
    <div className='h-[80vh] py-20 px-6 text-center flex flex-col gap-8'>
      <h2 className='text-4xl font-bold'>About Me</h2>
      <div className='text-xl font-semibold text-center text-gray-600 max-w-3xl mx-auto leading-relaxed'>With over 6 years of experience in web development and design, I specialize in creating digital solutions that drive business growth and enhance user experiences.</div>
      <div className='achievement-cards grid grid-cols-3 gap-8'>
        <Card icon={TrophyIcon} title={"Nacho"} description={"Natu natu natu"}/>
        <Card icon={TrophyIcon} title={"Nacho"} description={"Natu natu natu"}/>
        <Card icon={TrophyIcon} title={"Nacho"} description={"Natu natu natu"}/>
      </div>
    </div>
  )
}

export default About
