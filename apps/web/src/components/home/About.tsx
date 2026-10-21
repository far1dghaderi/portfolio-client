import { Icon } from "@/components/common/Icon"
import { Reveal } from "@/components/common/Reveal"
import { SectionHeading } from "@/components/common/SectionHeading"
import { aboutParagraphs, focusAreas } from "@/data/site"
import { trackSpotlight } from "@/lib/spotlight"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="About" title="Engineer first, product-minded always." />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          {aboutParagraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 80}>
              <p className="text-on-surface-variant first:text-on-surface text-lg leading-relaxed">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {focusAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 100}>
              <div
                onMouseMove={trackSpotlight}
                className="spotlight group flex gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/10"
              >
                <span className="bg-primary/10 text-primary grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                  <Icon name={area.icon} className="text-[20px]" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-on-surface text-lg font-semibold">
                    {area.title}
                  </h3>
                  <p className="text-on-surface-variant text-[15px] leading-relaxed">{area.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
