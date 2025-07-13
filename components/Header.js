import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='fixed z-50 backdrop-blur-md bg-white/30 top-0 w-full'>
      <nav className='flex justify-between px-6 py-4 border-b items-center'>
        <Link href={"#hero"} className='text-2xl font-bold bg-gradient-to-br from-[#8BBEE8] to-black bg-clip-text text-transparent'>Saksham</Link>
        <ul className='flex gap-8 text-lg font-medium'>
          <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#hero"}>Home</Link></li>
          <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#about"}>About</Link></li>
          <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#techstack"}>Tech Stack</Link></li>
          <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#work"}>Projects</Link></li>
          <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#services"}>Services</Link></li>
        </ul>
        <Button className={"rounded-3xl text-lg px-7 py-2 hover:bg-[#2f374a] transition-colors duration-300"}>Contact</Button>
      </nav>
    </header>
  )
}

export default Header
