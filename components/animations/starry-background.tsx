"use client"

import { useEffect, useRef } from "react"

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Star properties
    const stars: {
      x: number
      y: number
      size: number
      opacity: number
      pulse: number
    }[] = []
    const numberOfStars = 150

    // Create stars
    const createStars = () => {
      stars.length = 0
      for (let i = 0; i < numberOfStars; i++) {
        const size = Math.random() * 2 + 0.5
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          opacity: Math.random() * 0.5 + 0.3,
          pulse: Math.random() * 0.03 + 0.01,
        })
      }
    }

    // Draw stars
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        // Pulsate opacity
        star.opacity += star.pulse
        if (star.opacity > 0.8 || star.opacity < 0.3) {
          star.pulse = -star.pulse
        }

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createStars()
    }

    window.addEventListener("resize", handleResize)

    createStars()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-gray-900" />
}

