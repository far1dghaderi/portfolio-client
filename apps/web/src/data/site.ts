import { cvProfile, cvUrl } from "@/data/cvData"

export const site = {
  name: "Farid Ghaderi",
  role: "Full-stack product builder",
  tagline: "Backend-strong systems engineering and craft software design.",
  email: "faridghaderi2001@gmail.com",
  resumeUrl: cvUrl,
  avatar: cvProfile.image,
  availability: "Available for Q2 projects",
  timezone: "Based in UTC+3:30, available for remote worldwide.",
  responseTime: "Typical response time: < 24 hours.",
}

export interface Signal {
  index: string
  label: string
  value: string
  detail: string
}

export const signals: Signal[] = [
  { index: "01", label: "Experience", value: "4+ Years APIs", detail: "High-throughput HTTP/gRPC" },
  {
    index: "02",
    label: "Runtime",
    value: "NestJS & TS Core",
    detail: "Strict dependency injection",
  },
  { index: "03", label: "Security", value: "OIDC & SAML", detail: "SSO, JWT, RBAC guards" },
  { index: "04", label: "Infra", value: "Linux & Docker", detail: "CI/CD & self-hosted runs" },
  { index: "05", label: "Routing", value: "APISIX Gateway", detail: "Zero-downtime proxying" },
  { index: "06", label: "Collab", value: "Async English", detail: "High ownership documentation" },
]

export interface Principle {
  index: string
  title: string
  body: string
  icon: string
  tone: "primary" | "secondary" | "tertiary"
}

export const principles: Principle[] = [
  {
    index: "01",
    title: "Product Mindset",
    body: "I don't build features in isolation. I design around UX and business outcomes before writing the first schema migration, ensuring software makes intuitive sense to the real user.",
    icon: "design_services",
    tone: "primary",
  },
  {
    index: "02",
    title: "Production-Grade by Default",
    body: "Auth, input validation, rate limiting, and Docker containers are baked in from day one—not patched together during an emergency after deployment.",
    icon: "verified_user",
    tone: "secondary",
  },
  {
    index: "03",
    title: "Direct, Async Communication",
    body: "High-signal updates in clear English. No fluff, no missed blockers, and no endless meetings. You always know what was shipped and what's next.",
    icon: "chat",
    tone: "tertiary",
  },
]

export type Tone = "primary" | "secondary" | "tertiary" | "outline"

export interface ArsenalItem {
  name: string
  tag: string
  tone: Tone
  highlighted?: boolean
}

export interface ArsenalGroup {
  index: string
  title: string
  icon: string
  items: ArsenalItem[]
}

export const arsenal: ArsenalGroup[] = [
  {
    index: "01",
    title: "Languages",
    icon: "code",
    items: [
      { name: "TypeScript", tag: "Primary", tone: "primary", highlighted: true },
      { name: "JavaScript", tag: "ES2024", tone: "outline" },
      { name: "SQL", tag: "PostgreSQL", tone: "outline" },
      { name: "Bash / Shell", tag: "Scripting", tone: "outline" },
    ],
  },
  {
    index: "02",
    title: "Frameworks",
    icon: "layers",
    items: [
      { name: "NestJS / Node.js", tag: "Core", tone: "secondary", highlighted: true },
      { name: "React / Next.js", tag: "Client", tone: "outline" },
      { name: "Prisma / TypeORM", tag: "ORM", tone: "outline" },
      { name: "Express / Fastify", tag: "Micro", tone: "outline" },
    ],
  },
  {
    index: "03",
    title: "Infra & Ops",
    icon: "dns",
    items: [
      { name: "Docker & Linux", tag: "Ubuntu/Deb", tone: "primary", highlighted: true },
      { name: "APISIX / Nginx", tag: "Gateway", tone: "outline" },
      { name: "GitLab / GitHub CI", tag: "Pipelines", tone: "outline" },
      { name: "Redis / BullMQ", tag: "Cache", tone: "outline" },
    ],
  },
  {
    index: "04",
    title: "Protocols",
    icon: "sync_alt",
    items: [
      { name: "REST & OpenAPI", tag: "Contract", tone: "tertiary", highlighted: true },
      { name: "OIDC / SAML / OAuth", tag: "Auth", tone: "outline" },
      { name: "GraphQL APIs", tag: "Federation", tone: "outline" },
      { name: "WebSockets / SSE", tag: "Realtime", tone: "outline" },
    ],
  },
]
