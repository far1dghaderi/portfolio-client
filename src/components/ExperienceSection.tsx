import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Building2 } from "lucide-react"
import { experiences } from "@/data/cvData"

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-primary mb-4 font-mono text-sm font-semibold tracking-wider uppercase">
            &gt; CAREER PATH
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Work Experience</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl font-mono text-lg">
            Bringing ideas to life at innovative companies
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="bg-border absolute top-0 left-8 hidden h-full w-0.5 md:block"></div>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="bg-primary border-background absolute top-6 left-6 hidden h-5 w-5 rounded-full border-4 md:block"></div>
                <Card className="transition-all duration-300 hover:shadow-lg md:ml-20">
                  <CardHeader>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex flex-1 gap-4">
                        <div className="shrink-0">
                          {exp.logo ? (
                            <div className="bg-muted border-border hover:border-primary flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg border-2 transition-all duration-300 hover:scale-105">
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="h-full w-full object-contain p-2"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.style.display = "none"
                                  if (target.nextSibling) {
                                    ;(target.nextSibling as HTMLElement).style.display = "flex"
                                  }
                                }}
                              />
                              <div className="bg-primary/10 text-primary hidden h-full w-full items-center justify-center text-2xl font-bold">
                                {exp.company.charAt(0)}
                              </div>
                            </div>
                          ) : (
                            <div className="bg-primary/10 text-primary border-border hover:border-primary flex h-16 w-16 items-center justify-center rounded-lg border-2 text-2xl font-bold transition-all duration-300 hover:scale-105">
                              {exp.company.charAt(0)}
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            <Briefcase className="text-primary h-5 w-5" />
                            <CardTitle className="text-xl">{exp.position}</CardTitle>
                          </div>
                          <h3 className="text-muted-foreground mb-2 text-lg font-semibold">
                            {exp.company}
                          </h3>
                        </div>
                      </div>

                      <Badge variant="secondary" className="flex w-fit items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>

                    {exp.tools && exp.tools.length > 0 && (
                      <div className="mb-4">
                        <p className="text-muted-foreground mb-2 text-sm font-medium">
                          Technologies Used:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tools.map((tool) => (
                            <Badge
                              key={tool}
                              variant="secondary"
                              className="bg-primary/10 text-primary"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {exp.companyType && (
                      <div className="border-t pt-3">
                        <div className="text-muted-foreground flex items-center gap-2 text-sm">
                          <Building2 className="h-4 w-4" />
                          <span>{exp.companyType}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
