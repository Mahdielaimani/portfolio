"use client"

import { useEffect, useRef } from "react"

export default function SimpleParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle properties
    const particlesArray: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
    }[] = []
    const numberOfParticles = 100
    const connectionDistance = 150

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speedX = (Math.random() - 0.5) * 0.5
        const speedY = (Math.random() - 0.5) * 0.5

        particlesArray.push({
          x,
          y,
          size,
          speedX,
          speedY,
        })
      }
    }

    // Draw particles and connections
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i]

        // Move particles
        p.x += p.speedX
        p.y += p.speedY

        // Bounce off edges
        if (p.x > canvas.width || p.x < 0) {
          p.speedX = -p.speedX
        }
        if (p.y > canvas.height || p.y < 0) {
          p.speedY = -p.speedY
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(100, 100, 255, 0.5)"
        ctx.fill()

        // Connect particles
        for (let j = i + 1; j < particlesArray.length; j++) {
          const p2 = particlesArray[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 100, 255, ${0.2 * (1 - distance / connectionDistance)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesArray.length = 0
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    createParticles()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30" />
}

