"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  speed?: number
}

export default function AnimatedText({
  text,
  className = "",
  once = false,
  delay = 0,
  speed = 0.05,
}: AnimatedTextProps) {
  const [scope, setScope] = useState(false)

  useEffect(() => {
    setScope(true)
  }, [])

  const words = text.split(" ")

  // Variants for the container of words
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: speed, delayChildren: delay * i },
    }),
  }

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={className}
      style={{ overflow: "hidden", display: "inline-block" }}
      variants={container}
      initial="hidden"
      animate={scope ? "visible" : "hidden"}
      whileInView={once ? "visible" : undefined}
      viewport={once ? { once: true } : undefined}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} style={{ marginRight: "0.25em", display: "inline-block" }}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

