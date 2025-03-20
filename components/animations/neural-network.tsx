"use client"

import { useEffect, useRef } from "react"

interface NeuralNetworkProps {
  className?: string
  layers?: number[]
  speed?: number
  color?: string
}

export default function NeuralNetwork({
  className = "",
  layers = [4, 8, 12, 8, 4],
  speed = 1,
  color = "#4f46e5",
}: NeuralNetworkProps) {
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

    // Calculate node positions
    const calculateNodes = () => {
      const nodes: { x: number; y: number; layer: number; index: number }[] = []
      const width = canvas.width
      const height = canvas.height

      const layerGap = width / (layers.length + 1)

      layers.forEach((nodeCount, layerIndex) => {
        const x = layerGap * (layerIndex + 1)
        const nodeGap = height / (nodeCount + 1)

        for (let i = 0; i < nodeCount; i++) {
          nodes.push({
            x,
            y: nodeGap * (i + 1),
            layer: layerIndex,
            index: i,
          })
        }
      })

      return nodes
    }

    // Draw the neural network
    const drawNetwork = (time: number) => {
      const nodes = calculateNodes()

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections between layers
      for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex++) {
        const currentLayerNodes = nodes.filter((node) => node.layer === layerIndex)
        const nextLayerNodes = nodes.filter((node) => node.layer === layerIndex + 1)

        currentLayerNodes.forEach((currentNode) => {
          nextLayerNodes.forEach((nextNode) => {
            // Calculate signal animation
            const signalPos = (Math.sin(time * speed * 0.05 + currentNode.index * 0.2 + nextNode.index * 0.3) + 1) / 2

            // Draw connection line
            ctx.beginPath()
            ctx.moveTo(currentNode.x, currentNode.y)
            ctx.lineTo(nextNode.x, nextNode.y)
            ctx.strokeStyle = `rgba(${Number.parseInt(color.slice(1, 3), 16)}, ${Number.parseInt(color.slice(3, 5), 16)}, ${Number.parseInt(color.slice(5, 7), 16)}, 0.2)`
            ctx.lineWidth = 1
            ctx.stroke()

            // Draw signal pulse
            const signalX = currentNode.x + (nextNode.x - currentNode.x) * signalPos
            const signalY = currentNode.y + (nextNode.y - currentNode.y) * signalPos

            ctx.beginPath()
            ctx.arc(signalX, signalY, 2, 0, Math.PI * 2)
            ctx.fillStyle = color
            ctx.fill()
          })
        })
      }

      // Draw nodes
      nodes.forEach((node) => {
        // Node pulse animation
        const pulse = Math.sin(time * speed * 0.05 + node.layer * 0.5 + node.index * 0.2) * 0.5 + 1.5

        ctx.beginPath()
        ctx.arc(node.x, node.y, 4 * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${Number.parseInt(color.slice(1, 3), 16)}, ${Number.parseInt(color.slice(3, 5), 16)}, ${Number.parseInt(color.slice(5, 7), 16)}, 0.7)`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      })
    }

    // Animation loop
    const animate = () => {
      time++
      drawNetwork(time)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [layers, speed, color])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}

