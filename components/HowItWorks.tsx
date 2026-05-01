import Link from 'next/link'

const STEPS = [
  {
    num: '01',
    icon: '📋',
    title: 'Share Your Requirements',
    desc: 'Tell us the loan type, amount, and your profile. Takes less than 2 minutes.',
  },
  {
    num: '02',
    icon: '🔍',
    title: 'We Compare & Match',
    desc: 'Our advisors compare 50+ lenders and find the best rate for your profile.',
  },
  {
    num: '03',
    icon: '📞',
    title: 'Get Expert Guidance',
    desc: 'Our loan expert calls you within 24 hours with personalised offers.',
  },
  {
    num: '04',
    icon: '✅',
    title: 'Loan Disbursed',
    desc: 'Documents verified, loan sanctioned and amount credited to your account.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #0F2B46 0%, #1a3a5c 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#f7b733' }}>Simple Process</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">How It Works</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Get your loan processed in 4 easy steps — hassle-free and completely free of charge.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STEPS.map((step, idx) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%-1rem)] w-8 h-0.5 bg-white/20 z-10" />
              )}
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 text-center hover:bg-white/15 transition-all">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, #1c7fe8, #e05526)', }}
                >
                  {step.icon}
                </div>
                <span className="text-5xl font-black text-white/10 block leading-none mb-2">{step.num}</span>
                <h3 className="font-bold text-white text-sm mb-2 leading-tight">{step.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-navy transition-all hover:scale-105 shadow-lg text-sm"
            style={{ background: 'linear-gradient(135deg, #f7b733, #e05526)' }}
          >
            Start Your Application →
          </Link>
          <a
            href="tel:7095899552"
            className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call M. Mallesh — 70958 99552
          </a>
        </div>
      </div>
    </section>
  )
}
