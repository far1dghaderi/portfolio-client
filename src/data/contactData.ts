import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram } from "react-icons/fa"
import type { IconType } from "react-icons"

export interface SocialLink {
  id: string
  name: string
  icon: IconType
  url: string
  color: string
}

export const socialLinks: SocialLink[] = [
  {
    id: "1",
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:faridghaderi2001@gmail.com",
    color: "bg-red-500 hover:bg-red-600",
  },
  {
    id: "2",
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/far1dghaderi",
    color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600",
  },
  {
    id: "3",
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/far1dghaderi",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: "5",
    name: "Telegram",
    icon: FaTelegram,
    url: "https://t.me/faridg",
    color: "bg-blue-500 hover:bg-blue-600",
  },
]
