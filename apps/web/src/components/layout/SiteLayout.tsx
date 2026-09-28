import type { ReactNode } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}
