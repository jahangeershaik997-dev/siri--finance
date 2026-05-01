import Link from 'next/link'

const LOAN_TYPES = [
  { icon: '🏠', title: 'Home Loan', desc: 'Salaried · Self-employed · NRI' },
  { icon: '🏢', title: 'Mortgage Loan', desc: 'Residential & commercial LAP' },
  { icon: '🏭', title: 'Commercial Property', desc: 'Office, retail, industrial' },
  { icon: '🌐', title: 'Open Plot Loan', desc: 'HMDA · DTCP · HUDA · GP Plots' },
  { icon: '🏗️', title: 'Plot + Construction', desc: 'Combined loan available' },
  { icon: '⚖️', title: 'Balance Transfer', desc: 'Switch for lower EMI' },
]

const FEATURES = [
  { num: '01', text: 'Low LTV — Upto ₹1 Cr' },
  { num: '02', text: 'Without Income Proof — Upto ₹50L' },
  { num: '03', text: 'Latest Business Proof — Upto ₹50L' },
  { num: '04', text: 'GP Apartment / Unauthorised Floors Upto 5th Floor' },
  { num: '05', text: 'Home Loan: Salaried, Self-employed & NRIs' },
  { num: '06', text: 'Mortgage: Salaried & Self-employed' },
  { num: '07', text: 'Commercial Property Loans' },
  { num: '08', text: 'Without Plan Permission Accepted' },
  { num: '09', text: 'Builder Purchase' },
  { num: '10', text: 'Self Construction Loans' },
  { num: '11', text: 'Mestri Purchase' },
  { num: '12', text: 'Plot + Construction' },
  { num: '13', text: 'Balance Transfer' },
  { num: '14', text: 'Loan Against Property (LAP)' },
  { num: '15', text: 'Min 30 Sq. Yards Property Accepted' },
  { num: '16', text: 'Gramakantam Property Accepted' },
  { num: '17', text: 'Notary to Sale Deed / Gift Deed Upto ₹1 Cr' },
  { num: '18', text: 'ACC Property Accepted' },
  { num: '19', text: 'Cash Salary Profile Considered' },
  { num: '20', text: 'Cash Rentals Also Accepted' },
  { num: '21', text: 'Old City Properties Financed' },
]

export default function PropertyLoansSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Property Loans</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Home · Mortgage · Commercial
            <br />
            <span className="text-gold">Open Plot Loans</span>
          </h2>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto">
            HMDA · DTCP · HUDA · GP Plots · Industrial Property
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-gold/30 rounded-full px-6 py-2.5 mt-5">
            <span className="text-gold font-bold text-xl">₹10L</span>
            <span className="text-white/50">—</span>
            <span className="text-gold font-bold text-xl">₹1000 Cr</span>
            <span className="text-white/70 text-sm">Loan Amount</span>
          </div>
        </div>

        {/* Loan type cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
          {LOAN_TYPES.map((type) => (
            <div
              key={type.title}
              className="bg-white/10 hover:bg-white/15 border border-white/10 hover:border-gold/40 rounded-2xl p-4 text-center transition-all cursor-pointer"
            >
              <div className="text-3xl mb-2">{type.icon}</div>
              <p className="text-white font-semibold text-sm leading-tight">{type.title}</p>
              <p className="text-white/60 text-xs mt-1 leading-tight">{type.desc}</p>
            </div>
          ))}
        </div>

        {/* 21 features grid */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">
          <h3 className="text-gold font-bold text-lg mb-6 text-center flex items-center justify-center gap-2">
            <span>What We Finance — 21 Special Categories</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {FEATURES.map((f) => (
              <div
                key={f.num}
                className="flex items-start gap-3 bg-white/5 hover:bg-white/10 rounded-xl px-4 py-3 transition-colors"
              >
                <span className="text-gold font-bold text-xs mt-0.5 flex-shrink-0 bg-gold/20 rounded-lg px-1.5 py-0.5">
                  {f.num}
                </span>
                <p className="text-white/90 text-sm leading-snug">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CIBIL + No Income Proof highlight */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="text-3xl flex-shrink-0">✅</div>
          <div>
            <p className="text-white font-bold text-base">CIBIL Issue Cases &amp; No Income Proof Cases — Also Handled</p>
            <p className="text-white/70 text-sm mt-1">
              Cash salary, cash rentals, self-construction, gramakantam properties, old city &amp; unauthorised floors — all accepted. Contact us to discuss your specific case.
            </p>
          </div>
        </div>

        {/* Best ROI + CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-white/10 border border-gold/30 rounded-2xl p-7">
          <div>
            <p className="text-gold font-bold text-lg mb-1">Best ROI Based on Customer Profile</p>
            <p className="text-white/80 text-sm max-w-lg">
              Every file is different — contact <strong>M. Mallesh</strong> directly to discuss your property and get the best possible rate for your profile.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:9985899552"
              className="flex items-center gap-3 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-lg whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call M. Mallesh — 99858 99552
            </a>
            <Link
              href="/apply?type=property"
              className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold px-6 py-3.5 rounded-xl transition-colors whitespace-nowrap"
            >
              Apply Online →
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
