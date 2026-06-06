import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portofolio Website Purwokerto | Kalana Labs',
  description:
    'Lihat portofolio jasa pembuatan website Purwokerto oleh Kalana Labs. Berbagai proyek landing page, company profile, e-commerce, dan aplikasi mobile yang telah kami selesaikan.',
  openGraph: {
    title: 'Portofolio Website Purwokerto | Kalana Labs',
    description:
      'Portofolio jasa pembuatan website Purwokerto. Lihat hasil karya landing page, company profile, e-commerce & aplikasi mobile.',
    url: 'https://kalanalabs.com/portofolio/',
    locale: 'id_ID',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kalanalabs.com/portofolio/',
  },
}

export default function PortofolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
