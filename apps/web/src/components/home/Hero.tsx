import { Icon } from "@/components/common/Icon"
import { site } from "@/data/site"

export function Hero() {
  return (
    <section className="relative w-full max-w-site mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-xl">
      <div className="flex flex-col gap-space-lg">
        <div className="flex items-center">
          <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-secondary/10 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            <span className="font-mono-label text-mono-label text-secondary tracking-wide">
              Available for select freelance projects &amp; remote engineering roles
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-space-sm max-w-4xl">
          <div className="flex items-center gap-space-xs font-mono-label text-mono-label text-primary uppercase tracking-widest">
            <span>// 01</span>
            <span className="text-surface-variant">•</span>
            <span>Architect &amp; Systems Engineer</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero font-bold text-on-surface tracking-tight">
            Full-stack product builder. <br className="hidden sm:inline" />
            <span className="text-primary-container">Backend-strong.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs leading-relaxed">
            I design and ship web applications end-to-end—combining product-aware frontend execution
            with ~4 years of battle-tested NestJS, auth, and API infrastructure.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
          <a
            href="#featured-work"
            className="inline-flex items-center justify-center px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary-container font-mono-code text-mono-code font-semibold shadow-md hover:bg-primary transition-all duration-150 transform active:scale-95"
          >
            <span>Explore Selected Work</span>
            <Icon name="arrow_downward" className="ml-1.5 text-[18px]" />
          </a>
          <a
            href="#latest-writing"
            className="inline-flex items-center justify-center px-space-lg py-2.5 rounded-lg bg-surface-container-high text-on-surface font-mono-code text-mono-code shadow-sm hover:bg-surface-variant transition-all duration-150"
          >
            <span>Read Writing</span>
            <Icon name="article" className="ml-1.5 text-[18px]" />
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg text-on-surface-variant hover:text-primary transition-colors font-mono-label text-mono-label"
          >
            <Icon name="file_download" className="text-[16px]" />
            <span>Download Résumé (PDF)</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-md">
          <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <span className="font-mono-label text-mono-label uppercase text-secondary tracking-wider font-semibold">
                For Founders &amp; Freelance Clients
              </span>
              <Icon name="rocket_launch" className="text-secondary text-[20px]" />
            </div>
            <p className="font-headline-md text-headline-md font-semibold text-on-surface mt-1">
              From spec to production NestJS/React web apps without friction.
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Pragmatic velocity, zero architectural debt, and reliable async communication.
            </p>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <span className="font-mono-label text-mono-label uppercase text-primary tracking-wider font-semibold">
                For Engineering Teams
              </span>
              <Icon name="terminal" className="text-primary text-[20px]" />
            </div>
            <p className="font-headline-md text-headline-md font-semibold text-on-surface mt-1">
              4 years production APIs, APISIX gateways, OIDC/SAML, Docker &amp; Linux.
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              High-ownership contributor accustomed to distributed infrastructure, strict typings,
              and zero downtime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
