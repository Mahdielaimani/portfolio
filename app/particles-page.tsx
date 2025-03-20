import AIIntro from "@/components/ai-intro"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import MultiAgentProject from "@/components/multi-agent-project"
import ParticlesBackground from "@/components/animations/particles-background"

export default function ParticlesPage() {
  return (
    <>
      <ParticlesBackground />
      <main className="relative z-10">
        <AIIntro />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <MultiAgentProject />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

