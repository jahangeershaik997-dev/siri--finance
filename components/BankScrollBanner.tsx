import BankLogo from './BankLogo'

const LENDERS = [
  { name: 'State Bank of India', initials: 'SBI' },
  { name: 'HDFC Bank', initials: 'HDFC' },
  { name: 'ICICI Bank', initials: 'ICICI' },
  { name: 'Axis Bank', initials: 'AXIS' },
  { name: 'Kotak Mahindra', initials: 'KMB' },
  { name: 'Punjab National Bank', initials: 'PNB' },
  { name: 'Bank of Baroda', initials: 'BOB' },
  { name: 'Canara Bank', initials: 'CNR' },
  { name: 'Union Bank of India', initials: 'UBI' },
  { name: 'Yes Bank', initials: 'YES' },
  { name: 'IDBI Bank', initials: 'IDBI' },
  { name: 'Indian Bank', initials: 'IB' },
  { name: 'Bajaj Finance', initials: 'BFL' },
  { name: 'Tata Capital', initials: 'TATA' },
  { name: 'Fullerton India', initials: 'FIN' },
  { name: 'LIC Housing Finance', initials: 'LIC' },
  { name: 'PNB Housing Finance', initials: 'PNBHF' },
  { name: 'IDFC First Bank', initials: 'IDFC' },
  { name: 'IndusInd Bank', initials: 'INDUS' },
  { name: 'Bank of India', initials: 'BOI' },
  { name: 'UCO Bank', initials: 'UCO' },
  { name: 'South Indian Bank', initials: 'SIB' },
  { name: 'Aditya Birla Finance', initials: 'ABFL' },
  { name: 'Muthoot Finance', initials: 'MFI' },
]

function BankChip({ name, initials }: { name: string; initials: string }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-gray-100 flex-shrink-0 select-none min-w-[190px]">
      <BankLogo initials={initials} size={44} />
      <div>
        <span className="text-sm font-semibold text-gray-800 whitespace-nowrap block leading-tight">{name}</span>
        <span className="text-xs text-gray-400">Lending Partner</span>
      </div>
    </div>
  )
}

export default function BankScrollBanner() {
  const items = [...LENDERS, ...LENDERS]

  return (
    <div className="bg-[#FAFAF7] border-y border-gray-100 py-6 overflow-hidden">
      <p className="text-center text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">
        150+ Trusted Lending Partners — Banks &amp; NBFCs
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#FAFAF7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#FAFAF7] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 animate-[scroll_40s_linear_infinite]">
          {items.map((lender, idx) => (
            <BankChip key={`${lender.initials}-${idx}`} {...lender} />
          ))}
        </div>
      </div>
    </div>
  )
}
