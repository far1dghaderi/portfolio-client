import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/Logo"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { index: "1", name: "Services", href: "/#services" },
  { index: "2", name: "Work", href: "/#work" },
  { index: "3", name: "About", href: "/#about" },
  { index: "4", name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="print:hidden">
      <div className="flex items-center justify-between gap-4">
        <Link to="/" aria-label="Farid Ghaderi, home" className="shrink-0">
          <Logo />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavItem
                key={link.name}
                link={link}
                active={pathname === "/contact" && link.href === "/contact"}
              />
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="mt-4 flex flex-col gap-3 border-t border-neutral-200 pt-4 md:hidden dark:border-neutral-800">
          {navLinks.map((link) => (
            <NavItem
              key={link.name}
              link={link}
              active={pathname === "/contact" && link.href === "/contact"}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
        </nav>
      )}
    </header>
  )
}

function NavItem({
  link,
  active,
  onClick,
}: {
  link: (typeof navLinks)[number]
  active?: boolean
  onClick?: () => void
}) {
  const className = active
    ? "text-[13px] font-medium text-neutral-900 dark:text-white"
    : "text-[13px] font-medium text-neutral-400 transition-colors hover:text-neutral-900 dark:text-coral dark:hover:text-white"

  if (link.href.startsWith("/#")) {
    return (
      <a href={link.href} className={className} onClick={onClick}>
        {link.index}. {link.name}
      </a>
    )
  }

  return (
    <Link to={link.href} className={className} onClick={onClick}>
      {link.index}. {link.name}
    </Link>
  )
}
