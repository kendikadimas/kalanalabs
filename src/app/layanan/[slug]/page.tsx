import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { 
  Laptop, 
  Building2, 
  ShoppingBag, 
  Database, 
  User, 
  Palette, 
  Smartphone,
  Check,
  ArrowLeft,
  CheckCircle2,
  HelpCircle
} from 'lucide-react'
import Button from '@/components/ui/Button'
import { SERVICES_DETAIL } from '@/lib/servicesData'
import { PRICING_CATEGORIES } from '@/lib/data'

interface PageProps {
  params: Promise<{ slug: string }>
}

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Laptop,
  Building2,
  ShoppingBag,
  Database,
  User,
  Palette,
  Smartphone
}

export function generateStaticParams() {
  return SERVICES_DETAIL.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES_DETAIL.find(s => s.id === slug)
  
  if (!service) {
    return {
      title: 'Layanan Tidak Ditemukan — Kalana Labs',
    }
  }

  return {
    title: `${service.title} — Layanan Profesional Kalana Labs`,
    description: service.subtitle,
    openGraph: {
      title: `${service.title} — Layanan Profesional Kalana Labs`,
      description: service.subtitle,
    }
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = SERVICES_DETAIL.find(s => s.id === slug)
  
  if (!service) {
    notFound()
  }

  const pricingCategory = PRICING_CATEGORIES.find(cat => cat.id === slug)
  const IconComponent = iconMap[service.iconName] || Laptop

  return (
    <main className="bg-[#f8f9fc] min-h-screen">
      {/* ── HERO SECTION ── */}
      <section 
        className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#0d1230]"
        style={{ background: 'linear-gradient(135deg, #0d1230 0%, #151d42 100%)' }} // Single tone gradient
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/layanan"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Semua Layanan
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#d9ff42] shrink-0">
              <IconComponent className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl mt-3 max-w-3xl leading-relaxed">
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEFINISI & DESKRIPSI LAYANAN ── */}
      <section className="py-16 md:py-20 bg-white border-b border-[#e4e8f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-bold text-[#1e2547] tracking-tight uppercase tracking-wider text-xs text-[#2152cf] mb-2">
                Deskripsi Layanan
              </h2>
              <h3 className="text-3xl font-extrabold text-[#1e2547] tracking-tight leading-tight">
                Apa itu {service.title}?
              </h3>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[#4f5b7d] text-base leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANFAAT BISNIS ── */}
      <section className="py-16 md:py-24 bg-[#f8f9fc] border-b border-[#e4e8f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#2152cf] uppercase tracking-widest block mb-3">Nilai Tambah</span>
            <h2 className="text-3xl font-extrabold text-[#1e2547] tracking-tight">
              Manfaat Utama Untuk Bisnis Anda
            </h2>
            <p className="text-sm text-[#4f5b7d] mt-2">
              Bagaimana layanan {service.title} kami dapat memberikan dampak nyata bagi performa bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#e4e8f2] rounded-2xl p-7 shadow-sm transition-all duration-200 hover:border-[#2152cf]/30 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2152cf]/5 flex items-center justify-center text-[#2152cf] mb-5">
                  <Check className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-[#1e2547] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#4f5b7d] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEGUNAAN & FITUR UTAMA ── */}
      <section className="py-16 md:py-24 bg-white border-b border-[#e4e8f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#2152cf] uppercase tracking-widest block mb-3">Implementasi & Fitur</span>
            <h2 className="text-3xl font-extrabold text-[#1e2547] tracking-tight">
              Kegunaan & Alur Fungsional
            </h2>
            <p className="text-sm text-[#4f5b7d] mt-2">
              Beberapa bentuk penerapan dan fitur utama yang akan ditanamkan ke dalam produk digital Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.useCases.map((useCase, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-2"
              >
                <div className="w-8 h-8 rounded-full bg-[#f1f3f9] flex items-center justify-center text-[#2152cf] shrink-0 font-bold text-sm mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e2547] mb-1.5">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-[#4f5b7d] leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COCOK UNTUK SIAPA (TARGET AUDIENCE) ── */}
      <section className="py-16 md:py-20 bg-[#f8f9fc] border-b border-[#e4e8f2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#e4e8f2] rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#1e2547] tracking-tight mb-6 text-center md:text-left">
              Apakah Layanan Ini Cocok Untuk Anda?
            </h2>
            <div className="space-y-4">
              {service.targetAudience.map((target, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#2152cf] shrink-0 mt-0.5" />
                  <p className="text-[#4f5b7d] text-sm leading-relaxed">{target}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAKET HARGA & INVESTASI (FLAT DESIGN) ── */}
      {pricingCategory && (
        <section className="py-16 md:py-24 bg-white border-b border-[#e4e8f2]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#2152cf] uppercase tracking-widest block mb-3">Rencana Investasi</span>
              <h2 className="text-3xl font-extrabold text-[#1e2547] tracking-tight">
                Pilihan Paket & Investasi
              </h2>
              <p className="text-sm text-[#4f5b7d] mt-2">
                Harga transparan tanpa biaya tambahan tersembunyi. Silakan pilih opsi paket yang paling sesuai dengan kapasitas bisnis Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {pricingCategory.packages.map((pkg, idx) => {
                // Style presets: Tier 1 & 3 are white/gray solid, Tier 2 is navy highlight (solid, no glassmorphism)
                const isFeatured = pkg.bestValue
                
                const cardStyle = isFeatured
                  ? 'bg-[#1e2547] border border-[#1e2547] text-white shadow-lg'
                  : 'bg-white border border-[#e4e8f2] text-[#1e2547] shadow-sm'
                
                const badgeStyle = isFeatured
                  ? 'bg-[#2152cf] text-white'
                  : 'bg-[#f1f3f9] text-[#4f5b7d]'

                const buttonStyle = isFeatured
                  ? 'bg-[#2152cf] text-white hover:bg-[#1a3fa3] border-[#2152cf]'
                  : 'border-[#1e2547] text-[#1e2547] hover:bg-[#1e2547] hover:text-white'

                const waMessage = encodeURIComponent(
                  `Halo Kalana Labs, saya tertarik dengan paket berikut:\n\n` +
                  `Layanan: ${pricingCategory.title}\n` +
                  `Paket: ${pkg.name}\n` +
                  `Harga: Rp ${pkg.price} ${pkg.suffix}\n\n` +
                  `Mohon info selengkapnya untuk memulai proyek ini.`
                )
                const waUrl = `https://wa.me/6285707736885?text=${waMessage}`

                return (
                  <div 
                    key={pkg.name}
                    className={`flex flex-col rounded-2xl p-7 relative transition-all duration-200 hover:-translate-y-1 ${cardStyle}`}
                  >
                    {isFeatured && (
                      <span className="absolute top-4 right-4 bg-[#d9ff42] text-[#1e2547] text-[8px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Populer
                      </span>
                    )}

                    <div className="mb-6">
                      <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${badgeStyle}`}>
                        Paket {pkg.name}
                      </span>
                      <p className={`text-xs mt-3 leading-relaxed ${isFeatured ? 'text-white/60' : 'text-[#8a96b8]'}`}>
                        {pkg.subtitle}
                      </p>
                      
                      <div className="mt-5 flex items-baseline gap-1">
                        <span className={`text-xs font-bold ${isFeatured ? 'text-white/50' : 'text-[#8a96b8]'}`}>Rp</span>
                        <span className="text-4xl font-black tracking-tight">{pkg.price}</span>
                        <span className={`text-xs font-semibold ${isFeatured ? 'text-white/50' : 'text-[#8a96b8]'}`}>{pkg.suffix}</span>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between border-t border-[#e4e8f2]/10 pt-6">
                      <ul className="space-y-3.5 mb-8">
                        {pkg.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isFeatured ? 'text-[#d9ff42]' : 'text-[#2152cf]'}`} strokeWidth={2.5} />
                            <span className={`text-xs leading-normal ${isFeatured ? 'text-white/80' : 'text-[#4f5b7d]'}`}>
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        href={waUrl}
                        variant="outline"
                        showArrow={false}
                        className={`w-full py-2.5 text-xs justify-center rounded-full ${buttonStyle}`}
                      >
                        Pilih Paket
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── KONSULTASI CALLOUT ── */}
      <section className="py-20 bg-[#f8f9fc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#1e2547] text-white rounded-3xl p-8 md:p-12 shadow-md relative overflow-hidden">
            <div className="relative space-y-5 z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Mulai Proyek {service.title} Anda Hari Ini
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Kami siap mendampingi Anda merancang dan membangun produk digital berkualitas tinggi yang dapat disesuaikan sepenuhnya dengan proses bisnis Anda. Konsultasikan kebutuhan Anda gratis tanpa dipungut biaya.
              </p>
              <div className="pt-4">
                <Button
                  href={`https://wa.me/6285707736885?text=${encodeURIComponent(service.waText)}`}
                  variant="accent"
                  size="lg"
                  className="rounded-full shadow-lg"
                >
                  Hubungi Kami via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
