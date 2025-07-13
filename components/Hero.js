import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Github, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
    return (
        <div id='hero' className='scroll-mt-[36px] flex gap-14 min-h-[90vh] mt-18 p-16 items-center'>
            <div className='h-full w-[50%]'>
                <div>
                    <p className='text-[#8BBEE8] font-medium text-lg'>Hello, I'm</p>
                    <p className='text-5xl font-bold mt-4'>Saksham <span className='bg-gradient-to-br from-[#8BBEE8] to-black bg-clip-text text-transparent'>Goswami</span></p>
                    <p className='mt-4 text-2xl md:text-3xl font-light text-gray-600'>Full Stack Developer & UI/UX Designer</p>
                </div>
                <p className='text-lg mt-8 font-semibold text-gray-600 leading-relaxed max-w-lg'>
                    I craft digital experiences that seamlessly blend beautiful design with powerful functionality. Passionate about creating solutions that make a real impact.
                </p>
                <div className='mt-8 flex gap-4'>
                    <Button className={"hover:transition-transform hover:scale-108 duration-300 rounded-full"}>View My Work</Button>
                    <Button className={"hover:transition-color hover:bg-black hover:text-white duration-400 rounded-full border-black"} variant="outline">Download CV</Button>
                </div>
                <div className='mt-12'>
                    <ul className='flex gap-5'>
                        <li><Link target='_blank' href={"https://github.com/sakshamwithweb"}><Github/></Link></li>
                        <li><Link target='_blank' href={"https://x.com/webwithsaksham"}><Twitter/></Link></li>
                        <li><Link href={"mailto:websaksham39@gmail.com"}><Mail/></Link></li>
                    </ul>
                </div>
            </div>
            <div className='w-[50%] flex justify-center items-center animate-[float_4s_ease-in-out_infinite]'>
                <Image
                    className='rounded-3xl'
                    src="/saksham.webp"
                    width={380}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
        </div>
    )
}

export default Hero
