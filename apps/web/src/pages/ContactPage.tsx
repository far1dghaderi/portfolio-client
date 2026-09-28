import { Icon } from "@/components/common/Icon"
import { ContactCTA } from "@/components/home/ContactCTA"
import { contactLinks, contactToneText, displayUrl } from "@/data/contact"

export function ContactPage() {
  return (
    <>
      <section className="w-full max-w-site mx-auto px-margin-mobile lg:px-margin py-space-xl">
        <div className="flex flex-col gap-space-sm max-w-3xl">
          <div className="flex items-center gap-space-xs">
            <span className="font-mono-label text-mono-label text-primary uppercase tracking-widest">
              [CONTACT // 01]
            </span>
            <span className="w-8 h-px bg-outline-variant" />
            <span className="font-mono-label text-mono-label text-secondary">SYS_LINK</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero font-bold text-on-surface tracking-tight">
            Get in Touch
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Feel free to reach out through any of these platforms. I usually reply within 24 hours.
          </p>
        </div>
      </section>

      <section className="w-full max-w-site mx-auto px-margin-mobile lg:px-margin pb-space-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {contactLinks.map((link) => {
            const LinkIcon = link.icon
            const external = !link.url.startsWith("mailto:")

            return (
              <a
                key={link.id}
                href={link.url}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-space-md p-space-lg rounded-xl bg-surface-container-low border border-outline-variant shadow-sm hover:bg-surface-container hover:border-primary transition-all"
              >
                <div
                  className={`w-11 h-11 rounded-lg bg-surface-container-high flex items-center justify-center ${contactToneText[link.tone]}`}
                >
                  <LinkIcon className="text-[20px]" aria-hidden="true" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="font-headline-md text-[15px] font-semibold text-on-surface group-hover:text-primary transition-colors">
                    {link.name}
                  </span>
                  <span className="font-mono-code text-[12px] text-outline truncate">
                    {displayUrl(link.url)}
                  </span>
                </div>
                <Icon
                  name="north_east"
                  className="text-[18px] text-on-surface-variant group-hover:text-primary transition-colors"
                />
              </a>
            )
          })}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
