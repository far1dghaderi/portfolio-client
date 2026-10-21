import { CompanyLogo } from "@/components/common/CompanyLogo"
import { Icon } from "@/components/common/Icon"
import { Reveal } from "@/components/common/Reveal"
import { SectionHeading } from "@/components/common/SectionHeading"
import { education, experiences } from "@/data/cvData"
import { site } from "@/data/site"
import { trackSpotlight } from "@/lib/spotlight"

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've been building"
        action={
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-on-surface hover:border-primary/40 hover:text-primary inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm transition-all hover:-translate-y-0.5"
          >
            <Icon name="file_download" className="text-[16px]" />
            Download résumé
          </a>
        }
      >
        Four years across authentication platforms, a healthcare startup and my own studio, always
        remote and always close to production.
      </SectionHeading>

      <ol className="before:from-primary/50 relative flex flex-col gap-6 before:absolute before:top-4 before:bottom-4 before:left-[23px] before:hidden before:w-px before:bg-gradient-to-b before:via-white/10 before:to-transparent sm:before:left-[27px] sm:before:block">
        {experiences.map((job, index) => {
          const current = job.period.includes("Present")
          return (
            <Reveal
              as="li"
              key={job.id}
              delay={index * 60}
              className="relative flex gap-5 sm:gap-7"
            >
              <div className="relative z-10 hidden shrink-0 rounded-xl bg-[#0b0d11] sm:block">
                <CompanyLogo experience={job} />
              </div>
              <article
                onMouseMove={trackSpotlight}
                className="spotlight flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/10 sm:p-7"
              >
                <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="flex flex-col gap-1">
                    <div className="mb-3 sm:hidden">
                      <CompanyLogo experience={job} />
                    </div>
                    <h3 className="font-display text-on-surface text-xl font-semibold">
                      {job.position}
                    </h3>
                    <p className="text-on-surface text-[15px]">
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary hover:decoration-primary underline decoration-white/20 underline-offset-4 transition-colors"
                        >
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </p>
                    <p className="text-outline text-sm">{job.companyType}</p>
                  </div>
                  <span
                    className={
                      current
                        ? "bg-secondary/10 text-secondary inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs"
                        : "text-on-surface-variant inline-flex w-fit shrink-0 rounded-full bg-white/5 px-3 py-1 font-mono text-xs"
                    }
                  >
                    {current ? <span className="bg-secondary h-1.5 w-1.5 rounded-full" /> : null}
                    {job.period}
                  </span>
                </header>

                <p className="text-on-surface-variant mt-4 leading-relaxed">{job.description}</p>

                {job.highlights?.length ? (
                  <ul className="mt-4 flex flex-col gap-2">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-on-surface-variant flex gap-3 text-[15px] leading-relaxed"
                      >
                        <span className="bg-primary mt-[0.6rem] h-1 w-1 shrink-0 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.tools.map((tool) => (
                    <li
                      key={tool}
                      className="text-on-surface-variant rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px]"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </ol>

      <Reveal className="mt-16">
        <h3 className="text-outline mb-5 font-mono text-xs tracking-[0.2em] uppercase">
          Education
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {education.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <p className="text-primary font-mono text-xs">{item.period}</p>
              <p className="text-on-surface mt-2 font-semibold">{item.position}</p>
              <p className="text-on-surface-variant mt-1 text-sm">{item.institution}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
