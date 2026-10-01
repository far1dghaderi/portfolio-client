import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { SectionLabel } from "@/components/common/SectionLabel"
import { writingPosts } from "@/data/writing"
import type { WritingPost } from "@/data/writing"
import type { Tone } from "@/data/site"
import { api } from "@/lib/api"
import { toWritingPost } from "@/lib/posts"
import type { Post } from "@/types/blog"

const toneText: Record<Tone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  outline: "text-outline",
}

export function LatestWriting() {
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
        // Fall back to bundled sample posts when the API is unavailable.
      })
    return () => {
      active = false
    }
  }, [])

  const visible = posts.slice(0, 2)

  return (
    <section id="latest-writing" className="w-full max-w-site mx-auto px-margin-mobile lg:px-margin py-space-xl">
      <div className="flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div className="flex flex-col gap-space-xs">
            <SectionLabel index="05">Technical Notes</SectionLabel>
            <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-semibold text-on-surface">
              Latest Writing
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Field reports from building, scaling, and architecting software.
            </p>
          </div>
          <Link
            to="/writing"
            className="inline-flex items-center gap-1 font-mono-code text-mono-code text-primary hover:text-primary-fixed transition-colors"
          >
            <span>View all essays</span>
            <Icon name="east" className="text-[18px]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {visible.map((post) => (
            <Link
              key={post.id}
              to={`/writing/${post.slug}`}
              className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:bg-surface-container transition-all group"
            >
              <div className="flex flex-col gap-space-sm">
                {post.imageUrl ? (
                  <div className="mb-space-xs overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      loading="lazy"
                      className="aspect-[2/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                ) : null}
                <div className="flex items-center justify-between font-mono-label text-mono-label text-on-surface-variant">
                  <span>
                    {post.date} · {post.readTime}
                  </span>
                  <span className={`px-2 py-0.5 rounded bg-surface-container-highest ${toneText[post.tone]}`}>
                    {post.categoryLabel}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md font-semibold text-on-surface group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                  {post.description}
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex items-center justify-between">
                <span className="font-mono-code text-mono-code text-primary inline-flex items-center gap-1">
                  Read Article
                  <Icon name="arrow_forward" className="text-[16px] group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-mono-label text-[11px] text-outline">{post.tags.slice(0, 3).join(" · ")}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
