import Link from 'next/link'
import HomeLoanCard from './HomeLoanCard'
import { HOME_LOANS } from '@/lib/loanEngine'

export default function HomeLoanOffers() {
  const featured = HOME_LOANS.filter((loan) => loan.featured)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold-dark font-semibold text-sm uppercase tracking-wide mb-2">Home Loans</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-3">
              Own Your Dream Home
            </h2>
            <p className="text-gray-600 text-lg">
              Home loans starting from 8.25% p.a. — compare & choose the best offer
            </p>
          </div>
          <Link
            href="/emi-calculator"
            className="hidden md:flex items-center gap-1 text-navy font-medium hover:text-gold transition-colors text-sm"
          >
            Calculate EMI
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((loan) => (
            <HomeLoanCard key={loan.id} loan={loan} highlighted />
          ))}
        </div>

        <div className="mt-10 bg-gradient-to-r from-navy-50 to-gold-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-navy-100">
          <div>
            <p className="font-bold text-navy text-lg">Need help choosing the right home loan?</p>
            <p className="text-gray-600 text-sm mt-1">Our advisors will compare all offers and guide you — completely free.</p>
          </div>
          <Link
            href="/apply?type=home"
            className="flex-shrink-0 bg-navy text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-navy-light transition-colors shadow-sm text-sm whitespace-nowrap"
          >
            Get Free Consultation →
          </Link>
        </div>
      </div>
    </section>
  )
}
