import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { writingPosts } from "@/data/writing"
import type { WritingPost } from "@/data/writing"
import type { Tone } from "@/data/site"
import { api } from "@/lib/api"
import { toWritingPost } from "@/lib/posts"
import { categoryLabel } from "@/types/blog"
import type { Post } from "@/types/blog"

const toneText: Record<Tone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  outline: "text-outline",
}

function PostVisual({ post }: { post: WritingPost }) {
  if (post.visual === "code" && post.code) {
    return (
      <div className="rounded-lg bg-surface-container-lowest p-space-sm flex flex-col gap-space-xs">
        <div className="flex items-center justify-between text-outline font-mono-label text-mono-label">
          <div className="flex items-center gap-space-xs">
            <Icon name="terminal" className="text-[14px]" />
            <span>{post.code.file}</span>
          </div>
          <span className="text-secondary font-mono-code">{post.code.version}</span>
        </div>
        <div className="font-mono-code text-body-sm text-on-surface-variant overflow-x-auto py-1">
          {post.code.lines.map((line, index) => (
            <span key={index} className={line.tone === "primary" ? "text-primary" : "text-outline"}>
              {line.text}
              {index < post.code!.lines.length - 1 ? <br /> : null}
            </span>
          ))}
        </div>
      </div>
    )
  }

  if (post.visual === "metrics" && post.metrics) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
        {post.metrics.map((metric) => (
          <div key={metric.label} className="bg-surface-container-lowest rounded-lg p-space-sm flex flex-col gap-1">
            <span className="font-mono-label text-[10px] text-outline uppercase">{metric.label}</span>
            <span className={`font-mono-code text-body-sm ${toneText[metric.tone]}`}>{metric.value}</span>
            <span className="font-body-sm text-[11px] text-on-surface-variant">{metric.detail}</span>
          </div>
        ))}
      </div>
    )
  }

  if (post.visual === "callout" && post.callout) {
    return (
      <div className="p-space-md rounded-lg bg-surface-container flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <Icon name="memory" className="text-primary text-[28px]" />
          <div className="flex flex-col">
            <span className="font-headline-md text-[14px] font-semibold text-on-surface">
              {post.callout.title}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">{post.callout.body}</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1 font-mono-code text-[12px] text-secondary">
          <span>{post.callout.metric}</span>
        </div>
      </div>
    )
  }

  return null
}

function PostItem({ post }: { post: WritingPost }) {
  return (
    <Link
      to={`/writing/${post.slug}`}
      className="post-item group relative block rounded-xl bg-surface-container-low p-space-lg lg:p-space-xl transition-all duration-300 hover:bg-surface-container hover:shadow-xl"
    >
      {post.imageUrl ? (
        <div className="mb-space-lg overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest">
          <img
            src={post.imageUrl}
            alt={post.title}
            loading="lazy"
            className="aspect-[2/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-3 flex lg:flex-col justify-between items-start gap-space-xs">
          <div className="flex flex-col gap-space-xs">
            {post.featured ? (
              <div className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded font-mono-label text-mono-label bg-primary/10 text-primary w-fit">
                <Icon name="star" className="text-[14px]" />
                <span>Featured Essay</span>
              </div>
            ) : null}
            <time className="font-mono-code text-mono-code text-on-surface-variant pt-space-xs">{post.date}</time>
            <span className="font-mono-label text-mono-label text-outline">{post.readTime}</span>
          </div>
          <div className="hidden lg:flex flex-col gap-space-xs pt-space-md">
            <span className="font-mono-label text-[10px] uppercase text-outline">Archival ID</span>
            <span className="font-mono-code text-[11px] text-on-surface-variant">{post.ref}</span>
          </div>
        </div>

        <div className="lg:col-span-9 flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span
              className={`px-space-xs py-0.5 rounded font-mono-label text-[11px] uppercase tracking-wide bg-surface-container-high ${toneText[post.tone]}`}
            >
              {post.categoryLabel}
            </span>
          </div>
          <h3 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-semibold text-on-surface group-hover:text-primary transition-colors tracking-tight">
            {post.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{post.description}</p>

          <PostVisual post={post} />

          <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
            <div className="flex flex-wrap items-center gap-space-xs">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-label text-[11px] px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-space-xs font-mono-code text-mono-code text-primary group-hover:translate-x-1 transition-transform">
              <span>Read essay</span>
              <Icon name="arrow_forward" className="text-[16px]" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function WritingPage() {
  const [filter, setFilter] = useState<string>("all")
  const [subscribed, setSubscribed] = useState(false)
  const [posts, setPosts] = useState<WritingPost[]>(writingPosts)

  useEffect(() => {
    let active = true
    api
      .get<Post[]>("/posts")
      .then((data) => {
        if (active && data.length > 0) {
          setPosts(data.map(toWritingPost))
        }
      })
      .catch(() => {
        // Fall back to the bundled sample posts when the API is unavailable.
      })
    return () => {
      active = false
    }
  }, [])

  const visible = filter === "all" ? posts : posts.filter((post) => post.category === filter)

  const filters = [
    { id: "all", label: "All Posts" },
    ...Array.from(new Set(posts.map((post) => post.category))).map((category) => ({
      id: category,
      label: categoryLabel(category),
    })),
  ]

  const countFor = (id: string) =>
    id === "all" ? posts.length : posts.filter((post) => post.category === id).length

  return (
    <>
      <section className="w-full max-w-site mx-auto px-margin-mobile lg:px-margin pt-space-xl">
        <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg lg:p-space-xl">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 -bottom-32 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-space-lg">
            <div className="flex flex-wrap items-center justify-between gap-space-sm">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-highest">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono-label text-mono-label text-primary uppercase tracking-wider">
                  Engineering Field Notes
                </span>
              </div>
              <div className="font-mono-label text-mono-label text-on-surface-variant flex items-center gap-space-xs">
                <span>INDEX_VER: 2025.03</span>
                <span className="text-outline">/</span>
                <span className="text-secondary">{posts.length} ARTICLES AVAILABLE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
              <div className="lg:col-span-8 flex flex-col gap-space-sm">
                <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero font-bold text-on-surface tracking-tight">
                  Writing
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  Field notes on building web products, architecting dependable backend services, and
                  maintaining focus in technical work. Written in plain English, with no fluff.
                </p>
              </div>
              <div className="lg:col-span-4 bg-surface-container rounded-lg p-space-md flex flex-col gap-space-xs shadow-sm">
                <div className="flex items-center gap-space-xs text-primary">
                  <Icon name="verified" className="text-[18px]" />
                  <span className="font-mono-label text-mono-label uppercase tracking-wider text-on-surface font-semibold">
                    Editorial Guarantee
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  No ghostwriters, no AI filler, and no arbitrary publishing schedules. Just pragmatic
                  lessons from shipping code and building systems.
                </p>
              </div>
            </div>

            <div className="pt-space-md flex flex-wrap items-center gap-space-sm">
              {filters.map((item) => {
                const active = filter === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFilter(item.id)}
                    className={`inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full font-mono-label text-mono-label transition-all ${
                      active
                        ? "bg-primary text-on-primary"
                        : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                        active ? "bg-on-primary/15" : "bg-surface-variant text-on-surface-variant"
                      }`}
                    >
                      {countFor(item.id)}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-site mx-auto px-margin-mobile lg:px-margin pt-space-xl flex flex-col gap-space-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="font-mono-code text-mono-code text-primary">01 //</span>
            <h2 className="font-headline-md text-headline-md font-semibold text-on-surface tracking-tight">
              Recent Dispatches
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-space-xs font-mono-label text-mono-label text-outline">
            <Icon name="schedule" className="text-[16px]" />
            <span>CHRONOLOGICAL STREAM</span>
          </div>
        </div>

        <div className="flex flex-col gap-space-lg">
          {visible.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="w-full max-w-site mx-auto px-margin-mobile lg:px-margin pt-space-xl">
        <div className="relative overflow-hidden rounded-xl bg-surface-container p-space-lg lg:p-space-xl shadow-xl">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 flex flex-col gap-space-sm">
              <div className="inline-flex items-center gap-space-xs font-mono-label text-mono-label text-secondary">
                <Icon name="rss_feed" className="text-[16px]" />
                <span>DIRECT FEED SYNDICATION</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-semibold text-on-surface tracking-tight">
                Subscribe via RSS or Email
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Get notified when a new technical breakdown or product update is published. No spam,
                ever.
              </p>
              <div className="pt-space-xs flex items-center gap-space-sm">
                <Link
                  to="/writing"
                  className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-highest text-on-surface hover:text-primary transition-colors font-mono-code text-mono-code"
                >
                  <Icon name="rss_feed" className="text-[16px] text-tertiary" />
                  <span>RSS Feed</span>
                </Link>
                <span className="font-mono-label text-[11px] text-outline">XML / Atom Compatible</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm shadow-sm">
              <label
                htmlFor="subscriber-email"
                className="font-mono-label text-mono-label uppercase tracking-wider text-on-surface-variant"
              >
                Join the reader dispatch
              </label>
              <form
                className="flex flex-col sm:flex-row gap-space-xs"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubscribed(true)
                }}
              >
                <input
                  id="subscriber-email"
                  type="email"
                  required
                  placeholder="you@domain.com"
                  className="flex-1 px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-mono-code text-mono-code placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors"
                />
                <button
                  type="submit"
                  className="px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider font-semibold hover:bg-primary-container transition-all active:scale-95"
                >
                  Subscribe
                </button>
              </form>
              {subscribed ? (
                <div className="flex items-center gap-space-xs text-secondary font-mono-code text-[12px] pt-1">
                  <Icon name="check_circle" className="text-[14px]" />
                  <span>Subscribed successfully. No tracking cookies attached.</span>
                </div>
              ) : null}
              <span className="font-mono-label text-[11px] text-outline">
                Delivered strictly on publication. Unsubscribe anytime in 1 click.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
