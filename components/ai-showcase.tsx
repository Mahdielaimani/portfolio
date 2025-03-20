"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FadeIn from "@/components/animations/fade-in"
import AnimatedText from "@/components/animations/animated-text"
import NeuralNetwork from "@/components/animations/neural-network"
import DataFlow from "@/components/animations/data-flow"
import CodeGeneration from "@/components/animations/code-generation"
import AIDecision from "@/components/animations/ai-decision"
import MatrixRain from "@/components/animations/matrix-rain"

export default function AIShowcase() {
  const [activeTab, setActiveTab] = useState("neural-network")

  return (
    <section id="ai-showcase" className="py-16 bg-background relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="AI Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <AnimatedText
              text="AI Visualization Showcase"
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              once={true}
            />
            <FadeIn once={true} delay={0.2}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Interactive visualizations of AI and Machine Learning concepts
              </p>
            </FadeIn>
          </div>

          <FadeIn once={true} delay={0.4} className="w-full max-w-4xl">
            <Tabs defaultValue="neural-network" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="neural-network" className="relative overflow-hidden group">
                  <span className="relative z-10">Neural Network</span>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-data-[state=active]:translate-y-0 transition-transform duration-300"></span>
                </TabsTrigger>
                <TabsTrigger value="data-flow" className="relative overflow-hidden group">
                  <span className="relative z-10">Data Flow</span>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-data-[state=active]:translate-y-0 transition-transform duration-300"></span>
                </TabsTrigger>
                <TabsTrigger value="code-gen" className="relative overflow-hidden group">
                  <span className="relative z-10">Code Generation</span>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-data-[state=active]:translate-y-0 transition-transform duration-300"></span>
                </TabsTrigger>
                <TabsTrigger value="ai-decision" className="relative overflow-hidden group">
                  <span className="relative z-10">AI Decision</span>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-data-[state=active]:translate-y-0 transition-transform duration-300"></span>
                </TabsTrigger>
                <TabsTrigger value="matrix" className="relative overflow-hidden group">
                  <span className="relative z-10">Matrix</span>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-data-[state=active]:translate-y-0 transition-transform duration-300"></span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="neural-network" className="mt-6">
                <Card className="border border-primary/10 transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle>Neural Network Visualization</CardTitle>
                    <CardDescription>
                      Interactive visualization of a neural network with data flowing through layers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="h-[300px] w-full mb-4 bg-black bg-opacity-10 rounded-lg overflow-hidden">
                      <NeuralNetwork />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This visualization demonstrates how data flows through multiple layers of a neural network. The
                      nodes represent neurons, and the connections show how information propagates through the network
                      during training and inference.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="data-flow" className="mt-6">
                <Card className="border border-primary/10 transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle>AI Data Flow Visualization</CardTitle>
                    <CardDescription>Visualization of how data flows through AI systems</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="h-[300px] w-full mb-4 bg-black bg-opacity-10 rounded-lg overflow-hidden">
                      <DataFlow />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This animation shows how data flows through AI systems in a tree-like structure, representing the
                      branching decision paths that AI models use when processing information. Each particle represents
                      a data point moving through the system.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="code-gen" className="mt-6">
                <Card className="border border-primary/10 transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle>AI Code Generation</CardTitle>
                    <CardDescription>Visualization of AI generating Python code for machine learning</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="h-[300px] w-full mb-4 rounded-lg overflow-hidden">
                      <CodeGeneration />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This animation simulates how AI models like GPT-4 generate code for machine learning applications.
                      The typing effect represents the token-by-token generation process that large language models use
                      when creating code.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ai-decision" className="mt-6">
                <Card className="border border-primary/10 transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle>AI Decision Making</CardTitle>
                    <CardDescription>Visualization of AI processing and making decisions</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="h-[300px] w-full mb-4 rounded-lg overflow-hidden">
                      <AIDecision />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This visualization demonstrates how AI systems process information and make decisions. The
                      confidence meter represents the model's certainty in its predictions as it analyzes data and
                      applies various algorithms.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="matrix" className="mt-6">
                <Card className="border border-primary/10 transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle>Matrix Data Representation</CardTitle>
                    <CardDescription>Digital rain visualization inspired by AI data processing</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="h-[300px] w-full mb-4 rounded-lg overflow-hidden">
                      <MatrixRain />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This matrix-style digital rain animation represents the constant flow of data that AI systems
                      process. The cascading characters symbolize the transformation of raw data into meaningful
                      patterns that AI algorithms can interpret.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

