import type { Education } from "@/types/cv"

interface EducationItemProps {
  education: Education
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <div className="bg-card flex justify-between gap-4 rounded-lg px-4 py-3 shadow-sm">
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-base leading-normal font-medium">{education.institution}</p>
        <p className="text-primary text-sm leading-normal font-medium italic">
          {education.position}
        </p>
        <p className="text-muted-foreground text-sm leading-normal font-normal">
          {education.description}
        </p>
      </div>
      <div className="shrink-0">
        <p className="text-muted-foreground text-sm leading-normal font-normal">
          {education.period}
        </p>
      </div>
    </div>
  )
}
