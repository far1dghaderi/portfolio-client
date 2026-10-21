export interface ProjectShot {
  src: string
  label: string
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  stack: string[]
  url: string
  shots: ProjectShot[]
  highlights?: string[]
}

// Client work delivered through Rapido Team (rapidoteam.com/portfolio).
export const featuredProject: Project = {
  id: "barca-fans",
  title: "Barça Fans Armenia",
  category: "E-commerce & community",
  description:
    "A bilingual (English/Armenian) store and community hub for FC Barcelona supporters in Armenia. Every product, option and price lives in the database: shirts take a name, number and sleeve badges with a live preview, boots take a size, posters a frame. Shoppers search and filter the catalogue, manage orders and addresses, review only what they've actually received, and react to and comment on blog stories.",
  stack: ["Next.js", "NestJS", "PostgreSQL", "next-intl", "Docker", "Caddy"],
  url: "https://barcafans.store",
  highlights: [
    "Carts are re-priced on the server, so the client never decides a price",
    "Per-product customisation with a live jersey preview",
    "Verified-buyer reviews, member dashboard, blog with likes and comments",
  ],
  shots: [
    { src: "/projects/barca-fans/home.webp", label: "Animated landing" },
    { src: "/projects/barca-fans/store.webp", label: "Search & filters" },
    { src: "/projects/barca-fans/product.webp", label: "Customisable products" },
    { src: "/projects/barca-fans/blog.webp", label: "Stories & community" },
  ],
}

export const projects: Project[] = [
  {
    id: "shiraz-wine",
    title: "Shiraz Estate Wine House",
    category: "Luxury e-commerce",
    description:
      "A wine-house storefront built around editorial storytelling: a filterable cellar of rare vintages, members-only accounts and allocation waitlists, tuned to feel fast and polished on every screen.",
    stack: ["Next.js", "NestJS", "MongoDB", "Docker", "Caddy"],
    url: "https://shirazwine.shop",
    shots: [
      { src: "/projects/shiraz-wine/home.webp", label: "Home" },
      { src: "/projects/shiraz-wine/cellar.webp", label: "Cellar" },
      { src: "/projects/shiraz-wine/collection.webp", label: "Collection" },
      { src: "/projects/shiraz-wine/signin.webp", label: "Members" },
    ],
  },
  {
    id: "safe-identity",
    title: "Safe Identity",
    category: "Privacy & security",
    description:
      "A self-hosted privacy check that X-rays your connection in seconds. It catches WebRTC, IPv6 and DNS leaks with its own purpose-built nameserver, checks your IP against several threat-intelligence providers, and spots timezone or language mismatches that give away your real location, then sums it all up in one clear verdict. Your data never leaves the server.",
    stack: ["React", "Hono", "Go", "Docker", "Caddy"],
    url: "https://safe-identity.rapidoteam.com",
    shots: [{ src: "/projects/safe-identity/home.webp", label: "Privacy report" }],
  },
]
