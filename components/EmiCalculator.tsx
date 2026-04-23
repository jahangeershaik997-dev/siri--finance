'use client'
import { useState, useMemo } from 'react'
import { calculateEMI, calculateTotalInterest, formatINR } from '@/lib/utils'
import Link from 'next/link'

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState(500000)
  const [rate, setRate] = useState(10.5)
  const [tenure, setTenure] = useState(36)

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

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2.5">
              <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
              <span className="text-sm font-bold text-blue-600">{formatINR(principal)}</span>
            </div>
            <input
              type="range"
              min="50000"
              max="5000000"
              step="50000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full h-2 rounded-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1.5">
              <span>₹50K</span>
              <span>₹50L</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2.5">
              <label className="text-sm font-semibold text-gray-700">Interest Rate (p.a.)</label>
              <span className="text-sm font-bold text-blue-600">{rate}%</span>
            </div>
            <input
              type="range"
              min="6"
              max="36"
              step="0.25"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 rounded-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1.5">
              <span>6%</span>
              <span>36%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2.5">
              <label className="text-sm font-semibold text-gray-700">Loan Tenure</label>
              <span className="text-sm font-bold text-blue-600">
                {tenureYears > 0 ? `${tenureYears} yr${tenureYears > 1 ? 's' : ''}` : ''}
                {tenureMonths > 0 ? ` ${tenureMonths} mo` : ''}
                {tenureYears === 0 && tenureMonths === 0 ? '0 mo' : ''}
              </span>
            </div>
            <input
              type="range"
              min="6"
              max="84"
              step="6"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-2 rounded-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1.5">
              <span>6 months</span>
              <span>7 years</span>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-7 text-white text-center shadow-lg">
            <p className="text-blue-200 text-sm mb-1">Monthly EMI</p>
            <p className="text-4xl font-bold tracking-tight">{formatINR(emi)}</p>
            <p className="text-blue-200 text-sm mt-1">per month for {tenure} months</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-xs text-blue-500 mb-1 font-medium">Principal Amount</p>
              <p className="font-bold text-blue-900">{formatINR(principal)}</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4">
              <p className="text-xs text-orange-500 mb-1 font-medium">Total Interest</p>
              <p className="font-bold text-orange-700">{formatINR(totalInterest)}</p>
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
                className="bg-blue-600 transition-all duration-300 ease-in-out"
                style={{ width: `${principalPercent}%` }}
              />
              <div
                className="bg-orange-400 transition-all duration-300 ease-in-out"
                style={{ width: `${interestPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-xs mt-2">
              <span className="flex items-center gap-1.5 text-gray-600">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm inline-block"></span>
                Principal ({principalPercent}%)
              </span>
              <span className="flex items-center gap-1.5 text-gray-600">
                <span className="w-2.5 h-2.5 bg-orange-400 rounded-sm inline-block"></span>
                Interest ({interestPercent}%)
              </span>
            </div>
          </div>

          <Link
            href="/loans"
            className="block w-full text-center bg-blue-600 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors"
          >
            Find Loans at {rate}% or Lower →
          </Link>
        </div>
      </div>
    </div>
  )
}
