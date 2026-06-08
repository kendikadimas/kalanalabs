'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Smartphone,
  Palette,
  CheckCircle2,
  Zap,
  Target,
  HeartHandshake,
  Monitor,
  Building2,
  ShoppingBag,
  Database,
  User,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Bell,
  Home,
  MapPin,
  Settings,
  Star,
  Gem,
  Rocket,
  Laptop,
  MessageSquare,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import Link from 'next/link'
import { PRICING_CATEGORIES } from '@/lib/data'
import PageHeader from '@/components/ui/PageHeader'

const webSubcategories = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    // tag: 'Konversi Tinggi',
    description: 'Halaman web tunggal kustom yang dirancang khusus untuk memaksimalkan hasil iklan berbayar (Google/Meta/TikTok Ads) dan memfokuskan tindakan pengunjung untuk membeli atau mendaftar.',
    techs: ['HTML/CSS', 'Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Desain responsif & ringan (mobile-first)',
      'Optimasi SEO On-Page tingkat dasar',
      'Integrasi tombol chat & form WhatsApp CTA',
      'Integrasi tracking pixel iklan (Facebook/TikTok/Google)',
      'Kecepatan loading optimal (Core Web Vitals)'
    ],
    priceRange: 'Mulai dari Rp 399.000',
    waText: 'Halo Kalana Labs, saya ingin mendiskusikan pembuatan Landing Page.',
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    // tag: 'Identitas Profesional',
    description: 'Website resmi representatif untuk menampilkan visi, misi, sejarah, katalog layanan, dan portofolio terbaik perusahaan Anda guna meningkatkan kredibilitas di mata klien.',
    techs: ['Next.js', 'React', 'Tailwind CSS', 'Sanity / Decap CMS', 'SEO Tools'],
    features: [
      'Hingga 5-25 halaman profil terstruktur',
      'Sistem blog artikel / berita dengan CMS',
      'Desain premium interaktif sesuai branding',
      'Integrasi Google Maps & formulir kontak',
      'Panduan lengkap pengelolaan website'
    ],
    priceRange: 'Mulai dari Rp 1.299.000',
    waText: 'Halo Kalana Labs, saya ingin mendiskusikan pembuatan Website Company Profile.',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    // tag: 'Toko Online Mandiri',
    description: 'Toko online lengkap untuk brand Anda tanpa potongan komisi. Dilengkapi katalog, sistem keranjang belanja, kalkulasi ongkos kirim otomatis, dan payment gateway otomatis.',
    techs: ['Next.js', 'Node.js', 'PostgreSQL', 'Midtrans / Xendit', 'RajaOngkir'],
    features: [
      'Input & manajemen stok produk real-time',
      'Integrasi Payment Gateway (virtual account, e-wallet, dll)',
      'Kalkulasi ongkos kirim otomatis (JNE, J&T, POS)',
      'Dashboard laporan penjualan terintegrasi',
      'Sistem promo, diskon, & voucher belanja kustom'
    ],
    priceRange: 'Mulai dari Rp 1.999.000',
    waText: 'Halo Kalana Labs, saya ingin mendiskusikan pembuatan Toko Online / E-Commerce.',
  },
  {
    id: 'sistem-informasi',
    title: 'Sistem Informasi',
    // tag: 'Efisiensi Operasional',
    description: 'Aplikasi dashboard web kustom untuk mengotomatiskan alur kerja internal Anda seperti inventaris barang, reservasi/booking, manajemen SDM, dan database terpusat.',
    techs: ['Laravel / Node.js', 'React', 'Next.js', 'PostgreSQL', 'REST API'],
    features: [
      'Sistem manajemen database kustom (CRUD)',
      'Multi-role user access management (RBAC)',
      'Dashboard statistik data visual interaktif',
      'Ekspor laporan instan format PDF & Excel',
      'Integrasi notifikasi email & WhatsApp API kustom'
    ],
    priceRange: 'Mulai dari Rp 1.999.000',
    waText: 'Halo Kalana Labs, saya ingin mendiskusikan pembuatan Sistem Informasi internal.',
  },
  {
    id: 'website-portofolio',
    title: 'Website Portofolio',
    // tag: 'Personal Branding',
    description: 'Galeri karya digital pribadi untuk freelancer, seniman, desainer, atau tenaga ahli guna menampilkan karya terbaik, CV interaktif, dan memperkuat personal branding Anda.',
    techs: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma'],
    features: [
      'Desain kustom visual portfolio modern & estetik',
      'CV / Resume interaktif siap download',
      'Galeri proyek/karya dengan filter dinamis',
      'Integrasi link media sosial & formulir kontak',
      'Domain pribadi (.com / .my.id) 1 tahun'
    ],
    priceRange: 'Mulai dari Rp 299.000',
    waText: 'Halo Kalana Labs, saya ingin mendiskusikan pembuatan Website Portofolio.',
  }
]

const reasons = [
  {
    icon: Zap,
    title: 'Bukan Template Murahan',
    description: 'Setiap baris kode dan komponen UI kami rancang secara kustom untuk bisnis Anda. Menghasilkan produk digital yang cepat, aman, dan berdaya saing tinggi.'
  },
  {
    icon: Target,
    title: 'Berorientasi Hasil & Konversi',
    description: 'Kami merancang arsitektur produk dengan berfokus pada tujuan bisnis Anda, baik untuk menaikkan konversi penjualan, leads, maupun efisiensi internal.'
  },
  {
    icon: HeartHandshake,
    title: 'Dukungan Pasca-Launch',
    description: 'Kami memberikan masa pemeliharaan gratis pasca-rilis untuk memastikan produk digital Anda selalu berjalan optimal dan aman.'
  }
]

// Calculator Data Options
const calculatorBaseServices = [
  { id: 'landing-page', name: 'Landing Page', price: 399000, days: 3, icon: Monitor },
  { id: 'company-profile', name: 'Company Profile', price: 1299000, days: 7, icon: Building2 },
  { id: 'ecommerce', name: 'E-Commerce', price: 1999000, days: 14, icon: ShoppingBag },
  { id: 'sistem-informasi', name: 'Sistem Informasi', price: 1999000, days: 21, icon: Database },
  { id: 'website-portofolio', name: 'Website Portofolio', price: 299000, days: 3, icon: User },
  { id: 'ui-ux-design', name: 'Desain UI/UX', price: 1499000, days: 7, icon: Palette },
  { id: 'mobile-app', name: 'Aplikasi Mobile', price: 9999000, days: 30, icon: Smartphone },
]

const calculatorAddons = [
  // Landing Page
  { id: 'seo-audit', name: 'SEO Advanced Setup & Audit', price: 350000, days: 2, compatibleWith: ['landing-page', 'company-profile', 'ecommerce', 'sistem-informasi', 'website-portofolio'] },
  { id: 'whatsapp-api', name: 'Notifikasi WhatsApp API Kustom', price: 500000, days: 2, compatibleWith: ['landing-page', 'company-profile', 'ecommerce', 'sistem-informasi', 'mobile-app'] },
  { id: 'multi-language', name: 'Dukungan Multi-Bahasa (i18n)', price: 750000, days: 3, compatibleWith: ['landing-page', 'company-profile', 'ecommerce', 'sistem-informasi', 'website-portofolio', 'mobile-app'] },
  { id: 'cms', name: 'Custom CMS (Decap / Sanity CMS)', price: 600000, days: 3, compatibleWith: ['landing-page', 'company-profile', 'website-portofolio'] },
  { id: 'ab-testing', name: 'A/B Testing & Conversion Optimization', price: 450000, days: 2, compatibleWith: ['landing-page'] },
  { id: 'form-integration', name: 'Integrasi Form & Lead Capture', price: 250000, days: 1, compatibleWith: ['landing-page', 'company-profile', 'website-portofolio'] },

  // E-Commerce
  { id: 'payment-gateway', name: 'Payment Gateway (Midtrans/Xendit)', price: 800000, days: 2, compatibleWith: ['ecommerce'] },
  { id: 'rajaongkir', name: 'RajaOngkir (Kalkulasi Ongkir Otomatis)', price: 400000, days: 1, compatibleWith: ['ecommerce'] },
  { id: 'analytics-dashboard', name: 'Dashboard Analitik & Laporan Penjualan', price: 500000, days: 2, compatibleWith: ['ecommerce', 'sistem-informasi'] },

  // Sistem Informasi
  { id: 'booking-system', name: 'Sistem Reservasi / Booking Online', price: 700000, days: 3, compatibleWith: ['company-profile', 'sistem-informasi'] },
  { id: 'export-laporan', name: 'Ekspor Laporan PDF & Excel', price: 350000, days: 2, compatibleWith: ['sistem-informasi', 'ecommerce'] },

  // Company Profile
  { id: 'google-maps', name: 'Integrasi Google Maps Multi-Lokasi', price: 200000, days: 1, compatibleWith: ['company-profile'] },
  { id: 'blog-system', name: 'Sistem Blog / Berita Terpadu', price: 400000, days: 2, compatibleWith: ['company-profile'] },

  // Mobile App
  { id: 'store-upload', name: 'Bantuan Publish Play Store & App Store', price: 1500000, days: 5, compatibleWith: ['mobile-app'] },
  { id: 'push-notification', name: 'Push Notification & In-App Alert', price: 600000, days: 2, compatibleWith: ['mobile-app'] },
  { id: 'crash-analytics', name: 'Crash Reporting & Performance Monitor', price: 400000, days: 2, compatibleWith: ['mobile-app'] },

  // UI/UX
  { id: 'prototype-interactive', name: 'Prototype Interaktif Figma (Clickable)', price: 500000, days: 2, compatibleWith: ['ui-ux-design'] },
  { id: 'user-testing', name: 'Sesi Usability Testing & Report', price: 800000, days: 3, compatibleWith: ['ui-ux-design'] },
  { id: 'design-system-doc', name: 'Design System Documentation', price: 400000, days: 2, compatibleWith: ['ui-ux-design'] },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const cardThemes: Record<string, {
  cardClass: string
  textColor: string
  subtextColor: string
  titleColor: string
  priceColor: string
  techBadgeClass: string
  dividerClass: string
  innerPanelClass: string
  checkIconClass: string
  checkBgClass: string
  buttonPrimaryVariant: 'primary' | 'outline' | 'accent'
  buttonPrimaryClass: string
  buttonOutlineVariant: 'primary' | 'outline' | 'accent'
  buttonOutlineClass: string
}> = {
  'landing-page': {
    cardClass: 'bg-[#d9ff42] border-2 border-[#b4d622] border-b-[8px] border-b-[#8da61b] text-[#0d1230]',
    textColor: 'text-[#0d1230]/80',
    subtextColor: 'text-[#0d1230]/60',
    titleColor: 'text-[#0d1230]',
    priceColor: 'text-[#122d78]',
    techBadgeClass: 'text-[#122d78] bg-[#122d78]/10 border border-[#122d78]/25',
    dividerClass: 'border-[#0d1230]/10',
    innerPanelClass: 'bg-white/30 border border-[#0d1230]/15',
    checkIconClass: 'text-[#122d78]',
    checkBgClass: 'bg-[#122d78]/10',
    buttonPrimaryVariant: 'primary',
    buttonPrimaryClass: 'bg-[#0d1230] text-[#d9ff42] hover:bg-[#1e2547] border-[#0d1230]',
    buttonOutlineVariant: 'outline',
    buttonOutlineClass: 'border-[#0d1230] text-[#0d1230] hover:bg-[#0d1230] hover:text-[#d9ff42]',
  },
  'company-profile': {
    cardClass: 'bg-[#122d78] border-2 border-[#2152cf]/30 border-b-[8px] border-b-[#0b1b47] text-white',
    textColor: 'text-white/80',
    subtextColor: 'text-white/60',
    titleColor: 'text-white',
    priceColor: 'text-[#d9ff42]',
    techBadgeClass: 'text-[#d9ff42] bg-[#d9ff42]/10 border border-[#d9ff42]/20',
    dividerClass: 'border-white/10',
    innerPanelClass: 'bg-white/10 border border-white/15',
    checkIconClass: 'text-[#d9ff42]',
    checkBgClass: 'bg-[#d9ff42]/15',
    buttonPrimaryVariant: 'accent',
    buttonPrimaryClass: '',
    buttonOutlineVariant: 'outline',
    buttonOutlineClass: 'border-white text-white hover:bg-white hover:text-[#122d78] hover:border-white',
  },
  'ecommerce': {
    cardClass: 'bg-white border-2 border-slate-200 border-b-[8px] border-b-slate-300 text-text-primary',
    textColor: 'text-text-secondary',
    subtextColor: 'text-text-tertiary',
    titleColor: 'text-text-primary',
    priceColor: 'text-navy',
    techBadgeClass: 'text-navy bg-navy/5 border border-navy/15',
    dividerClass: 'border-border/60',
    innerPanelClass: 'bg-surface-alt border border-border/80',
    checkIconClass: 'text-navy',
    checkBgClass: 'bg-navy/5',
    buttonPrimaryVariant: 'primary',
    buttonPrimaryClass: '',
    buttonOutlineVariant: 'outline',
    buttonOutlineClass: 'border-[#0d1230] text-[#0d1230] hover:bg-[#0d1230] hover:text-white',
  },
  'sistem-informasi': {
    cardClass: 'bg-[#2152cf] border-2 border-[#2152cf]/40 border-b-[8px] border-b-[#143282] text-white',
    textColor: 'text-white/80',
    subtextColor: 'text-white/60',
    titleColor: 'text-white',
    priceColor: 'text-[#d9ff42]',
    techBadgeClass: 'text-[#d9ff42] bg-[#d9ff42]/10 border border-[#d9ff42]/20',
    dividerClass: 'border-white/10',
    innerPanelClass: 'bg-white/10 border border-white/15',
    checkIconClass: 'text-[#d9ff42]',
    checkBgClass: 'bg-[#d9ff42]/15',
    buttonPrimaryVariant: 'accent',
    buttonPrimaryClass: '',
    buttonOutlineVariant: 'outline',
    buttonOutlineClass: 'border-white text-white hover:bg-white hover:text-[#2152cf] hover:border-white',
  },
  'website-portofolio': {
    cardClass: 'bg-white border-2 border-slate-200 border-b-[8px] border-b-slate-300 text-text-primary',
    textColor: 'text-text-secondary',
    subtextColor: 'text-text-tertiary',
    titleColor: 'text-text-primary',
    priceColor: 'text-[#2152cf]',
    techBadgeClass: 'text-navy bg-navy/5 border border-navy/15',
    dividerClass: 'border-border/60',
    innerPanelClass: 'bg-surface-alt border border-border/80',
    checkIconClass: 'text-[#2152cf]',
    checkBgClass: 'bg-navy/5',
    buttonPrimaryVariant: 'primary',
    buttonPrimaryClass: '',
    buttonOutlineVariant: 'outline',
    buttonOutlineClass: 'border-[#0d1230] text-[#0d1230] hover:bg-[#0d1230] hover:text-white',
  },
}

const plannerTierThemes = [
  {
    // Tier 1 — Solid White 3D
    selected: 'bg-white border-2 border-slate-200 border-b-[6px] border-b-slate-300 text-text-primary shadow-md -translate-y-[2px]',
    unselected: 'bg-white border border-slate-200 hover:border-slate-300 text-text-secondary opacity-80 hover:opacity-100 hover:-translate-y-[1px] shadow-sm',
    nameColor: 'text-slate-900',
    priceColor: 'text-[#2152cf]',
    checkTick: 'text-[#2152cf]',
    checkBg: 'bg-[#2152cf]/10',
    divider: 'border-slate-100',
    benefitText: 'text-slate-600',
  },
  {
    // Tier 2 — Solid Neon Green 3D (Best Value)
    selected: 'bg-[#d9ff42] border-2 border-[#b4d622] border-b-[6px] border-b-[#8da61b] text-[#0d1230] shadow-lg -translate-y-[2px]',
    unselected: 'bg-white border border-slate-200 hover:border-slate-300 text-text-secondary opacity-80 hover:opacity-100 hover:-translate-y-[1px] shadow-sm',
    nameColor: 'text-[#0d1230]',
    priceColor: 'text-[#122d78]',
    checkTick: 'text-[#d9ff42]',
    checkBg: 'bg-[#0d1230]',
    divider: 'border-[#b4d622]/40',
    benefitText: 'text-[#0d1230]/85',
  },
  {
    // Tier 3 — Solid Deep Navy 3D
    selected: 'bg-[#122d78] border-2 border-[#2152cf]/30 border-b-[6px] border-b-[#0b1b47] text-white shadow-lg -translate-y-[2px]',
    unselected: 'bg-white border border-slate-200 hover:border-slate-300 text-text-secondary opacity-80 hover:opacity-100 hover:-translate-y-[1px] shadow-sm',
    nameColor: 'text-white',
    priceColor: 'text-[#d9ff42]',
    checkTick: 'text-[#0d1230]',
    checkBg: 'bg-[#d9ff42]',
    divider: 'border-white/10',
    benefitText: 'text-white/70',
  },
]

export default function LayananPage() {
  // Navigation active tab
  const [activeWebTab, setActiveWebTab] = useState('landing-page')
  const activeWeb = webSubcategories.find(sub => sub.id === activeWebTab) || webSubcategories[0]
  const theme = cardThemes['company-profile']

  // Mobile App active feature preview state
  const [mobileActiveTab, setMobileActiveTab] = useState<'feed' | 'notification' | 'map' | 'store' | 'status'>('feed')

  // Calculator states
  const [calcBaseId, setCalcBaseId] = useState('landing-page')
  const [calcPackageIdx, setCalcPackageIdx] = useState(0)
  const [calcAddons, setCalcAddons] = useState<string[]>([])

  // FAQ state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0)

  // Parse package price from PRICING_CATEGORIES format to number
  const parseTierPrice = (price: string, suffix: string): number => {
    const num = parseInt(price.replace(/\./g, ''), 10)
    if (suffix === 'ribu' || suffix === 'k') return num * 1000
    if (suffix === 'juta' || suffix === 'jt') return num * 1000000
    return num
  }



  // Find selected base service & matching pricing category
  const selectedBase = calculatorBaseServices.find(s => s.id === calcBaseId) || calculatorBaseServices[0]
  const pricingCategory = PRICING_CATEGORIES.find(c => c.id === calcBaseId)
  const selectedPkg = pricingCategory?.packages[calcPackageIdx] ?? null
  // Use package tier price if available, otherwise fall back to hardcoded base price
  const effectiveBasePrice = selectedPkg ? parseTierPrice(selectedPkg.price, selectedPkg.suffix) : selectedBase.price

  const relevantAddons = calculatorAddons.filter(a => a.compatibleWith.includes(calcBaseId))
  const selectedAddons = calculatorAddons.filter(a => calcAddons.includes(a.id) && a.compatibleWith.includes(calcBaseId))
  
  const totalCost = effectiveBasePrice + selectedAddons.reduce((acc, a) => acc + a.price, 0)
  const totalDays = selectedBase.days + selectedAddons.reduce((acc, a) => acc + a.days, 0)

  const handleToggleAddon = (addonId: string) => {
    if (calcAddons.includes(addonId)) {
      setCalcAddons(calcAddons.filter(id => id !== addonId))
    } else {
      setCalcAddons([...calcAddons, addonId])
    }
  }

  // Generate dynamic WhatsApp URL
  const formatWhatsAppUrl = () => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    })
    
    let text = `Halo Kalana Labs, saya tertarik untuk mendiskusikan rencana proyek teknologi berikut:\n\n`
    text += `*Layanan:* ${selectedBase.name}\n`
    if (selectedPkg) {
      text += `*Paket:* ${selectedPkg.name} (${formatter.format(effectiveBasePrice)})\n`
    } else {
      text += `*Estimasi Awal:* (${formatter.format(effectiveBasePrice)})\n`
    }
    
    if (selectedAddons.length > 0) {
      text += `*Fitur Tambahan (Add-ons):*\n`
      selectedAddons.forEach(a => {
        text += `- ${a.name} (${formatter.format(a.price)})\n`
      })
    }
    
    text += `\n*Estimasi Total Investasi:* ${formatter.format(totalCost)}\n`
    text += `*Estimasi Waktu Kerja:* ~${totalDays} Hari Kerja\n\n`
    text += `Mohon bantu analisis dan jadwalkan sesi konsultasi gratis. Terima kasih!`

    return `https://wa.me/6285196811722?text=${encodeURIComponent(text)}`
  }

  return (
    <main className="bg-surface min-h-screen text-text-primary">
      <PageHeader
        title="Solusi &"
        accentWord="Layanan"
        description="Landing page, aplikasi mobile, hingga UI/UX — kami wujudkan ekosistem digital terintegrasi untuk mempercepat pertumbuhan bisnis Anda."
      />
      {/* ─── PEMBUATAN WEBSITE & SISTEM INFORMASI ─── */}
      <section id="layanan-web" className="py-16 md:py-24 bg-surface relative overflow-hidden border-b border-border">
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-navy/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          <div className="mb-8 max-w-3xl">
            <SectionHeading
              title="Pembuatan Website & "
              titleHighlight="Sistem Informasi"
              subtitle="Pilih kategori di bawah untuk melihat detail lengkap layanan, fitur, dan teknologi yang digunakan."
            />
          </div>

          {/* Tab Selector with premium horizontal overflow scroll on mobile */}
          <div className="w-full overflow-x-auto flex-nowrap scrollbar-none -mx-6 px-6 mb-8">
            <div className="bg-surface-alt border border-border rounded-xl p-1 inline-flex flex-row md:flex-wrap gap-1 shadow-sm animate-fade-in">
              {webSubcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveWebTab(sub.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-all duration-200 ${
                    activeWebTab === sub.id
                      ? 'bg-navy text-white shadow-sm'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
                  }`}
                >
                  {sub.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Service Detail - Premium Unified Card Layout */}
          <motion.div
            key={activeWeb.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl p-6 md:p-8 lg:p-10 shadow-[0_25px_60px_-15px_rgba(11,27,71,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] relative overflow-hidden bg-[#122d78] border-2 border-[#2152cf]/30 border-b-[8px] border-b-[#0b1b47]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative z-10">
              {/* LEFT: Service Info */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 rounded-full bg-[#d9ff42] shrink-0" />
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{activeWeb.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed pl-4.5">
                    {activeWeb.description}
                  </p>
                </div>

                {/* Pricing & Budget Sim Panel (Solid Medium Navy Card) */}
                <div className="bg-[#1e3480] border border-[#2d4cb0] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]">
                  <div className="space-y-1">
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block font-bold">Investasi Mulai Dari</span>
                    <span className="text-2xl font-black text-[#d9ff42]">{activeWeb.priceRange.replace('Mulai dari ', '')}</span>
                  </div>
                  <div className="flex flex-col items-start sm:items-end justify-center space-y-1.5">
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block font-bold">Simulasi Biaya & Kustomisasi</span>
                    <a
                      href="#kalkulator-anggaran"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('kalkulator-anggaran')?.scrollIntoView({ behavior: 'smooth' })
                        setCalcBaseId(activeWeb.id)
                      }}
                      className="inline-flex items-center gap-1.5 text-[10px] font-black text-[#d9ff42] hover:text-[#c4e63b] transition-colors uppercase tracking-wider group bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-[#d9ff42]/20 hover:border-[#d9ff42]/40"
                    >
                      <span>Detail Simulasi</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-white/10">
                  <Button
                    href={`https://wa.me/6285196811722?text=${encodeURIComponent(activeWeb.waText)}`}
                    variant="accent"
                    className="flex-1 justify-center py-3 rounded-xl text-xs shadow-md"
                  >
                    Mulai Diskusi Proyek
                  </Button>
                  <Button
                    href={`/layanan/${activeWeb.id}`}
                    variant="outline"
                    className="justify-center py-3 rounded-xl text-xs font-bold border-white text-white hover:bg-white hover:text-[#122d78] hover:border-white"
                  >
                    Detail Halaman Layanan
                  </Button>
                </div>
              </div>

              {/* RIGHT: Features Card (Solid Medium Navy Card) */}
              <div className="lg:col-span-5">
                <div className="bg-[#1e3480] border border-[#2d4cb0] rounded-2xl p-6 flex flex-col justify-between h-full shadow-[0_8px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2.5 pb-4 border-b border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-[#d9ff42] shrink-0" strokeWidth={1.5} />
                      <div>
                        <h4 className="text-xs font-bold text-white tracking-tight">Fitur & Layanan Standar</h4>
                        <p className="text-[9px] text-white/40">Sudah termasuk dalam paket investasi</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {activeWeb.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#d9ff42]/10 flex items-center justify-center text-[#d9ff42] shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" strokeWidth={3} />
                          </div>
                          <span className="text-xs text-white/80 leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── DESAIN UI/UX SECTION ─── */}
      <section id="layanan-uiux" className="py-20 md:py-28 bg-surface-alt relative overflow-hidden border-b border-border">
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-navy/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight leading-tight">
                Riset & Desain{' '}
                <span className="font-script text-navy italic text-4xl md:text-5xl lg:text-6xl inline-block select-none">UI/UX</span>
              </h2>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-xl">
                Desain yang baik berawal dari pemahaman mendalam terhadap pengguna. Kami merancang kerangka kerja dan gaya antarmuka visual (Figma) dengan performa retensi tinggi.
              </p>
            </div>
            
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <Button href="/layanan/ui-ux-design" variant="outline" size="lg" className="border-navy text-navy bg-white hover:bg-navy hover:text-white">
                Detail Layanan UI/UX
              </Button>
            </div>
          </div>

          {/* UI/UX Process Steps - Asymmetric 2-col layout (taste-skill compliant) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 animate-fade-in">

            {/* Step 1: Riset & Analisis - Wide card, solid Navy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0 }}
              className="rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden bg-[#122d78] border-2 border-[#2152cf]/30 border-b-[8px] border-b-[#0b1b47] shadow-[0_20px_50px_rgba(11,27,71,0.25),inset_0_1px_1px_rgba(255,255,255,0.15)]"
            >
              <div className="space-y-5">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">1. Analisis Kebutuhan & Alur Pengguna</h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Kami memetakan cara kerja bisnis Anda dan menganalisis perilaku pelanggan secara riil. Langkah awal ini memastikan struktur navigasi produk terasa logis dan minim hambatan sebelum masuk ke tahap visual.
                  </p>
                </div>
                {/* Insight cards - solid medium navy */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#1e3480] border border-[#2d4cb0] rounded-xl p-3 shadow-[0_8px_30px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)]">
                    <span className="text-[10px] font-bold text-[#d9ff42] block mb-1">Temuan Masalah</span>
                    <p className="text-[11px] text-white/95 leading-snug">Formulir pendaftaran yang terlalu panjang menurunkan tingkat konversi hingga 40%.</p>
                  </div>
                  <div className="bg-[#1e3480] border border-[#2d4cb0] rounded-xl p-3 shadow-[0_8px_30px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)]">
                    <span className="text-[10px] font-bold text-[#d9ff42] block mb-1">Solusi Alur</span>
                    <p className="text-[11px] text-white/95 leading-snug">Mengimplementasikan social login satu-klik dan membagi form menjadi 2 tahap ringkas.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column: Steps 2 & 3 stacked */}
            <div className="flex flex-col gap-6">
              {/* Step 2: Desain & Prototipe - Solid Lime/Neon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden flex-1 bg-[#d9ff42] border-2 border-[#b4d622] border-b-[8px] border-b-[#8da61b] shadow-[0_20px_50px_rgba(141,166,27,0.15),inset_0_1px_1px_rgba(255,255,255,0.4)]"
              >
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-[#0d1230]">2. Visual Mockup & Prototipe Interaktif</h4>
                    <p className="text-xs text-[#0d1230]/85 leading-relaxed">
                      Kami merancang layout visual resolusi tinggi (high-fidelity) di Figma sesuai identitas brand Anda. Prototipe dibuat interaktif agar Anda bisa mencoba klik menu dan tombol secara langsung.
                    </p>
                  </div>
                  {/* Figma file reference - solid white card */}
                  <div className="bg-white border border-[#b4d622] rounded-xl p-3 flex justify-between items-center shadow-[0_8px_30px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)]">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-3.5 h-3.5 text-[#122d78]" strokeWidth={1.5} />
                      <div className="text-[9px]">
                        <span className="font-bold block leading-none text-[#0d1230]">Kalana_Checkout_Flow_v2.fig</span>
                        <span className="text-[#0d1230]/50 text-[7px] block mt-0.5">Figma Prototype</span>
                      </div>
                    </div>
                    <div className="w-16 h-6 rounded-md bg-[#122d78] text-[#d9ff42] flex items-center justify-center text-[8px] font-bold border border-white/10 select-none">
                      Interaktif
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Handoff ke Developer - Solid White */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden flex-1 bg-white border-2 border-slate-200 border-b-[8px] border-b-slate-300 shadow-[0_20px_50px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]"
              >
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-text-primary">3. Handoff & Spesifikasi Teknis</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Aset visual diserahkan lengkap dengan pustaka komponen UI, panduan gaya (style tokens), serta tata letak responsif agar proses pengembangan kode oleh tim programmer berjalan mulus dan presisi.
                    </p>
                  </div>
                  {/* Token example - solid light panel */}
                  <div className="bg-surface-alt border border-slate-200 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-navy flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-black text-navy leading-none">color-brand-primary</p>
                      <p className="text-[9px] text-text-tertiary font-mono mt-0.5">#2152cf</p>
                    </div>
                    <div className="ml-auto text-[9px] text-text-tertiary font-mono bg-white border border-border px-2 py-1 rounded-lg">
                      border-radius: 12px
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Cost CTA banner for UI/UX */}
          <div className="bg-gradient-to-br from-navy to-navy-darker rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
            
            <div className="flex items-start gap-5 relative z-10">
              <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center text-[#d9ff42] shrink-0 border border-white/10 shadow-inner">
                <Palette className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">Investasi Desain UI/UX Mulai dari Rp 1.499.000</h3>
                <p className="text-xs md:text-sm text-white/60 leading-relaxed max-w-md">
                  Ingin memiliki prototipe interaktif untuk presentasi investor atau panduan coding tim developer Anda?
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 shrink-0 relative z-10 w-full sm:w-auto">
              <Link
                href="/layanan/ui-ux-design"
                className="flex-1 sm:flex-initial text-center items-center gap-1.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-3 rounded-xl transition-colors"
              >
                Paket Layanan
              </Link>
              <Button
                href="https://wa.me/6285196811722?text=Halo%20Kalana%20Labs%2C%20saya%20tertarik%20dengan%20jasa%20desain%20UI%2FUX%20untuk%20produk%20digital%20saya."
                variant="accent"
                className="flex-1 sm:flex-initial px-5 py-3 rounded-xl text-xs font-bold"
              >
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MOBILE APP & INTERACTIVE SMARTPHONE SIMULATOR ─── */}
      <section id="layanan-mobile" className="py-20 md:py-28 bg-surface relative overflow-hidden border-b border-border">
        <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-[#d9ff42]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          <div className="mb-14 max-w-3xl space-y-4">
            <SectionHeading
              title="Pembuatan Aplikasi "
              titleHighlight="Mobile"
              subtitle="Kami mengembangkan aplikasi seluler kustom Android & iOS cross-platform. Coba klik fitur di kanan untuk mensimulasikan layar aplikasi."
            />
          </div>

          {/* Mobile App Unified Card */}
          <div className="rounded-2xl p-6 md:p-8 lg:p-10 shadow-[0_25px_60px_-15px_rgba(11,27,71,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] relative overflow-hidden bg-[#122d78] border-2 border-[#2152cf]/30 border-b-[8px] border-b-[#0b1b47]">
            {/* Ambient subtle card glow */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              
              {/* LEFT SIDE: Interactive feature toggles */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {[
                  { id: 'feed', title: 'Cross-Platform Engine', desc: 'Satu basis kode untuk Android & iOS demi efisiensi biaya dan waktu pengembangan tanpa mengorbankan performa native.' },
                  { id: 'notification', title: 'Pemberitahuan Instan (Push Notification)', desc: 'Kirim pesan promosi atau update transaksi instan langsung ke layar HP pengguna bahkan saat aplikasi sedang ditutup.' },
                  { id: 'map', title: 'Akses Hardware & GPS Real-time', desc: 'Integrasi penuh dengan sensor perangkat keras seperti GPS untuk pelacakan lokasi, kamera scan QR, dan biometrik.' },
                  { id: 'store', title: 'Publikasi Google Play & App Store', desc: 'Pendampingan penuh dari penyiapan materi rilis hingga persetujuan peninjauan di Google Play Store dan Apple App Store.' },
                  { id: 'status', title: 'Sistem Maintenance & Keamanan', desc: 'Pemantauan berkala, pemeliharaan database/server API, penanganan bug, serta pembaruan kompatibilitas framework OS.' },
                ].map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setMobileActiveTab(item.id as any)}
                    className={`text-left p-4.5 rounded-xl border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                      mobileActiveTab === item.id
                        ? 'bg-[#1e3480] border-[#2d4cb0] shadow-[0_8px_30px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] text-white'
                        : 'bg-[#122d78]/40 border-white/10 hover:border-white/20 text-white/80 hover:text-white'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-xl font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 ${
                      mobileActiveTab === item.id ? 'bg-[#d9ff42] text-[#0d1230]' : 'bg-white/10 text-white/50'
                    }`}>
                      {idx + 1}
                    </span>
                    
                    <div>
                      <h4 className={`text-sm font-bold tracking-tight leading-snug ${mobileActiveTab === item.id ? 'text-[#d9ff42]' : 'text-white'}`}>{item.title}</h4>
                      <p className={`text-xs leading-relaxed mt-1 ${mobileActiveTab === item.id ? 'text-white/90' : 'text-white/50'}`}>{item.desc}</p>
                    </div>
                  </button>
                ))}

                {/* Pricing & Budget Sim Panel (Solid Medium Navy Card) */}
                <div className="bg-[#1e3480] border border-[#2d4cb0] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] mt-4">
                  <div className="space-y-1">
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block font-bold">Investasi Mulai Dari</span>
                    <span className="text-2xl font-black text-[#d9ff42]">Rp 9.999.000</span>
                  </div>
                  <div className="flex flex-col items-start sm:items-end justify-center space-y-1.5">
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block font-bold">Simulasi Biaya & Kustomisasi</span>
                    <a
                      href="#kalkulator-anggaran"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('kalkulator-anggaran')?.scrollIntoView({ behavior: 'smooth' })
                        setCalcBaseId('mobile-app')
                      }}
                      className="inline-flex items-center gap-1.5 text-[10px] font-black text-[#d9ff42] hover:text-[#c4e63b] transition-colors uppercase tracking-wider group bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-[#d9ff42]/20 hover:border-[#d9ff42]/40"
                    >
                      <span>Detail Simulasi</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-5 mt-5 border-t border-white/10">
                  <Button
                    href="https://wa.me/6285196811722?text=Halo%20Kalana%20Labs%2C%20saya%20tertarik%20mencari%20jasa%20pembuatan%20Aplikasi%20Mobile%20Android%20%2F%20iOS."
                    variant="accent"
                    className="flex-1 justify-center py-3 rounded-xl text-xs shadow-md"
                  >
                    Mulai Diskusi Proyek
                  </Button>
                  <Button
                    href="/layanan/mobile-app"
                    variant="outline"
                    className="justify-center py-3 rounded-xl text-xs font-bold border-white text-white hover:bg-white hover:text-[#122d78] hover:border-white"
                  >
                    Detail Halaman Layanan
                  </Button>
                </div>
              </div>

              {/* RIGHT SIDE: Interactive HTML/CSS Smartphone Simulator */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative">
                  {/* Outer Smartphone Frame */}
                  <div className="w-[280px] h-[550px] border-[10px] border-gray-900 bg-gray-950 rounded-[44px] shadow-2xl relative overflow-hidden flex flex-col justify-between p-2">
                    
                    {/* Dynamic Island Notch */}
                    <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-full z-20 flex items-center justify-between px-3 select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="w-1.5 h-1.5 rounded-full bg-camera bg-black/60" />
                    </div>

                    {/* Top Status Bar mock */}
                    <div className="flex justify-between items-center px-4 pt-4 pb-2 text-[8px] font-bold text-white/80 z-10 select-none">
                      <span>09:41 AM</span>
                      <div className="flex gap-1">
                        <span>LTE</span>
                        <span>100%</span>
                      </div>
                    </div>

                    {/* Simulator Screen Container */}
                    <div className="flex-1 bg-[#f8f9fc] rounded-[32px] overflow-hidden p-4 flex flex-col justify-between relative text-text-primary text-[10px]">
                      
                      {/* Screen Content 1: Home Feed UI */}
                      {mobileActiveTab === 'feed' && (
                        <div className="space-y-3 font-sans h-full flex flex-col justify-between py-2">
                          <div className="space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="font-black text-xs text-navy uppercase">Explore</span>
                              <Bell className="w-3.5 h-3.5 text-text-secondary" strokeWidth={2} />
                            </div>
                            <div className="w-full bg-gray-200/60 border border-gray-300/40 rounded-lg p-2 text-text-tertiary">
                              Cari Layanan...
                            </div>
                          </div>

                          {/* List items feed */}
                          <div className="flex-1 flex flex-col gap-2 mt-2">
                            {[
                              { name: 'Riset UI/UX', icon: Palette, price: 'Figma Dev' },
                              { name: 'Web Corporate', icon: Monitor, price: 'SEO On' },
                            ].map(app => {
                              const AppIcon = app.icon
                              return (
                              <div key={app.name} className="bg-white border border-border rounded-xl p-2.5 flex items-center justify-between shadow-sm">
                                <div className="flex items-center gap-2">
                                  <AppIcon className="w-4 h-4 text-navy" strokeWidth={1.5} />
                                  <div>
                                    <span className="font-bold text-[#0d1230] block text-[9px] leading-tight">{app.name}</span>
                                    <span className="text-text-tertiary text-[7px] leading-none">Kalana Labs</span>
                                  </div>
                                </div>
                                <span className="text-[8px] font-bold text-navy">{app.price}</span>
                              </div>
                              )
                            })}
                          </div>

                          <div className="text-center text-[7px] text-text-tertiary mt-auto">Powered by Flutter Engine</div>
                        </div>
                      )}

                      {/* Screen Content 2: Push Notifications Screen */}
                      {mobileActiveTab === 'notification' && (
                        <div className="space-y-3 font-sans h-full justify-start pt-6">
                          <span className="text-[8px] font-black text-text-tertiary block text-center mb-2">HARI INI</span>
                          
                          {/* iOS-Style Push Notification banners */}
                            <div className="bg-white/80 border border-border backdrop-blur-md rounded-lg p-3 shadow-md space-y-1 animate-fade-in">
                            <div className="flex justify-between items-center text-[7px] text-text-tertiary">
                              <span className="font-bold text-navy flex items-center gap-1"><MessageSquare className="w-3 h-3" strokeWidth={2} /> CHAT SUPPORT</span>
                              <span>Baru saja</span>
                            </div>
                            <p className="font-bold text-[9px] text-[#0d1230] leading-snug">Riset UI/UX Selesai!</p>
                            <p className="text-[8px] text-text-secondary leading-normal">Hai, kerangka figma untuk project Anda telah selesai. Klik untuk lihat.</p>
                          </div>

                          <div className="bg-white/80 border border-border backdrop-blur-md rounded-lg p-3 shadow-md space-y-1 animate-fade-in animation-delay-200">
                            <div className="flex justify-between items-center text-[7px] text-text-tertiary">
                              <span className="font-bold text-navy flex items-center gap-1"><Rocket className="w-3 h-3" strokeWidth={2} /> DEPLOYMENT</span>
                              <span>3 menit lalu</span>
                            </div>
                            <p className="font-bold text-[9px] text-[#0d1230] leading-snug">Server Deployment: Sukses</p>
                            <p className="text-[8px] text-text-secondary leading-normal">Website E-Commerce sudah ter-publish ke server produksi.</p>
                          </div>
                        </div>
                      )}

                      {/* Screen Content 3: Live Map Beacon */}
                      {mobileActiveTab === 'map' && (
                        <div className="h-full relative overflow-hidden rounded-xl border border-border flex flex-col justify-end bg-blue-100">
                          {/* Mock Map graphics */}
                          <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: 'radial-gradient(circle, #e2e8f0 10%, transparent 10.5%), radial-gradient(circle, #e2e8f0 10%, transparent 10.5%)', backgroundSize: '15px 15px', backgroundPosition: '0 0, 7.5px 7.5px' }}>
                            {/* Map roads mock */}
                            <div className="absolute top-1/2 left-0 right-0 h-4 bg-white border-y border-gray-300" />
                            <div className="absolute left-1/3 top-0 bottom-0 w-4 bg-white border-x border-gray-300" />
                            
                            {/* Pulse Beacon */}
                            <div className="absolute top-[40%] left-[30%] -translate-x-1/2 -translate-y-1/2 z-10">
                              <span className="w-6 h-6 rounded-full bg-navy/30 animate-ping absolute -top-1.5 -left-1.5 block" />
                              <span className="w-3 h-3 rounded-full bg-navy border-2 border-white shadow-md block" />
                            </div>
                          </div>

                          <div className="relative z-10 bg-white/95 border-t border-border p-2.5 rounded-t-xl text-[8px] space-y-1 shadow-md">
                            <p className="font-black text-navy text-[9px]">LOKASI REAL-TIME</p>
                            <p className="text-text-secondary font-medium">Lat: -7.4244 · Lng: 109.2302</p>
                            <p className="text-text-tertiary truncate">Purwokerto, Jawa Tengah</p>
                          </div>
                        </div>
                      )}

                      {/* Screen Content 4: App Store Detail Page */}
                      {mobileActiveTab === 'store' && (
                        <div className="space-y-3 font-sans h-full pt-4 text-center">
                          <div className="w-11 h-11 bg-navy text-white rounded-lg flex items-center justify-center mx-auto shadow-md">
                            <Gem className="w-5 h-5" strokeWidth={1.5} />
                          </div>
                          <div>
                            <h5 className="font-black text-[11px] text-[#0d1230] leading-tight font-logo">Kalana Mobile</h5>
                            <p className="text-[8px] text-text-tertiary">Productivity & Business App</p>
                          </div>

                          <div className="flex justify-center gap-6 border-y border-gray-100 py-1.5 text-[8px] font-bold text-text-secondary">
                            <div>
                              <div className="flex items-center justify-center gap-0.5 mb-0.5">
                                {[1, 2, 3, 4, 5].map(s => (
                                  <Star key={s} className="w-2 h-2 text-yellow-500 fill-yellow-500" strokeWidth={1.5} />
                                ))}
                              </div>
                              <span className="block">4.9 (38 rating)</span>
                            </div>
                            <div className="border-l border-gray-100" />
                            <div>
                              <span className="text-text-primary font-black block text-[10px]">10K+</span>
                              <span>Unduh</span>
                            </div>
                          </div>

                          <button className="w-full bg-navy text-white text-[9px] font-bold py-2 rounded-xl shadow-lg shadow-navy/20">
                            PASANG / INSTALL
                          </button>
                        </div>
                      )}

                      {/* Screen Content 5: Client-facing Security & Hosting Status */}
                      {mobileActiveTab === 'status' && (
                        <div className="space-y-2.5 font-sans h-full pt-3">
                          <div className="flex justify-between items-center bg-green-500/10 border border-green-500/20 text-green-700 rounded-lg p-2 font-bold text-[8px]">
                            <span>Layanan Aktif</span>
                            <span className="w-2 h-2 rounded-full bg-green-500 block" />
                          </div>

                          {/* Client-facing security metrics, not devtool data */}
                          {[
                            { label: 'SSL Sertifikat', value: 'Aktif', ok: true },
                            { label: 'Backup Mingguan', value: 'Berhasil', ok: true },
                            { label: 'Proteksi DDoS', value: 'Aktif', ok: true },
                            { label: 'Uptime Server', value: '99.9%', ok: true },
                          ].map((item) => (
                            <div key={item.label} className="bg-white border border-border rounded-lg px-2.5 py-2 flex items-center justify-between">
                              <span className="text-[8px] text-text-secondary font-medium">{item.label}</span>
                              <span className={`text-[8px] font-bold ${item.ok ? 'text-green-600' : 'text-red-500'}`}>{item.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Interactive clickable navigation bar inside simulator */}
                      <div className="flex justify-between items-center border-t border-gray-200/50 pt-2 pb-1 text-[8px] text-text-tertiary font-bold text-center mt-auto bg-white/70 backdrop-blur-md rounded-b-[24px] px-4 w-full select-none z-10">
                        <button onClick={() => setMobileActiveTab('feed')} className={`p-1 cursor-pointer transition-colors ${mobileActiveTab === 'feed' ? 'text-navy scale-110' : 'text-text-tertiary hover:text-text-primary'}`} aria-label="Simulator Home">
                          <Home className="w-3.5 h-3.5" strokeWidth={2.5} />
                        </button>
                        <button onClick={() => setMobileActiveTab('notification')} className={`p-1 cursor-pointer transition-colors ${mobileActiveTab === 'notification' ? 'text-navy scale-110' : 'text-text-tertiary hover:text-text-primary'}`} aria-label="Simulator Notifications">
                          <Bell className="w-3.5 h-3.5" strokeWidth={2.5} />
                        </button>
                        <button onClick={() => setMobileActiveTab('map')} className={`p-1 cursor-pointer transition-colors ${mobileActiveTab === 'map' ? 'text-navy scale-110' : 'text-text-tertiary hover:text-text-primary'}`} aria-label="Simulator Map">
                          <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
                        </button>
                        <button onClick={() => setMobileActiveTab('store')} className={`p-1 cursor-pointer transition-colors ${mobileActiveTab === 'store' ? 'text-navy scale-110' : 'text-text-tertiary hover:text-text-primary'}`} aria-label="Simulator App Store">
                          <ShoppingBag className="w-3.5 h-3.5" strokeWidth={2.5} />
                        </button>
                        <button onClick={() => setMobileActiveTab('status')} className={`p-1 cursor-pointer transition-colors ${mobileActiveTab === 'status' ? 'text-navy scale-110' : 'text-text-tertiary hover:text-text-primary'}`} aria-label="Simulator Status">
                          <Settings className="w-3.5 h-3.5" strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Simulated Glow decoration */}
                  <div className="absolute inset-0 pointer-events-none rounded-[44px] shadow-inner border border-white/10" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US (MENGAPA KALANA LABS) ─── */}
      {/* <section className="py-20 md:py-28 bg-surface-alt relative overflow-hidden border-b border-border">
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-navy/5 blur-3xl pointer-events-none" /> */}

        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16">
            <SectionHeading
              centered
              title="Mengapa Bermitra dengan "
              titleHighlight="Kalana Labs?"
              subtitle="Kami memadukan kemampuan desain antarmuka modern dengan rekayasa kode kelas produksi yang andal dan cepat."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white border border-[#e4e8f2] rounded-xl p-8 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy/20 to-navy" />
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-navy/5 to-navy/10 flex items-center justify-center text-navy shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-text-primary tracking-tight font-sans">{item.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                  <div className="text-[10px] font-black text-navy/30 uppercase tracking-widest mt-6">
                    MINDSET TERBAIK · 0{idx + 1}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* ─── DYNAMIC INTERACTIVE BUDGET CALCULATOR ─── */}
      <section id="kalkulator-anggaran" className="py-20 md:py-28 bg-surface relative overflow-hidden border-b border-border">
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-navy/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <SectionHeading
              centered
              title="Interactive Project "
              titleHighlight="Cost Planner"
              subtitle="Rencanakan dan hitung estimasi investasi digital serta jangka waktu pengembangan aplikasi kustom Anda secara instan."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-surface-alt border border-[#e4e8f2] rounded-xl overflow-hidden p-6 md:p-10 shadow-xl">
            
            {/* LEFT SIDE: Calculator controls */}
            <div className="lg:col-span-8 flex flex-col justify-between gap-8">
              
              {/* Step 1: Base project type */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center text-[10px] font-black">1</span>
                  <span className="text-[10px] font-black text-navy uppercase tracking-widest">Pilih Jenis Proyek Utama</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {calculatorBaseServices.map(service => {
                    const isSelected = calcBaseId === service.id
                    return (
                      <button
                        key={service.id}
                        onClick={() => {
                          setCalcBaseId(service.id)
                          setCalcPackageIdx(0)
                          setCalcAddons(prev => prev.filter(id => {
                            const addon = calculatorAddons.find(a => a.id === id)
                            return addon && addon.compatibleWith.includes(service.id)
                          }))
                        }}
                        className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#2152cf] border-[#1a3fa3] border-b-[5px] border-b-[#0f245c] text-white shadow-md -translate-y-[1px]'
                            : 'bg-white border-slate-200 border-b-[5px] border-b-slate-300 text-[#4f5b7d] hover:text-[#1e2547] hover:bg-[#f1f3f9] hover:-translate-y-[1px]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold truncate leading-none">{service.name}</span>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className={`text-[9px] font-bold ${isSelected ? 'text-white/80' : 'text-[#4f5b7d]'}`}>
                              Rp{service.price.toLocaleString('id-ID')}
                            </span>
                            {isSelected && (
                              <span className="w-3.5 h-3.5 rounded-full bg-accent text-[#0d1230] flex items-center justify-center text-[7px] font-black">
                                ✓
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Step 1b: Package Tier Selection */}
              {pricingCategory && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-5 h-5 rounded-full bg-navy text-white flex items-center justify-center text-[8px] font-black">1b</span>
                    <span className="text-[9px] font-bold text-navy uppercase tracking-widest">Pilih Paket & Lihat Benefit</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {pricingCategory.packages.map((pkg, idx) => {
                      const isPkgSelected = calcPackageIdx === idx
                      const pkgPrice = parseTierPrice(pkg.price, pkg.suffix)
                      const cardTheme = plannerTierThemes[idx] ?? plannerTierThemes[2]
                      return (
                        <button
                          key={pkg.name}
                          onClick={() => setCalcPackageIdx(idx)}
                          className={`text-left p-4 rounded-xl border-2 transition-all duration-200 relative overflow-hidden flex flex-col cursor-pointer ${
                            isPkgSelected ? cardTheme.selected : cardTheme.unselected
                          }`}
                        >
                          {/* Best Value badge */}
                          {pkg.bestValue && (
                            <span className={`absolute top-2 right-2 text-[7px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider z-10 ${
                              isPkgSelected
                                ? (idx === 1 ? 'bg-[#0d1230] text-[#d9ff42]' : 'bg-[#d9ff42] text-[#0d1230]')
                                : 'bg-[#d9ff42] text-[#0d1230] border border-slate-200'
                            }`}>
                              Best Value
                            </span>
                          )}
                          {/* Package Name & Price */}
                          <div className="flex items-start justify-between gap-2 mb-2 w-full">
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className={`text-sm font-black leading-tight ${isPkgSelected ? cardTheme.nameColor : 'text-slate-800'}`}>{pkg.name}</span>
                                {isPkgSelected && (
                                  <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[6px] font-black shrink-0 ${cardTheme.checkBg} ${cardTheme.checkTick}`}>
                                    ✓
                                  </span>
                                )}
                              </div>
                              <span className={`text-[9px] leading-tight block mt-0.5 ${isPkgSelected ? (idx === 0 ? 'text-slate-500' : idx === 1 ? 'text-[#0d1230]/70' : 'text-white/60') : 'text-slate-400'}`}>
                                {pkg.subtitle}
                              </span>
                            </div>
                            <span className={`text-xs font-black shrink-0 mt-0.5 ${isPkgSelected ? cardTheme.priceColor : 'text-slate-900'}`}>
                              Rp{pkgPrice.toLocaleString('id-ID')}
                            </span>
                          </div>
                          {/* Divider */}
                          <div className={`w-full h-px my-1.5 ${isPkgSelected ? cardTheme.divider : 'bg-slate-100'}`} />
                          {/* Benefits */}
                          <ul className="space-y-1 flex-1 w-full">
                            {pkg.benefits.map((benefit, bi) => (
                              <li key={bi} className="flex items-start gap-1.5">
                                <Check className={`w-2.5 h-2.5 mt-0.5 shrink-0 ${isPkgSelected ? cardTheme.priceColor : 'text-slate-400'}`} strokeWidth={3} />
                                <span className={`text-[9px] leading-snug ${isPkgSelected ? cardTheme.benefitText : 'text-slate-500'}`}>
                                  {benefit}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Add-on options */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black transition-colors ${
                    relevantAddons.length > 0 ? 'bg-navy text-white' : 'bg-navy/20 text-navy/50'
                  }`}>2</span>
                  <span className="text-[10px] font-black text-navy uppercase tracking-widest">Pilih Fitur Tambahan</span>
                  {relevantAddons.length > 0 && (
                    <span className="text-[9px] font-bold text-text-tertiary">({relevantAddons.length} tersedia)</span>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relevantAddons.length > 0 ? (
                    relevantAddons.map(addon => {
                      const isChecked = calcAddons.includes(addon.id)
                      
                      return (
                        <button
                          key={addon.id}
                          onClick={() => handleToggleAddon(addon.id)}
                          className={`text-left p-3 rounded-xl border-2 transition-all duration-200 flex items-center gap-3.5 relative overflow-hidden cursor-pointer ${
                            isChecked
                              ? 'bg-[#1e3480] text-white border-[#2d4cb0] border-b-[5px] border-b-[#142660] shadow-md -translate-y-[1px]'
                              : 'bg-white border-slate-200 border-b-[5px] border-b-slate-300 text-text-secondary hover:text-text-primary hover:bg-[#f1f3f9] hover:-translate-y-[1px]'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                            isChecked ? 'bg-[#d9ff42] border-[#d9ff42] text-[#0d1230] scale-105 shadow-sm' : 'border-gray-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3 h-3" strokeWidth={3.5} />}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <p className={`text-xs font-bold leading-tight transition-colors duration-200 ${isChecked ? 'text-[#d9ff42]' : 'text-text-primary'}`}>{addon.name}</p>
                            <div className="flex items-center gap-2 mt-1.5">
                              <span className={`text-[10px] font-bold ${isChecked ? 'text-white' : 'text-navy'}`}>+Rp {addon.price.toLocaleString('id-ID')}</span>
                              <span className={`text-[8px] ${isChecked ? 'text-white/30' : 'text-text-tertiary'}`}>|</span>
                              <span className={`text-[10px] ${isChecked ? 'text-white/70' : 'text-text-tertiary'}`}>+{addon.days} Hari</span>
                            </div>
                          </div>
                        </button>
                      )
                    })
                  ) : (
                    <div className="col-span-2 py-8 text-center">
                      <p className="text-xs text-text-tertiary">
                        Tidak ada add-on tambahan untuk layanan ini.
                      </p>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* RIGHT SIDE: Live estimations & Dynamic WhatsApp CTA */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#1a2355] to-[#0d1533] rounded-lg p-6 md:p-8 flex flex-col justify-between text-white relative overflow-hidden shadow-2xl">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-navy/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black text-accent bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg uppercase tracking-widest">
                    Ringkasan
                  </span>
                </div>
                
                {/* Details list */}
                <div className="space-y-3 text-xs border-b border-white/5 pb-5">
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-white/50">Layanan</span>
                    <span className="font-bold text-right text-white/90">{selectedBase.name}</span>
                  </div>
                  {selectedPkg && (
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="text-white/50">Paket</span>
                      <span className="font-bold text-right text-accent">{selectedPkg.name}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-baseline">
                    <span className="text-white/50">Biaya Dasar</span>
                    <span className="font-bold text-white/90">Rp {effectiveBasePrice.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-white/50">Fitur Tambahan</span>
                    <span className="font-bold text-white/90">+{selectedAddons.length} Fitur</span>
                  </div>
                  
                  {/* Selected addons list */}
                  {selectedAddons.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      {selectedAddons.map(addon => (
                        <div key={addon.id} className="flex justify-between items-baseline pl-2 border-l border-accent/30">
                          <span className="text-[10px] text-white/40 truncate pr-2">{addon.name}</span>
                          <span className="text-[10px] text-white/60 shrink-0">+Rp {addon.price.toLocaleString('id-ID')}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Big Summary Stats */}
                <div className="space-y-5">
                  <div>
                    <span className="text-[9px] text-white/40 font-bold uppercase tracking-wider block">Estimasi Investasi</span>
                    <span className="text-3xl sm:text-4xl font-black text-accent tracking-tight leading-none block mt-1.5 tabular-nums">
                      Rp {totalCost.toLocaleString('id-ID')}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <span className="text-[9px] text-white/40 font-bold uppercase tracking-wider block">Waktu Pengerjaan</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-lg font-black text-white tabular-nums">{totalDays}</span>
                        <span className="text-[11px] text-white/50 font-medium">Hari Kerja</span>
                      </div>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div className="flex-1">
                      <span className="text-[9px] text-white/40 font-bold uppercase tracking-wider block">Fitur Total</span>
                      <span className="text-lg font-black text-white block mt-1 tabular-nums">
                        {1 + selectedAddons.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic WhatsApp Call to Action */}
              <div className="space-y-3 pt-6 mt-6 border-t border-white/5 relative z-10">
                <p className="text-[9px] text-white/30 leading-relaxed text-center">
                  *Estimasi awal. Hubungi kami untuk proposal resmi.
                </p>
                <Button
                  href={formatWhatsAppUrl()}
                  variant="accent"
                  className="w-full justify-center py-3.5 rounded-xl shadow-lg shadow-accent/15 active:scale-[0.98] transition-transform font-bold text-xs"
                >
                  Ajukan Penawaran via WA
                </Button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── FAQ MINI SECTION ─── */}
      <section className="py-20 md:py-28 bg-surface-alt relative overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-navy/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <SectionHeading
              centered
              title="Pertanyaan yang Sering "
              titleHighlight="Diajukan"
              subtitle="Berikut beberapa jawaban singkat atas kendala atau pertanyaan yang kerap diajukan oleh calon klien kami."
            />
          </div>

          <div className="max-w-3xl mx-auto flex flex-col divide-y divide-[#e4e8f2]">
            {[
              { q: 'Apakah ada garansi revisi setelah website selesai?', a: 'Ya, seluruh paket layanan kami sudah dilengkapi garansi masa pemeliharaan (maintenance) gratis selama 30 hingga 90 hari setelah serah terima source code.' },
              { q: 'Bagaimana alur pembayaran proyek?', a: 'Pembayaran terbagi menjadi dua tahap: Down Payment (DP) 50% di awal setelah penandatanganan proposal kerjasama, dan pelunasan 50% setelah proyek selesai diuji dan disetujui.' },
              { q: 'Apakah saya mendapatkan source code penuh?', a: 'Tentu. Seluruh aset desain Figma dan source code repositori (Next.js/React/Laravel) diserahkan sepenuhnya kepada Anda pasca-pelunasan.' },
              { q: 'Dapatkah saya memesan fitur custom tersendiri?', a: 'Tentu saja. Anda dapat menggunakan Cost Planner di atas untuk menyusun estimasi fitur awal, atau mengontak analis kami langsung jika menginginkan integrasi database enterprise kustom.' },
            ].map((faq, i) => {
              const isOpen = openFaqIdx === i
              return (
                <div key={i} className="group">
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-6 text-left cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-white border border-[#e4e8f2] text-[#4f5b7d] text-xs font-bold flex items-center justify-center mt-0.5 group-hover:bg-[#2152cf] group-hover:text-white transition-all duration-200">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-base font-semibold leading-snug transition-colors duration-200 ${isOpen ? 'text-[#2152cf]' : 'text-[#1e2547] group-hover:text-[#2152cf]'}`}>
                        {faq.q}
                      </span>
                    </div>

                    <div className={`flex-shrink-0 w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all duration-300 mt-0.5 ${
                      isOpen
                        ? 'bg-[#2152cf] border-[#2152cf]'
                        : 'border-slate-200 bg-white group-hover:border-[#2152cf]'
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

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-6 pl-11 pr-2">
                      <div className="bg-white border border-slate-100 rounded-xl px-6 py-5 shadow-sm">
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION SECTION ─── */}
      <section
        className="relative overflow-hidden py-20 md:py-24 border-t border-white/5"
        style={{ background: 'linear-gradient(135deg, #090e23 0%, #101c59 60%, #090e23 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-navy opacity-20 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-navy opacity-15 blur-[100px] translate-y-1/3" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Siap Meluncurkan Proyek Impian{' '}
              <span className="font-script italic text-[#d9ff42]">Anda?</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Konsultasikan ide produk digital Anda dengan tim ahli kami secara gratis. Kami akan memberikan skema arsitektur dan estimasi budget terbaik untuk bisnis Anda.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href="https://wa.me/6285196811722?text=Halo%20Kalana%20Labs%2C%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20teknologi%20bisnis%20saya."
              variant="accent"
              size="lg"
              className="shadow-lg shadow-accent/20 rounded-xl"
            >
              Konsultasi Sekarang (Gratis)
            </Button>
            <Button
              href="/"
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 rounded-xl"
              showArrow={false}
            >
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
