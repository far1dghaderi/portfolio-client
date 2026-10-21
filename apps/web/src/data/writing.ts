import type { PostTone, PostVisual } from "@/types/blog"

export interface WritingPost {
  id: string
  slug: string
  category: string
  categoryLabel: string
  tone: PostTone
  title: string
  description: string
  date: string
  readTime: string
  ref: string
  imageUrl?: string
  tags: string[]
  featured?: boolean
  visual: PostVisual
}
