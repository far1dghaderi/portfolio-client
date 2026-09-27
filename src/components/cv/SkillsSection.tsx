interface SkillsSectionProps {
  skills: string[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="flex flex-wrap gap-2 py-4">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700 dark:border-neutral-700 dark:text-neutral-200"
        >
          {skill}
        </span>
      ))}
    </div>
  )
}
