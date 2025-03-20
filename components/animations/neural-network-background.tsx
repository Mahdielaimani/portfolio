"use client"

import { useEffect, useRef } from "react"

export default function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Neural network properties
    const nodes: {
      x: number
      y: number
      radius: number
      color: string
      opacity: number
      pulseSpeed: number
    }[] = []

    const connections: {
      from: number
      to: number
      width: number
      opacity: number
      color: string
    }[] = []

    const numberOfNodes = 30
    const connectionDistance = 300

    // Create nodes
    const createNodes = () => {
      nodes.length = 0
      connections.length = 0

      for (let i = 0; i < numberOfNodes; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 4 + 2,
          color: `rgb(${Math.floor(Math.random() * 50 + 80)}, ${Math.floor(Math.random() * 50 + 100)}, ${Math.floor(Math.random() * 50 + 200)})`,
          opacity: Math.random() * 0.5 + 0.3,
          pulseSpeed: Math.random() * 0.02 + 0.005,
        })
      }

      // Create connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            connections.push({
              from: i,
              to: j,
              width: Math.random() * 1.5 + 0.5,
              opacity: Math.random() * 0.2 + 0.1,
              color: `rgb(${Math.floor(Math.random() * 50 + 80)}, ${Math.floor(Math.random() * 50 + 100)}, ${Math.floor(Math.random() * 50 + 200)})`,
            })
          }
        }
      }
    }

    // Animate neural network
    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.005

      // Draw connections
      for (const connection of connections) {
        const fromNode = nodes[connection.from]
        const toNode = nodes[connection.to]

        // Create gradient for connection
        const gradient = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y)
        gradient.addColorStop(0, `rgba(${connection.color.slice(4, -1)}, ${connection.opacity})`)
        gradient.addColorStop(1, `rgba(${connection.color.slice(4, -1)}, ${connection.opacity * 0.5})`)

        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)
        ctx.lineTo(toNode.x, toNode.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = connection.width
        ctx.stroke()

        // Draw data pulse along connection
        const pulsePosition = (Math.sin(time * 3 + connection.from * 0.2 + connection.to * 0.3) + 1) / 2
        const pulseX = fromNode.x + (toNode.x - fromNode.x) * pulsePosition
        const pulseY = fromNode.y + (toNode.y - fromNode.y) * pulsePosition

        ctx.beginPath()
        ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, 0.8)`
        ctx.fill()
      }

      // Draw nodes
      for (const node of nodes) {
        // Pulse node opacity
        node.opacity += Math.sin(time * 2) * node.pulseSpeed
        node.opacity = Math.max(0.2, Math.min(0.8, node.opacity))

        // Draw node glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3)
        gradient.addColorStop(0, `rgba(${node.color.slice(4, -1)}, ${node.opacity})`)
        gradient.addColorStop(1, `rgba(${node.color.slice(4, -1)}, 0)`)

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${node.color.slice(4, -1)}, ${node.opacity + 0.2})`
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createNodes()
    }

    window.addEventListener("resize", handleResize)

    createNodes()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-gray-950" />
}

