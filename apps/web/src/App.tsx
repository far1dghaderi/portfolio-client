import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { SiteLayout } from "@/components/layout/SiteLayout"
import { ProtectedRoute } from "@/components/admin/ProtectedRoute"
import { AuthProvider } from "@/lib/auth"
import { HomePage } from "@/pages/HomePage"
import { WorkPage } from "@/pages/WorkPage"
import { WritingPage } from "@/pages/WritingPage"
import { WritingPostPage } from "@/pages/WritingPostPage"
import { ExperiencePage } from "@/pages/ExperiencePage"
import { ContactPage } from "@/pages/ContactPage"
import { LoginPage } from "@/pages/admin/LoginPage"
import { AdminLayout } from "@/pages/admin/AdminLayout"
import { AdminPostsPage } from "@/pages/admin/AdminPostsPage"
import { AdminPostEditorPage } from "@/pages/admin/AdminPostEditorPage"

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 0)

    return () => window.clearTimeout(id)
  }, [pathname, hash])

  return null
}

function PublicSite() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/writing/:slug" element={<WritingPostPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/cv" element={<Navigate to="/experience" replace />} />
        <Route path="/contact" element={<ContactPage />} />
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
      </Router>
    </AuthProvider>
  )
}

export default App
