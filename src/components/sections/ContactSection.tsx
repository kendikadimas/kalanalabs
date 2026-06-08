'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, LucideIcon, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { CONTACT_INFO, SERVICE_OPTIONS } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Phone,
  MapPin,
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Generate WhatsApp message based on form
    const waMessage = encodeURIComponent(
      `Halo Kalana Labs, saya ingin mendiskusikan proyek baru:\n\n` +
      `*Nama:* ${form.name}\n` +
      `*Email:* ${form.email}\n` +
      `*WhatsApp:* ${form.phone}\n` +
      `*Layanan:* ${form.service}\n\n` +
      `*Detail Proyek:*\n${form.message}`
    )
    
    // Open WhatsApp in new tab
    window.open(`https://wa.me/6285196811722?text=${waMessage}`, '_blank')
    
    setSubmitted(true)
  }

  return (
    <section id="kontak" className="py-16 md:py-24 lg:py-28 bg-[#f8f9fc] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f8f9fc] rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f1f3f9] rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ── Left: Copy & Contact Info ── */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-24">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2547] leading-tight tracking-tight mb-5">
                Mari Mulai Sesuatu yang <span className="font-script italic text-[#2152cf]">Luar Biasa</span>
              </h2>
              <p className="text-[#4f5b7d] text-base leading-relaxed max-w-md">
                Ceritakan kebutuhan bisnis Anda. Tim ahli kami siap mendengarkan, menganalisis, dan memberikan solusi terbaik untuk pertumbuhan digital Anda.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map((info) => {
                const Icon = iconMap[info.icon] ?? Mail
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-5 p-5 bg-white border-2 border-slate-200 border-b-[6px] border-b-slate-300 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#2152cf] hover:border-b-[#1a3fa3] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#f8f9fc] border border-slate-100 flex items-center justify-center text-[#2152cf] shrink-0 group-hover:bg-[#2152cf] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-inner">
                      {info.icon === 'Phone' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 text-[#2152cf] group-hover:text-white transition-colors duration-300">
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                        </svg>
                      ) : (
                        <Icon className="w-5 h-5 text-[#2152cf] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                      )}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a96b8] mb-0.5 group-hover:text-[#2152cf] transition-colors">
                        {info.label}
                      </p>
                      <p className="text-[#1e2547] font-black text-sm sm:text-base">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Trust Note */}
            <div className="bg-[#122d78] border-2 border-[#2152cf]/30 border-b-[6px] border-b-[#0b1b47] rounded-2xl p-6 mt-2 text-white relative overflow-hidden shadow-lg hover:scale-[1.01] transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2152cf] opacity-25 blur-2xl rounded-full pointer-events-none" />
              <div className="flex gap-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-[#d9ff42] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#d9ff42]/30">
                  <CheckCircle className="w-5 h-5 text-[#122d78]" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[#d9ff42] font-black text-sm mb-1.5 uppercase tracking-wider">Sesi Konsultasi Gratis</h4>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                    Ngobrol santai seputar ide Anda. Kami bantu buatkan strategi dasar tanpa biaya atau komitmen apapun di awal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Modern Contact Form ── */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-slate-200 border-b-[8px] border-b-slate-300 rounded-[2rem] p-8 sm:p-10 lg:p-12 shadow-xl shadow-[#2152cf]/[0.02]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center gap-6 h-full min-h-[480px]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#d9ff42] blur-xl opacity-40 rounded-full" />
                    <div className="w-20 h-20 bg-[#d9ff42] text-[#122d78] rounded-full flex items-center justify-center relative shadow-md animate-bounce-slow">
                      <CheckCircle className="w-10 h-10 text-[#122d78]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#1e2547] mb-3">
                      Pesan Sedang Disiapkan!
                    </h3>
                    <p className="text-[#4f5b7d] text-base leading-relaxed max-w-sm mx-auto">
                      Anda akan diarahkan ke WhatsApp untuk mengirimkan pesan ini. Tim Kalana Labs siap merespons Anda.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-[#2152cf] text-sm font-semibold hover:text-[#1a3fa3] transition-colors mt-4"
                  >
                    Kirim pesan lainnya <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="border-b border-slate-100 pb-5">
                    <h3 className="text-xl font-bold text-[#1e2547] mb-1">Ceritakan Kebutuhan Anda</h3>
                    <p className="text-xs text-text-tertiary">Isi form di bawah ini dan kami akan segera menghubungi Anda via WhatsApp.</p>
                  </div>

                  {/* Service Selection (Pills) */}
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold text-[#1e2547] uppercase tracking-wider">
                      Layanan yang Dibutuhkan <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {SERVICE_OPTIONS.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setForm({ ...form, service: option })}
                          className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all duration-200 border-2 cursor-pointer ${
                            form.service === option
                              ? 'bg-[#2152cf] border-[#2152cf] border-b-[4px] border-b-[#0f245c] text-white shadow-md -translate-y-[1px]'
                              : 'bg-white border-slate-200 border-b-[4px] border-b-slate-300 text-[#4f5b7d] hover:text-[#1e2547] hover:border-[#2152cf] hover:border-b-[#1a3fa3] hover:-translate-y-[1px]'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Personal Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="text-xs font-bold text-[#1e2547] uppercase tracking-wider">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Cth: Budi Santoso"
                        className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-[#f8f9fc] text-[#1e2547] placeholder:text-[#8a96b8] text-sm focus:outline-none focus:border-[#2152cf] focus:ring-4 focus:ring-[#2152cf]/10 transition-all font-medium"
                      />
                    </div>
                    {/* WhatsApp */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-phone" className="text-xs font-bold text-[#1e2547] uppercase tracking-wider">
                        Nomor WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Cth: 08123456789"
                        className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-[#f8f9fc] text-[#1e2547] placeholder:text-[#8a96b8] text-sm focus:outline-none focus:border-[#2152cf] focus:ring-4 focus:ring-[#2152cf]/10 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="text-xs font-bold text-[#1e2547] uppercase tracking-wider">
                      Alamat Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Cth: budi@perusahaan.com"
                      className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-[#f8f9fc] text-[#1e2547] placeholder:text-[#8a96b8] text-sm focus:outline-none focus:border-[#2152cf] focus:ring-4 focus:ring-[#2152cf]/10 transition-all font-medium"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="text-xs font-bold text-[#1e2547] uppercase tracking-wider">
                      Detail Proyek <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Ceritakan gambaran singkat proyek Anda, tujuan yang ingin dicapai, dan estimasi waktu jika ada..."
                      className="w-full px-5 py-3.5 rounded-xl border-2 border-slate-200 bg-[#f8f9fc] text-[#1e2547] placeholder:text-[#8a96b8] text-sm focus:outline-none focus:border-[#2152cf] focus:ring-4 focus:ring-[#2152cf]/10 transition-all resize-none font-medium leading-relaxed"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!form.service}
                      className={`w-full flex items-center justify-center gap-2 font-black px-8 py-4 rounded-xl text-sm transition-all h-14 ${
                        form.service
                          ? 'bg-[#2152cf] text-white hover:bg-[#1a3fa3] border-2 border-[#2152cf] border-b-[5px] border-b-[#0f245c] shadow-lg shadow-[#2152cf]/25 cursor-pointer active:scale-95'
                          : 'bg-slate-100 border-2 border-slate-200 border-b-[4px] border-b-slate-300 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim via WhatsApp</span>
                    </button>
                    {!form.service && (
                      <p className="text-[10px] text-red-500 mt-2.5 font-medium">
                        * Silakan pilih Layanan yang Dibutuhkan terlebih dahulu
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
