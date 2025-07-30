'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', moveCursor)

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"]'
    )

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="fixed z-[9999] pointer-events-none mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <motion.div
          className="rounded-full bg-white/80 backdrop-blur-sm"
          animate={{
            width: isHovering ? 60 : 36,
            height: isHovering ? 60 : 36,
            scale: isHovering ? 1.2 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />
      </motion.div>

      <motion.div
        className="fixed z-[10000] pointer-events-none"
        style={{
          left: cursorX,
          top: cursorY,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-white opacity-80"
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />
      </motion.div>
    </>
  )
}