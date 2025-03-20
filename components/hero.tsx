import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import AnimatedText from "@/components/animations/animated-text"
import FadeIn from "@/components/animations/fade-in"
import TypingEffect from "@/components/animations/typing-effect"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background pt-24 pb-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <AnimatedText
                text="EL AIMANI EL MAHDI"
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                delay={0.2}
              />
              <FadeIn delay={0.5}>
                <TypingEffect
                  texts={["AI Engineer", "Machine Learning Specialist", "Deep Learning Expert", "Data Scientist"]}
                  className="text-xl text-muted-foreground block h-8"
                />
              </FadeIn>
            </div>
            <FadeIn delay={0.7}>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Developing intelligent solutions with expertise in AI, Machine Learning, and Data Engineering
              </p>
            </FadeIn>
            <FadeIn delay={0.9}>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="relative overflow-hidden group">
                  <Link href="#contact">
                    <span className="relative z-10">Contact Me</span>
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
                    <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={1.1}>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                  <a
                    href="https://github.com/Mahdielaimani"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                  <a
                    href="https://www.linkedin.com/in/el-mahdi-el-aimani-bb5555227/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.5}>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-30 animate-pulse"></div>
                <img
                  alt="EL AIMANI EL MAHDI"
                  className="rounded-full object-cover border-4 border-primary/20 h-[400px] w-[400px] relative z-10"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-01-06_16-11-50-Photoroom-Aq8Zu1xpicdLLP6PAnqirih9svPDZO.png"
                  width="400"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

