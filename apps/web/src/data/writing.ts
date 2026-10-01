import type { Tone } from "@/data/site"

export type WritingCategory = "engineering" | "product-building" | "notes-craft"

export interface CodeLine {
  text: string
  tone?: "primary" | "outline"
}

export interface WritingMetric {
  label: string
  value: string
  detail: string
  tone: Tone
}

export interface WritingPost {
  id: string
  slug: string
  category: string
  categoryLabel: string
  tone: Tone
  title: string
  description: string
  date: string
  readTime: string
  ref: string
  imageUrl?: string
  tags: string[]
  featured?: boolean
  visual: "code" | "metrics" | "callout"
  code?: { file: string; version: string; lines: CodeLine[] }
  metrics?: WritingMetric[]
  callout?: { title: string; body: string; metric: string }
}

export const writingFilters: { id: "all" | WritingCategory; label: string }[] = [
  { id: "all", label: "All Posts" },
  { id: "engineering", label: "Engineering" },
  { id: "product-building", label: "Product & Building" },
  { id: "notes-craft", label: "Notes & Craft" },
]

export const writingPosts: WritingPost[] = [
  {
    id: "resilient-nestjs",
    slug: "resilient-nestjs",
    category: "engineering",
    categoryLabel: "Engineering",
    tone: "secondary",
    title: "Designing Resilient NestJS Architectures for Small Teams",
    description:
      "Why most early-stage boilerplates overcomplicate dependency injection and how to structure modules, DTO validation, and service boundaries for long-term velocity without enterprise bloat.",
    date: "March 15, 2025",
    readTime: "7 min read",
    ref: "ART-2025-NESTJS",
    imageUrl: "https://picsum.photos/seed/resilient-nestjs/1200/630",
    tags: ["NestJS", "Architecture", "TypeScript", "DTOs"],
    featured: true,
    visual: "code",
    code: {
      file: "module-boundary.ts",
      version: "TS 5.4",
      lines: [
        { text: "@Module({ imports: [CoreTelemetryModule], providers: [OrderOrchestrator] })", tone: "primary" },
        { text: "// explicit isolation prevents cyclic injection faults", tone: "outline" },
      ],
    },
  },
  {
    id: "time-recurrence",
    slug: "time-recurrence",
    category: "product-building",
    categoryLabel: "Product & Building",
    tone: "tertiary",
    title: "Modeling Time and Recurrence in a Habit Tracker Without Going Crazy",
    description:
      "Why calendar logic and habit streaks are notoriously deceptively complex, and how I structured the PostgreSQL schema and NestJS scheduling engine to handle timezones cleanly.",
    date: "February 24, 2025",
    readTime: "5 min read",
    ref: "ART-2025-RECURRENCE",
    imageUrl: "https://picsum.photos/seed/time-recurrence/1200/630",
    tags: ["PostgreSQL", "Data Modeling", "NestJS", "UX"],
    visual: "metrics",
    metrics: [
      { label: "Storage Strategy", value: "TIMESTAMPTZ UTC", detail: "Strict epoch normalisation", tone: "outline" },
      { label: "Streak Logic", value: "User Local Midnight", detail: "Dynamic window evaluation", tone: "secondary" },
      { label: "Edge Handled", value: "DST Shifts +/- 1hr", detail: "Zero broken tallies", tone: "tertiary" },
    ],
  },
  {
    id: "build-my-own-systems",
    slug: "build-my-own-systems",
    category: "notes-craft",
    categoryLabel: "Notes & Craft",
    tone: "primary",
    title: "Why I Build My Own Systems: From PC Hardware to Software Architecture",
    description:
      "A concise reflection on the parallels between selecting matched PC hardware components for stability and designing modular software systems. Emphasizing thermals, bottleneck analysis, and quiet craft.",
    date: "January 18, 2025",
    readTime: "4 min read",
    ref: "ART-2025-HARDWARE",
    imageUrl: "https://picsum.photos/seed/build-my-own-systems/1200/630",
    tags: ["Hardware", "Engineering Values", "Craft"],
    visual: "callout",
    callout: {
      title: "The principle of mechanical sympathy",
      body: "Knowing the physical machine fundamentally sharpens your code boundaries.",
      metric: "99.98% uptime mindset",
    },
  },
]
