export type PostCategory = string
export type PostTone = "primary" | "secondary" | "tertiary" | "outline"
export type PostVisual = "code" | "metrics" | "callout"

export interface Post {
  id: string
  slug: string
  title: string
  description: string
  content: string
  category: PostCategory
  tone: PostTone
  imageUrl: string | null
  tags: string[]
  featured: boolean
  published: boolean
  visual: PostVisual
  readTime: string | null
  ref: string | null
  position: number
  publishedAt: string | null
  createdAt: string
  updatedAt: string
}

export interface PostInput {
  title: string
  slug?: string
  description: string
  content: string
  category: PostCategory
  tone?: PostTone
  imageUrl?: string | null
  tags?: string[]
  featured?: boolean
  published?: boolean
  visual?: PostVisual
  readTime?: string
  ref?: string
}

export interface AdminUser {
  id: string
  email: string
  name: string
}

export const POST_CATEGORIES: { id: PostCategory; label: string }[] = [
  { id: "engineering", label: "Engineering" },
  { id: "product-building", label: "Product & Building" },
  { id: "notes-craft", label: "Notes & Craft" },
]

export function slugifyCategory(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export const POST_TONES: PostTone[] = ["primary", "secondary", "tertiary", "outline"]
export const POST_VISUALS: PostVisual[] = ["code", "metrics", "callout"]

export function categoryLabel(category: PostCategory): string {
  const known = POST_CATEGORIES.find((item) => item.id === category)
  if (known) return known.label

  return category
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
