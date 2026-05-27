import { Star } from 'lucide-react'
import type { Testimonial } from '@/lib/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
      {/* Quote mark */}
      <div className="text-[#d9ff42] text-6xl font-bold leading-none select-none" aria-hidden>
        &ldquo;
      </div>

      {/* Content */}
      <p className="text-white/80 text-base leading-relaxed flex-1 -mt-4">
        {testimonial.content}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-1" aria-label={`Rating ${testimonial.rating} dari 5`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-[#d9ff42] fill-[#d9ff42]"
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-[#2152cf]/40 border border-[#2152cf]/30 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-bold">{testimonial.initials}</span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          <p className="text-white/50 text-xs">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}
