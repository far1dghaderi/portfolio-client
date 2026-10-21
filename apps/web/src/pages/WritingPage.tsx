import { useState } from "react"
import { Link } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { Reveal } from "@/components/common/Reveal"
import { categoryLabel } from "@/types/blog"
import { usePosts } from "@/lib/usePosts"
import { cn } from "@/lib/utils"

export function WritingPage() {
  const posts = usePosts()
  const [filter, setFilter] = useState("all")

  const categories = Array.from(new Set((posts ?? []).map((post) => post.category)))
  const visible = (posts ?? []).filter((post) => filter === "all" || post.category === filter)

  return (
    <section className="mx-auto max-w-4xl px-5 pt-36 pb-24 sm:px-8">
      <div className="enter flex flex-col gap-4">
        <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase">Writing</span>
        <h1 className="font-display text-on-surface text-4xl font-bold tracking-tight sm:text-6xl">
          Notes from the work
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          Lessons from building products and running backends in production, written in plain
          English.
        </p>
      </div>

      {categories.length > 1 ? (
        <div className="mt-10 flex flex-wrap gap-2">
          {["all", ...categories].map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm transition-colors",
                filter === id
                  ? "bg-on-surface text-surface"
                  : "text-on-surface-variant hover:text-on-surface bg-white/[0.04] hover:bg-white/[0.08]"
              )}
            >
              {id === "all" ? "All" : categoryLabel(id)}
            </button>
          ))}
        </div>
      ) : null}

      <div className="mt-12 flex flex-col divide-y divide-white/5 border-y border-white/5">
        {posts === null ? (
          <p className="text-on-surface-variant py-16 text-center">Loading posts…</p>
        ) : visible.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <Icon name="pencil" className="text-outline text-[28px]" />
            <p className="text-on-surface text-lg">First posts are on the way.</p>
            <p className="text-on-surface-variant max-w-md">
              Nothing published yet. In the meantime, have a look at the projects I've shipped.
            </p>
            <Link
              to="/#projects"
              className="text-primary mt-2 inline-flex items-center gap-2 text-sm hover:underline"
            >
              See projects
              <Icon name="arrow_forward" className="text-[14px]" />
            </Link>
          </div>
        ) : (
          visible.map((post, index) => (
            <Reveal key={post.id} delay={Math.min(index, 4) * 60}>
              <Link
                to={`/writing/${post.slug}`}
                className="group grid gap-3 py-8 sm:grid-cols-[160px_1fr] sm:gap-8"
              >
                <div className="text-outline flex flex-col gap-1 font-mono text-xs">
                  <time>{post.date}</time>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-primary text-xs font-medium tracking-wider uppercase">
                    {post.categoryLabel}
                  </span>
                  <h2 className="font-display text-on-surface group-hover:text-primary text-2xl font-semibold tracking-tight transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed">{post.description}</p>
                  {post.tags.length ? (
                    <p className="text-outline pt-1 font-mono text-xs">{post.tags.join(" · ")}</p>
                  ) : null}
                </div>
              </Link>
            </Reveal>
          ))
        )}
      </div>
    </section>
  )
}
