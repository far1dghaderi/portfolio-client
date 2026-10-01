import type { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "@/lib/auth-context"

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="min-h-screen bg-surface grid place-items-center">
        <div className="flex items-center gap-space-xs text-on-surface-variant font-mono-code text-mono-code">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span>Verifying session…</span>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}
