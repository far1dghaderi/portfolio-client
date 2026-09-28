import type { ReactNode } from "react"

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-space-xs font-mono-label text-mono-label text-primary uppercase tracking-widest">
      <span>// {index}</span>
      <span className="text-surface-variant">•</span>
      <span>{children}</span>
    </div>
  )
}
