"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import AnimatedText from "@/components/animations/animated-text"
import FadeIn from "@/components/animations/fade-in"

// Simple translations
const translations = {
  en: {
    title: "About Me",
    subtitle: "AI Engineer with expertise in Machine Learning, Deep Learning, and Data Engineering",
    paragraph1:
      "I am an AI Engineer with a strong background in Machine Learning, Deep Learning, and Data Engineering. My expertise spans across various domains of artificial intelligence, including supervised and unsupervised learning, reinforcement learning, natural language processing, and computer vision.",
    paragraph2:
      "With experience in developing and deploying AI solutions in production environments, I am passionate about creating intelligent systems that solve real-world problems. My technical skills include proficiency in TensorFlow, PyTorch, Scikit-learn, and various other AI/ML frameworks and tools.",
    paragraph3:
      "I am currently pursuing a Master's degree in Artificial Intelligence at the University of Technologies of Belfort-Montbéliard (UTBM), further enhancing my knowledge and skills in the field.",
  },
  fr: {
    title: "À propos de moi",
    subtitle: "Ingénieur IA avec expertise en Machine Learning, Deep Learning et Data Engineering",
    paragraph1:
      "Je suis un ingénieur IA avec une solide expérience en Machine Learning, Deep Learning et Data Engineering. Mon expertise s'étend à divers domaines de l'intelligence artificielle, notamment l'apprentissage supervisé et non supervisé, l'apprentissage par renforcement, le traitement du langage naturel et la vision par ordinateur.",
    paragraph2:
      "Avec de l'expérience dans le développement et le déploiement de solutions IA en environnement de production, je suis passionné par la création de systèmes intelligents qui résolvent des problèmes concrets. Mes compétences techniques incluent la maîtrise de TensorFlow, PyTorch, Scikit-learn et divers autres frameworks et outils d'IA/ML.",
    paragraph3:
      "Je poursuis actuellement un Master en Intelligence Artificielle à l'Université de Technologies de Belfort-Montbéliard (UTBM), approfondissant mes connaissances et compétences dans ce domaine.",
  },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  return (
    <section id="about" className="py-16 bg-background relative">
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
              text={t.title}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              once={true}
            />
            <FadeIn once={true} delay={0.2}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t.subtitle}</p>
            </FadeIn>
          </div>
          <motion.div
            ref={ref}
            className="mx-auto max-w-[800px] space-y-4 text-left"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p variants={itemVariants}>{t.paragraph1}</motion.p>
            <motion.p variants={itemVariants}>{t.paragraph2}</motion.p>
            <motion.p variants={itemVariants}>{t.paragraph3}</motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

