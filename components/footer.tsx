"use client"

import { Github, Linkedin, Mail, Award } from "lucide-react"
import { useState, useEffect } from "react"

// Simple translations
const translations = {
  en: {
    name: "EL AIMANI EL MAHDI",
    title: "AI Engineer & Machine Learning Specialist",
    quickLinks: "Quick Links",
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    speaking: "Speaking",
    contact: "Contact",
    rights: "All rights reserved.",
  },
  fr: {
    name: "EL AIMANI EL MAHDI",
    title: "Ingénieur IA & Spécialiste en Machine Learning",
    quickLinks: "Liens Rapides",
    about: "À propos",
    experience: "Expérience",
    skills: "Compétences",
    projects: "Projets",
    speaking: "Conférences",
    contact: "Contact",
    rights: "Tous droits réservés.",
  },
}

export default function Footer() {
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
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t.name}</h3>
            <p className="text-sm text-muted-foreground">{t.title}</p>
            <div className="flex space-x-4">
              <a href="https://github.com/Mahdielaimani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/el-mahdi-el-aimani-bb5555227/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="mailto:mahdielaimani@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t.quickLinks}</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.about}
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.about}
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.experience}
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.skills}
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.projects}
              </a>
              <a href="#speaking" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.speaking}
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.contact}
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Certifications</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="https://www.linkedin.com/learning/certificates/c6283f415ef162c8491102aed9a8191cbf33c0d5e3e08b35190ef4957b1c3456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    Generative AI and Large Language Models on AWS
                  </a>
                  <p className="text-xs text-muted-foreground">LinkedIn Learning</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="https://www.linkedin.com/learning/certificates/3927d1a521bb78620d5edc96df9fb52a428b7d6e1d42375ec764a620af7f8c74"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    Generative AI: Working with Large Language Models
                  </a>
                  <p className="text-xs text-muted-foreground">LinkedIn Learning</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} EL AIMANI EL MAHDI. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

