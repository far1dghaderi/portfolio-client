import { useState } from "react"
import { Icon } from "@/components/common/Icon"
import { Reveal } from "@/components/common/Reveal"
import { contactLinks, displayUrl } from "@/data/contact"
import { site } from "@/data/site"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  const socials = contactLinks.filter((link) => link.id !== "email")

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal className="from-surface-container to-surface-container-lowest relative isolate overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          className="aurora bg-primary-container/70 -top-24 -left-20 -z-10 h-72 w-72"
          aria-hidden="true"
        />
        <div
          className="aurora bg-secondary-container/60 -right-16 -bottom-24 -z-10 h-72 w-72 [animation-delay:-8s]"
          aria-hidden="true"
        />

        <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase">Contact</span>
        <h2 className="font-display text-on-surface mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Have something in mind? <span className="text-gradient">Let's build it.</span>
        </h2>
        <p className="text-on-surface-variant mx-auto mt-5 max-w-xl text-lg leading-relaxed">
          Freelance product work, a backend that needs a steady pair of hands, or a remote role.
          Tell me what you're working on.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${site.email}`}
            className="group bg-on-surface text-surface inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_32px_-10px_rgb(142_213_255/0.7)]"
          >
            <Icon name="mail" className="text-[16px]" />
            {site.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="text-on-surface inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3.5 text-sm transition-all hover:border-white/20 hover:bg-white/5"
            aria-live="polite"
          >
            <Icon
              name={copied ? "check" : "content_copy"}
              className={copied ? "text-secondary text-[16px]" : "text-[16px]"}
            />
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>

        <ul className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-3">
          {socials.map(({ id, name, url, icon: SocialIcon }) => (
            <li key={id}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={displayUrl(url)}
                className="text-on-surface-variant hover:text-on-surface inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-white/20"
              >
                <SocialIcon aria-hidden="true" className="text-base" />
                {name}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-outline mt-10 flex flex-col items-center justify-center gap-2 text-sm sm:flex-row sm:gap-4">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="globe" className="text-[14px]" />
            {site.timezone}
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="schedule" className="text-[14px]" />
            {site.responseTime}
          </span>
        </p>
      </Reveal>
    </section>
  )
}
