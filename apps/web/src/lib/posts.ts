import { categoryLabel } from "@/types/blog"
import type { Post } from "@/types/blog"
import type { WritingPost } from "@/data/writing"

export function toWritingPost(post: Post): WritingPost {
  const dateSource = post.publishedAt ?? post.createdAt
  return {
    id: post.id,
    slug: post.slug,
    category: post.category,
    categoryLabel: categoryLabel(post.category),
    tone: post.tone,
    title: post.title,
    description: post.description,
    date: new Date(dateSource).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    readTime: post.readTime ?? "Article",
    ref: post.ref ?? "",
    imageUrl: post.imageUrl ?? undefined,
    tags: post.tags,
    featured: post.featured,
    visual: post.visual,
  }
}
