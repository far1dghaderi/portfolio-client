import type { Experience } from "@/types/cv"

interface ExperienceItemProps {
  experience: Experience
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="border-b border-neutral-200 py-5 last:border-b-0 dark:border-neutral-800">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="font-semibold">{experience.company}</p>
        <p className="text-sm text-neutral-400">{experience.period}</p>
      </div>
      <p className="text-ink mt-1 text-sm font-medium">{experience.position}</p>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        {experience.description}
      </p>
      {experience.tools && experience.tools.length > 0 && (
        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
          {experience.tools.join("  ·  ")}
        </p>
      )}
    </article>
  )
}
