// Centralised bank brand colours + logo chip
const BANK_BRANDS: Record<string, { bg: string; fg: string; label: string }> = {
  SBI:    { bg: '#22409a', fg: '#fff', label: 'SBI' },
  HDFC:   { bg: '#004c8c', fg: '#fff', label: 'HDFC' },
  ICICI:  { bg: '#f96714', fg: '#fff', label: 'ICICI' },
  AXIS:   { bg: '#840000', fg: '#fff', label: 'AXIS' },
  KMB:    { bg: '#e31837', fg: '#fff', label: 'KOTAK' },
  YES:    { bg: '#00539b', fg: '#fff', label: 'YES' },
  PNB:    { bg: '#1e6dbf', fg: '#ffcc00', label: 'PNB' },
  BOB:    { bg: '#f97316', fg: '#fff', label: 'BOB' },
  CNR:    { bg: '#003f87', fg: '#ffd700', label: 'CNR' },
  UBI:    { bg: '#003087', fg: '#fff', label: 'UBI' },
  IDBI:   { bg: '#4a1472', fg: '#fff', label: 'IDBI' },
  IB:     { bg: '#15803d', fg: '#fff', label: 'IB' },
  BFL:    { bg: '#0072bc', fg: '#fff', label: 'BAJAJ' },
  TATA:   { bg: '#00447c', fg: '#fff', label: 'TATA' },
  FIN:    { bg: '#e4002b', fg: '#fff', label: 'FIN' },
  LIC:    { bg: '#006400', fg: '#ffd700', label: 'LIC' },
  PNBHF:  { bg: '#c05621', fg: '#fff', label: 'PNBHF' },
  ABFL:   { bg: '#d4351c', fg: '#fff', label: 'ABFL' },
  HFC:    { bg: '#e31837', fg: '#fff', label: 'HERO' },
  MFI:    { bg: '#b45309', fg: '#fff', label: 'MUTH' },
  IDFC:   { bg: '#2d9b6e', fg: '#fff', label: 'IDFC' },
  INDUS:  { bg: '#00246b', fg: '#fff', label: 'INDUS' },
  BOI:    { bg: '#003087', fg: '#ffd700', label: 'BOI' },
  UCO:    { bg: '#003f87', fg: '#fff', label: 'UCO' },
  HSBC:   { bg: '#db0011', fg: '#fff', label: 'HSBC' },
  CITI:   { bg: '#003f8f', fg: '#fff', label: 'CITI' },
  SCB:    { bg: '#00aab4', fg: '#fff', label: 'SCB' },
  BOA:    { bg: '#e31837', fg: '#fff', label: 'BoA' },
  JK:     { bg: '#1c5c2e', fg: '#fff', label: 'J&K' },
  KBL:    { bg: '#4a0e0e', fg: '#fff', label: 'KBL' },
  SIB:    { bg: '#003d52', fg: '#fff', label: 'SIB' },
  FNO:    { bg: '#e05526', fg: '#fff', label: 'FINO' },
  UJJ:    { bg: '#1c6fbd', fg: '#fff', label: 'UJJIVAN' },
}

interface BankLogoProps {
  initials: string
  color?: string
  size?: number
  className?: string
}

export default function BankLogo({ initials, color, size = 48, className = '' }: BankLogoProps) {
  const brand = BANK_BRANDS[initials.toUpperCase()]
  const bg = brand?.bg ?? color ?? '#0F2B46'
  const fg = brand?.fg ?? '#fff'
  const label = brand?.label ?? initials

  const fontSize = label.length <= 3 ? Math.round(size * 0.28) : label.length <= 4 ? Math.round(size * 0.24) : Math.round(size * 0.2)

  return (
    <div
      className={`rounded-xl flex items-center justify-center font-extrabold tracking-tight shadow-sm flex-shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        color: fg,
        fontSize,
      }}
    >
      {label}
    </div>
  )
}
