"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedText from "@/components/animations/animated-text"
import FadeIn from "@/components/animations/fade-in"

// Simple translations
const translations = {
  en: {
    title: "Speaking Engagements",
    subtitle: "Sharing knowledge and insights at industry events and conferences",
    mdsEvent: {
      title: "Autonomous AI Agents: Can They Think, Plan, and Execute Like Humans?",
      organization: "Moroccan Data Scientists Community",
      date: "March 25, 2025",
      location: "Casablanca, Morocco",
      description:
        "Invited as a speaker to discuss the capabilities and limitations of autonomous AI agents, exploring their ability to mimic human cognitive processes in thinking, planning, and execution. The talk covered recent advancements in multi-agent systems, cognitive architectures, and the ethical implications of increasingly autonomous AI.",
      topics: ["Autonomous Agents", "Multi-Agent Systems", "Cognitive AI", "LLM Agents", "AI Ethics"],
    },
  },
  fr: {
    title: "Conférences et Présentations",
    subtitle: "Partage de connaissances et d'idées lors d'événements et de conférences du secteur",
    mdsEvent: {
      title: "Agents IA Autonomes : Peuvent-ils Penser, Planifier et Exécuter Comme les Humains ?",
      organization: "Communauté Moroccan Data Scientists",
      date: "25 Mars 2025",
      location: "Casablanca, Maroc",
      description:
        "Invité en tant qu'orateur pour discuter des capacités et des limites des agents IA autonomes, explorant leur capacité à imiter les processus cognitifs humains dans la réflexion, la planification et l'exécution. La présentation a couvert les avancées récentes dans les systèmes multi-agents, les architectures cognitives et les implications éthiques d'une IA de plus en plus autonome.",
      topics: ["Agents Autonomes", "Systèmes Multi-Agents", "IA Cognitive", "Agents LLM", "Éthique de l'IA"],
    },
  },
}

export default function SpeakingEngagements() {
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
    <section id="speaking" className="py-16 bg-primary/5 relative">
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
            <Card className="overflow-hidden border-primary/10 transition-all duration-300 hover:border-primary/30">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-primary/5 p-6 flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile.jpg-FmRoDfzupitXoRb16hjdLRidc9N7NB.jpeg"
                      alt="Moroccan Data Scientists Logo"
                      className="w-48 h-48 object-contain"
                    />
                  </motion.div>
                </div>

                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">{t.mdsEvent.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary">
                      {t.mdsEvent.organization}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{t.mdsEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{t.mdsEvent.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>MDS Community</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground">{t.mdsEvent.description}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {t.mdsEvent.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="bg-primary/10">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

