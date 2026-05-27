'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/data'
import Button from '@/components/ui/Button'

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
              <span className={`text-xl font-bold tracking-tight transition-colors duration-500 ${isNavbarScrolled ? 'text-[#1e2547]' : 'text-white'}`}>
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

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden
      >
        <div className="absolute inset-0 bg-[#0d1230]/60 backdrop-blur-sm" />
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#e4e8f2]">
            <span className="text-xl font-bold text-[#1e2547]">
              Kalana <span className="font-script text-[#2152cf] italic text-2xl">Labs</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-[#4f5b7d] hover:bg-[#f1f3f9] transition-colors"
              aria-label="Tutup menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 px-6 py-8 flex flex-col gap-2" aria-label="Navigasi mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-3 rounded-xl text-[#1e2547] font-medium hover:bg-[#f1f3f9] hover:text-[#2152cf] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-6 pb-8">
            <Button href="#kontak" variant="primary" className="w-full" onClick={handleLinkClick}>
              Mulai Konsultasi
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
