export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: "GitHub", href: "https://github.com/far1dghaderi" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/far1dghaderi" },
  ]

  return (
    <footer className="mt-4 flex flex-col gap-3 border-t border-neutral-200 py-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between dark:border-neutral-800 print:hidden">
      <p>© {currentYear} Farid Ghaderi. All Rights Reserved.</p>
      <div className="flex items-center gap-5">
        {footerLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}
