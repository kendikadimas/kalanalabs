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

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex flex-col items-center text-center justify-center min-h-[380px] py-16 lg:py-20 max-w-2xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-5">
            Siap Punya Website yang Bikin Bisnis Anda{' '}
            <span className="font-script italic text-[#d9ff42]">
              Lebih Dipercaya?
            </span>
          </h2>

          {/* Description */}
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xl">
            Kami bantu Anda merancang dan membangun produk digital yang profesional, cepat, dan sesuai kebutuhan — mulai dari konsultasi gratis, tanpa komitmen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
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
      </div>
    </section>
  )
}

