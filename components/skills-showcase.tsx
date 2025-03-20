"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SkillsNetwork from "@/components/skills-network"

interface SkillCategory {
  name: string
  color: string
  skills: {
    name: string
    level: number
    description?: string
  }[]
}

export default function SkillsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const categories: SkillCategory[] = [
    {
      name: "Machine Learning",
      color: "#4f46e5",
      skills: [
        {
          name: "TensorFlow",
          level: 90,
          description:
            "Extensive experience building and deploying deep learning models with TensorFlow for computer vision and NLP tasks.",
        },
        {
          name: "PyTorch",
          level: 85,
          description:
            "Proficient in developing custom neural network architectures and training pipelines using PyTorch.",
        },
        {
          name: "Scikit-learn",
          level: 95,
          description:
            "Expert in implementing classical machine learning algorithms and pipelines for various data science tasks.",
        },
        {
          name: "LLMs",
          level: 85,
          description: "Experience fine-tuning and deploying large language models for various NLP applications.",
        },
        {
          name: "Reinforcement Learning",
          level: 80,
          description: "Implemented RL algorithms for optimization problems and agent-based systems.",
        },
      ],
    },
    {
      name: "Data Engineering",
      color: "#10b981",
      skills: [
        {
          name: "Pandas",
          level: 90,
          description:
            "Advanced data manipulation, cleaning, and analysis using Pandas for various data science projects.",
        },
        {
          name: "SQL",
          level: 90,
          description:
            "Expert in database design, complex queries, and data extraction for analytics and ML pipelines.",
        },
        {
          name: "ETL Pipelines",
          level: 85,
          description: "Designed and implemented robust ETL processes for data warehousing and analytics.",
        },
        {
          name: "Data Visualization",
          level: 85,
          description: "Created interactive dashboards and visualizations using Matplotlib, Seaborn, and Plotly.",
        },
      ],
    },
    {
      name: "Programming",
      color: "#f59e0b",
      skills: [
        {
          name: "Python",
          level: 95,
          description: "Expert-level Python programming for data science, web development, and automation.",
        },
        {
          name: "JavaScript/TypeScript",
          level: 85,
          description: "Proficient in frontend and backend development using modern JavaScript frameworks.",
        },
        {
          name: "APIs",
          level: 90,
          description: "Designed and implemented RESTful and GraphQL APIs for various applications.",
        },
      ],
    },
    {
      name: "DevOps & Cloud",
      color: "#8b5cf6",
      skills: [
        {
          name: "Docker",
          level: 90,
          description: "Containerization of applications and ML models for consistent deployment across environments.",
        },
        {
          name: "AWS",
          level: 80,
          description: "Experience with EC2, S3, Lambda, SageMaker and other AWS services for ML deployment.",
        },
        {
          name: "CI/CD",
          level: 85,
          description: "Implemented automated testing and deployment pipelines for software and ML projects.",
        },
      ],
    },
  ]

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName === selectedCategory ? null : categoryName)
    setSelectedSkill(null)
  }

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill(skillName === selectedSkill ? null : skillName)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const getSelectedSkillDetails = () => {
    if (!selectedSkill) return null

    for (const category of categories) {
      const skill = category.skills.find((s) => s.name === selectedSkill)
      if (skill) {
        return {
          name: skill.name,
          level: skill.level,
          description: skill.description,
          category: category.name,
          color: category.color,
        }
      }
    }

    return null
  }

  const skillDetails = getSelectedSkillDetails()

  return (
    <section id="skills-showcase" className="py-16 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="space-y-2 text-center">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Skills & Expertise
            </motion.h2>
            <motion.p
              className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              My technical skills and areas of expertise in AI and Machine Learning
            </motion.p>
          </div>

          {/* Interactive Skills Network */}
          <SkillsNetwork className="mb-8" />

          {/* Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <motion.div key={category.name} variants={itemVariants}>
                <button
                  onClick={() => handleCategoryClick(category.name)}
                  className={`px-6 py-3 rounded-full transition-all ${
                    selectedCategory === category.name
                      ? "bg-opacity-20 shadow-lg scale-105"
                      : "bg-opacity-10 hover:bg-opacity-15 hover:scale-105"
                  }`}
                  style={{
                    backgroundColor: `${category.color}20`,
                    borderColor: category.color,
                    borderWidth: selectedCategory === category.name ? "2px" : "1px",
                  }}
                >
                  <span className="font-medium" style={{ color: category.color }}>
                    {category.name}
                  </span>
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills */}
          <AnimatePresence mode="wait">
            {selectedCategory && (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl overflow-hidden"
              >
                <Card className="border border-primary/10 transition-all duration-300 hover:border-primary/30">
                  <CardContent className="pt-6">
                    <motion.div
                      className="flex flex-wrap gap-3"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {categories
                        .find((c) => c.name === selectedCategory)
                        ?.skills.map((skill) => (
                          <motion.div key={skill.name} variants={itemVariants}>
                            <Badge
                              onClick={() => handleSkillClick(skill.name)}
                              className={`cursor-pointer transition-all py-1.5 px-3 text-base ${
                                selectedSkill === skill.name
                                  ? "bg-primary text-primary-foreground shadow-md"
                                  : "bg-primary/10 hover:bg-primary/20"
                              }`}
                            >
                              {skill.name}
                            </Badge>
                          </motion.div>
                        ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skill Details */}
          <AnimatePresence>
            {skillDetails && (
              <motion.div
                key={skillDetails.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="w-full max-w-4xl"
              >
                <Card className="border-2 transition-all duration-300" style={{ borderColor: skillDetails.color }}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="text-lg font-semibold mb-2">{skillDetails.name}</div>
                        <div className="text-sm text-muted-foreground mb-4">{skillDetails.category}</div>

                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2 dark:bg-gray-700">
                          <div
                            className="h-2.5 rounded-full transition-all duration-1000"
                            style={{
                              width: `${skillDetails.level}%`,
                              backgroundColor: skillDetails.color,
                            }}
                          ></div>
                        </div>
                        <div className="text-sm text-right">{skillDetails.level}%</div>
                      </div>

                      <div className="md:w-2/3">
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">DESCRIPTION</h4>
                        <p>{skillDetails.description || "No description available."}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

