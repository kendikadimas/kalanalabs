import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontak Jasa Pembuatan Website Purwokerto | Kalana Labs',
  description:
    'Hubungi Kalana Labs untuk konsultasi gratis jasa pembuatan website Purwokerto. Diskusikan kebutuhan landing page, company profile, e-commerce, atau aplikasi mobile Anda.',
  openGraph: {
    title: 'Kontak Jasa Pembuatan Website Purwokerto | Kalana Labs',
    description:
      'Hubungi Kalana Labs untuk konsultasi gratis pembuatan website Purwokerto. Landing page, company profile, e-commerce & aplikasi mobile.',
    url: 'https://kalanalabs.com/kontak/',
    locale: 'id_ID',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kalanalabs.com/kontak/',
  },
}

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
