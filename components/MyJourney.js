import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MyJourney = () => {
    return (
        <div className='p-4 flex'>
            <div className='flex flex-col gap-6 w-[50%] p-4'>
                <h1 className='text-4xl font-bold'>My Journey</h1>
                <p className='font-semibold text-gray-600 text-lg'>Started as a curious designer, evolved into a full-stack developer. I believe in the power of clean code, intuitive design, and meaningful user experiences.</p>
                <div className='skills flex flex-col gap-4'>
                    <div className='flex gap-4 items-center text-lg font-semibold'>
                        <CheckCircle className='h-5 w-5 text-[#8BBEE8]'/>
                        <p>
                            Problem-solving mindset
                        </p>
                    </div>
                    <div className='flex gap-4 items-center text-lg font-semibold'>
                        <CheckCircle className='h-5 w-5 text-[#8BBEE8]'/>
                        <p>
                            Continuous learning approach
                        </p>
                    </div>
                    <div className='flex gap-4 items-center text-lg font-semibold'>
                        <CheckCircle className='h-5 w-5 text-[#8BBEE8]'/>
                        <p>
                            Collaborative team player
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[50%]'>
                <Image width={500} height={500} className="w-full h-80 rounded-2xl object-cover" src="/computerSet.png" alt=""/>
            </div>
        </div>
    )
}

export default MyJourney
