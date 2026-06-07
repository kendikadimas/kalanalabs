import {
  MessageSquare,
  Lightbulb,
  Handshake,
  Rocket,
  LucideIcon,
} from 'lucide-react'
import type { ProcessStep } from '@/lib/types'

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Lightbulb,
  Handshake,
  Rocket,
}

interface ProcessStepProps {
  step: ProcessStep
  isLast?: boolean
}

export default function ProcessStepCard({ step, isLast = false }: ProcessStepProps) {
  const Icon = iconMap[step.icon] ?? MessageSquare

  return (
    <div className="flex gap-6">
      {/* Left: Number + connector */}
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-[#2152cf] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#2152cf]/30">
          <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-[#2152cf]/40 to-transparent mt-3 min-h-8" />
        )}
      </div>

      {/* Right: Content */}
      <div className="pb-10 pt-1.5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-[#2152cf] bg-[#2152cf]/10 px-2.5 py-1 rounded-full tracking-wider">
            {step.number}
          </span>
        </div>
        <h3 className="text-xl font-bold text-[#1e2547] mb-2">{step.title}</h3>
        <p className="text-[#4f5b7d] text-base leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}
