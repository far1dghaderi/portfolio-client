import { useState } from "react"
import { Icon } from "@/components/common/Icon"
import { Reveal } from "@/components/common/Reveal"
import { SectionHeading } from "@/components/common/SectionHeading"
import { featuredProject, projects } from "@/data/projects"
import type { Project } from "@/data/projects"
import { trackSpotlight } from "@/lib/spotlight"
import { cn } from "@/lib/utils"

function StackTags({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li
          key={tech}
          className="text-on-surface-variant rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px]"
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}

function BrowserFrame({ project, src, alt }: { project: Project; src: string; alt: string }) {
  return (
    <div className="bg-surface-container-lowest overflow-hidden rounded-xl border border-white/10 shadow-2xl">
      <div className="bg-surface-container-low flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <span className="text-outline ml-3 truncate rounded-md bg-white/5 px-3 py-0.5 font-mono text-[11px]">
          {project.url.replace(/^https:\/\//, "")}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          width={1440}
          height={900}
          className="enter h-full w-full object-cover object-top"
          style={{ animationDuration: "0.5s" }}
        />
      </div>
    </div>
  )
}

function FeaturedProject() {
  const [shot, setShot] = useState(0)
  const project = featuredProject
  const current = project.shots[shot]

  return (
    <Reveal className="relative isolate overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 sm:p-8 lg:p-10">
      <div
        className="aurora bg-primary-container/60 -top-40 -right-40 -z-10 h-80 w-80"
        aria-hidden="true"
      />
      <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
        <div className="flex flex-col gap-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            aria-label={`Visit ${project.title}`}
          >
            <div className="transition-transform duration-500 group-hover:-translate-y-1">
              <BrowserFrame
                project={project}
                src={current.src}
                alt={`${project.title}: ${current.label}`}
              />
            </div>
          </a>
          <div className="grid grid-cols-4 gap-2 sm:gap-3" aria-label="Screenshots">
            {project.shots.map((item, index) => (
              <button
                key={item.src}
                type="button"
                aria-pressed={index === shot}
                aria-label={`Show ${item.label}`}
                onClick={() => setShot(index)}
                className={cn(
                  "group overflow-hidden rounded-lg border text-left transition-all duration-300",
                  index === shot
                    ? "border-primary/60 ring-primary/20 ring-2"
                    : "border-white/5 opacity-60 hover:opacity-100"
                )}
              >
                <img
                  src={item.src}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top"
                />
                <span className="text-on-surface-variant hidden truncate px-2 py-1.5 text-[11px] sm:block">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="bg-tertiary/10 text-tertiary inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
              <Icon name="star" className="text-[12px]" />
              Featured case study
            </span>
            <span className="text-outline text-xs">{project.category}</span>
          </div>
          <h3 className="font-display text-on-surface text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h3>
          <p className="text-on-surface-variant leading-relaxed">{project.description}</p>
          {project.highlights ? (
            <ul className="flex flex-col gap-2.5">
              {project.highlights.map((item) => (
                <li key={item} className="text-on-surface flex gap-3 text-sm">
                  <Icon name="check_circle" className="text-secondary mt-0.5 text-[16px]" />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          <StackTags stack={project.stack} />
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-on-surface text-surface mt-2 inline-flex w-fit items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            Visit the live site
            <Icon
              name="north_east"
              className="text-[14px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </Reveal>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 120} className="h-full">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={trackSpotlight}
        className="spotlight group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/15 hover:shadow-[0_30px_60px_-30px_rgb(56_189_248/0.35)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5">
          <img
            src={project.shots[0].src}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d11]/70 via-transparent to-transparent" />
          <span className="text-surface absolute top-4 right-4 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-white/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Icon name="north_east" className="text-[16px]" />
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
          <span className="text-primary font-mono text-xs tracking-[0.15em] uppercase">
            {project.category}
          </span>
          <h3 className="font-display text-on-surface text-2xl font-bold tracking-tight">
            {project.title}
          </h3>
          <p className="text-on-surface-variant text-[15px] leading-relaxed">
            {project.description}
          </p>
          <div className="mt-auto pt-3">
            <StackTags stack={project.stack} />
          </div>
        </div>
      </a>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Selected work"
        title="Things I've shipped"
        action={
          <a
            href="https://rapidoteam.com/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-on-surface-variant hover:text-primary inline-flex shrink-0 items-center gap-2 text-sm transition-colors"
          >
            More on rapidoteam.com
            <Icon
              name="north_east"
              className="text-[14px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        }
      >
        Live products my studio, Rapido Team, designed, built and runs in production, from data
        model to deployment.
      </SectionHeading>

      <FeaturedProject />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
