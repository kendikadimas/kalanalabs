import Button from '@/components/ui/Button'

export default function CtaSection() {
  return (
    <section
      className="relative overflow-hidden py-0"
      style={{ background: 'linear-gradient(135deg, #0d1230 0%, #122070 60%, #0d1230 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Glow orb left */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#2152cf] opacity-20 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        {/* Glow orb right */}
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#2152cf] opacity-15 blur-[100px] translate-y-1/3" />
        {/* Lime accent dots */}
        <div className="absolute top-16 left-[30%] w-2 h-2 rounded-full bg-[#d9ff42]/50" />
        <div className="absolute top-32 left-[28%] w-1 h-1 rounded-full bg-[#d9ff42]/30" />
        <div className="absolute bottom-16 right-[35%] w-1.5 h-1.5 rounded-full bg-[#d9ff42]/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-12 min-h-[420px]">

          {/* ── Left: Copy ── */}
          <div className="flex-1 py-16 lg:py-20 flex flex-col items-start justify-center max-w-xl">
            {/* Label */}
            {/* <span className="inline-flex items-center gap-2 text-[#d9ff42] text-xs font-bold uppercase tracking-widest mb-5">
              <span className="w-4 h-px bg-[#d9ff42]" />
              Mulai Sekarang
            </span> */}

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

            {/* Trust micro-signal */}
            {/* <div className="flex items-center gap-6 mt-8">
              {[
                { value: '30+', label: 'Proyek Selesai' },
                { value: '100%', label: 'On-time Delivery' },
                { value: '3+', label: 'Tahun Pengalaman' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-white font-black text-lg leading-none">{stat.value}</span>
                  <span className="text-white/40 text-[10px] mt-0.5 uppercase tracking-wider font-medium">{stat.label}</span>
                </div>
              ))}
            </div> */}
          </div>

          {/* ── Right: Floating UI mockup ── */}
          <div className="hidden lg:flex flex-1 items-end justify-center self-stretch relative pt-10">
            {/* Main browser window — floats up from bottom */}
            <div className="relative w-full max-w-[480px] bottom-0 translate-y-0">

              {/* Browser chrome */}
              <div className="rounded-t-2xl border border-white/15 bg-white/8 backdrop-blur-md shadow-2xl shadow-[#2152cf]/20 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-3 h-5 rounded-md bg-white/8 border border-white/10 flex items-center px-2 gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d9ff42]/60" />
                    <div className="h-1.5 w-28 rounded-full bg-white/20" />
                  </div>
                  <div className="w-16 h-5 rounded-md bg-[#2152cf]/60 border border-[#2152cf]/40" />
                </div>

                {/* Sidebar + content layout */}
                <div className="flex h-[280px]">
                  {/* Sidebar */}
                  <div className="w-16 border-r border-white/8 bg-white/[0.03] flex flex-col items-center pt-5 gap-3">
                    {/* Brand icon */}
                    <div className="w-7 h-7 rounded-lg bg-[#2152cf]/60 border border-[#2152cf]/30 flex items-center justify-center mb-2">
                      <svg viewBox="0 0 221 294" width="16" height="20" className="w-4 h-5 text-white" fill="currentColor">
                        <path d="M0 270V104L75.3408 58.5V104L135.385 0H220.256L135.385 147L220 293.557H135L75.5 190.5V226.41L0 270Z" />
                      </svg>
                    </div>
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-6 h-1.5 rounded-full ${i === 1 ? 'bg-[#d9ff42]/60' : 'bg-white/15'}`} />
                    ))}
                  </div>

                  {/* Content area */}
                  <div className="flex-1 p-5 flex flex-col gap-4">
                    {/* Stat row */}
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { label: 'Total Klien', value: '38', accent: true },
                        { label: 'Proyek Aktif', value: '4', accent: false },
                        { label: 'Revenue', value: '+24%', accent: false },
                      ].map((card) => (
                        <div key={card.label} className={`rounded-xl p-3 border ${card.accent ? 'bg-[#d9ff42]/15 border-[#d9ff42]/20' : 'bg-white/5 border-white/8'}`}>
                          <p className={`text-[8px] uppercase tracking-wider font-semibold mb-1 ${card.accent ? 'text-[#d9ff42]/70' : 'text-white/40'}`}>{card.label}</p>
                          <p className={`text-base font-black ${card.accent ? 'text-[#d9ff42]' : 'text-white'}`}>{card.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Chart placeholder */}
                    <div className="flex-1 rounded-xl bg-white/[0.04] border border-white/8 p-3">
                      <div className="flex items-end gap-1.5 h-full pb-1">
                        {[35, 55, 42, 70, 58, 85, 65, 90, 72, 88].map((h, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-sm ${i === 9 ? 'bg-[#d9ff42]/80' : i % 3 === 0 ? 'bg-[#2152cf]/70' : 'bg-white/15'}`}
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Recent activity row */}
                    <div className="flex gap-2">
                      {[
                        { text: 'Website Selesai', color: 'bg-green-500/20 text-green-300 border-green-500/20' },
                        { text: 'Revisi #2', color: 'bg-[#2152cf]/20 text-blue-300 border-[#2152cf]/20' },
                        { text: 'Deploy ✓', color: 'bg-[#d9ff42]/15 text-[#d9ff42] border-[#d9ff42]/20' },
                      ].map((tag) => (
                        <span key={tag.text} className={`text-[9px] font-semibold px-2.5 py-1 rounded-full border ${tag.color}`}>
                          {tag.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -top-5 -right-8 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 border border-gray-100 z-10">
                <div className="w-8 h-8 rounded-full bg-[#d9ff42] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#1e2547]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#1e2547] leading-tight">Website Live!</p>
                  <p className="text-[10px] text-gray-400 leading-tight">kalanalabs.com · baru saja</p>
                </div>
              </div>

              {/* Floating star badge */}
              <div className="absolute -left-8 top-1/3 bg-[#1e2547] border border-white/10 rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2.5 z-10">
                <div className="text-[#d9ff42] text-sm leading-none">★★★★★</div>
                <div>
                  <p className="text-[10px] font-bold text-white leading-tight">4.9 / 5</p>
                  <p className="text-[9px] text-white/40 leading-tight">30+ klien</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
