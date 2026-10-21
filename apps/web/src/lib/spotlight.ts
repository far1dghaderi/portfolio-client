import type { MouseEvent } from "react"

// Feeds the cursor position to the `.spotlight` glow in index.css.
export function trackSpotlight(event: MouseEvent<HTMLElement>) {
  const el = event.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty("--x", `${event.clientX - rect.left}px`)
  el.style.setProperty("--y", `${event.clientY - rect.top}px`)
}
