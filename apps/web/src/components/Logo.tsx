import { useId } from "react"

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  const clipId = useId()

  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <rect width="36" height="36" rx="8" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="36" height="36" fill="#296696" />
        <polygon points="36,0 36,36 0,0" fill="#FF6A69" />
      </g>
      <text
        x="18"
        y="23.5"
        textAnchor="middle"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="#ffffff"
      >
        F
      </text>
    </svg>
  )
}
