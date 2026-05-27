import {
  Palette,
  Code2,
  Smartphone,
  TrendingUp,
  LucideIcon,
} from 'lucide-react'
import type { Service } from '@/lib/types'

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Code2,
  Smartphone,
  TrendingUp,
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Palette

  return (
    <div className="group relative bg-white border border-[#e4e8f2] rounded-2xl p-8 transition-all duration-300 hover:border-[#2152cf]/30 hover:shadow-2xl hover:shadow-[#2152cf]/10 hover:-translate-y-1 overflow-hidden">
      {/* Background number */}
      <span className="absolute top-4 right-6 text-7xl font-bold text-[#e4e8f2] leading-none select-none transition-colors duration-300 group-hover:text-[#2152cf]/10">
        {service.number}
      </span>

      {/* Icon */}
      <div className="relative w-12 h-12 rounded-xl bg-[#2152cf]/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#2152cf]/15">
        <Icon className="w-6 h-6 text-[#2152cf]" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-lg font-bold text-[#1e2547] mb-3 group-hover:text-[#2152cf] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-[#4f5b7d] text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2152cf] to-[#d9ff42] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  )
}
