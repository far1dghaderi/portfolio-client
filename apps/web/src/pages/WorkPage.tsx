import { useState } from "react"
import { Link } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { workFilters, workMetrics, workProjects } from "@/data/work"
import type { StatusTone, WorkCategory, WorkProject } from "@/data/work"
import { arsenal } from "@/data/site"
import type { Tone } from "@/data/site"

const statusPill: Record<StatusTone, string> = {
  tertiary: "bg-tertiary/10 text-tertiary",
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  muted: "bg-surface-container-highest text-on-surface-variant",
}

const tagText: Record<Tone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  outline: "text-outline",
}

const metricText: Record<string, string> = {
  "on-surface": "text-on-surface",
  secondary: "text-secondary",
  primary: "text-primary",
}

function StatusBadge({ project }: { project: WorkProject }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded font-mono-label text-mono-label ${statusPill[project.statusTone]}`}
    >
      {project.live ? (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
        </span>
      ) : (
        <Icon name={project.visual === "observability" ? "monitor_heart" : "hub"} className="text-[13px]" />
      )}
      {project.status}
    </span>
  )
}

function HabitVisual() {
  return (
    <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden bg-surface-dim border border-outline-variant/30">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(62,72,79,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(62,72,79,0.35) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative z-10 p-space-md flex flex-col gap-space-md h-full">
        <div className="flex items-center justify-between">
          <span className="font-mono-label text-mono-label text-on-surface-variant uppercase">
            Streak_Engine // Dashboard
          </span>
          <span className="font-mono-label text-mono-label text-secondary flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> LIVE
          </span>
        </div>
        <div className="grid grid-cols-3 gap-space-sm">
          {[
            ["Active Streak", "128", "text-primary"],
            ["Completion", "94.2%", "text-secondary"],
            ["Avg Latency", "4.2ms", "text-tertiary"],
          ].map(([label, value, tone]) => (
            <div key={label} className="p-space-sm rounded bg-surface-container-lowest/80">
              <span className="font-mono-label text-[10px] text-outline uppercase block">{label}</span>
              <span className={`font-mono-code text-body-lg font-semibold ${tone}`}>{value}</span>
            </div>
          ))}
        </div>
        <svg className="w-full flex-1 text-secondary" fill="none" preserveAspectRatio="none" viewBox="0 0 300 80">
          <path
            d="M0 66 L30 58 L60 62 L90 40 L120 48 L150 26 L180 34 L210 14 L240 20 L270 8 L300 12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M0 66 L30 58 L60 62 L90 40 L120 48 L150 26 L180 34 L210 14 L240 20 L270 8 L300 12 V80 H0 Z"
            fill="currentColor"
            fillOpacity="0.08"
          />
        </svg>
      </div>
      <div className="absolute bottom-3 left-3 right-3 bg-surface-container/90 backdrop-blur-md p-space-sm rounded shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
          <div className="flex flex-col">
            <span className="font-mono-label text-mono-label text-on-surface">Streak Engine</span>
            <span className="font-mono-label text-mono-label text-outline">Recurrence Worker P99: 4.2ms</span>
          </div>
        </div>
        <svg className="w-28 h-7 text-secondary" fill="none" viewBox="0 0 120 28">
          <path
            d="M0 24L15 20L30 22L45 12L60 16L75 6L90 14L105 4L120 8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
        </svg>
      </div>
    </div>
  )
}

function HabitCard({ project }: { project: WorkProject }) {
  const architecture = project.architecture!
  const entries = [
    ["Backend", architecture.backend],
    ["Storage", architecture.storage],
    ["Queue", architecture.queue],
    ["Frontend", architecture.frontend],
    ["Styling", architecture.styling],
    ["Runtime", architecture.runtime],
  ]

  return (
    <article className="project-card lg:col-span-12 group bg-surface-container-low rounded-xl overflow-hidden p-space-md lg:p-space-lg shadow-md transition-all duration-300 hover:bg-surface-container hover:shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-7 flex flex-col justify-between h-full gap-space-md">
          <div className="flex flex-col gap-space-sm">
            <div className="flex flex-wrap items-center gap-space-sm">
              <StatusBadge project={project} />
              <span className="font-mono-label text-mono-label text-outline">{project.ref}</span>
              {project.badge ? (
                <span className="px-2 py-0.5 rounded bg-surface-container-high font-mono-label text-mono-label text-on-surface-variant">
                  {project.badge}
                </span>
              ) : null}
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-semibold text-on-surface group-hover:text-primary transition-colors tracking-tight">
              {project.title}
            </h2>
            <div className="flex flex-col gap-0.5 text-body-sm">
              <div className="flex items-center gap-space-xs font-mono-code text-mono-code text-on-surface">
                <span className="text-outline">ROLE:</span> {project.role}
              </div>
              <div className="flex items-center gap-space-xs font-mono-code text-mono-code text-on-surface-variant">
                <span className="text-outline">ARTIFACTS:</span> {project.artifacts}
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-space-xs">
              {project.description}
            </p>
          </div>

          <div className="bg-surface-dim p-space-md rounded-lg flex flex-col gap-space-xs">
            <div className="flex items-center justify-between pb-space-xs">
              <span className="font-mono-label text-mono-label text-outline uppercase">
                Engineered Architecture Stack
              </span>
              <span className="font-mono-label text-mono-label text-secondary flex items-center gap-1">
                <Icon name="terminal" className="text-[14px]" /> READY
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-space-xs gap-x-space-md font-mono-code text-mono-code text-body-sm">
              {entries.map(([label, value]) => (
                <div key={label}>
                  <span className="text-outline">{label}:</span> <span className="text-on-surface">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-space-xs">
            <Link
              to="/work"
              className="inline-flex items-center gap-space-xs font-mono-code text-mono-code text-primary group-hover:text-primary-container transition-colors"
            >
              <span>{project.linkLabel}</span>
              <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-space-sm h-full">
          <HabitVisual />
          <div className="p-space-sm bg-surface-container-lowest rounded font-mono-code text-body-sm text-outline flex items-center justify-between">
            <span className="text-on-surface-variant truncate">
              GET /api/v1/analytics/streaks?tz=America%2FNew_York
            </span>
            <span className="text-secondary font-mono-label text-mono-label px-1.5 py-0.5 rounded bg-surface-container-high">
              200 OK
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

function GatewayCard({ project }: { project: WorkProject }) {
  return (
    <article className="project-card lg:col-span-7 group bg-surface-container-low rounded-xl p-space-md lg:p-space-lg shadow-md transition-all duration-300 hover:bg-surface-container hover:shadow-xl flex flex-col justify-between">
      <div className="flex flex-col gap-space-sm">
        <div className="flex flex-wrap items-center justify-between gap-space-xs">
          <StatusBadge project={project} />
          <span className="font-mono-label text-mono-label text-outline">{project.ref}</span>
        </div>
        <h2 className="font-headline-md text-headline-md font-semibold text-on-surface group-hover:text-primary transition-colors tracking-tight mt-space-xs">
          {project.title}
        </h2>
        <div className="flex flex-col gap-0.5 text-body-sm">
          <div className="font-mono-code text-mono-code text-on-surface">
            <span className="text-outline">ROLE:</span> {project.role}
          </div>
          <div className="font-mono-code text-mono-code text-on-surface-variant">
            <span className="text-outline">DELIVERABLES:</span> {project.artifacts}
          </div>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">{project.description}</p>

        <div className="mt-space-xs bg-surface-container p-space-sm rounded-lg flex flex-col gap-space-xs">
          <span className="font-mono-label text-mono-label text-outline uppercase tracking-wider">
            Key Engineering Milestones
          </span>
          <ul className="flex flex-col gap-1 font-body-sm text-body-sm text-on-surface-variant">
            {project.milestones?.map((milestone) => (
              <li key={milestone} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{milestone}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-space-md mt-space-md">
        <Link
          to="/work"
          className="inline-flex items-center gap-space-xs font-mono-code text-mono-code text-primary group-hover:text-primary-container transition-colors"
        >
          <span>{project.linkLabel}</span>
          <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}

function ObservabilityCard({ project }: { project: WorkProject }) {
  return (
    <article className="project-card lg:col-span-5 group bg-surface-container-low rounded-xl p-space-md lg:p-space-lg shadow-md transition-all duration-300 hover:bg-surface-container hover:shadow-xl flex flex-col justify-between">
      <div className="flex flex-col gap-space-sm">
        <div className="flex flex-wrap items-center justify-between gap-space-xs">
          <StatusBadge project={project} />
          <span className="font-mono-label text-mono-label text-outline">{project.ref}</span>
        </div>
        <h2 className="font-headline-md text-headline-md font-semibold text-on-surface group-hover:text-primary transition-colors tracking-tight mt-space-xs">
          {project.title}
        </h2>
        <div className="flex flex-col gap-0.5 text-body-sm">
          <div className="font-mono-code text-mono-code text-on-surface">
            <span className="text-outline">ROLE:</span> {project.role}
          </div>
          <div className="font-mono-code text-mono-code text-on-surface-variant">
            <span className="text-outline">DELIVERABLES:</span> {project.artifacts}
          </div>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">{project.description}</p>

        <div className="mt-space-xs bg-surface-container-lowest p-space-sm rounded font-mono-code text-[11px] leading-tight text-on-surface-variant flex flex-col gap-1">
          <div className="flex items-center justify-between text-outline">
            <span>prometheus_alert.yml</span>
            <span className="text-primary">EVAL: 15s</span>
          </div>
          <div className="text-error font-medium truncate">&gt; alert: DBConnectionPoolExhaustion</div>
          <div className="text-outline truncate">&gt; expr: pg_stat_activity_count &gt; 92</div>
          <div className="text-secondary truncate">&gt; severity: critical // page_oncall</div>
        </div>
      </div>
      <div className="pt-space-md mt-space-md">
        <Link
          to="/work"
          className="inline-flex items-center gap-space-xs font-mono-code text-mono-code text-primary group-hover:text-primary-container transition-colors"
        >
          <span>{project.linkLabel}</span>
          <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}

function CommissionCard({ project }: { project: WorkProject }) {
  return (
    <article className="project-card lg:col-span-12 group bg-surface-container-high rounded-xl p-space-md lg:p-space-lg shadow-md transition-all duration-300 hover:bg-surface-bright hover:shadow-xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
        <div className="max-w-2xl flex flex-col gap-space-xs">
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-mono-label text-mono-label">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              {project.status}
            </span>
            <span className="font-mono-label text-mono-label text-outline">{project.ref}</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-semibold text-on-surface tracking-tight">
            {project.title}
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-space-md gap-y-0.5 text-body-sm font-mono-code text-mono-code">
            <div>
              <span className="text-outline">ROLE:</span> {project.role}
            </div>
            <div>
              <span className="text-outline">TIMEFRAME:</span> {project.artifacts}
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-space-xs font-mono-label text-mono-label text-on-surface-variant">
            {project.stack.map((item) => (
              <span key={item} className="px-2 py-0.5 rounded bg-surface-container">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-space-sm flex-shrink-0 items-start lg:items-end">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary-container font-mono-label text-mono-label font-semibold shadow-md hover:bg-primary transition-all duration-200"
          >
            <span>{project.linkLabel}</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
          <span className="font-mono-label text-mono-label text-outline">
            Direct engineering contracts // No middlemen
          </span>
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project }: { project: WorkProject }) {
  switch (project.visual) {
    case "habit":
      return <HabitCard project={project} />
    case "gateway":
      return <GatewayCard project={project} />
    case "observability":
      return <ObservabilityCard project={project} />
    case "commission":
      return <CommissionCard project={project} />
  }
}

function Arsenal() {
  return (
    <section className="mt-space-xl pt-space-xl">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-sm mb-space-lg">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs font-mono-label text-mono-label text-primary">
            <Icon name="memory" className="text-[16px]" />
            <span>SPECIFICATION // CAPABILITIES</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-semibold text-on-surface tracking-tight">
            Core Technical Arsenal
          </h2>
        </div>
        <div className="font-mono-label text-mono-label text-outline">VERIFIED PRODUCTION STACK • 2025</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {arsenal.map((group) => (
          <div key={group.index} className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-md shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono-label text-mono-label text-on-surface font-semibold uppercase">
                {group.index} / {group.title}
              </span>
              <Icon name={group.icon} className="text-outline text-[18px]" />
            </div>
            <div className="flex flex-col gap-2 font-mono-code text-mono-code text-body-sm text-on-surface-variant">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between py-1 px-2 rounded ${
                    item.highlighted ? "bg-surface-container" : ""
                  }`}
                >
                  <span className="text-on-surface">{item.name}</span>
                  <span className={`font-mono-label text-mono-label ${tagText[item.tone]}`}>{item.tag}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function WorkPage() {
  const [filter, setFilter] = useState<"all" | WorkCategory>("all")
  const visible = filter === "all" ? workProjects : workProjects.filter((project) => project.category === filter)

  return (
    <div className="w-full max-w-site mx-auto px-margin-mobile lg:px-margin py-space-xl">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-gutter pb-space-lg">
        <div className="max-w-3xl flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-mono-label text-mono-label text-primary uppercase tracking-widest">
              [INDEX_CATALOG // 01]
            </span>
            <span className="w-8 h-px bg-outline-variant" />
            <span className="font-mono-label text-mono-label text-secondary">SYS_ENG_2025</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero font-bold text-on-surface tracking-tight">
            Work &amp; Architectural Case Studies
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs">
            Production systems, architectural patterns, and products built with an emphasis on
            reliability, clean contracts, and end-to-end execution.
          </p>
        </div>

        <div className="flex items-center gap-space-md bg-surface-container-low px-space-md py-space-sm rounded-lg shadow-sm">
          {workMetrics.map((metric, index) => (
            <div key={metric.label} className="flex items-center gap-space-md">
              {index > 0 ? <div className="w-px h-8 bg-surface-variant" /> : null}
              <div className="flex flex-col">
                <span className="font-mono-label text-mono-label text-outline uppercase">{metric.label}</span>
                <span className={`font-mono-metric text-mono-metric font-semibold ${metricText[metric.tone]}`}>
                  {metric.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md my-space-md pt-space-md">
        <div className="flex flex-wrap items-center gap-space-xs">
          {workFilters.map((item) => {
            const active = filter === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-lg font-mono-label text-mono-label shadow-sm transition-all duration-200 ${
                  active
                    ? "bg-surface-container-high text-primary"
                    : "bg-surface-container-low hover:bg-surface-container hover:text-on-surface text-on-surface-variant"
                }`}
              >
                {active ? <span className="w-1.5 h-1.5 rounded-full bg-primary" /> : null}
                {item.label}
              </button>
            )
          })}
        </div>
        <div className="font-mono-label text-mono-label text-outline flex items-center gap-space-xs self-end sm:self-auto">
          <span>SORT: STABILITY_IMPACT</span>
          <Icon name="tune" className="text-[16px]" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mt-space-lg">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Arsenal />

      <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md shadow-sm">
        <div className="flex items-center gap-space-md">
          <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary flex-shrink-0">
            <Icon name="terminal" className="text-[24px]" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-md text-headline-md font-semibold text-on-surface">
              Need a private technical deep-dive?
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">
              Proprietary enterprise incident reports and code walk-throughs available upon verified
              request.
            </span>
          </div>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-mono-label text-mono-label transition-colors"
        >
          <span>Request Technical Dossier</span>
          <Icon name="lock_open" className="text-[16px]" />
        </Link>
      </div>
    </div>
  )
}
