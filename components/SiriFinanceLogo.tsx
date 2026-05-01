interface SiriFinanceLogoProps {
  size?: number
  showText?: boolean
  textColor?: string
  subtitleColor?: string
}

export default function SiriFinanceLogo({
  size = 44,
  showText = true,
  textColor = '#0F2B46',
  subtitleColor = '#e05526',
}: SiriFinanceLogoProps) {
  // SVG aspect ratio: 2.5:1 (wide logo with SFS text extending right)
  const svgW = Math.round(size * 2.5)
  const svgH = size

  return (
    <div className="flex flex-col">
      <svg
        width={svgW}
        height={svgH}
        viewBox="0 0 260 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Siri Financial Services"
      >
        <defs>
          <linearGradient id="sfsGrad" x1="0%" y1="0%" x2="100%" y2="60%">
            <stop offset="0%"   stopColor="#1BAEEA" />
            <stop offset="42%"  stopColor="#4E7A9A" />
            <stop offset="100%" stopColor="#7B2D10" />
          </linearGradient>
        </defs>

        {/*
          Circle center: (42, 52), radius: 44
          Blue arc: ~300° opening at upper-right
            start: angle -52° → (42+44·cos(-52°), 52+44·sin(-52°)) = (69,17)
            end:   angle  42° → (42+44·cos( 42°), 52+44·sin( 42°)) = (75,81)
          large-arc=1, sweep=0 (counterclockwise, long way around left side)
        */}
        <path
          d="M 69 17 A 44 44 0 1 0 75 81"
          stroke="#1BAEEA"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        {/*
          Red arc: inside, ~180° from lower area to upper-right
          Using smaller radius 32, going counterclockwise (right side)
          start: (42+32·cos(55°), 52+32·sin(55°)) = (60,78)
          end:   (42+32·cos(-55°), 52+32·sin(-55°)) = (60,26)
          small-arc=0, sweep=0
        */}
        <path
          d="M 60 78 A 32 32 0 0 0 60 26"
          stroke="#E8461A"
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* SFS — bold italic, blue-to-rust gradient */}
        <text
          x="24"
          y="82"
          fontSize="82"
          fontWeight="900"
          fontStyle="italic"
          fontFamily="Arial Black, Arial, sans-serif"
          fill="url(#sfsGrad)"
          letterSpacing="-3"
        >
          SFS
        </text>
      </svg>

      {showText && (
        <span
          className="text-xs font-extrabold uppercase tracking-wider block leading-tight"
          style={{ color: subtitleColor, marginTop: '1px' }}
        >
          Siri Financial Services
        </span>
      )}
    </div>
  )
}
