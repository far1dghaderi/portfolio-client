import { Link } from "react-router-dom"

const services = [
  {
    title: "Backend Systems",
    description:
      "APIs, data models, and services in Node.js, NestJS, and TypeScript. PostgreSQL and MongoDB, shaped so the next change stays obvious.",
    icon: LayersIcon,
  },
  {
    title: "Product Engineering",
    description:
      "Auth, billing, queues, and the systems a product quietly depends on. I take a requirement and leave something a team can keep running.",
    icon: BlocksIcon,
  },
  {
    title: "Interfaces",
    description:
      "React screens wired straight to those APIs. I take the frontend when it keeps a project in one pair of hands.",
    icon: WindowIcon,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-8 py-12 sm:py-16">
      <h2 className="text-2xl font-bold tracking-tight">What I do</h2>
      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {services.map((service) => (
          <article key={service.title}>
            <service.icon />
            <h3 className="mt-4 text-base font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {service.description}
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-block text-sm font-medium underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:decoration-neutral-600 dark:hover:decoration-white"
            >
              Let's talk
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function LayersIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 2 46 14 24 26 2 14Z" fill="#FF6A69" />
      <path d="M6 20 24 30 42 20 42 25 24 35 6 25Z" fill="#296696" />
      <path d="M6 30 24 40 42 30 42 35 24 45 6 35Z" fill="#FF6A69" />
    </svg>
  )
}

function BlocksIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="0" y="14" width="30" height="30" rx="6" fill="#FF6A69" />
      <rect x="16" y="2" width="30" height="30" rx="6" fill="#296696" />
    </svg>
  )
}

function WindowIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="40" height="32" rx="5" fill="#FF6A69" />
      <rect x="4" y="8" width="40" height="10" rx="5" fill="#296696" />
      <rect x="4" y="14" width="40" height="4" fill="#296696" />
      <circle cx="11" cy="13" r="1.6" fill="#FF6A69" />
      <circle cx="16.5" cy="13" r="1.6" fill="#FF6A69" />
    </svg>
  )
}
