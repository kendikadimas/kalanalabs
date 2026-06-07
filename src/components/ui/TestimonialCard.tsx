import { Star } from 'lucide-react'
import type { Testimonial } from '@/lib/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="group bg-white border-2 border-slate-200 border-b-[6px] border-b-slate-300 rounded-2xl p-5 sm:p-6 flex flex-col gap-3 transition-all duration-300 hover:scale-[1.02] shadow-xl h-full justify-between">
      {/* Top Section */}
      <div className="flex flex-col gap-2 flex-grow">
        {/* Quote mark */}
        <div className="text-[#2152cf]/20 text-5xl font-serif font-black leading-none select-none -mb-4" aria-hidden>
          “
        </div>

        {/* Content */}
        <p className="text-slate-800 text-[13px] sm:text-[14px] leading-relaxed font-semibold flex-grow">
          {testimonial.content}
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-3 mt-1">
        {/* Rating */}
        <div className="flex items-center gap-0.5" aria-label={`Rating ${testimonial.rating} dari 5`}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 text-[#eab308] fill-[#eab308]"
            />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 pt-2.5" />

        {/* Author */}
        <div className="flex items-center gap-2.5">
          <div className="w-9.5 h-9.5 rounded-full bg-[#2152cf] flex items-center justify-center flex-shrink-0 shadow-md">
            <span className="text-white text-xs font-extrabold">{testimonial.initials}</span>
          </div>
          <div>
            <p className="text-slate-900 font-extrabold text-[13px] leading-snug">{testimonial.name}</p>
            <p className="text-slate-500 text-[11px] font-bold leading-normal">
              {testimonial.role ? `${testimonial.role} • ` : ''}
              {testimonial.company.split(/\s*[-·]\s*/)[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
