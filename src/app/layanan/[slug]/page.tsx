import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
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
  Smartphone,
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
      title: 'Layanan Tidak Ditemukan - Kalana Labs',
    }
  }

  return {
    title: `Jasa ${service.title} Purwokerto | Kalana Labs`,
    description: `Jasa ${service.title.toLowerCase()} Purwokerto profesional oleh Kalana Labs. ${service.subtitle}. Konsultasi gratis hubungi kami sekarang.`,
    openGraph: {
      title: `Jasa ${service.title} Purwokerto | Kalana Labs`,
      description: `Jasa ${service.title.toLowerCase()} Purwokerto profesional oleh Kalana Labs. ${service.subtitle}.`,
      url: `https://kalanalabs.com/layanan/${slug}/`,
      locale: 'id_ID',
      type: 'website',
    },
    alternates: {
      canonical: `https://kalanalabs.com/layanan/${slug}/`,
    },
  }
}

const TIER_THEMES = [
  {
    card: 'bg-surface border border-border rounded-3xl',
    topBorder: 'border-b border-border',
    tierLabel: 'text-text-secondary',
    tierLabelBg: 'bg-[#f1f3f9]',
    nameColor: 'text-text-primary',
    priceColor: 'text-text-primary',
    priceSubColor: 'text-text-tertiary',
    benefitText: 'text-text-secondary',
    checkBg: 'bg-[#eef1ff]',
    checkTick: 'text-navy',
    buttonClass: 'border-[#1e2547] text-text-primary hover:bg-[#1e2547] hover:text-white',
    hoverShadow: 'hover:shadow-lg hover:shadow-[#2152cf]/8',
  },
  {
    card: 'bg-[#eef2ff] border-2 border-[#c7d3f8] rounded-3xl',
    topBorder: 'border-b border-[#c7d3f8]',
    tierLabel: 'text-navy',
    tierLabelBg: 'bg-[#dce5fc]',
    nameColor: 'text-text-primary',
    priceColor: 'text-text-primary',
    priceSubColor: 'text-[#6078d0]',
    benefitText: 'text-[#2d3a6b]',
    checkBg: 'bg-navy',
    checkTick: 'text-white',
    buttonClass: 'border-navy text-navy hover:bg-navy hover:text-white',
    hoverShadow: 'hover:shadow-xl hover:shadow-[#2152cf]/15',
  },
  {
    card: 'bg-[#1e2547] border border-[#1e2547] rounded-3xl',
    topBorder: 'border-b border-white/10',
    tierLabel: 'text-[#d9ff42]',
    tierLabelBg: 'bg-white/10',
    nameColor: 'text-white',
    priceColor: 'text-white',
    priceSubColor: 'text-white/50',
    benefitText: 'text-white/70',
    checkBg: 'bg-[#d9ff42]',
    checkTick: 'text-text-primary',
    buttonClass: 'border-white/30 text-white hover:bg-surface-elevated hover:text-text-primary',
    hoverShadow: 'hover:shadow-2xl hover:shadow-[#2152cf]/20',
  },
]

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = SERVICES_DETAIL.find(s => s.id === slug)

  if (!service) {
    notFound()
  }

  const pricingCategory = PRICING_CATEGORIES.find(cat => cat.id === slug)
  const IconComponent = iconMap[service.iconName] || Laptop

  return (
    <main className="bg-surface min-h-screen">
      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3060c2 0%, #2255b2 50%, #163898 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/10" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/8" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-navy opacity-20 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-24 md:pb-20">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Semua Layanan
          </Link>

          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#d9ff42] shrink-0">
              <IconComponent className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
                {service.title}
              </h1>
              <p className="text-white/75 text-lg md:text-xl mt-4 leading-relaxed">
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DESCRIPTION ─── */}
      <section className="py-16 md:py-24 lg:py-28 bg-surface-alt relative overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-navy/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight">
                Apa itu{' '}
                <span className="font-script italic text-navy">{service.title}</span>?
              </h2>
            </div>
            <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-sm">
              <p className="text-text-secondary text-base leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="py-16 md:py-24 lg:py-28 bg-surface relative overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#d9ff42]/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight">
              Manfaat Utama Untuk{' '}
              <span className="font-script italic text-navy">Bisnis Anda</span>
            </h2>
            <p className="text-text-secondary text-base mt-4 leading-relaxed">
              Bagaimana layanan {service.title} kami dapat memberikan dampak nyata bagi performa bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-surface-alt border border-border rounded-3xl p-8 hover:bg-surface-elevated hover:shadow-md hover:border-navy/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-navy/10 flex items-center justify-center text-navy mb-5">
                  <Check className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="py-16 md:py-24 lg:py-28 bg-surface-alt relative overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-navy/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-[#d9ff42]/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight">
                Kegunaan &{' '}
                <span className="font-script italic text-navy">Alur Fungsional</span>
              </h2>
              <p className="text-text-secondary text-base mt-4 leading-relaxed max-w-2xl mx-auto">
                Beberapa bentuk penerapan dan fitur utama yang akan ditanamkan ke dalam produk digital Anda.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-[#dce1f0]" aria-hidden />
              <div className="space-y-8">
                {service.useCases.map((useCase, idx) => (
                  <div key={idx} className="relative pl-14">
                    <div className="absolute left-3.5 top-0 w-3 h-3 rounded-full bg-navy border-2 border-white shadow-sm" />
                    <div className="bg-surface border border-border rounded-2xl p-6 hover:shadow-sm hover:border-navy/20 transition-all duration-300">
                      <h3 className="text-lg font-bold text-text-primary mb-1 tracking-tight">
                        {useCase.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TARGET AUDIENCE ─── */}
      <section className="py-16 md:py-20 lg:py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#d9ff42]/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface-alt border border-border rounded-3xl p-8 md:p-12">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mb-8 text-center">
                  Apakah Layanan Ini{' '}
                  <span className="font-script italic text-navy">Cocok</span> Untuk Anda?
                </h2>
                <div className="space-y-4">
                  {service.targetAudience.map((target, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 bg-surface border border-border rounded-2xl p-4">
                      <CheckCircle2 className="w-5 h-5 text-navy shrink-0 mt-0.5" strokeWidth={2} />
                      <p className="text-text-secondary text-sm leading-relaxed">{target}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      {pricingCategory && (
        <section className="py-16 md:py-24 lg:py-28 bg-surface-alt relative overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-navy/5 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight">
                Pilihan Paket &{' '}
                <span className="font-script italic text-navy">Harga</span>
              </h2>
              <p className="text-text-secondary text-base mt-4 max-w-2xl mx-auto">
                Harga transparan tanpa biaya tambahan tersembunyi. Pilih opsi paket yang paling sesuai dengan kapasitas bisnis Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
              {pricingCategory.packages.map((pkg, idx) => {
                const theme = TIER_THEMES[idx] ?? TIER_THEMES[2]

                const waMessage = encodeURIComponent(
                  `Halo Kalana Labs, saya tertarik dengan paket berikut:\n\n` +
                  `Layanan: ${pricingCategory.title}\n` +
                  `Paket: ${pkg.name}\n` +
                  `Harga: Rp ${pkg.price} ${pkg.suffix}\n\n` +
                  `Mohon info selengkapnya untuk memulai proyek ini.`
                )
                const waUrl = `https://wa.me/6285196811722?text=${waMessage}`

                return (
                  <div
                    key={pkg.name}
                    className={`flex flex-col relative transition-all duration-300 group ${theme.card} ${theme.hoverShadow}`}
                  >
                    {pkg.bestValue && (
                      <div className="absolute top-5 right-5 bg-[#d9ff42] text-text-primary text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow z-10">
                        Best Value
                      </div>
                    )}

                    <div className={`px-7 pt-8 pb-6 ${theme.topBorder}`}>
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 ${theme.tierLabel} ${theme.tierLabelBg}`}>
                        Tier {idx + 1}
                      </span>

                      <h4 className={`text-3xl font-black mb-1.5 ${theme.nameColor}`}>
                        {pkg.name}
                      </h4>
                      <p className={`text-xs leading-relaxed pr-10 ${theme.priceSubColor}`}>
                        {pkg.subtitle}
                      </p>

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

                    <div className="px-7 py-6 flex-1 flex flex-col">
                      <ul className="flex flex-col gap-3 mb-8 flex-1">
                        {pkg.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${theme.checkBg}`}>
                              <svg className={`w-2.5 h-2.5 ${theme.checkTick}`} width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
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
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ─── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0d1230 0%, #122070 60%, #0d1230 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-navy opacity-20 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-navy opacity-15 blur-[100px] translate-y-1/3" />
          <div className="absolute top-16 left-[30%] w-2 h-2 rounded-full bg-[#d9ff42]/50" />
          <div className="absolute top-32 left-[28%] w-1 h-1 rounded-full bg-[#d9ff42]/30" />
          <div className="absolute bottom-16 right-[35%] w-1.5 h-1.5 rounded-full bg-[#d9ff42]/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 md:py-24 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
                Mulai Proyek{' '}
                <span className="font-script italic text-[#d9ff42]">{service.title}</span>{' '}
                Anda Hari Ini
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
                Kami siap mendampingi Anda merancang dan membangun produk digital berkualitas tinggi yang dapat disesuaikan sepenuhnya dengan proses bisnis Anda. Konsultasikan kebutuhan Anda gratis tanpa dipungut biaya.
              </p>
              <div className="pt-2">
                <Button
                  href={`https://wa.me/6285196811722?text=${encodeURIComponent(service.waText)}`}
                  variant="accent"
                  size="lg"
                >
                  Konsultasi Gratis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
