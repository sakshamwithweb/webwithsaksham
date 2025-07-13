import { Github, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
    const data = {
        links: [
            {
                url: "https://github.com/sakshamwithweb",
                icon: <Github />
            },
            {
                url: "https://x.com/webwithsaksham",
                icon: <Twitter />
            },
            {
                url: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
                icon: <Mail />
            },
        ]
    }
    return (
        <footer className='bg-black justify-around py-12 px-8 pb-24 grid grid-cols-4 text-white gap-16'>
            <div className='col-span-2 space-y-4'>
                <h3 className='text-2xl font-bold bg-gradient-to-br from-[#8BBEE8] to-black bg-clip-text text-transparent'>Let's Create Something Amazing</h3>
                <p className='text-gray-400 font-semibold'>Ready to bring your ideas to life? Let's discuss your project and create something extraordinary together.</p>
                <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=I want to start a project!`}><Button className={"text-black rounded-full py-4 px-6 transition-colors hover:bg-black hover:text-white duration-500"} variant={"outline"}>Start a Project</Button></Link>
            </div>
            <div className='space-y-4'>
                <h3 className='font-bold'>Quick Links</h3>
                <ul className='space-y-2'>
                    <li><Link className='text-gray-400 font-semibold transition-colors hover:text-white duration-200' href={""}>About</Link></li>
                    <li><Link className='text-gray-400 font-semibold transition-colors hover:text-white duration-200' href={""}>Work</Link></li>
                    <li><Link className='text-gray-400 font-semibold transition-colors hover:text-white duration-200' href={""}>Services</Link></li>
                    <li><Link className='text-gray-400 font-semibold transition-colors hover:text-white duration-200' href={""}>Contact</Link></li>
                </ul>
            </div>
            <div className='space-y-4'>
                <h3 className='font-bold'>Connect</h3>
                <div className='flex space-x-4'>
                    {data.links.map(({url,icon},index) => {
                        return <Link target='_blank' key={index} href={url} className='transition:all hover:text-blue-300 duration-300'>{icon}</Link>
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer
