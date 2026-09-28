import { Link } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { SectionLabel } from "@/components/common/SectionLabel"

function StackChips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 font-mono-label text-mono-label text-on-surface-variant">
      {items.map((item) => (
        <span key={item} className="px-2 py-0.5 rounded bg-surface-container-highest">
          {item}
        </span>
      ))}
    </div>
  )
}

export function FeaturedWork() {
  return (
    <section id="featured-work" className="w-full max-w-site mx-auto px-margin-mobile lg:px-margin py-space-xl">
      <div className="flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div className="flex flex-col gap-space-xs">
            <SectionLabel index="02">Production Portfolio</SectionLabel>
            <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-semibold text-on-surface">
              Featured Work
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Production systems and products in active development.
            </p>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-1 font-mono-code text-mono-code text-primary hover:text-primary-fixed transition-colors"
          >
            <span>View all work archive</span>
            <Icon name="east" className="text-[18px]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Card 1 — Habit Intelligence */}
          <div className="flex flex-col justify-between rounded-xl bg-surface-container-low shadow-sm p-space-lg hover:bg-surface-container transition-all group">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-tertiary bg-tertiary/10 font-mono-label text-mono-label font-medium">
                  In Active Build
                </span>
                <span className="font-mono-label text-mono-label text-on-surface-variant">2025</span>
              </div>
              <div className="w-full h-32 rounded-lg bg-surface-container-lowest p-space-sm flex flex-col justify-between overflow-hidden relative">
                <div className="flex justify-between items-center z-10">
                  <span className="font-mono-label text-[11px] text-on-surface-variant">
                    Analytics Pulse · Daily Check-in
                  </span>
                  <span className="font-mono-label text-[11px] text-secondary font-semibold">+94.2%</span>
                </div>
                <svg className="w-full h-12 text-secondary" fill="none" preserveAspectRatio="none" viewBox="0 0 280 48">
                  <path
                    d="M0 40 L35 34 L70 38 L105 20 L140 26 L175 12 L210 18 L245 4 L280 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 40 L35 34 L70 38 L105 20 L140 26 L175 12 L210 18 L245 4 L280 8 V48 H0 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                </svg>
                <div className="flex justify-between font-mono-label text-[10px] text-on-surface-variant z-10">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono-label text-mono-label text-primary">Creator &amp; Full-Stack Builder</span>
                <h3 className="font-headline-md text-headline-md font-semibold text-on-surface group-hover:text-primary transition-colors">
                  The Habit Intelligence Platform
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  A focused personal habit tracking and analytics web application engineered for
                  actionable weekly reviews and effortless daily entry.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-space-md mt-space-lg">
              <StackChips items={["NestJS", "React", "PostgreSQL", "Docker"]} />
              <Link
                to="/work"
                className="inline-flex items-center gap-1 font-mono-code text-mono-code text-on-surface group-hover:text-primary transition-colors"
              >
                <span>Read Case Study / Preview</span>
                <Icon name="east" className="text-[16px] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2 — API Gateway */}
          <div className="flex flex-col justify-between rounded-xl bg-surface-container-low shadow-sm p-space-lg hover:bg-surface-container transition-all group">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-primary-container bg-primary-container/10 font-mono-label text-mono-label font-medium">
                  Architectural Case Study
                </span>
                <span className="font-mono-label text-mono-label text-on-surface-variant">Production</span>
              </div>
              <div className="w-full h-32 rounded-lg bg-surface-container-lowest p-space-sm flex flex-col justify-center items-center relative overflow-hidden">
                <div className="w-full flex items-center justify-between px-space-xs text-[11px] font-mono-label text-on-surface-variant">
                  <span className="px-1.5 py-0.5 rounded bg-surface-container">Client</span>
                  <Icon name="arrow_forward" className="text-primary text-[14px]" />
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary font-bold">APISIX</span>
                  <Icon name="arrow_forward" className="text-primary text-[14px]" />
                  <span className="px-1.5 py-0.5 rounded bg-surface-container">Microservices</span>
                </div>
                <div className="w-full mt-2 pt-2 border-t border-surface-variant/40 flex justify-around text-[10px] font-mono-label text-secondary">
                  <span>OIDC Token Verify</span>
                  <span>Rate Limiter</span>
                  <span>Zero Downtime</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono-label text-mono-label text-primary">
                  Backend &amp; Infrastructure Engineer
                </span>
                <h3 className="font-headline-md text-headline-md font-semibold text-on-surface group-hover:text-primary transition-colors">
                  Distributed API Gateway &amp; Auth Federation
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Anonymized architecture blueprint for routing enterprise API traffic, federating
                  OIDC/SAML enterprise logins, and preventing downstream service outages.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-space-md mt-space-lg">
              <StackChips items={["APISIX", "Node.js", "Redis", "OIDC", "Linux"]} />
              <Link
                to="/work"
                className="inline-flex items-center gap-1 font-mono-code text-mono-code text-on-surface group-hover:text-primary transition-colors"
              >
                <span>View Architecture Notes</span>
                <Icon name="east" className="text-[16px] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 3 — Your Next Web Product */}
          <div className="flex flex-col justify-between rounded-xl bg-surface-container-low shadow-sm p-space-lg hover:bg-surface-container transition-all group">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-on-surface-variant bg-surface-container-highest font-mono-label text-mono-label font-medium">
                  Available for Q2 Projects
                </span>
                <span className="font-mono-label text-mono-label text-secondary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Open
                </span>
              </div>
              <div className="w-full h-32 rounded-lg bg-surface-container-lowest p-space-md flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between font-mono-label text-[11px] text-on-surface-variant">
                  <span>PROJECT_SPEC.init()</span>
                  <span className="text-primary font-mono-code">STATUS: READY</span>
                </div>
                <div className="flex flex-col gap-1 font-mono-code text-[11px] text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <span className="text-secondary">&gt;</span>
                    <span>Scope: Full MVP / Backend Core</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-secondary">&gt;</span>
                    <span>Turnaround: 3 - 6 Weeks</span>
                  </div>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-2/3" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono-label text-mono-label text-primary">
                  End-to-End Build or Backend Audit
                </span>
                <h3 className="font-headline-md text-headline-md font-semibold text-on-surface group-hover:text-primary transition-colors">
                  Your Next Web Product
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Need a full-stack MVP or backend service that scales cleanly from user 1 to
                  100,000? Let's spec, build, and deploy your production system.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-space-md mt-space-lg">
              <StackChips items={["NestJS", "Modern Web UI", "PostgreSQL", "Cloud Deploy"]} />
              <a
                href="#contact"
                className="inline-flex items-center gap-1 font-mono-code text-mono-code text-primary group-hover:text-primary-fixed transition-colors"
              >
                <span>Discuss Project Requirements</span>
                <Icon name="east" className="text-[16px] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
