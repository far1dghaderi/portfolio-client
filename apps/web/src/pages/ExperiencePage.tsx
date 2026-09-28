import { CompanyLogo } from "@/components/common/CompanyLogo"
import { Icon } from "@/components/common/Icon"
import { cvProfile, cvUrl, education, experiences, languages, skills, softSkills } from "@/data/cvData"

function PanelHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-space-sm mb-space-lg">
      <span className="font-mono-code text-mono-code text-primary">{index} //</span>
      <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-semibold text-on-surface tracking-tight">
        {title}
      </h2>
    </div>
  )
}

function SkillGroup({ title, items, tone }: { title: string; items: string[]; tone: string }) {
  return (
    <div className="p-space-lg rounded-xl border border-outline-variant bg-surface-container-low flex flex-col">
      <div className="flex items-center justify-between mb-space-md">
        <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">{title}</h3>
        <span className="font-mono-label text-mono-label text-outline">{items.length}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`px-2.5 py-1 rounded bg-surface-container-high font-mono-code text-[12px] ${tone}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ExperiencePage() {
  return (
    <div className="w-full max-w-site mx-auto px-margin-mobile lg:px-margin py-space-xl flex flex-col gap-space-xl">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-gutter">
        <div className="flex flex-col gap-space-xs max-w-3xl">
          <div className="flex items-center gap-space-xs">
            <span className="font-mono-label text-mono-label text-primary uppercase tracking-widest">
              [CURRICULUM // 01]
            </span>
            <span className="w-8 h-px bg-outline-variant" />
            <span className="font-mono-label text-mono-label text-secondary">SYS_PROFILE</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero font-bold text-on-surface tracking-tight">
            Experience
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            A backend-strong full-stack engineer's track record across product teams, infrastructure,
            and end-to-end builds.
          </p>
        </div>
        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex w-fit items-center justify-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary-container font-mono-label text-mono-label font-semibold shadow-md hover:bg-primary transition-all"
        >
          <Icon name="file_download" className="text-[18px]" />
          <span>Download CV</span>
        </a>
      </div>

      <div className="p-space-xl rounded-2xl border border-outline-variant bg-surface-container-low flex flex-col lg:flex-row items-center lg:items-start gap-space-xl">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-surface-container-highest">
          <img src={cvProfile.image} alt={cvProfile.name} className="h-full w-full object-cover opacity-90" />
        </div>
        <div className="flex flex-1 flex-col gap-space-sm text-center lg:text-left">
          <div className="flex flex-col">
            <span className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-semibold text-on-surface">
              {cvProfile.name}
            </span>
            <span className="font-mono-label text-mono-label text-primary">{cvProfile.title}</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {cvProfile.summary}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-space-lg gap-y-space-xs font-mono-code text-[12px] text-outline">
            {cvProfile.location ? (
              <span className="flex items-center gap-1.5">
                <Icon name="globe" className="text-[14px]" />
                {cvProfile.location}
              </span>
            ) : null}
            {cvProfile.email ? (
              <span className="flex items-center gap-1.5">
                <Icon name="mail" className="text-[14px]" />
                {cvProfile.email}
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <section>
        <PanelHeading index="01" title="Experience" />
        <div className="flex flex-col gap-gutter">
          {experiences.map((experience, index) => (
            <article
              key={experience.id}
              className="group rounded-xl border border-outline-variant bg-surface-container-low p-space-lg shadow-sm transition-all hover:bg-surface-container hover:border-outline"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-space-sm">
                <span className="font-mono-label text-mono-label text-primary">
                  {String(index + 1).padStart(2, "0")} / {experience.company.toUpperCase()}
                </span>
                <span className="w-fit inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high font-mono-label text-mono-label text-on-surface-variant">
                  <Icon name="calendar_today" className="text-[13px]" />
                  {experience.period}
                </span>
              </div>

              <div className="mt-space-md flex items-start gap-space-md">
                <CompanyLogo experience={experience} size="lg" />
                <div className="flex flex-col">
                  <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
                    {experience.position}
                  </h3>
                  <p className="font-mono-code text-mono-code text-on-surface-variant">
                    {experience.company}
                  </p>
                </div>
              </div>

              <p className="mt-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {experience.description}
              </p>

              {experience.tools.length > 0 ? (
                <div className="mt-space-md flex flex-wrap gap-1.5">
                  {experience.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded bg-surface-container-high font-mono-label text-mono-label text-on-surface-variant"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-space-lg border-t border-outline-variant pt-space-sm flex items-center gap-2 font-mono-label text-mono-label text-outline">
                <Icon name="building" className="text-[14px]" />
                <span>{experience.companyType}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <PanelHeading index="02" title="Education" />
        <div className="flex flex-col gap-gutter">
          {education.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-outline-variant bg-surface-container-low p-space-lg shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-space-xs">
                <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
                  {item.institution}
                </h3>
                <span className="w-fit px-2 py-0.5 rounded bg-surface-container-high font-mono-label text-mono-label text-on-surface-variant">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 font-mono-code text-mono-code text-primary">{item.position}</p>
              {item.description ? (
                <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
                  {item.description}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section>
        <PanelHeading index="03" title="Capabilities" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <SkillGroup title="Technical Skills" items={skills} tone="text-primary" />
          <SkillGroup title="Soft Skills" items={softSkills} tone="text-secondary" />
          <SkillGroup title="Languages" items={languages} tone="text-tertiary" />
        </div>
      </section>
    </div>
  )
}
