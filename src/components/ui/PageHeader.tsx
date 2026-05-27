import React from 'react'

interface PageHeaderProps {
  title: string
  description?: string
  accentWord?: string
}

export default function PageHeader({ title, description, accentWord }: PageHeaderProps) {
  return (
    <section 
      className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-[#0d1230]"
      style={{ background: 'linear-gradient(135deg, #0d1230 0%, #122070 60%, #0d1230 100%)' }}
    >
      {/* Background glow & decor */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2152cf] opacity-20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
          {title}{' '}
          {accentWord && (
            <span className="font-script italic text-[#d9ff42]">{accentWord}</span>
          )}
        </h1>
        {description && (
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
