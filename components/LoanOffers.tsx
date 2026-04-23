import Link from 'next/link'
import LoanCard from './LoanCard'
import { ALL_LOANS } from '@/lib/loanEngine'

export default function LoanOffers() {
  const featuredLoans = ALL_LOANS.filter((loan) => loan.featured).slice(0, 3)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Loan Offers</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Popular Loan Offers
            </h2>
            <p className="text-gray-600 text-lg">
              Handpicked offers from India&apos;s most trusted lenders
            </p>
          </div>
          <Link
            href="/loans"
            className="hidden md:flex items-center gap-1 text-blue-600 font-medium hover:underline text-sm"
          >
            View all offers
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredLoans.map((loan) => (
            <LoanCard key={loan.id} loan={loan} highlighted />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/loans"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            Compare All Loan Offers
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
