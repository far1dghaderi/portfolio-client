import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { navItems, site } from "@/data/site"
import { cn } from "@/lib/utils"
import { usePosts } from "@/lib/usePosts"

function useActiveSection(idList: string, enabled: boolean) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) {
      setActive(null)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    idList.split(",").forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [idList, enabled])

  return active
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const posts = usePosts()
  const isHome = pathname === "/"

  const items = posts?.length
    ? [...navItems.slice(0, -1), { id: "writing", name: "Writing" }, navItems[navItems.length - 1]]
    : navItems
  const active = useActiveSection(items.map((item) => item.id).join(","), isHome)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const isActive = (id: string) =>
    id === "writing" ? pathname.startsWith("/writing") || active === id : active === id

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="scroll-progress from-primary-container via-primary to-secondary h-[2px] bg-gradient-to-r" />
      <div className="mx-auto max-w-6xl px-4 pt-3 sm:px-6">
        <div
          className={cn(
            "flex h-14 items-center justify-between gap-4 rounded-2xl border px-3 transition-all duration-500 sm:px-4",
            scrolled || open
              ? "bg-surface/75 border-white/10 shadow-[0_8px_32px_-12px_rgb(0_0_0/0.6)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <Link to="/" className="group flex items-center gap-3" aria-label={`${site.name}, home`}>
            <span className="from-primary-container to-secondary font-display text-surface-container-lowest grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br text-sm font-bold transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-6deg]">
              FG
            </span>
            <span className="font-display text-on-surface hidden text-[15px] font-semibold tracking-tight sm:block">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {items.map((item) => (
              <Link
                key={item.id}
                to={item.id === "writing" ? "/writing" : `/#${item.id}`}
                className={cn(
                  "relative rounded-lg px-3 py-1.5 text-sm transition-colors",
                  isActive(item.id)
                    ? "text-on-surface"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "from-primary to-secondary absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gradient-to-r transition-transform duration-300",
                    isActive(item.id) ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${site.email}`}
              className="bg-on-surface text-surface hidden items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_24px_-8px_rgb(142_213_255/0.6)] sm:inline-flex"
            >
              Let's talk
              <Icon name="north_east" className="text-[14px]" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="text-on-surface-variant hover:text-on-surface grid h-10 w-10 place-items-center rounded-xl transition-colors hover:bg-white/5 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <Icon name={open ? "close" : "menu"} className="text-[22px]" />
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className={cn(
            "bg-surface/90 mt-2 grid overflow-hidden rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-300 md:hidden",
            open
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] border-transparent opacity-0"
          )}
        >
          <div className="min-h-0">
            <div className="flex flex-col p-2">
              {items.map((item) => (
                <Link
                  key={item.id}
                  to={item.id === "writing" ? "/writing" : `/#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-on-surface-variant hover:text-on-surface rounded-xl px-4 py-3 text-base transition-colors hover:bg-white/5"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="bg-on-surface text-surface m-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold"
              >
                Let's talk
                <Icon name="north_east" className="text-[14px]" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
