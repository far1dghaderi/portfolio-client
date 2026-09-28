import { Icon } from "@/components/common/Icon"
import { SectionLabel } from "@/components/common/SectionLabel"
import { site } from "@/data/site"

export function AboutTeaser() {
  return (
    <section id="about" className="w-full max-w-site mx-auto px-margin-mobile lg:px-margin py-space-lg">
      <div className="p-space-xl rounded-xl bg-surface-container-low shadow-sm flex flex-col lg:flex-row items-center gap-space-xl relative overflow-hidden">
        <div className="w-full lg:w-1/3 flex flex-col gap-space-sm items-center lg:items-start text-center lg:text-left">
          <div className="relative w-24 h-24 rounded-2xl bg-surface-container-highest flex items-center justify-center overflow-hidden shadow-md">
            <img
              src={site.avatar}
              alt={`Portrait of ${site.name}`}
              className="w-full h-full object-cover opacity-85"
              loading="lazy"
            />
            <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-secondary" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-md text-headline-md font-semibold text-on-surface">{site.name}</span>
            <span className="font-mono-label text-mono-label text-primary">CS Graduate &amp; Remote Engineer</span>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col gap-space-md">
          <SectionLabel index="06">Background</SectionLabel>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            I'm a computer science graduate and remote software engineer with a deep focus on
            resilient backend systems and clean, usable web interfaces. When I'm not refactoring
            services, I'm usually in the gym, tuning my PC build, or working my way through an
            unforgiving Souls game.
          </p>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 font-mono-code text-mono-code text-on-surface hover:text-primary transition-colors"
            >
              <span>Read more about my background &amp; workstation</span>
              <Icon name="arrow_forward" className="text-[16px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
