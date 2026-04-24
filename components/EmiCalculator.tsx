'use client'
import { useState, useMemo } from 'react'
import { calculateEMI, calculateTotalInterest, formatINR } from '@/lib/utils'
import Link from 'next/link'

type LoanTab = 'personal' | 'home' | 'business'

const TABS: { id: LoanTab; label: string }[] = [
  { id: 'personal', label: 'Personal Loan' },
  { id: 'home', label: 'Home Loan' },
  { id: 'business', label: 'Business Loan' },
]

const TAB_PRESETS: Record<LoanTab, { principal: number; rate: number; tenure: number; maxPrincipal: number; maxTenure: number; principalStep: number }> = {
  personal: { principal: 500000, rate: 10.5, tenure: 36, maxPrincipal: 5000000, maxTenure: 84, principalStep: 50000 },
  home: { principal: 3000000, rate: 8.5, tenure: 240, maxPrincipal: 20000000, maxTenure: 360, principalStep: 100000 },
  business: { principal: 1000000, rate: 14, tenure: 60, maxPrincipal: 10000000, maxTenure: 84, principalStep: 100000 },
}

export default function EmiCalculator() {
  const [activeTab, setActiveTab] = useState<LoanTab>('personal')
  const preset = TAB_PRESETS[activeTab]

  const [principal, setPrincipal] = useState(preset.principal)
  const [rate, setRate] = useState(preset.rate)
  const [tenure, setTenure] = useState(preset.tenure)

  const handleTabChange = (tab: LoanTab) => {
    setActiveTab(tab)
    const p = TAB_PRESETS[tab]
    setPrincipal(p.principal)
    setRate(p.rate)
    setTenure(p.tenure)
  }

  const emi = useMemo(() => calculateEMI(principal, rate, tenure), [principal, rate, tenure])
  const totalAmount = useMemo(() => emi * tenure, [emi, tenure])
  const totalInterest = useMemo(() => calculateTotalInterest(emi, tenure, principal), [emi, tenure, principal])
  const interestPercent = useMemo(() =>
    totalAmount > 0 ? Math.round((totalInterest / totalAmount) * 100) : 0,
    [totalInterest, totalAmount]
  )
  const principalPercent = 100 - interestPercent

  const tenureYears = Math.floor(tenure / 12)
  const tenureMonths = tenure % 12

  const rateMin = activeTab === 'home' ? 6 : 6
  const rateMax = activeTab === 'home' ? 15 : activeTab === 'business' ? 36 : 36

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8">
      {/* Tabs */}
      <div className="flex gap-1 bg-navy-50 rounded-xl p-1 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-navy text-white shadow-sm'
                : 'text-navy hover:text-navy-dark'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2.5">
              <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
              <span className="text-sm font-bold text-navy">{formatINR(principal)}</span>
            </div>
            <input
              type="range"
              min="50000"
              max={preset.maxPrincipal}
              step={preset.principalStep}
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full h-2 rounded-full cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1.5">
              <span>₹50K</span>
              <span>{formatINR(preset.maxPrincipal)}</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2.5">
              <label className="text-sm font-semibold text-gray-700">Interest Rate (p.a.)</label>
              <span className="text-sm font-bold text-navy">{rate}%</span>
            </div>
            <input
              type="range"
              min={rateMin}
              max={rateMax}
              step="0.25"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 rounded-full cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1.5">
              <span>{rateMin}%</span>
              <span>{rateMax}%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2.5">
              <label className="text-sm font-semibold text-gray-700">Loan Tenure</label>
              <span className="text-sm font-bold text-navy">
                {tenureYears > 0 ? `${tenureYears} yr${tenureYears > 1 ? 's' : ''}` : ''}
                {tenureMonths > 0 ? ` ${tenureMonths} mo` : ''}
                {tenureYears === 0 && tenureMonths === 0 ? '0 mo' : ''}
              </span>
            </div>
            <input
              type="range"
              min="6"
              max={preset.maxTenure}
              step="6"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-2 rounded-full cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1.5">
              <span>6 months</span>
              <span>{Math.floor(preset.maxTenure / 12)} years</span>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-7 text-white text-center shadow-lg">
            <p className="text-navy-200 text-sm mb-1">Monthly EMI</p>
            <p className="text-4xl font-bold tracking-tight">{formatINR(emi)}</p>
            <p className="text-navy-200 text-sm mt-1">per month for {tenure} months</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-navy-50 rounded-xl p-4">
              <p className="text-xs text-navy font-medium mb-1">Principal Amount</p>
              <p className="font-bold text-navy-dark">{formatINR(principal)}</p>
            </div>
            <div className="bg-gold-50 rounded-xl p-4">
              <p className="text-xs text-gold-dark mb-1 font-medium">Total Interest</p>
              <p className="font-bold text-gold-dark">{formatINR(totalInterest)}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1 font-medium">Total Amount Payable</p>
            <p className="font-bold text-gray-900 text-xl">{formatINR(totalAmount)}</p>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-gray-600 mb-1.5">
              <span>Payment Breakdown</span>
            </div>
            <div className="flex rounded-full overflow-hidden h-3 bg-gray-100">
              <div
                className="bg-navy transition-all duration-300 ease-in-out"
                style={{ width: `${principalPercent}%` }}
              />
              <div
                className="bg-gold transition-all duration-300 ease-in-out"
                style={{ width: `${interestPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-xs mt-2">
              <span className="flex items-center gap-1.5 text-gray-600">
                <span className="w-2.5 h-2.5 bg-navy rounded-sm inline-block"></span>
                Principal ({principalPercent}%)
              </span>
              <span className="flex items-center gap-1.5 text-gray-600">
                <span className="w-2.5 h-2.5 bg-gold rounded-sm inline-block"></span>
                Interest ({interestPercent}%)
              </span>
            </div>
          </div>

          <Link
            href="/loans"
            className="block w-full text-center bg-navy text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-navy-light transition-colors"
          >
            Find Loans at {rate}% or Lower →
          </Link>
        </div>
      </div>
    </div>
  )
}
