import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { HomePage } from "@/pages/HomePage"
import { CVPage } from "@/pages/CVPage"
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
