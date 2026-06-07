import Button from '@/components/ui/Button'

export default function CtaSection() {
  return (
    <section
      className="relative overflow-hidden py-0"
      style={{ background: 'linear-gradient(135deg, #0d1230 0%, #122070 60%, #0d1230 100%)' }}
    >
      {/* Minimal background — single glow, no dot spam */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#2152cf] opacity-20 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#d9ff42] opacity-5 blur-[140px] translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-16 min-h-[420px]">

          {/* ── Left: Copy ── */}
          <div className="flex-1 py-16 lg:py-20 flex flex-col items-start justify-center max-w-xl">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-5">
              Siap Punya Website yang Bikin Bisnis Anda{' '}
              <span className="font-script italic text-[#d9ff42]">
                Lebih Dipercaya?
              </span>
            </h2>

            {/* Description */}
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
              Kami bantu Anda merancang dan membangun produk digital yang profesional, cepat, dan sesuai kebutuhan — mulai dari konsultasi gratis, tanpa komitmen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="#kontak" variant="accent" size="lg">
                Konsultasi Gratis
              </Button>
              <Button
                href="#harga"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-[#0d1230]"
              >
                Lihat Paket Harga
              </Button>
            </div>
          </div>

          {/* ── Right: Real Portfolio Showcase ── */}
          <div className="hidden lg:flex flex-1 items-end justify-center self-stretch relative pt-10 pb-0">
            {/* Stacked project screenshots — real work, no fake UI */}
            <div className="relative w-full max-w-[460px] h-[360px]">

              {/* Back card */}
              <div className="absolute bottom-0 left-4 right-4 h-[320px] rounded-t-2xl overflow-hidden border border-white/10 rotate-[-2deg] origin-bottom opacity-60">
                <img
                  src="/assets/images/Desa Kalisabuk.png"
                  alt="Desa Kalisabuk — Website Company Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Middle card */}
              <div className="absolute bottom-0 left-2 right-2 h-[340px] rounded-t-2xl overflow-hidden border border-white/15 rotate-[1deg] origin-bottom opacity-80">
                <img
                  src="/assets/images/Beresin.png"
                  alt="Beresin — Website Company Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Front card — full opacity, no rotation */}
              <div className="absolute bottom-0 left-0 right-0 h-[355px] rounded-t-2xl overflow-hidden border border-white/20 shadow-2xl shadow-[#2152cf]/30">
                <img
                  src="/assets/images/Anggana Project.png"
                  alt="Anggana Project — Website Event Organizer"
                  className="w-full h-full object-cover object-top"
                />
                {/* Project label */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-xs font-semibold text-[#d9ff42] uppercase tracking-widest mb-0.5">Portofolio Terbaru</p>
                  <p className="text-sm font-bold text-white">Anggana Project — Event Organizer</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

