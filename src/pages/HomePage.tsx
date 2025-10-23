import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ExperienceSection } from "@/components/ExperienceSection"
import { HobbiesSection } from "@/components/HobbiesSection"
import { ContactCTA } from "@/components/ContactCTA"
import { Footer } from "@/components/Footer"

export function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <ExperienceSection />
      <HobbiesSection />
      <ContactCTA />
      <Footer />
    </div>
  )
}
