export function formatCurrency(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)} Cr`
  } else if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)} L`
  } else if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(0)}K`
  }
  return `₹${amount.toLocaleString('en-IN')}`
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function calculateEMI(principal: number, annualRate: number, tenureMonths: number): number {
  if (principal <= 0 || tenureMonths <= 0) return 0
  const monthlyRate = annualRate / 100 / 12
  if (monthlyRate === 0) return Math.round(principal / tenureMonths)
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1)
  return Math.round(emi)
}

export function calculateTotalInterest(emi: number, tenureMonths: number, principal: number): number {
  return Math.max(0, emi * tenureMonths - principal)
}

export function getCreditScoreLabel(score: number): { label: string; color: string } {
  if (score >= 800) return { label: 'Excellent', color: 'text-green-600' }
  if (score >= 750) return { label: 'Very Good', color: 'text-green-500' }
  if (score >= 700) return { label: 'Good', color: 'text-yellow-500' }
  if (score >= 650) return { label: 'Fair', color: 'text-orange-500' }
  return { label: 'Poor', color: 'text-red-500' }
}
