export default function AboutSection() {
  return (
    <section id="tentang" className="py-16 md:py-24 lg:py-28 bg-[#f8f9fc] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#2152cf]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-[#d9ff42]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1e2547] tracking-tight leading-tight">
            Tentang <span className="font-logo text-[#2152cf]">Kalana Labs</span>
          </h2>
          <p className="text-[#4f5b7d] text-base md:text-lg leading-relaxed">
            <strong>Kalana Labs</strong> hadir sebagai studio teknologi dan mitra strategis yang berdedikasi membangun website profesional, aplikasi mobile kustom, serta produk digital inovatif yang dirancang khusus untuk mempercepat pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-8 items-stretch">
          {/* Column 1: Team Image & Stats */}
          <div className="flex flex-col gap-6 h-full justify-between">
            {/* Top Image Card */}
            <div className="relative group overflow-hidden rounded-3xl border-2 border-slate-200 border-b-[8px] border-b-slate-300 aspect-[4/3] w-full shadow-lg bg-white">
              <img
                src="/assets/images/kalanalabsmockup.webp"
                alt="Kolaborasi Tim Kalana Labs"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Bottom Stats Card */}
            <div className="bg-gradient-to-br from-[#2152cf] to-[#122d78] border-2 border-[#2152cf]/30 border-b-[8px] border-b-[#0b1b47] p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-4 shadow-xl min-h-[130px] flex-grow">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#d9ff42] mb-1 font-logo">100%</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/60 font-semibold">Transparansi Penuh</p>
              </div>
              <div className="w-full h-[1px] sm:w-[1px] sm:h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1 font-logo">30 Hari</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/60 font-semibold">Dukungan Pascadeploy</p>
              </div>
            </div>
          </div>

          {/* Column 2: Solusi Digital Bisnis Anda (Lime Green Background) */}
          <div className="bg-gradient-to-br from-[#d9ff42] to-[#cbe838] border-2 border-[#b8d932] border-b-[8px] border-b-[#8da61b] rounded-3xl p-8 flex flex-col justify-between gap-8 shadow-xl group h-full">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#05081c] tracking-tight">
                Solusi Digital Bisnis Anda
              </h3>
              <p className="text-[#05081c]/80 text-sm leading-relaxed">
                Kami menghadirkan pembuatan website kustom mulai dari Landing Page, Company Profile, hingga E-Commerce yang cepat, responsif, aman, dan teroptimasi SEO untuk memaksimalkan kehadiran digital bisnis Anda.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-black/10 border-b-[4px] border-b-black/20 w-full mt-auto shadow-md bg-white">
              <img
                src="/assets/images/about_tech.png"
                alt="Solusi Teknologi Kalana Labs"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Column 3: Transparansi & Dukungan Berkala (Blue Gradient Background) */}
          <div className="bg-gradient-to-br from-[#1a3fa3] to-[#122d78] border-2 border-[#2152cf]/10 border-b-[8px] border-b-[#0b1b47] rounded-3xl p-8 flex flex-col justify-between gap-8 shadow-xl group h-full">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 border-b-[4px] border-b-black/35 w-full shadow-md bg-white">
              <img
                src="/assets/images/about_teamwork.png"
                alt="Kerja Sama Tim Kalana Labs"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 mt-auto">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Transparansi & Dukungan Berkala
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Kami memberikan transparansi penuh mulai dari progres mingguan hingga penyerahan proyek secara utuh, didukung layanan pemeliharaan berkala untuk menjaga kestabilan website Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
