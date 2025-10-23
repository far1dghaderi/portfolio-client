import type { Experience } from "@/types/cv"
import { Badge } from "@/components/ui/badge"

interface ExperienceItemProps {
  experience: Experience
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="bg-card flex flex-col gap-3 rounded-lg px-4 py-3 shadow-sm">
      <div className="flex justify-between gap-4">
        <div className="flex flex-1 flex-col">
          <p className="text-base leading-normal font-medium">{experience.company}</p>
          {experience.position && (
            <p className="text-primary text-sm leading-normal font-medium italic">
              {experience.position}
            </p>
          )}
          <p className="text-muted-foreground mt-2 text-sm leading-normal font-normal">
            {experience.description}
          </p>
        </div>
        <div className="shrink-0">
          <p className="text-muted-foreground text-sm leading-normal font-normal">
            {experience.period}
          </p>
        </div>
      </div>
      {experience.tools && experience.tools.length > 0 && (
        <div className="flex flex-wrap gap-2 border-t pt-2">
          {experience.tools.map((tool) => (
            <Badge key={tool} variant="secondary" className="bg-primary/10 text-primary text-xs">
              {tool}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
