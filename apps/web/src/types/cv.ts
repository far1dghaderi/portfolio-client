export interface Experience {
  id: string
  company: string
  position: string
  description: string
  period: string
  tools: string[]
  companyType: string
  logo?: string
}

export interface Education {
  id: string
  institution: string
  description: string
  period: string
  position: string
}

export interface CVProfile {
  name: string
  title: string
  summary: string
  image: string
  email?: string
  phone?: string
  location?: string
}
