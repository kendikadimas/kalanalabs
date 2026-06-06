import type { Metadata } from 'next'
import Link from 'next/link'
import { Rocket, ShieldCheck, Handshake, Users, Eye, Target, Sparkles, ArrowRight } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Tentang Kami — Kalana Labs | Jasa Pembuatan Website Purwokerto',
  description: 'Kenali Kalana Labs lebih dekat. Kami adalah studio teknologi di Purwokerto yang berkomitmen menghadirkan jasa pembuatan website murah & profesional, aplikasi mobile kustom, dan riset desain UI/UX.',
}

const values = [
  {
    icon: Sparkles,
    title: 'Inovasi Berkelanjutan',
    description: 'Kami terus mengadopsi teknologi terbaru agar produk digital bisnis Anda tetap relevan dan memiliki keunggulan kompetitif jangka panjang.'
  },
  {
    icon: ShieldCheck,
    title: 'Kualitas Tanpa Kompromi',
    description: 'Kode bersih, optimasi kecepatan halaman, dan keamanan data adalah standar minimum yang kami terapkan di setiap baris pemrograman.'
  },
  {
    icon: Handshake,
    title: 'Kemitraan Strategis',
    description: 'Kami menganggap bisnis Anda sebagai bagian dari diri kami. Kesuksesan bisnis Anda adalah ukuran utama kesuksesan studio kami.'
  },
  {
    icon: Users,
    title: 'Transparansi Penuh',
    description: 'Semua proses berjalan terbuka, mulai dari rincian proposal biaya, progres pengerjaan mingguan, hingga kepemilikan source code.'
  }
]

const teamRoles = [
  {
    role: 'Project Manager',
    initials: 'PM',
    description: 'Mengelola garis waktu proyek, menerjemahkan kebutuhan bisnis Anda ke tim teknis, dan menjamin serah terima tepat waktu.',
  },
  {
    role: 'Lead UI/UX Designer',
    initials: 'UX',
    description: 'Menganalisis perilaku target pengguna Anda dan merancang antarmuka visual yang indah serta ramah pengguna.',
  },
  {
    role: 'Lead Fullstack Developer',
    initials: 'FD',
    description: 'Merancang arsitektur database yang aman, mengembangkan sistem backend (API), serta menyusun antarmuka web yang responsif.',
  },
  {
    role: 'Mobile Developer',
    initials: 'MD',
    description: 'Mengembangkan aplikasi mobile kustom berkinerja tinggi untuk perangkat Android dan iOS agar berjalan mulus.',
  }
]

export default function AboutPage() {
  return (
    <main className="bg-surface">
      <PageHeader
        title="Tentang"
        accentWord="Kalana Labs"
        description="Kami adalah studio produk digital yang memadukan keahlian teknik pemrograman dengan desain estetis untuk memecahkan masalah bisnis nyata."
      />

      {/* CERITA KAMI */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary tracking-tight leading-tight">
                Membantu Bisnis Indonesia Naik Kelas Lewat{' '}
                <span className="font-script italic text-navy">Teknologi Modern</span>
              </h2>
              <div className="space-y-4 text-sm md:text-base text-text-secondary leading-relaxed">
                <p>
                  Kalana Labs lahir di Purwokerto, Jawa Tengah, dari kepedulian kami terhadap banyaknya bisnis lokal maupun nasional yang kesulitan bertransformasi ke ranah digital. Banyak pelaku bisnis mendapatkan produk digital yang tidak terawat, lambat, atau sulit dioperasikan.
                </p>
                <p>
                  Kami memutuskan untuk mengubah itu. Kami membangun Kalana Labs dengan satu komitmen sederhana: menyajikan kualitas rekayasa perangkat lunak berstandar industri tinggi dengan biaya investasi yang transparan dan bersahabat.
                </p>
                <p>
                  Di sini, kami tidak pernah menggunakan template instan pasaran. Kami percaya bahwa setiap entitas bisnis memiliki karakteristik yang unik, sehingga solusi digital yang kami berikan harus dirancang khusus untuk memecahkan masalah unik tersebut.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-surface border border-border rounded-xl p-8 relative overflow-hidden group hover:border-navy/20 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-navy-soft rounded-bl-full pointer-events-none" />
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-navy-soft flex items-center justify-center text-navy shrink-0">
                    <Eye className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2 tracking-tight">Visi Kami</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Menjadi studio produk digital tepercaya di Indonesia yang dikenal karena keunggulan teknis, keindahan desain, dan dampak pertumbuhan bisnis nyata bagi setiap mitra kami.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface border border-border rounded-xl p-8 relative overflow-hidden group hover:border-navy/20 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-lime-subtle rounded-bl-full pointer-events-none" />
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-lime-subtle flex items-center justify-center text-text-primary shrink-0">
                    <Target className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2 tracking-tight">Misi Kami</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Merancang produk digital yang inklusif dan intuitif, menulis kode bersih yang aman dan responsif, serta mendampingi mitra dengan dukungan pemeliharaan jangka panjang yang andal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NILAI UTAMA */}
      <section className="py-20 md:py-28 bg-surface-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary tracking-tight leading-tight">
              Nilai Utama yang Kami Pegang Teguh
            </h2>
            <p className="text-sm md:text-base text-text-secondary mt-4 leading-relaxed">
              Prinsip-prinsip ini memandu setiap keputusan desain dan baris pemrograman yang kami ambil demi kesuksesan proyek Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const ValueIcon = val.icon
              return (
                <div
                  key={i}
                  className="bg-surface border border-border rounded-xl p-8 hover:shadow-lg hover:border-navy/30 hover:-translate-y-0.5 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy/40 to-navy" />
                  <div className="w-12 h-12 rounded-lg bg-surface border border-border flex items-center justify-center text-navy mb-5 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                    <ValueIcon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {val.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* TIM KAMI */}
      {/* <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #111639 0%, #1b2a66 50%, #0e1433 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-navy opacity-10 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Di Balik Layar{' '}
              <span className="font-script italic text-accent">Kalana Labs</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base mt-4 leading-relaxed">
              Tim kami beranggotakan para profesional di bidangnya yang berkolaborasi untuk menyusun kesuksesan produk digital Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamRoles.map((member, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center font-black text-xl text-white mb-5">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">
                  {member.role}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary tracking-tight leading-tight">
            Ingin Bermitra dengan{' '}
            <span className="font-script italic text-navy">Tim Kami?</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Mari ngobrol santai untuk menguraikan ide, menganalisis peluang, dan mempersiapkan sistem terbaik untuk bisnis Anda.
          </p>
          <div className="pt-4">
            <Link
              href="https://wa.me/6285196811722?text=Halo%20Kalana%20Labs%2C%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20kalian."
              className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-navy-dark transition-colors shadow-lg shadow-navy/10 text-sm"
            >
              Hubungi Kami Sekarang
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
