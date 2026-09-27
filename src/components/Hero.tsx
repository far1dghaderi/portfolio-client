import { Link } from "react-router-dom"
import { Portrait } from "@/components/Portrait"

const buttonClass =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"

export function Hero() {
  return (
    <section className="grid items-center gap-8 py-12 md:grid-cols-[auto_1fr] md:gap-14 md:py-16">
      <Portrait className="mx-auto md:mx-0" />

      <div>
        <p className="text-base text-neutral-800 sm:text-lg dark:text-neutral-100">
          Hi 👋, I'm Farid
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">Software Engineer</h1>
        <p className="mt-3 max-w-md text-sm text-neutral-500 italic sm:text-base dark:text-neutral-400">
          “Reliable backend systems, clear APIs, and the frontend when a product needs both.”
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/#work" className={`${buttonClass} bg-ink text-white hover:bg-[#214f78]`}>
            My Work
          </a>
          <Link
            to="/contact"
            className={`${buttonClass} bg-coral text-neutral-950 hover:bg-[#ff5856]`}
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  )
}
