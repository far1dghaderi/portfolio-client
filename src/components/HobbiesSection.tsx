import type { ComponentType } from "react"
import { Code2, BookOpen, Gamepad2, Music, BicepsFlexed } from "lucide-react"
import { hobbies } from "@/data/hobbiesData"

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Code2,
  BookOpen,
  Gamepad2,
  Music,
  BicepsFlexed,
}

export function HobbiesSection() {
  return (
    <section id="about" className="scroll-mt-8 py-12 sm:py-16">
      <h2 className="text-2xl font-bold tracking-tight">About</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base dark:text-neutral-400">
        I specialize in backend development with Node.js, Express, NestJS, and TypeScript, and I
        work with both SQL and MongoDB. I build APIs and systems that stay maintainable, and I use
        React when a project needs the frontend as well. Based in London.
      </p>

      <h3 className="mt-12 text-base font-semibold">On the side</h3>
      <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((hobby) => {
          const Icon = iconMap[hobby.icon]
          return (
            <article key={hobby.id}>
              {Icon && <Icon className="text-coral h-6 w-6" />}
              <h4 className="mt-3 text-sm font-semibold">{hobby.name}</h4>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {hobby.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
