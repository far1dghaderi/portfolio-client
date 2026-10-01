import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { MarkdownView } from "@/components/common/MarkdownView"
import { api, ApiError } from "@/lib/api"
import { categoryLabel } from "@/types/blog"
import type { Post, PostTone } from "@/types/blog"

const toneText: Record<PostTone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  outline: "text-outline",
}

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function WritingPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!slug) return
    let active = true
    setLoading(true)
    setError(null)
    setNotFound(false)

    api
      .get<Post>(`/posts/${slug}`)
      .then((data) => {
        if (active) setPost(data)
      })
      .catch((err) => {
        if (!active) return
        if (err instanceof ApiError && err.status === 404) {
          setNotFound(true)
        } else {
          setError("We couldn't load this essay. Please try again later.")
        }
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [slug])

  if (loading) {
    return (
      <section className="mx-auto max-w-site px-margin-mobile pt-space-xl lg:px-margin">
        <div className="rounded-xl border border-outline-variant bg-surface-container-low p-space-xl text-center font-mono-code text-mono-code text-on-surface-variant">
          Loading essay…
        </div>
      </section>
    )
  }

  if (notFound || error || !post) {
    return (
      <section className="mx-auto max-w-site px-margin-mobile pt-space-xl lg:px-margin">
        <div className="flex flex-col items-center gap-space-md rounded-xl border border-dashed border-outline-variant bg-surface-container-low p-space-xl text-center">
          <Icon name="article" className="text-[36px] text-outline" />
          <div className="flex flex-col gap-space-xs">
            <h1 className="font-headline-lg text-headline-lg-mobile font-semibold text-on-surface">
              {notFound ? "Essay not found" : "Something went wrong"}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {notFound
                ? "This essay may have been unpublished or the link is incorrect."
                : error}
            </p>
          </div>
          <Link
            to="/writing"
            className="inline-flex items-center gap-space-xs rounded-lg border border-outline-variant px-space-md py-2 font-mono-label text-mono-label text-on-surface-variant transition-colors hover:border-primary-container hover:text-primary"
          >
            <Icon name="arrow_back" className="text-[16px]" />
            <span>Back to writing</span>
          </Link>
        </div>
      </section>
    )
  }

  const dateSource = post.publishedAt ?? post.createdAt

  return (
    <article className="mx-auto max-w-site px-margin-mobile pt-space-xl lg:px-margin">
      <Link
        to="/writing"
        className="inline-flex items-center gap-space-xs font-mono-label text-mono-label text-on-surface-variant transition-colors hover:text-primary"
      >
        <Icon name="arrow_back" className="text-[16px]" />
        <span>All writing</span>
      </Link>

      <header className="mt-space-lg flex flex-col gap-space-md rounded-xl border border-outline-variant bg-surface-container-low p-space-lg lg:p-space-xl">
        <div className="flex flex-wrap items-center gap-space-sm font-mono-label text-mono-label">
          <span
            className={`rounded bg-surface-container-high px-space-xs py-0.5 uppercase tracking-wide ${toneText[post.tone]}`}
          >
            {categoryLabel(post.category)}
          </span>
          <span className="text-on-surface-variant">{formatDate(dateSource)}</span>
          <span className="text-outline-variant">/</span>
          <span className="text-outline">{post.readTime ?? "Article"}</span>
          {post.ref ? (
            <>
              <span className="text-outline-variant">/</span>
              <span className="text-outline">{post.ref}</span>
            </>
          ) : null}
        </div>

        <h1 className="font-headline-lg text-headline-lg-mobile font-semibold tracking-tight text-on-surface sm:text-display-hero-mobile">
          {post.title}
        </h1>
        <p className="max-w-3xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
          {post.description}
        </p>

        {post.tags.length > 0 ? (
          <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-surface-container-high px-space-xs py-0.5 font-mono-label text-[11px] text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      {post.imageUrl ? (
        <div className="mt-space-lg overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
          <img src={post.imageUrl} alt={post.title} className="aspect-[2/1] w-full object-cover" />
        </div>
      ) : null}

      <div className="mt-space-lg max-w-3xl">
        <MarkdownView content={post.content} />
      </div>

      <footer className="mt-space-xl flex items-center justify-between gap-space-md border-t border-outline-variant pt-space-lg">
        <Link
          to="/writing"
          className="inline-flex items-center gap-space-xs font-mono-code text-mono-code text-primary transition-colors hover:text-primary-fixed"
        >
          <Icon name="arrow_back" className="text-[16px]" />
          <span>Back to all writing</span>
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-space-xs rounded-lg border border-primary-container px-space-md py-2 font-mono-label text-mono-label text-primary transition-colors hover:bg-primary-container hover:text-on-primary-container"
        >
          <span>Get in touch</span>
          <Icon name="arrow_forward" className="text-[16px]" />
        </Link>
      </footer>
    </article>
  )
}
