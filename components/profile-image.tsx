"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ProfileImage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? [0.2, 0.4, 0.2] : 0,
          scale: isVisible ? [1, 1.05, 1] : 0.95,
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Profile image */}
      <motion.div
        className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.9,
          rotateY: isVisible ? [0, 5, 0, -5, 0] : 0,
        }}
        transition={{
          duration: 1.5,
          rotateY: {
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          },
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-01-06_16-11-50-Photoroom-Aq8Zu1xpicdLLP6PAnqirih9svPDZO.png"
          alt="EL AIMANI EL MAHDI"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  )
}

