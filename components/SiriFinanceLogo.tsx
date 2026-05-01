interface SiriFinanceLogoProps {
  size?: number
  showText?: boolean
  textColor?: string
  subtitleColor?: string
}

export default function SiriFinanceLogo({
  size = 40,
  showText = true,
  textColor = '#0F2B46',
  subtitleColor = '#e05526',
}: SiriFinanceLogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Siri Financial Services"
      >
        {/* Outer blue arc — ~270°, opening to upper-right */}
        <path
          d="M 63 17 A 33 33 0 1 0 63 63"
          stroke="#1c7fe8"
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner orange-red arc */}
        <path
          d="M 53 55 A 22 22 0 0 0 53 25"
          stroke="#e05526"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* SFS text — blue S, purple-blend F, orange-red S */}
        <text
          x="33"
          y="51"
          fontSize="23"
          fontWeight="900"
          fontFamily="Arial Black, Arial, sans-serif"
          textAnchor="middle"
        >
          <tspan fill="#1c7fe8">S</tspan>
          <tspan fill="#7b3bbf">F</tspan>
          <tspan fill="#e05526">S</tspan>
        </text>
      </svg>

      {showText && (
        <div className="leading-tight">
          <span className="text-base font-bold block" style={{ color: textColor }}>
            Siri Financial
          </span>
          <span className="text-xs font-extrabold tracking-widest block uppercase" style={{ color: subtitleColor }}>
            Services
          </span>
        </div>
      )}
    </div>
  )
}
