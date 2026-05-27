'use client'

import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { PRICING_CATEGORIES } from '@/lib/data'

// Progressive color themes: Tier 1 (lightest) → Tier 3 (most dominant)
const TIER_THEMES = [
  {
    // Tier 1 — clean white, subtle
    card: 'bg-white border border-[#e4e8f2]',
    topBorder: 'border-b border-[#e4e8f2]',
    tierLabel: 'text-[#4f5b7d]',
    tierLabelBg: 'bg-[#f1f3f9]',
    nameColor: 'text-[#1e2547]',
    priceColor: 'text-[#1e2547]',
    priceSubColor: 'text-[#8a96b8]',
    benefitText: 'text-[#4f5b7d]',
    checkBg: 'bg-[#eef1ff]',
    checkTick: 'text-[#2152cf]',
    buttonClass: 'border-[#1e2547] text-[#1e2547] hover:bg-[#1e2547] hover:text-white',
    accentLine: 'bg-gradient-to-r from-[#2152cf] to-[#d9ff42]',
    hoverShadow: 'hover:shadow-lg hover:shadow-[#2152cf]/8',
  },
  {
    // Tier 2 — medium blue tint
    card: 'bg-[#eef2ff] border-2 border-[#c7d3f8]',
    topBorder: 'border-b border-[#c7d3f8]',
    tierLabel: 'text-[#2152cf]',
    tierLabelBg: 'bg-[#dce5fc]',
    nameColor: 'text-[#1e2547]',
    priceColor: 'text-[#1e2547]',
    priceSubColor: 'text-[#6078d0]',
    benefitText: 'text-[#2d3a6b]',
    checkBg: 'bg-[#2152cf]',
    checkTick: 'text-white',
    buttonClass: 'border-[#2152cf] text-[#2152cf] hover:bg-[#2152cf] hover:text-white',
    accentLine: 'bg-[#2152cf]',
    hoverShadow: 'hover:shadow-xl hover:shadow-[#2152cf]/15',
  },
  {
    // Tier 3 — dominant navy, most branded
    card: 'bg-[#1e2547] border border-[#1e2547]',
    topBorder: 'border-b border-white/10',
    tierLabel: 'text-[#d9ff42]',
    tierLabelBg: 'bg-white/10',
    nameColor: 'text-white',
    priceColor: 'text-white',
    priceSubColor: 'text-white/50',
    benefitText: 'text-white/70',
    checkBg: 'bg-[#d9ff42]',
    checkTick: 'text-[#1e2547]',
    buttonClass: 'border-white/30 text-white hover:bg-white hover:text-[#1e2547]',
    accentLine: 'bg-[#d9ff42]',
    hoverShadow: 'hover:shadow-2xl hover:shadow-[#2152cf]/20',
  },
]

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(PRICING_CATEGORIES[0]?.id || '')

  const selectedCategory =
    PRICING_CATEGORIES.find((cat) => cat.id === activeTab) || PRICING_CATEGORIES[0]

  return (
    <section id="harga" className="py-16 md:py-24 lg:py-28 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
        <div className="flex justify-center mb-10">
          <div className="flex overflow-x-auto max-w-full gap-2 bg-white border border-[#e4e8f2] p-1.5 rounded-2xl shadow-sm md:flex-wrap md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {PRICING_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer transition-all duration-200 ${
                  activeTab === category.id
                    ? 'bg-[#2152cf] text-white shadow-md'
                    : 'text-[#4f5b7d] hover:text-[#1e2547] hover:bg-[#f1f3f9]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category subtitle */}
        {selectedCategory && (
          <p className="text-center text-sm text-[#4f5b7d] mb-10">
            {selectedCategory.subtitle}
          </p>
        )}

        {/* Cards — equal height via items-stretch */}
        {selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {selectedCategory.packages.map((pkg, idx) => {
              const theme = TIER_THEMES[idx] ?? TIER_THEMES[2]

              const waMessage = encodeURIComponent(
                `Halo Kalana Labs, saya tertarik dengan paket berikut:\n\n` +
                `Layanan: ${selectedCategory.title}\n` +
                `Paket: ${pkg.name}\n` +
                `Harga: Rp ${pkg.price} ${pkg.suffix}\n\n` +
                `Mohon info selengkapnya untuk memulai proyek ini.`
              )
              const waUrl = `https://wa.me/6285707736885?text=${waMessage}`

              return (
                <div
                  key={pkg.name}
                  className={`flex flex-col rounded-3xl overflow-hidden relative transition-all duration-300 group ${theme.card} ${theme.hoverShadow}`}
                >
                  {/* Best Value badge */}
                  {pkg.bestValue && (
                    <div className="absolute top-5 right-5 bg-[#d9ff42] text-[#1e2547] text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow z-10">
                      Best Value
                    </div>
                  )}

                  {/* Card top section */}
                  <div className={`px-7 pt-8 pb-6 ${theme.topBorder}`}>
                    {/* Tier label pill */}
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 ${theme.tierLabel} ${theme.tierLabelBg}`}>
                      Tier {idx + 1}
                    </span>

                    {/* Package name — bigger & bolder */}
                    <h4 className={`text-3xl font-black mb-1.5 ${theme.nameColor}`}>
                      {pkg.name}
                    </h4>
                    <p className={`text-xs leading-relaxed pr-10 ${theme.priceSubColor}`}>
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
                            <svg className={`w-2.5 h-2.5 ${theme.checkTick}`} viewBox="0 0 12 12" fill="none" aria-hidden>
                              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className={`text-sm leading-snug ${theme.benefitText}`}>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      href={waUrl}
                      variant="outline"
                      className={`w-full mt-auto ${theme.buttonClass}`}
                    >
                      Pilih Paket
                    </Button>
                  </div>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] ${theme.accentLine} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              )
            })}
          </div>
        )}

      </div>
    </section>
  )
}
