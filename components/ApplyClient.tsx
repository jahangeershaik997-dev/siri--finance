'use client'
import { useState } from 'react'
import LeadForm from './LeadForm'

type LoanType = 'personal' | 'home' | 'business' | 'lap'

const LOAN_TYPES: { id: LoanType; label: string }[] = [
  { id: 'personal', label: 'Personal Loan' },
  { id: 'home', label: 'Home Loan' },
  { id: 'business', label: 'Business Loan' },
  { id: 'lap', label: 'Loan Against Property' },
]

const LOAN_TITLES: Record<LoanType, string> = {
  personal: 'Apply for a Personal Loan',
  home: 'Apply for a Home Loan',
  business: 'Apply for a Business Loan',
  lap: 'Apply for Loan Against Property',
}

interface ApplyClientProps {
  defaultType?: LoanType
  prefilledAmount?: string
  prefilledBank?: string
}

const trustBadges = [
  { icon: '🔒', title: 'Bank-grade Security', desc: '256-bit SSL encryption' },
  { icon: '📞', title: 'Expert Advisory', desc: 'Dedicated loan advisor' },
  { icon: '⚡', title: '24hr Response', desc: 'Quick turnaround' },
  { icon: '✅', title: 'Free Service', desc: 'No hidden charges' },
]

export default function ApplyClient({ defaultType = 'personal', prefilledAmount = '', prefilledBank = '' }: ApplyClientProps) {
  const [loanType, setLoanType] = useState<LoanType>(defaultType)

  const bankLabel = prefilledBank ? `Apply for ${prefilledBank} — ${LOAN_TYPES.find(t => t.id === loanType)?.label}` : LOAN_TITLES[loanType]

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-gold-dark font-semibold text-sm uppercase tracking-wide mb-2">Step 1 of 1</p>
          <h1 className="text-3xl font-bold text-navy mb-2">{bankLabel}</h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Fill in your details below. Our loan advisor will call you within 24 hours with personalized offers.
          </p>
        </div>

        {/* Loan type selector */}
        <div className="flex gap-1 bg-navy-50 rounded-xl p-1 mb-6">
          {LOAN_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => setLoanType(type.id)}
              className={`flex-1 py-2 px-2 rounded-lg text-xs font-semibold transition-all text-center ${
                loanType === type.id
                  ? 'bg-navy text-white shadow-sm'
                  : 'text-navy hover:text-navy-dark'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 lg:p-8 mb-6">
          <LeadForm prefilledAmount={prefilledAmount} prefilledBank={prefilledBank || LOAN_TYPES.find(t => t.id === loanType)?.label} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {trustBadges.map((badge) => (
            <div key={badge.title} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
              <div className="text-2xl mb-1.5">{badge.icon}</div>
              <p className="text-xs font-semibold text-navy">{badge.title}</p>
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
              className="flex items-center gap-3 bg-navy-50 hover:bg-navy-100 transition-colors rounded-xl p-4 border border-navy-100"
            >
              <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                MM
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm">Muthyala Mallesh</p>
                <p className="text-navy text-xs font-medium">Senior Loan Advisor</p>
                <p className="text-gray-700 text-sm font-bold mt-0.5">70958 99552</p>
              </div>
            </a>
            <a
              href="tel:9059314625"
              className="flex items-center gap-3 bg-gold-50 hover:bg-gold-100 transition-colors rounded-xl p-4 border border-gold-100"
            >
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-sm flex-shrink-0">
                JH
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm">Jahangeer</p>
                <p className="text-gold-dark text-xs font-medium">Loan Advisor</p>
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
