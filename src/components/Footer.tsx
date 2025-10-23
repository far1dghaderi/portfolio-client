export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: "GitHub", href: "https://github.com/far1dghaderi" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/far1dghaderi" },
  ]

  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="text-muted-foreground font-mono text-sm">
            © {currentYear} Farid Ghaderi. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary group relative transition-all duration-300 hover:scale-110 active:scale-95"
              >
                {link.name}
                <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
