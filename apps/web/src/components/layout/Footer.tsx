import { Link } from "react-router-dom"
import { contactLinks } from "@/data/contact"
import { navItems, site } from "@/data/site"

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <Link to="/" className="font-display text-on-surface text-lg font-semibold">
            {site.name}
          </Link>
          <p className="text-on-surface-variant text-sm leading-relaxed">{site.tagline}</p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-outline font-mono text-xs tracking-[0.2em] uppercase">Site</span>
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                className="text-on-surface-variant hover:text-on-surface text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/writing"
              className="text-on-surface-variant hover:text-on-surface text-sm transition-colors"
            >
              Writing
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-outline font-mono text-xs tracking-[0.2em] uppercase">
              Elsewhere
            </span>
            {contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="text-on-surface-variant hover:text-on-surface text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-outline mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/5 px-5 py-6 text-xs sm:flex-row sm:justify-between sm:px-8">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Designed &amp; built by me · React, TypeScript &amp; Tailwind CSS</span>
      </div>
    </footer>
  )
}
