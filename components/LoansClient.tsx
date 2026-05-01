'use client'
import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import LoanCard from '@/components/LoanCard'
import HomeLoanCard from '@/components/HomeLoanCard'
import LoanFilters from '@/components/LoanFilters'
import { ALL_LOANS, HOME_LOANS, filterLoans } from '@/lib/loanEngine'

type LoanTab = 'personal' | 'home' | 'business' | 'lap' | 'insurance'

const TABS: { id: LoanTab; label: string }[] = [
  { id: 'personal', label: 'Personal Loans' },
  { id: 'home', label: 'Home Loans' },
  { id: 'business', label: 'Business Loans' },
  { id: 'lap', label: 'Loan Against Property' },
  { id: 'insurance', label: 'Insurance' },
]

const BUSINESS_TYPES = [
  { icon: '🏭', title: 'MSME Loans', desc: 'Micro, Small & Medium Enterprises. With / without income proof.' },
  { icon: '💼', title: 'Working Capital', desc: 'Fund day-to-day operations. Flexible repayment.' },
  { icon: '📋', title: 'Term Loans', desc: 'Long-term business expansion. Up to ₹50 Cr.' },
  { icon: '🏦', title: 'Overdraft Facility', desc: 'OD against property, FD or current account. Revolving credit.' },
  { icon: '🚚', title: 'Equipment Finance', desc: 'Machinery, vehicles & commercial equipment loans.' },
  { icon: '📦', title: 'Trade Finance', desc: 'Import/export finance, LC, BG & invoice discounting.' },
  { icon: '🔐', title: 'No Income Proof', desc: 'Business loans without ITR / income documents — also handled.' },
  { icon: '🏪', title: 'Shop / Office Loan', desc: 'Purchase or renovate your business premises.' },
]

const LAP_TYPES = [
  { icon: '🏠', title: 'Residential LAP', desc: 'Loan against house, flat or apartment.' },
  { icon: '🏢', title: 'Commercial LAP', desc: 'Office, shop, showroom or commercial building.' },
  { icon: '🏭', title: 'Industrial LAP', desc: 'Factory, warehouse & industrial property.' },
  { icon: '🌐', title: 'Plot / Open Land', desc: 'HMDA · DTCP · HUDA · Gramakantam plots.' },
  { icon: '🏗️', title: 'Under Construction', desc: 'Partial or full construction property accepted.' },
  { icon: '📝', title: 'Notary to Sale Deed', desc: 'Up to ₹1 Cr. Old city & non-plan properties.' },
  { icon: '✅', title: 'CIBIL Issue Cases', desc: 'Low CIBIL score cases — handled case-by-case.' },
  { icon: '💵', title: 'Cash Income Profiles', desc: 'Cash salary & cash rental income accepted.' },
]

const INSURANCE_TYPES = [
  { icon: '❤️', title: 'Life Insurance', desc: 'Term & whole-life plans from all major insurers.' },
  { icon: '🏥', title: 'Health Insurance', desc: 'Individual, family floater & group health covers.' },
  { icon: '🚗', title: 'Motor Insurance', desc: 'Car, bike & commercial vehicle insurance.' },
  { icon: '🏠', title: 'Property Insurance', desc: 'Home & business property protection.' },
]

const CREDIT_CARD_BANKS = [
  'SBI', 'HDFC', 'ICICI', 'Axis', 'Kotak', 'Yes Bank', 'IDFC First', 'IndusInd', 'RBL', 'AU Small Finance', 'Canara Bank', 'BoB',
]

function AdvisorCTA({ label }: { label: string }) {
  return (
    <div className="bg-gradient-to-r from-navy to-[#1c4f82] rounded-2xl p-6 text-white mt-8">
      <p className="font-bold text-lg mb-1">{label}</p>
      <p className="text-white/70 text-sm mb-4">Call our senior advisor M. Mallesh — he will match you with the best offer.</p>
      <div className="flex flex-wrap gap-3">
        <a
          href="tel:9985899552"
          className="flex items-center gap-2 font-bold text-navy px-6 py-3 rounded-xl text-sm"
          style={{ background: 'linear-gradient(135deg, #f7b733, #e05526)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call M. Mallesh — 99858 99552
        </a>
        <a
          href="/apply"
          className="flex items-center gap-2 bg-white/15 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-white/25 transition-colors"
        >
          Apply Online →
        </a>
      </div>
      <p className="text-xs text-white/50 mt-3">*T&amp;C Apply. Rates &amp; eligibility subject to lender &amp; profile assessment.</p>
    </div>
  )
}

function LoansContent() {
  const searchParams = useSearchParams()
  const salary = Number(searchParams.get('salary') || 50000)
  const creditScore = Number(searchParams.get('creditScore') || 750)

  const [activeTab, setActiveTab] = useState<LoanTab>('personal')
  const [maxRate, setMaxRate] = useState(24)
  const [minAmount, setMinAmount] = useState(0)

  const filteredPersonalLoans = useMemo(
    () =>
      filterLoans(ALL_LOANS, salary, creditScore, maxRate, minAmount).sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return a.minRate - b.minRate
      }),
    [salary, creditScore, maxRate, minAmount],
  )

  const isLowSalary = salary > 0 && salary >= 15000 && salary < 25000
  const isExcellentProfile = salary >= 25000 && creditScore > 750

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy mb-1">Loan Offers For You</h1>
        {salary > 0 && creditScore > 0 && activeTab === 'personal' && (
          <p className="text-gray-500 text-sm">
            Based on monthly salary of ₹{salary.toLocaleString('en-IN')} and CIBIL score of {creditScore}
          </p>
        )}
      </div>

      {/* Loan type tabs */}
      <div className="flex gap-1 bg-navy-50 rounded-xl p-1 mb-8 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-shrink-0 flex items-center gap-1.5 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-navy text-white shadow-sm'
                : 'text-navy hover:text-navy-dark'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'personal' && (
        <>
          {isLowSalary && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 flex gap-3">
              <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="text-yellow-800 font-semibold text-sm">Showing NBFC Loans for Your Salary Range</p>
                <p className="text-yellow-700 text-xs mt-0.5">Salary ₹15K–₹25K: NBFCs like Bajaj Finance, Tata Capital & Fullerton offer flexible eligibility. Minimum salary accepted is ₹15,000.</p>
              </div>
            </div>
          )}

          {isExcellentProfile && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex gap-3">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-green-800 font-semibold text-sm">Excellent Profile — Premium Rates Available!</p>
                <p className="text-green-700 text-xs mt-0.5">Your strong CIBIL score and salary qualify you for the lowest interest rates from top banks.</p>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-7">
            <aside className="lg:w-64 flex-shrink-0">
              <LoanFilters maxRate={maxRate} onMaxRateChange={setMaxRate} minAmount={minAmount} onMinAmountChange={setMinAmount} />
            </aside>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-5">
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold text-gray-900 text-base">{filteredPersonalLoans.length}</span> offers found
                </p>
                <p className="text-xs text-gray-400">Sorted by lowest rate first</p>
              </div>
              {filteredPersonalLoans.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-gray-600 font-medium mb-1">No offers match your filters</p>
                  <p className="text-gray-400 text-sm">Try adjusting the interest rate or loan amount filter.</p>
                </div>
              ) : (
                <div className="grid gap-5">
                  {filteredPersonalLoans.map((loan) => (
                    <LoanCard key={loan.id} loan={loan} highlighted={loan.featured} />
                  ))}
                  <p className="text-xs text-gray-400 mt-1">*T&amp;C Apply. Rates subject to lender eligibility, CIBIL score &amp; salary profile.</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {activeTab === 'home' && (
        <div>
          <div className="flex items-center justify-between mb-5">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-gray-900 text-base">{HOME_LOANS.length}</span> home loan offers
            </p>
            <p className="text-xs text-gray-400">Starting from 7.15% p.a.*</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {HOME_LOANS.map((loan) => (
              <HomeLoanCard key={loan.id} loan={loan} highlighted={loan.featured} />
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">*T&amp;C Apply. Rates subject to credit profile &amp; lender eligibility.</p>
        </div>
      )}

      {activeTab === 'business' && (
        <div>
          <div className="mb-8">
            <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <span className="text-2xl">✅</span>
              <p className="text-amber-900 font-semibold text-sm">
                Business Loans with &amp; without Income Proof — CIBIL Issue Cases Also Handled
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {BUSINESS_TYPES.map((b) => (
                <div key={b.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="font-bold text-navy text-sm mb-1">{b.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <h3 className="font-bold text-navy mb-3">Overdraft Facility</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <p className="font-semibold text-navy text-sm">OD Against Property</p>
                  <p className="text-gray-500 text-xs mt-1">Revolving credit against residential or commercial property</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <p className="font-semibold text-navy text-sm">OD Against FD</p>
                  <p className="text-gray-500 text-xs mt-1">Up to 90% of your fixed deposit value as overdraft limit</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <p className="font-semibold text-navy text-sm">Salary / Current Account OD</p>
                  <p className="text-gray-500 text-xs mt-1">Pre-approved OD on salary or business current account</p>
                </div>
              </div>
            </div>
          </div>
          <AdvisorCTA label="Get Business Loan / Overdraft — Best Offer for Your Profile" />
        </div>
      )}

      {activeTab === 'lap' && (
        <div>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-navy">Loan Against Property</h2>
                <p className="text-gray-500 text-sm mt-0.5">₹10 Lakh – ₹1000 Cr · Best ROI based on profile*</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-2">
                <span className="text-green-700 font-bold text-sm">150+ Lenders</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {LAP_TYPES.map((l) => (
                <div key={l.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="text-3xl mb-3">{l.icon}</div>
                  <h3 className="font-bold text-navy text-sm mb-1">{l.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 mb-4">
              <h3 className="font-bold text-navy mb-3">Private Finance — Special Cases</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  <p className="text-gray-700 text-xs">Gramakantam &amp; notary properties accepted</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  <p className="text-gray-700 text-xs">Old city properties financed</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  <p className="text-gray-700 text-xs">Minimum 30 Sq. Yards property accepted</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  <p className="text-gray-700 text-xs">ACC &amp; unauthorised floors upto 5th floor</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  <p className="text-gray-700 text-xs">Without plan permission also considered</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  <p className="text-gray-700 text-xs">Private finance for urgent &amp; complex cases</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                <h3 className="font-bold text-navy mb-2 text-sm">All Types of Insurance</h3>
                <div className="space-y-2">
                  {INSURANCE_TYPES.map(i => (
                    <div key={i.title} className="flex items-center gap-2">
                      <span className="text-lg">{i.icon}</span>
                      <div>
                        <p className="text-xs font-semibold text-navy">{i.title}</p>
                        <p className="text-xs text-gray-500">{i.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <h3 className="font-bold text-navy mb-2 text-sm">Credit Cards — All Banks</h3>
                <p className="text-xs text-gray-500 mb-3">Apply for lifetime free &amp; reward credit cards from all major banks</p>
                <div className="flex flex-wrap gap-2">
                  {CREDIT_CARD_BANKS.map(b => (
                    <span key={b} className="text-xs bg-white border border-blue-200 text-blue-800 rounded-lg px-2 py-1 font-medium">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <AdvisorCTA label="Get Loan Against Property / Private Finance — Best ROI for Your Profile" />
        </div>
      )}

      {activeTab === 'insurance' && (
        <div>
          <div className="mb-6">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">We offer all types of insurance from leading insurers</p>

            {/* Life & Term */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">❤️</span>
                <div>
                  <h3 className="font-bold text-navy text-base">Life &amp; Term Insurance</h3>
                  <p className="text-gray-500 text-sm">Secure your family's future with the right cover</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { name: 'LIC of India', desc: 'India\'s most trusted insurer. Jeevan Anand, Tech Term.' },
                  { name: 'HDFC Life', desc: 'Click 2 Protect, Sanchay Plus, Smart Protect Plan.' },
                  { name: 'SBI Life', desc: 'eShield, Smart Platina Plus, Retire Smart.' },
                  { name: 'ICICI Prudential', desc: 'iProtect Smart, Guaranteed Income, Wealth Builder.' },
                  { name: 'Max Life Insurance', desc: 'Online Term Plan Plus, Smart Secure Plus.' },
                  { name: 'Bajaj Allianz Life', desc: 'eTouch Online Term, Future Wealth Gain.' },
                ].map(ins => (
                  <div key={ins.name} className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="font-semibold text-navy text-sm">{ins.name}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{ins.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Health */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🏥</span>
                <div>
                  <h3 className="font-bold text-navy text-base">Health Insurance</h3>
                  <p className="text-gray-500 text-sm">Individual, family floater &amp; group health plans</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { name: 'Star Health', desc: 'Comprehensive Health, Senior Citizens Red Carpet.' },
                  { name: 'Niva Bupa', desc: 'ReAssure 2.0, Health Companion, MoneyBack.' },
                  { name: 'Care Health Insurance', desc: 'Care Supreme, Care Plus, Senior Plan.' },
                  { name: 'HDFC Ergo Health', desc: 'Optima Secure, My Health Suraksha.' },
                  { name: 'Bajaj Allianz Health', desc: 'Health Guard, Global Health Care.' },
                  { name: 'New India Assurance', desc: 'Mediclaim Policy, Top-up plans.' },
                ].map(ins => (
                  <div key={ins.name} className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="font-semibold text-navy text-sm">{ins.name}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{ins.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Motor */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🚗</span>
                <div>
                  <h3 className="font-bold text-navy text-base">Motor Insurance</h3>
                  <p className="text-gray-500 text-sm">Car, bike &amp; commercial vehicle — own damage + third party</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { name: 'ICICI Lombard', desc: 'Comprehensive & third-party car/bike cover.' },
                  { name: 'Bajaj Allianz General', desc: 'Motor Own Damage, bundled packages.' },
                  { name: 'HDFC Ergo', desc: 'Car Insurance, Two-wheeler, Commercial.' },
                  { name: 'New India Assurance', desc: 'Standard motor policy, fleet cover.' },
                  { name: 'Reliance General', desc: 'Car & bike insurance, instant claim.' },
                  { name: 'United India', desc: 'Motor policy for private & commercial.' },
                ].map(ins => (
                  <div key={ins.name} className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="font-semibold text-navy text-sm">{ins.name}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{ins.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Property & Other */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🏠</span>
                <div>
                  <h3 className="font-bold text-navy text-base">Property &amp; Business Insurance</h3>
                  <p className="text-gray-500 text-sm">Home, shop, office, factory &amp; business protection</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { name: 'SBI General Insurance', desc: 'Home & shop package policy.' },
                  { name: 'HDFC Ergo General', desc: 'Home Secure, Business Secure.' },
                  { name: 'Tata AIG', desc: 'Property, liability & marine coverage.' },
                  { name: 'National Insurance', desc: 'Householders, shopkeeper policies.' },
                  { name: 'Oriental Insurance', desc: 'Standard fire, property package.' },
                  { name: 'Bajaj Allianz', desc: 'Industrial All Risk, SME package.' },
                ].map(ins => (
                  <div key={ins.name} className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="font-semibold text-navy text-sm">{ins.name}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{ins.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <AdvisorCTA label="Get Best Insurance Quotes — All Types, All Budgets" />
        </div>
      )}
    </div>
  )
}

export default function LoansClient() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin w-8 h-8 border-4 border-navy border-t-transparent rounded-full"></div>
      </div>
    }>
      <LoansContent />
    </Suspense>
  )
}
