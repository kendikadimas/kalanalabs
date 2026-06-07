import TestimonialCard from '@/components/ui/TestimonialCard'
import { TESTIMONIALS } from '@/lib/data'

export default function TestimonialsSection() {
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section
      id="testimoni"
      className="py-12 md:py-16 lg:py-20 bg-[#0d1230] relative overflow-hidden"
    >
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#2152cf]/10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#d9ff42]/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
            Apa Kata{' '}
            <span className="font-script text-[#d9ff42] italic text-[1.1em] font-medium tracking-normal inline-block pl-1">Klien Kami</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm font-medium font-sans mt-2">
            Testimoni jujur dari para pemilik bisnis yang telah mempercayakan platform digital mereka bersama tim Kalana Labs.
          </p>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div className="w-full overflow-hidden relative py-4">
        {/* Fade gradients for visual edge polish */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0d1230] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0d1230] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee flex gap-5">
          {marqueeItems.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-[280px] sm:w-[350px] shrink-0 flex"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
