import type { CSSProperties } from "react"
import { Link } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { heroFacts, site } from "@/data/site"

const delay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties

const floatingTags = [
  { label: "NestJS", className: "-left-6 top-10", wait: "0s" },
  { label: "PostgreSQL", className: "-right-8 top-1/3", wait: "1.5s" },
  { label: "FIDO2", className: "-left-8 top-[58%]", wait: "3s" },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      <div
        className="aurora bg-primary-container top-10 -left-32 -z-10 h-[420px] w-[420px]"
        aria-hidden="true"
      />
      <div
        className="aurora bg-secondary-container top-40 -right-24 -z-10 h-[360px] w-[360px] [animation-delay:-6s]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col gap-7">
          <div className="enter" style={delay(0)}>
            <span className="border-secondary/20 bg-secondary/10 text-secondary inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="bg-secondary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-secondary relative inline-flex h-2 w-2 rounded-full" />
              </span>
              {site.availability}
            </span>
          </div>

          <h1
            className="enter font-display text-on-surface text-balance text-[2.4rem] leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem]"
            style={delay(120)}
          >
            <span className="text-on-surface-variant mb-3 block text-xl font-semibold tracking-normal sm:text-2xl">
              Hi, I'm Farid 👋
            </span>
            I build <span className="text-gradient">backends that hold up</span>, and the products
            on top of them.
          </h1>

          <p
            className="enter text-on-surface-variant max-w-2xl text-lg leading-relaxed"
            style={delay(240)}
          >
            Full-stack engineer with 4+ years of production experience, most of it inside
            passwordless-authentication companies. TypeScript, NestJS and Node.js on the server;
            React and Next.js on the client. I also run{" "}
            <a
              href="https://rapidoteam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface decoration-primary/50 hover:decoration-primary underline underline-offset-4 transition-colors"
            >
              Rapido Team
            </a>
            , a small studio that ships web products for clients.
          </p>

          <div className="enter flex flex-wrap items-center gap-3" style={delay(360)}>
            <Link
              to="/#projects"
              className="group from-primary-container to-primary text-on-primary inline-flex items-center gap-2 rounded-xl bg-gradient-to-r px-5 py-3 text-sm font-semibold shadow-[0_10px_30px_-10px_rgb(56_189_248/0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-10px_rgb(56_189_248/0.9)]"
            >
              See my work
              <Icon
                name="arrow_downward"
                className="text-[16px] transition-transform group-hover:translate-y-0.5"
              />
            </Link>
            <Link
              to="/#contact"
              className="text-on-surface inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
            >
              Get in touch
            </Link>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary inline-flex items-center gap-2 px-3 py-3 text-sm transition-colors"
            >
              <Icon name="file_download" className="text-[16px]" />
              Résumé (PDF)
            </a>
          </div>

          <dl
            className="enter mt-4 grid grid-cols-3 gap-4 border-t border-white/5 pt-8"
            style={delay(480)}
          >
            {heroFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1">
                <dt className="text-on-surface-variant order-2 text-xs leading-snug sm:text-sm">
                  {fact.label}
                </dt>
                <dd className="font-display text-on-surface order-1 text-2xl font-bold sm:text-3xl">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="enter relative mx-auto w-full max-w-[340px] lg:max-w-none"
          style={delay(300)}
        >
          <div className="float relative mx-auto aspect-[4/5] w-full max-w-[360px]">
            <div className="from-primary/60 to-secondary/60 absolute -inset-px rounded-[2rem] bg-gradient-to-br via-transparent" />
            <div className="bg-surface-container-lowest absolute inset-0 rounded-[2rem]" />
            <img
              src={site.avatar}
              alt={`Portrait of ${site.name}`}
              className="absolute inset-[6px] h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-[1.7rem] object-cover"
              width={360}
              height={450}
              fetchPriority="high"
            />
            <div className="absolute inset-x-[6px] bottom-[6px] rounded-b-[1.7rem] bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-16">
              <p className="font-display text-lg font-semibold text-white">{site.name}</p>
              <p className="flex items-center gap-1.5 text-sm text-white/70">
                <Icon name="globe" className="text-[14px]" />
                {site.location} · Remote
              </p>
            </div>

            {floatingTags.map((tag) => (
              <span
                key={tag.label}
                className={`float bg-surface-container/80 text-on-surface absolute hidden rounded-xl border border-white/10 px-3 py-1.5 font-mono text-xs shadow-xl backdrop-blur-md sm:block ${tag.className}`}
                style={{ animationDelay: tag.wait }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
