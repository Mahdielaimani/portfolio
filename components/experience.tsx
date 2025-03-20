import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-primary/5 relative">
      <div className="absolute inset-0 z-0 opacity-5 pattern-grid">
        <img
          src="https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D"
          alt="Technology Pattern"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My journey in the field of Artificial Intelligence and Machine Learning
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
            <Card>
              <CardHeader className="flex flex-col space-y-4">
                <div className="flex items-center justify-center h-16 w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_osxp_aplat-261x250.png.png-cLJHF5m9lTF96YMHabdLncFrhgdOpu.webp"
                    alt="Open Source Experience Logo"
                    className="h-12 object-contain"
                  />
                </div>
                <div>
                  <CardTitle>AI/ML Engineer & Generative AI</CardTitle>
                  <CardDescription>Open Source Experience | 5 months</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">METZ, FRANCE | 01/2025 – 05/2025</p>
                <div className="space-y-2">
                  <p>
                    Development of an intelligent conversational agent for customer support automation, integrating RAG
                    and generative AI.
                  </p>
                  <p>
                    Design of an interactive agent capable of managing complex dialogues and providing dynamic,
                    user-adapted responses.
                  </p>
                  <p>Advanced data analysis and processing to detect trends and optimize AI models.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Haystack</Badge>
                  <Badge variant="outline">BGE Embeddings</Badge>
                  <Badge variant="outline">Mistral 7B</Badge>
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">XLM-Roberta</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">ChromaDB</Badge>
                  <Badge variant="outline">CrewAI</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col space-y-4">
                <div className="flex items-center justify-center h-16 w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1703281319467.jfif-LMewHXjaFu4Tv28X9J5wgwwVls3j7p.jpeg"
                    alt="Maroc Generation Agency Logo"
                    className="h-12 object-contain"
                  />
                </div>
                <div>
                  <CardTitle>Machine Learning Intern</CardTitle>
                  <CardDescription>Maroc Generation Agency | 8 months</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">FES, MOROCCO | 04/2024 – 10/2024</p>
                <div className="space-y-2">
                  <p>
                    Participated in the design, development, and optimization of an AI-assisted dispute resolution
                    system.
                  </p>
                  <p>
                    Used advanced techniques in Machine Learning, NLP, and data processing to analyze and resolve
                    disputes.
                  </p>
                  <p>
                    Implemented data pipelines and optimized the deployment process, ensuring system fluidity and
                    efficiency at scale.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">OpenAI</Badge>
                  <Badge variant="outline">SVM</Badge>
                  <Badge variant="outline">XGBoost</Badge>
                  <Badge variant="outline">Keras</Badge>
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">Pandas/Numpy</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                  <Badge variant="outline">SQL/NoSQL</Badge>
                  <Badge variant="outline">Git/Github</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Jira</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col space-y-4">
                <div className="flex items-center justify-center h-16 w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bh9AyTouhFeVlVThGiMBTRmV5pKYaZ.png"
                    alt="Farah Sa Tech Logo"
                    className="h-12 object-contain"
                  />
                </div>
                <div>
                  <CardTitle>Software Engineering Intern</CardTitle>
                  <CardDescription>Farah Sa Tech | 3 months</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">RABAT-SALÉ-KÉNITRA, MOROCCO | 06/2022 – 08/2022</p>
                <div className="space-y-2">
                  <p>
                    Contributed to software development projects, gaining hands-on experience with industry-standard
                    tools and practices.
                  </p>
                  <p>Collaborated with the development team to implement features and fix bugs in web applications.</p>
                  <p>
                    Participated in code reviews and agile development processes to ensure high-quality deliverables.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">Agile</Badge>
                  <Badge variant="outline">Software Engineering</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col space-y-4">
                <div className="flex items-center justify-center h-16 w-full">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="Freelance Logo"
                    className="h-12 object-contain"
                  />
                </div>
                <div>
                  <CardTitle>Mobile App Developer with AI & ML Integration</CardTitle>
                  <CardDescription>Freelance | 2+ Years</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    Development of Android/iOS applications with Flutter, integrating AI & ML for an optimized user
                    experience.
                  </p>
                  <p>Use of Firebase, Dart, and AI/ML for secure and scalable solutions.</p>
                  <p>International collaboration to deliver innovative applications.</p>
                  <p>Projects: Sunlingua, SH PARTNER</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Flutter</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">Dart</Badge>
                  <Badge variant="outline">AI/ML</Badge>
                  <Badge variant="outline">RESTful APIs</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">Git/Github</Badge>
                  <Badge variant="outline">Docker</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

