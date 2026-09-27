import type { ReactNode } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-canvas bg-canvas min-h-screen px-3 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="site-card mx-auto flex w-full max-w-6xl flex-col rounded-[20px] bg-white px-5 py-6 text-neutral-900 shadow-[0_24px_70px_rgba(80,16,16,0.16)] sm:px-8 sm:py-8 lg:px-14 lg:py-10 dark:bg-black dark:text-neutral-100 dark:shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
