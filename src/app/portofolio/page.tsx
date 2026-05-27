'use client'

import ComingSoon from '@/components/ui/ComingSoon'

export default function PortofolioPage() {
  return <ComingSoon pageName="Karya & Portofolio" />
}

/* Original PortofolioPage content for future reference:
import { useState } from 'react'
import PageHeader from '@/components/ui/PageHeader'
import { ArrowUpRight, Code, Smartphone, Palette, ShoppingBag, Eye } from 'lucide-react'
import Button from '@/components/ui/Button'

interface Project {
  id: string
  category: string
  title: string
  description: string
  tags: string[]
  gradient: string
  icon: any
}

const ALL_PROJECTS: Project[] = [
  {
    id: 'hrm-platform',
    category: 'Web App',
    title: 'Platform Manajemen SDM',
    description: 'Sistem HR digital komprehensif untuk perusahaan manufaktur dengan 500+ karyawan — mendigitalisasi absensi, payroll, dan penilaian kinerja secara real-time.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    gradient: 'linear-gradient(135deg, #2152cf 0%, #122d78 100%)',
    icon: Code
  },
  {
    id: 'logistics-app',
    category: 'Mobile App',
    title: 'Aplikasi Logistik Real-time',
    description: 'Solusi pelacakan pengiriman end-to-end untuk distributor regional. Dilengkapi navigasi rute optimal untuk kurir dan status real-time untuk konsumen.',
    tags: ['Flutter', 'Firebase', 'Google Maps API'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
    icon: Smartphone
  },
  {
    id: 'ecommerce',
    category: 'E-Commerce',
    title: 'Toko Online Fashion Premium',
    description: 'Platform e-commerce modern dengan headless architecture. Meningkatkan kecepatan loading halaman hingga 2x lipat dan mendongkrak tingkat konversi penjualan hingga 300%.',
    tags: ['Next.js', 'Shopify API', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #78350f 100%)',
    icon: ShoppingBag
  },
  {
    id: 'fintech-redesign',
    category: 'UI/UX',
    title: 'Redesign Mobile Banking Finansial',
    description: 'Riset mendalam dan perancangan ulang antarmuka aplikasi bank nasional untuk mengoptimalkan alur transfer uang dan pembayaran tagihan rutin.',
    tags: ['Figma', 'User Research', 'Interactive Prototype'],
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)',
    icon: Palette
  },
  {
    id: 'health-emr',
    category: 'Web App',
    title: 'Sistem Rekam Medis Rumah Sakit',
    description: 'Sistem Electronic Health Record (EHR) terintegrasi untuk klinik & rumah sakit. Menjamin keamanan data pasien sesuai regulasi kesehatan internasional.',
    tags: ['Next.js', 'Laravel API', 'MySQL', 'Docker'],
    gradient: 'linear-gradient(135deg, #ec4899 0%, #831843 100%)',
    icon: Code
  },
  {
    id: 'edtech-mobile',
    category: 'Mobile App',
    title: 'Aplikasi Bimbel Online Interaktif',
    description: 'Platform belajar digital untuk siswa sekolah dasar. Dilengkapi modul video interaktif, kuis tergamifikasi, dan dasbor progres belajar untuk orang tua.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    icon: Smartphone
  },
  {
    id: 'agritech-marketplace',
    category: 'E-Commerce',
    title: 'Marketplace Hasil Tani Lokal',
    description: 'Platform rantai pasok digital yang menghubungkan kelompok tani lokal langsung dengan pelaku industri restoran dan hotel tanpa perantara.',
    tags: ['Next.js', 'Supabase', 'Tailwind', 'Midtrans'],
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
    icon: ShoppingBag
  }
]

const CATEGORIES = ['Semua', 'Web App', 'Mobile App', 'E-Commerce', 'UI/UX']

export default function PortofolioPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filteredProjects = activeCategory === 'Semua'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(project => project.category === activeCategory)

  return (
    <main className="bg-[#f8f9fc]">
      <PageHeader 
        title="Karya &" 
        accentWord="Portofolio"
        description="Jelajahi portofolio studi kasus produk digital rancangan kami. Kami memadukan kode berkualitas tinggi dengan pengalaman visual yang memikat." 
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="flex overflow-x-auto max-w-full gap-2 bg-white border border-[#e4e8f2] p-1.5 rounded-2xl shadow-sm md:flex-wrap md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {CATEGORIES.map((cat) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const ProjectIcon = project.icon
              const waText = encodeURIComponent(`Halo Kalana Labs, saya melihat proyek "${project.title}" (${project.category}) di portofolio Anda dan tertarik untuk mendiskusikan konsep serupa untuk bisnis saya.`)
              
              return (
                <div 
                  key={project.id}
                  className="group bg-white border border-[#e4e8f2] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#2152cf]/[0.03] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                >
                  <div 
                    className="aspect-video relative overflow-hidden flex items-center justify-center p-6"
                    style={{ background: project.gradient }}
                  >
                    <div 
                      className="absolute inset-0 opacity-[0.1] pointer-events-none"
                      style={{
                        backgroundImage: `
                          linear-gradient(to right, white 1px, transparent 1px),
                          linear-gradient(to bottom, white 1px, transparent 1px)
                        `,
                        backgroundSize: '24px 24px',
                      }}
                    />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/20 blur-xl pointer-events-none" />

                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white relative z-10 transition-transform duration-300 group-hover:scale-110">
                      <ProjectIcon className="w-8 h-8" strokeWidth={1.5} />
                    </div>

                    <div className="absolute top-4 left-4 bg-white/15 border border-white/10 text-white text-[10px] font-bold rounded-full px-3 py-1 backdrop-blur-sm">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#1e2547] mb-2 group-hover:text-[#2152cf] transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-[#4f5b7d] text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[11px] font-semibold bg-[#f1f3f9] text-[#4f5b7d] px-3 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-[#e4e8f2] pt-4 mt-auto">
                      <a
                        href={`https://wa.me/6285707736885?text=${waText}`}
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-[#2152cf] hover:text-[#1a3fa3] transition-colors group/btn"
                      >
                        Diskusikan Konsep Proyek
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-white border border-[#e4e8f2] rounded-3xl">
              <p className="text-base text-[#8a96b8]">Belum ada proyek dalam kategori ini.</p>
            </div>
          )}

        </div>
      </section>

      <section className="py-16 bg-[#0d1230] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1230 0%, #122070 60%, #0d1230 100%)' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-black text-[#d9ff42] mb-2">30+</p>
              <p className="text-xs md:text-sm text-white/70 font-semibold uppercase tracking-wider">Proyek Terselesaikan</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">98%</p>
              <p className="text-xs md:text-sm text-white/70 font-semibold uppercase tracking-wider">Tingkat Kepuasan Klien</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-[#d9ff42] mb-2">3 Tahun</p>
              <p className="text-xs md:text-sm text-white/70 font-semibold uppercase tracking-wider">Pengalaman Industri</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">15+</p>
              <p className="text-xs md:text-sm text-white/70 font-semibold uppercase tracking-wider">Klien Korporat & UMKM</p>
            </div>
          </div>
        </div>
      </section>

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
*/

