import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { useAuth } from "@/lib/auth-context"
import { site } from "@/data/site"
import { cn } from "@/lib/utils"

export function AdminLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate("/login", { replace: true })
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "inline-flex items-center gap-space-xs rounded-lg px-space-sm py-1.5 font-mono-label text-mono-label transition-colors",
      isActive
        ? "bg-surface-container-high text-primary"
        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
    )

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased">
      <header className="sticky top-0 z-40 border-b border-outline-variant bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-gutter px-margin-mobile lg:px-margin">
          <div className="flex items-center gap-space-md">
            <Link to="/admin" className="flex items-center gap-space-xs">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-on-primary">
                <Icon name="dashboard" className="text-[18px]" />
              </span>
              <span className="font-headline-md text-[1.05rem] font-semibold tracking-tight text-on-surface">
                {site.name}
              </span>
              <span className="hidden sm:inline font-mono-label text-mono-label rounded bg-surface-container-low px-space-xs py-0.5 text-on-surface-variant">
                CMS
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1 pl-space-md">
              <NavLink to="/admin" end className={navLinkClass}>
                <Icon name="article" className="text-[14px]" />
                <span>Posts</span>
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-space-sm">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-space-xs rounded-lg border border-outline-variant px-space-sm py-1.5 font-mono-label text-mono-label text-on-surface-variant hover:border-primary-container hover:text-primary transition-colors"
            >
              <Icon name="open_in_new" className="text-[14px]" />
              <span>View site</span>
            </Link>
            <span className="hidden lg:flex items-center gap-space-xs font-mono-code text-[12px] text-on-surface-variant">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              {user?.name}
            </span>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-space-xs rounded-lg px-space-sm py-1.5 font-mono-label text-mono-label text-on-surface-variant hover:bg-error-container/30 hover:text-error transition-colors"
            >
              <Icon name="logout" className="text-[14px]" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        <nav className="flex items-center gap-1 border-t border-outline-variant px-margin-mobile py-space-sm md:hidden">
          <NavLink to="/admin" end className={navLinkClass}>
            <Icon name="article" className="text-[14px]" />
            <span>Posts</span>
          </NavLink>
          <Link to="/" className={navLinkClass({ isActive: false })}>
            <Icon name="open_in_new" className="text-[14px]" />
            <span>View site</span>
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-site px-margin-mobile lg:px-margin py-space-xl">
        <Outlet />
      </main>
    </div>
  )
}
