"use client"

import { useEffect, useRef, useState } from "react"

interface AIDecisionProps {
  className?: string
  speed?: number
  decisions?: string[]
}

export default function AIDecision({
  className = "",
  speed = 2000,
  decisions = [
    "Analyzing image data...",
    "Detecting objects...",
    "Classifying entities...",
    "Calculating probabilities...",
    "Optimizing parameters...",
    "Applying transformations...",
    "Running inference...",
    "Evaluating results...",
    "Generating response...",
  ],
}: AIDecisionProps) {
  const [currentDecision, setCurrentDecision] = useState(0)
  const [confidence, setConfidence] = useState(0)
  const [isProcessing, setIsProcessing] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Cycle through decisions
    const decisionInterval = setInterval(() => {
      setCurrentDecision((prev) => (prev + 1) % decisions.length)
      setConfidence(0)
      setIsProcessing(true)
    }, speed)

    return () => clearInterval(decisionInterval)
  }, [decisions, speed])

  useEffect(() => {
    // Animate confidence level
    if (isProcessing) {
      const confidenceInterval = setInterval(() => {
        setConfidence((prev) => {
          const newConfidence = prev + Math.random() * 10
          if (newConfidence >= 100) {
            clearInterval(confidenceInterval)
            setIsProcessing(false)
            return 100
          }
          return newConfidence
        })
      }, 100)

      return () => clearInterval(confidenceInterval)
    }
  }, [isProcessing])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
      initParticles()
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          color: `hsl(${Math.random() * 60 + 200}, 100%, 70%)`,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })

      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.2 * (1 - distance / 100)})`
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 p-4 flex flex-col items-center justify-center h-full">
        <div className="text-center">
          <div className="text-lg font-semibold mb-2">{decisions[currentDecision]}</div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-100"
              style={{ width: `${confidence}%` }}
            ></div>
          </div>

          <div className="text-sm">{isProcessing ? "Processing..." : "Complete"}</div>
        </div>
      </div>
    </div>
  )
}

