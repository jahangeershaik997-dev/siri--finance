export interface LoanOffer {
  id: string
  bank: string
  bankInitials: string
  color: string
  type: 'bank' | 'nbfc'
  minAmount: number
  maxAmount: number
  minRate: number
  maxRate: number
  minTenure: number
  maxTenure: number
  processingFee: string
  minSalary: number
  minCreditScore: number
  featured: boolean
  features: string[]
}

export const ALL_LOANS: LoanOffer[] = [
  {
    id: 'sbi-personal',
    bank: 'State Bank of India',
    bankInitials: 'SBI',
    color: '#1a3a6b',
    type: 'bank',
    minAmount: 100000,
    maxAmount: 2000000,
    minRate: 10.5,
    maxRate: 15.0,
    minTenure: 12,
    maxTenure: 84,
    processingFee: '1% of loan amount',
    minSalary: 25000,
    minCreditScore: 700,
    featured: true,
    features: ['Zero prepayment charges', 'Quick disbursal', 'Flexible EMI'],
  },
  {
    id: 'hdfc-personal',
    bank: 'HDFC Bank',
    bankInitials: 'HDFC',
    color: '#004c8c',
    type: 'bank',
    minAmount: 50000,
    maxAmount: 4000000,
    minRate: 10.25,
    maxRate: 14.0,
    minTenure: 12,
    maxTenure: 60,
    processingFee: 'Up to 2.5% of loan amount',
    minSalary: 25000,
    minCreditScore: 720,
    featured: true,
    features: ['Instant approval', '24/7 customer support', 'Online account management'],
  },
  {
    id: 'icici-personal',
    bank: 'ICICI Bank',
    bankInitials: 'ICICI',
    color: '#f96714',
    type: 'bank',
    minAmount: 50000,
    maxAmount: 5000000,
    minRate: 10.75,
    maxRate: 16.0,
    minTenure: 12,
    maxTenure: 72,
    processingFee: '0.5% to 2% of loan amount',
    minSalary: 30000,
    minCreditScore: 700,
    featured: false,
    features: ['Pre-approved offers', 'Paperless process', 'Flexible tenure'],
  },
  {
    id: 'axis-personal',
    bank: 'Axis Bank',
    bankInitials: 'AXIS',
    color: '#800000',
    type: 'bank',
    minAmount: 50000,
    maxAmount: 4000000,
    minRate: 11.0,
    maxRate: 15.75,
    minTenure: 12,
    maxTenure: 60,
    processingFee: '1.5% to 2% of loan amount',
    minSalary: 25000,
    minCreditScore: 700,
    featured: false,
    features: ['Doorstep service', 'Digital process', 'No collateral required'],
  },
  {
    id: 'kotak-personal',
    bank: 'Kotak Mahindra Bank',
    bankInitials: 'KMB',
    color: '#e31837',
    type: 'bank',
    minAmount: 50000,
    maxAmount: 4000000,
    minRate: 10.99,
    maxRate: 14.99,
    minTenure: 12,
    maxTenure: 60,
    processingFee: 'Up to 2.5% of loan amount',
    minSalary: 25000,
    minCreditScore: 730,
    featured: false,
    features: ['Instant transfer', 'Online application', 'Minimal documentation'],
  },
  {
    id: 'yes-personal',
    bank: 'Yes Bank',
    bankInitials: 'YES',
    color: '#00539b',
    type: 'bank',
    minAmount: 100000,
    maxAmount: 3500000,
    minRate: 10.99,
    maxRate: 16.99,
    minTenure: 12,
    maxTenure: 60,
    processingFee: 'Up to 2% of loan amount',
    minSalary: 25000,
    minCreditScore: 700,
    featured: false,
    features: ['Quick processing', 'Competitive rates', 'Flexible repayment'],
  },
  {
    id: 'bajaj-personal',
    bank: 'Bajaj Finance',
    bankInitials: 'BFL',
    color: '#0072bc',
    type: 'nbfc',
    minAmount: 30000,
    maxAmount: 3500000,
    minRate: 12.0,
    maxRate: 20.0,
    minTenure: 12,
    maxTenure: 84,
    processingFee: 'Up to 3.93% of loan amount',
    minSalary: 15000,
    minCreditScore: 650,
    featured: true,
    features: ['Instant approval', 'Flexible EMI options', 'Salary from ₹15K'],
  },
  {
    id: 'tata-personal',
    bank: 'Tata Capital',
    bankInitials: 'TATA',
    color: '#00447c',
    type: 'nbfc',
    minAmount: 75000,
    maxAmount: 3500000,
    minRate: 10.99,
    maxRate: 18.0,
    minTenure: 12,
    maxTenure: 72,
    processingFee: 'Up to 2.75% of loan amount',
    minSalary: 15000,
    minCreditScore: 650,
    featured: false,
    features: ['No end-use restriction', 'Quick processing', 'Salary from ₹15K'],
  },
  {
    id: 'fullerton-personal',
    bank: 'Fullerton India',
    bankInitials: 'FIN',
    color: '#e4002b',
    type: 'nbfc',
    minAmount: 50000,
    maxAmount: 2500000,
    minRate: 11.99,
    maxRate: 24.0,
    minTenure: 12,
    maxTenure: 60,
    processingFee: 'Up to 3% of loan amount',
    minSalary: 15000,
    minCreditScore: 600,
    featured: false,
    features: ['Self-employed accepted', 'Minimal documentation', 'Salary from ₹15K'],
  },
]

export interface HomeLoanOffer {
  id: string
  bank: string
  bankInitials: string
  color: string
  minRate: number
  maxRate: number
  maxAmount: number
  maxTenure: number
  processingFee: string
  featured: boolean
  features: string[]
}

export const HOME_LOANS: HomeLoanOffer[] = [
  {
    id: 'hdfc-home',
    bank: 'HDFC Bank',
    bankInitials: 'HDFC',
    color: '#004c8c',
    minRate: 8.25,
    maxRate: 9.75,
    maxAmount: 100000000,
    maxTenure: 360,
    processingFee: 'Up to 0.5% of loan amount',
    featured: true,
    features: ['Competitive rates', 'Up to 90% financing', 'Flexible EMI'],
  },
  {
    id: 'sbi-home',
    bank: 'State Bank of India',
    bankInitials: 'SBI',
    color: '#1a3a6b',
    minRate: 8.40,
    maxRate: 10.15,
    maxAmount: 100000000,
    maxTenure: 360,
    processingFee: '0.35% of loan amount',
    featured: true,
    features: ['Government bank trust', 'Zero prepayment penalty', '30-year tenure'],
  },
  {
    id: 'lic-home',
    bank: 'LIC Housing Finance',
    bankInitials: 'LIC',
    color: '#00539b',
    minRate: 8.35,
    maxRate: 9.90,
    maxAmount: 150000000,
    maxTenure: 360,
    processingFee: 'Up to 0.25% of loan amount',
    featured: true,
    features: ['Trusted brand', 'Low processing fee', 'Up to ₹15 Cr'],
  },
  {
    id: 'icici-home',
    bank: 'ICICI Bank',
    bankInitials: 'ICICI',
    color: '#f96714',
    minRate: 8.60,
    maxRate: 9.85,
    maxAmount: 100000000,
    maxTenure: 360,
    processingFee: '0.5% of loan amount',
    featured: false,
    features: ['Digital process', 'Pre-approved offers', 'Quick disbursal'],
  },
]

export function filterLoans(
  loans: LoanOffer[],
  salary: number,
  creditScore: number,
  maxRate?: number,
  minLoanAmount?: number,
): LoanOffer[] {
  return loans.filter((loan) => {
    if (salary > 0 && salary < 25000 && loan.type === 'bank') return false
    if (salary > 0 && salary < 15000) return false  // min salary 15k
    if (creditScore > 750 && loan.maxRate > 15) return false
    if (maxRate && loan.minRate > maxRate) return false
    if (minLoanAmount && loan.maxAmount < minLoanAmount) return false
    if (creditScore > 0 && creditScore < loan.minCreditScore) return false
    return true
  })
}

export function getRecommendedLoans(salary: number, creditScore: number, loanAmount: number): LoanOffer[] {
  const filtered = filterLoans(ALL_LOANS, salary, creditScore)
  return filtered
    .filter((loan) => loan.maxAmount >= loanAmount)
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return a.minRate - b.minRate
    })
}
