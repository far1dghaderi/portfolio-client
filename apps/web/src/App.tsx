import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { SiteLayout } from "@/components/layout/SiteLayout"
import { HomePage } from "@/pages/HomePage"
import { WorkPage } from "@/pages/WorkPage"
import { WritingPage } from "@/pages/WritingPage"
import { ExperiencePage } from "@/pages/ExperiencePage"
import { ContactPage } from "@/pages/ContactPage"

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

function App() {
  return (
    <Router>
      <ScrollToHash />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/cv" element={<Navigate to="/experience" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SiteLayout>
    </Router>
  )
}

export default App
