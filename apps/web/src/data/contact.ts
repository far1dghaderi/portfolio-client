import {
  FaEnvelope,
  FaGithub,
  FaGoodreads,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa"
import type { IconType } from "react-icons"

export type ContactTone = "primary" | "secondary" | "tertiary" | "neutral"

export interface ContactLink {
  id: string
  name: string
  icon: IconType
  url: string
  tone: ContactTone
}

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:faridghaderi2001@gmail.com",
    tone: "primary",
  },
  {
    id: "github",
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/far1dghaderi",
    tone: "neutral",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/far1dghaderi",
    tone: "primary",
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: FaTelegram,
    url: "https://t.me/faridg",
    tone: "primary",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/far1dghaderi",
    tone: "tertiary",
  },
  {
    id: "goodreads",
    name: "Goodreads",
    icon: FaGoodreads,
    url: "https://www.goodreads.com/far1dghaderi",
    tone: "secondary",
  },
]

export const contactToneText: Record<ContactTone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  neutral: "text-on-surface-variant",
}

export function displayUrl(url: string) {
  return url.replace(/^mailto:/, "").replace(/^https?:\/\//, "").replace(/\/$/, "")
}
