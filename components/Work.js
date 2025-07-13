"use client"
import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const Work = () => {
  const railRef = useRef(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const { scrollLeft, scrollWidth, clientWidth } = rail;
      const atStart = scrollLeft === 0;
      const atEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;

      if ((e.deltaY < 0 && !atStart) || (e.deltaY > 0 && !atEnd)) {
        e.preventDefault();
        rail.scrollBy({ left: e.deltaY, behavior: "smooth" });
      }
    };

    rail.addEventListener("wheel", onWheel, { passive: false });
    return () => rail.removeEventListener("wheel", onWheel);
  }, []);

  const Card = () => {
    return (
      <div className='group flex flex-col w-[40vw] shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 pb-8 '>
        <div className='img p-2 w-full overflow-hidden rounded-2xl'>
          <Image className='rounded-2xl w-full h-64 object-cover transition-transform group-hover:scale-110 duration-700' src={"/computerSet.png"} width={400} height={200} alt='something' />
        </div>
        <div className='info flex flex-col gap-4'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold py-5'>E-Commerce Platform</h2>
            <Link target='_blank' href={""}><SquareArrowOutUpRight className='transition-all group-hover:scale-120 duration-200' color='#8BBEE8' /></Link>
          </div>
          <div className='text-gray-600 font-semibold'>Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.</div>
          <div className='tech_used flex'>
            <p className='m-3 text-sm font-semibold'>React</p>
            <p className='m-3 text-sm font-semibold'>Node.js</p>
            <p className='m-3 text-sm font-semibold'>MongoDB</p>
            <p className='m-3 text-sm font-semibold'>Stripe</p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='p-8 flex flex-col gap-12 mb-16'>
      <h1 className="text-4xl font-bold">Featured Work</h1>
      <p className='text-gray-600 text-xl font-semibold'>A showcase of my recent projects and achievements</p>
      <div ref={railRef} className="flex overflow-x-auto space-x-4 px-4 py-6  snap-x snap-mandatory scrollbar-hide">
        <div className="snap-start shrink-0">
          <Card />
        </div>
        <div className="snap-start shrink-0">
          <Card />
        </div>
        <div className="snap-start shrink-0">
          <Card />
        </div>
        <div className="snap-start shrink-0">
          <Card />
        </div>
        <div className="snap-start shrink-0">
          <Card />
        </div>
        <div className="snap-start shrink-0">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Work
