import type { Metadata } from 'next'
import LoansClient from '@/components/LoansClient'

export const metadata: Metadata = {
  title: 'Compare Personal Loan Offers — SBI, HDFC, ICICI, Bajaj Finance',
  description:
    'Compare personal loan offers from 50+ banks & NBFCs in India. Filter by interest rate and loan amount. Instant eligibility. Starting from 10.25% p.a.',
  keywords: [
    'compare personal loans India',
    'best personal loan interest rate',
    'SBI personal loan',
    'HDFC personal loan',
    'Bajaj Finance personal loan',
    'instant personal loan approval',
  ],
  alternates: { canonical: 'https://siri-finance-knax.vercel.app/loans' },
  openGraph: {
    title: 'Compare Personal Loan Offers — Siri Finance',
    description: 'Compare 50+ loan offers from top banks & NBFCs. Free service. No CIBIL impact.',
    url: 'https://siri-finance-knax.vercel.app/loans',
  },
}

export default function LoansPage() {
  return <LoansClient />
}
