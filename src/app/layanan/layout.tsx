import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website Purwokerto & Layanan IT — Kalana Labs',
  description: 'Daftar layanan teknologi & desain Kalana Labs. Kami menawarkan jasa pembuatan website Purwokerto murah (landing page, company profile, e-commerce, sistem informasi) serta pembuatan aplikasi mobile & desain UI/UX.',
  keywords: [
    'jasa pembuatan website purwokerto',
    'jasa pembuatan website murah',
    'jasa pembuatan website',
    'jasa pembuatan web purwokerto',
    'layanan pembuatan website purwokerto',
    'bikin website purwokerto',
    'jasa desain ui ux purwokerto',
    'jasa pembuat aplikasi purwokerto'
  ]
}

export default function LayananLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
