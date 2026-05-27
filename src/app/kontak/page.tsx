'use client'

import { useState, type FormEvent } from 'react'
import PageHeader from '@/components/ui/PageHeader'
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'

const SERVICE_OPTIONS = [
  'UI/UX Design',
  'Web Development',
  'Mobile Apps',
  'Lainnya',
]

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: 'Kirim Email',
    value: 'kalanalabs@gmail.com',
    href: 'mailto:kalanalabs@gmail.com',
    actionText: 'Tulis Email',
    color: 'from-[#2152cf] to-[#122d78]'
  },
  {
    icon: Phone,
    title: 'Mulai Chat WhatsApp',
    value: '+62 857 0773 6885',
    href: 'https://wa.me/6285707736885',
    actionText: 'Kirim Pesan',
    color: 'from-[#10b981] to-[#064e3b]'
  },
  {
    icon: MapPin,
    title: 'Kunjungi Lokasi',
    value: 'Purwokerto, Jawa Tengah',
    href: 'https://maps.google.com/?q=Purwokerto',
    actionText: 'Lihat Peta',
    color: 'from-[#ec4899] to-[#831843]'
  }
]

const CONTACT_FAQ = [
  {
    question: 'Berapa lama respon setelah saya mengisi form?',
    answer: 'Kami berkomitmen untuk membalas pesan Anda dalam waktu kurang dari 2 jam selama jam kerja operasional (Senin - Sabtu, 09.00 - 18.00 WIB).'
  },
  {
    question: 'Apakah ada biaya untuk sesi konsultasi pertama?',
    answer: 'Tidak, sesi konsultasi awal berdurasi 30 menit sepenuhnya gratis dan bebas komitmen. Kami membantu Anda merinci kebutuhan teknis awal.'
  },
  {
    question: 'Apakah Kalana Labs menerima NDA (perjanjian kerahasiaan)?',
    answer: 'Tentu. Kami sangat menghargai ide bisnis Anda. Kami siap menandatangani NDA sebelum proses penulisan kode atau perancangan desain dimulai.'
  },
  {
    question: 'Bagaimana sistem pembayaran proyek di Kalana Labs?',
    answer: 'Umumnya kami menggunakan sistem termin: DP 50% di awal sebelum pengerjaan, dan pelunasan 50% setelah uji coba selesai dan disetujui.'
  }
]

export default function KontakPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const waMessage = encodeURIComponent(
      `Halo Kalana Labs, saya ingin mendiskusikan proyek baru:\n\n` +
      `*Nama:* ${form.name}\n` +
      `*Email:* ${form.email || '-'}\n` +
      `*WhatsApp:* ${form.phone}\n` +
      `*Layanan:* ${form.service}\n\n` +
      `*Detail Proyek:*\n${form.message}`
    )
    window.open(`https://wa.me/6285707736885?text=${waMessage}`, '_blank')
    setSubmitted(true)
  }

  return (
    <main className="bg-[#f8f9fc]">
      <PageHeader 
        title="Hubungi" 
        accentWord="Kami"
        description="Ada ide besar yang ingin diwujudkan atau pertanyaan mengenai layanan kami? Sampaikan pesan Anda, kami siap berkolaborasi." 
      />

      {/* ── SEKSI 1: DUA KOLOM INFORMASI KONTAK + FORM ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24">
            {CONTACT_CARDS.map((card, i) => {
              const CardIcon = card.icon
              return (
                <a
                  key={i}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#e4e8f2] rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-[#2152cf]/[0.02] hover:-translate-y-1.5 transition-all duration-300 group flex items-center gap-5"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <CardIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#8a96b8] mb-0.5">{card.title}</p>
                    <p className="text-[#1e2547] font-bold text-sm sm:text-base truncate mb-1">{card.value}</p>
                    <span className="text-xs font-semibold text-[#2152cf] group-hover:text-[#1a3fa3] transition-colors inline-flex items-center gap-1">
                      {card.actionText} →
                    </span>
                  </div>
                </a>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Commitments & Copy */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <div className="space-y-4">
                <span className="text-xs font-black text-[#2152cf] uppercase tracking-widest block">Konsultasi Terbuka</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2547] tracking-tight leading-tight">
                  Ceritakan Rencana Besar <span className="text-[#2152cf] font-script italic text-3xl md:text-4xl">Bisnis Anda</span>
                </h2>
                <p className="text-[#4f5b7d] text-base leading-relaxed">
                  Kami percaya produk digital yang hebat berawal dari pemahaman mendalam tentang masalah yang ingin diselesaikan. Isi formulir konsultasi dan tim kami akan segera menghubungi Anda.
                </p>
              </div>

              {/* Service commitment list */}
              <div className="bg-white border border-[#e4e8f2] rounded-3xl p-6 space-y-5">
                <h4 className="text-sm font-bold text-[#1e2547] border-b border-[#e4e8f2] pb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#2152cf]" />
                  Komitmen Pelayanan Kami:
                </h4>
                <ul className="space-y-3.5">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#d9ff42] fill-[#2152cf] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-[#1e2547] mb-0.5">Waktu Respon Cepat</h5>
                      <p className="text-xs text-[#4f5b7d] leading-relaxed">Balasan via WhatsApp/Email dalam waktu kurang dari 2 jam kerja.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#d9ff42] fill-[#2152cf] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-[#1e2547] mb-0.5">Estimasi Biaya Transparan</h5>
                      <p className="text-xs text-[#4f5b7d] leading-relaxed">Rincian biaya sesuai modul fitur tanpa ada markup siluman.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#d9ff42] fill-[#2152cf] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-[#1e2547] mb-0.5">Kerahasiaan Ide Terjamin</h5>
                      <p className="text-xs text-[#4f5b7d] leading-relaxed">Kami menghormati kerahasiaan konsep dengan opsional penandatanganan NDA.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Modern Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#e4e8f2] rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-[#2152cf]/[0.01]">
                {submitted ? (
                  <div className="text-center py-16 space-y-6">
                    <div className="w-20 h-20 bg-[#d9ff42]/20 text-[#2152cf] rounded-full flex items-center justify-center mx-auto animate-bounce-slow">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-[#1e2547]">Pesan Siap Dikirim!</h3>
                      <p className="text-sm text-[#4f5b7d] max-w-sm mx-auto leading-relaxed">
                        Anda akan diarahkan ke WhatsApp untuk mengirim detail konsultasi ini ke tim kami. Terimakasih!
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-bold text-[#2152cf] hover:text-[#1a3fa3] transition-colors"
                    >
                      Kirim Formulir Baru
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-[#e4e8f2] pb-5">
                      <h3 className="text-xl font-bold text-[#1e2547] mb-1">Formulir Konsultasi Proyek</h3>
                      <p className="text-xs text-[#4f5b7d]">Mohon isi detail di bawah ini agar kami dapat memetakan rencana proyek Anda.</p>
                    </div>

                    {/* Layanan pills */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#1e2547] uppercase tracking-wider block">Layanan yang Dibutuhkan *</label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICE_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setForm({ ...form, service: opt })}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                              form.service === opt
                                ? 'bg-[#2152cf] border-[#2152cf] text-white shadow-md'
                                : 'bg-white border-[#e4e8f2] text-[#4f5b7d] hover:border-[#2152cf]'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Nama */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold text-[#1e2547] uppercase tracking-wider block">Nama Lengkap *</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Cth: Akmal Nugroho"
                          className="w-full px-4 py-3 rounded-xl border border-[#e4e8f2] bg-[#f8f9fc] text-[#1e2547] text-sm focus:outline-none focus:border-[#2152cf] focus:ring-2 focus:ring-[#2152cf]/10 transition-all"
                        />
                      </div>
                      
                      {/* WhatsApp */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-xs font-bold text-[#1e2547] uppercase tracking-wider block">Nomor WhatsApp *</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="Cth: 0857xxxxxxx"
                          className="w-full px-4 py-3 rounded-xl border border-[#e4e8f2] bg-[#f8f9fc] text-[#1e2547] text-sm focus:outline-none focus:border-[#2152cf] focus:ring-2 focus:ring-[#2152cf]/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-[#1e2547] uppercase tracking-wider block">Alamat Email</label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Cth: akmal@perusahaan.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#e4e8f2] bg-[#f8f9fc] text-[#1e2547] text-sm focus:outline-none focus:border-[#2152cf] focus:ring-2 focus:ring-[#2152cf]/10 transition-all"
                      />
                    </div>

                    {/* Pesan detail */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-[#1e2547] uppercase tracking-wider block">Gambaran Rencana Proyek *</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Ceritakan singkat produk digital yang ingin Anda buat, target rilis, dan estimasi dana jika ada..."
                        className="w-full px-4 py-3 rounded-xl border border-[#e4e8f2] bg-[#f8f9fc] text-[#1e2547] text-sm focus:outline-none focus:border-[#2152cf] focus:ring-2 focus:ring-[#2152cf]/10 transition-all resize-none leading-relaxed"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full justify-center rounded-2xl h-14 bg-[#2152cf] hover:bg-[#1a3fa3] text-white"
                        disabled={!form.service}
                      >
                        Kirim Formulir Konsultasi
                      </Button>
                      {!form.service && (
                        <p className="text-xs text-red-500 mt-2 font-medium">* Mohon pilih Layanan yang Dibutuhkan di bagian atas formulir.</p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SEKSI 2: CURATED FAQ GRID (TAMPILAN KOLOM GANDA) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black text-[#2152cf] uppercase tracking-widest block mb-4">Butuh Penjelasan?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2547] tracking-tight">
              Pertanyaan Seputar Proses Kerja
            </h2>
            <p className="text-sm text-[#4f5b7d] mt-3 leading-relaxed">
              Berikut rincian hal-hal mendasar yang sering ditanyakan oleh klien sebelum bekerja sama dengan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONTACT_FAQ.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div 
                  key={idx}
                  className="bg-[#f8f9fc] border border-[#e4e8f2] rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:border-[#2152cf]/30"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-base font-bold text-[#1e2547] leading-snug">
                      {faq.question}
                    </h4>
                    <span className={`w-6 h-6 rounded-full bg-[#eef1ff] text-[#2152cf] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-[#4f5b7d] leading-relaxed border-t border-[#e4e8f2] pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

