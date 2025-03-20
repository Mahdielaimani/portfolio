"use client"

import { useEffect, useRef } from "react"

interface MatrixRainProps {
  className?: string
  fontSize?: number
  speed?: number
  density?: number
}

export default function MatrixRain({ className = "", fontSize = 14, speed = 1, density = 0.05 }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Matrix characters (mix of letters, numbers, and AI/ML related symbols)
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-*/=><[]{}()&|~^%$#@!?∑∏∫√∂∆∇∞≈≠≤≥∈∉∋∌∩∪⊂⊃⊆⊇⊕⊗⊥⋅⌈⌉⌊⌋⟨⟩"

    // Drops
    let drops: {
      x: number
      y: number
      speed: number
      length: number
      chars: string[]
    }[] = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
      initDrops()
    }

    const initDrops = () => {
      drops = []
      const columns = Math.floor(canvas.width / fontSize)

      for (let i = 0; i < columns * density; i++) {
        const x = Math.floor(Math.random() * columns) * fontSize
        const length = Math.floor(Math.random() * 15) + 5

        // Generate random characters for this drop
        const dropChars = []
        for (let j = 0; j < length; j++) {
          dropChars.push(chars.charAt(Math.floor(Math.random() * chars.length)))
        }

        drops.push({
          x,
          y: Math.random() * canvas.height,
          speed: (Math.random() * 0.5 + 0.5) * speed,
          length,
          chars: dropChars,
        })
      }
    }

    const animate = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set font
      ctx.font = `${fontSize}px monospace`

      // Update and draw drops
      drops.forEach((drop) => {
        // Draw characters
        for (let i = 0; i < drop.length; i++) {
          const y = drop.y - i * fontSize

          // Skip if out of canvas
          if (y < 0 || y > canvas.height) continue

          // Vary the color based on position in drop
          const alpha = 1 - i / drop.length

          if (i === 0) {
            // Head of the drop is brighter
            ctx.fillStyle = `rgba(180, 255, 180, ${alpha})`
          } else {
            // Tail fades out
            ctx.fillStyle = `rgba(0, 255, 70, ${alpha * 0.8})`
          }

          // Randomly change characters
          if (Math.random() < 0.02) {
            drop.chars[i] = chars.charAt(Math.floor(Math.random() * chars.length))
          }

          ctx.fillText(drop.chars[i], drop.x, y)
        }

        // Move drop
        drop.y += (drop.speed * fontSize) / 2

        // Reset drop if it's out of screen
        if (drop.y - drop.length * fontSize > canvas.height) {
          drop.y = 0
          drop.x = Math.floor(Math.random() * (canvas.width / fontSize)) * fontSize
          drop.speed = (Math.random() * 0.5 + 0.5) * speed
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [fontSize, speed, density])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}

