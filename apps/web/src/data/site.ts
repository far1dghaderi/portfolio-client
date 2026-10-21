import { cvProfile, cvUrl } from "@/data/cvData"

export const site = {
  name: "Farid Ghaderi",
  role: "Full-Stack Engineer",
  tagline:
    "Backend-leaning full-stack engineer. I build reliable APIs and the products on top of them.",
  email: "faridghaderi2001@gmail.com",
  resumeUrl: cvUrl,
  avatar: cvProfile.image,
  location: "London, UK",
  availability: "Open to freelance projects & remote roles",
  timezone: "London (GMT/BST) · working with teams worldwide",
  responseTime: "Usually replies within a day",
}

export const navItems = [
  { id: "about", name: "About" },
  { id: "projects", name: "Projects" },
  { id: "experience", name: "Experience" },
  { id: "stack", name: "Stack" },
  { id: "contact", name: "Contact" },
]

export const heroFacts = [
  { value: "4+", label: "years shipping production software" },
  { value: "3", label: "live products launched with Rapido Team" },
  { value: "FIDO2", label: "passwordless auth, my home turf" },
]

export const aboutParagraphs = [
  "I'm a software engineer who leans backend but enjoys owning the whole product. I started in 2022 by laying the foundations of a NestJS backend for a healthcare startup, then spent three years at IDmelon Technologies building the systems behind an enterprise passwordless-authentication platform: billing, role management, queueing and scheduling, and dozens of APIs used by the web, mobile and desktop teams.",
  "Today I'm a full-stack engineer at Neshane, another passwordless-authentication company, and I run Rapido Team, a small engineering studio I founded in 2024 that designs, builds and ships web products for clients.",
  "I care about software that keeps working after launch: readable code, honest estimates and clear async communication. Outside of work I read a lot, and I speak English, Persian, Kurdish and Spanish.",
]

export interface FocusArea {
  icon: string
  title: string
  body: string
}

export const focusAreas: FocusArea[] = [
  {
    icon: "dns",
    title: "Backends & APIs",
    body: "NestJS and Node.js services with clear module boundaries, validated inputs and documented REST APIs on PostgreSQL or MongoDB. Billing, permissions, queues and schedulers: the parts that have to be right.",
  },
  {
    icon: "verified_user",
    title: "Authentication & security",
    body: "Years inside passwordless-authentication companies: FIDO2/WebAuthn, MFA, OIDC and SAML single sign-on, LDAP directory sync, role-based access control and API gateways like APISIX.",
  },
  {
    icon: "rocket_launch",
    title: "Products, end to end",
    body: "With Rapido Team I take products from scope to launch: data model, API, a polished React or Next.js front end, then Docker and Caddy in production.",
  },
]

export interface StackGroup {
  title: string
  icon: string
  items: string[]
}

export const stackGroups: StackGroup[] = [
  { title: "Languages", icon: "code", items: ["TypeScript", "JavaScript", "SQL", "Bash"] },
  {
    title: "Backend",
    icon: "dns",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "Hono",
      "Prisma",
      "BullMQ",
      "REST & OpenAPI",
      "Socket.io",
    ],
  },
  { title: "Frontend", icon: "layers", items: ["React", "Next.js", "Tailwind CSS", "Vite"] },
  { title: "Data", icon: "database", items: ["PostgreSQL", "MongoDB", "Redis"] },
  {
    title: "Auth & security",
    icon: "verified_user",
    items: ["FIDO2 / WebAuthn", "OIDC", "SAML", "OAuth 2.0", "LDAP", "MFA / OTP", "RBAC"],
  },
  {
    title: "Infra & ops",
    icon: "boxes",
    items: ["Docker", "Linux", "Caddy", "APISIX", "AWS", "GCP"],
  },
]
