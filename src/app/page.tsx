import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Kalana Labs — Jasa Pembuatan Website Purwokerto No.1 | Landing Page & Aplikasi Mobile',
  description:
    'Jasa pembuatan website Purwokerto #1 oleh Kalana Labs. Ahli landing page, company profile, e-commerce, sistem informasi, UI/UX design & aplikasi mobile. Konsultasi gratis. Hubungi sekarang!',
  keywords: [
    'jasa pembuatan website purwokerto',
    'pembuatan website purwokerto',
    'jasa website purwokerto',
    'web developer purwokerto',
    'kalana labs',
    'jasa pembuatan website',
    'jasa pembuatan web purwokerto',
    'software house purwokerto',
    'jasa seo purwokerto',
    'jasa desain ui ux purwokerto',
    'jasa pembuatan aplikasi purwokerto',
    'landing page purwokerto',
    'company profile purwokerto',
    'toko online purwokerto',
  ],
  openGraph: {
    title: 'Kalana Labs — Jasa Pembuatan Website Purwokerto No.1',
    description:
      'Jasa pembuatan website Purwokerto #1. Landing page, company profile, e-commerce, aplikasi mobile & UI/UX design. Konsultasi gratis.',
    url: 'https://kalanalabs.com',
    siteName: 'Kalana Labs',
    locale: 'id_ID',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kalanalabs.com',
  },
}

// Dynamically import below-the-fold sections to optimize initial bundle size and TBT
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), { ssr: true })
const PricingSection = dynamic(() => import('@/components/sections/PricingSection'), { ssr: true })
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'), { ssr: true })
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { ssr: true })
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), { ssr: true })
const CtaSection = dynamic(() => import('@/components/sections/CtaSection'), { ssr: true })
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), { ssr: true })

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <PricingSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CtaSection />
      <ContactSection />
    </main>
  )
}
