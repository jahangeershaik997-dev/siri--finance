import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import JsonLd from '@/components/JsonLd'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

const BASE_URL = 'https://siri-finance-knax.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Siri Finance — Compare Personal Loans | Lowest Interest Rates India',
    template: '%s | Siri Finance',
  },
  description:
    'Compare 50+ personal loan offers from SBI, HDFC, ICICI, Bajaj Finance & more. Get lowest interest rates from 10.25% p.a. Instant eligibility check. Free service. No CIBIL impact.',
  keywords: [
    'personal loan India',
    'lowest interest rate personal loan',
    'compare personal loans',
    'instant personal loan',
    'personal loan eligibility',
    'HDFC personal loan',
    'SBI personal loan',
    'Bajaj Finance loan',
    'EMI calculator',
    'CIBIL score loan',
    'loan aggregator India',
    'best personal loan 2024',
    'personal loan without collateral',
    'salaried personal loan',
  ],
  authors: [{ name: 'Siri Finance' }],
  creator: 'Siri Finance',
  publisher: 'Siri Finance',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Siri Finance',
    title: 'Siri Finance — Compare Personal Loans | Lowest Interest Rates India',
    description:
      'Compare 50+ personal loan offers from top banks & NBFCs. Lowest rates from 10.25% p.a. Instant eligibility. Free service.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Siri Finance — Smart Loans. Faster Decisions.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siri Finance — Compare Personal Loans India',
    description: 'Compare 50+ loan offers from top banks & NBFCs. Lowest rates from 10.25% p.a.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: 'add-your-google-search-console-verification-here',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
