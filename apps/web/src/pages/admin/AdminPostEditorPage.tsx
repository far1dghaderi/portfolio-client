import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { MarkdownEditor } from "@/components/admin/MarkdownEditor"
import { api, ApiError } from "@/lib/api"
import { categoryLabel, POST_CATEGORIES, POST_TONES, POST_VISUALS, slugifyCategory } from "@/types/blog"
import type { Post, PostCategory, PostInput, PostTone, PostVisual } from "@/types/blog"

interface FormState {
  title: string
  slug: string
  description: string
  content: string
  category: PostCategory
  tone: PostTone
  visual: PostVisual
  imageUrl: string
  tags: string
  readTime: string
  ref: string
  featured: boolean
  published: boolean
}

const emptyForm: FormState = {
  title: "",
  slug: "",
  description: "",
  content: "",
  category: "engineering",
  tone: "primary",
  visual: "callout",
  imageUrl: "",
  tags: "",
  readTime: "",
  ref: "",
  featured: false,
  published: false,
}

const inputClass =
  "rounded-lg border border-outline-variant bg-surface-container-lowest px-space-md py-2.5 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container transition-colors"

const labelClass = "font-mono-label text-mono-label uppercase tracking-wider text-on-surface-variant"

export function AdminPostEditorPage() {
  const { id } = useParams<{ id: string }>()
  const isEditing = Boolean(id)
  const navigate = useNavigate()

  const [form, setForm] = useState<FormState>(emptyForm)
  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [categories, setCategories] = useState<string[]>(POST_CATEGORIES.map((item) => item.id))
  const [addingCategory, setAddingCategory] = useState(false)
  const [newCategory, setNewCategory] = useState("")

  useEffect(() => {
    let active = true
    api
      .get<string[]>("/admin/posts/categories")
      .then((list) => {
        if (active) setCategories((prev) => Array.from(new Set([...prev, ...list])))
      })
      .catch(() => {
        // Keep the built-in category suggestions if the request fails.
      })
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (!id) return
    let active = true
    setLoading(true)
    api
      .get<Post>(`/admin/posts/${id}`)
      .then((post) => {
        if (!active) return
        setForm({
          title: post.title,
          slug: post.slug,
          description: post.description,
          content: post.content,
          category: post.category,
          tone: post.tone,
          visual: post.visual,
          imageUrl: post.imageUrl ?? "",
          tags: post.tags.join(", "),
          readTime: post.readTime ?? "",
          ref: post.ref ?? "",
          featured: post.featured,
          published: post.published,
        })
      })
      .catch((err) => {
        if (active) setError(err instanceof ApiError ? err.message : "Failed to load post")
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [id])

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const categoryOptions = Array.from(new Set([form.category, ...categories]))

  const confirmNewCategory = () => {
    const slug = slugifyCategory(newCategory)
    if (!slug) {
      setAddingCategory(false)
      setNewCategory("")
      return
    }
    update("category", slug)
    setCategories((prev) => (prev.includes(slug) ? prev : [...prev, slug]))
    setAddingCategory(false)
    setNewCategory("")
  }

  const cancelNewCategory = () => {
    setAddingCategory(false)
    setNewCategory("")
  }

  const buildPayload = (): PostInput => {
    const payload: PostInput = {
      title: form.title.trim(),
      description: form.description.trim(),
      content: form.content,
      category: form.category,
      tone: form.tone,
      visual: form.visual,
      imageUrl: form.imageUrl.trim() || null,
      featured: form.featured,
      published: form.published,
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    }
    if (form.slug.trim()) payload.slug = form.slug.trim().toLowerCase()
    if (form.readTime.trim()) payload.readTime = form.readTime.trim()
    if (form.ref.trim()) payload.ref = form.ref.trim()
    return payload
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError(null)

    if (!form.title.trim() || !form.description.trim() || !form.content.trim()) {
      setError("Title, description and content are required.")
      return
    }

    setSaving(true)
    try {
      if (isEditing && id) {
        await api.patch<Post>(`/admin/posts/${id}`, buildPayload())
      } else {
        await api.post<Post>("/admin/posts", buildPayload())
      }
      navigate("/admin", { replace: true })
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to save post")
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!id || !window.confirm("Delete this post? This cannot be undone.")) return
    setDeleting(true)
    setError(null)
    try {
      await api.delete(`/admin/posts/${id}`)
      navigate("/admin", { replace: true })
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to delete post")
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="rounded-xl border border-outline-variant bg-surface-container-low p-space-xl text-center font-mono-code text-mono-code text-on-surface-variant">
        Loading post…
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-space-lg">
      <div className="flex flex-wrap items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm">
          <Link
            to="/admin"
            className="inline-flex items-center gap-space-xs font-mono-label text-mono-label text-on-surface-variant hover:text-primary transition-colors"
          >
            <Icon name="arrow_back" className="text-[14px]" />
            <span>Posts</span>
          </Link>
          <span className="text-outline-variant">/</span>
          <h1 className="font-headline-md text-headline-md font-semibold tracking-tight text-on-surface">
            {isEditing ? "Edit post" : "New post"}
          </h1>
        </div>

        <div className="flex items-center gap-space-sm">
          {isEditing ? (
            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting || saving}
              className="inline-flex items-center gap-space-xs rounded-lg border border-outline-variant px-space-sm py-2 font-mono-label text-mono-label text-on-surface-variant hover:border-error/50 hover:text-error transition-colors disabled:opacity-40"
            >
              <Icon name="delete" className="text-[14px]" />
              <span className="hidden sm:inline">Delete</span>
            </button>
          ) : null}
          <button
            type="submit"
            disabled={saving || deleting}
            className="inline-flex items-center gap-space-xs rounded-lg bg-primary px-space-md py-2 font-mono-label text-mono-label font-semibold uppercase tracking-wider text-on-primary transition-all hover:bg-primary-container active:scale-[0.98] disabled:opacity-60"
          >
            <Icon name="save" className="text-[16px]" />
            <span>{saving ? "Saving…" : isEditing ? "Save changes" : "Publish / save"}</span>
          </button>
        </div>
      </div>

      {error ? (
        <div className="flex items-center gap-space-xs rounded-lg border border-error/40 bg-error-container/20 px-space-md py-space-sm text-error">
          <Icon name="close" className="text-[16px]" />
          <span className="font-body-sm text-body-sm">{error}</span>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-space-md">
          <label className="flex flex-col gap-space-xs">
            <span className={labelClass}>Title</span>
            <input
              value={form.title}
              onChange={(event) => update("title", event.target.value)}
              placeholder="Designing Resilient NestJS Architectures"
              className={`${inputClass} font-headline-md text-[1.05rem]`}
            />
          </label>

          <label className="flex flex-col gap-space-xs">
            <span className={labelClass}>Description</span>
            <textarea
              value={form.description}
              onChange={(event) => update("description", event.target.value)}
              rows={3}
              placeholder="A one or two sentence summary shown on the writing index."
              className={`${inputClass} resize-y`}
            />
          </label>

          <div className="flex flex-col gap-space-xs">
            <span className={labelClass}>Content</span>
            <MarkdownEditor value={form.content} onChange={(value) => update("content", value)} />
          </div>
        </div>

        <aside className="flex flex-col gap-space-md">
          <section className="flex flex-col gap-space-md rounded-xl border border-outline-variant bg-surface-container-low p-space-md">
            <span className="font-mono-label text-mono-label uppercase tracking-wider text-outline">
              Publishing
            </span>

            <label className="flex cursor-pointer items-center justify-between gap-space-sm">
              <span className="font-body-sm text-body-sm text-on-surface">Published</span>
              <input
                type="checkbox"
                checked={form.published}
                onChange={(event) => update("published", event.target.checked)}
                className="h-4 w-4 accent-[#8ed5ff]"
              />
            </label>
            <label className="flex cursor-pointer items-center justify-between gap-space-sm">
              <span className="font-body-sm text-body-sm text-on-surface">Featured</span>
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(event) => update("featured", event.target.checked)}
                className="h-4 w-4 accent-[#8ed5ff]"
              />
            </label>

            <label className="flex flex-col gap-space-xs">
              <span className={labelClass}>Slug</span>
              <input
                value={form.slug}
                onChange={(event) => update("slug", event.target.value)}
                placeholder="auto-from-title"
                className={`${inputClass} font-mono-code text-mono-code`}
              />
            </label>
          </section>

          <section className="flex flex-col gap-space-md rounded-xl border border-outline-variant bg-surface-container-low p-space-md">
            <span className="font-mono-label text-mono-label uppercase tracking-wider text-outline">
              Classification
            </span>

            <div className="flex flex-col gap-space-xs">
              <span className={labelClass}>Category</span>
              {addingCategory ? (
                <div className="flex flex-col gap-space-xs">
                  <input
                    autoFocus
                    value={newCategory}
                    onChange={(event) => setNewCategory(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault()
                        confirmNewCategory()
                      }
                      if (event.key === "Escape") {
                        event.preventDefault()
                        cancelNewCategory()
                      }
                    }}
                    placeholder="e.g. DevOps"
                    className={inputClass}
                  />
                  <span className="font-mono-label text-[10px] text-outline">
                    {slugifyCategory(newCategory)
                      ? `Will be saved as "${slugifyCategory(newCategory)}"`
                      : "Type a name to add a new category"}
                  </span>
                  <div className="flex items-center gap-space-xs">
                    <button
                      type="button"
                      onClick={confirmNewCategory}
                      disabled={!slugifyCategory(newCategory)}
                      className="inline-flex items-center gap-space-xs rounded border border-primary-container px-space-sm py-1 font-mono-label text-mono-label text-primary transition-colors hover:bg-primary-container hover:text-on-primary-container disabled:opacity-40"
                    >
                      <Icon name="check" className="text-[14px]" />
                      <span>Add</span>
                    </button>
                    <button
                      type="button"
                      onClick={cancelNewCategory}
                      className="inline-flex items-center gap-space-xs rounded px-space-sm py-1 font-mono-label text-mono-label text-on-surface-variant transition-colors hover:text-on-surface"
                    >
                      <Icon name="close" className="text-[14px]" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              ) : (
                <select
                  value={form.category}
                  onChange={(event) => {
                    if (event.target.value === "__new__") {
                      setAddingCategory(true)
                      setNewCategory("")
                    } else {
                      update("category", event.target.value)
                    }
                  }}
                  className={inputClass}
                >
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {categoryLabel(category)}
                    </option>
                  ))}
                  <option value="__new__">＋ Add new category…</option>
                </select>
              )}
            </div>

            <label className="flex flex-col gap-space-xs">
              <span className={labelClass}>Accent tone</span>
              <select
                value={form.tone}
                onChange={(event) => update("tone", event.target.value as PostTone)}
                className={inputClass}
              >
                {POST_TONES.map((tone) => (
                  <option key={tone} value={tone}>
                    {tone}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-space-xs">
              <span className={labelClass}>Visual</span>
              <select
                value={form.visual}
                onChange={(event) => update("visual", event.target.value as PostVisual)}
                className={inputClass}
              >
                {POST_VISUALS.map((visual) => (
                  <option key={visual} value={visual}>
                    {visual}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-space-xs">
              <span className={labelClass}>Tags</span>
              <input
                value={form.tags}
                onChange={(event) => update("tags", event.target.value)}
                placeholder="NestJS, Architecture, TypeScript"
                className={inputClass}
              />
              <span className="font-mono-label text-[10px] text-outline">Comma separated</span>
            </label>
          </section>

          <section className="flex flex-col gap-space-md rounded-xl border border-outline-variant bg-surface-container-low p-space-md">
            <span className="font-mono-label text-mono-label uppercase tracking-wider text-outline">
              Details
            </span>

            <label className="flex flex-col gap-space-xs">
              <span className={labelClass}>Thumbnail URL</span>
              <input
                value={form.imageUrl}
                onChange={(event) => update("imageUrl", event.target.value)}
                placeholder="https://images.example.com/cover.jpg"
                className={`${inputClass} font-mono-code text-[12px]`}
              />
              <span className="font-mono-label text-[10px] text-outline">Paste an image address (upload not required)</span>
            </label>

            {form.imageUrl.trim() ? (
              <div className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest">
                <img
                  src={form.imageUrl.trim()}
                  alt="Thumbnail preview"
                  className="aspect-[2/1] w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none"
                  }}
                  onLoad={(event) => {
                    event.currentTarget.style.display = "block"
                  }}
                />
              </div>
            ) : null}

            <label className="flex flex-col gap-space-xs">
              <span className={labelClass}>Read time</span>
              <input
                value={form.readTime}
                onChange={(event) => update("readTime", event.target.value)}
                placeholder="7 min read"
                className={inputClass}
              />
            </label>

            <label className="flex flex-col gap-space-xs">
              <span className={labelClass}>Archival ref</span>
              <input
                value={form.ref}
                onChange={(event) => update("ref", event.target.value)}
                placeholder="ART-2025-NESTJS"
                className={`${inputClass} font-mono-code text-mono-code`}
              />
            </label>
          </section>
        </aside>
      </div>
    </form>
  )
}
