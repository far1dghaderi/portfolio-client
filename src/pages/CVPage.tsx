import { Navbar } from "@/components/Navbar"
import { ProfileSection } from "@/components/cv/ProfileSection"
import { ExperienceItem } from "@/components/cv/ExperienceItem"
import { EducationItem } from "@/components/cv/EducationItem"
import { SkillsSection } from "@/components/cv/SkillsSection"
import { Button } from "@/components/ui/button"
import { MdDownload } from "react-icons/md"
import { cvProfile, experiences, education, skills, softSkills, languages } from "@/data/cvData"

export function CVPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />

      <div className="bg-background flex flex-1 justify-center px-4 py-5 sm:px-10 lg:px-40">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <div className="mb-6 flex justify-end print:hidden">
            <Button size="lg" className="shadow-md">
              <MdDownload className="mr-2 h-5 w-5" />
              <a
                target="_blank"
                href="https://dl.dropboxusercontent.com/scl/fi/uwe3rixu0deggmnhoufv6/farid-ghaderi-cv.pdf?rlkey=unzrymwo2voijv4coduplnfg2"
              >
                Download CV
              </a>
            </Button>
          </div>
          <ProfileSection profile={cvProfile} />
          <div className="bg-card rounded-lg px-4 pt-5 pb-3 mb-4">
            <h2 className="pb-3 text-[22px] leading-tight font-bold tracking-tight">Summary</h2>
            <p className="pt-1 pb-3 text-justify text-base leading-normal font-normal">
              {cvProfile.summary}
            </p>
          </div>
          <div className="bg-card rounded-lg px-4 pt-5 pb-3 mb-2">
            <h2 className="pb-3 text-[22px] leading-tight font-bold tracking-tight">Experience</h2>
          </div>
          <div className="space-y-2 mb-4">
            {experiences.map((exp) => (
              <ExperienceItem key={exp.id} experience={exp} />
            ))}
          </div>
          <div className="bg-card rounded-lg px-4 pt-5 pb-3 mb-2">
            <h2 className="pb-3 text-[22px] leading-tight font-bold tracking-tight">Education</h2>
          </div>
          <div className="space-y-2 mb-4">
            {education.map((edu) => (
              <EducationItem key={edu.id} education={edu} />
            ))}
          </div>
          <div className="bg-card rounded-lg px-4 pt-5 pb-3 mb-2">
            <h2 className="pb-3 text-[22px] leading-tight font-bold tracking-tight">
              Technical Skills
            </h2>
          </div>
          <div className="bg-card rounded-lg mb-4">
            <SkillsSection skills={skills} />
          </div>
          <div className="bg-card rounded-lg px-4 pt-5 pb-3 mb-2">
            <h2 className="pb-3 text-[22px] leading-tight font-bold tracking-tight">Soft Skills</h2>
          </div>
          <div className="bg-card rounded-lg mb-4">
            <SkillsSection skills={softSkills} />
          </div>
          <div className="bg-card rounded-lg px-4 pt-5 pb-3 mb-2">
            <h2 className="pb-3 text-[22px] leading-tight font-bold tracking-tight">Languages</h2>
          </div>
          <div className="bg-card rounded-lg">
            <SkillsSection skills={languages} />
          </div>
        </div>
      </div>
    </div>
  )
}
