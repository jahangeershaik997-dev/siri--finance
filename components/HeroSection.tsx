'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const router = useRouter()
  const [phone, setPhone] = useState('')

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/apply?phone=${phone}`)
  }

  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F2B46 0%, #1c4f82 50%, #1c7fe8 100%)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#e05526] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-sm px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#e05526] rounded-full animate-pulse"></span>
              One Stop Solution for All Your Financial Needs
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-[3.4rem] font-extrabold text-white leading-tight mb-5">
              Find the Perfect
              <br />
              <span style={{ color: '#f7b733' }}>Financial Solution</span>
              <br />
              for Your Needs
            </h1>

            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-lg">
              Personal · Home · Mortgage · Business · Construction · Car · Education &amp; Plot Loans.
              <span className="text-white font-medium"> CIBIL issue cases &amp; no income proof cases also handled.</span>
            </p>

            {/* Quick phone apply */}
            <form onSubmit={handleApply} className="flex gap-3 mb-8 max-w-md">
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Enter your mobile number"
                className="flex-1 px-4 py-3.5 rounded-xl text-gray-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#f7b733] placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-navy whitespace-nowrap transition-all hover:scale-105 active:scale-95 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #f7b733, #e05526)' }}
              >
                Apply Now
              </button>
            </form>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 text-sm text-white/80">
              {['100% Free Service', '150+ Lenders', 'CIBIL Issues OK', 'Instant Approval'].map(item => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#f7b733' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating cards */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {/* Rate cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {[
                { label: 'Personal Loan', rate: '9.75%', icon: '👤', color: '#1c7fe8' },
                { label: 'Home Loan', rate: '7.15%', icon: '🏠', color: '#2d8a4e' },
                { label: 'Mortgage Loan', rate: 'Best ROI', icon: '🏢', color: '#e05526' },
                { label: 'Business Loan', rate: 'Flexible', icon: '💼', color: '#7b3bbf' },
              ].map(card => (
                <div key={card.label} className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <p className="text-xs text-white/70 font-medium">{card.label}</p>
                  <p className="text-lg font-bold" style={{ color: '#f7b733' }}>{card.rate}</p>
                </div>
              ))}
            </div>

            {/* Advisor card */}
            <div className="bg-white rounded-2xl p-5 shadow-2xl w-full max-w-sm">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Talk to Our Expert</p>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ background: 'linear-gradient(135deg, #1c7fe8, #0F2B46)' }}>M</div>
                <div>
                  <p className="font-bold text-navy text-sm">M. Mallesh</p>
                  <p className="text-xs text-gray-500">Senior Loan Advisor</p>
                </div>
              </div>
              <a
                href="tel:9985899552"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #1c7fe8, #0F2B46)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                99858 99552
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1200 60 900 0 720 20C540 40 240 0 0 30Z" fill="#FAFAF7" />
        </svg>
      </div>
    </section>
  )
}
