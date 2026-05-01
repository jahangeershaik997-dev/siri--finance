import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import JsonLd from '@/components/JsonLd'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

const BASE_URL = 'https://www.sirifintech.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Siri Financial Services — All Types of Loans | Hyderabad',
    template: '%s | Siri Financial Services',
  },
  description:
    'Siri Financial Services, Ameerpet Hyderabad. Personal loans from 9.75%, Home loans from 7.15%. Mortgage, Business, Construction, Car, Education, Open Plot loans. CIBIL issue cases & no income proof cases also handled.',
  keywords: [
    'personal loan Hyderabad',
    'home loan Ameerpet',
    'mortgage loan Hyderabad',
    'Siri Financial Services',
    'SFS loans Hyderabad',
    'open plot loan HMDA DTCP',
    'construction loan Hyderabad',
    'CIBIL issue loan Hyderabad',
    'no income proof loan',
    'loan without documents Hyderabad',
    'M Mallesh loan advisor',
    'business loan Ameerpet',
    'property loan Hyderabad',
    'gramakantam property loan',
  ],
  authors: [{ name: 'Siri Financial Services' }],
  creator: 'Siri Financial Services',
  publisher: 'Siri Financial Services',
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
    siteName: 'Siri Financial Services',
    title: 'Siri Financial Services — All Types of Loans | Hyderabad',
    description:
      'Personal, Home, Mortgage, Business, Construction, Car, Education & Open Plot loans. CIBIL issue cases also handled. Ameerpet, Hyderabad.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Siri Financial Services — One Stop Solution for All Your Financial Needs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siri Financial Services — All Types of Loans | Hyderabad',
    description: 'Personal loans 9.75%, Home loans 7.15%. CIBIL issue cases handled. Ameerpet, Hyderabad.',
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
