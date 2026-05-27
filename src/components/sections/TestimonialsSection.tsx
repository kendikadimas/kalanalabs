import TestimonialCard from '@/components/ui/TestimonialCard'
import { TESTIMONIALS } from '@/lib/data'

export default function TestimonialsSection() {
  return (
    <section
      id="testimoni"
      className="py-16 md:py-24 lg:py-28 bg-[#0d1230] relative overflow-hidden"
    >
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#2152cf]/10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#d9ff42]/5" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 md:mb-16">
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Bukan Kami yang Bilang —{' '}
              <span className="font-script text-[#2152cf] italic">Klien Kami</span>{' '}
              yang Bicara
            </h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Bottom trust indicators */}
        {/* <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          {[
            { value: '4.9/5', label: 'Rating Rata-rata' },
            { value: '30+', label: 'Klien Puas' },
            { value: '100%', label: 'Proyek Terdelivered' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
