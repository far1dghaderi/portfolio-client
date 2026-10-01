import { Injectable, NotFoundException } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { PrismaService } from "../prisma/prisma.service"
import { CreatePostDto } from "./dto/create-post.dto"
import { UpdatePostDto } from "./dto/update-post.dto"

const LIST_ORDER: Prisma.PostOrderByWithRelationInput[] = [
  { position: "asc" },
  { createdAt: "desc" },
]

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  findAllPublic() {
    return this.prisma.post.findMany({
      where: { published: true },
      orderBy: LIST_ORDER,
    })
  }

  async findBySlugPublic(slug: string) {
    const post = await this.prisma.post.findFirst({
      where: { slug, published: true },
    })
    if (!post) {
      throw new NotFoundException("Post not found")
    }
    return post
  }

  findAllAdmin() {
    return this.prisma.post.findMany({ orderBy: LIST_ORDER })
  }

  async findCategories(): Promise<string[]> {
    const rows = await this.prisma.post.findMany({
      distinct: ["category"],
      select: { category: true },
      orderBy: { category: "asc" },
    })
    return rows.map((row) => row.category)
  }

  async findByIdAdmin(id: string) {
    const post = await this.prisma.post.findUnique({ where: { id } })
    if (!post) {
      throw new NotFoundException("Post not found")
    }
    return post
  }

  async create(dto: CreatePostDto) {
    const slug = await this.resolveSlug(dto.slug ?? dto.title)
    const position = await this.nextPosition()
    const published = dto.published ?? false

    return this.prisma.post.create({
      data: {
        title: dto.title,
        slug,
        description: dto.description,
        content: dto.content,
        category: dto.category,
        tone: dto.tone ?? "primary",
        imageUrl: dto.imageUrl?.trim() || null,
        tags: dto.tags ?? [],
        featured: dto.featured ?? false,
        published,
        visual: dto.visual ?? "callout",
        readTime: dto.readTime,
        ref: dto.ref,
        position,
        publishedAt: published ? new Date() : null,
      },
    })
  }

  async update(id: string, dto: UpdatePostDto) {
    const existing = await this.findByIdAdmin(id)

    const data: Prisma.PostUpdateInput = {
      title: dto.title,
      description: dto.description,
      content: dto.content,
      category: dto.category,
      tone: dto.tone,
      imageUrl: dto.imageUrl === undefined ? undefined : dto.imageUrl?.trim() || null,
      tags: dto.tags,
      featured: dto.featured,
      visual: dto.visual,
      readTime: dto.readTime,
      ref: dto.ref,
    }

    if (dto.slug !== undefined) {
      data.slug = await this.resolveSlug(dto.slug, id)
    }

    if (dto.published !== undefined) {
      data.published = dto.published
      if (dto.published && !existing.published) {
        data.publishedAt = new Date()
      }
    }

    return this.prisma.post.update({ where: { id }, data })
  }

  async remove(id: string) {
    await this.findByIdAdmin(id)
    await this.prisma.post.delete({ where: { id } })
    return { success: true }
  }

  async reorder(ids: string[]) {
    const posts = await this.prisma.post.findMany({
      where: { id: { in: ids } },
      select: { id: true },
    })

    if (posts.length !== ids.length) {
      throw new NotFoundException("One or more posts could not be found")
    }

    await this.prisma.$transaction(
      ids.map((id, index) =>
        this.prisma.post.update({ where: { id }, data: { position: index } })
      )
    )

    return this.findAllAdmin()
  }

  private async nextPosition(): Promise<number> {
    const last = await this.prisma.post.findFirst({
      orderBy: { position: "desc" },
      select: { position: true },
    })
    return last ? last.position + 1 : 0
  }

  private async resolveSlug(input: string, excludeId?: string): Promise<string> {
    const base = this.slugify(input)
    const existing = await this.prisma.post.findMany({
      where: {
        slug: { startsWith: base },
        ...(excludeId ? { id: { not: excludeId } } : {}),
      },
      select: { slug: true },
    })

    const used = new Set(existing.map((post) => post.slug))
    if (!used.has(base)) return base

    let suffix = 2
    while (used.has(`${base}-${suffix}`)) {
      suffix += 1
    }
    return `${base}-${suffix}`
  }

  private slugify(value: string): string {
    const slug = value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
    return slug || `post-${Date.now()}`
  }
}
