import { useState } from "react"
import { Link } from "react-router-dom"
import { MdCode, MdMenu, MdClose } from "react-icons/md"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/", isHash: false },
    { name: "Experience", href: "/#experience", isHash: true },
    { name: "CV", href: "/cv", isHash: false },
    { name: "Contact", href: "/contact", isHash: false },
  ]

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="group flex items-center space-x-2 transition-all duration-300">
            <MdCode className="text-primary text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <span className="group-hover:text-primary text-2xl font-bold transition-colors duration-300">
              Farid Ghaderi
            </span>
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) =>
              link.isHash ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary group relative font-mono text-sm transition-all duration-300 hover:scale-110"
                >
                  {link.name}
                  <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary group relative font-mono text-sm transition-all duration-300 hover:scale-110"
                >
                  {link.name}
                  <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary hover:bg-accent rounded-md p-2 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.isHash ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary group relative inline-block w-fit font-mono text-sm transition-all duration-300 hover:translate-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative">
                      {link.name}
                      <span className="bg-primary absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-primary group relative inline-block w-fit font-mono text-sm transition-all duration-300 hover:translate-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative">
                      {link.name}
                      <span className="bg-primary absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
