import Link from 'next/link'
import { LoanOffer } from '@/lib/loanEngine'
import { formatCurrency } from '@/lib/utils'
import BankLogo from './BankLogo'

interface LoanCardProps {
  loan: LoanOffer
  highlighted?: boolean
}

export default function LoanCard({ loan, highlighted = false }: LoanCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border transition-all duration-200 hover:shadow-md ${
        highlighted ? 'border-gold/40 shadow-md shadow-gold/10' : 'border-gray-100 shadow-sm'
      } p-6`}
    >
      {loan.featured && (
        <div className="inline-flex items-center bg-gold-50 text-gold-dark text-xs font-semibold px-2.5 py-1 rounded-full mb-4 border border-gold/20">
          <span className="w-1.5 h-1.5 bg-gold rounded-full mr-1.5"></span>
          Recommended
        </div>
      )}

      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <BankLogo initials={loan.bankInitials} color={loan.color} size={48} />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm leading-tight">{loan.bank}</h3>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                loan.type === 'bank' ? 'bg-navy-50 text-navy' : 'bg-orange-50 text-orange-600'
              }`}
            >
              {loan.type === 'bank' ? 'Scheduled Bank' : 'NBFC'}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-navy">{loan.minRate}%*</p>
          <p className="text-xs text-gray-500 -mt-0.5">p.a. onwards</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2.5 mb-5">
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-xs text-gray-500 mb-1">Max Amount</p>
          <p className="text-sm font-semibold text-gray-800">{formatCurrency(loan.maxAmount)}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-xs text-gray-500 mb-1">Max Tenure</p>
          <p className="text-sm font-semibold text-gray-800">
            {loan.maxTenure >= 12 ? `${Math.floor(loan.maxTenure / 12)} Yrs` : `${loan.maxTenure} Mo`}
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-xs text-gray-500 mb-1">Min Salary</p>
          <p className="text-sm font-semibold text-gray-800">{formatCurrency(loan.minSalary)}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {loan.features.map((feature, idx) => (
          <span
            key={idx}
            className="text-xs bg-navy-50 text-navy-light px-2.5 py-1 rounded-full border border-navy-100"
          >
            {feature}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <Link
          href={`/apply?bank=${loan.id}&bank_name=${encodeURIComponent(loan.bank)}`}
          className="flex-1 text-center bg-navy text-white py-3 rounded-xl font-semibold text-sm hover:bg-navy-light transition-colors"
        >
          Apply Now
        </Link>
        <Link
          href={`/loans`}
          className="px-4 py-3 rounded-xl font-semibold text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          Details
        </Link>
      </div>
    </div>
  )
}
