import { Link } from "react-router-dom"
import { experiences } from "@/data/cvData"

export function ExperienceSection() {
  return (
    <section id="work" className="scroll-mt-8 py-12 sm:py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Work</h2>
        <Link
          to="/cv"
          className="text-sm font-medium underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:decoration-neutral-600 dark:hover:decoration-white"
        >
          Full CV
        </Link>
      </div>

      <div className="mt-8 divide-y divide-neutral-200 dark:divide-neutral-800">
        {experiences.map((exp) => (
          <article key={exp.id} className="py-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold">{exp.company}</h3>
              <p className="text-sm text-neutral-400">{exp.period}</p>
            </div>
            <p className="text-ink mt-1 text-sm font-medium">{exp.position}</p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {exp.description}
            </p>
            {exp.companyType && <p className="mt-2 text-xs text-neutral-400">{exp.companyType}</p>}
            {exp.tools.length > 0 && (
              <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                {exp.tools.join("  ·  ")}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
