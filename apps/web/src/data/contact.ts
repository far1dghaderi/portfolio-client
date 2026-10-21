import {
  FaEnvelope,
  FaGithub,
  FaGoodreads,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa"
import type { IconType } from "react-icons"

export interface ContactLink {
  id: string
  name: string
  icon: IconType
  url: string
}

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:faridghaderi2001@gmail.com",
  },
  {
    id: "github",
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/far1dghaderi",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/far1dghaderi",
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: FaTelegram,
    url: "https://t.me/faridg",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/far1dghaderi",
  },
  {
    id: "goodreads",
    name: "Goodreads",
    icon: FaGoodreads,
    url: "https://www.goodreads.com/far1dghaderi",
  },
]

export function displayUrl(url: string) {
  return url
    .replace(/^mailto:/, "")
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "")
}
