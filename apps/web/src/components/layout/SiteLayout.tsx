import type { ReactNode } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="font-body text-on-surface relative min-h-screen overflow-x-clip bg-[#0b0d11] antialiased">
      <div
        className="page-backdrop pointer-events-none absolute inset-x-0 top-0 h-[900px]"
        aria-hidden="true"
      />
      <a
        href="#main"
        className="focus:bg-on-surface focus:text-surface sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="relative">
        {children}
      </main>
      <Footer />
    </div>
  )
}
