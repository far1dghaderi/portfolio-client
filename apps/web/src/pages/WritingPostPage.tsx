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
      <section className="mx-auto max-w-4xl px-5 pt-36 pb-24 sm:px-8">
        <div className="border-outline-variant bg-surface-container-low p-space-xl font-mono-code text-mono-code text-on-surface-variant rounded-xl border text-center">
          Loading essay…
        </div>
      </section>
    )
  }

  if (notFound || error || !post) {
    return (
      <section className="mx-auto max-w-4xl px-5 pt-36 pb-24 sm:px-8">
        <div className="gap-space-md border-outline-variant bg-surface-container-low p-space-xl flex flex-col items-center rounded-xl border border-dashed text-center">
          <Icon name="article" className="text-outline text-[36px]" />
          <div className="gap-space-xs flex flex-col">
            <h1 className="font-headline-lg text-headline-lg-mobile text-on-surface font-semibold">
              {notFound ? "Essay not found" : "Something went wrong"}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {notFound ? "This essay may have been unpublished or the link is incorrect." : error}
            </p>
          </div>
          <Link
            to="/writing"
            className="gap-space-xs border-outline-variant px-space-md font-mono-label text-mono-label text-on-surface-variant hover:border-primary-container hover:text-primary inline-flex items-center rounded-lg border py-2 transition-colors"
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
    <article className="enter mx-auto max-w-4xl px-5 pt-36 pb-24 sm:px-8">
      <Link
        to="/writing"
        className="gap-space-xs font-mono-label text-mono-label text-on-surface-variant hover:text-primary inline-flex items-center transition-colors"
      >
        <Icon name="arrow_back" className="text-[16px]" />
        <span>All writing</span>
      </Link>

      <header className="mt-space-lg gap-space-md border-outline-variant bg-surface-container-low p-space-lg lg:p-space-xl flex flex-col rounded-xl border">
        <div className="gap-space-sm font-mono-label text-mono-label flex flex-wrap items-center">
          <span
            className={`bg-surface-container-high px-space-xs rounded py-0.5 tracking-wide uppercase ${toneText[post.tone]}`}
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

        <h1 className="font-headline-lg text-headline-lg-mobile text-on-surface sm:text-display-hero-mobile font-semibold tracking-tight">
          {post.title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {post.description}
        </p>

        {post.tags.length > 0 ? (
          <div className="gap-space-xs pt-space-xs flex flex-wrap items-center">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-surface-container-high px-space-xs font-mono-label text-on-surface-variant rounded py-0.5 text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      {post.imageUrl ? (
        <div className="mt-space-lg border-outline-variant bg-surface-container-lowest overflow-hidden rounded-xl border">
          <img src={post.imageUrl} alt={post.title} className="aspect-[2/1] w-full object-cover" />
        </div>
      ) : null}

      <div className="mt-space-lg max-w-3xl">
        <MarkdownView content={post.content} />
      </div>

      <footer className="mt-space-xl gap-space-md border-outline-variant pt-space-lg flex items-center justify-between border-t">
        <Link
          to="/writing"
          className="gap-space-xs font-mono-code text-mono-code text-primary hover:text-primary-fixed inline-flex items-center transition-colors"
        >
          <Icon name="arrow_back" className="text-[16px]" />
          <span>Back to all writing</span>
        </Link>
        <Link
          to="/#contact"
          className="gap-space-xs border-primary-container px-space-md font-mono-label text-mono-label text-primary hover:bg-primary-container hover:text-on-primary-container inline-flex items-center rounded-lg border py-2 transition-colors"
        >
          <span>Get in touch</span>
          <Icon name="arrow_forward" className="text-[16px]" />
        </Link>
      </footer>
    </article>
  )
}
