import type { Metadata } from 'next'
import ApplyClient from '@/components/ApplyClient'

export const metadata: Metadata = {
  title: 'Apply for a Loan — Instant Approval | Siri Finance',
  description:
    'Apply for a personal loan, home loan, or business loan in minutes. Get matched with the best offers from SBI, HDFC, ICICI & more. Our advisor will call you within 24 hours.',
  keywords: ['apply personal loan online', 'personal loan application', 'home loan apply', 'instant loan approval India'],
  alternates: { canonical: 'https://siri-finance-knax.vercel.app/apply' },
  openGraph: {
    title: 'Apply for a Loan — Siri Finance',
    description: 'Apply in minutes. Get best offers from 1150+ lenders. Free service.',
    url: 'https://siri-finance-knax.vercel.app/apply',
  },
}

interface ApplyPageProps {
  searchParams: {
    bank?: string
    bank_name?: string
    amount?: string
    type?: string
  }
}

export default function ApplyPage({ searchParams }: ApplyPageProps) {
  const bankName = searchParams.bank_name ? decodeURIComponent(searchParams.bank_name) : ''
  const amount = searchParams.amount || ''
  const loanType = (searchParams.type as 'personal' | 'home' | 'business' | 'lap') || 'personal'

  return (
    <ApplyClient
      defaultType={loanType}
      prefilledAmount={amount}
      prefilledBank={bankName}
    />
  )
}
