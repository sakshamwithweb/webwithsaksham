import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MyJourney = () => {
    const data = {
        journey: "Started as a curious learner, evolved into a full-stack developer. I believe in the power of clean code, intuitive design, and meaningful user experiences.",
        skills: [
            "Problem-solving mindset",
            "Continuous learning approach",
            "Collaborative team player"
        ]

    }
    return (
        <div id='myjourney' className='p-4 mb-16 flex'>
            <div className='flex flex-col gap-6 w-full md:w-[50%] p-4'>
                <h1 className='text-3xl md:text-4xl font-bold'>My Journey</h1>
                <p className='font-semibold text-gray-600 text-lg'>{data.journey}</p>
                <div className='skills flex flex-col gap-4'>
                    {data.skills.map((skill,index) => {
                        return <div key={index} className='flex gap-4 items-center text-lg font-semibold'>
                            <CheckCircle className='h-5 w-5 text-[#8BBEE8]' />
                            <p className='text-gray-600'>{skill}</p>
                        </div>
                    })}
                </div>
            </div>
            <div className='w-[50%] hidden md:visible'>
                <Image width={500} height={500} className="w-full h-80 rounded-2xl object-cover" src="/computerSet.png" alt="" />
            </div>
        </div>
    )
}

export default MyJourney
