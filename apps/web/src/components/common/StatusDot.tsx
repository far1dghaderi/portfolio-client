export function StatusDot({ tone = "secondary" }: { tone?: "secondary" | "primary" | "tertiary" }) {
  const color = tone === "primary" ? "bg-primary" : tone === "tertiary" ? "bg-tertiary" : "bg-secondary"

  return (
    <span className="relative flex h-2 w-2">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`} />
      <span className={`relative inline-flex rounded-full h-2 w-2 ${color}`} />
    </span>
  )
}
