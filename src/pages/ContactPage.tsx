import { SiteShell } from "@/components/SiteShell"
import { ContactLinks } from "@/components/ContactLinks"

export function ContactPage() {
  return (
    <SiteShell>
      <section className="pt-12 pb-6 sm:pt-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in touch</h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-neutral-500 sm:text-base dark:text-neutral-400">
          Email is best. The rest of these are open if that is easier.
        </p>
        <div className="mt-8 max-w-xl">
          <ContactLinks />
        </div>
      </section>
    </SiteShell>
  )
}
