import { Link } from "react-router-dom"
import { site } from "@/data/site"
import { contactLinks } from "@/data/contact"

const indexLinks = [
  { name: "Work", to: "/work" },
  { name: "Writing", to: "/writing" },
  { name: "Experience", to: "/experience" },
  { name: "Services", to: "/#services" },
  { name: "About", to: "/#about" },
  { name: "Contact", to: "/contact" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant mt-space-xl">
      <div className="max-w-site mx-auto px-margin-mobile lg:px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-space-xl">
          <div className="md:col-span-5 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-md text-headline-md font-bold text-on-surface">{site.name}</span>
              <span className="font-mono-label text-mono-label text-secondary">_</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">{site.tagline}</p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-space-sm">
            <span className="font-mono-label text-mono-label uppercase text-on-surface tracking-wider">Index</span>
            <div className="flex flex-wrap gap-x-space-lg gap-y-space-xs">
              {indexLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="font-mono-code text-mono-code text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-space-sm">
            <span className="font-mono-label text-mono-label uppercase text-on-surface tracking-wider">Connect</span>
            <div className="flex flex-col gap-space-xs font-mono-code text-mono-code">
              {contactLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-space-xs"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-space-lg border-t border-outline-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
          <p className="font-mono-label text-mono-label text-on-surface-variant">
            Built with React, Vite &amp; Tailwind.
          </p>
          <span className="font-mono-label text-mono-label text-outline">
            {site.name} © {year}
          </span>
        </div>
      </div>
    </footer>
  )
}
