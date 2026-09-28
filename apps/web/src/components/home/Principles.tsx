import { Icon } from "@/components/common/Icon"
import { SectionLabel } from "@/components/common/SectionLabel"
import { principles } from "@/data/site"

const toneText: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
}

export function Principles() {
  return (
    <section id="services" className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-site mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <SectionLabel index="04">Operating Principles</SectionLabel>
            <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-semibold text-on-surface">
              How I Operate &amp; What You Get
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Engineering isn't just about syntax—it's about predictability, durability, and business
              impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {principles.map((principle) => (
              <div
                key={principle.index}
                className="p-space-lg rounded-xl bg-surface-container flex flex-col gap-space-md shadow-sm"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center ${toneText[principle.tone]}`}
                >
                  <Icon name={principle.icon} className="text-[24px]" />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-mono-label text-mono-label text-on-surface-variant uppercase">
                    Principle {principle.index}
                  </span>
                  <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
                    {principle.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                    {principle.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
