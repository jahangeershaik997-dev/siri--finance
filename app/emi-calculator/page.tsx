import type { Metadata } from 'next'
import EmiCalculator from '@/components/EmiCalculator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EMI Calculator — Siri Finance',
  description: 'Calculate your loan EMI instantly. Plan repayments with our free EMI calculator.',
}

const faqs = [
  {
    q: 'How is EMI calculated?',
    a: 'EMI = P × r × (1+r)^n / ((1+r)^n - 1) where P = principal, r = monthly interest rate (annual rate ÷ 12 ÷ 100), and n = tenure in months.',
  },
  {
    q: 'What is a good EMI-to-income ratio?',
    a: 'Most banks recommend keeping total EMIs below 40-50% of your monthly take-home salary. This helps you maintain financial stability while repaying loans.',
  },
  {
    q: 'Can I prepay my loan?',
    a: 'Yes, most banks allow partial or full prepayment. SBI charges 0% prepayment fee for floating rate loans. Some banks charge 1-5% for fixed rate loans in the first year.',
  },
]

export default function EmiCalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Free Tool</p>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">EMI Calculator</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Calculate your monthly EMI instantly. Adjust the loan amount, interest rate, and tenure to find the perfect
          repayment plan for your budget.
        </p>
      </div>

      <EmiCalculator />

      <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-6 lg:p-8">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          EMI Formula Explained
        </h3>
        <div className="bg-white rounded-xl p-4 font-mono text-sm text-gray-700 mb-4 overflow-x-auto border border-blue-100">
          EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
        </div>
        <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <span className="font-bold text-blue-700 text-base">P</span>
            <p className="mt-1">Principal loan amount (₹)</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <span className="font-bold text-blue-700 text-base">r</span>
            <p className="mt-1">Monthly interest rate = Annual Rate ÷ 12 ÷ 100</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-blue-100">
            <span className="font-bold text-blue-700 text-base">n</span>
            <p className="mt-1">Loan tenure in months</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <p className="font-semibold text-gray-900 mb-2 text-sm">{faq.q}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Found Your Ideal EMI?</h3>
        <p className="text-gray-600 text-sm mb-5">Now compare real loan offers from 50+ banks and NBFCs to match it.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/loans"
            className="bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors"
          >
            Compare Loan Offers
          </Link>
          <Link
            href="/apply"
            className="bg-gray-200 text-gray-800 px-7 py-3 rounded-xl font-semibold text-sm hover:bg-gray-300 transition-colors"
          >
            Apply for a Loan
          </Link>
        </div>
      </div>
    </div>
  )
}
