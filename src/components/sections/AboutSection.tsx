import SectionHeading from '@/components/ui/SectionHeading'
import { STATS } from '@/lib/data'

export default function AboutSection() {
  return (
    <section id="tentang" className="py-16 md:py-24 lg:py-28 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              title={"Jasa Pembuatan\n"}
              titleHighlight="Website Profesional"
            />

            <div className="space-y-5 text-[#4f5b7d] leading-relaxed">
              <p>
                Kalana Labs bukan sekadar vendor — kami adalah mitra strategis. Kami
                menggabungkan kedalaman teknis dengan pemahaman bisnis untuk menghasilkan produk
                digital yang tidak hanya terlihat bagus, tapi benar-benar bekerja untuk tujuan
                bisnis Anda.
              </p>
              <p>
                Setiap proyek yang kami ambil dimulai dengan satu pertanyaan: apa hasil nyata yang
                ingin dicapai bisnis Anda? Dari sana, kami merancang solusi yang tepat sasaran —
                bukan solusi generik yang &ldquo;cukup baik&rdquo;.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-[#e4e8f2] rounded-2xl p-6 transition-all duration-200 hover:border-[#2152cf]/20 hover:shadow-lg hover:shadow-[#2152cf]/5"
                >
                  <p className="text-3xl font-bold text-[#2152cf] mb-1">{stat.value}</p>
                  <p className="text-sm text-[#4f5b7d] font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image placeholder */}
          <div className="relative group">
            <div className="bg-[#1441a5] border border-[#e4e8f2] rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden relative shadow-lg shadow-[#2152cf]/5">
              {/* Subtle radial glow to add depth */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
              
              <img
                src="/logo.svg"
                alt="Kalana Labs Logo"
                className="w-[45%] h-[45%] object-contain transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Accent dot decoration */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-[#d9ff42]/60 -z-10" />
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-[#2152cf]/15 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
