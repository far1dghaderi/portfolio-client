import { useEffect, useRef } from "react"
import type { CSSProperties, ElementType, ReactNode } from "react"
import { cn } from "@/lib/utils"

let observer: IntersectionObserver | undefined

function observe(el: Element) {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add("is-visible")
        observer?.unobserve(entry.target)
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  )
  observer.observe(el)
  return () => observer?.unobserve(el)
}

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: {
  as?: ElementType
  delay?: number
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => (ref.current ? observe(ref.current) : undefined), [])

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
