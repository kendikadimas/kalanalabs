import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Layanan Pembuatan Website Purwokerto | Kalana Labs',
  description:
    'Jasa pembuatan website Purwokerto profesional: Landing page, Company Profile, E-Commerce, Sistem Informasi, UI/UX Design & Aplikasi Mobile. Harga mulai Rp 299.000.',
  openGraph: {
    title: 'Layanan Pembuatan Website Purwokerto | Kalana Labs',
    description:
      'Jasa pembuatan website Purwokerto profesional: Landing page, Company Profile, E-Commerce, Sistem Informasi, UI/UX Design & Aplikasi Mobile.',
    url: 'https://kalanalabs.com/layanan/',
    locale: 'id_ID',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kalanalabs.com/layanan/',
  },
}

export default function LayananLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
