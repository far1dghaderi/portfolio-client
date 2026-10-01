import { useCallback, useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"
import { api } from "@/lib/api"
import { AuthContext } from "@/lib/auth-context"
import type { AdminUser } from "@/types/blog"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    api
      .get<{ user: AdminUser }>("/auth/me")
      .then((data) => {
        if (active) setUser(data.user)
      })
      .catch(() => {
        if (active) setUser(null)
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    const data = await api.post<{ user: AdminUser }>("/auth/login", { email, password })
    setUser(data.user)
  }, [])

  const logout = useCallback(async () => {
    try {
      await api.post("/auth/logout")
    } finally {
      setUser(null)
    }
  }, [])

  const value = useMemo(() => ({ user, loading, login, logout }), [user, loading, login, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
