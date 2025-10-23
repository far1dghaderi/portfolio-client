import { Card } from "@/components/ui/card"

export function ContactCTA() {
  return (
    <section id="contact" className="pt-16 pb-8 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card p-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl sm:p-12">
          <h2 className="mb-4 text-3xl font-bold">Let's Connect</h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl font-mono text-lg">
            I'm currently available for freelance work and open to discussing new projects. Let's
            build something amazing together.
          </p>
          <a
            href="mailto:faridghaderi2001@gmail.com"
            className="bg-primary hover:bg-primary/90 text-primary-foreground inline-block rounded-lg px-8 py-3 font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            faridghaderi2001@gmail.com
          </a>
        </Card>
      </div>
    </section>
  )
}
