import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import LoanOffers from '@/components/LoanOffers'
import WhyChooseUs from '@/components/WhyChooseUs'
import TestimonialsSection from '@/components/TestimonialsSection'

const stats = [
  { value: '₹500Cr+', label: 'Loans Disbursed' },
  { value: '2 Lakh+', label: 'Satisfied Customers' },
  { value: '50+', label: 'Lending Partners' },
  { value: '10.25%', label: 'Lowest Rate p.a.' },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="bg-white border-b border-gray-100 py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl lg:text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <LoanOffers />
      <WhyChooseUs />

      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wide mb-3">EMI Calculator</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Plan Your Repayment in Seconds</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Use our smart EMI calculator to see exactly how much you&apos;ll pay each month before applying. Adjust
            loan amount, tenure, and rate in real time.
          </p>
          <Link
            href="/emi-calculator"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-base hover:bg-blue-50 transition-colors shadow-lg"
          >
            Open EMI Calculator
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Your Loan?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Apply in minutes. Our advisors will match you with the best offers and guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-blue-700 transition-colors shadow-sm"
            >
              Apply Now — It&apos;s Free
            </Link>
            <Link
              href="/loans"
              className="bg-gray-100 text-gray-800 px-8 py-4 rounded-xl font-semibold text-base hover:bg-gray-200 transition-colors"
            >
              Compare Loan Offers
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
