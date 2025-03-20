"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Simple translations
const translations = {
  en: {
    name: "EL AIMANI EL MAHDI",
    title: "AI Engineer & Machine Learning Specialist",
    intro: "Building intelligent systems that solve real-world problems through innovative AI solutions",
    cta: "Explore My Work",
  },
  fr: {
    name: "EL AIMANI EL MAHDI",
    title: "Ingénieur IA & Spécialiste en Machine Learning",
    intro:
      "Développement de systèmes intelligents qui résolvent des problèmes concrets grâce à des solutions IA innovantes",
    cta: "Découvrir mon travail",
  },
}

export default function AIIntro() {
  const [isVisible, setIsVisible] = useState(false)
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    setIsVisible(true)

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
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20">
      <div className="container px-4 md:px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center md:text-left md:w-1/2"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl text-white mb-8 text-shadow-md"
            >
              <span className="font-semibold">{t.title}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg text-white mb-10 text-shadow-md"
            >
              {t.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none"
              >
                <Link href="#about">
                  {t.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-30 animate-pulse"></div>
              <div className="relative z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-01-06_16-11-50-Photoroom-Aq8Zu1xpicdLLP6PAnqirih9svPDZO.png"
                  alt="EL AIMANI EL MAHDI"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

