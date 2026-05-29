'use client'

import { useState } from 'react'
import PageHeader from '@/components/ui/PageHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import Button from '@/components/ui/Button'
import { PROJECTS } from '@/lib/data'

export default function PortofolioPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')

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

          {/* Projects Grid (2 columns for larger visual presence and sharper downscaling) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
      <section
        className="py-16 bg-[#0d1230] relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0d1230 0%, #122070 60%, #0d1230 100%)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-black text-[#d9ff42] mb-2">30+</p>
              <p className="text-xs md:text-sm text-white/70 font-semibold uppercase tracking-wider">
                Proyek Terselesaikan
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">98%</p>
              <p className="text-xs md:text-sm text-white/70 font-semibold uppercase tracking-wider">
                Tingkat Kepuasan Klien
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-[#d9ff42] mb-2">3 Tahun</p>
              <p className="text-xs md:text-sm text-white/70 font-semibold uppercase tracking-wider">
                Pengalaman Industri
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">15+</p>
              <p className="text-xs md:text-sm text-white/70 font-semibold uppercase tracking-wider">
                Klien Korporat & UMKM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs font-black text-[#2152cf] uppercase tracking-widest block bg-[#2152cf]/5 px-4 py-2 rounded-full w-fit mx-auto">
            Wujudkan Ide Anda
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2547] tracking-tight leading-tight">
            Ingin membuat produk digital berkualitas tinggi seperti di atas?
          </h2>
          <p className="text-[#4f5b7d] text-base max-w-xl mx-auto leading-relaxed">
            Hubungi kami sekarang untuk berdiskusi langsung mengenai konsep, teknologi, dan biaya estimasi proyek baru Anda.
          </p>
          <div className="pt-2">
            <Button
              href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20ingin%20membuat%20proyek%20baru."
              variant="primary"
              size="lg"
              className="px-8 py-4 rounded-2xl shadow-lg shadow-[#2152cf]/10 inline-flex"
            >
              Mulai Proyek Sekarang
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
