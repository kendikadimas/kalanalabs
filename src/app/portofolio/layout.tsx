import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portofolio Proyek & Aplikasi — Kalana Labs | Jasa Pembuatan Website Purwokerto',
  description: 'Tinjau galeri portofolio proyek software, website, & desain UI/UX hasil karya Kalana Labs. Partner teknologi terpercaya untuk pembuatan website murah & profesional di Purwokerto.',
  keywords: [
    'portofolio kalana labs',
    'portofolio kalanalabs',
    'portofolio website purwokerto',
    'portofolio web developer',
    'jasa pembuatan website purwokerto',
    'hasil kerja kalana labs'
  ]
}

export default function PortofolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
