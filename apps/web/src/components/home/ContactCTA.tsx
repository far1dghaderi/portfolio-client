import { useState } from "react"
import { Icon } from "@/components/common/Icon"
import { site } from "@/data/site"

export function ContactCTA() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-site mx-auto px-margin-mobile lg:px-margin">
        <div className="p-space-xl rounded-2xl bg-surface-container shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-space-xl relative overflow-hidden">
          <div className="flex flex-col gap-space-sm max-w-xl">
            <div className="inline-flex items-center gap-2 font-mono-label text-mono-label text-secondary">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span>ACCEPTING INQUIRIES FOR Q2</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-semibold text-on-surface">
              Have a web application to build or need backend engineering strength?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Whether you need an end-to-end full-stack build or a dedicated engineer for your team,
              let's talk about scope and timelines.
            </p>
            <div className="pt-space-xs font-mono-label text-mono-label text-outline flex items-center gap-2">
              <Icon name="schedule" className="text-[16px] text-secondary" />
              <span>
                {site.responseTime} {site.timezone}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-space-md w-full lg:w-auto min-w-[280px]">
            <button
              type="button"
              onClick={copyEmail}
              className="w-full flex items-center justify-between px-space-md py-3 rounded-lg bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-high transition-all group"
            >
              <span className="flex items-center gap-2 font-mono-code text-mono-code">
                <Icon name="mail" className="text-primary text-[18px]" />
                <span>{copied ? "Copied to clipboard!" : site.email}</span>
              </span>
              <Icon
                name={copied ? "check" : "content_copy"}
                className={`text-[18px] ${copied ? "text-secondary" : "text-on-surface-variant group-hover:text-primary"}`}
              />
            </button>

            <a
              href={`mailto:${site.email}?subject=Intro%20call`}
              className="w-full inline-flex items-center justify-center px-space-md py-3 rounded-lg bg-primary-container text-on-primary-container font-mono-code text-mono-code font-semibold shadow hover:bg-primary transition-all text-center"
            >
              <span>Book an Intro Call</span>
              <Icon name="calendar_today" className="ml-1.5 text-[18px]" />
            </a>

            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="w-full inline-flex items-center justify-center px-space-md py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface font-mono-label text-mono-label transition-colors"
            >
              <Icon name="description" className="mr-1.5 text-[16px]" />
              <span>Download Résumé (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
