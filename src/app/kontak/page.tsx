'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, CheckCircle2, ChevronDown, Sparkles, Send, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '@/components/ui/PageHeader'

const SERVICE_OPTIONS = ['UI/UX Design', 'Web Development', 'Mobile Apps', 'Lainnya']

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: 'Kirim Email',
    value: 'kalanalabs@gmail.com',
    href: 'mailto:kalanalabs@gmail.com',
    actionText: 'Tulis Email',
  },
  {
    icon: Phone,
    title: 'Mulai Chat WhatsApp',
    value: '+62 851 9681 1722',
    href: 'https://wa.me/6285196811722',
    actionText: 'Kirim Pesan',
  },
  {
    icon: MapPin,
    title: 'Kunjungi Lokasi',
    value: 'Purwokerto, Jawa Tengah',
    href: 'https://maps.google.com/?q=Purwokerto',
    actionText: 'Lihat Peta',
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
    window.open(`https://wa.me/6285196811722?text=${waMessage}`, '_blank')
    setSubmitted(true)
  }

  return (
    <main className="bg-surface">
      <PageHeader
        title="Hubungi"
        accentWord="Kami"
        description="Ada ide besar yang ingin diwujudkan atau pertanyaan mengenai layanan kami? Sampaikan pesan Anda, kami siap berkolaborasi."
      />

      {/* CONTACT CARDS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 md:mb-24">
            {CONTACT_CARDS.map((card, i) => {
              const CardIcon = card.icon
              return (
                <motion.a
                  key={i}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-5"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy-soft flex items-center justify-center text-navy shrink-0 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                    <CardIcon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-text-tertiary mb-0.5">{card.title}</p>
                    <p className="text-text-primary font-bold text-sm truncate mb-1">{card.value}</p>
                    <span className="text-xs font-bold text-navy group-hover:text-navy-dark transition-colors inline-flex items-center gap-1">
                      {card.actionText}
                      <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
                    </span>
                  </div>
                </motion.a>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT: Copy + Commitments */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary tracking-tight leading-tight">
                  Ceritakan Rencana Besar{' '}
                  <span className="font-script italic text-navy">Bisnis Anda</span>
                </h2>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  Kami percaya produk digital yang hebat berawal dari pemahaman mendalam tentang masalah yang ingin diselesaikan. Isi formulir konsultasi dan tim kami akan segera menghubungi Anda.
                </p>
              </div>

              <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
                <h4 className="text-sm font-bold text-text-primary border-b border-border pb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-navy" strokeWidth={1.5} />
                  Komitmen Pelayanan Kami
                </h4>
                <ul className="space-y-3.5">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent fill-navy shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <h5 className="text-xs font-bold text-text-primary mb-0.5">Waktu Respon Cepat</h5>
                      <p className="text-xs text-text-secondary leading-relaxed">Balasan via WhatsApp dalam waktu kurang dari 2 jam kerja.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent fill-navy shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <h5 className="text-xs font-bold text-text-primary mb-0.5">Estimasi Biaya Transparan</h5>
                      <p className="text-xs text-text-secondary leading-relaxed">Rincian biaya sesuai modul fitur tanpa markup siluman.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent fill-navy shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <h5 className="text-xs font-bold text-text-primary mb-0.5">Kerahasiaan Ide Terjamin</h5>
                      <p className="text-xs text-text-secondary leading-relaxed">Kami menghormati kerahasiaan konsep dengan opsional penandatanganan NDA.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface border border-border rounded-xl p-8 md:p-10 shadow-lg">
                {submitted ? (
                  <div className="text-center py-16 space-y-6">
                    <div className="w-20 h-20 bg-accent/20 text-navy rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-text-primary">Pesan Siap Dikirim!</h3>
                      <p className="text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
                        Anda akan diarahkan ke WhatsApp untuk mengirim detail konsultasi ini ke tim kami. Terimakasih!
                      </p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                      className="text-sm font-bold text-navy hover:text-navy-dark transition-colors"
                    >
                      Kirim Formulir Baru
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-border pb-5">
                      <h3 className="text-xl font-bold text-text-primary mb-1">Formulir Konsultasi Proyek</h3>
                      <p className="text-xs text-text-tertiary">Mohon isi detail di bawah ini agar kami dapat memetakan rencana proyek Anda.</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-primary uppercase tracking-widest block">Layanan yang Dibutuhkan *</label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICE_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setForm({ ...form, service: opt })}
                            className={`px-4 py-2.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                              form.service === opt
                                ? 'bg-navy border-navy text-white shadow-sm'
                                : 'bg-surface border-border text-text-secondary hover:border-navy/40 hover:text-text-primary'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[10px] font-black text-text-primary uppercase tracking-widest block">Nama Lengkap *</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Cth: Akmal Nugroho"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy-soft transition-all placeholder:text-text-muted"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-[10px] font-black text-text-primary uppercase tracking-widest block">Nomor WhatsApp *</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="Cth: 0851xxxxxxx"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy-soft transition-all placeholder:text-text-muted"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] font-black text-text-primary uppercase tracking-widest block">Alamat Email</label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Cth: akmal@perusahaan.com"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy-soft transition-all placeholder:text-text-muted"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-[10px] font-black text-text-primary uppercase tracking-widest block">Gambaran Rencana Proyek *</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Ceritakan singkat produk digital yang ingin Anda buat, target rilis, dan estimasi dana jika ada..."
                        className="w-full px-4 py-3 rounded-lg border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy-soft transition-all resize-none leading-relaxed placeholder:text-text-muted"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={!form.service}
                        className={`w-full flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg text-sm transition-all ${
                          form.service
                            ? 'bg-navy text-white hover:bg-navy-dark shadow-lg shadow-navy/10 cursor-pointer'
                            : 'bg-gray-100 text-text-tertiary cursor-not-allowed'
                        }`}
                      >
                        <Send className="w-4 h-4" strokeWidth={2} />
                        Kirim Formulir Konsultasi
                      </button>
                      {!form.service && (
                        <p className="text-[10px] text-red-500 mt-2 font-medium">Pilih layanan yang dibutuhkan terlebih dahulu.</p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-surface-alt border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary tracking-tight leading-tight">
              Pertanyaan Seputar Proses Kerja
            </h2>
            <p className="text-sm md:text-base text-text-secondary mt-4 leading-relaxed">
              Berikut rincian hal-hal mendasar yang sering ditanyakan oleh klien sebelum bekerja sama dengan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {CONTACT_FAQ.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="bg-surface border border-border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-md"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-sm font-bold text-text-primary leading-snug">
                      {faq.question}
                    </h4>
                    <span className={`w-6 h-6 rounded-lg bg-navy-soft text-navy flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-text-secondary leading-relaxed border-t border-border pt-4 mt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
