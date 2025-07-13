import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Github, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
    const data = {
        name: "Saksham Goswami",
        roll: "Full Stack Developer",
        description: "I craft digital experiences that seamlessly blend beautiful design with powerful functionality. Passionate about creating solutions that make a real impact.",
        resumeLink: "https://drive.google.com/file/d/1EG3ddDdhO2WlMQnp0dKBjNrfcKWat0Oe/view",
        links: {
            "email": {
                url: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
                icon: <Mail />
            },
            "github": {
                url: "https://github.com/sakshamwithweb",
                icon: <Github />
            },
            "x": {
                url: "https://x.com/webwithsaksham",
                icon: <Twitter />
            },
        },
        image: "/saksham.webp"
    }

    return (
        <div id='hero' className='scroll-mt-[36px] flex flex-col-reverse md:flex-row gap-14 min-h-[90vh] mt-18 p-4 md:p-16 items-center'>
            <div className='h-full w-full md:w-[50%] text-center md:text-left'>
                <div>
                    <p className='text-[#8BBEE8] font-medium text-lg'>Hello, I'm</p>
                    <p className='text-4xl md:text-5xl font-bold mt-4'>{data.name.split(" ")[0]}{" "}<span className='bg-gradient-to-br from-[#8BBEE8] to-black bg-clip-text text-transparent'>{data.name.split(" ")[1]}</span></p>
                    <p className='mt-4 text-2xl md:text-3xl font-light text-gray-600'>{data.roll}</p>
                </div>
                <p className='text-lg mt-8 font-semibold text-gray-600 leading-relaxed md:max-w-lg'>
                    {data.description}
                </p>
                <div className='mt-8 flex flex-col md:flex-row gap-4'>
                    <Link href={"#work"}><Button className={"hover:transition-transform hover:scale-108 duration-300 rounded-full"}>View My Work</Button></Link>
                    <Link target='_blank' href={data.resumeLink}><Button className={"hover:transition-color hover:bg-black hover:text-white duration-400 rounded-full border-black"} variant="outline">Download CV</Button></Link>
                </div>
                <ul className='mt-8 md:mt-12 flex gap-5 justify-center'>
                    {Object.entries(data.links).map(([key, value]) => {
                        return <li key={key}><Link target='_blank' href={value.url}>{value.icon}</Link></li>
                    })}
                </ul>
            </div>
            <div className='w-[80%] md:w-[50%] flex justify-center items-center animate-[float_4s_ease-in-out_infinite]'>
                <Image
                    className='rounded-3xl'
                    src={data.image}
                    width={380}
                    height={500}
                    alt="Picture of the author"
                    priority
                />
            </div>
        </div>
    )
}

export default Hero
