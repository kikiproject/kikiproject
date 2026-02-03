import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rizki Habibi | Portofolio',
  description: 'Portofolio Rizki Habibi - Mahasiswa STI & Web Developer',
  keywords: ['Rizki Habibi', 'Portfolio', 'Web Developer', 'Laravel', 'Next.js'],
  authors: [{ name: 'Rizki Habibi' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Rizki Habibi | Portofolio',
    description: 'Portofolio Rizki Habibi - Mahasiswa STI & Web Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-charcoal-950 text-white`}>
        {children}
      </body>
    </html>
  )
}
