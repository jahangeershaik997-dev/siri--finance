import Link from 'next/link'
import SiriFinanceLogo from './SiriFinanceLogo'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <SiriFinanceLogo size={36} textColor="#ffffff" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md text-sm">
              India&apos;s smart loan aggregation platform. Compare personal loans, home loans, and business loans from
              50+ lenders. Get the best rates instantly — free service, no CIBIL impact.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-white text-2xl font-bold">₹500Cr+</p>
                <p className="text-xs text-gray-500 mt-0.5">Loans Disbursed</p>
              </div>
              <div className="w-px bg-navy-light"></div>
              <div>
                <p className="text-white text-2xl font-bold">2L+</p>
                <p className="text-xs text-gray-500 mt-0.5">Happy Customers</p>
              </div>
              <div className="w-px bg-navy-light"></div>
              <div>
                <p className="text-white text-2xl font-bold">50+</p>
                <p className="text-xs text-gray-500 mt-0.5">Lending Partners</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Products</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/loans?tab=personal" className="hover:text-gold transition-colors">
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link href="/loans?tab=home" className="hover:text-gold transition-colors">
                  Home Loan
                </Link>
              </li>
              <li>
                <Link href="/loans?tab=mortgage" className="hover:text-gold transition-colors">
                  Mortgage Loan
                </Link>
              </li>
              <li>
                <Link href="/loans?tab=business" className="hover:text-gold transition-colors">
                  Business Loan
                </Link>
              </li>
              <li>
                <Link href="/loans?tab=car" className="hover:text-gold transition-colors">
                  Car Loan
                </Link>
              </li>
              <li>
                <Link href="/loans?tab=plot" className="hover:text-gold transition-colors">
                  Open Plot Loan
                </Link>
              </li>
              <li>
                <Link href="/emi-calculator" className="hover:text-gold transition-colors">
                  EMI Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-gold transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-gold transition-colors">
                  Partner Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light pt-8 mb-8">
          <p className="text-white font-semibold text-sm mb-4">Contact Our Loan Advisors</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:7095899552"
              className="flex items-center gap-3 bg-navy-light hover:bg-navy transition-colors rounded-xl px-4 py-3"
            >
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-xs flex-shrink-0">
                MM
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Muthyala Mallesh</p>
                <p className="text-gold text-xs">Senior Advisor · 70958 99552</p>
              </div>
            </a>
            <a
              href="tel:9059314625"
              className="flex items-center gap-3 bg-navy-light hover:bg-navy transition-colors rounded-xl px-4 py-3"
            >
              <div className="w-8 h-8 bg-gold-dark rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                JH
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Jahangeer</p>
                <p className="text-gold-light text-xs">Loan Advisor · 90593 14625</p>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-navy-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">© 2026 Siri Finance Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="text-gray-500">Registered in India · RBI Compliant · ISO 27001 Certified</p>
        </div>
      </div>
    </footer>
  )
}
