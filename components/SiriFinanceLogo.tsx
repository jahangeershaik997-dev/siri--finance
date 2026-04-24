interface SiriFinanceLogoProps {
  size?: number
  showText?: boolean
  textColor?: string
}

export default function SiriFinanceLogo({ size = 36, showText = true, textColor = '#0F2B46' }: SiriFinanceLogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Siri Finance"
      >
        {/* Outer gold ring */}
        <circle cx="20" cy="20" r="19" fill="#0F2B46" />
        <circle cx="20" cy="20" r="19" stroke="#D4A843" strokeWidth="1.5" />
        {/* Inner coin lines */}
        <circle cx="20" cy="20" r="14" fill="none" stroke="#D4A843" strokeWidth="0.6" strokeOpacity="0.4" />
        {/* Rupee symbol path */}
        <line x1="13" y1="13.5" x2="27" y2="13.5" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" />
        <line x1="13" y1="18" x2="27" y2="18" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 18 L24 29" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 13.5 L13 18 L13 29" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" />
        <path d="M13.5 14.5 C13.5 14.5 16 14.5 18.5 14.5 C21.5 14.5 23.5 15.5 23.5 17.5 C23.5 19 22 19.5 19.5 19.5 L13.5 19.5" stroke="#D4A843" strokeWidth="0.5" strokeOpacity="0" />
      </svg>
      {showText && (
        <span className="text-xl font-bold leading-none" style={{ color: textColor }}>
          Siri{' '}
          <span style={{ color: '#D4A843' }}>Finance</span>
        </span>
      )}
    </div>
  )
}
