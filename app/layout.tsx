import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Siri Finance — Smart Loans. Faster Decisions.',
  description:
    'Compare personal loans, home loans, and business loans from 50+ top banks and NBFCs in India. Get the lowest interest rates with instant approval.',
  keywords: 'personal loan, home loan, loan comparison, lowest interest rate, India, CIBIL, EMI calculator',
  openGraph: {
    title: 'Siri Finance — Smart Loans. Faster Decisions.',
    description: 'Compare 50+ loan offers from top Indian banks and NBFCs instantly.',
    url: 'https://sirifinance.vercel.app',
    siteName: 'Siri Finance',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
