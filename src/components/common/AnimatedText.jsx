import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Character({ char, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1])

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-[#D7E2EA]"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  )
}

export function AnimatedText({ text, className = '' }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const characters = text.split('')
  const totalChars = characters.length

  return (
    <p
      ref={containerRef}
      className={`relative inline-flex flex-wrap justify-center ${className}`}
    >
      {characters.map((char, index) => {
        const start = index / totalChars
        const end = Math.min(start + 1 / totalChars, 1)
        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        )
      })}
    </p>
  )
}

export default AnimatedText
