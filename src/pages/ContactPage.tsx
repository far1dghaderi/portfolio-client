import { Navbar } from "@/components/Navbar"
import { socialLinks } from "@/data/contactData"

export function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <div className="bg-background flex flex-1 items-center justify-center px-4 py-12">
        <div className="flex w-full max-w-lg flex-col items-center gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Feel free to reach out through any of these platforms
            </p>
          </div>
          <div className="flex w-full max-w-md flex-col gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 rounded-lg px-6 py-4 text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg ${social.color}`}
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-lg font-semibold">{social.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
