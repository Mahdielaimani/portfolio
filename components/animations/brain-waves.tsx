"use client"

import { useEffect, useRef } from "react"

interface BrainWavesProps {
  className?: string
  color?: string
  speed?: number
  amplitude?: number
  complexity?: number
}

export default function BrainWaves({
  className = "",
  color = "#4f46e5",
  speed = 1,
  amplitude = 1,
  complexity = 3,
}: BrainWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Generate wave points
    const generateWave = (time: number, waveCount: number) => {
      const points: { x: number; y: number }[] = []
      const width = canvas.width
      const height = canvas.height
      const centerY = height / 2

      // Create multiple waves with different frequencies and amplitudes
      for (let x = 0; x < width; x += 2) {
        let y = centerY

        for (let i = 1; i <= waveCount; i++) {
          const frequency = (0.01 * i) / waveCount
          const waveAmplitude = (height / 4) * amplitude * (1 / i)
          const timeOffset = time * speed * 0.02 * i

          y += Math.sin(x * frequency + timeOffset) * waveAmplitude
        }

        points.push({ x, y })
      }

      return points
    }

    // Draw brain waves
    const drawWaves = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw multiple waves with different colors
      for (let i = 1; i <= 3; i++) {
        const points = generateWave(time + i * 100, complexity)
        const waveColor = `rgba(${Number.parseInt(color.slice(1, 3), 16)}, ${Number.parseInt(color.slice(3, 5), 16)}, ${Number.parseInt(color.slice(5, 7), 16)}, ${0.7 / i})`

        // Draw wave path
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)

        for (let j = 1; j < points.length; j++) {
          ctx.lineTo(points[j].x, points[j].y)
        }

        ctx.strokeStyle = waveColor
        ctx.lineWidth = 3 / i
        ctx.stroke()

        // Draw glow effect
        ctx.shadowColor = color
        ctx.shadowBlur = 10
        ctx.strokeStyle = `rgba(${Number.parseInt(color.slice(1, 3), 16)}, ${Number.parseInt(color.slice(3, 5), 16)}, ${Number.parseInt(color.slice(5, 7), 16)}, ${0.5 / i})`
        ctx.lineWidth = 1 / i
        ctx.stroke()
        ctx.shadowBlur = 0

        // Draw pulse points
        for (let j = 0; j < points.length; j += 20) {
          const pulseSize = (Math.sin(time * speed * 0.05 + j * 0.1) + 1) * 2

          ctx.beginPath()
          ctx.arc(points[j].x, points[j].y, pulseSize, 0, Math.PI * 2)
          ctx.fillStyle = color
          ctx.fill()
        }
      }

      // Draw occasional "thought" sparks
      if (Math.random() < 0.05) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 5 + 2

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, size * 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, size * 2, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
        ctx.stroke()
      }
    }

    // Animation loop
    const animate = () => {
      time++
      drawWaves(time)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [color, speed, amplitude, complexity])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}

