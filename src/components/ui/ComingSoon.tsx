'use client'

import Link from 'next/link'
import { Hammer, ArrowLeft, MessageSquare } from 'lucide-react'
import Button from '@/components/ui/Button'

interface ComingSoonProps {
  pageName: string
}

export default function ComingSoon({ pageName }: ComingSoonProps) {
  return (
    <div 
      className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-[#f8f9fc] py-20 px-4"
    >
      {/* Decorative Background Elements */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {/* Soft blue glow top right */}
        {/* <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#2152cf]/5 blur-[100px]" /> */}
        {/* Soft blue glow bottom left */}
        {/* <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#2152cf]/5 blur-[100px]" /> */}
      {/* </div> */} 

      <div className="relative max-w-xl w-full text-center space-y-8 z-10">
        {/* Icon container */}
        {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#2152cf]/5 border border-[#2152cf]/10 text-[#2152cf] animate-bounce">
          <Hammer className="w-10 h-10" strokeWidth={1.5} />
        </div> */}

        {/* Text */}
        <div className="space-y-4">
          <span className="text-xs font-black text-[#2152cf] uppercase tracking-widest block">
            Segera Hadir / Halaman Sedang Dirombak
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e2547] tracking-tight leading-tight">
            Halaman <span className="font-script text-[#2152cf] italic text-4xl md:text-5xl">{pageName}</span>
          </h1>
          <p className="text-sm md:text-base text-[#4f5b7d] leading-relaxed max-w-md mx-auto">
            Kami sedang memperbarui halaman ini secara menyeluruh untuk menghadirkan pengalaman yang lebih profesional, interaktif, dan informatif bagi Anda.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            href="/" 
            variant="primary" 
            className="w-full sm:w-auto shadow-md"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Button>
          <Button 
            href="https://wa.me/6285707736885?text=Halo%20Kalana%20Labs%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20kalian." 
            variant="outline" 
            className="w-full sm:w-auto border-[#1e2547] text-[#1e2547] hover:bg-[#1e2547] hover:text-white"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Konsultasi WhatsApp
          </Button>
        </div>
      </div>
    </div>
  )
}
