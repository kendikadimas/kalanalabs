import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display, Lexend_Deca } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['600', '700'],
  variable: '--font-playfair-display',
  display: 'swap',
})

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-lexend-deca',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kalana Labs — Jasa Pembuatan Website Purwokerto Murah & Profesional',
  description:
    'Jasa pembuatan website Purwokerto murah & profesional oleh Kalana Labs. Kami membuat landing page, company profile, e-commerce, sistem informasi, & aplikasi mobile Android/iOS.',
  keywords: [
    'kalana labs',
    'kalanalabs',
    'jasa pembuatan website purwokerto',
    'jasa pembuatan website murah',
    'jasa pembuatan website',
    'jasa pembuatan web purwokerto',
    'web developer purwokerto',
    'pembuatan website purwokerto',
    'jasa seo purwokerto',
    'jasa desain ui ux purwokerto',
    'jasa pembuatan aplikasi purwokerto',
    'software house purwokerto'
  ],
  icons: {
    icon: '/logo-kalana.svg',
    shortcut: '/logo-kalana.svg',
    apple: '/logo-kalana.svg',
  },
  openGraph: {
    title: 'Kalana Labs — Jasa Pembuatan Website Purwokerto Murah & Profesional',
    description:
      'Partner teknologi terpercaya untuk pembuatan website kustom, aplikasi mobile Android & iOS, serta riset desain UI/UX di Purwokerto.',
    type: 'website',
    images: [
      {
        url: 'https://kalanalabs.com/logo.svg',
        width: 1500,
        height: 1500,
        alt: 'Kalana Labs Logo',
      }
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://kalanalabs.com/#business",
      "name": "Kalana Labs",
      "alternateName": "KalanaLabs",
      "url": "https://kalanalabs.com",
      "telephone": "+6285196811722",
      "priceRange": "Rp 299.000 - Rp 39.999.000",
      "image": "https://kalanalabs.com/logo.svg",
      "logo": "https://kalanalabs.com/logo.svg",
      "description": "Jasa pembuatan website Purwokerto murah & profesional. Landing page, company profile, e-commerce, sistem informasi, UI/UX design, dan aplikasi mobile.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Purwokerto",
        "addressRegion": "Jawa Tengah",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-7.4244",
        "longitude": "109.2300"
      },
      "sameAs": [
        "https://www.instagram.com/kalana.labs",
        "https://www.tiktok.com/@kalana__labs"
      ],
      "areaServed": "Purwokerto",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Jasa Pembuatan Website",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page", "description": "Halaman web tunggal untuk kampanye iklan dan promosi produk." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Company Profile", "description": "Website resmi perusahaan multi-halaman dengan CMS." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce", "description": "Toko online dengan payment gateway dan manajemen stok." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sistem Informasi", "description": "Aplikasi web kustom untuk manajemen data internal." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aplikasi Mobile", "description": "Aplikasi Android & iOS cross-platform." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desain UI/UX", "description": "Wireframe, prototipe Figma, dan design system." } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://kalanalabs.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Berapa biaya jasa pembuatan website di Purwokerto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Biaya pembuatan website mulai dari Rp 299.000 untuk landing page, Rp 1.299.000 untuk company profile, Rp 1.999.000 untuk e-commerce, hingga Rp 9.999.000 untuk aplikasi mobile."
          }
        },
        {
          "@type": "Question",
          "name": "Berapa lama proses pembuatan website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Estimasi pengerjaan: Landing page 3 hari, company profile 7 hari, e-commerce 14 hari, dan aplikasi mobile hingga 30 hari kerja."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah domain dan hosting termasuk dalam paket?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ya, domain .com dan hosting 1 tahun gratis untuk paket Basic Company Profile dan E-Commerce."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah Kalana Labs menerima jasa pembuatan website di Purwokerto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tentu. Kalana Labs melayani jasa pembuatan website untuk bisnis di Purwokerto, Banyumas, dan seluruh Indonesia. Konsultasi gratis via WhatsApp."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kalanalabs.com/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://kalanalabs.com/" },
        { "@type": "ListItem", "position": 2, "name": "Layanan", "item": "https://kalanalabs.com/layanan/" },
        { "@type": "ListItem", "position": 3, "name": "Kontak", "item": "https://kalanalabs.com/kontak/" }
      ]
    }
  ]
}

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/ui/FloatingActions'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${lexendDeca.variable}`}>
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  )
}
