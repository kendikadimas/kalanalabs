'use client'

import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { FAQ_ITEMS } from '@/lib/data'

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null)

  const toggle = (id: string) => setOpenId(openId === id ? null : id)

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: Sticky heading + CTA */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <SectionHeading
              label="FAQ"
              title="Ada yang Ingin "
              titleHighlight="Ditanyakan?"
              subtitle="Pertanyaan yang paling sering kami terima dari calon klien. Tidak menemukan jawaban yang Anda cari? Langsung hubungi kami."
            />
            <div className="mt-8">
              <Button href="#kontak" variant="primary">
                Hubungi Kami
              </Button>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-[#e4e8f2]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id
              return (
                <div key={item.id} className="group">
                  <button
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-4 py-6 text-left cursor-pointer"
                  >
                    {/* Question number + text */}
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#f1f3f9] text-[#4f5b7d] text-xs font-bold flex items-center justify-center mt-0.5 group-hover:bg-[#2152cf] group-hover:text-white transition-all duration-200">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-base font-semibold leading-snug transition-colors duration-200 ${isOpen ? 'text-[#2152cf]' : 'text-[#1e2547] group-hover:text-[#2152cf]'}`}>
                        {item.question}
                      </span>
                    </div>

                    {/* Toggle icon */}
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 mt-0.5 ${
                      isOpen
                        ? 'bg-[#2152cf] border-[#2152cf]'
                        : 'border-[#e4e8f2] group-hover:border-[#2152cf]'
                    }`}>
                      <svg
                        className={`w-3 h-3 transition-all duration-300 ${isOpen ? 'rotate-45 text-white' : 'text-[#4f5b7d] group-hover:text-[#2152cf]'}`}
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden
                      >
                        <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </button>

                  {/* Answer panel */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-6 pl-11 pr-2">
                      <div className="bg-[#f8f9fc] rounded-2xl px-6 py-5">
                        <p className="text-sm text-[#4f5b7d] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
