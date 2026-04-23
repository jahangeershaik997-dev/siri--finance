'use client'

interface LoanFiltersProps {
  maxRate: number
  onMaxRateChange: (rate: number) => void
  minAmount: number
  onMinAmountChange: (amount: number) => void
}

const AMOUNT_OPTIONS = [
  { value: 0, label: 'Any Amount' },
  { value: 100000, label: '₹1L+' },
  { value: 500000, label: '₹5L+' },
  { value: 1000000, label: '₹10L+' },
  { value: 2000000, label: '₹20L+' },
]

export default function LoanFilters({ maxRate, onMaxRateChange, minAmount, onMinAmountChange }: LoanFiltersProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-20">
      <h3 className="font-semibold text-gray-900 mb-5 flex items-center gap-2">
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
        </svg>
        Filter Offers
      </h3>

      <div className="space-y-7">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">Max Interest Rate</label>
            <span className="text-sm font-bold text-blue-600">{maxRate}% p.a.</span>
          </div>
          <input
            type="range"
            min="8"
            max="36"
            step="0.5"
            value={maxRate}
            onChange={(e) => onMaxRateChange(Number(e.target.value))}
            className="w-full h-2 rounded-full accent-blue-600 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1.5">
            <span>8%</span>
            <span>36%</span>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-3">Minimum Loan Amount</label>
          <div className="space-y-2">
            {AMOUNT_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => onMinAmountChange(option.value)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  minAmount === option.value
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          onMaxRateChange(24)
          onMinAmountChange(0)
        }}
        className="w-full mt-6 text-sm text-gray-500 hover:text-blue-600 font-medium py-2 border border-gray-200 rounded-xl hover:border-blue-200 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  )
}
