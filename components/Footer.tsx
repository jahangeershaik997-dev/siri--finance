import Link from 'next/link'
import SiriFinanceLogo from './SiriFinanceLogo'

const PRODUCTS = [
  { href: '/loans?tab=personal', label: 'Personal Loan' },
  { href: '/loans?tab=home', label: 'Home Loan' },
  { href: '/loans?tab=mortgage', label: 'Mortgage Loan' },
  { href: '/loans?tab=business', label: 'Business Loan' },
  { href: '/loans?tab=construction', label: 'Construction Loan' },
  { href: '/loans?tab=car', label: 'Car Loan' },
  { href: '/loans?tab=education', label: 'Education Loan' },
  { href: '/loans?tab=plot', label: 'Open Plot Loan' },
]

const MORE_SERVICES = [
  { href: '/loans?tab=project', label: 'Project Finance' },
  { href: '/loans?tab=insurance', label: 'Insurance Services' },
  { href: '/loans?tab=creditcard', label: 'Credit Cards (All Banks)' },
  { href: '/loans?tab=private', label: 'Private Finance' },
  { href: '/emi-calculator', label: 'EMI Calculator' },
  { href: '/apply', label: 'Apply Now' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand + about */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <SiriFinanceLogo size={44} textColor="#ffffff" subtitleColor="#e05526" />
            </div>
            <p className="text-sm font-semibold text-[#e05526] mb-2 uppercase tracking-wide">
              One Stop Solution for All Your Financial Needs
            </p>
            <p className="text-gray-400 leading-relaxed mb-4 max-w-md text-sm">
              We provide all types of loans — Personal, Home, Mortgage, Business, Construction,
              Car, Education &amp; more. CIBIL issue cases and No Income Proof cases also handled.
            </p>

            {/* Address */}
            <div className="flex items-start gap-2.5 text-sm mb-5">
              <svg className="w-4 h-4 text-[#e05526] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-white font-medium">Surekha Chambers, 2nd Floor, 204A</p>
                <p>Lalbanglow Road, Ameerpet</p>
                <p>Hyderabad — 500016</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-white text-2xl font-bold">₹500Cr+</p>
                <p className="text-xs text-gray-500 mt-0.5">Loans Disbursed</p>
              </div>
              <div className="w-px bg-navy-light"></div>
              <div>
                <p className="text-white text-2xl font-bold">150+</p>
                <p className="text-xs text-gray-500 mt-0.5">Lending Partners</p>
              </div>
              <div className="w-px bg-navy-light"></div>
              <div>
                <p className="text-white text-2xl font-bold">10+</p>
                <p className="text-xs text-gray-500 mt-0.5">Years of Trust</p>
              </div>
            </div>
          </div>

          {/* Loan Products */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Loan Products</h3>
            <ul className="space-y-2 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="hover:text-[#e05526] transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services + Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">More Services</h3>
            <ul className="space-y-2 text-sm mb-6">
              {MORE_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-[#e05526] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-[#e05526] transition-colors">About Us</Link></li>
              <li><Link href="/admin" className="hover:text-[#e05526] transition-colors">Partner Portal</Link></li>
              <li><Link href="#" className="hover:text-[#e05526] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#e05526] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Advisors */}
        <div className="border-t border-navy-light pt-8 mb-8">
          <p className="text-white font-semibold text-sm mb-4">Contact Our Loan Advisors</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:9985899552"
              className="flex items-center gap-3 bg-navy-light hover:bg-navy transition-colors rounded-xl px-4 py-3"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ backgroundColor: '#1c7fe8' }}>
                MM
              </div>
              <div>
                <p className="text-white text-sm font-semibold">M. Mallesh</p>
                <p className="text-xs" style={{ color: '#1c7fe8' }}>Senior Advisor · 99858 99552</p>
              </div>
            </a>
            <a
              href="tel:9059314625"
              className="flex items-center gap-3 bg-navy-light hover:bg-navy transition-colors rounded-xl px-4 py-3"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ backgroundColor: '#e05526' }}>
                JH
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Jahangeer</p>
                <p className="text-xs" style={{ color: '#e05526' }}>Loan Advisor · 90593 14625</p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">© 2026 Siri Financial Services. All rights reserved.</p>
          <p className="text-gray-500">Ameerpet, Hyderabad · One Stop Solution for All Financial Needs</p>
        </div>
      </div>
    </footer>
  )
}
