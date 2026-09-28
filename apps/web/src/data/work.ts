export type WorkCategory = "product" | "infra" | "architecture"

export type StatusTone = "tertiary" | "primary" | "secondary" | "muted"

export interface WorkProject {
  id: string
  category: WorkCategory
  ref: string
  status: string
  statusTone: StatusTone
  badge?: string
  live?: boolean
  role: string
  artifacts: string
  title: string
  description: string
  stack: string[]
  linkLabel: string
  visual: "habit" | "gateway" | "observability" | "commission"
  architecture?: {
    backend: string
    storage: string
    queue: string
    frontend: string
    styling: string
    runtime: string
  }
  milestones?: string[]
}

export const workMetrics = [
  { label: "Active Repos", value: "14", tone: "on-surface" },
  { label: "SLA Target", value: "99.98%", tone: "secondary" },
  { label: "Deploy Cycle", value: "<8m", tone: "primary" },
] as const

export const workFilters: { id: "all" | WorkCategory; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "product", label: "Full-Stack Products" },
  { id: "infra", label: "Backend & Infrastructure" },
  { id: "architecture", label: "Architecture Blueprints" },
]

export const workProjects: WorkProject[] = [
  {
    id: "habit-intelligence",
    category: "product",
    ref: "SYS.REF-001",
    status: "In Active Development",
    statusTone: "tertiary",
    badge: "Flagship Platform",
    live: true,
    role: "Sole Creator & Full-Stack Builder",
    artifacts: "Web Application, NestJS API, PostgreSQL Schema, Docker Compose",
    title: "The Habit Intelligence Platform",
    description:
      "A focused personal habit tracking and analytics web application engineered for actionable weekly reviews and effortless daily entry. Solves timezone-aware recurrence, race-condition idempotency, and high-frequency analytical streak queries using temporal caching layers.",
    stack: ["NestJS", "React", "PostgreSQL", "Docker"],
    linkLabel: "Read In-Depth Case Study & Technical Architecture",
    visual: "habit",
    architecture: {
      backend: "NestJS / Node",
      storage: "Postgres + Prisma",
      queue: "Redis / BullMQ",
      frontend: "React / Vite",
      styling: "Tailwind CSS",
      runtime: "Docker Engine",
    },
  },
  {
    id: "api-gateway",
    category: "infra",
    ref: "GATEWAY.REF-042",
    status: "Architectural Case Study",
    statusTone: "primary",
    role: "Backend & Infrastructure Engineer",
    artifacts: "APISIX Plugin Config, OIDC/SAML Bridge, Redis Token Cache, CI/CD",
    title: "Distributed API Gateway & Enterprise Auth Federation",
    description:
      "Anonymized production architecture blueprint for routing enterprise API traffic, federating OIDC/SAML enterprise logins, and preventing downstream service outages under high concurrent load through reactive rate-limiting.",
    stack: ["APISIX", "Node.js", "Redis", "OIDC", "Linux"],
    linkLabel: "Explore Architecture Breakdown & Incident Runbook",
    visual: "gateway",
    milestones: [
      "Zero-downtime dynamic routing reconfiguration via APISIX Lua plugins",
      "Sub-millisecond JWT introspection caching with localized Redis cluster",
      "Automated circuit-breaking, failover routing & graceful degradation",
    ],
  },
  {
    id: "observability",
    category: "architecture",
    ref: "OBS.REF-019",
    status: "Production Pattern",
    statusTone: "secondary",
    role: "Backend Infrastructure",
    artifacts: "Structured Logging, Health Checks, Prometheus/Grafana Alerts",
    title: "Production Incident Ownership & Observability Hardening",
    description:
      "Practical patterns for turning opaque microservice errors into actionable alerts with correlation IDs, graceful shutdown handling, and database connection pool tuning under volatile traffic peaks.",
    stack: ["Prometheus", "Grafana", "Docker", "PostgreSQL"],
    linkLabel: "Read Incident Management Pattern",
    visual: "observability",
  },
  {
    id: "custom-build",
    category: "product",
    ref: "COMMISSION // SPRINT",
    status: "Available for Q2 Booking",
    statusTone: "secondary",
    live: true,
    role: "End-to-End Product Builder (Freelance)",
    artifacts: "Timeframe: 4 to 8 Weeks Direct Engagements",
    title: "Custom Full-Stack Web Application Build",
    description:
      "Have a greenfield product or complex workflow that needs to be shipped fast and built correctly? I take projects from specification and database modeling to high-fidelity frontend execution and hardened production deployment.",
    stack: [
      "Scope Definition",
      "UX/UI Craft",
      "NestJS Backend",
      "Modern Frontend",
      "Production Deploy",
    ],
    linkLabel: "Discuss Your Project Scope",
    visual: "commission",
  },
]
