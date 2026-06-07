'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, Layers, FolderGit2, Info, PhoneCall, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/data'
import Button from '@/components/ui/Button'

// Drawer slide-in & stagger variants
const drawerVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 200,
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
  exit: {
    x: '100%',
    transition: { type: 'tween', duration: 0.2, ease: 'easeIn' },
  },
} as const

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
} as const

const LINK_DETAILS = {
  '/': {
    icon: Home,
    desc: 'Kembali ke halaman utama',
  },
  '/layanan': {
    icon: Layers,
    desc: 'Layanan & solusi digital kami',
  },
  '/portofolio': {
    icon: FolderGit2,
    desc: 'Karya & studi kasus kami',
  },
  '/about': {
    icon: Info,
    desc: 'Kenali visi & misi kami',
  },
  '/kontak': {
    icon: PhoneCall,
    desc: 'Mulai diskusikan proyek Anda',
  },
} as const

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Force scrolled layout on subpages because they have light backgrounds
  const isNavbarScrolled = scrolled || pathname !== '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent flex justify-center pointer-events-none">
        <div
          className={`pointer-events-auto transition-all duration-500 ease-in-out border ${
            isNavbarScrolled
              ? 'mt-4 w-[92%] max-w-5xl rounded-full bg-white/95 backdrop-blur-md shadow-lg shadow-[#2152cf]/8 border-[#e4e8f2] px-6 h-14 md:h-16'
              : 'mt-0 w-full max-w-7xl rounded-none bg-transparent border-transparent px-4 sm:px-6 lg:px-8 h-16 md:h-20'
          }`}
        >
          <div className="flex items-center justify-between h-full w-full">
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Kalana Labs — Beranda"
            >
              <svg
                viewBox="0 0 221 294"
                width="24"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-8 transition-colors duration-500 ${isNavbarScrolled ? 'text-[#1441A5]' : 'text-white'}`}
              >
                <path d="M0 270V104L75.3408 58.5V104L135.385 0H220.256L135.385 147L220 293.557H135L75.5 190.5V226.41L0 270Z" fill="currentColor"/>
              </svg>
              <span className={`text-xl font-bold tracking-tight font-logo transition-colors duration-500 ${isNavbarScrolled ? 'text-[#1e2547]' : 'text-white'}`}>
                Kalana Labs
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2" aria-label="Navigasi utama">
              {NAV_LINKS.map((link) => {
                // For Beranda (/), we only highlight if pathname is exactly '/'
                // For others like /layanan, we highlight if pathname matches
                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href.split('#')[0] || link.href)
                
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-500 ${
                      isNavbarScrolled
                        ? isActive
                          ? 'bg-[#1e2547] text-white shadow-sm'
                          : 'text-[#4f5b7d] hover:text-[#1e2547] hover:bg-slate-100'
                        : isActive
                          ? 'bg-white text-[#1e2547] shadow-md shadow-white/5'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                href="#kontak"
                variant="accent"
                size="sm"
              >
                Mulai Konsultasi
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              className={`md:hidden p-2 rounded-lg transition-colors duration-500 ${
                isNavbarScrolled
                  ? 'text-[#1e2547] hover:bg-[#f1f3f9]'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Premium Mobile Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 md:hidden pointer-events-auto"
              onClick={() => setIsOpen(false)}
              aria-hidden
            >
              <div className="absolute inset-0 bg-[#0d1230]/60 backdrop-blur-sm" />
            </motion.div>

            {/* Mobile Drawer */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-gradient-to-b from-[#0d1230]/95 via-[#0d1230]/98 to-[#141b46]/98 backdrop-blur-2xl border-l border-white/10 shadow-2xl md:hidden overflow-hidden"
              aria-label="Menu navigasi mobile"
            >
              {/* Ambient glows inside the drawer container */}
              <div className="absolute top-12 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-[60px] pointer-events-none -z-10" />
              <div className="absolute bottom-24 left-0 w-36 h-36 bg-[#d9ff42]/5 rounded-full blur-[50px] pointer-events-none -z-10" />
              
              <div className="flex flex-col h-full relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <svg
                        viewBox="0 0 221 294"
                        width="14"
                        height="18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#d9ff42]"
                      >
                        <path d="M0 270V104L75.3408 58.5V104L135.385 0H220.256L135.385 147L220 293.557H135L75.5 190.5V226.41L0 270Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-lg font-bold text-white font-logo tracking-tight">
                      Kalana Labs
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#d9ff42]/10 hover:border-[#d9ff42]/30 hover:text-[#d9ff42] transition-all"
                    aria-label="Tutup menu"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* Links */}
                <nav className="flex-1 px-4.5 py-6 flex flex-col gap-2 overflow-y-auto" aria-label="Navigasi mobile">
                  {NAV_LINKS.map((link) => {
                    const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href.split('#')[0] || link.href)
                    const details = LINK_DETAILS[link.href as keyof typeof LINK_DETAILS] || { icon: Layers, desc: 'Eksplorasi Kalana Labs' }
                    const Icon = details.icon
                    
                    return (
                      <motion.div key={link.href} variants={linkVariants}>
                        <Link
                          href={link.href}
                          onClick={handleLinkClick}
                          className={`flex items-start gap-3.5 p-3 rounded-xl font-medium transition-all duration-300 group relative ${
                            isActive
                              ? 'bg-white/[0.08] text-[#d9ff42] border-l-4 border-[#d9ff42] pl-2.5 shadow-[inset_0_0_12px_rgba(217,255,66,0.03)]'
                              : 'text-white/70 hover:bg-white/[0.03] hover:text-white'
                          }`}
                        >
                          <div className={`p-2 rounded-lg transition-all duration-300 ${
                            isActive ? 'bg-[#d9ff42]/15 text-[#d9ff42] scale-105' : 'bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white/80'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-sm font-semibold tracking-tight leading-snug">{link.label}</span>
                            <span className={`text-[11px] mt-0.5 leading-snug transition-colors duration-300 ${
                              isActive ? 'text-white/60' : 'text-white/40 group-hover:text-white/60'
                            }`}>
                              {details.desc}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Contact Info & CTA */}
                <div className="px-6 pb-8 border-t border-white/10 pt-6">
                  {/* Glassmorphic Contact Card Widget */}
                  <div className="mb-6 p-4 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-3">Hubungi Kami</p>
                    
                    <div className="space-y-2.5">
                      <a 
                        href="mailto:kalanalabs@gmail.com" 
                        className="flex items-center gap-2.5 text-xs text-white/70 hover:text-[#d9ff42] transition-colors leading-relaxed group"
                      >
                        <Mail className="w-3.5 h-3.5 text-white/40 group-hover:text-[#d9ff42]" />
                        <span>kalanalabs@gmail.com</span>
                      </a>
                      <a 
                        href="https://wa.me/6285196811722" 
                        className="flex items-center gap-2.5 text-xs text-white/70 hover:text-[#d9ff42] transition-colors leading-relaxed group"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 448 512" fill="currentColor" className="w-3.5 h-3.5 text-white/40 group-hover:text-[#d9ff42]">
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                        </svg>
                        <span>+62 851 9681 1722</span>
                      </a>
                    </div>
                    
                    {/* Small Social Divider & Icons */}
                    <div className="mt-4 pt-3.5 border-t border-white/5 flex items-center gap-3">
                      <a 
                        href="https://www.instagram.com/kalana.labs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-[#d9ff42] hover:border-[#d9ff42]/50 hover:bg-[#d9ff42]/10 transition-all animate-fade-in"
                        aria-label="Instagram Kalana Labs"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                      </a>
                      <a 
                        href="https://www.tiktok.com/@kalana__labs?is_from_webapp=1&sender_device=pc" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-[#d9ff42] hover:border-[#d9ff42]/50 hover:bg-[#d9ff42]/10 transition-all animate-fade-in"
                        aria-label="TikTok Kalana Labs"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 448 512" fill="currentColor">
                          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Mulai Konsultasi CTA Button */}
                  <Button 
                    href="#kontak" 
                    variant="accent" 
                    className="w-full shadow-lg shadow-[#d9ff42]/10 flex items-center justify-center gap-2 group relative overflow-hidden" 
                    onClick={handleLinkClick}
                  >
                    <span>Mulai Konsultasi</span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-navy"></span>
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
