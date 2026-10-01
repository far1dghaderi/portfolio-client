import { useState } from "react"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import { Icon } from "@/components/common/Icon"
import { useAuth } from "@/lib/auth-context"
import { ApiError } from "@/lib/api"

interface LocationState {
  from?: { pathname: string }
}

export function LoginPage() {
  const { user, loading, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  if (!loading && user) {
    return <Navigate to="/admin" replace />
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      await login(email, password)
      const from = (location.state as LocationState | null)?.from?.pathname ?? "/admin"
      navigate(from, { replace: true })
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Unable to sign in. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-margin-mobile py-space-xl">
      <div className="w-full max-w-md flex flex-col gap-space-lg">
        <div className="flex flex-col items-center gap-space-xs text-center">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-on-primary">
            <Icon name="terminal" className="text-[22px]" />
          </span>
          <h1 className="font-headline-lg text-headline-lg font-semibold text-on-surface tracking-tight">
            Admin access
          </h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Sign in to manage your essays and content.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-outline-variant bg-surface-container-low p-space-lg flex flex-col gap-space-md shadow-xl"
        >
          {error ? (
            <div className="flex items-center gap-space-xs rounded-lg border border-error/40 bg-error-container/20 px-space-md py-space-sm text-error">
              <Icon name="close" className="text-[16px]" />
              <span className="font-body-sm text-body-sm">{error}</span>
            </div>
          ) : null}

          <label className="flex flex-col gap-space-xs">
            <span className="font-mono-label text-mono-label uppercase tracking-wider text-on-surface-variant">
              Email
            </span>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@domain.com"
              className="rounded-lg border border-outline-variant bg-surface-container-lowest px-space-md py-2.5 font-mono-code text-mono-code text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container transition-colors"
            />
          </label>

          <label className="flex flex-col gap-space-xs">
            <span className="font-mono-label text-mono-label uppercase tracking-wider text-on-surface-variant">
              Password
            </span>
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              className="rounded-lg border border-outline-variant bg-surface-container-lowest px-space-md py-2.5 font-mono-code text-mono-code text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container transition-colors"
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="mt-space-xs inline-flex items-center justify-center gap-space-xs rounded-lg bg-primary px-space-md py-2.5 font-mono-label text-mono-label font-semibold uppercase tracking-wider text-on-primary transition-all hover:bg-primary-container active:scale-[0.98] disabled:opacity-60"
          >
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-space-xs font-mono-code text-mono-code text-on-surface-variant hover:text-primary transition-colors"
        >
          <Icon name="arrow_left" className="text-[16px]" />
          <span>Back to site</span>
        </Link>
      </div>
    </div>
  )
}
