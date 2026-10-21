import { Icon } from "@/components/common/Icon"
import { Reveal } from "@/components/common/Reveal"
import { SectionHeading } from "@/components/common/SectionHeading"
import { stackGroups } from "@/data/site"
import { trackSpotlight } from "@/lib/spotlight"

const allTech = stackGroups.flatMap((group) => group.items)

export function Stack() {
  return (
    <section id="stack" className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Toolbox" title="The stack I reach for">
          TypeScript end to end, a relational database by default, and boring, well-understood
          infrastructure.
        </SectionHeading>
      </div>

      <div className="marquee mb-12 overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex w-max gap-3">
          {[...allTech, ...allTech].map((tech, index) => (
            <span
              key={index}
              className="font-display text-on-surface-variant/70 rounded-full border border-white/[0.06] bg-white/[0.02] px-5 py-2 text-lg font-semibold whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {stackGroups.map((group, index) => (
          <Reveal key={group.title} delay={(index % 3) * 100}>
            <div
              onMouseMove={trackSpotlight}
              className="spotlight group h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/10"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="text-primary group-hover:bg-primary/10 grid h-9 w-9 place-items-center rounded-lg bg-white/5 transition-colors">
                  <Icon name={group.icon} className="text-[18px]" />
                </span>
                <h3 className="font-display text-on-surface font-semibold">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-on-surface-variant hover:text-on-surface rounded-lg bg-white/[0.04] px-3 py-1.5 text-sm transition-colors hover:bg-white/[0.08]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
