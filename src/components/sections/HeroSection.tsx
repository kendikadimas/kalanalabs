'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'

// Pricing options to cycle through in the hero section card
const priceRotations = [
  { price: '299K', service: 'Website Portofolio' },
  { price: '399K', service: 'Landing Page' },
  { price: '1.299K', service: 'Company Profile' },
  { price: '1.999K', service: 'Sistem Informasi' },
  { price: '1.999K', service: 'E-Commerce' },
]

// Variants for staggered entrance animation
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0, 1] as const } },
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % priceRotations.length)
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #213fa0 0%, #1a3285 45%, #0f1f54 100%)' }}
    >
      {/* Immersive Brand Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Layered Ambient Glows — Brand Blue dominant, Lime as accent */}
        {/* Large brand-blue bloom: top-left */}
        <div className="absolute top-[-5%] left-[-15%] w-[900px] h-[900px] rounded-full blur-[180px]" style={{ background: 'radial-gradient(circle, rgba(20,65,165,0.50) 0%, transparent 70%)' }} />
        {/* Secondary blue bloom: bottom-right */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[140px]" style={{ background: 'radial-gradient(circle, rgba(33,82,207,0.35) 0%, transparent 70%)' }} />
        {/* Lime accent glow: right-center — intentionally subtle */}
        <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#d9ff42]/12 blur-[120px]" />

      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-20">
        <div className="flex flex-col-reverse lg:flex-row gap-6 sm:gap-12 lg:gap-8 items-center justify-between">
          
          {/* Left Column: Hero Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-[57%] flex flex-col items-start text-left"
          >


            {/* Headline */}
            <motion.h1 variants={itemVariants} className="max-w-2xl text-left">
              <span className="block text-[1.85rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black text-white leading-[1.15] tracking-tight">
                Jasa Pembuatan
              </span>
              <span className="block text-[1.85rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black text-white leading-[1.15] tracking-tight mt-2">
                <span className="font-script text-[#d9ff42] italic text-[1.05em] font-medium tracking-normal inline-block pr-1">
                  Website
                </span>{' '}
                &{' '}
                <span className="font-script text-[#d9ff42] italic text-[1.05em] font-medium tracking-normal inline-block pr-1">
                  Aplikasi
                </span>
              </span>
              <span className="block text-[1.85rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black text-white leading-[1.15] tracking-tight mt-2">
                Professional
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-[0.925rem] sm:text-[1.125rem] lg:text-[1.2rem] text-white/70 leading-relaxed max-w-xl mt-5 font-medium"
            >
              Kembangkan bisnis Anda di era digital bersama <strong className="text-white font-logo">Kalana Labs</strong>. Mulai dari pembuatan landing page, website perusahaan, toko online, hingga sistem informasi khusus.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-start mt-8 w-full sm:w-auto"
            >
              <Button
                href="https://wa.me/6285196811722?text=Halo%20Kalana%20Labs,%20saya%20ingin%20konsultasi%20mengenai%20pembuatan%20website/aplikasi."
                variant="accent"
                size="lg"
                className="w-full sm:w-auto shadow-[0_0_30px_-5px_rgba(217,255,66,0.35)] hover:shadow-[0_0_40px_-5px_rgba(217,255,66,0.55)] transition-all duration-300 font-semibold"
              >
                Konsultasi via WhatsApp
              </Button>
              <Button
                href="#project"
                variant="outline"
                size="lg"
                className="border-white/15 text-white hover:bg-white/10 hover:border-white/35 w-full sm:w-auto backdrop-blur-md"
                showArrow={false}
              >
                Lihat Portofolio Kami
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Collage of Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full lg:w-[38%] relative h-[290px] xs:h-[320px] sm:h-[450px] flex items-end justify-center mt-2 sm:mt-10 lg:mt-0"
          >
            {/* Ambient background glow inside the collage */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1441a5]/25 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Collage Container: Woman Hero Layout with 5 premium gradient cards */}
            <div className="relative w-full max-w-[290px] xs:max-w-[320px] sm:max-w-[440px] h-[290px] xs:h-[320px] sm:h-[450px] flex items-end justify-center transition-all duration-300">

              {/* Centerpiece transparent Woman Hero image */}
              <div className="absolute bottom-0 w-[200px] xs:w-[220px] sm:w-[330px] z-10 select-none pointer-events-none">
                <img
                  src="/assets/images/womanhero.webp"
                  alt="Kalana Labs Hero"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Card 1: Trusted by Multiple Client (Left-Middle) - White 3D */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="absolute left-[-4%] sm:left-[-12%] top-[20%] sm:top-[24%] z-20 w-[115px] sm:w-[160px] bg-white border-2 border-slate-200 border-b-[4px] sm:border-b-[6px] border-b-slate-300 shadow-xl py-2 sm:py-3.5 px-2.5 sm:px-4 rounded-xl sm:rounded-2xl flex flex-col items-center text-center cursor-default"
              >
                {/* Neon Check Icon Circle */}
                <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[#d9ff42] text-[#0d1230] flex items-center justify-center shrink-0 mb-1 sm:mb-1.5 shadow-[0_4px_12px_rgba(217,255,66,0.35)]">
                  <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                </div>
                <p className="text-[10px] sm:text-base font-black text-black leading-none mb-1 font-logo">Trusted by</p>
                <p className="text-[6px] sm:text-[9px] text-black/70 font-bold uppercase tracking-wider">Multiple Client</p>
              </motion.div>

              {/* Card 2: Desain Premium Custom Brand (Left-Bottom) - White 3D */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="absolute left-[0%] sm:left-[-6%] bottom-[8%] z-20 w-[120px] sm:w-[180px] bg-white border-2 border-slate-200 border-b-[4px] sm:border-b-[6px] border-b-slate-300 shadow-xl py-2 sm:py-3.5 px-3 sm:px-4.5 rounded-xl sm:rounded-2xl flex flex-col items-start text-left cursor-default"
              >
                <p className="text-[10px] sm:text-base font-black text-black leading-none mb-0.5 sm:mb-1 font-logo">Desain Premium</p>
                <p className="text-[6px] sm:text-[9px] text-black/70 font-bold uppercase tracking-wider leading-tight">Custom Brand</p>
              </motion.div>

              {/* Card 3: 4.9/5 Feedback Client (Right-Top) - White 3D */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="absolute right-[0%] sm:right-[-5%] top-[10%] sm:top-[12%] z-20 w-[105px] sm:w-[150px] bg-white border-2 border-slate-200 border-b-[4px] sm:border-b-[6px] border-b-slate-300 shadow-xl py-2 sm:py-3.5 px-3 sm:px-4.5 rounded-xl sm:rounded-2xl flex flex-col items-start text-left cursor-default"
              >
                <p className="text-base sm:text-2xl font-black text-black leading-none mb-0.5 sm:mb-1 font-logo">4.9/5</p>
                <p className="text-[6px] sm:text-[9px] text-black/70 font-bold uppercase tracking-wider leading-tight">Feedback Client</p>
              </motion.div>

              {/* Card 4: 24/7 Support Available (Right-Middle) - White 3D */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="absolute right-[-4%] sm:right-[-10%] top-[40%] sm:top-[45%] z-20 w-[105px] sm:w-[150px] bg-white border-2 border-slate-200 border-b-[4px] sm:border-b-[6px] border-b-slate-300 shadow-xl py-2 sm:py-3.5 px-3 sm:px-4.5 rounded-xl sm:rounded-2xl flex flex-col items-start text-left cursor-default"
              >
                <p className="text-base sm:text-2xl font-black text-black leading-none mb-0.5 sm:mb-1 font-logo">24/7</p>
                <p className="text-[6px] sm:text-[9px] text-black/70 font-bold uppercase tracking-wider leading-tight">Support Available</p>
              </motion.div>

              {/* Card 5: Dynamic Pricing Rotation (Right-Bottom) - White 3D */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="absolute right-[0%] sm:right-[-5%] bottom-[8%] z-20 w-[105px] sm:w-[150px] bg-white border-2 border-slate-200 border-b-[4px] sm:border-b-[6px] border-b-slate-300 shadow-xl py-2 sm:py-3.5 px-3 sm:px-4.5 rounded-xl sm:rounded-2xl flex flex-col justify-center text-left cursor-default"
              >
                <div className="relative w-full h-[28px] sm:h-[48px] flex items-center justify-start overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute flex flex-col items-start justify-center"
                    >
                      <p className="text-base sm:text-2xl font-black text-black tracking-tight leading-none mb-0.5 sm:mb-1 font-logo">
                        {priceRotations[currentIndex].price}
                      </p>
                      <p className="text-[6px] sm:text-[9px] font-bold text-black/70 whitespace-nowrap leading-none">
                        {priceRotations[currentIndex].service}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
