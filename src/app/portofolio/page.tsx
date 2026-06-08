'use client'

import { useState, useEffect } from 'react'
import PageHeader from '@/components/ui/PageHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import Button from '@/components/ui/Button'
import { PROJECTS, STATS } from '@/lib/data'
import { motion, AnimatePresence } from 'framer-motion'

export default function PortofolioPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  // Dynamic rotating release times stat
  const [releaseIdx, setReleaseIdx] = useState(0)
  const releases = [
    { value: '1–3 Hari', label: 'Rilis Landing Page' },
    { value: '5–7 Hari', label: 'Rilis Company Profile' },
    { value: '10–14 Hari', label: 'Rilis E-Commerce' },
    { value: '14–21 Hari', label: 'Rilis Sistem Informasi' },
    { value: '21–30 Hari', label: 'Rilis Aplikasi Mobile' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setReleaseIdx((prev) => (prev + 1) % releases.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // Get unique categories dynamically from the PROJECTS array
  const categories = ['Semua', ...Array.from(new Set(PROJECTS.map((p) => p.category)))]

  const filteredProjects =
    activeCategory === 'Semua'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory)

  return (
    <main className="bg-[#f8f9fc]">
      <PageHeader
        title="Karya &"
        accentWord="Portofolio"
        description="Jelajahi portofolio studi kasus produk digital rancangan kami. Kami memadukan kode berkualitas tinggi dengan pengalaman visual yang memikat."
      />

      {/* Filter Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Buttons */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="flex overflow-x-auto max-w-full gap-2 bg-white border border-[#e4e8f2] p-1.5 rounded-2xl shadow-sm md:flex-wrap md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-[#2152cf] text-white shadow-md'
                      : 'text-[#4f5b7d] hover:text-[#1e2547] hover:bg-[#f1f3f9]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid (3 columns for a clean and compact visual presence) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-white border border-[#e4e8f2] rounded-3xl">
              <p className="text-base text-[#8a96b8]">Belum ada proyek dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface relative overflow-hidden border-t border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-navy/5 blur-[120px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-8 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Stat 1: 100% Garansi Handover (Solid Deep Navy) */}
            <div className="bg-[#122d78] border-2 border-[#2152cf]/30 border-b-[8px] border-b-[#0b1b47] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-lg hover:scale-[1.03] transition-all duration-300 min-h-[140px]">
              <p className="text-[#d9ff42] text-4xl font-black tracking-tight leading-none mb-1.5">
                100%
              </p>
              <p className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Garansi Handover
              </p>
            </div>

            {/* Stat 2: Fading Release Times (Solid Neon Green) */}
            <div className="bg-[#d9ff42] border-2 border-[#b4d622] border-b-[8px] border-b-[#8da61b] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-lg hover:scale-[1.03] transition-all duration-300 min-h-[140px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={releaseIdx}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center"
                >
                  <p className="text-navy text-4xl font-black tracking-tight leading-none mb-1.5">
                    {releases[releaseIdx].value}
                  </p>
                  <p className="text-navy/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    {releases[releaseIdx].label}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stat 3: Gratis Domain & Hosting (Solid White) */}
            <div className="bg-white border-2 border-slate-200 border-b-[8px] border-b-slate-300 rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-md hover:scale-[1.03] transition-all duration-300 min-h-[140px]">
              <p className="text-[#2152cf] text-4xl font-black tracking-tight leading-none mb-1.5">
                Gratis
              </p>
              <p className="text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Domain & Hosting
              </p>
            </div>

            {/* Stat 4: Respon Cepat Dukungan Siaga (Solid Deep Navy) */}
            <div className="bg-[#122d78] border-2 border-[#2152cf]/30 border-b-[8px] border-b-[#0b1b47] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-lg hover:scale-[1.03] transition-all duration-300 min-h-[140px]">
              <p className="text-white text-4xl font-black tracking-tight leading-none mb-1.5">
                Respon Cepat
              </p>
              <p className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Dukungan Siaga
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 md:p-16 text-center space-y-8 bg-gradient-to-br from-[#122d78] to-[#0d1230] border-2 border-[#2152cf]/30 border-b-[8px] border-b-[#0b1b47] shadow-2xl"
          >
            {/* Ambient Glows inside the card */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-[#2152cf] opacity-35 blur-[80px] -translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 right-0 w-[250px] h-[250px] rounded-full bg-[#d9ff42] opacity-10 blur-[90px] translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <span className="text-[10px] sm:text-xs font-black text-[#d9ff42] uppercase tracking-widest inline-block bg-[#d9ff42]/10 border border-[#d9ff42]/20 px-4 py-2 rounded-xl">
                Wujudkan Ide Anda
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                Ingin membuat produk digital berkualitas tinggi seperti di atas?
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Hubungi kami sekarang untuk berdiskusi langsung mengenai konsep, teknologi, dan biaya estimasi proyek baru Anda.
              </p>
              <div className="pt-4">
                <Button
                  href="https://wa.me/6285196811722?text=Halo%20Kalana%20Labs%2C%20saya%20ingin%20membuat%20proyek%20baru."
                  variant="accent"
                  size="lg"
                  className="px-8 py-4 rounded-xl shadow-lg shadow-accent/20 inline-flex font-bold text-sm"
                >
                  Mulai Proyek Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
