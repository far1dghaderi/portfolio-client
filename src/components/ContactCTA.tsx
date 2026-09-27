import { Link } from "react-router-dom"

export function ContactCTA() {
  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-2xl font-bold tracking-tight">Let's talk</h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base dark:text-neutral-400">
        I'm open to new projects and teams. Email is the fastest way to reach me.
      </p>
      <a
        href="mailto:faridghaderi2001@gmail.com"
        className="mt-5 inline-block text-base font-medium underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:decoration-neutral-600 dark:hover:decoration-white"
      >
        faridghaderi2001@gmail.com
      </a>
      <div>
        <Link
          to="/contact"
          className="text-ink mt-4 inline-block text-sm font-medium hover:underline"
        >
          All contact links
        </Link>
      </div>
    </section>
  )
}
