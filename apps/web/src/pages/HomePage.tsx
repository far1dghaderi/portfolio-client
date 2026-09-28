import { Hero } from "@/components/home/Hero"
import { SignalsStrip } from "@/components/home/SignalsStrip"
import { FeaturedWork } from "@/components/home/FeaturedWork"
import { ExperienceSlider } from "@/components/home/ExperienceSlider"
import { Principles } from "@/components/home/Principles"
import { LatestWriting } from "@/components/home/LatestWriting"
import { AboutTeaser } from "@/components/home/AboutTeaser"
import { ContactCTA } from "@/components/home/ContactCTA"

export function HomePage() {
  return (
    <>
      <Hero />
      <SignalsStrip />
      <FeaturedWork />
      <ExperienceSlider />
      <Principles />
      <LatestWriting />
      <AboutTeaser />
      <ContactCTA />
    </>
  )
}
