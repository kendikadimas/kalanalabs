import Button from '@/components/ui/Button'

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-16 md:py-24 lg:py-28 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d1230] leading-tight tracking-tight">
              Kalana Labs adalah{' '}
              <span className="font-script text-[#2152cf]  text-4xl sm:text-5xl lg:text-5xl block sm:inline my-1">
                studio kreatif modern
              </span>{' '}
              yang membantu bisnis untuk mengembangkan solusi teknologi kustom yang tepat sasaran.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end pt-4 lg:pt-0">
            <Button href="#kontak" variant="primary" size="md">
              Selengkapnya
            </Button>
          </div>
        </div>

        {/* 3 Main Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Web Development (Lime Gradient Background) */}
          <div className="flex flex-col justify-between h-full rounded-3xl bg-gradient-to-br from-[#d9ff42] to-[#b4d622] p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            {/* Top Info */}
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0d1230] tracking-tight">
                Pembuatan Website dan Sistem Informasi
              </h3>
              <p className="text-[#0d1230]/75 text-sm leading-relaxed">
                Membangun website profesional seperti landing page, company profile, e-commerce, website portfolio hingga sistem informasi yang dapat membantu operasional bisnis anda.
              </p>
            </div>

            {/* Price and CTA */}
            <div className="my-4 flex flex-col gap-3">
              <div className="text-xs text-[#0d1230]/80">
                Mulai dari <span className="text-base font-bold text-[#122d78]">Rp 4.999.000</span>
              </div>
              <Button
                href="#harga"
                variant="outline"
                size="sm"
                className="w-fit py-1.5 px-4 border-[#0d1230] text-[#0d1230] hover:bg-[#0d1230] hover:text-[#d9ff42]"
              >
                Detail Layanan
              </Button>
            </div>

            {/* Empty Image Space Archived
            <div className="w-full mt-auto bg-[#0d1230]/5 border border-[#0d1230]/10 rounded-xl overflow-hidden h-[150px] flex flex-col pointer-events-none">
              <div className="h-6 border-b border-[#0d1230]/10 px-3 flex items-center gap-1.5 shrink-0 bg-[#0d1230]/5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 p-3 flex flex-col gap-1.5 bg-[#0d1230]/10">
                <div className="w-1/3 h-3 rounded bg-[#0d1230]/15" />
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="h-8 rounded bg-[#0d1230]/5 border border-[#0d1230]/5" />
                  <div className="h-8 rounded bg-[#0d1230]/5 border border-[#0d1230]/5" />
                </div>
                <div className="w-full h-8 rounded bg-[#0d1230]/5 border border-[#0d1230]/5 mt-auto" />
              </div>
            </div>
            */}
          </div>

          {/* Card 2: Mobile Apps (Blue-Navy Gradient Background) */}
          <div className="flex flex-col justify-between h-full rounded-3xl bg-gradient-to-br from-[#2152cf] to-[#122d78] p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            {/* Top Info */}
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Pembuatan Aplikasi Mobile
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Pembuatan aplikasi mobile untuk Android dan iOS untuk berbagai keperluan bisnis
              </p>
            </div>

            {/* Price and CTA */}
            <div className="my-4 flex flex-col gap-3">
              <div className="text-xs text-white/70">
                Mulai dari <span className="text-base font-bold text-[#d9ff42]">Rp 9.999.000</span>
              </div>
              <Button
                href="#harga"
                variant="outline"
                size="sm"
                className="w-fit py-1.5 px-4 border-white text-white hover:bg-white hover:text-[#122d78]"
              >
                Detail Layanan
              </Button>
            </div>

            {/* Empty Image Space Archived
            <div className="w-[120px] mx-auto mt-auto bg-white/10 border border-white/20 rounded-t-2xl overflow-hidden h-[150px] flex flex-col pointer-events-none p-2 pb-0">
              <div className="w-10 h-2.5 rounded-full bg-white/20 mx-auto mb-2 shrink-0" />
              <div className="flex-1 p-2 flex flex-col gap-1.5 bg-white/5 border border-white/10 rounded-t-xl">
                <div className="w-2/3 h-2 rounded bg-white/20" />
                <div className="w-full h-8 rounded bg-white/5 border border-white/10" />
                <div className="w-full h-10 rounded bg-white/5 border border-white/10 mt-auto" />
              </div>
            </div>
            */}
          </div>

          {/* Card 3: UI/UX Design (White Gradient Background) */}
          <div className="flex flex-col justify-between h-full rounded-3xl bg-gradient-to-br from-white to-[#f8f9fc] border border-[#e4e8f2] p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            {/* Top Info */}
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1e2547] tracking-tight">
                Desain UI/UX
              </h3>
              <p className="text-[#4f5b7d] text-sm leading-relaxed">
                Merancang antarmuka produk digital yang modern, intuitif, mudah digunakan, dan disukai pengguna Anda.
              </p>
            </div>

            {/* Price and CTA */}
            <div className="my-4 flex flex-col gap-3">
              <div className="text-xs text-[#4f5b7d]">
                Mulai dari <span className="text-base font-bold text-[#2152cf]">Rp 2.999.000</span>
              </div>
              <Button
                href="#harga"
                variant="outline"
                size="sm"
                className="w-fit py-1.5 px-4 border-[#1e2547] text-[#1e2547] hover:bg-[#1e2547] hover:text-white"
              >
                Detail Layanan
              </Button>
            </div>

            {/* Empty Image Space Archived
            <div className="w-full mt-auto bg-white border border-[#e4e8f2] rounded-xl overflow-hidden h-[150px] flex flex-col pointer-events-none">
              <div className="h-6 border-b border-[#e4e8f2] px-3 flex items-center justify-between shrink-0 bg-[#f1f3f9]">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2152cf]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                </div>
                <div className="w-8 h-2 rounded bg-gray-300" />
              </div>
              <div className="flex-1 flex bg-[#f8f9fc]">
                <div className="w-12 border-r border-[#e4e8f2] p-1.5 flex flex-col gap-1 bg-[#f1f3f9]">
                  <div className="w-full h-2 rounded bg-gray-200" />
                  <div className="w-2/3 h-2 rounded bg-gray-200" />
                </div>
                <div className="flex-1 p-2 flex items-center justify-center bg-white">
                  <div className="w-12 h-12 rounded-full border border-dashed border-[#2152cf]/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded bg-[#2152cf]/5 border border-[#2152cf]/10" />
                  </div>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  )
}
