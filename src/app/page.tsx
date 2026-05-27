import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'

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
      {/* <ProjectsSection /> */}
      <PricingSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CtaSection />
      <ContactSection />
    </main>
  )
}
