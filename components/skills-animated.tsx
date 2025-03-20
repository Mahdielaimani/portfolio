"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface SkillCategory {
  title: string
  items: {
    name: string
    level?: number // Optional skill level from 0-100
  }[]
}

interface SkillTab {
  id: string
  title: string
  description: string
  categories: SkillCategory[]
}

export default function SkillsAnimated() {
  const [activeTab, setActiveTab] = useState("machine-learning")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Define all skills data
  const skillTabs: SkillTab[] = [
    {
      id: "machine-learning",
      title: "Machine & Deep Learning",
      description: "Frameworks, libraries, and techniques for AI and ML development",
      categories: [
        {
          title: "Frameworks & Libraries",
          items: [
            { name: "TensorFlow", level: 90 },
            { name: "PyTorch", level: 85 },
            { name: "Scikit-learn", level: 95 },
            { name: "LangChain", level: 80 },
            { name: "HuggingFace", level: 85 },
            { name: "CrewAI", level: 75 },
          ],
        },
        {
          title: "Deep Learning Techniques",
          items: [
            { name: "Large Language Models (LLMs)", level: 85 },
            { name: "Reinforcement Learning (RL)", level: 80 },
            { name: "Generative Adversarial Networks (GANs)", level: 75 },
            { name: "Variational Autoencoders (VAEs)", level: 70 },
            { name: "Convolutional Neural Networks (CNN)", level: 90 },
            { name: "Recurrent Neural Networks (RNN)", level: 85 },
          ],
        },
        {
          title: "Model Types",
          items: [
            { name: "Supervised Learning", level: 95 },
            { name: "Unsupervised Learning", level: 90 },
            { name: "Transfer Learning", level: 85 },
            { name: "Ensemble Methods", level: 80 },
            { name: "Transformers", level: 85 },
          ],
        },
      ],
    },
    {
      id: "data-processing",
      title: "Data Processing",
      description: "Tools and technologies for data manipulation, analysis, and storage",
      categories: [
        {
          title: "Data Manipulation",
          items: [
            { name: "Python", level: 95 },
            { name: "Pandas", level: 90 },
            { name: "NumPy", level: 90 },
            { name: "Spark", level: 75 },
          ],
        },
        {
          title: "Data Collection",
          items: [
            { name: "Kaggle", level: 85 },
            { name: "Web Scraping", level: 80 },
            { name: "APIs", level: 90 },
            { name: "ETL Pipelines", level: 85 },
          ],
        },
        {
          title: "Vector Databases",
          items: [
            { name: "ChromaDB", level: 80 },
            { name: "FAISS", level: 75 },
            { name: "NoSQL", level: 85 },
            { name: "SQL", level: 90 },
          ],
        },
        {
          title: "Data Visualization",
          items: [
            { name: "Matplotlib", level: 90 },
            { name: "Seaborn", level: 85 },
            { name: "Plotly", level: 80 },
          ],
        },
      ],
    },
    // Other tabs data remains the same
    {
      id: "programming",
      title: "Programming",
      description: "Programming languages and development frameworks",
      categories: [
        {
          title: "Languages",
          items: [
            { name: "Python", level: 95 },
            { name: "Dart", level: 85 },
            { name: "Java", level: 80 },
            { name: "C/C++", level: 75 },
            { name: "JavaScript", level: 85 },
            { name: "TypeScript", level: 80 },
          ],
        },
        {
          title: "Frameworks & APIs",
          items: [
            { name: "FastAPI", level: 90 },
            { name: "Flask", level: 85 },
            { name: "Django", level: 80 },
            { name: "Flutter", level: 85 },
            { name: "RESTful APIs", level: 90 },
          ],
        },
        {
          title: "Development Tools",
          items: [
            { name: "VS Code", level: 95 },
            { name: "Jupyter Notebooks", level: 90 },
            { name: "Git", level: 90 },
            { name: "Docker", level: 85 },
          ],
        },
      ],
    },
    {
      id: "computer-vision",
      title: "Computer Vision",
      description: "Technologies and techniques for image and video processing",
      categories: [
        {
          title: "Libraries & Frameworks",
          items: [
            { name: "OpenCV", level: 90 },
            { name: "YOLO", level: 85 },
            { name: "PyTorch Vision", level: 85 },
            { name: "TensorFlow Vision", level: 80 },
          ],
        },
        {
          title: "Neural Network Architectures",
          items: [
            { name: "CNN", level: 90 },
            { name: "ResNet", level: 85 },
            { name: "SIFT", level: 75 },
            { name: "U-Net", level: 80 },
            { name: "Mask R-CNN", level: 75 },
          ],
        },
        {
          title: "Computer Vision Tasks",
          items: [
            { name: "Object Detection", level: 90 },
            { name: "Image Classification", level: 90 },
            { name: "Image Segmentation", level: 85 },
            { name: "Feature Extraction", level: 85 },
            { name: "Facial Recognition", level: 80 },
          ],
        },
      ],
    },
    {
      id: "project-cloud",
      title: "Project & Cloud",
      description: "Project management methodologies and cloud technologies",
      categories: [
        {
          title: "Project Management",
          items: [
            { name: "Agile Scrum", level: 90 },
            { name: "Jira", level: 85 },
            { name: "Git/GitHub", level: 90 },
            { name: "CI/CD (GitLab)", level: 80 },
          ],
        },
        {
          title: "Cloud Platforms",
          items: [
            { name: "Azure", level: 85 },
            { name: "AWS", level: 80 },
            { name: "Google Cloud", level: 75 },
          ],
        },
        {
          title: "MLOps",
          items: [
            { name: "MLflow", level: 80 },
            { name: "AWS SageMaker", level: 75 },
            { name: "Model Deployment", level: 85 },
            { name: "Model Monitoring", level: 80 },
          ],
        },
        {
          title: "Containerization & Orchestration",
          items: [
            { name: "Docker", level: 90 },
            { name: "Kubernetes", level: 80 },
            { name: "Microservices", level: 85 },
          ],
        },
      ],
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.03,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const tabVariants = {
    inactive: {
      opacity: 0.7,
      scale: 0.95,
      y: 0,
    },
    active: {
      opacity: 1,
      scale: 1,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  // Neural network background animation
  const NeuralNetworkBackground = () => {
    return (
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-net" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="#4f46e5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-net)" />
        </svg>
      </div>
    )
  }

  return (
    <section id="skills" className="py-16 bg-background relative overflow-hidden">
      <NeuralNetworkBackground />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Skills & Expertise
            </motion.h2>
            <motion.p
              className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              My technical skills and areas of expertise in AI and Machine Learning
            </motion.p>
          </div>

          <motion.div
            ref={ref}
            className="w-full max-w-4xl"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <Tabs defaultValue="machine-learning" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                {skillTabs.map((tab) => (
                  <motion.div
                    key={tab.id}
                    variants={tabVariants}
                    animate={activeTab === tab.id ? "active" : "inactive"}
                    className="w-full"
                  >
                    <TabsTrigger value={tab.id} className="w-full relative overflow-hidden group">
                      <span className="relative z-10">{tab.title}</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 translate-y-full group-data-[state=active]:translate-y-0 transition-transform duration-300"></span>
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>

              {skillTabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-6">
                  <Card className="border border-primary/10 transition-all duration-300 hover:border-primary/30 overflow-hidden">
                    <CardHeader>
                      <CardTitle>{tab.title}</CardTitle>
                      <CardDescription>{tab.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {tab.categories.map((category, categoryIndex) => (
                        <motion.div key={category.title} variants={categoryVariants} className="space-y-4">
                          <h3 className="font-medium mb-2 text-blue-600">{category.title}</h3>
                          <motion.div className="flex flex-wrap gap-3" variants={containerVariants}>
                            {category.items.map((item, itemIndex) => (
                              <motion.div
                                key={item.name}
                                variants={itemVariants}
                                className="relative"
                                custom={itemIndex}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                              >
                                <Badge className="transition-all hover:shadow-md hover:shadow-blue-500/20 py-1.5 px-3 relative overflow-hidden">
                                  {item.name}
                                  {item.level && (
                                    <motion.div
                                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                                      initial={{ width: 0 }}
                                      animate={{ width: `${item.level}%` }}
                                      transition={{ duration: 1, delay: 0.2 + itemIndex * 0.05 }}
                                    />
                                  )}
                                </Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

