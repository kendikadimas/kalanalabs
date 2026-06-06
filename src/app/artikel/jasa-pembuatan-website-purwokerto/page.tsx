import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Monitor, ShoppingBag, Database, Smartphone, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website Purwokerto Murah & Profesional | Kalana Labs',
  description:
    'Kalana Labs jasa pembuatan website Purwokerto murah dan profesional. Landing page, company profile, e-commerce, sistem informasi, dan aplikasi mobile. Konsultasi gratis.',
  openGraph: {
    title: 'Jasa Pembuatan Website Purwokerto Murah & Profesional | Kalana Labs',
    description:
      'Kalana Labs jasa pembuatan website Purwokerto murah dan profesional. Landing page, company profile, e-commerce, sistem informasi, dan aplikasi mobile.',
    url: 'https://kalanalabs.com/artikel/jasa-pembuatan-website-purwokerto',
    type: 'article',
  },
  alternates: {
    canonical: 'https://kalanalabs.com/artikel/jasa-pembuatan-website-purwokerto',
  },
}

const services = [
  { icon: Monitor, name: 'Landing Page', price: 'Rp 399.000', desc: 'Halaman web tunggal untuk kampanye iklan, event, atau promosi produk dengan fokus konversi tinggi.' },
  { icon: Monitor, name: 'Company Profile', price: 'Rp 1.299.000', desc: 'Website resmi perusahaan multi-halaman dengan CMS, blog, dan profil lengkap.' },
  { icon: ShoppingBag, name: 'E-Commerce', price: 'Rp 1.999.000', desc: 'Toko online dengan payment gateway, manajemen stok, dan kalkulasi ongkir otomatis.' },
  { icon: Database, name: 'Sistem Informasi', price: 'Rp 1.999.000', desc: 'Aplikasi web kustom untuk manajemen inventaris, reservasi, atau data internal.' },
  { icon: Monitor, name: 'Website Portofolio', price: 'Rp 299.000', desc: 'Galeri karya digital untuk personal branding freelancer dan profesional.' },
  { icon: Palette, name: 'Desain UI/UX', price: 'Rp 1.499.000', desc: 'Wireframe, prototipe interaktif Figma, dan design system untuk produk digital.' },
  { icon: Smartphone, name: 'Aplikasi Mobile', price: 'Rp 9.999.000', desc: 'Aplikasi Android & iOS cross-platform dengan Flutter atau React Native.' },
]

const benefits = [
  'Tidak ada biaya tersembunyi — harga transparan sejak awal',
  'Domain .com dan hosting gratis di tahun pertama untuk paket tertentu',
  'Desain eksklusif bukan template murahan',
  'SEO dasar optimal agar website muncul di pencarian Google',
  'Garansi maintenance gratis 1-3 bulan setelah peluncuran',
  'Konsultasi gratis tanpa dipungut biaya',
]

const faqs = [
  { q: 'Berapa lama proses pembuatan website?', a: 'Tergantung jenis layanan. Landing page selesai dalam 3 hari, company profile 7 hari, e-commerce 14 hari, dan aplikasi mobile hingga 30 hari kerja.' },
  { q: 'Apakah source code diserahkan?', a: 'Ya, seluruh source code dan aset desain Figma diserahkan penuh setelah proyek selesai dan dilunasi.' },
  { q: 'Apakah domain dan hosting termasuk?', a: 'Domain .com dan hosting 1 tahun gratis untuk paket Basic Company Profile dan E-Commerce.' },
  { q: 'Bagaimana sistem pembayarannya?', a: 'Pembayaran dilakukan dua tahap: DP 50% di awal dan pelunasan 50% setelah proyek selesai.' },
]

export default function JasaPembuatanWebsitePurwokerto() {
  return (
    <main className="bg-[#f8f9fc] text-[#1e2547] min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#111639] via-[#1b2a66] to-[#0e1433] py-24 md:py-32">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-navy/10 blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Jasa Pembuatan Website Purwokerto
          </h1>
          <p className="text-white/60 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Kalana Labs melayani pembuatan website kualitas profesional untuk bisnis, UMKM, dan institusi di Purwokerto dan sekitarnya. Landing page, company profile, toko online, hingga aplikasi mobile.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="https://wa.me/6285196811722?text=Halo%20Kalana%20Labs%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20di%20Purwokerto."
              className="inline-flex items-center gap-2 bg-[#d9ff42] text-[#0d1230] font-bold px-8 py-3.5 rounded-xl hover:brightness-90 transition-all text-sm"
            >
              Konsultasi Gratis
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all text-sm"
            >
              Lihat Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* MENGAPA PENTING */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Mengapa Website Penting untuk{' '}
              <span className="font-script italic text-navy">Bisnis Anda?</span>
            </h2>
            <p className="text-[#4f5b7d] text-sm md:text-base leading-relaxed">
              Di era digital saat ini, website bukan lagi sekadar pelengkap — melainkan etalase utama bisnis Anda. Calon pelanggan akan mencari informasi produk dan layanan melalui mesin pencari sebelum memutuskan membeli. Tanpa website, Anda kehilangan kesempatan untuk ditemukan oleh ribuan calon pelanggan potensial di Purwokerto dan seluruh Indonesia.
            </p>
            <p className="text-[#4f5b7d] text-sm md:text-base leading-relaxed">
              Dengan website profesional, bisnis UMKM Anda bisa bersaing dengan perusahaan besar. Biaya pembuatan website kini terjangkau, mulai dari Rp 299.000 saja untuk landing page sederhana hingga sistem informasi kompleks.
            </p>
          </div>
          <div className="bg-white border border-[#e4e8f2] rounded-xl p-8 space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-navy">Keuntungan Memiliki Website</h3>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-navy shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-[#4f5b7d]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="py-20 md:py-28 bg-white border-y border-[#e4e8f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Layanan Pembuatan Website{' '}
              <span className="font-script italic text-navy">Purwokerto</span>
            </h2>
            <p className="text-[#4f5b7d] text-sm md:text-base mt-4 leading-relaxed">
              Kami menyediakan berbagai jenis layanan pengembangan website dan aplikasi yang dapat disesuaikan dengan kebutuhan bisnis Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <div
                  key={svc.name}
                  className="bg-[#f8f9fc] border border-[#e4e8f2] rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy/40 to-navy" />
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1e2547]">{svc.name}</h3>
                      <p className="text-xs text-[#4f5b7d] mt-1 leading-relaxed">{svc.desc}</p>
                    </div>
                    <div className="pt-2 border-t border-[#e4e8f2] flex items-center justify-between">
                      <span className="text-xs text-navy font-bold">Mulai {svc.price}</span>
                      <Link
                        href={`/layanan/${svc.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                        className="text-[10px] font-bold text-navy hover:underline"
                      >
                        Detail →
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MENGAPA KALANA LABS */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Mengapa Pilih Kalana Labs untuk{' '}
            <span className="font-script italic text-navy">Website Anda?</span>
          </h2>
          <p className="text-[#4f5b7d] text-sm md:text-base mt-4 leading-relaxed">
            Sebagai penyedia jasa pembuatan website di Purwokerto, kami berkomitmen memberikan hasil terbaik untuk setiap proyek.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Bukan Template Murahan', desc: 'Setiap website kami bangun dari nol sesuai identitas brand Anda. Tidak ada template instan yang digunakan ulang.' },
            { title: 'Teknologi Modern', desc: 'Kami menggunakan framework terkini seperti Next.js, React, dan Tailwind CSS untuk performa dan kecepatan maksimal.' },
            { title: 'Fokus Konversi', desc: 'Setiap elemen desain dirancang untuk mendorong pengunjung melakukan tindakan yang Anda inginkan.' },
            { title: 'Dukungan Purna Jual', desc: 'Anda tidak sendiri setelah website selesai. Kami berikan garansi maintenance gratis dan pendampingan penuh.' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-[#e4e8f2] rounded-xl p-7 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-[#1e2547] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4f5b7d] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROSES */}
      <section className="py-20 md:py-28 bg-white border-y border-[#e4e8f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Alur Pembuatan Website di{' '}
              <span className="font-script italic text-navy">Kalana Labs</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Konsultasi & Analisis', desc: 'Diskusi kebutuhan, tujuan bisnis, dan target audiens website Anda.' },
              { step: '02', title: 'Desain & Prototipe', desc: 'Perancangan wireframe dan desain visual yang disesuaikan dengan brand Anda.' },
              { step: '03', title: 'Pengembangan & Uji Coba', desc: 'Coding, integrasi fitur, dan pengujian menyeluruh sebelum peluncuran.' },
              { step: '04', title: 'Launch & Maintenance', desc: 'Website live, optimasi SEO, dan dukungan maintenance gratis berkala.' },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <span className="text-3xl font-black text-navy/20 block">{phase.step}</span>
                <h3 className="font-bold text-[#1e2547] mt-2 mb-1">{phase.title}</h3>
                <p className="text-xs text-[#4f5b7d] leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Pertanyaan Seputar Jasa Pembuatan Website{' '}
            <span className="font-script italic text-navy">Purwokerto</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white border border-[#e4e8f2] rounded-xl p-6">
              <h3 className="font-bold text-[#1e2547] text-sm">{faq.q}</h3>
              <p className="text-sm text-[#4f5b7d] mt-2 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#111639] via-[#1b2a66] to-[#0e1433] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-navy opacity-20 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Siap Membuat Website untuk{' '}
            <span className="font-script italic text-[#d9ff42]">Bisnis Anda?</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Konsultasikan kebutuhan website Anda dengan tim Kalana Labs secara gratis. Kami akan bantu tentukan solusi terbaik sesuai anggaran dan target bisnis Anda.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="https://wa.me/6285196811722?text=Halo%20Kalana%20Labs%2C%20saya%20ingin%20konsultasi%20pembuatan%20website%20untuk%20bisnis%20saya%20di%20Purwokerto."
              className="inline-flex items-center gap-2 bg-[#d9ff42] text-[#0d1230] font-bold px-8 py-3.5 rounded-xl hover:brightness-90 transition-all text-sm"
            >
              Konsultasi Sekarang Gratis
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all text-sm"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "headline": "Jasa Pembuatan Website Purwokerto Murah & Profesional",
                "description": "Kalana Labs melayani jasa pembuatan website Purwokerto untuk landing page, company profile, e-commerce, sistem informasi, dan aplikasi mobile.",
                "author": { "@type": "Organization", "name": "Kalana Labs" },
                "publisher": { "@type": "Organization", "name": "Kalana Labs", "logo": { "@type": "ImageObject", "url": "https://kalanalabs.com/logo.svg" } },
                "url": "https://kalanalabs.com/artikel/jasa-pembuatan-website-purwokerto",
                "mainEntityOfPage": "https://kalanalabs.com/artikel/jasa-pembuatan-website-purwokerto"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Berapa biaya jasa pembuatan website di Purwokerto?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Biaya mulai dari Rp 299.000 untuk landing page, Rp 1.299.000 company profile, Rp 1.999.000 e-commerce, hingga Rp 9.999.000 aplikasi mobile." }
                  },
                  {
                    "@type": "Question",
                    "name": "Berapa lama proses pembuatan website?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Landing page 3 hari, company profile 7 hari, e-commerce 14 hari, dan aplikasi mobile hingga 30 hari kerja." }
                  },
                  {
                    "@type": "Question",
                    "name": "Apakah domain dan hosting gratis?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Domain .com dan hosting 1 tahun gratis untuk paket Basic Company Profile dan E-Commerce." }
                  }
                ]
              }
            ]
          })
        }}
      />
    </main>
  )
}
