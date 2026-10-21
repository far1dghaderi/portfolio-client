import { lazy, Suspense, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { SiteLayout } from "@/components/layout/SiteLayout"
import { ProtectedRoute } from "@/components/admin/ProtectedRoute"
import { AuthProvider } from "@/lib/auth"
import { HomePage } from "@/pages/HomePage"
import { WritingPage } from "@/pages/WritingPage"

// Markdown rendering and the admin CMS stay out of the main bundle.
const WritingPostPage = lazy(() =>
  import("@/pages/WritingPostPage").then((m) => ({ default: m.WritingPostPage }))
)
const LoginPage = lazy(() =>
  import("@/pages/admin/LoginPage").then((m) => ({ default: m.LoginPage }))
)
const AdminLayout = lazy(() =>
  import("@/pages/admin/AdminLayout").then((m) => ({ default: m.AdminLayout }))
)
const AdminPostsPage = lazy(() =>
  import("@/pages/admin/AdminPostsPage").then((m) => ({ default: m.AdminPostsPage }))
)
const AdminPostEditorPage = lazy(() =>
  import("@/pages/admin/AdminPostEditorPage").then((m) => ({ default: m.AdminPostEditorPage }))
)

function ScrollToHash() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 50)

    return () => window.clearTimeout(id)
  }, [pathname, hash, key]) // key: re-scroll when the same anchor is clicked again

  return null
}

function PublicSite() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<Navigate to="/#projects" replace />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/writing/:slug" element={<WritingPostPage />} />
        <Route path="/experience" element={<Navigate to="/#experience" replace />} />
        <Route path="/cv" element={<Navigate to="/#experience" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToHash />
        <Suspense fallback={<div className="min-h-screen bg-[#0b0d11]" />}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminPostsPage />} />
              <Route path="posts/new" element={<AdminPostEditorPage />} />
              <Route path="posts/:id" element={<AdminPostEditorPage />} />
            </Route>
            <Route path="/*" element={<PublicSite />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  )
}

export default App
