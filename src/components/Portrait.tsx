import { useState } from "react"
import { cvProfile } from "@/data/cvData"
import { cn } from "@/lib/utils"

export function Portrait({ className, size = "lg" }: { className?: string; size?: "lg" | "sm" }) {
  const [failed, setFailed] = useState(false)
  const frame = size === "lg" ? "h-52 w-44" : "h-36 w-32"

  return (
    <div
      className={cn(
        "grid place-items-center",
        size === "lg" ? "h-64 w-56" : "h-44 w-40",
        className
      )}
    >
      <div
        className={cn(
          "relative rotate-[-8deg] overflow-hidden bg-neutral-200 shadow-[0_16px_36px_rgba(0,0,0,0.18)] ring-4 ring-white",
          frame
        )}
      >
        {failed ? (
          <div className="grid h-full w-full place-items-center bg-neutral-200 text-3xl font-semibold text-neutral-500">
            FG
          </div>
        ) : (
          <img
            src={cvProfile.image}
            alt={cvProfile.name}
            className="h-full w-full object-cover grayscale"
            onError={() => setFailed(true)}
          />
        )}
        <div
          className="bg-coral pointer-events-none absolute inset-0"
          style={{ clipPath: "polygon(58% 0, 100% 0, 100% 46%)" }}
        />
        <div
          className="bg-ink pointer-events-none absolute inset-0"
          style={{ clipPath: "polygon(0 54%, 0 100%, 46% 100%)" }}
        />
      </div>
    </div>
  )
}
