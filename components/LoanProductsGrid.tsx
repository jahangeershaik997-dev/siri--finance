import Link from 'next/link'

const PRODUCTS = [
  { icon: '👤', title: 'Personal Loan', rate: 'From 9.75% p.a.', desc: 'Salary from ₹15K. Quick approval. Banks & NBFCs.', href: '/loans?tab=personal', color: '#1c7fe8', bg: '#eff6ff' },
  { icon: '🏠', title: 'Home Loan', rate: 'From 7.15% p.a.', desc: 'Salaried, Self-employed & NRI. Upto ₹100 Cr.', href: '/loans?tab=home', color: '#2d8a4e', bg: '#f0fdf4' },
  { icon: '🏢', title: 'Mortgage Loan', rate: 'Best ROI', desc: 'Loan Against Property. Upto ₹1000 Cr.', href: '/loans?tab=mortgage', color: '#7b3bbf', bg: '#faf5ff' },
  { icon: '💼', title: 'Business Loan', rate: 'Flexible Terms', desc: 'With / without income proof. All business types.', href: '/loans?tab=business', color: '#e05526', bg: '#fff7ed' },
  { icon: '🏗️', title: 'Construction Loan', rate: 'Custom Plans', desc: 'Self-construction, builder, mestri & plot+construction.', href: '/loans?tab=construction', color: '#0f766e', bg: '#f0fdfa' },
  { icon: '🚗', title: 'Car Loan', rate: 'Low EMI', desc: 'New & used vehicles. All major brands.', href: '/loans?tab=car', color: '#b45309', bg: '#fffbeb' },
  { icon: '🎓', title: 'Education Loan', rate: 'Special Rates', desc: 'Top universities & colleges. India & abroad.', href: '/loans?tab=education', color: '#0369a1', bg: '#f0f9ff' },
  { icon: '🌐', title: 'Open Plot Loan', rate: '₹10L – ₹1000 Cr', desc: 'HMDA · DTCP · HUDA · Gramakantam · GP Plots.', href: '/loans?tab=plot', color: '#be123c', bg: '#fff1f2' },
  { icon: '📊', title: 'Project Finance', rate: 'Large Scale', desc: 'Commercial, industrial & infrastructure projects.', href: '/loans?tab=project', color: '#6d28d9', bg: '#f5f3ff' },
  { icon: '💳', title: 'Credit Cards', rate: 'All Banks', desc: 'Apply for credit cards from all major banks.', href: '/apply?type=creditcard', color: '#0f2b46', bg: '#e8eff5' },
  { icon: '🔐', title: 'Private Finance', rate: 'Flexible', desc: 'Private lending solutions for special cases.', href: '/apply?type=private', color: '#9f1239', bg: '#fff1f2' },
  { icon: '🛡️', title: 'Insurance', rate: 'All Types', desc: 'Life, health, vehicle & property insurance.', href: '/apply?type=insurance', color: '#166534', bg: '#f0fdf4' },
]

export default function LoanProductsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#e05526' }}>Our Services</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-3">We Provide All Types of Loans</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From personal loans to large-scale project finance — one stop for all your financial needs.
          </p>
        </div>

        {/* CIBIL highlight */}
        <div className="flex items-center justify-center gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 mb-10 max-w-2xl mx-auto">
          <span className="text-2xl">✅</span>
          <p className="text-amber-900 font-semibold text-sm text-center">
            CIBIL Issue Cases &amp; No Income Proof Cases — <span className="text-amber-700">Also Handled</span>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-center"
              style={{ backgroundColor: p.bg }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3 shadow-sm transition-transform group-hover:scale-110"
                style={{ backgroundColor: p.color + '20' }}
              >
                {p.icon}
              </div>
              <h3 className="font-bold text-navy text-sm mb-1 leading-tight">{p.title}</h3>
              <p className="text-xs font-semibold mb-1.5" style={{ color: p.color }}>{p.rate}</p>
              <p className="text-xs text-gray-500 leading-snug">{p.desc}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:opacity-90 transition-all hover:scale-105 text-base"
            style={{ background: 'linear-gradient(135deg, #1c7fe8, #0F2B46)' }}
          >
            Apply for Any Loan — Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
