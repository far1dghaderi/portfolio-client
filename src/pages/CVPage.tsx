import { SiteShell } from "@/components/SiteShell"
import { ProfileSection } from "@/components/cv/ProfileSection"
import { ExperienceItem } from "@/components/cv/ExperienceItem"
import { EducationItem } from "@/components/cv/EducationItem"
import { SkillsSection } from "@/components/cv/SkillsSection"
import {
  cvProfile,
  experiences,
  education,
  skills,
  softSkills,
  languages,
  cvUrl,
} from "@/data/cvData"

export function CVPage() {
  return (
    <SiteShell>
      <div className="py-10 sm:py-12">
        <ProfileSection profile={cvProfile} cvUrl={cvUrl} />

        <section className="mt-10">
          <h2 className="border-b border-neutral-200 pb-3 text-xl font-bold dark:border-neutral-800">
            Summary
          </h2>
          <p className="max-w-3xl pt-4 text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-neutral-300">
            {cvProfile.summary}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="border-b border-neutral-200 pb-3 text-xl font-bold dark:border-neutral-800">
            Experience
          </h2>
          <div>
            {experiences.map((exp) => (
              <ExperienceItem key={exp.id} experience={exp} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="border-b border-neutral-200 pb-3 text-xl font-bold dark:border-neutral-800">
            Education
          </h2>
          <div>
            {education.map((edu) => (
              <EducationItem key={edu.id} education={edu} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="border-b border-neutral-200 pb-3 text-xl font-bold dark:border-neutral-800">
            Technical Skills
          </h2>
          <SkillsSection skills={skills} />
        </section>

        <section className="mt-10">
          <h2 className="border-b border-neutral-200 pb-3 text-xl font-bold dark:border-neutral-800">
            Soft Skills
          </h2>
          <SkillsSection skills={softSkills} />
        </section>

        <section className="mt-10">
          <h2 className="border-b border-neutral-200 pb-3 text-xl font-bold dark:border-neutral-800">
            Languages
          </h2>
          <SkillsSection skills={languages} />
        </section>
      </div>
    </SiteShell>
  )
}
