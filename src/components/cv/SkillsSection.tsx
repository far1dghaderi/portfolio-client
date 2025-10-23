import { Badge } from "@/components/ui/badge"

interface SkillsSectionProps {
  skills: string[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="flex flex-wrap gap-3 p-3">
      {skills.map((skill) => (
        <Badge key={skill} variant="secondary" className="h-8 px-4">
          {skill}
        </Badge>
      ))}
    </div>
  )
}

