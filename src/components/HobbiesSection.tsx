import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2,
  BookOpen,
  Gamepad2,
  Music,
  Camera,
  Plane,
  Heart,
  Volleyball,
  BicepsFlexed,
} from "lucide-react"
import { hobbies } from "@/data/hobbiesData"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  BookOpen,
  Gamepad2,
  Music,
  Camera,
  Plane,
  Volleyball,
  BicepsFlexed,
}

export function HobbiesSection() {
  return (
    <section id="hobbies" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <Heart className="text-primary h-6 w-6 animate-pulse" />
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Hobbies & Interests</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl font-mono text-lg">
            When I'm not coding, you'll find me doing these things
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby) => {
            const Icon = iconMap[hobby.icon]
            return (
              <Card
                key={hobby.id}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <CardTitle className="text-xl">{hobby.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
