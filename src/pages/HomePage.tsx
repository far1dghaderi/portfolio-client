import { SiteShell } from "@/components/SiteShell"
import { Hero } from "@/components/Hero"
import { ServicesSection } from "@/components/ServicesSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { HobbiesSection } from "@/components/HobbiesSection"
import { ContactCTA } from "@/components/ContactCTA"

export function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <ServicesSection />
      <ExperienceSection />
      <HobbiesSection />
      <ContactCTA />
    </SiteShell>
  )
}
