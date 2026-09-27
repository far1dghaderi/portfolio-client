import type { Education } from "@/types/cv"

interface EducationItemProps {
  education: Education
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <article className="border-b border-neutral-200 py-5 last:border-b-0 dark:border-neutral-800">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="font-semibold">{education.institution}</p>
        <p className="text-sm text-neutral-400">{education.period}</p>
      </div>
      <p className="text-ink mt-1 text-sm font-medium">{education.position}</p>
      {education.description && (
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {education.description}
        </p>
      )}
    </article>
  )
}
