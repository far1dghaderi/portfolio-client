import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { api, ApiError } from "@/lib/api"
import { categoryLabel } from "@/types/blog"
import type { Post } from "@/types/blog"
import { cn } from "@/lib/utils"

function formatDate(value: string | null) {
  if (!value) return "—"
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [busyId, setBusyId] = useState<string | null>(null)
  const [savingOrder, setSavingOrder] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await api.get<Post[]>("/admin/posts")
      setPosts(data)
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to load posts")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const move = async (index: number, direction: -1 | 1) => {
    const target = index + direction
    if (target < 0 || target >= posts.length || savingOrder) return

    const next = [...posts]
    ;[next[index], next[target]] = [next[target], next[index]]
    setPosts(next)
    setSavingOrder(true)
    try {
      const updated = await api.patch<Post[]>("/admin/posts/reorder", {
        ids: next.map((post) => post.id),
      })
      setPosts(updated)
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to save order")
      await load()
    } finally {
      setSavingOrder(false)
    }
  }

  const togglePublished = async (post: Post) => {
    setBusyId(post.id)
    setError(null)
    try {
      const updated = await api.patch<Post>(`/admin/posts/${post.id}`, { published: !post.published })
      setPosts((current) => current.map((item) => (item.id === updated.id ? updated : item)))
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to update post")
    } finally {
      setBusyId(null)
    }
  }

  const remove = async (post: Post) => {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return
    setBusyId(post.id)
    setError(null)
    try {
      await api.delete(`/admin/posts/${post.id}`)
      setPosts((current) => current.filter((item) => item.id !== post.id))
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to delete post")
    } finally {
      setBusyId(null)
    }
  }

  return (
    <div className="flex flex-col gap-space-lg">
      <div className="flex flex-wrap items-end justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-mono-code text-mono-code text-primary">01 //</span>
            <h1 className="font-headline-lg text-headline-lg font-semibold tracking-tight text-on-surface">
              Content
            </h1>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {loading ? "Loading…" : `${posts.length} ${posts.length === 1 ? "post" : "posts"} · drag order with the arrows`}
          </p>
        </div>

        <Link
          to="/admin/posts/new"
          className="inline-flex items-center gap-space-xs rounded-lg bg-primary px-space-md py-2 font-mono-label text-mono-label font-semibold uppercase tracking-wider text-on-primary transition-all hover:bg-primary-container active:scale-[0.98]"
        >
          <Icon name="add" className="text-[16px]" />
          <span>New post</span>
        </Link>
      </div>

      {error ? (
        <div className="flex items-center gap-space-xs rounded-lg border border-error/40 bg-error-container/20 px-space-md py-space-sm text-error">
          <Icon name="close" className="text-[16px]" />
          <span className="font-body-sm text-body-sm">{error}</span>
        </div>
      ) : null}

      {loading ? (
        <div className="rounded-xl border border-outline-variant bg-surface-container-low p-space-xl text-center font-mono-code text-mono-code text-on-surface-variant">
          Loading posts…
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center gap-space-sm rounded-xl border border-dashed border-outline-variant bg-surface-container-low p-space-xl text-center">
          <Icon name="article" className="text-[32px] text-outline" />
          <p className="font-body-md text-body-md text-on-surface-variant">No posts yet.</p>
          <Link
            to="/admin/posts/new"
            className="font-mono-code text-mono-code text-primary hover:underline"
          >
            Write your first essay →
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-space-sm">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="group grid grid-cols-1 gap-space-md rounded-xl border border-outline-variant bg-surface-container-low p-space-md transition-colors hover:border-outline hover:bg-surface-container md:grid-cols-[auto_1fr_auto]"
            >
              <div className="flex items-center gap-1 md:flex-col md:justify-center">
                <button
                  type="button"
                  onClick={() => move(index, -1)}
                  disabled={index === 0 || savingOrder}
                  aria-label="Move up"
                  className="grid h-7 w-7 place-items-center rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface disabled:opacity-30"
                >
                  <Icon name="arrow_upward" className="text-[16px]" />
                </button>
                <button
                  type="button"
                  onClick={() => move(index, 1)}
                  disabled={index === posts.length - 1 || savingOrder}
                  aria-label="Move down"
                  className="grid h-7 w-7 place-items-center rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface disabled:opacity-30"
                >
                  <Icon name="arrow_downward" className="text-[16px]" />
                </button>
              </div>

              <div className="flex flex-col gap-space-xs min-w-0">
                <div className="flex flex-wrap items-center gap-space-xs">
                  {post.featured ? (
                    <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-1.5 py-0.5 font-mono-label text-[10px] uppercase text-primary">
                      <Icon name="star" className="text-[12px]" />
                      Featured
                    </span>
                  ) : null}
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-mono-label text-[10px] uppercase",
                      post.published
                        ? "bg-secondary/10 text-secondary"
                        : "bg-tertiary/10 text-tertiary"
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        post.published ? "bg-secondary" : "bg-tertiary"
                      )}
                    />
                    {post.published ? "Published" : "Draft"}
                  </span>
                  <span className="font-mono-label text-[10px] uppercase tracking-wider text-outline">
                    {categoryLabel(post.category)}
                  </span>
                </div>

                <h2 className="truncate font-headline-md text-[1.05rem] font-semibold text-on-surface">
                  {post.title}
                </h2>
                <p className="line-clamp-2 font-body-sm text-body-sm text-on-surface-variant">
                  {post.description}
                </p>
                <div className="flex flex-wrap items-center gap-space-sm pt-space-xs font-mono-label text-[10px] uppercase tracking-wider text-outline">
                  <span>Slug: {post.slug}</span>
                  <span className="text-outline-variant">/</span>
                  <span>Updated {formatDate(post.updatedAt)}</span>
                  {post.tags.length > 0 ? (
                    <>
                      <span className="text-outline-variant">/</span>
                      <span>{post.tags.length} tags</span>
                    </>
                  ) : null}
                </div>
              </div>

              <div className="flex items-center gap-1 md:flex-col md:justify-center">
                <button
                  type="button"
                  onClick={() => togglePublished(post)}
                  disabled={busyId === post.id}
                  aria-label={post.published ? "Unpublish" : "Publish"}
                  title={post.published ? "Unpublish" : "Publish"}
                  className="grid h-8 w-8 place-items-center rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface disabled:opacity-40"
                >
                  <Icon name={post.published ? "visibility_off" : "visibility"} className="text-[16px]" />
                </button>
                <Link
                  to={`/admin/posts/${post.id}`}
                  aria-label="Edit"
                  title="Edit"
                  className="grid h-8 w-8 place-items-center rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-primary"
                >
                  <Icon name="edit" className="text-[16px]" />
                </Link>
                <button
                  type="button"
                  onClick={() => remove(post)}
                  disabled={busyId === post.id}
                  aria-label="Delete"
                  title="Delete"
                  className="grid h-8 w-8 place-items-center rounded-lg text-on-surface-variant hover:bg-error-container/30 hover:text-error disabled:opacity-40"
                >
                  <Icon name="delete" className="text-[16px]" />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
