const LENDERS = [
  { name: 'State Bank of India', initials: 'SBI', color: '#1a3a6b' },
  { name: 'HDFC Bank', initials: 'HDFC', color: '#004c8c' },
  { name: 'ICICI Bank', initials: 'ICICI', color: '#f96714' },
  { name: 'Axis Bank', initials: 'AXIS', color: '#800000' },
  { name: 'Kotak Mahindra', initials: 'KMB', color: '#e31837' },
  { name: 'Yes Bank', initials: 'YES', color: '#00539b' },
  { name: 'Bajaj Finance', initials: 'BFL', color: '#0072bc' },
  { name: 'Tata Capital', initials: 'TATA', color: '#00447c' },
  { name: 'Fullerton India', initials: 'FIN', color: '#e4002b' },
  { name: 'LIC Housing', initials: 'LIC', color: '#006400' },
  { name: 'PNB Housing', initials: 'PNB', color: '#ff6600' },
  { name: 'Canara Bank', initials: 'CNR', color: '#003f87' },
]

function BankChip({ name, initials, color }: { name: string; initials: string; color: string }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 flex-shrink-0 select-none">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-sm"
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function BankScrollBanner() {
  // Duplicate for seamless infinite scroll
  const items = [...LENDERS, ...LENDERS]

  return (
    <div className="bg-warm-white border-y border-gray-100 py-6 overflow-hidden">
      <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-4">
        50+ Trusted Lending Partners
      </p>
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-warm-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-warm-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-[scroll_30s_linear_infinite]">
          {items.map((lender, idx) => (
            <BankChip key={`${lender.initials}-${idx}`} {...lender} />
          ))}
        </div>
      </div>
    </div>
  )
}
