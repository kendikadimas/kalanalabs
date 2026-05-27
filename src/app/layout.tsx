import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Kalana Labs — Digital Product Studio',
  description:
    'Kalana Labs membantu bisnis merancang, membangun, dan meluncurkan produk digital yang mendorong pertumbuhan nyata. Partner teknologi terpercaya untuk UI/UX, Web Development, Mobile Apps, dan Digital Strategy.',
  keywords: [
    'digital product studio',
    'tech consulting',
    'UI/UX design',
    'web development',
    'mobile apps',
    'digital strategy',
    'Kalana Labs',
    'Indonesia',
  ],
  openGraph: {
    title: 'Kalana Labs — Digital Product Studio',
    description:
      'Partner teknologi yang membantu bisnis Anda merancang, membangun, dan meluncurkan produk digital.',
    type: 'website',
  },
}

import FloatingActions from '@/components/ui/FloatingActions'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <body>
        {children}
        <FloatingActions />
      </body>
    </html>
  )
}
