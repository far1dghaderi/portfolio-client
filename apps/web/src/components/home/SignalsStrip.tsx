import { signals } from "@/data/site"

export function SignalsStrip() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-lg">
      <div className="max-w-site mx-auto px-margin-mobile lg:px-margin">
        <div className="flex items-center justify-between gap-space-md mb-space-sm">
          <span className="font-mono-label text-mono-label uppercase text-on-surface-variant tracking-widest">
            // Technical Signals &amp; Core Competencies
          </span>
          <span className="font-mono-label text-mono-label text-secondary flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Production Verified
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm">
          {signals.map((signal) => (
            <div
              key={signal.index}
              className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-1 shadow-sm hover:bg-surface-container-high transition-colors"
            >
              <span className="font-mono-label text-mono-label text-primary">
                {signal.index} / {signal.label.toUpperCase()}
              </span>
              <span className="font-mono-code text-mono-code text-on-surface font-semibold">
                {signal.value}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight">
                {signal.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
