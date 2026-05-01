const LENDERS = [
  { name: 'State Bank of India', short: 'SBI', color: '#22409a', bg: '#e8edf7' },
  { name: 'HDFC Bank', short: 'HDFC', color: '#004c8c', bg: '#e6eef8' },
  { name: 'ICICI Bank', short: 'ICICI', color: '#f96714', bg: '#fef0e6' },
  { name: 'Axis Bank', short: 'AXIS', color: '#800000', bg: '#f7e6e6' },
  { name: 'Kotak Mahindra', short: 'KMB', color: '#e31837', bg: '#fde8eb' },
  { name: 'Punjab National Bank', short: 'PNB', color: '#ff6600', bg: '#fff0e5' },
  { name: 'Bank of Baroda', short: 'BoB', color: '#f97316', bg: '#fff3e6' },
  { name: 'Canara Bank', short: 'CNR', color: '#003f87', bg: '#e5ecf6' },
  { name: 'Union Bank', short: 'UBI', color: '#003087', bg: '#e5ebf5' },
  { name: 'Yes Bank', short: 'YES', color: '#00539b', bg: '#e5eef7' },
  { name: 'IDBI Bank', short: 'IDBI', color: '#6b21a8', bg: '#f3e8fd' },
  { name: 'Indian Bank', short: 'IB', color: '#15803d', bg: '#e8f5ee' },
  { name: 'Bajaj Finance', short: 'BFL', color: '#0072bc', bg: '#e5f1fb' },
  { name: 'Tata Capital', short: 'TATA', color: '#00447c', bg: '#e5ecf6' },
  { name: 'Fullerton India', short: 'FIN', color: '#e4002b', bg: '#fde5ea' },
  { name: 'LIC Housing Finance', short: 'LIC', color: '#006400', bg: '#e5f2e5' },
  { name: 'PNB Housing', short: 'PNBHF', color: '#c05621', bg: '#fdf0e8' },
  { name: 'Aditya Birla Finance', short: 'ABFL', color: '#d4351c', bg: '#fde9e6' },
  { name: 'Hero FinCorp', short: 'HFC', color: '#e31837', bg: '#fde8eb' },
  { name: 'Muthoot Finance', short: 'MFI', color: '#b45309', bg: '#fef3e2' },
]

function BankChip({ name, short, color, bg }: { name: string; short: string; color: string; bg: string }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 flex-shrink-0 select-none min-w-[180px]">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-xs flex-shrink-0 shadow-sm"
        style={{ backgroundColor: bg, color }}
      >
        {short}
      </div>
      <div>
        <span className="text-sm font-semibold text-gray-800 whitespace-nowrap block">{name}</span>
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
            <BankChip key={`${lender.short}-${idx}`} {...lender} />
          ))}
        </div>
      </div>
    </div>
  )
}
