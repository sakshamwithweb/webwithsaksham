import { CheckCircle, Code, Code2Icon, Lightbulb, Palette, TrophyIcon } from 'lucide-react'
import React from 'react'

const Card = ({ icon: Icon, title, description, subServices }) => {
  return (
    <div className='p-8 mb-16 space-y-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300 text-start'>
      <div className='w-16 h-16 rounded-full flex items-center justify-center bg-[#e2ecf5]'><Icon color="#8BBEE8" /></div>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='text-gray-600 font-semibold'>{description}</p>
      {subServices.map((item,index) => {
        return <div key={index} className='flex gap-4 items-center font-semibold'>
          <CheckCircle className='h-5 w-5 text-[#8BBEE8]' />
          <p className='text-gray-600 font-semibold'>
            {item}
          </p>
        </div>
      })}
    </div>
  )
}

const Services = () => {
  return (
    <div id='services' className='scroll-mt-[72px] min-h-[80vh] py-4 px-6 text-center flex flex-col gap-8'>
      <h2 className='text-4xl font-bold'>Services</h2>
      <div className='text-xl font-semibold text-gray-600 max-w-3xl mx-auto leading-relaxed'>Comprehensive solutions for your digital needs</div>
      <div className='achievement-cards grid grid-cols-3 gap-8 my-8'>
        <Card icon={Code2Icon} title={"Web Development"} description={"Custom web applications built with modern frameworks and best practices."} subServices={["Frontend Development", "Backend APIs", "Database Design"]} />
        <Card icon={Palette} title={"UI/UX Design"} description={"User-centered design solutions that enhance engagement and conversion."} subServices={["User Research", "Wireframing", "Prototyping"]} />
        <Card icon={Lightbulb} title={"Tech Consulting"} description={"Strategic guidance to help you make the right technology decisions."} subServices={["Architecture Planning","Technology Stack","Performance Optimization"]} />
      </div>
    </div>
  )
}

export default Services