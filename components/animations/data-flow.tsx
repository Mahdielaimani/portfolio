"use client"

import { useEffect, useRef } from "react"

interface DataFlowProps {
  className?: string
  particleCount?: number
  speed?: number
  color?: string
}

export default function DataFlow({ className = "", particleCount = 50, speed = 1, color = "#4f46e5" }: DataFlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Create particles
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      path: { x: number; y: number }[]
      pathLength: number
      pathIndex: number
      opacity: number
    }[] = []

    // Generate paths (binary tree-like structure)
    const generatePaths = () => {
      const paths: { x: number; y: number }[][] = []
      const startX = 0
      const startY = canvas.height / 2

      const createBranch = (
        startX: number,
        startY: number,
        length: number,
        angle: number,
        depth: number,
        maxDepth: number,
        path: { x: number; y: number }[] = [],
      ) => {
        if (depth > maxDepth) return path

        const endX = startX + Math.cos(angle) * length
        const endY = startY + Math.sin(angle) * length

        path.push({ x: endX, y: endY })

        if (depth === maxDepth) {
          paths.push([...path])
          return path
        }

        // Create two branches
        const newPath1 = [...path]
        const newPath2 = [...path]

        createBranch(endX, endY, length * 0.8, angle - 0.5, depth + 1, maxDepth, newPath1)
        createBranch(endX, endY, length * 0.8, angle + 0.5, depth + 1, maxDepth, newPath2)

        return path
      }

      // Create main paths
      for (let i = 0; i < 3; i++) {
        const angle = (Math.PI / 3) * (i - 1)
        const path = [{ x: startX, y: startY }]
        createBranch(startX, startY, canvas.width / 4, angle, 0, 3, path)
      }

      return paths
    }

    const initParticles = () => {
      particles.length = 0
      const paths = generatePaths()

      for (let i = 0; i < particleCount; i++) {
        const pathIndex = Math.floor(Math.random() * paths.length)
        const path = paths[pathIndex]

        particles.push({
          x: path[0].x,
          y: path[0].y,
          size: Math.random() * 2 + 1,
          speedX: 0,
          speedY: 0,
          path,
          pathLength: path.length,
          pathIndex: 0,
          opacity: Math.random() * 0.5 + 0.5,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((p) => {
        // Move particle along its path
        if (p.pathIndex < p.pathLength - 1) {
          const currentPoint = p.path[p.pathIndex]
          const nextPoint = p.path[p.pathIndex + 1]

          // Calculate direction to next point
          const dx = nextPoint.x - p.x
          const dy = nextPoint.y - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 2 * speed) {
            p.pathIndex++
          } else {
            p.x += (dx / distance) * speed
            p.y += (dy / distance) * speed
          }
        } else {
          // Reset particle to start of path
          p.pathIndex = 0
          p.x = p.path[0].x
          p.y = p.path[0].y
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${Number.parseInt(color.slice(1, 3), 16)}, ${Number.parseInt(color.slice(3, 5), 16)}, ${Number.parseInt(color.slice(5, 7), 16)}, ${p.opacity})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    initParticles()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [particleCount, speed, color])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}

