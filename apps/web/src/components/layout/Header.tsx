import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { StatusDot } from "@/components/common/StatusDot"
import { site } from "@/data/site"

const navItems = [
  { name: "Work", to: "/work" },
  { name: "Writing", to: "/writing" },
  { name: "Experience", to: "/experience" },
  { name: "Services", to: "/#services" },
  { name: "About", to: "/#about" },
  { name: "Contact", to: "/contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant">
      <div className="h-16 max-w-site mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
        <Link to="/" className="flex items-center gap-space-xs group" aria-label={`${site.name}, home`}>
          <span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
            {site.name}
          </span>
          <span className="hidden sm:inline-flex items-center font-mono-label text-mono-label text-on-surface-variant px-space-xs py-0.5 rounded bg-surface-container-low border border-outline-variant ml-space-xs">
            {site.role}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-space-lg">
          {navItems.map((item) => {
            const active = pathname === item.to
            return (
              <Link
                key={item.name}
                to={item.to}
                className={
                  active
                    ? "font-mono-code text-mono-code text-primary transition-colors"
                    : "font-mono-code text-mono-code text-on-surface-variant hover:text-on-surface transition-colors"
                }
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-space-md">
          <div className="hidden lg:flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-low border border-outline-variant">
            <StatusDot />
            <span className="font-mono-label text-mono-label text-on-surface-variant">{site.availability}</span>
          </div>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-space-md py-1.5 rounded-lg bg-surface-container border border-primary-container text-primary font-mono-label text-mono-label hover:bg-primary-container hover:text-on-primary-container transition-all"
          >
            Let's Talk
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid h-8 w-8 place-items-center rounded-lg text-on-surface-variant hover:text-on-surface md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <Icon name={isMenuOpen ? "close" : "menu"} className="text-[22px]" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-outline-variant bg-surface px-margin-mobile py-space-md flex flex-col gap-space-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className="font-mono-code text-mono-code text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex w-fit items-center justify-center px-space-md py-1.5 rounded-lg bg-surface-container border border-primary-container text-primary font-mono-label text-mono-label"
          >
            Let's Talk
          </Link>
        </nav>
      )}
    </header>
  )
}
