import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Apply for a Personal Loan — Instant Approval | Siri Finance',
  description:
    'Apply for a personal loan in minutes. Get matched with the best offers from SBI, HDFC, ICICI & more. Lowest rates from 10.25% p.a. Our advisor will call you within 24 hours.',
  keywords: ['apply personal loan online', 'personal loan application', 'instant loan approval India'],
  alternates: { canonical: 'https://siri-finance-knax.vercel.app/apply' },
  openGraph: {
    title: 'Apply for a Personal Loan — Siri Finance',
    description: 'Apply in minutes. Get best offers from 50+ lenders. Free service.',
    url: 'https://siri-finance-knax.vercel.app/apply',
  },
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

        <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-4 text-center">
            Talk to Our Loan Advisors
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href="tel:7095899552"
              className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 transition-colors rounded-xl p-4 border border-blue-100"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                MM
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm">Muthyala Mallesh</p>
                <p className="text-blue-600 text-xs font-medium">Senior Loan Advisor</p>
                <p className="text-gray-700 text-sm font-bold mt-0.5">70958 99552</p>
              </div>
            </a>
            <a
              href="tel:9059314625"
              className="flex items-center gap-3 bg-green-50 hover:bg-green-100 transition-colors rounded-xl p-4 border border-green-100"
            >
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                JH
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm">Jahangeer</p>
                <p className="text-green-600 text-xs font-medium">Loan Advisor</p>
                <p className="text-gray-700 text-sm font-bold mt-0.5">90593 14625</p>
              </div>
            </a>
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">Available Mon–Sat, 9am–7pm IST</p>
        </div>
      </div>
    </div>
  )
}
