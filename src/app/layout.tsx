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
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
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
  "@type": "ProfessionalService",
  "name": "Kalana Labs",
  "alternateName": "KalanaLabs",
  "url": "https://kalanalabs.com",
  "telephone": "+6285707736885",
  "priceRange": "Rp 299.000 - Rp 39.999.000",
  "image": "https://kalanalabs.com/logo.svg",
  "logo": "https://kalanalabs.com/logo.svg",
  "description": "Jasa pembuatan website Purwokerto murah & profesional. Hubungi Kalana Labs untuk pembuatan landing page, company profile, e-commerce, sistem informasi, dan aplikasi mobile.",
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
