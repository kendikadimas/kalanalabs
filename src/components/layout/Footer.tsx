import Link from 'next/link'
import { Mail, Phone, MapPin, LucideIcon } from 'lucide-react'
import { FOOTER_NAV, FOOTER_SERVICES, CONTACT_INFO } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Phone,
  MapPin,
}

// Kalana Labs K-Logo path
const KALANA_LOGO_PATH = 'M0 270V104L75.3408 58.5V104L135.385 0H220.256L135.385 147L220 293.557H135L75.5 190.5V226.41L0 270Z'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#05081c] text-white relative overflow-hidden border-t border-white/5">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Glow left */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#2152cf] opacity-10 blur-[100px]" />
        {/* Glow right */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#d9ff42] opacity-5 blur-[100px]" />
        {/* Giant K watermark */}
        <svg
          viewBox="0 0 221 294"
          width="300"
          height="400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -right-10 top-1/2 -translate-y-1/2 w-[300px] opacity-[0.02] select-none"
        >
          <path d={KALANA_LOGO_PATH} fill="white" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* ── Brand & Info (Col Span 4) ── */}
          <div className="lg:col-span-4 lg:pr-10">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-9 h-9 rounded-lg bg-[#2152cf] flex items-center justify-center group-hover:bg-[#1a3fa3] transition-colors">
                <svg
                  viewBox="0 0 221 294"
                  width="16"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-5"
                >
                  <path d={KALANA_LOGO_PATH} fill="white" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-[#d9ff42] transition-colors">
                Kalana Labs
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
              Kami adalah agensi digital asal Purwokerto yang fokus membangun produk IT fungsional dan estetis untuk membantu bisnis Anda berkembang secara eksponensial.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/kalana.labs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-[#d9ff42] hover:border-[#d9ff42]/50 hover:bg-[#d9ff42]/10 transition-all">
                <svg className="w-4 h-4" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@kalana__labs?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-[#d9ff42] hover:border-[#d9ff42]/50 hover:bg-[#d9ff42]/10 transition-all">
                <svg className="w-4 h-4" width="16" height="18" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Navigasi (Col Span 2) ── */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
              Eksplorasi
            </h4>
            <ul className="flex flex-col gap-4">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#d9ff42] text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#d9ff42] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Layanan (Col Span 3) ── */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
              Layanan Utama
            </h4>
            <ul className="flex flex-col gap-4">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#d9ff42] text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#d9ff42] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* Tambahan Layanan jika perlu mencakup semua */}
              <li>
                <Link
                  href="#layanan"
                  className="text-white/70 hover:text-[#d9ff42] text-sm transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#d9ff42] transition-colors" />
                  Sistem Informasi
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Kontak (Col Span 3) ── */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
              Hubungi Kami
            </h4>
            <ul className="flex flex-col gap-5">
              {CONTACT_INFO.map((info) => {
                const Icon = iconMap[info.icon] ?? Mail
                return (
                  <li key={info.label}>
                    <a
                      href={info.href}
                      className="flex items-start gap-3.5 text-white/70 hover:text-[#d9ff42] text-sm transition-colors duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d9ff42]/10 group-hover:border-[#d9ff42]/30 transition-all mt-0.5">
                        {info.icon === 'Phone' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 448 512" fill="currentColor" className="w-3.5 h-3.5 text-white/70 group-hover:text-[#d9ff42] transition-colors">
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                          </svg>
                        ) : (
                          <Icon className="w-3.5 h-3.5 text-white/70 group-hover:text-[#d9ff42]" strokeWidth={2} />
                        )}
                      </div>
                      <div className="flex flex-col pt-0.5">
                        <span className="text-[10px] uppercase tracking-wider text-white/40 mb-0.5">{info.label}</span>
                        <span className="font-medium leading-tight">{info.value}</span>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>

        {/* ── Divider & Bottom ── */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs sm:text-sm font-medium">
            &copy; {currentYear} Kalana Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">
              Terms of Service
            </Link>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d9ff42] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d9ff42]"></span>
              </span>
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Available for work</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
