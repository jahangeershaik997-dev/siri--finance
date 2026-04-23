import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Apply for a Loan — Siri Finance',
  description: 'Apply for a personal loan in minutes. Our team will match you with the best offers.',
}

const trustBadges = [
  { icon: '🔒', title: 'Bank-grade Security', desc: '256-bit SSL encryption' },
  { icon: '📞', title: 'Expert Advisory', desc: 'Dedicated loan advisor' },
  { icon: '⚡', title: '24hr Response', desc: 'Quick turnaround' },
  { icon: '✅', title: 'Free Service', desc: 'No hidden charges' },
]

interface ApplyPageProps {
  searchParams: {
    bank?: string
    bank_name?: string
    amount?: string
  }
}

export default function ApplyPage({ searchParams }: ApplyPageProps) {
  const bankName = searchParams.bank_name ? decodeURIComponent(searchParams.bank_name) : ''
  const amount = searchParams.amount || ''

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Step 1 of 1</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {bankName ? `Apply for ${bankName} Loan` : 'Apply for a Personal Loan'}
          </h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Fill in your details below. Our loan advisor will call you within 24 hours with personalized offers.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 lg:p-8 mb-6">
          <LeadForm prefilledAmount={amount} prefilledBank={bankName} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {trustBadges.map((badge) => (
            <div key={badge.title} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
              <div className="text-2xl mb-1.5">{badge.icon}</div>
              <p className="text-xs font-semibold text-gray-800">{badge.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{badge.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100 text-center">
          <p className="text-blue-700 text-sm font-medium">
            Need help choosing a loan?{' '}
            <span className="underline cursor-pointer">Call 1800-XXX-XXXX</span>{' '}
            (Mon–Sat, 9am–7pm)
          </p>
        </div>
      </div>
    </div>
  )
}
