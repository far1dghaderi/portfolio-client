import { useRef } from "react"
import { Link } from "react-router-dom"
import { CompanyLogo } from "@/components/common/CompanyLogo"
import { Icon } from "@/components/common/Icon"
import { SectionLabel } from "@/components/common/SectionLabel"
import { experiences } from "@/data/cvData"
import type { Experience } from "@/types/cv"

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <article className="experience-card snap-start shrink-0 w-[85%] sm:w-[420px] flex flex-col rounded-xl border border-outline-variant bg-surface-container-low p-space-lg shadow-sm transition-all hover:border-outline hover:bg-surface-container">
      <div className="flex items-center justify-between gap-space-sm">
        <span className="font-mono-label text-mono-label text-primary">
          {String(index + 1).padStart(2, "0")} / {experience.company.toUpperCase()}
        </span>
        <span className="w-fit inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high font-mono-label text-mono-label text-on-surface-variant">
          <Icon name="calendar_today" className="text-[13px]" />
          {experience.period}
        </span>
      </div>

      <div className="mt-space-md flex items-start gap-space-md">
        <CompanyLogo experience={experience} />
        <div className="flex flex-col">
          <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
            {experience.position}
          </h3>
          <p className="font-mono-code text-mono-code text-on-surface-variant">{experience.company}</p>
        </div>
      </div>

      <p className="mt-space-md font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        {experience.description}
      </p>

      {experience.tools.length > 0 ? (
        <div className="mt-space-md flex flex-wrap gap-1.5">
          {experience.tools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-0.5 rounded bg-surface-container-high font-mono-label text-mono-label text-on-surface-variant"
            >
              {tool}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-space-lg border-t border-outline-variant pt-space-sm flex items-center gap-2 font-mono-label text-mono-label text-outline">
        <Icon name="building" className="text-[14px]" />
        <span>{experience.companyType}</span>
      </div>
    </article>
  )
}

export function ExperienceSlider() {
  const trackRef = useRef<HTMLDivElement>(null)

  function scroll(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const firstCard = track.firstElementChild as HTMLElement | null
    const amount = firstCard ? firstCard.offsetWidth + 24 : track.clientWidth
    track.scrollBy({ left: amount * direction, behavior: "smooth" })
  }

  return (
    <section id="experience" className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-site mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <SectionLabel index="03">Career Path</SectionLabel>
            <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-semibold text-on-surface">
              Work Experience
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Bringing ideas to life at innovative companies.
            </p>
          </div>

          <div className="flex items-center gap-space-sm">
            <Link
              to="/experience"
              className="inline-flex items-center gap-1 font-mono-code text-mono-code text-primary hover:text-primary-fixed transition-colors"
            >
              <span>View full experience</span>
              <Icon name="east" className="text-[18px]" />
            </Link>
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous experience"
              className="grid h-9 w-9 place-items-center rounded-lg border border-outline-variant bg-surface-container-low text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
            >
              <Icon name="chevron_left" className="text-[20px]" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next experience"
              className="grid h-9 w-9 place-items-center rounded-lg border border-outline-variant bg-surface-container-low text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
            >
              <Icon name="chevron_right" className="text-[20px]" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-space-lg flex gap-gutter overflow-x-auto snap-x snap-mandatory scroll-smooth pb-space-xs"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
