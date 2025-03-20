import AIIntro from "@/components/ai-intro"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import MultiAgentProject from "@/components/multi-agent-project"
import NeuralNetworkBackground from "@/components/animations/neural-network-background"
import SpeakingEngagements from "@/components/speaking-engagements"

export default function Home() {
  return (
    <>
      <NeuralNetworkBackground />
      <main className="relative z-10">
        <AIIntro />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <MultiAgentProject />
        <SpeakingEngagements />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

