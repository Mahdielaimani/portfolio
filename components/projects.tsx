"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/animations/fade-in"
import AnimatedText from "@/components/animations/animated-text"

// Simple translations
const translations = {
  en: {
    title: "Featured Projects",
    subtitle: "Showcasing my work in AI and Machine Learning",
  },
  fr: {
    title: "Projets Phares",
    subtitle: "Présentation de mon travail en IA et Machine Learning",
  },
}

export default function Projects() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    // Simple function to check the language
    const checkLanguage = () => {
      const main = document.querySelector("main")
      if (main) {
        const lang = main.getAttribute("data-language") || "en"
        setLanguage(lang)
      }
    }

    // Check initially
    checkLanguage()

    // Set up a simple interval to check for language changes
    const interval = setInterval(checkLanguage, 1000)

    return () => clearInterval(interval)
  }, [])

  // Get translations for current language
  const t = translations[language as keyof typeof translations] || translations.en

  return (
    <section id="projects" className="py-16 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <AnimatedText
              text={t.title}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              once={true}
            />
            <FadeIn once={true} delay={0.2}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t.subtitle}</p>
            </FadeIn>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
            {/* Project cards with animations */}
            <FadeIn once={true} delay={0.3}>
              <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>AI-Multi-Agent System for Procurement</CardTitle>
                  <CardDescription>AI-powered procurement system</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="aspect-video overflow-hidden rounded-lg mb-4 group">
                    <img
                      alt="Multi-Agent System"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      height="200"
                      src="https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      width="400"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Developed a sophisticated multi-agent system for procurement automation, featuring specialized
                    agents for search query recommendation, web search, product information extraction, and report
                    generation.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      CrewAI
                    </Badge>
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      LangChain
                    </Badge>
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      Pydantic
                    </Badge>
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      Python
                    </Badge>
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      LLM
                    </Badge>
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      Multi-Agent Systems
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn once={true} delay={0.4}>
              <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>3D Models from 2D Images</CardTitle>
                  <CardDescription>6-month project</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="aspect-video overflow-hidden rounded-lg mb-4 group">
                    <img
                      alt="3D Models from 2D Images"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      height="200"
                      src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      width="400"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    An innovative approach for generating 3D models of aircraft, combining deep learning, image
                    processing, and 3D geometry, with a focus on precision and efficiency to meet the requirements of
                    the aeronautical domain.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      Python
                    </Badge>
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      PyTorch3D
                    </Badge>
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      TensorFlow
                    </Badge>
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      Transformers
                    </Badge>
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      Stable Diffusion
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn once={true} delay={0.5}>
              <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>AI Security Detection for IoT Networks</CardTitle>
                  <CardDescription>Attack & Anomaly Detection System</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="aspect-video overflow-hidden rounded-lg mb-4 group">
                    <img
                      alt="AI Security Detection"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      height="200"
                      src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      width="400"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Developed an advanced AI-powered security system for detecting anomalies and cyber attacks in IoT
                    networks. The solution uses machine learning algorithms to analyze network traffic patterns and
                    identify potential security threats in real-time.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      Random Forest
                    </Badge>
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      Data Preprocessing
                    </Badge>
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      IoT Security
                    </Badge>
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      Python
                    </Badge>
                    <Badge variant="outline" className="transition-all hover:bg-primary/10">
                      Scikit-learn
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

