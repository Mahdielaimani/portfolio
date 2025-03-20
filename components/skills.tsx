"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FadeIn from "@/components/animations/fade-in"
import AnimatedText from "@/components/animations/animated-text"

// Simple translations
const translations = {
  en: {
    title: "Skills & Expertise",
    subtitle: "My technical skills and areas of expertise in AI and Machine Learning",
  },
  fr: {
    title: "Compétences & Expertise",
    subtitle: "Mes compétences techniques et domaines d'expertise en IA et Machine Learning",
  },
}

export default function Skills() {
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
    <section id="skills" className="py-16 bg-background relative">
      <div className="absolute top-0 right-0 w-full md:w-1/3 h-64 md:h-full z-0 opacity-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1677442135136-760c813a7542?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="AI Neural Network"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
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
          <FadeIn once={true} delay={0.4} className="w-full max-w-4xl">
            <Tabs defaultValue="machine-learning" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="machine-learning" className="relative overflow-hidden group">
                  <span className="relative z-10">Machine Learning</span>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-data-[state=active]:translate-y-0 transition-transform duration-300"></span>
                </TabsTrigger>
                <TabsTrigger value="data-processing" className="relative overflow-hidden group">
                  <span className="relative z-10">Data Processing</span>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-data-[state=active]:translate-y-0 transition-transform duration-300"></span>
                </TabsTrigger>
                <TabsTrigger value="programming" className="relative overflow-hidden group">
                  <span className="relative z-10">Programming</span>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-data-[state=active]:translate-y-0 transition-transform duration-300"></span>
                </TabsTrigger>
                <TabsTrigger value="computer-vision" className="relative overflow-hidden group">
                  <span className="relative z-10">Computer Vision</span>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-data-[state=active]:translate-y-0 transition-transform duration-300"></span>
                </TabsTrigger>
                <TabsTrigger value="project-cloud" className="relative overflow-hidden group">
                  <span className="relative z-10">Project & Cloud</span>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-data-[state=active]:translate-y-0 transition-transform duration-300"></span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="machine-learning" className="mt-6">
                <Card className="border border-primary/10 transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle>Machine & Deep Learning</CardTitle>
                    <CardDescription>Frameworks, libraries, and techniques for AI and ML development</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Frameworks & Libraries</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">TensorFlow</Badge>
                        <Badge className="transition-all hover:scale-105">PyTorch</Badge>
                        <Badge className="transition-all hover:scale-105">Scikit-learn</Badge>
                        <Badge className="transition-all hover:scale-105">LangChain</Badge>
                        <Badge className="transition-all hover:scale-105">HuggingFace</Badge>
                        <Badge className="transition-all hover:scale-105">CrewAI</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Deep Learning Techniques</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">Large Language Models (LLMs)</Badge>
                        <Badge className="transition-all hover:scale-105">Reinforcement Learning (RL)</Badge>
                        <Badge className="transition-all hover:scale-105">Generative Adversarial Networks (GANs)</Badge>
                        <Badge className="transition-all hover:scale-105">Variational Autoencoders (VAEs)</Badge>
                        <Badge className="transition-all hover:scale-105">Convolutional Neural Networks (CNN)</Badge>
                        <Badge className="transition-all hover:scale-105">Recurrent Neural Networks (RNN)</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Model Types</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">Supervised Learning</Badge>
                        <Badge className="transition-all hover:scale-105">Unsupervised Learning</Badge>
                        <Badge className="transition-all hover:scale-105">Transfer Learning</Badge>
                        <Badge className="transition-all hover:scale-105">Ensemble Methods</Badge>
                        <Badge className="transition-all hover:scale-105">Transformers</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="data-processing" className="mt-6">
                <Card className="border border-primary/10 transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle>Traitement de données</CardTitle>
                    <CardDescription>
                      Tools and technologies for data manipulation, analysis, and storage
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Data Manipulation</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">Python</Badge>
                        <Badge className="transition-all hover:scale-105">Pandas</Badge>
                        <Badge className="transition-all hover:scale-105">NumPy</Badge>
                        <Badge className="transition-all hover:scale-105">Spark</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Data Collection</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">Kaggle</Badge>
                        <Badge className="transition-all hover:scale-105">Web Scraping</Badge>
                        <Badge className="transition-all hover:scale-105">APIs</Badge>
                        <Badge className="transition-all hover:scale-105">ETL Pipelines</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Vector Databases</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">ChromaDB</Badge>
                        <Badge className="transition-all hover:scale-105">FAISS</Badge>
                        <Badge className="transition-all hover:scale-105">NoSQL</Badge>
                        <Badge className="transition-all hover:scale-105">SQL</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Data Visualization</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">Matplotlib</Badge>
                        <Badge className="transition-all hover:scale-105">Seaborn</Badge>
                        <Badge className="transition-all hover:scale-105">Plotly</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="programming" className="mt-6">
                <Card className="border border-primary/10 transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle>Programmation</CardTitle>
                    <CardDescription>Programming languages and development frameworks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">Python</Badge>
                        <Badge className="transition-all hover:scale-105">Dart</Badge>
                        <Badge className="transition-all hover:scale-105">Java</Badge>
                        <Badge className="transition-all hover:scale-105">C/C++</Badge>
                        <Badge className="transition-all hover:scale-105">JavaScript</Badge>
                        <Badge className="transition-all hover:scale-105">TypeScript</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Frameworks & APIs</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">FastAPI</Badge>
                        <Badge className="transition-all hover:scale-105">Flask</Badge>
                        <Badge className="transition-all hover:scale-105">Django</Badge>
                        <Badge className="transition-all hover:scale-105">Flutter</Badge>
                        <Badge className="transition-all hover:scale-105">RESTful APIs</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Development Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">VS Code</Badge>
                        <Badge className="transition-all hover:scale-105">Jupyter Notebooks</Badge>
                        <Badge className="transition-all hover:scale-105">Git</Badge>
                        <Badge className="transition-all hover:scale-105">Docker</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="computer-vision" className="mt-6">
                <Card className="border border-primary/10 transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle>Vision par ordinateur</CardTitle>
                    <CardDescription>Technologies and techniques for image and video processing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Libraries & Frameworks</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">OpenCV</Badge>
                        <Badge className="transition-all hover:scale-105">YOLO</Badge>
                        <Badge className="transition-all hover:scale-105">PyTorch Vision</Badge>
                        <Badge className="transition-all hover:scale-105">TensorFlow Vision</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Neural Network Architectures</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">CNN</Badge>
                        <Badge className="transition-all hover:scale-105">ResNet</Badge>
                        <Badge className="transition-all hover:scale-105">SIFT</Badge>
                        <Badge className="transition-all hover:scale-105">U-Net</Badge>
                        <Badge className="transition-all hover:scale-105">Mask R-CNN</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Computer Vision Tasks</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">Object Detection</Badge>
                        <Badge className="transition-all hover:scale-105">Image Classification</Badge>
                        <Badge className="transition-all hover:scale-105">Image Segmentation</Badge>
                        <Badge className="transition-all hover:scale-105">Feature Extraction</Badge>
                        <Badge className="transition-all hover:scale-105">Facial Recognition</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="project-cloud" className="mt-6">
                <Card className="border border-primary/10 transition-all duration-300 hover:border-primary/30">
                  <CardHeader>
                    <CardTitle>Gestion du projet & Cloud</CardTitle>
                    <CardDescription>Project management methodologies and cloud technologies</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Project Management</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">Agile Scrum</Badge>
                        <Badge className="transition-all hover:scale-105">Jira</Badge>
                        <Badge className="transition-all hover:scale-105">Git/GitHub</Badge>
                        <Badge className="transition-all hover:scale-105">CI/CD (GitLab)</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Cloud Platforms</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">Azure</Badge>
                        <Badge className="transition-all hover:scale-105">AWS</Badge>
                        <Badge className="transition-all hover:scale-105">Google Cloud</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">MLOps</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">MLflow</Badge>
                        <Badge className="transition-all hover:scale-105">AWS SageMaker</Badge>
                        <Badge className="transition-all hover:scale-105">Model Deployment</Badge>
                        <Badge className="transition-all hover:scale-105">Model Monitoring</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Containerization & Orchestration</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="transition-all hover:scale-105">Docker</Badge>
                        <Badge className="transition-all hover:scale-105">Kubernetes</Badge>
                        <Badge className="transition-all hover:scale-105">Microservices</Badge>
                      </div>
                    </div>
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

