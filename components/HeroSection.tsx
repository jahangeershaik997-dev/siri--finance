'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { formatCurrency, getCreditScoreLabel } from '@/lib/utils'

export default function HeroSection() {
  const router = useRouter()
  const [loanAmount, setLoanAmount] = useState(500000)
  const [salary, setSalary] = useState(50000)
  const [creditScore, setCreditScore] = useState(750)

  const { label: scoreLabel, color: scoreColor } = getCreditScoreLabel(creditScore)

  const handleCheckEligibility = () => {
    router.push(`/loans?salary=${salary}&creditScore=${creditScore}&amount=${loanAmount}`)
  }

  return (
    <section className="bg-gradient-to-br from-[#0F2B46] via-[#1A3A5C] to-[#0F2B46] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-white/10 border border-gold/30 text-gold-light text-sm px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-gold rounded-full mr-2 animate-pulse"></span>
              India&apos;s #1 Loan Aggregator Platform
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Smart Loans.
              <br />
              <span className="text-gold">Faster Decisions.</span>
            </h1>
            <p className="text-navy-200 text-lg mb-8 leading-relaxed max-w-lg">
              Compare 50+ loan offers from top banks &amp; NBFCs. Get the lowest interest rates and instant approval —
              all in one place. 100% free.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-navy-200">
              {[
                '100% Free Service',
                '50+ Loan Partners',
                'Instant Results',
                'No CIBIL Impact',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl p-7 shadow-2xl">
            <h2 className="text-xl font-bold mb-6 text-navy">Check Your Loan Eligibility</h2>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-600">Loan Amount Required</label>
                  <span className="text-sm font-bold text-navy">{formatCurrency(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                  <span>₹50K</span>
                  <span>₹50L</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-600">Monthly Salary</label>
                  <span className="text-sm font-bold text-navy">{formatCurrency(salary)}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full h-2 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                  <span>₹10K</span>
                  <span>₹5L</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-600">CIBIL Score</label>
                  <span className={`text-sm font-bold ${scoreColor}`}>
                    {creditScore} — {scoreLabel}
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="900"
                  step="10"
                  value={creditScore}
                  onChange={(e) => setCreditScore(Number(e.target.value))}
                  className="w-full h-2 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-xs mt-1.5">
                  <span className="text-red-400">Poor (300)</span>
                  <span className="text-green-500">Excellent (900)</span>
                </div>
              </div>

              <button
                onClick={handleCheckEligibility}
                className="w-full bg-gradient-to-r from-navy to-navy-light text-white py-4 rounded-xl font-semibold text-lg hover:from-navy-light hover:to-navy transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                Check Eligibility →
              </button>

              <p className="text-center text-xs text-gray-400">
                No credit score impact &nbsp;·&nbsp; Free service &nbsp;·&nbsp; Instant results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
