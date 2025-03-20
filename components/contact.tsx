"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Get in touch for opportunities or collaborations
            </p>
          </div>
          <div className="w-full max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here are the ways you can reach me directly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">mahdielaimani@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">+33 775743619 (France)</p>
                      <p className="text-sm text-muted-foreground">+212 670765397 (Morocco)</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Metz, France</p>
                      <p className="text-sm text-muted-foreground">Rabat, Morocco</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-medium mb-2">Languages</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 bg-primary/10 rounded-md">
                      <p className="font-medium">French</p>
                      <p className="text-xs text-muted-foreground">Fluent</p>
                    </div>
                    <div className="text-center p-2 bg-primary/10 rounded-md">
                      <p className="font-medium">English</p>
                      <p className="text-xs text-muted-foreground">Fluent</p>
                    </div>
                    <div className="text-center p-2 bg-primary/10 rounded-md">
                      <p className="font-medium">Arabic</p>
                      <p className="text-xs text-muted-foreground">Native</p>
                    </div>
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

