'use client'
import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import LoanCard from '@/components/LoanCard'
import LoanFilters from '@/components/LoanFilters'
import { ALL_LOANS, filterLoans } from '@/lib/loanEngine'

function LoansContent() {
  const searchParams = useSearchParams()
  const salary = Number(searchParams.get('salary') || 50000)
  const creditScore = Number(searchParams.get('creditScore') || 750)

  const [maxRate, setMaxRate] = useState(24)
  const [minAmount, setMinAmount] = useState(0)

  const filteredLoans = useMemo(
    () =>
      filterLoans(ALL_LOANS, salary, creditScore, maxRate, minAmount).sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return a.minRate - b.minRate
      }),
    [salary, creditScore, maxRate, minAmount],
  )

  const isLowSalary = salary > 0 && salary < 25000
  const isExcellentProfile = salary >= 25000 && creditScore > 750

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Loan Offers For You</h1>
        {salary > 0 && creditScore > 0 && (
          <p className="text-gray-500 text-sm">
            Based on monthly salary of ₹{salary.toLocaleString('en-IN')} and CIBIL score of {creditScore}
          </p>
        )}
      </div>

      {isLowSalary && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 flex gap-3">
          <svg
            className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <div>
            <p className="text-yellow-800 font-semibold text-sm">Showing NBFC Loans for Your Salary Range</p>
            <p className="text-yellow-700 text-xs mt-0.5">
              With a monthly salary below ₹25,000, NBFCs offer better eligibility with flexible criteria.
            </p>
          </div>
        </div>
      )}

      {isExcellentProfile && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex gap-3">
          <svg
            className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="text-green-800 font-semibold text-sm">Excellent Profile — Premium Rates Available!</p>
            <p className="text-green-700 text-xs mt-0.5">
              Your strong CIBIL score and salary qualify you for the lowest interest rates from top banks.
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-7">
        <aside className="lg:w-64 flex-shrink-0">
          <LoanFilters
            maxRate={maxRate}
            onMaxRateChange={setMaxRate}
            minAmount={minAmount}
            onMinAmountChange={setMinAmount}
          />
        </aside>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-5">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-gray-900 text-base">{filteredLoans.length}</span> offers found
            </p>
            <p className="text-xs text-gray-400">Sorted by lowest rate first</p>
          </div>

          {filteredLoans.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
              <svg
                className="w-12 h-12 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-600 font-medium mb-1">No offers match your filters</p>
              <p className="text-gray-400 text-sm">Try adjusting the interest rate or loan amount filter.</p>
            </div>
          ) : (
            <div className="grid gap-5">
              {filteredLoans.map((loan) => (
                <LoanCard key={loan.id} loan={loan} highlighted={loan.featured} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
    </div>
  )
}

export default function LoansPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LoansContent />
    </Suspense>
  )
}
