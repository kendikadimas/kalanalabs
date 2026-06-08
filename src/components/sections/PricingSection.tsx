'use client'

import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { PRICING_CATEGORIES } from '@/lib/data'

// Progressive 3D solid themes: Tier 1 (White) → Tier 2 (Neon Green) → Tier 3 (Deep Navy)
const TIER_THEMES = [
  {
    // Tier 1 — Solid White 3D
    card: 'bg-white border-2 border-slate-200 border-b-[8px] border-b-slate-300 shadow-xl hover:scale-[1.02] transition-all duration-300',
    topBorder: 'border-b-2 border-slate-100',
    nameColor: 'text-slate-900',
    priceColor: 'text-slate-900',
    priceSubColor: 'text-slate-500',
    benefitText: 'text-slate-700',
    checkBg: 'bg-slate-100',
    checkTick: 'text-slate-800',
    buttonClass: 'border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-extrabold',
  },
  {
    // Tier 2 — Solid Neon Green 3D (Best Value)
    card: 'bg-[#d9ff42] border-2 border-[#b8d932] border-b-[8px] border-b-[#8da61b] shadow-2xl hover:scale-[1.02] transition-all duration-300',
    topBorder: 'border-b-2 border-[#b8d932]/40',
    nameColor: 'text-[#0d1230]',
    priceColor: 'text-[#0d1230]',
    priceSubColor: 'text-[#0d1230]/70',
    benefitText: 'text-[#0d1230]/90',
    checkBg: 'bg-[#0d1230]',
    checkTick: 'text-[#d9ff42]',
    buttonClass: 'border-2 border-[#0d1230] text-[#0d1230] hover:bg-[#0d1230] hover:text-[#d9ff42] font-extrabold',
  },
  {
    // Tier 3 — Solid Deep Navy 3D
    card: 'bg-[#122d78] border-2 border-[#1a3fa3]/30 border-b-[8px] border-b-[#0b1b47] shadow-xl hover:scale-[1.02] transition-all duration-300',
    topBorder: 'border-b-2 border-[#1a3fa3]/30',
    nameColor: 'text-white',
    priceColor: 'text-white',
    priceSubColor: 'text-white/60',
    benefitText: 'text-white/80',
    checkBg: 'bg-[#d9ff42]',
    checkTick: 'text-[#0d1230]',
    buttonClass: 'border-2 border-white text-white hover:bg-white hover:text-[#122d78] font-extrabold',
  },
]

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(PRICING_CATEGORIES[0]?.id || '')

  const selectedCategory =
    PRICING_CATEGORIES.find((cat) => cat.id === activeTab) || PRICING_CATEGORIES[0]

  return (
    <section id="harga" className="py-16 md:py-24 lg:py-28 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Heading */}
        <div className="mb-14 md:mb-16">
          <SectionHeading
            title="Paket & Investasi Terbaik Untuk "
            titleHighlight="Bisnis Anda"
            subtitle="Harga transparan, tanpa biaya tersembunyi. Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda."
            centered
          />
        </div>

        {/* Tab Bar */}
        <div className="flex justify-center mb-10 w-full">
          <div className="flex overflow-x-auto gap-3 pb-3 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 px-4 sm:mx-0 sm:px-0 md:flex-wrap md:justify-center">
            {PRICING_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer transition-all duration-200 border-2 ${
                  activeTab === category.id
                    ? 'bg-[#2152cf] border-[#1a3fa3] border-b-[5px] border-b-[#0f245c] text-white shadow-md -translate-y-[1px]'
                    : 'bg-white border-slate-200 border-b-[5px] border-b-slate-300 text-[#4f5b7d] hover:text-[#1e2547] hover:bg-[#f1f3f9]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category subtitle */}
        {selectedCategory && (
          <p className="text-left md:text-center text-sm font-semibold text-[#4f5b7d] mb-10">
            {selectedCategory.subtitle}
          </p>
        )}

        {/* Cards — horizontal carousel on mobile, 3-column grid on desktop */}
        {selectedCategory && (
          <div
            key={activeTab}
            className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 md:grid md:grid-cols-3 md:gap-8 md:items-stretch md:mx-0 md:px-0"
          >
            {/* Left spacer for mobile alignment */}
            <div className="w-4 shrink-0 snap-start md:hidden" />

            {selectedCategory.packages.map((pkg, idx) => {
              const theme = TIER_THEMES[idx] ?? TIER_THEMES[2]

              const waMessage = encodeURIComponent(
                `Halo Kalana Labs, saya tertarik dengan paket berikut:\n\n` +
                `Layanan: ${selectedCategory.title}\n` +
                `Paket: ${pkg.name}\n` +
                `Harga: Rp ${pkg.price} ${pkg.suffix}\n\n` +
                `Mohon info selengkapnya untuk memulai proyek ini.`
              )
              const waUrl = `https://wa.me/6285196811722?text=${waMessage}`

              return (
                <div
                  key={pkg.name}
                  className={`flex flex-col rounded-2xl overflow-hidden relative transition-all duration-300 group w-[82vw] sm:w-[350px] md:w-auto shrink-0 snap-start snap-always scroll-ml-4 md:scroll-ml-0 ${theme.card}`}
                >
                  {/* Best Value badge */}
                  {pkg.bestValue && (
                    <div className={`absolute top-5 right-5 text-[9px] font-black px-3 py-1 rounded-md uppercase tracking-widest shadow z-10 ${
                      idx === 1
                        ? 'bg-[#0d1230] text-[#d9ff42]'
                        : 'bg-[#d9ff42] text-[#1e2547]'
                    }`}>
                      Best Value
                    </div>
                  )}

                  {/* Card top section */}
                  <div className={`px-7 pt-8 pb-6 ${theme.topBorder}`}>
                    {/* Package name — bigger & bolder */}
                    <h4 className={`text-3xl font-black mb-1.5 ${theme.nameColor}`}>
                      {pkg.name}
                    </h4>
                    <p className={`text-xs leading-relaxed pr-10 font-medium ${theme.priceSubColor}`}>
                      {pkg.subtitle}
                    </p>

                    {/* Price — big & bold */}
                    <div className="mt-6 flex items-baseline gap-1.5">
                      <span className={`text-base font-bold ${theme.priceSubColor}`}>Rp</span>
                      <span className={`text-5xl font-black tracking-tight leading-none ${theme.priceColor}`}>
                        {pkg.price}
                      </span>
                      <span className={`text-base font-semibold ${theme.priceSubColor}`}>
                        {pkg.suffix}
                      </span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="px-7 py-6 flex-1 flex flex-col">
                    <ul className="flex flex-col gap-3 mb-8 flex-1">
                      {pkg.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${theme.checkBg}`}>
                            <svg className={`w-2.5 h-2.5 ${theme.checkTick}`} width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className={`text-sm font-semibold leading-snug ${theme.benefitText}`}>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      href={waUrl}
                      variant="outline"
                      className={`w-full mt-auto rounded-xl ${theme.buttonClass}`}
                    >
                      Pilih Paket
                    </Button>
                  </div>
                </div>
              )
            })}

            {/* Right spacer for mobile alignment */}
            <div className="w-4 shrink-0 snap-end md:hidden" />
          </div>
        )}

      </div>
    </section>
  )
}
