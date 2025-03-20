"use client"

import { useEffect, useRef } from "react"

interface SkillNode {
  id: string
  name: string
  category: string
  level: number
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

interface SkillsNetworkProps {
  className?: string
}

export default function SkillsNetwork({ className = "" }: SkillsNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0
    let isMouseInCanvas = false

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
      initNodes()
    }

    // Skills data
    const categories = [
      { name: "ML Frameworks", color: "#4f46e5" },
      { name: "Languages", color: "#06b6d4" },
      { name: "Cloud", color: "#8b5cf6" },
      { name: "Data", color: "#10b981" },
      { name: "Tools", color: "#f59e0b" },
    ]

    const skills = [
      { name: "TensorFlow", category: "ML Frameworks", level: 90 },
      { name: "PyTorch", category: "ML Frameworks", level: 85 },
      { name: "Scikit-learn", category: "ML Frameworks", level: 95 },
      { name: "Python", category: "Languages", level: 95 },
      { name: "JavaScript", category: "Languages", level: 85 },
      { name: "TypeScript", category: "Languages", level: 80 },
      { name: "AWS", category: "Cloud", level: 80 },
      { name: "Azure", category: "Cloud", level: 85 },
      { name: "Pandas", category: "Data", level: 90 },
      { name: "NumPy", category: "Data", level: 90 },
      { name: "Docker", category: "Tools", level: 90 },
      { name: "Git", category: "Tools", level: 90 },
      { name: "LLMs", category: "ML Frameworks", level: 85 },
      { name: "CNNs", category: "ML Frameworks", level: 90 },
      { name: "SQL", category: "Data", level: 90 },
    ]

    // Create nodes
    let nodes: SkillNode[] = []

    const initNodes = () => {
      nodes = []

      skills.forEach((skill, index) => {
        const category = categories.find((c) => c.name === skill.category)
        const radius = (skill.level / 100) * 30 + 20

        nodes.push({
          id: `skill-${index}`,
          name: skill.name,
          category: skill.category,
          level: skill.level,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius,
        })
      })
    }

    // Handle mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      isMouseInCanvas = true
    }

    const handleMouseLeave = () => {
      isMouseInCanvas = false
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections between nodes
      ctx.globalAlpha = 0.2
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)

            // Same category = stronger connection
            if (nodes[i].category === nodes[j].category) {
              const category = categories.find((c) => c.name === nodes[i].category)
              ctx.strokeStyle = category?.color || "#4f46e5"
              ctx.lineWidth = 1.5
            } else {
              ctx.strokeStyle = "#a0aec0"
              ctx.lineWidth = 0.5
            }

            ctx.stroke()
          }
        }
      }

      // Update and draw nodes
      ctx.globalAlpha = 1
      nodes.forEach((node) => {
        // Apply forces
        if (isMouseInCanvas) {
          const dx = mouseX - node.x
          const dy = mouseY - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            // Attract towards mouse
            node.vx += dx * 0.0005
            node.vy += dy * 0.0005
          }
        }

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Dampen velocity
        node.vx *= 0.99
        node.vy *= 0.99

        // Bounce off edges
        if (node.x < node.radius) {
          node.x = node.radius
          node.vx *= -1
        }
        if (node.x > canvas.width - node.radius) {
          node.x = canvas.width - node.radius
          node.vx *= -1
        }
        if (node.y < node.radius) {
          node.y = node.radius
          node.vy *= -1
        }
        if (node.y > canvas.height - node.radius) {
          node.y = canvas.height - node.radius
          node.vy *= -1
        }

        // Draw node
        const category = categories.find((c) => c.name === node.category)

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${category?.color}20` // Semi-transparent fill
        ctx.fill()

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.strokeStyle = category?.color || "#4f46e5"
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw skill name
        ctx.font = "12px Arial"
        ctx.fillStyle = "#1a202c"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(node.name, node.x, node.y)
      })

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
  }, [])

  return (
    <div className={`relative w-full h-[400px] ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute bottom-4 left-4 text-sm text-gray-500">
        Move your cursor to interact with the skills network
      </div>
    </div>
  )
}

