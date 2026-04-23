import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import LoanOffers from '@/components/LoanOffers'
import WhyChooseUs from '@/components/WhyChooseUs'
import TestimonialsSection from '@/components/TestimonialsSection'
import LeadForm from '@/components/LeadForm'

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

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">Quick Apply</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Get Your Loan in 3 Simple Steps
              </h2>
              <p className="text-gray-500 text-base mb-8 leading-relaxed">
                Fill the form once. Our advisors will call you with the best personalised offers from 50+ lenders — completely free.
              </p>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Submit Your Details', desc: 'Fill the quick form with your salary, loan amount, and CIBIL score.' },
                  { step: '02', title: 'Get Matched', desc: 'Our engine matches you with the best offers from top banks and NBFCs.' },
                  { step: '03', title: 'Advisor Calls You', desc: 'Muthyala Mallesh or Jahangeer will call within 24 hrs to guide you.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="tel:7095899552" className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 hover:bg-blue-100 transition-colors">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">MM</div>
                  <div>
                    <p className="text-xs text-gray-500">Senior Advisor</p>
                    <p className="text-sm font-bold text-gray-900">Muthyala Mallesh · 70958 99552</p>
                  </div>
                </a>
                <a href="tel:9059314625" className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl px-4 py-3 hover:bg-green-100 transition-colors">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs">JH</div>
                  <div>
                    <p className="text-xs text-gray-500">Loan Advisor</p>
                    <p className="text-sm font-bold text-gray-900">Jahangeer · 90593 14625</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Apply for a Loan</h3>
              <p className="text-gray-500 text-sm mb-6">Free service · No CIBIL impact · Response in 24hrs</p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
