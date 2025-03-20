"use client"

import { useEffect, useRef } from "react"

interface ParticlesBackgroundProps {
  className?: string
  particleCount?: number
  color?: string
  connectionDistance?: number
}

export default function ParticlesBackground({
  className = "",
  particleCount = 100,
  color = "#4f46e5",
  connectionDistance = 150,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []
    const mousePosition = { x: 0, y: 0 }
    let isMouseInCanvas = false

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Handle mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePosition.x = e.clientX - rect.left
      mousePosition.y = e.clientY - rect.top
      isMouseInCanvas = true
    }

    const handleMouseLeave = () => {
      isMouseInCanvas = false
    }

    // Initialize particles
    const initParticles = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Number.parseInt(color.slice(1, 3), 16)}, ${Number.parseInt(color.slice(3, 5), 16)}, ${Number.parseInt(
            color.slice(5, 7),
            16,
          )}, ${Math.random() * 0.5 + 0.2})`,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

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
        ctx.fillStyle = p.color
        ctx.fill()

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${Number.parseInt(color.slice(1, 3), 16)}, ${Number.parseInt(color.slice(3, 5), 16)}, ${Number.parseInt(
              color.slice(5, 7),
              16,
            )}, ${0.2 * (1 - distance / connectionDistance)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        // Connect to mouse if in canvas
        if (isMouseInCanvas) {
          const dx = p.x - mousePosition.x
          const dy = p.y - mousePosition.y
          const mouseDistance = Math.sqrt(dx * dx + dy * dy)

          if (mouseDistance < connectionDistance * 1.5) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${Number.parseInt(color.slice(1, 3), 16)}, ${Number.parseInt(color.slice(3, 5), 16)}, ${Number.parseInt(
              color.slice(5, 7),
              16,
            )}, ${0.3 * (1 - mouseDistance / (connectionDistance * 1.5))})`
            ctx.lineWidth = 1
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mousePosition.x, mousePosition.y)
            ctx.stroke()

            // Slightly attract particles to mouse
            p.x += dx > 0 ? -0.2 : 0.2
            p.y += dy > 0 ? -0.2 : 0.2
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [particleCount, color, connectionDistance])

  return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${className}`} />
}

