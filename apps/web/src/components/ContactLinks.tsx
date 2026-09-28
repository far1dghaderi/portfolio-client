import { socialLinks } from "@/data/contactData"

export function ContactLinks() {
  return (
    <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <li key={social.id}>
            <a
              href={social.url}
              target={social.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-between gap-4 py-4"
            >
              <span className="flex items-center gap-3">
                <span className="bg-coral/15 text-coral grid h-9 w-9 place-items-center rounded-md">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{social.name}</span>
              </span>
              <span className="group-hover:text-ink text-sm text-neutral-400 transition-colors">
                Open
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
