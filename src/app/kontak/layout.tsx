import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hubungi Kalana Labs | Jasa Pembuatan Website Purwokerto Murah',
  description: 'Diskusikan proyek pembuatan website kustom, sistem informasi, atau aplikasi mobile Anda bersama tim analis Kalana Labs Purwokerto. Sesi konsultasi gratis.',
  keywords: [
    'hubungi kalana labs',
    'kontak kalanalabs',
    'jasa pembuatan website purwokerto',
    'jasa pembuatan website murah',
    'konsultasi website purwokerto',
    'alamat software house purwokerto'
  ]
}

export default function KontakLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
