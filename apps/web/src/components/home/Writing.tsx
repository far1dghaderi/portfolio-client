import { Link } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { Reveal } from "@/components/common/Reveal"
import { SectionHeading } from "@/components/common/SectionHeading"
import { usePosts } from "@/lib/usePosts"

// Only rendered once real posts exist in the CMS.
export function Writing() {
  const posts = usePosts()
  if (!posts?.length) return null

  return (
    <section id="writing" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Writing"
        title="Notes from the work"
        action={
          <Link
            to="/writing"
            className="group text-on-surface-variant hover:text-primary inline-flex shrink-0 items-center gap-2 text-sm transition-colors"
          >
            All posts
            <Icon
              name="arrow_forward"
              className="text-[14px] transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        }
      />
      <div className="grid gap-4 md:grid-cols-3">
        {posts.slice(0, 3).map((post, index) => (
          <Reveal key={post.id} delay={index * 100}>
            <Link
              to={`/writing/${post.slug}`}
              className="group flex h-full flex-col gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
            >
              <span className="text-outline font-mono text-xs">
                {post.date} · {post.readTime}
              </span>
              <h3 className="font-display text-on-surface group-hover:text-primary text-lg font-semibold transition-colors">
                {post.title}
              </h3>
              <p className="text-on-surface-variant line-clamp-3 text-sm leading-relaxed">
                {post.description}
              </p>
              <span className="text-primary mt-auto inline-flex items-center gap-1.5 pt-2 text-sm">
                Read
                <Icon
                  name="arrow_forward"
                  className="text-[14px] transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
