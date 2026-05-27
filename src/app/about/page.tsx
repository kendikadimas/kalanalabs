import ComingSoon from '@/components/ui/ComingSoon'

export const metadata = {
  title: 'Tentang Kami — Kalana Labs | Jasa Pembuatan Website Purwokerto',
  description: 'Kenali Kalana Labs lebih dekat. Kami adalah studio teknologi di Purwokerto yang berkomitmen menghadirkan jasa pembuatan website murah & profesional, aplikasi mobile kustom, dan riset desain UI/UX.',
}

export default function AboutPage() {
  return <ComingSoon pageName="Tentang Kami" />
}

/* Original AboutPage content for future reference:
import PageHeader from '@/components/ui/PageHeader'
import { Rocket, ShieldCheck, Handshake, Users, Eye, Target, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'

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
    gradient: 'from-[#2152cf] to-[#122d78]'
  },
  {
    role: 'Lead UI/UX Designer',
    initials: 'UX',
    description: 'Menganalisis perilaku target pengguna Anda dan merancang antarmuka visual yang indah serta ramah pengguna.',
    gradient: 'from-[#d9ff42] to-[#b4d622]'
  },
  {
    role: 'Lead Fullstack Developer',
    initials: 'FD',
    description: 'Merancang arsitektur database yang aman, mengembangkan sistem backend (API), serta menyusun antarmuka web yang responsif.',
    gradient: 'from-[#ec4899] to-[#831843]'
  },
  {
    role: 'Mobile Developer',
    initials: 'MD',
    description: 'Mengembangkan aplikasi mobile kustom berkinerja tinggi untuk perangkat Android dan iOS agar berjalan mulus.',
    gradient: 'from-[#10b981] to-[#064e3b]'
  }
]

export default function AboutPage() {
  return (
    <main className="bg-[#f8f9fc]">
      <PageHeader 
        title="Tentang" 
        accentWord="Kalana Labs"
        description="Kami adalah studio produk digital yang memadukan keahlian teknik pemrograman dengan desain estetis untuk memecahkan masalah bisnis nyata." 
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black text-[#2152cf] uppercase tracking-widest block">Cerita Kami</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2547] tracking-tight leading-tight">
                Membantu Bisnis Indonesia Naik Kelas Lewat <span className="text-[#2152cf] font-script italic text-3xl md:text-4xl">Teknologi Modern</span>
              </h2>
              <div className="space-y-4 text-base text-[#4f5b7d] leading-relaxed">
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
              <div className="bg-white border border-[#e4e8f2] rounded-3xl p-8 shadow-xl shadow-[#2152cf]/[0.01] relative overflow-hidden group hover:border-[#2152cf]/20 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#2152cf]/5 rounded-bl-full pointer-events-none" />
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#2152cf]/10 flex items-center justify-center text-[#2152cf] shrink-0">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1e2547] mb-2 tracking-tight">Visi Kami</h3>
                    <p className="text-sm text-[#4f5b7d] leading-relaxed">
                      Menjadi studio produk digital tepercaya di Indonesia yang dikenal karena keunggulan teknis, keindahan desain, dan dampak pertumbuhan bisnis nyata bagi setiap mitra kami.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#e4e8f2] rounded-3xl p-8 shadow-xl shadow-[#2152cf]/[0.01] relative overflow-hidden group hover:border-[#2152cf]/20 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#d9ff42]/10 rounded-bl-full pointer-events-none" />
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#d9ff42]/20 flex items-center justify-center text-[#1e2547] shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1e2547] mb-2 tracking-tight">Misi Kami</h3>
                    <p className="text-sm text-[#4f5b7d] leading-relaxed">
                      Merancang produk digital yang inklusif & intuitif, menulis kode bersih yang aman & responsif, serta mendampingi mitra dengan dukungan pemeliharaan jangka panjang yang andal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black text-[#2152cf] uppercase tracking-widest block mb-4">Prinsip Kerja</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2547] tracking-tight">
              Nilai Utama yang Kami Pegang Teguh
            </h2>
            <p className="text-sm text-[#4f5b7d] mt-3 leading-relaxed">
              Prinsip-prinsip ini memandu setiap keputusan desain dan baris pemrograman yang kami ambil demi kesuksesan proyek Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => {
              const ValueIcon = val.icon
              return (
                <div 
                  key={i}
                  className="bg-[#f8f9fc] border border-[#e4e8f2] rounded-3xl p-8 hover:bg-white hover:border-[#2152cf]/30 hover:shadow-xl hover:shadow-[#2152cf]/[0.02] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#e4e8f2] flex items-center justify-center text-[#2152cf] mb-6 group-hover:bg-[#2152cf] group-hover:text-white transition-colors duration-300">
                    <ValueIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1e2547] mb-2 tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#4f5b7d] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d1230] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1230 0%, #122070 60%, #0d1230 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#2152cf] opacity-10 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black text-[#d9ff42] uppercase tracking-widest block mb-4">Kolaborator</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Di Balik Layar <span className="font-script italic text-[#d9ff42]">Kalana Labs</span>
            </h2>
            <p className="text-white/70 text-sm mt-3 leading-relaxed">
              Tim kami beranggotakan para profesional di bidangnya yang berkolaborasi untuk menyusun kesuksesan produk digital Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamRoles.map((member, i) => (
              <div 
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-white/20 transition-all duration-300"
              >
                <div 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl mb-6 bg-gradient-to-br ${member.gradient} ${member.initials === 'UX' ? 'text-[#1e2547]' : 'text-white'}`}
                >
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">
                  {member.role}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2547] tracking-tight leading-tight">
            Ingin bermitra dengan tim kami yang andal?
          </h2>
          <p className="text-[#4f5b7d] text-base max-w-xl mx-auto leading-relaxed">
            Mari ngobrol santai untuk menguraikan ide, menganalisis peluang, dan mempersiapkan sistem terbaik untuk bisnis Anda.
          </p>
          <div className="pt-2">
            <Button
              href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20layanan%20kalian."
              variant="primary"
              size="lg"
              className="px-8 py-4 rounded-2xl shadow-lg shadow-[#2152cf]/10 inline-flex"
            >
              Hubungi Kami Sekarang
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
*/

