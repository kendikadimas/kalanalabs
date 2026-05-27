'use client'

import ComingSoon from '@/components/ui/ComingSoon'

export default function LayananPage() {
  return <ComingSoon pageName="Layanan Kami" />
}

/* Original LayananPage content for future reference:
import { useState } from 'react'
import PageHeader from '@/components/ui/PageHeader'
import { 
  Code2, 
  Smartphone, 
  Palette, 
  CheckCircle2, 
  ChevronRight, 
  Zap, 
  Target, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const webSubcategories = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    tag: 'Konversi Tinggi',
    description: 'Halaman web tunggal kustom yang dirancang khusus untuk memaksimalkan hasil iklan berbayar (Google/Meta/TikTok Ads) dan memfokuskan tindakan pengunjung untuk membeli atau mendaftar.',
    techs: ['HTML/CSS', 'Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Desain responsif & ringan (mobile-first)',
      'Optimasi SEO On-Page tingkat dasar',
      'Integrasi tombol chat & form WhatsApp CTA',
      'Integrasi tracking pixel iklan (Facebook/TikTok/Google)',
      'Kecepatan loading optimal (Core Web Vitals)'
    ],
    priceRange: 'Mulai dari Rp 399.000',
    waText: 'Halo Kalana Labs, saya ingin mendiskusikan pembuatan Landing Page.',
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    tag: 'Identitas Profesional',
    description: 'Website resmi representatif untuk menampilkan visi, misi, sejarah, katalog layanan, dan portofolio terbaik perusahaan Anda guna meningkatkan kredibilitas di mata klien.',
    techs: ['Next.js', 'React', 'Tailwind CSS', 'Sanity / Decap CMS', 'SEO Tools'],
    features: [
      'Hingga 5-25 halaman profil terstruktur',
      'Sistem blog artikel / berita dengan CMS',
      'Desain premium interaktif sesuai branding',
      'Integrasi Google Maps & formulir kontak',
      'Panduan lengkap pengelolaan website'
    ],
    priceRange: 'Mulai dari Rp 1.299.000',
    waText: 'Halo Kalana Labs, saya ingin mendiskusikan pembuatan Website Company Profile.',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    tag: 'Toko Online Mandiri',
    description: 'Toko online lengkap untuk brand Anda tanpa potongan komisi. Dilengkapi katalog, sistem keranjang belanja, kalkulasi ongkos kirim otomatis, dan payment gateway otomatis.',
    techs: ['Next.js', 'Node.js', 'PostgreSQL', 'Midtrans / Xendit', 'RajaOngkir'],
    features: [
      'Input & manajemen stok produk real-time',
      'Integrasi Payment Gateway (virtual account, e-wallet, dll)',
      'Kalkulasi ongkos kirim otomatis (JNE, J&T, POS)',
      'Dashboard laporan penjualan terintegrasi',
      'Sistem promo, diskon, & voucher belanja kustom'
    ],
    priceRange: 'Mulai dari Rp 1.999.000',
    waText: 'Halo Kalana Labs, saya ingin mendiskusikan pembuatan Toko Online / E-Commerce.',
  },
  {
    id: 'sistem-informasi',
    title: 'Sistem Informasi',
    tag: 'Efisiensi Operasional',
    description: 'Aplikasi dashboard web kustom untuk mengotomatiskan alur kerja internal Anda seperti inventaris barang, reservasi/booking, manajemen SDM, dan database terpusat.',
    techs: ['Laravel / Node.js', 'React', 'Next.js', 'PostgreSQL', 'REST API'],
    features: [
      'Sistem manajemen database kustom (CRUD)',
      'Multi-role user access management (RBAC)',
      'Dashboard statistik data visual interaktif',
      'Ekspor laporan instan format PDF & Excel',
      'Integrasi notifikasi email & WhatsApp API kustom'
    ],
    priceRange: 'Mulai dari Rp 1.999.000',
    waText: 'Halo Kalana Labs, saya ingin mendiskusikan pembuatan Sistem Informasi internal.',
  },
  {
    id: 'website-portofolio',
    title: 'Website Portofolio',
    tag: 'Personal Branding',
    description: 'Galeri karya digital pribadi untuk freelancer, seniman, desainer, atau tenaga ahli guna menampilkan karya terbaik, CV interaktif, dan memperkuat personal branding Anda.',
    techs: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma'],
    features: [
      'Desain kustom visual portfolio modern & estetik',
      'CV / Resume interaktif siap download',
      'Galeri proyek/karya dengan filter dinamis',
      'Integrasi link media sosial & formulir kontak',
      'Domain pribadi (.com / .my.id) 1 tahun'
    ],
    priceRange: 'Mulai dari Rp 299.000',
    waText: 'Halo Kalana Labs, saya ingin mendiskusikan pembuatan Website Portofolio.',
  }
]

const reasons = [
  {
    icon: Zap,
    title: 'Bukan Template Murahan',
    description: 'Setiap baris kode dan komponen UI kami rancang secara kustom untuk bisnis Anda. Menghasilkan produk digital yang cepat, aman, dan berdaya saing tinggi.'
  },
  {
    icon: Target,
    title: 'Berorientasi Hasil & Konversi',
    description: 'Kami merancang arsitektur produk dengan berfokus pada tujuan bisnis Anda — baik untuk menaikkan konversi penjualan, leads, maupun efisiensi internal.'
  },
  {
    icon: HeartHandshake,
    title: 'Dukungan Pasca-Launch',
    description: 'Kami memberikan masa pemeliharaan gratis pasca-rilis untuk memastikan produk digital Anda selalu berjalan optimal dan aman.'
  }
]

export default function LayananPage() {
  const [activeWebTab, setActiveWebTab] = useState('landing-page')

  const activeWeb = webSubcategories.find(sub => sub.id === activeWebTab) || webSubcategories[0]

  return (
    <main className="bg-[#f8f9fc]">
      <PageHeader 
        title="Solusi Digital" 
        accentWord="Terbaik"
        description="Layanan terintegrasi dari hulu ke hilir untuk membantu bisnis Anda memimpin di era digital dengan teknologi dan desain berstandar industri." 
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-24 lg:gap-32">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 lg:order-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#2152cf]/5 rounded-[2.5rem] blur-xl pointer-events-none" />
                  
                  <div className="relative bg-white border border-[#e4e8f2] rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-[#2152cf]/[0.02] overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-[#2152cf]" />
                    
                    <div className="w-16 h-16 rounded-2xl bg-[#2152cf]/10 flex items-center justify-center text-[#2152cf] mb-8">
                      <Code2 className="w-8 h-8" strokeWidth={1.5} />
                    </div>

                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#2152cf] bg-[#2152cf]/5 px-3 py-1.5 rounded-full mb-4">
                      {activeWeb.tag}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-black text-[#1e2547] tracking-tight mb-4">
                      Website: {activeWeb.title}
                    </h3>

                    <p className="text-sm text-[#4f5b7d] leading-relaxed mb-6">
                      Estimasi investasi awal pengerjaan proyek:
                    </p>

                    <div className="bg-[#f8f9fc] border border-[#e4e8f2] p-5 rounded-2xl mb-8">
                      <span className="text-xs text-[#8a96b8] font-bold block uppercase tracking-wider mb-1">Mulai Dari</span>
                      <span className="text-xl md:text-2xl font-black text-[#2152cf]">{activeWeb.priceRange}</span>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button
                        href={`https://wa.me/6285707736885?text=${encodeURIComponent(activeWeb.waText)}`}
                        variant="primary"
                        className="w-full justify-center py-4 rounded-2xl shadow-lg shadow-[#2152cf]/10"
                      >
                        Konsultasikan Sekarang
                      </Button>
                      
                      <Button
                        href={`/layanan/${activeWeb.id}`}
                        variant="outline"
                        showArrow={true}
                        className="w-full justify-center py-4 rounded-2xl text-xs"
                      >
                        Detail Halaman Layanan
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6 lg:order-2">
                <div className="space-y-4">
                  <span className="text-xs font-black text-[#2152cf] uppercase tracking-widest">
                    Detail Layanan 01
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2547] tracking-tight leading-tight">
                    Pembuatan Website &amp; Sistem Informasi
                  </h2>
                  <p className="text-[#4f5b7d] text-base leading-relaxed">
                    Kami membangun website yang cepat, aman, dan dioptimalkan secara teknis menggunakan teknologi modern. Silakan pilih jenis kategori web di bawah ini untuk melihat detail fitur khusus:
                  </p>
                </div>

                <div className="border-y border-[#e4e8f2] py-4 my-2">
                  <span className="text-xs font-bold text-[#1e2547] uppercase tracking-wider block mb-3">Pilih Kategori Web:</span>
                  <div className="flex flex-wrap gap-2">
                    {webSubcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setActiveWebTab(sub.id)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                          activeWebTab === sub.id
                            ? 'bg-[#2152cf] text-white shadow-sm'
                            : 'bg-white border border-[#e4e8f2] text-[#4f5b7d] hover:text-[#1e2547] hover:bg-[#f1f3f9]'
                        }`}
                      >
                        {sub.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h4 className="text-xs font-bold text-[#1e2547] uppercase tracking-wider mb-3">Teknologi &amp; Tools Utama:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeWeb.techs.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs font-semibold bg-white border border-[#e4e8f2] text-[#4f5b7d] px-3.5 py-1.5 rounded-xl shadow-sm hover:border-[#2152cf]/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-[#1e2547] uppercase tracking-wider mb-4">Apa yang Anda Dapatkan:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {activeWeb.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#2152cf] shrink-0 mt-0.5" strokeWidth={2} />
                          <span className="text-sm text-[#4f5b7d] leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 lg:order-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#2152cf]/5 rounded-[2.5rem] blur-xl pointer-events-none" />
                  
                  <div className="relative bg-white border border-[#e4e8f2] rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-[#2152cf]/[0.02] overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-[#2152cf]" />
                    
                    <div className="w-16 h-16 rounded-2xl bg-[#2152cf]/10 flex items-center justify-center text-[#2152cf] mb-8">
                      <Smartphone className="w-8 h-8" strokeWidth={1.5} />
                    </div>

                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#2152cf] bg-[#2152cf]/5 px-3 py-1.5 rounded-full mb-4">
                      Skalabilitas Tinggi
                    </span>

                    <h3 className="text-2xl md:text-3xl font-black text-[#1e2547] tracking-tight mb-4">
                      Aplikasi Mobile
                    </h3>

                    <p className="text-sm text-[#4f5b7d] leading-relaxed mb-6">
                      Estimasi investasi awal pengerjaan proyek:
                    </p>

                    <div className="bg-[#f8f9fc] border border-[#e4e8f2] p-5 rounded-2xl mb-8">
                      <span className="text-xs text-[#8a96b8] font-bold block uppercase tracking-wider mb-1">Mulai Dari</span>
                      <span className="text-xl md:text-2xl font-black text-[#2152cf]">Mulai dari Rp 9.999.000</span>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button
                        href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20ingin%20berkonsultasi%20mengenai%20pembuatan%20Aplikasi%20Mobile."
                        variant="primary"
                        className="w-full justify-center py-4 rounded-2xl shadow-lg shadow-[#2152cf]/10"
                      >
                        Konsultasikan Sekarang
                      </Button>
                      
                      <Button
                        href="/layanan/mobile-app"
                        variant="outline"
                        showArrow={true}
                        className="w-full justify-center py-4 rounded-2xl text-xs"
                      >
                        Detail Halaman Layanan
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6 lg:order-1">
                <div className="space-y-4">
                  <span className="text-xs font-black text-[#2152cf] uppercase tracking-widest">
                    Detail Layanan 02
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2547] tracking-tight leading-tight">
                    Pembuatan Aplikasi Mobile (iOS &amp; Android)
                  </h2>
                  <p className="text-[#4f5b7d] text-base leading-relaxed">
                    Bawa bisnis Anda langsung ke genggaman pelanggan dengan aplikasi mobile kustom. Kami mengembangkan aplikasi lintas platform (cross-platform) yang memberikan pengalaman performa tinggi layaknya aplikasi native dengan efisiensi biaya pengembangan.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#1e2547] uppercase tracking-wider mb-3">Teknologi &amp; Tools Utama:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Flutter', 'React Native', 'Firebase', 'Supabase', 'REST API', 'App Store / Play Store'].map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-semibold bg-white border border-[#e4e8f2] text-[#4f5b7d] px-3.5 py-1.5 rounded-xl shadow-sm hover:border-[#2152cf]/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-[#1e2547] uppercase tracking-wider mb-4">Apa yang Anda Dapatkan:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {[
                      'Satu basis kode untuk Android & iOS',
                      'Notifikasi push real-time untuk retensi pengguna',
                      'Fungsi offline-first (sinkronisasi data otomatis saat online)',
                      'Integrasi maps, GPS, dan tracking lokasi',
                      'Keamanan data dengan enkripsi tingkat lanjut',
                      'Panduan lengkap rilis ke Google Play Store & Apple App Store'
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#2152cf] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-sm text-[#4f5b7d] leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 lg:order-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#2152cf]/5 rounded-[2.5rem] blur-xl pointer-events-none" />
                  
                  <div className="relative bg-white border border-[#e4e8f2] rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-[#2152cf]/[0.02] overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-[#2152cf]" />
                    
                    <div className="w-16 h-16 rounded-2xl bg-[#2152cf]/10 flex items-center justify-center text-[#2152cf] mb-8">
                      <Palette className="w-8 h-8" strokeWidth={1.5} />
                    </div>

                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#2152cf] bg-[#2152cf]/5 px-3 py-1.5 rounded-full mb-4">
                      Berorientasi Pengguna
                    </span>

                    <h3 className="text-2xl md:text-3xl font-black text-[#1e2547] tracking-tight mb-4">
                      Desain UI/UX
                    </h3>

                    <p className="text-sm text-[#4f5b7d] leading-relaxed mb-6">
                      Estimasi investasi awal pengerjaan proyek:
                    </p>

                    <div className="bg-[#f8f9fc] border border-[#e4e8f2] p-5 rounded-2xl mb-8">
                      <span className="text-xs text-[#8a96b8] font-bold block uppercase tracking-wider mb-1">Mulai Dari</span>
                      <span className="text-xl md:text-2xl font-black text-[#2152cf]">Mulai dari Rp 2.999.000</span>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button
                        href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20tertarik%20dengan%20jasa%20Desain%20UI/UX%20untuk%20produk%20saya."
                        variant="primary"
                        className="w-full justify-center py-4 rounded-2xl shadow-lg shadow-[#2152cf]/10"
                      >
                        Konsultasikan Sekarang
                      </Button>
                      
                      <Button
                        href="/layanan/ui-ux-design"
                        variant="outline"
                        showArrow={true}
                        className="w-full justify-center py-4 rounded-2xl text-xs"
                      >
                        Detail Halaman Layanan
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6 lg:order-2">
                <div className="space-y-4">
                  <span className="text-xs font-black text-[#2152cf] uppercase tracking-widest">
                    Detail Layanan 03
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2547] tracking-tight leading-tight">
                    Riset &amp; Desain UI/UX Produk Digital
                  </h2>
                  <p className="text-[#4f5b7d] text-base leading-relaxed">
                    Desain yang indah tidak ada artinya jika membingungkan pengguna. Kami memadukan riset perilaku pengguna dengan estetika visual modern untuk merancang antarmuka produk digital yang tidak hanya memukau mata, tetapi juga sangat intuitif untuk digunakan.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#1e2547] uppercase tracking-wider mb-3">Teknologi &amp; Tools Utama:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Wireframing', 'User Research', 'Hi-Fi Prototyping', 'Design System', 'Usability Testing'].map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-semibold bg-white border border-[#e4e8f2] text-[#4f5b7d] px-3.5 py-1.5 rounded-xl shadow-sm hover:border-[#2152cf]/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-[#1e2547] uppercase tracking-wider mb-4">Apa yang Anda Dapatkan:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {[
                      'Riset kompetitor & analisis kebutuhan pengguna nyata',
                      'Wireframe & pemetaan user flow terstruktur',
                      'High-fidelity UI design yang memukau & modern',
                      'Prototipe interaktif (bisa diklik) siap uji coba',
                      'Dokumentasi Design System komprehensif untuk developer',
                      'Sesi pengujian usabilitas (Usability Testing) sebelum coding'
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#2152cf] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-sm text-[#4f5b7d] leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d1230] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#2152cf] opacity-10 blur-[130px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-[#d9ff42] uppercase tracking-widest block mb-4">Kualitas &amp; Standar</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Mengapa Mempercayakan Proyek Anda Kepada <span className="font-script italic text-[#d9ff42]">Kalana Labs?</span>
            </h2>
            <p className="text-white/70 text-base max-w-xl mx-auto mt-4 leading-relaxed">
              Kami tidak sekadar menulis kode, kami merancang masa depan digital bisnis Anda dengan standar performa dan estetika terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <div 
                  key={i}
                  className="bg-[#151c3f] border border-white/5 rounded-3xl p-8 hover:border-white/15 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#d9ff42] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8f9fc] border border-[#e4e8f2] rounded-[3rem] p-8 md:p-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden">
            <div className="relative space-y-4 max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#2152cf] uppercase tracking-wider bg-[#2152cf]/5 px-3 py-1.5 rounded-full">
                Konsultasi 100% Gratis
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-[#1e2547] tracking-tight leading-tight">
                Bingung menentukan solusi teknologi yang tepat?
              </h3>
              <p className="text-sm text-[#4f5b7d] leading-relaxed">
                Diskusikan kendala bisnis Anda dengan tim analis kami secara cuma-cuma. Kami akan memberikan rekomendasi arsitektur &amp; estimasi biaya terbaik.
              </p>
            </div>

            <div className="relative shrink-0 w-full md:w-auto">
              <Button
                href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20teknologi%20bisnis%20saya."
                variant="primary"
                size="lg"
                className="w-full md:w-auto justify-center rounded-2xl h-14 bg-[#2152cf] hover:bg-[#1a3fa3] text-white"
              >
                Mulai Chat Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
*/
