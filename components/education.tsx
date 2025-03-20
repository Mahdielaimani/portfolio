import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  return (
    <section id="education" className="py-16 bg-background relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Education Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My academic background and qualifications
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 w-full max-w-6xl">
            <Card>
              <CardHeader className="flex flex-col space-y-4">
                <div className="flex items-center justify-center h-20 w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/utbm-S7s7kuE8YotVZQ5F11CZ0CEnjBiqHi.png"
                    alt="UTBM Logo"
                    className="h-16 object-contain"
                  />
                </div>
                <div>
                  <CardTitle>Master's Degree (M2)</CardTitle>
                  <CardDescription>University of Technologies of Belfort-Montbéliard (UTBM)</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">2024/2025 | Belfort, France</p>
                <div className="space-y-2">
                  <p>
                    <strong>Specialization:</strong> Artificial Intelligence
                  </p>
                  <p className="text-sm font-medium text-green-600">Completed</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">AI</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                    <Badge variant="outline">Deep Learning</Badge>
                    <Badge variant="outline">Computer Vision</Badge>
                    <Badge variant="outline">NLP</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col space-y-4">
                <div className="flex items-center justify-center h-20 w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ibntofailuniversity_itu_logo.jfif-HgKAR3uSRUJPGdWT7WmwniTmw8EI7A.jpeg"
                    alt="Ibn Tofail University Logo"
                    className="h-16 object-contain"
                  />
                </div>
                <div>
                  <CardTitle>Master's Degree (M1)</CardTitle>
                  <CardDescription>Ibn Tofail University</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">2023/2024 | Kenitra, Morocco</p>
                <div className="space-y-2">
                  <p>
                    <strong>Specialization:</strong> Artificial Intelligence
                  </p>
                  <p className="text-sm font-medium text-green-600">Completed</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">AI Fundamentals</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                    <Badge variant="outline">Data Science</Badge>
                    <Badge variant="outline">Statistical Learning</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col space-y-4">
                <div className="flex items-center justify-center h-20 w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ibntofailuniversity_itu_logo.jfif-HgKAR3uSRUJPGdWT7WmwniTmw8EI7A.jpeg"
                    alt="Ibn Tofail University Logo"
                    className="h-16 object-contain"
                  />
                </div>
                <div>
                  <CardTitle>Bachelor's Degree</CardTitle>
                  <CardDescription>Ibn Tofail University</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">2020/2023 | Kenitra, Morocco</p>
                <div className="space-y-2">
                  <p>
                    <strong>Specialization:</strong> Mathematical and Computer Sciences
                  </p>
                  <p className="text-sm font-medium text-green-600">Completed</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">Mathematics</Badge>
                    <Badge variant="outline">Computer Science</Badge>
                    <Badge variant="outline">Programming</Badge>
                    <Badge variant="outline">Algorithms</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

