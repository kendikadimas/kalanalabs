import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3060c2 0%, #2255b2 50%, #163898 100%)' }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Large light circle - top right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/10" />
        {/* Bottom left light circle */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/8" />

        {/* Glow effect center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2152cf] opacity-20 blur-[120px]" />

        {/* Line grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 flex-1 flex flex-col items-center text-center">
        {/* Trust Badge / Rating */}
        <div className="inline-flex items-center gap-3  rounded-full py-1.5 pl-2.5 pr-4 animate-fade-in-up mb-6 backdrop-blur-sm">
          <div className="flex -space-x-2">
            {['AN', 'MH', 'YF'].map((initials, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-white/20 border border-white/40 flex items-center justify-center flex-shrink-0"
                style={{ zIndex: 3 - i }}
              >
                <span className="text-white text-[9px] font-bold">{initials}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400 text-xs">★★★★★</div>
            <span className="text-xs text-white/70">Dipercaya oleh 10+ bisnis</span>
          </div>
        </div>

        {/* Heading */}
        <div className=" max-w-4xl mb-6">
          <h1 className="text-[2.25rem] sm:text-[3.5rem] lg:text-[4.25rem] font-bold text-white leading-[1.15] tracking-tight">
            Bikin Website Profesional, Biar Bisnis{' '}
            <span className="font-script text-[#d9ff42] italic text-[2.6rem] sm:text-[4rem] lg:text-[5rem] tracking-normal inline-block">
              Naik Kelas.
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <div className=" max-w-2xl mb-8">
          <p className="text-[0.95rem] sm:text-base text-white/75 leading-relaxed">
            Kalana Labs adalah partner teknologi yang membantu bisnis Anda merancang, membangun,
            dan meluncurkan produk digital — dari UI/UX hingga sistem yang skalabel.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300 w-full max-w-xs sm:max-w-none">
          <Button href="#kontak" variant="accent" size="lg" className="w-full sm:w-auto">
            Mulai Proyek Bersama Kami
          </Button>
          <Button
            href="#project"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-[#2152cf] w-full sm:w-auto"
          >
            Lihat Portofolio
          </Button>
        </div>

        {false && (
        <div className="w-full max-w-5xl mt-16 lg:mt-20 relative h-[180px] sm:h-[300px] lg:h-[380px] overflow-hidden animate-fade-in-up animation-delay-400">
          {/* Main Mockup (Center) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[75%] sm:w-[65%] rounded-2xl border border-white/20 shadow-2xl z-20 overflow-hidden bg-[#05081c]">
            <img
              src="/assets/images/tourtravel.png"
              alt="Tour & Travel Project Mockup"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>

          {/* Left Mockup (Behind left) */}
          <div className="absolute left-[5%] sm:left-[10%] top-8 sm:top-12 w-[45%] rounded-2xl border border-white/10 shadow-xl z-10 overflow-hidden bg-[#05081c]">
            <img
              src="/assets/images/furniture.png"
              alt="Furniture Project Mockup"
              className="w-full h-auto block"
              loading="eager"
              style={{ opacity: 0.9 }}
            />
          </div>

          {/* Right Mockup (Behind right) */}
          <div className="absolute right-[5%] sm:right-[10%] top-8 sm:top-12 w-[45%] rounded-2xl border border-white/10 shadow-xl z-10 overflow-hidden bg-[#05081c]">
            <img
              src="/assets/images/anggana.png"
              alt="Anggana Project Mockup"
              className="w-full h-auto block"
              loading="eager"
              style={{ opacity: 0.9 }}
            />
          </div>
        </div>
        )}
      </div>
    </section>
  )
}
