import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import BankScrollBanner from '@/components/BankScrollBanner'
import LoanProductsGrid from '@/components/LoanProductsGrid'
import HomeLoanOffers from '@/components/HomeLoanOffers'
import PropertyLoansSection from '@/components/PropertyLoansSection'
import HowItWorks from '@/components/HowItWorks'
import WhyChooseUs from '@/components/WhyChooseUs'
import TestimonialsSection from '@/components/TestimonialsSection'
import LeadForm from '@/components/LeadForm'

const stats = [
  { value: '₹500Cr+', label: 'Loans Disbursed', icon: '💰' },
  { value: '2 Lakh+', label: 'Happy Customers', icon: '😊' },
  { value: '50+', label: 'Lending Partners', icon: '🏦' },
  { value: '7.15%', label: 'Home Loan From', icon: '📉' },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <p className="text-2xl lg:text-3xl font-extrabold" style={{ color: '#1c7fe8' }}>{stat.value}</p>
                <p className="text-gray-500 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling bank partners */}
      <BankScrollBanner />

      {/* All loan products grid */}
      <LoanProductsGrid />

      {/* How it works */}
      <HowItWorks />

      {/* Home loan offers */}
      <HomeLoanOffers />

      {/* Property loans — 21 features */}
      <PropertyLoansSection />

      {/* Why choose us */}
      <WhyChooseUs />

      {/* EMI Calculator CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 text-3xl" style={{ background: 'linear-gradient(135deg, #1c7fe8, #0F2B46)' }}>
            🧮
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-3">Plan Your EMI in Seconds</h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Personal, Home, and Business loan EMI calculator with live breakdowns.
          </p>
          <Link
            href="/emi-calculator"
            className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:opacity-90 transition-all hover:scale-105 text-base"
            style={{ background: 'linear-gradient(135deg, #1c7fe8, #0F2B46)' }}
          >
            Open EMI Calculator →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Quick Apply */}
      <section className="py-16 border-t border-gray-100" style={{ background: '#FAFAF7' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#e05526' }}>Quick Apply</p>
            <h2 className="text-3xl font-extrabold text-navy mb-3">Ready to Get Your Loan?</h2>
            <p className="text-gray-500 text-base">
              Fill the form — our advisor will call you within 24 hours with the best offer.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 lg:p-8">
            <LeadForm />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:7095899552"
              className="flex items-center gap-3 rounded-xl px-5 py-3 hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #1c7fe8, #0F2B46)' }}
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">MM</div>
              <div>
                <p className="text-xs text-white/70">Senior Advisor</p>
                <p className="text-sm font-bold text-white">M. Mallesh · 70958 99552</p>
              </div>
            </a>
            <a
              href="tel:9059314625"
              className="flex items-center gap-3 rounded-xl px-5 py-3 hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #e05526, #c04010)' }}
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">JH</div>
              <div>
                <p className="text-xs text-white/70">Loan Advisor</p>
                <p className="text-sm font-bold text-white">Jahangeer · 90593 14625</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
