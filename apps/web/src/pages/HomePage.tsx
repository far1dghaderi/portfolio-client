import { Hero } from "@/components/home/Hero"
import { About } from "@/components/home/About"
import { Projects } from "@/components/home/Projects"
import { Experience } from "@/components/home/Experience"
import { Stack } from "@/components/home/Stack"
import { Writing } from "@/components/home/Writing"
import { Contact } from "@/components/home/Contact"

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Stack />
      <Writing />
      <Contact />
    </>
  )
}
