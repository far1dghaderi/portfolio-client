import type { ReactNode } from "react"
import { Reveal } from "@/components/common/Reveal"

export function SectionHeading({
  eyebrow,
  title,
  children,
  action,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  action?: ReactNode
}) {
  return (
    <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="flex max-w-2xl flex-col gap-4">
        <span className="text-primary inline-flex items-center gap-3 font-mono text-xs font-medium tracking-[0.2em] uppercase">
          <span className="from-primary h-px w-8 bg-gradient-to-r to-transparent" />
          {eyebrow}
        </span>
        <h2 className="font-display text-on-surface text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {children ? (
          <p className="text-on-surface-variant text-base leading-relaxed sm:text-lg">{children}</p>
        ) : null}
      </div>
      {action}
    </Reveal>
  )
}
