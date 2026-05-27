interface SectionLabelProps {
  text: string
  className?: string
  light?: boolean
}

export default function SectionLabel({ text, className = '', light = false }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase ${
        light
          ? 'border-white/30 text-white/80 bg-white/10'
          : 'border-[#2152cf]/30 text-[#2152cf] bg-[#2152cf]/5'
      } ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#d9ff42]' : 'bg-[#2152cf]'}`}
      />
      {text}
    </div>
  )
}
