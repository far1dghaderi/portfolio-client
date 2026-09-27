import { Moon, Sun } from "lucide-react"
import { useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"))

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("portfolio-theme", next ? "dark" : "light")
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid h-9 w-9 place-items-center rounded-md text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-white"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  )
}
