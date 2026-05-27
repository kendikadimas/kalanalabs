export interface Service {
  id: string
  icon: string
  number: string
  title: string
  description: string
}

export interface Project {
  id: string
  category: string
  title: string
  description: string
  tags: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  initials: string
}

export interface ProcessStep {
  id: string
  number: string
  icon: string
  title: string
  description: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface ContactInfo {
  icon: string
  label: string
  value: string
  href: string
}

export interface PricingPackage {
  name: string
  subtitle: string
  price: string
  suffix: string
  bestValue: boolean
  benefits: string[]
}

export interface PricingCategory {
  id: string
  name: string
  title: string
  subtitle: string
  packages: PricingPackage[]
}

