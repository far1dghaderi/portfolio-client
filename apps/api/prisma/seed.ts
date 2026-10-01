import "dotenv/config"
import { PrismaClient } from "@prisma/client"
import * as bcrypt from "bcryptjs"

const prisma = new PrismaClient()

const samplePosts = [
  {
    slug: "resilient-nestjs",
    title: "Designing Resilient NestJS Architectures for Small Teams",
    description:
      "Why most early-stage boilerplates overcomplicate dependency injection and how to structure modules, DTO validation, and service boundaries for long-term velocity without enterprise bloat.",
    content:
      "## The problem with boilerplate\n\nMost early-stage projects copy an enterprise template, then spend weeks deleting things they never needed.\n\n```ts\n@Module({ imports: [CoreTelemetryModule], providers: [OrderOrchestrator] })\nexport class OrderModule {}\n```\n\n## Explicit boundaries win\n\nKeep modules small and dependencies explicit. Cyclic injection is a design smell, not a tooling problem.",
    category: "engineering",
    tone: "secondary",
    imageUrl: "https://picsum.photos/seed/resilient-nestjs/1200/630",
    tags: ["NestJS", "Architecture", "TypeScript", "DTOs"],
    featured: true,
    published: true,
    visual: "code",
    readTime: "7 min read",
    ref: "ART-2025-NESTJS",
    position: 0,
  },
  {
    slug: "time-recurrence",
    title: "Modeling Time and Recurrence in a Habit Tracker Without Going Crazy",
    description:
      "Why calendar logic and habit streaks are notoriously deceptively complex, and how I structured the PostgreSQL schema and NestJS scheduling engine to handle timezones cleanly.",
    content:
      "## Store UTC, evaluate locally\n\nPersist every timestamp as `TIMESTAMPTZ` in UTC. A streak should break at the **user's local midnight**, not the server's.\n\n- Normalise on write\n- Evaluate windows on read\n- Never trust the browser clock",
    category: "product-building",
    tone: "tertiary",
    imageUrl: "https://picsum.photos/seed/time-recurrence/1200/630",
    tags: ["PostgreSQL", "Data Modeling", "NestJS", "UX"],
    featured: false,
    published: true,
    visual: "metrics",
    readTime: "5 min read",
    ref: "ART-2025-RECURRENCE",
    position: 1,
  },
  {
    slug: "build-my-own-systems",
    title: "Why I Build My Own Systems: From PC Hardware to Software Architecture",
    description:
      "A concise reflection on the parallels between selecting matched PC hardware components for stability and designing modular software systems. Emphasizing thermals, bottleneck analysis, and quiet craft.",
    content:
      "## Mechanical sympathy\n\nKnowing the physical machine sharpens your code boundaries. The same way a balanced build avoids a single bottleneck, a well-factored service avoids a single hot path.",
    category: "notes-craft",
    tone: "primary",
    imageUrl: "https://picsum.photos/seed/build-my-own-systems/1200/630",
    tags: ["Hardware", "Engineering Values", "Craft"],
    featured: false,
    published: true,
    visual: "callout",
    readTime: "4 min read",
    ref: "ART-2025-HARDWARE",
    position: 2,
  },
]

async function main() {
  const email = process.env.ADMIN_EMAIL ?? "admin@portfolio.local"
  const password = process.env.ADMIN_PASSWORD ?? "admin12345"
  const name = process.env.ADMIN_NAME ?? "Portfolio Admin"

  const passwordHash = await bcrypt.hash(password, 12)

  await prisma.adminUser.upsert({
    where: { email },
    update: { name, password: passwordHash },
    create: { email, name, password: passwordHash },
  })

  console.log(`Seeded admin user: ${email}`)

  for (const post of samplePosts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: { imageUrl: post.imageUrl },
      create: { ...post, publishedAt: new Date() },
    })
  }

  console.log(`Seeded ${samplePosts.length} sample posts`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
