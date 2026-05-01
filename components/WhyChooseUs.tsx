const reasons = [
  {
    icon: (
      <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: '150+ Lending Partners',
    description: 'Compare loans from SBI, HDFC, ICICI, Axis, Kotak, PNB, Bajaj Finance, Tata Capital, and 140+ more banks & NBFCs — all in one place.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Instant Eligibility Check',
    description: 'Get your loan eligibility in under 60 seconds. No paperwork, no CIBIL impact. Just enter your details and compare.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Lowest Interest Rates',
    description: 'Our smart algorithm finds the lowest applicable rate for your profile. Personal loans starting from 9.75% p.a.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: '100% Secure & Private',
    description: 'Bank-grade 256-bit SSL encryption protects your data. We never share your information without explicit consent.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Fully Digital Process',
    description: 'Apply, track, and manage your loan application from anywhere, anytime — on mobile, tablet, or desktop.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Expert Loan Advisors',
    description: 'Our IRDA-certified loan advisors are available 6 days a week to help you choose the right loan product.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold-dark font-semibold text-sm uppercase tracking-wide mb-2">Why Us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Why Choose Siri Financial Services?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We make loan comparison simple, fast, and completely free. Here&apos;s what sets us apart from the rest.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group"
            >
              <div className="bg-navy-50 rounded-xl flex items-center justify-center mb-4 p-3 group-hover:bg-gold-50 transition-colors w-fit">
                {reason.icon}
              </div>
              <h3 className="text-base font-semibold text-navy mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
