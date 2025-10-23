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
                href="https://uc32b642ba2c6088e4ae386de06b.dl.dropboxusercontent.com/cd/0/get/CzybSxoB3nszji9bQ1DEA88RdMx17I5YifL0ukx1R9asI_twUDrHxxthmhK2F6pTQRfr-ch6I8YyL4cT36KoM6TG6IXaR8zAAHct9S1q8c-RgNT5KVB-xr7FddM-VpNIXDgfVKK3hn7mf60c2mMV9TkmI47OpXQgGUP8zwIdxaQGlA/file"
              >
                Download CV
              </a>
            </Button>
          </div>
          <ProfileSection profile={cvProfile} />
          <div className="px-4 pt-5 pb-3">
            <h2 className="pb-3 text-[22px] leading-tight font-bold tracking-tight">Summary</h2>
            <p className="pt-1 pb-3 text-base leading-normal font-normal">{cvProfile.summary}</p>
          </div>
          <div className="px-4 pt-5 pb-3">
            <h2 className="pb-3 text-[22px] leading-tight font-bold tracking-tight">Experience</h2>
          </div>
          <div className="space-y-2">
            {experiences.map((exp) => (
              <ExperienceItem key={exp.id} experience={exp} />
            ))}
          </div>
          <div className="px-4 pt-5 pb-3">
            <h2 className="pb-3 text-[22px] leading-tight font-bold tracking-tight">Education</h2>
          </div>
          <div className="space-y-2">
            {education.map((edu) => (
              <EducationItem key={edu.id} education={edu} />
            ))}
          </div>
          <div className="px-4 pt-5 pb-3">
            <h2 className="pb-3 text-[22px] leading-tight font-bold tracking-tight">
              Technical Skills
            </h2>
          </div>
          <SkillsSection skills={skills} />
          <div className="px-4 pt-5 pb-3">
            <h2 className="pb-3 text-[22px] leading-tight font-bold tracking-tight">Soft Skills</h2>
          </div>
          <SkillsSection skills={softSkills} />
          <div className="px-4 pt-5 pb-3">
            <h2 className="pb-3 text-[22px] leading-tight font-bold tracking-tight">Languages</h2>
          </div>
          <SkillsSection skills={languages} />
        </div>
      </div>
    </div>
  )
}
