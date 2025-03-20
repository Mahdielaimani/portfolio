"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { useTheme } from "next-themes"

interface ElementsBackgroundProps {
  className?: string
}

export default function ElementsBackground({ className = "" }: ElementsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Determine if we're in dark mode
  const isDarkMode = mounted && (resolvedTheme === "dark" || theme === "dark")

  // Set mounted state
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!containerRef.current || !mounted) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Create elements (geometric shapes and particles)
    const elements: THREE.Mesh[] = []
    const particles: THREE.Points[] = []

    // Color palettes for dark and light modes
    const darkColors = [0x3b3bc8, 0x4b4ba8, 0x2d2d6e, 0x1e1e4a]
    const lightColors = [0x4361ee, 0x3f37c9, 0x4895ef, 0x4cc9f0]

    const colors = isDarkMode ? darkColors : lightColors

    const geometries = [
      new THREE.TetrahedronGeometry(0.6),
      new THREE.OctahedronGeometry(0.5),
      new THREE.IcosahedronGeometry(0.4),
      new THREE.DodecahedronGeometry(0.5),
    ]

    // Create 15 random geometric elements
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const material = new THREE.MeshPhongMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: isDarkMode ? 0.4 : 0.3,
        wireframe: Math.random() > 0.3,
      })

      const element = new THREE.Mesh(geometry, material)

      // Random position
      element.position.x = (Math.random() - 0.5) * 15
      element.position.y = (Math.random() - 0.5) * 15
      element.position.z = (Math.random() - 0.5) * 5

      // Random rotation
      element.rotation.x = Math.random() * Math.PI
      element.rotation.y = Math.random() * Math.PI

      // Add custom properties for animation
      Object.assign(element, {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
          z: (Math.random() - 0.5) * 0.005,
        },
        movementSpeed: {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
        },
      })

      scene.add(element)
      elements.push(element)
    }

    // Create particle system for network effect
    const particleCount = 200
    const particlesGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      particlePositions[i3] = (Math.random() - 0.5) * 20
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 20
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))

    const particleColor = isDarkMode ? 0x3b3bc8 : 0x4361ee
    const particleMaterial = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.05,
      transparent: true,
      opacity: isDarkMode ? 0.7 : 0.5,
    })

    const particleSystem = new THREE.Points(particlesGeometry, particleMaterial)
    scene.add(particleSystem)
    particles.push(particleSystem)

    // Create connections between particles
    const linesMaterial = new THREE.LineBasicMaterial({
      color: particleColor,
      transparent: true,
      opacity: isDarkMode ? 0.2 : 0.15,
    })

    const connections: THREE.Line[] = []
    const maxConnections = 100
    const connectionDistance = 5

    for (let i = 0; i < maxConnections; i++) {
      const geometry = new THREE.BufferGeometry()
      const vertices = new Float32Array(6) // Two points (x, y, z) for each

      geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3))
      const line = new THREE.Line(geometry, linesMaterial)
      scene.add(line)
      connections.push(line)
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isDarkMode ? 0.3 : 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, isDarkMode ? 0.7 : 0.8)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()

      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    // Mouse interaction
    const mouse = new THREE.Vector2()
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate and move elements
      elements.forEach((element: any) => {
        element.rotation.x += element.rotationSpeed.x
        element.rotation.y += element.rotationSpeed.y
        element.rotation.z += element.rotationSpeed.z

        element.position.x += element.movementSpeed.x
        element.position.y += element.movementSpeed.y

        // Boundary check and reverse direction if needed
        if (Math.abs(element.position.x) > 10) {
          element.movementSpeed.x *= -1
        }

        if (Math.abs(element.position.y) > 10) {
          element.movementSpeed.y *= -1
        }
      })

      // Update connections between particles
      const positions = particlesGeometry.attributes.position.array as Float32Array
      let connectionIndex = 0

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const posA = new THREE.Vector3(positions[i3], positions[i3 + 1], positions[i3 + 2])

        for (let j = i + 1; j < particleCount; j++) {
          if (connectionIndex >= maxConnections) break

          const j3 = j * 3
          const posB = new THREE.Vector3(positions[j3], positions[j3 + 1], positions[j3 + 2])

          if (posA.distanceTo(posB) < connectionDistance) {
            const linePositions = connections[connectionIndex].geometry.attributes.position.array as Float32Array

            linePositions[0] = posA.x
            linePositions[1] = posA.y
            linePositions[2] = posA.z

            linePositions[3] = posB.x
            linePositions[4] = posB.y
            linePositions[5] = posB.z

            connections[connectionIndex].geometry.attributes.position.needsUpdate = true
            connectionIndex++
          }
        }
      }

      // Hide unused connections
      for (let i = 0; i < maxConnections; i++) {
        connections[i].visible = i < connectionIndex
      }

      // Subtle camera movement based on mouse position
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.01
      camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.01
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)

      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose geometries and materials
      elements.forEach((element) => {
        element.geometry.dispose()
        ;(element.material as THREE.Material).dispose()
      })

      particles.forEach((particle) => {
        particle.geometry.dispose()
        ;(particle.material as THREE.Material).dispose()
      })

      connections.forEach((connection) => {
        connection.geometry.dispose()
        ;(connection.material as THREE.Material).dispose()
      })
    }
  }, [isDarkMode, mounted])

  return <div ref={containerRef} className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${className}`} />
}

